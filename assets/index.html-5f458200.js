import{_ as a,M as d,p as i,q as o,R as n,t as e,N as t,a1 as l}from"./framework-6a63a100.js";const c={},r=n("h2",{id:"在windows上对node进行管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在windows上对node进行管理","aria-hidden":"true"},"#"),e(" 在windows上对node进行管理")],-1),v={href:"https://blog.csdn.net/qq_33745371/article/details/109039414",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 查看当前node版本</span>
    nvm current
    <span class="token comment"># 查看所有可用的node版本</span>
    nvm list available
    <span class="token comment"># 下载具体哪个版本的node</span>
    nvm <span class="token function">install</span> <span class="token number">16.20</span>.0
    <span class="token comment"># 切换node版本</span>
    nvm use <span class="token number">16.20</span>.0
    <span class="token comment"># 查看本地哪些版本</span>
    nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-2-x版本与node版本对应关系" tabindex="-1"><a class="header-anchor" href="#vuepress-2-x版本与node版本对应关系" aria-hidden="true">#</a> vuepress 2.x版本与node版本对应关系</h2><p>使用node v18 vite编译会出错，切换为node v16就不会出错。</p>`,3);function p(u,h){const s=d("ExternalLinkIcon");return i(),o("div",null,[r,n("p",null,[n("a",v,[e("如何在windows下更换node版本"),t(s)])]),m])}const b=a(c,[["render",p],["__file","index.html.vue"]]);export{b as default};
