import{_ as d,r,o,c as l,a as e,b as a,w as c,d as i,e as s}from"./app.2189e4fd.js";var h="/fansMedalHelperVersion/assets/img1.b186c046.png";const u={},p=i(`<h1 id="\u672C\u5730-\u670D\u52A1\u5668\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730-\u670D\u52A1\u5668\u90E8\u7F72" aria-hidden="true">#</a> \u672C\u5730/\u670D\u52A1\u5668\u90E8\u7F72</h1><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u73AF\u5883\u9700\u6C42\uFF1APython \u7248\u672C\u5927\u4E8E 3.8</p></div><h2 id="\u514B\u9686\u9879\u76EE\u5E76\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u9879\u76EE\u5E76\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u514B\u9686\u9879\u76EE\u5E76\u5B89\u88C5\u4F9D\u8D56</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/XiaoMiku01/fansMedalHelper.git
<span class="token builtin class-name">cd</span> fansMedalHelper
pip3 <span class="token function">install</span> -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u586B\u5199\u914D\u7F6E\u6587\u4EF6-users-yaml" tabindex="-1"><a class="header-anchor" href="#\u586B\u5199\u914D\u7F6E\u6587\u4EF6-users-yaml" aria-hidden="true">#</a> \u586B\u5199\u914D\u7F6E\u6587\u4EF6 users.yaml</h2><p>\u590D\u5236 <code>users.example.yaml</code> \u5E76\u547D\u540D\u4E3A <code>users.yaml</code>\uFF0C\u5E76\u586B\u5199 <code>users.yaml</code>\u3002Windows \u4F7F\u7528\u8BB0\u4E8B\u672C\u65B9\u5F0F\u6253\u5F00\uFF0CLinux \u4F7F\u7528\u7528 vim\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> users.example.yaml users.yaml
<span class="token function">vim</span> users.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m=s("\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E\uFF1A"),_=s("\u914D\u7F6E\u6587\u4EF6"),v=i(`<h2 id="\u8FD0\u884C\u4E3B\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u4E3B\u7A0B\u5E8F" aria-hidden="true">#</a> \u8FD0\u884C\u4E3B\u7A0B\u5E8F</h2><h3 id="\u5355\u6B21\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u5355\u6B21\u8FD0\u884C" aria-hidden="true">#</a> \u5355\u6B21\u8FD0\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python main.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u53EA\u8FD0\u884C\u4E00\u6B21\uFF0C\u9700\u8981\u7ED3\u5408<strong>\u4EFB\u52A1\u8BA1\u5212\u7A0B\u5E8F\uFF08Windows\uFF09</strong> \u6216 <strong>crontab \uFF08Linux / macOS\uFF09</strong> \u5B9E\u73B0\u6BCF\u65E5\u5B9A\u65F6\u8C03\u7528\u3002</p><h3 id="\u81EA\u52A8\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u8C03\u5EA6" aria-hidden="true">#</a> \u81EA\u52A8\u8C03\u5EA6</h3><p>\u82E5\u9644\u52A0 <code>--auto</code> \u53C2\u6570\u8FD0\u884C\uFF0C\u5373\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python main.py --auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u8FDB\u5165\u81EA\u52A8\u8C03\u5EA6\u6A21\u5F0F\uFF0C\u6BCF 24 \u5C0F\u65F6\u81EA\u52A8\u8FD0\u884C\u4E00\u6B21\uFF0C\u9700\u8981\u7ED3\u5408\u8FDB\u7A0B\u5B88\u62A4\u5DE5\u5177\u4F7F\u7528\uFF0C\u5982\uFF1A</p>`,8),b={href:"https://pm2.io/",target:"_blank",rel:"noopener noreferrer"},g=s("PM2"),f=s("\uFF1A\u57FA\u4E8E Node.js \u7684\u5B88\u62A4\u8FDB\u7A0B\u548C\u7BA1\u7406\u5DE5\u5177"),x={href:"https://github.com/foreversd/forever",target:"_blank",rel:"noopener noreferrer"},y=s("Forever"),k=s("\uFF1A\u57FA\u4E8E Node.js \u7684\u5B88\u62A4\u8FDB\u7A0B\u548C\u7BA1\u7406\u5DE5\u5177"),E={href:"https://systemd.io/",target:"_blank",rel:"noopener noreferrer"},B=s("systemd"),L=s("\uFF1ALinux \u7CFB\u7EDF\u670D\u52A1\u7BA1\u7406\u5668"),N={href:"http://supervisord.org/",target:"_blank",rel:"noopener noreferrer"},w=s("Supervisor"),M=s("\uFF1A\u8FDB\u7A0B\u5B88\u62A4\u5DE5\u5177"),V=i('<h2 id="\u6548\u679C\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a> \u6548\u679C\u56FE</h2><p><img src="'+h+`" alt=""></p><h2 id="\u66F4\u65B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u65B9\u5F0F" aria-hidden="true">#</a> \u66F4\u65B0\u65B9\u5F0F</h2><p>\u8FDB\u5165\u9879\u76EE\u6587\u4EF6\u5939\u540E\uFF0C\u6267\u884C <code>git pull</code> \u66F4\u65B0\u4EE3\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function H(S,j){const t=r("RouterLink"),n=r("ExternalLinkIcon");return o(),l("div",null,[p,e("p",null,[m,a(t,{to:"/guide/#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E-users-yaml"},{default:c(()=>[_]),_:1})]),v,e("ul",null,[e("li",null,[e("a",b,[g,a(n)]),f]),e("li",null,[e("a",x,[y,a(n)]),k]),e("li",null,[e("a",E,[B,a(n)]),L]),e("li",null,[e("a",N,[w,a(n)]),M])]),V])}var C=d(u,[["render",H],["__file","location.html.vue"]]);export{C as default};
