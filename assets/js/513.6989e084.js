(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{947:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dynamicref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamicref"}},[s._v("#")]),s._v(" DynamicRef "),a("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { DynamicRef } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/mongoose"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.62.6/packages/mongoose/src/decorators/dynamicRef.ts#L0-L0"}},[s._v("/packages/mongoose/src/decorators/dynamicRef.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("function "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("DynamicRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("refPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ntype DynamicRef<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(" = ")]),s._v("T | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("div",{pre:!0},[a("p",[s._v("Define a property as mongoose reference to other Model (decorated with @Model).")]),s._v(" "),a("h3",{pre:!0,attrs:{id:"example"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[a("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[a("code",[s._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FooModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("DynamicRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   field"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" DynamicRef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("OtherFooModel "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" OtherModel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n   @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Enum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OtherFooModel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OtherModel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OtherFooModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OtherModel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("1")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("2")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("3")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("4")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("5")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("6")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("7")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("8")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("9")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("10")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("11")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("12")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("13")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("14")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("15")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("16")]),a("br"),a("span",{pre:!0,attrs:{class:"line-number"}},[s._v("17")]),a("br")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);