import {Enumerable, Storable, Store, Type} from "@tsed/core";
import {ParamTypes} from "./ParamTypes";

export interface IParamConstructorOptions {
  target?: Type<any>;
  propertyKey?: string | symbol;
  index: number;
  required?: boolean;
  expression?: string;
  useType?: Type<any>;
  paramType?: string | ParamTypes;
  pipes?: Type<IPipe>[];
}

export interface IPipe<T = any, R = any> {
  transform(value: T, metadata: ParamMetadata): R;
}

export class ParamMetadata extends Storable implements IParamConstructorOptions {
  /**
   *
   */
  @Enumerable()
  public expression: string;
  /**
   *
   */
  @Enumerable()
  public paramType: string | ParamTypes;

  @Enumerable()
  pipes: Type<IPipe>[] = [];

  constructor(options: IParamConstructorOptions) {
    super(options.target as Type<any>, options.propertyKey!, options.index);

    const {expression, paramType, pipes} = options;

    this.expression = expression || this.expression;
    this.paramType = paramType || this.paramType;
    this.pipes = pipes || [];
  }

  get service(): string {
    return this.paramType;
  }

  set service(service: string) {
    this.paramType = service;
  }

  static get(target: Type<any>, propertyKey: string | symbol, index: number): ParamMetadata {
    const params = this.getParams(target, propertyKey);

    if (!this.has(target, propertyKey, index)) {
      params[index] = new ParamMetadata({target, propertyKey, index});
      this.set(target, propertyKey, index, params[index]);
    }

    return params[index];
  }

  static has(target: Type<any>, propertyKey: string | symbol, index: number) {
    return !!this.getParams(target, propertyKey)[index];
  }

  static set(target: Type<any>, propertyKey: string | symbol, index: number, paramMetadata: ParamMetadata): void {
    const params = this.getParams(target, propertyKey);

    params[index] = paramMetadata;

    Store.fromMethod(target, String(propertyKey)).set("params", params);
  }

  static getParams(target: Type<any>, propertyKey: string | symbol): ParamMetadata[] {
    return Store.fromMethod(target, String(propertyKey)).get<ParamMetadata[]>("params") || [];
  }
}
