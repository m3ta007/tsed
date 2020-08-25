(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{527:function(s,n,a){"use strict";a.r(n);var t=a(43),p=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"jsonschemaregistry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonschemaregistry"}},[s._v("#")]),s._v(" JsonSchemaRegistry "),a("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { JsonSchemaRegistry } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/common"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.62.6/packages/common/src/jsonschema/registries/JsonSchemesRegistry.ts#L0-L0"}},[s._v("/packages/common/src/jsonschema/registries/JsonSchemesRegistry.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" JsonSchemaRegistry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/class/Registry.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Registry")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Partial<"),a("a",{pre:!0,attrs:{href:"/api/common/jsonschema/class/JsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchema")])]),s._v(">> "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    /**\n     *\n     * @param schema\n     * @param type\n     * @param collectionType\n     */\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span> target\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyKey\n * @param type\n * @param collectionType\n * @returns <span class="token punctuation">{</span><a href="/api/common/jsonschema/class/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">}</span>\n */\n<span class="token function">property</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> collectionType?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/common/jsonschema/class/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">;</span>\n/**\n *\n * @param target\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> propertyKey\n * @param value\n */\n<span class="token function">required</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> propertyKey<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> value?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span> target\n * @param options\n * @returns <span class="token punctuation">{</span>JSONSchema6<span class="token punctuation">}</span>\n */\n<span class="token function">getSchemaDefinition</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> options?<span class="token punctuation">:</span> Partial&lt;<a href="/api/common/jsonschema/registries/GetSchemaOptions.html"><span class="token">GetSchemaOptions</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> JSONSchema6<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">}</span> target\n * @param options\n * @returns <span class="token punctuation">{</span>JSONSchema6<span class="token punctuation">}</span>\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><a href="/api/common/jsonschema/class/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">}</span> schema\n * @param options\n */\n\n\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> ref\n * @returns <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span>\n */\n\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> name\n * @returns <span class="token punctuation">{</span><a href="/api/common/jsonschema/class/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">}</span>\n */\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n/**")]),s._v(" "),a("ul",[a("li",[s._v("@deprecated Will be removed in v6.\n*/")])])])])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("div",{pre:!0},[a("p",[s._v("Registry to store all schemes.")]),s._v(" "),a("div",{pre:!0,attrs:{class:"custom-block warning"}},[a("p",{pre:!0,attrs:{class:"custom-block-title"}},[s._v("WARNING")]),s._v(" "),a("p",[s._v("This class will be removed in v6")])])]),a("p",[s._v(":::")])])}),[],!1,null,null,null);n.default=p.exports}}]);