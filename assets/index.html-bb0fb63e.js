import{_ as a,N as i,p as d,q as l,Y as n,t as e,V as c,a1 as o}from"./framework-df18c678.js";const t={},r=n("h2",{id:"在windows上对node进行管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在windows上对node进行管理","aria-hidden":"true"},"#"),e(" 在windows上对node进行管理")],-1),m={href:"https://blog.csdn.net/qq_33745371/article/details/109039414",target:"_blank",rel:"noopener noreferrer"},p=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 查看当前node版本</span>
    nvm current
    <span class="token comment"># 查看所有可用的node版本</span>
    nvm list available
    <span class="token comment"># 下载具体哪个版本的node</span>
    nvm <span class="token function">install</span> <span class="token number">16.20</span>.0
    <span class="token comment"># 切换node版本</span>
    nvm use <span class="token number">16.20</span>.0
    <span class="token comment"># 查看本地哪些版本</span>
    nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-2-x版本与node版本对应关系" tabindex="-1"><a class="header-anchor" href="#vuepress-2-x版本与node版本对应关系" aria-hidden="true">#</a> vuepress 2.x版本与node版本对应关系</h2><p>使用node v18 vite编译会出错，切换为node v16就不会出错。</p><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><h3 id="npm下载指定版本的包" tabindex="-1"><a class="header-anchor" href="#npm下载指定版本的包" aria-hidden="true">#</a> npm下载指定版本的包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 下载指定具体版本号</span>
    <span class="token function">npm</span> <span class="token function">install</span> vue@1.1.0
    <span class="token comment"># 下载1版本中目前最新的版本</span>
    <span class="token function">npm</span> <span class="token function">install</span> vue@1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(u,h){const s=i("ExternalLinkIcon");return d(),l("div",null,[r,n("p",null,[n("a",m,[e("如何在windows下更换node版本"),c(s)])]),p])}const _=a(t,[["render",v],["__file","index.html.vue"]]);export{_ as default};
