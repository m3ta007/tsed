import {JsonSchema} from "../class/JsonSchema";
import {decoratorSchemaFactory} from "../utils/decoratorSchemaFactory";

/**
 * An object instance is valid against `maxProperties` if its number of properties is less than, or equal to, the value of this keyword.
 *
 * ::: warning
 * The value of this keyword MUST be a non-negative integer.
 * :::
 *
 * ::: warning
 * This decorator will be removed in v7.
 * For v6 user, use @@MaxProperties@@ from @tsed/schema instead of @tsed/common.
 * :::
 *
 * ## Example
 * ### On prop
 * ```typescript
 * class Model {
 *    @Any()
 *    @MaxProperties(10)
 *    property: any;
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "any",
 *       "maxProperties": 10
 *     }
 *   }
 * }
 * ```
 *
 * @param {number} maxProperties
 * @validation
 * @swagger
 * @schema
 * @collections
 */
export function MaxProperties(maxProperties: number) {
  if (maxProperties < 0) {
    throw new Error("The value of maxProperties MUST be a non-negative integer.");
  }

  return decoratorSchemaFactory((schema: JsonSchema) => {
    schema.maxProperties = maxProperties;
  });
}
