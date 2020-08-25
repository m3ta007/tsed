(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{944:function(n,s,a){"use strict";a.r(s);var t=a(43),p=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"graphqlservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphqlservice"}},[n._v("#")]),n._v(" GraphQLService "),a("Badge",{attrs:{text:"Service",type:"service"}})],1),n._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[n._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[n._v("import")]),n._v(" { GraphQLService } "),a("span",{staticClass:"token keyword"},[n._v("from")]),n._v(" "),a("span",{staticClass:"token string"},[n._v('"@tsed/graphql"')])])])]),a("tr",[a("th",[n._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.62.6/packages/graphql/src/services/GraphQLService.ts#L0-L0"}},[n._v("/packages/graphql/src/services/GraphQLService.ts")])])])])])]),n._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" GraphQLService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[n._v('httpPort<span class="token punctuation">:</span> <span class="token keyword">string</span> | <span class="token keyword">number</span><span class="token punctuation">;</span>\n/**\n *\n * @type <span class="token punctuation">{</span>Map&lt;<span class="token keyword">any</span><span class="token punctuation">,</span> <span class="token keyword">any</span>&gt;<span class="token punctuation">}</span>\n * @<span class="token keyword">private</span>\n */\n\n<span class="token keyword">constructor</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> <a href="/api/common/platform/services/PlatformApplication.html"><span class="token">PlatformApplication</span></a><span class="token punctuation">,</span> httpServer<span class="token punctuation">:</span> <a href="/api/common/platform-builder/decorators/HttpServer.html"><span class="token">HttpServer</span></a><span class="token punctuation">,</span> injectorService<span class="token punctuation">:</span> <a href="/api/di/services/InjectorService.html"><span class="token">InjectorService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span>Promise&lt;ApolloServer&gt;<span class="token punctuation">}</span>\n */\n<span class="token function">createServer</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> settings<span class="token punctuation">:</span> <a href="/api/graphql/interfaces/IGraphQLSettings.html"><span class="token">IGraphQLSettings</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n/**\n * Create a new type-graphql <a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a> and bind it with Ts.ED injector.\n * @param buildSchemaOptions\n */\n<span class="token function">createSchema</span><span class="token punctuation">(</span>buildSchemaOptions<span class="token punctuation">:</span> BuildSchemaOptions<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise&lt;GraphQLSchema&gt;<span class="token punctuation">;</span>\n/**\n * <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> an instance of ApolloServer <span class="token keyword">from</span> his id\n * @returns ApolloServer\n */\n<span class="token function">get</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> ApolloServer | undefined<span class="token punctuation">;</span>\n/**\n * <a href="/api/common/mvc/decorators/method/Get.html"><span class="token">Get</span></a> an instance of GraphQL schema <span class="token keyword">from</span> his id\n * @returns GraphQLSchema\n */\n<span class="token function">getSchema</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> GraphQLSchema | undefined<span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> id\n * @returns <span class="token punctuation">{</span><span class="token keyword">boolean</span><span class="token punctuation">}</span>\n */\n<span class="token function">has</span><span class="token punctuation">(</span>id?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n */\n<span class="token keyword">protected</span> <span class="token function">getResolvers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">protected</span> <span class="token function">getDataSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>serviceName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> DataSource<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n/**\n * create a new dataSources function to use with apollo server config\n * @param dataSources\n * @param serverConfigSources\n */\n<span class="token keyword">protected</span> <span class="token function">createDataSources</span><span class="token punctuation">(</span>dataSources<span class="token punctuation">:</span> Function | undefined<span class="token punctuation">,</span> serverConfigSources<span class="token punctuation">:</span> Function | undefined<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">any</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")])])])])]),a("p")])}),[],!1,null,null,null);s.default=p.exports}}]);