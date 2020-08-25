(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{462:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iloggersettings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iloggersettings"}},[t._v("#")]),t._v(" ILoggerSettings "),a("Badge",{attrs:{text:"Interface",type:"interface"}})],1),t._v(" "),a("section",{staticClass:"symbol-info"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[t._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { ILoggerSettings } "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),a("tr",[a("th",[t._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.62.6/packages/common/src/config/interfaces/ILoggerSettings.ts#L0-L0"}},[t._v("/packages/common/src/config/interfaces/ILoggerSettings.ts")])])])])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" ILoggerSettings "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    /**\n     * Enable debug mode. By default debug is false.\n     */\n    debug?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Enable info mode. By default debug is false.\n     */\n    level?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),t._v(' | "info" | "warn" | "error" | "off"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Fields displayed when a request is logged. Possible values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" `reqId`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `method`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `url`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `headers`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `body`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `query`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("`params`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `duration`.\n     */\n    requestFields?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"reqId" | "method" | "url" | "headers" | "body" | "query" | "params" | "duration" | '),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * List of regexp to ignore log.\n     */\n    ignoreUrlPatterns?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Log all incoming request. By default is true and print the configured `logger.requestFields`.\n     */\n    logRequest?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Log start of all incoming request. By default is true\n     */\n    logStart?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Log end of all incoming request. By default is true\n     */\n    logEnd?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * The "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),t._v(" of space characters to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" white space in JSON output. "),a("a",{pre:!0,attrs:{href:"/api/common/jsonschema/decorators/Default.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Default")])]),t._v(" is 2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0 in production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    jsonIndentation?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * A function called for each incoming request to create a request id.\n     * @returns "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     */\n    reqIdBuilder?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" => "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Disable routes table displayed in the logger. By default debug is `false`.\n     */\n    disableRoutesSummary?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Specify log format. "),a("a",{pre:!0,attrs:{href:"/api/swagger/decorators/Example.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Example")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" `%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("%d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("yyyy-MM-dd hh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("SSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" %p%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" %m`. See "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@tsed/logger configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//typedproject.github.io/logger/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n     */\n    format?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    /**\n     * Specify the log stack size for the context.logger. When the stack.length is reach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the logger is flushed during the request.\n     * "),a("a",{pre:!0,attrs:{href:"/api/common/jsonschema/decorators/Default.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[t._v("Default")])]),t._v(" size is set to 30.\n     */\n    maxStackSize?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);