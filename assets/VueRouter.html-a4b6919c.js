import{_ as c,N as r,p,q as l,V as s,P as e,a1 as u,Y as a,t as n}from"./framework-e2feaeec.js";const i={},d=u('<h1 id="vuerouter" tabindex="-1"><a class="header-anchor" href="#vuerouter" aria-hidden="true">#</a> VueRouter</h1><h2 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转" aria-hidden="true">#</a> 路由跳转</h2><blockquote><p>路由跳转的方式有两种，一种根据name进行隐式的params传递，另一种是根据path路径进行的显式query传递。</p></blockquote><h3 id="_1、name跳转页面" tabindex="-1"><a class="header-anchor" href="#_1、name跳转页面" aria-hidden="true">#</a> 1、name跳转页面</h3>',4),k=a("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[a("pre",{class:"language-javascript"},[a("code",null,[a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),n("$router"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),a("span",{class:"token literal-property property"},"name"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'anotherPage'"),a("span",{class:"token punctuation"},","),a("span",{class:"token literal-property property"},"params"),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token literal-property property"},"id"),a("span",{class:"token operator"},":"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),h=a("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[a("pre",{class:"language-javascript"},[a("code",null,[a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),n("$route"),a("span",{class:"token punctuation"},"."),n("params"),a("span",{class:"token punctuation"},"."),n(`id
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),_=a("h3",{id:"_2、path跳转页面",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2、path跳转页面","aria-hidden":"true"},"#"),n(" 2、path跳转页面")],-1),m=a("p",null,"path跳转会将参数显示到url上。",-1),v=a("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[a("pre",{class:"language-javascript"},[a("code",null,[a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),n("$router"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),a("span",{class:"token literal-property property"},"path"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'/anotherPage'"),a("span",{class:"token punctuation"},","),a("span",{class:"token literal-property property"},"query"),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token literal-property property"},"id"),a("span",{class:"token operator"},":"),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),b=a("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[a("pre",{class:"language-javascript"},[a("code",null,[a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),n("$route"),a("span",{class:"token punctuation"},"."),n("query"),a("span",{class:"token punctuation"},"."),n(`id
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1);function g(f,y){const t=r("CodeGroupItem"),o=r("CodeGroup");return p(),l("div",null,[d,s(o,null,{default:e(()=>[s(t,{title:"跳转动作"},{default:e(()=>[k]),_:1}),s(t,{title:"接收动作"},{default:e(()=>[h]),_:1})]),_:1}),_,m,s(o,null,{default:e(()=>[s(t,{title:"跳转动作"},{default:e(()=>[v]),_:1}),s(t,{title:"接收动作"},{default:e(()=>[b]),_:1})]),_:1})])}const j=c(i,[["render",g],["__file","VueRouter.html.vue"]]);export{j as default};