import{_ as n,M as l,p as i,q as s,R as e,t as a,N as r,a1 as o}from"./framework-6a63a100.js";const d={},c=e("blockquote",null,[e("p",null,"Jmeter是Apache公司的一个开源项目，可做性能测试或接口测试。")],-1),h=e("h2",{id:"一、jmeter安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、jmeter安装","aria-hidden":"true"},"#"),a(" 一、Jmeter安装")],-1),u={href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"解压至非中文目录")],-1),_=o(`<h2 id="二、设置环境变量" tabindex="-1"><a class="header-anchor" href="#二、设置环境变量" aria-hidden="true">#</a> 二、设置环境变量</h2><ol><li>设置用户变量JMETER_HOME<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\apache-jmeter-5.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>新增系统变量CLASSPATH（分号自行判断）<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%JMETER_HOME%\\lib\\ext\\ApacheJMeter_core.jar;%JMETER_HOME%\\lib\\jorphan.jar;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>修改系统变量PATH（分号自行判断）<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%JMETER_HOME%\\bin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="三、设置中文环境" tabindex="-1"><a class="header-anchor" href="#三、设置中文环境" aria-hidden="true">#</a> 三、设置中文环境</h2><ol><li><strong>临时设置</strong><br> 在软件中option下点击change language即可</li><li><strong>永久设置</strong><br> 在解压路径/bin/目录下，修改jmeter.properties,37行下添加<code>language=zh_CN</code></li></ol><h2 id="四、使用jmeter" tabindex="-1"><a class="header-anchor" href="#四、使用jmeter" aria-hidden="true">#</a> 四、使用Jmeter</h2><ol><li>双击解压路径/bin/jmeter.bat</li><li>右击环境添加线程组</li><li>右击线程组添加http请求</li><li>选中线程组可设置请求频率</li></ol><h2 id="五、断言判断" tabindex="-1"><a class="header-anchor" href="#五、断言判断" aria-hidden="true">#</a> 五、断言判断</h2><ul><li>http请求右键可以设置JSON断言、查看结果树<br><ul><li>JSON断言需要设置<strong>Assert JSON Path exist</strong>例如 <code>$..xxx</code>，并且选中<strong>Additionally assert value</strong>，在expected value中填入期望的结果内容。<br></li><li>如果不需要具体结果的话，可以判断非空，选中<strong>expect null</strong>是判空，接着选中<strong>Invert assertion</strong>是判断非空。</li></ul></li></ul><h2 id="参考网站" tabindex="-1"><a class="header-anchor" href="#参考网站" aria-hidden="true">#</a> 参考网站</h2>`,9),g={href:"https://zhuanlan.zhihu.com/p/142897766",target:"_blank",rel:"noopener noreferrer"};function p(x,b){const t=l("ExternalLinkIcon");return i(),s("div",null,[c,h,e("ol",null,[e("li",null,[e("p",null,[a("下载最新Jmeter "),e("a",u,[a("Jmeter下载地址"),r(t)])])]),m]),_,e("ul",null,[e("li",null,[e("a",g,[a("知乎笔记"),r(t)])])])])}const f=n(d,[["render",p],["__file","jmeter.html.vue"]]);export{f as default};