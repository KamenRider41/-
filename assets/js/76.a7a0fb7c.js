(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{519:function(t,s,a){"use strict";a.r(s);var e=a(38),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试题三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题三"}},[t._v("#")]),t._v(" 面试题三 ⭐️")]),t._v(" "),a("h2",{attrs:{id:"_1-vue项目中如何解决跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue项目中如何解决跨域问题"}},[t._v("#")]),t._v(" 1.vue项目中如何解决跨域问题？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("h4",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[t._v("CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的HTTP头组成，这些HTTP头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应")]),t._v(" "),a("ul",[a("li",[t._v("直接设置Access-Control-Allow-Origin")])]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT, POST, GET, DELETE, OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),a("ul",[a("li",[t._v("框架内配置代理(target,changeOrigin,pathRewrite,baseURL)")]),t._v(" "),a("li",[t._v("服务端代理请求转发(target,changeOrigin)")]),t._v(" "),a("li",[t._v("nginx反向代理")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("server {\n    listen    80;\n    # server_name www.josephxia.com;\n    location / {\n        root  /var/www/html;\n        index  index.html index.htm;\n        try_files $uri $uri/ /index.html;\n    }\n    location /api {\n        proxy_pass  http://127.0.0.1:3000;\n        proxy_redirect   off;\n        proxy_set_header  Host       $host;\n        proxy_set_header  X-Real-IP     $remote_addr;\n        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;\n    }\n}\n")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-你是怎么处理vue项目中的错误的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-你是怎么处理vue项目中的错误的"}},[t._v("#")]),t._v(" 2.你是怎么处理vue项目中的错误的？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[t._v("错误来源包括：")]),t._v(" "),a("ul",[a("li",[t._v("后端接口错误(接口拦截器，apifox，mock)")]),t._v(" "),a("li",[t._v("代码中本身逻辑错误(errorHandler可获取错误信息和 Vue 实例)")])])]),t._v(" "),a("h2",{attrs:{id:"_3-vue3了解过吗-能说说跟vue2的区别吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue3了解过吗-能说说跟vue2的区别吗"}},[t._v("#")]),t._v(" 3.Vue3了解过吗？能说说跟Vue2的区别吗？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("h4",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("p",[t._v("proxy代理，数据响应方式更好了")]),t._v(" "),a("h4",{attrs:{id:"速度更快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#速度更快"}},[t._v("#")]),t._v(" 速度更快")]),t._v(" "),a("ul",[a("li",[t._v("重写了虚拟dom")]),t._v(" "),a("li",[t._v("编译模板的优化")]),t._v(" "),a("li",[t._v("更高效的组件初始化")]),t._v(" "),a("li",[t._v("update性能提高")]),t._v(" "),a("li",[t._v("ssr速度提高")])]),t._v(" "),a("h4",{attrs:{id:"体积减少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#体积减少"}},[t._v("#")]),t._v(" 体积减少")]),t._v(" "),a("ul",[a("li",[t._v("引入tree-shaking")])]),t._v(" "),a("h4",{attrs:{id:"更易维护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更易维护"}},[t._v("#")]),t._v(" 更易维护")]),t._v(" "),a("ul",[a("li",[t._v("setup")])]),t._v(" "),a("h4",{attrs:{id:"更接近原生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更接近原生"}},[t._v("#")]),t._v(" 更接近原生")]),t._v(" "),a("ul",[a("li",[t._v("函数式编程")])]),t._v(" "),a("h4",{attrs:{id:"更易使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更易使用"}},[t._v("#")]),t._v(" 更易使用")])]),t._v(" "),a("h2",{attrs:{id:"_4-vue3-0为什么要用proxy-替代defineproperty-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue3-0为什么要用proxy-替代defineproperty-api"}},[t._v("#")]),t._v(" 4.Vue3.0为什么要用Proxy 替代defineProperty API？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("ul",[a("li",[t._v("检测不到对象属性的添加和删除")]),t._v(" "),a("li",[t._v("数组API方法无法监听到")]),t._v(" "),a("li",[t._v("需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题\nProxy(ES6)")])])]),t._v(" "),a("h2",{attrs:{id:"_5-vue3-0所采用的composition-api与vue2-x使用的options-api有什么不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue3-0所采用的composition-api与vue2-x使用的options-api有什么不同"}},[t._v("#")]),t._v(" 5.Vue3.0所采用的Composition Api与Vue2.x使用的Options Api有什么不同?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[t._v("百变小樱,奥特徽章")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("vue2")]),t._v(" "),a("ul",[a("li",[t._v("代码的可读性随着组件变大而变差")]),t._v(" "),a("li",[t._v("每一种代码复用的方式，都存在缺点")]),t._v(" "),a("li",[t._v("typescript支持有限")])])]),t._v(" "),a("li",[a("p",[t._v("在逻辑组织和逻辑复用方面，Composition API是优于Options API(hook)")])]),t._v(" "),a("li",[a("p",[t._v("因为Composition API几乎是函数，会有更好的类型推断。")])]),t._v(" "),a("li",[a("p",[t._v("Composition API 对 tree-shaking 友好，代码也更容易压缩")])]),t._v(" "),a("li",[a("p",[t._v("Composition API中见不到this的使用，减少了this指向不明的情况")])]),t._v(" "),a("li",[a("p",[t._v("如果是小型组件，可以继续使用Options API，也是十分友好的")])])])]),t._v(" "),a("h2",{attrs:{id:"_6-vue3-0中treeshaking特性式什么-并举例进行说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue3-0中treeshaking特性式什么-并举例进行说明"}},[t._v("#")]),t._v(" 6.Vue3.0中Treeshaking特性式什么，并举例进行说明？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[t._v("树欲静而风不止，直到树叶摇曳的飘落，我才意识到，落叶归根的奉献伟大\n无非就是做了两件事：")]),t._v(" "),a("ul",[a("li",[t._v("编译阶段利用ES6 Module判断哪些模块已经加载")]),t._v(" "),a("li",[t._v("判断那些模块和变量未被使用或者引用，进而删除对应代码")])])]),t._v(" "),a("h2",{attrs:{id:"_7-ssr是什么-vue中怎么实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-ssr是什么-vue中怎么实现"}},[t._v("#")]),t._v(" 7.SSR是什么？Vue中怎么实现？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[a("code",[t._v("Server-Side Rendering")]),t._v("称其为 "),a("code",[t._v("SSR")]),t._v("，意为服务端渲染\n先来看看web3个阶段的发展史：")]),t._v(" "),a("ul",[a("li",[t._v("传统服务端渲染SSR")]),t._v(" "),a("li",[t._v("单页面应用SPA")]),t._v(" "),a("li",[t._v("服务端渲染SSR")])])]),t._v(" "),a("h2",{attrs:{id:"_8-虚拟dom一定更快吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-虚拟dom一定更快吗"}},[t._v("#")]),t._v(" 8.虚拟DOM一定更快吗？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[t._v("干前端的都知道DOM操作是性能杀手，因为操作DOM会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少DOM的操作要划算的多。\n“使用虚拟DOM会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作DOM更快。")])]),t._v(" "),a("h2",{attrs:{id:"_9-你对vue中keep-alive的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-你对vue中keep-alive的理解"}},[t._v("#")]),t._v(" 9.你对Vue中keep-alive的理解？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[t._v("keepalive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染，也就是所谓的组件缓存(保存输入等)")]),t._v(" "),a("ul",[a("li",[t._v("include和exclude指定是否缓存某些组件")])])]),t._v(" "),a("h2",{attrs:{id:"_10-vuex是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-vuex是什么"}},[t._v("#")]),t._v(" 10.vuex是什么？")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看答案")]),t._v(" "),a("p",[t._v("Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化")])])])}),[],!1,null,null,null);s.default=r.exports}}]);