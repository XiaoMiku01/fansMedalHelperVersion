import{_ as o,r as l,o as c,c as r,a as s,b as e,w as d,d as a,e as n}from"./app.2189e4fd.js";var p="/fansMedalHelperVersion/assets/image7.d102fc54.png";const u={},m=a('<h1 id="docker-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a> Docker \u90E8\u7F72</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C<strong>\u8BBF\u95EE DockerHub \u4E0D\u901A\u7545</strong>\u6216<strong>\u5BBF\u4E3B\u673A\u4E3A arm \u67B6\u6784</strong>\uFF0C\u53EF\u4F7F\u7528\u652F\u6301\u591A\u67B6\u6784\u7684\u56FD\u5185\u955C\u50CF <code>registry.cn-shanghai.aliyuncs.com/xm798/fansmedalhelper:latest</code> \u66FF\u6362 <code>xiaomiku01/fansmedalhelper:latest</code>\u3002</p></div><h2 id="\u914D\u7F6E\u7528\u6237\u4FE1\u606F\u5E76\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7528\u6237\u4FE1\u606F\u5E76\u8FD0\u884C" aria-hidden="true">#</a> \u914D\u7F6E\u7528\u6237\u4FE1\u606F\u5E76\u8FD0\u884C</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u82E5\u586B\u5199 CRON \u8868\u8FBE\u5F0F\uFF0C\u5219\u6309\u7167\u6307\u5B9A\u65F6\u95F4\u8FD0\u884C\uFF1B</p><p>\u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u6309\u7167\u5BB9\u5668\u542F\u52A8\u65F6\u95F4\uFF0C\u6BCF 24 \u5C0F\u65F6\u8FD0\u884C\u4E00\u6B21\u3002</p></div><h3 id="\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u914D\u7F6E\u6587\u4EF6</h3>',5),h=n("\u4E0B\u8F7D "),v={href:"https://github.com/XiaoMiku01/fansMedalHelper/blob/master/users.example.yaml",target:"_blank",rel:"noopener noreferrer"},k=n("\u914D\u7F6E\u6587\u4EF6"),b=n(" \u5E76\u91CD\u547D\u540D\u4E3A "),_=s("code",null,"users.yaml",-1),g=n("\uFF0C\u4F9D\u636E "),f=n("\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E"),y=n(" \u586B\u5199\u5404\u9879\u5185\u5BB9\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u914D\u7F6E\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"),x=a(`<li><p>\u8FD0\u884C\u5BB9\u5668\uFF0C\u5176\u4E2D <code>/path-to-your-config/users.yaml</code> \u66FF\u6362\u4E3A <strong>\u914D\u7F6E\u6587\u4EF6\u7684\u672C\u5730\u7EDD\u5BF9\u8DEF\u5F84</strong>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
-v /path-to-your-config/users.yaml:/app/fansMedalHelper/users.yaml <span class="token punctuation">\\</span>
--name fansmedalhelper <span class="token punctuation">\\</span>
xiaomiku01/fansmedalhelper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),E=s("h3",{id:"\u4F7F\u7528\u73AF\u5883\u53D8\u91CF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4F7F\u7528\u73AF\u5883\u53D8\u91CF","aria-hidden":"true"},"#"),n(" \u4F7F\u7528\u73AF\u5883\u53D8\u91CF")],-1),R=n("\u590D\u5236\u586B\u5199\u597D\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u7528 "),q={href:"https://www.convertjson.com/yaml-to-json.htm",target:"_blank",rel:"noopener noreferrer"},B=n("yaml-to-json"),M=n(" \u5C06 yaml \u683C\u5F0F\u6587\u4EF6\u8F6C\u6362\u6210 json \u683C\u5F0F\u3002"),S=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"\u6CE8\u610F"),s("p",null,[n("\u9700\u52FE\u9009\u53F3\u8FB9\u7684 "),s("code",null,"Minimize JSON"),n(" \u4EE5\u538B\u7F29 JSON")])],-1),O=s("p",null,[s("img",{src:p,alt:"yaml-to-json"})],-1),H=a(`<li><p>\u8FD0\u884C\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">USERS</span><span class="token operator">=</span><span class="token string">&#39;&lt;\u8FD9\u91CC\u586B\u5199\u521A\u521A\u8F6C\u6362\u7684 json \u683C\u5F0F\u5B57\u7B26\u4E32&gt;&#39;</span> <span class="token punctuation">\\</span>
--restart unless-stopped <span class="token punctuation">\\</span>
--name fansmedalhelper <span class="token punctuation">\\</span>
xiaomiku01/fansmedalhelper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>json \u5B57\u7B26\u4E32\u5FC5\u987B\u7528\u5355\u5F15\u53F7\u62EC\u8D77\u6765\uFF0C\u5426\u5219\u65E0\u6CD5\u8BC6\u522B\u3002</p></div><p>\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">USERS</span><span class="token operator">=</span><span class="token string">&#39;{&quot;users&quot;: [{&quot;user_id&quot;: &quot;123456789&quot;, &quot;access_key&quot;: &quot;123456789&quot;, &quot;secret_key&quot;: &quot;123456789&quot;}]}&#39;</span> <span class="token punctuation">\\</span>
--restart unless-stopped <span class="token punctuation">\\</span>
--name fansmedalhelper <span class="token punctuation">\\</span>
xiaomiku01/fansmedalhelper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),I=a(`<h2 id="compose-\u90E8\u7F72\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#compose-\u90E8\u7F72\u5BB9\u5668" aria-hidden="true">#</a> Compose \u90E8\u7F72\u5BB9\u5668</h2><ol><li><p>\u65B0\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u6839\u636E\u4E0A\u9762 <a href="#%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6</a> \u90E8\u5206\uFF0C\u4E0B\u8F7D\u5E76\u586B\u5199\u914D\u7F6E\u6587\u4EF6\uFF0C\u547D\u540D\u4E3A <code>users.yaml</code> \u653E\u7F6E\u4E8E\u76EE\u5F55\u4E2D\u3002</p></li><li><p>\u7EE7\u7EED\u5728\u8BE5\u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA <code>docker-compose.yaml</code> \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">fansmedalhelper</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> fansmedalhelper
    <span class="token key atrule">image</span><span class="token punctuation">:</span> xiaomiku01/fansmedalhelper<span class="token punctuation">:</span>latest
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./users.yaml<span class="token punctuation">:</span>/app/fansMedalHelper/users.yaml
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MIRRORS=1 <span class="token comment"># \u4F7F\u7528\u955C\u50CF</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> compose up -d
<span class="token comment"># \u6216 docker-compose up -d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> logs -f fansmedalhelper
<span class="token comment"># \u7ED3\u675F\u6309 Ctrl-C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u65B9\u5F0F" aria-hidden="true">#</a> \u66F4\u65B0\u65B9\u5F0F</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6BCF\u6B21\u5BB9\u5668\u542F\u52A8\u540E\u90FD\u4F1A\u81EA\u52A8\u62C9\u53D6\u6700\u65B0\u4EE3\u7801\uFF0C\u6240\u6709\u53EA\u9700\u8981\u91CD\u542F\u5BB9\u5668\u5373\u53EF\u3002</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> restart fansmedalhelper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u4ED3\u5E93\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4ED3\u5E93\u955C\u50CF" aria-hidden="true">#</a> \u4F7F\u7528\u4ED3\u5E93\u955C\u50CF</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u5927\u9646\u5730\u533A\u8BBF\u95EE GitHub \u4E0D\u901A\u7545\u5BFC\u81F4\u66F4\u65B0\u5931\u8D25\uFF0C\u53EF\u4EE5\u914D\u7F6E\u4ED3\u5E93\u955C\u50CF\u3002</p></div><p>\u5728\u8FD0\u884C docker \u547D\u4EE4\u884C\u65F6\u6DFB\u52A0\u5982\u4E0B\u73AF\u5883\u53D8\u91CF\uFF1A</p>`,10),j=s("code",null,"-e MIRRORS=1",-1),w=n(" \u4F7F\u7528 "),C={href:"https://ghproxy.com/",target:"_blank",rel:"noopener noreferrer"},D=n("GHProxy"),N=s("code",null,"-e MIRRORS=2",-1),V=n(" \u4F7F\u7528 "),A={href:"http://fastgit.org/",target:"_blank",rel:"noopener noreferrer"},L=n("FastGIT"),F=s("li",null,[s("code",null,"-e MIRRORS=custom -e CUSTOM_REPO=https://gitee.com/user/repo"),n(" \u4F7F\u7528\u81EA\u5B9A\u4E49\u955C\u50CF")],-1),G=a(`<p>\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
-v /path-to-your-config/users.yaml:/app/fansMedalHelper/users.yaml <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MIRRORS</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
--name fansmedalhelper <span class="token punctuation">\\</span>
xiaomiku01/fansmedalhelper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function T(U,J){const t=l("ExternalLinkIcon"),i=l("RouterLink");return c(),r("div",null,[m,s("ol",null,[s("li",null,[s("p",null,[h,s("a",v,[k,e(t)]),b,_,g,e(i,{to:"/guide/#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E-users-yaml"},{default:d(()=>[f]),_:1}),y])]),x]),E,s("ol",null,[s("li",null,[s("p",null,[R,s("a",q,[B,e(t)]),M]),S,O]),H]),I,s("ul",null,[s("li",null,[j,w,s("a",C,[D,e(t)])]),s("li",null,[N,V,s("a",A,[L,e(t)])]),F]),G])}var z=o(u,[["render",T],["__file","docker.html.vue"]]);export{z as default};
