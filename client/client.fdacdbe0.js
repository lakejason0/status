function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,i){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=a(e,n,s,i);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function $(){return b(" ")}function v(){return b("")}function w(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function y(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:_(t,s,e[s])}function S(t){return Array.from(t.childNodes)}function T(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?g(e):m(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return b(e)}function P(t){return x(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}let L,N;function R(){if(void 0===L){L=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){L=!0}}return L}function I(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=R();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=w(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=w(n.contentWindow,"resize",e)}),f(t,n),()=>{(s||r&&n.contentWindow)&&r(),d(n)}}function H(t,e=document.body){return Array.from(e.querySelectorAll(t))}class j{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)h(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(d)}}function O(t){N=t}function C(){if(!N)throw new Error("Function called outside component initialization");return N}function U(t){C().$$.on_mount.push(t)}function M(t){C().$$.after_update.push(t)}function G(t){C().$$.on_destroy.push(t)}const D=[],q=[],W=[],z=[],B=Promise.resolve();let K=!1;function J(t){W.push(t)}let V=!1;const F=new Set;function Y(){if(!V){V=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];O(e),Q(e.$$)}for(O(null),D.length=0;q.length;)q.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];F.has(e)||(F.add(e),e())}W.length=0}while(D.length);for(;z.length;)z.pop()();K=!1,V=!1,F.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const X=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||r(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(X.delete(t),t.i(e))}function st(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),Z.c.push((()=>{X.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function rt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function it(t){t&&t.c()}function at(t,e){t&&t.l(e)}function ct(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||J((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(J)}function lt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(D.push(t),K||(K=!0,B.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,o,i,a,c,l=[-1]){const u=N;O(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:l,skip_bound:!1};let h=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&ut(e,t)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=S(n.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),Y()}O(u)}class ht{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function pt(e,n=t){let s;const r=[];function o(t){if(i(e,t)&&(e=t,s)){const t=!dt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.push(c),1===r.length&&(s=n(o)||t),i(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const mt={};var gt={owner:"lakejason0",repo:"status",sites:[{name:"存档计划（MediaWiki）",url:"https://files.lakejason0.ml"},{name:"Lake桑的存档馆（WordPress.com）",url:"https://lakejason0.wordpress.com"},{name:"静态主页（Static）",url:"https://lakejason0.ml"},{name:"Lake桑的存档馆（GitHub.io）",url:"https://lakejason0.github.io"},{name:"存档计划（Wiki.js）（未启用）",url:"$SECRET_SITE"}],assignees:["lakejason0"],"status-website":{cname:"status.lakejason0.ml",logoUrl:"https://files.lakejason0.ml/images/6/6f/Logo.svg",name:"存档计划 - 服务状态",introTitle:"欢迎来到 Project Archive Service Status。",introMessage:"您可以在这个第三方服务中查看我所有 Web 服务的运作情况。",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"},{title:"返回存档计划（MediaWiki）",href:"https://files.lakejason0.ml"}]},i18n:{activeIncidents:"活跃事故",allSystemsOperational:"所有系统均正常",incidentReport:"#$NUMBER 号事故报告 →",activeIncidentSummary:"开始于 $DATE · 有 $POSTS 则跟进",incidentTitle:"#$NUMBER 号事故细节",incidentDetails:"事故细节",incidentFixed:"已修复",incidentOngoing:"持续中",incidentOpenedAt:"开始于",incidentClosedAt:"结束于",incidentSubscribe:"关注跟进",incidentViewOnGitHub:"在 GitHub 上查看",incidentCommentSummary:"$DATE · $AUTHOR",incidentBack:"← 返回至所有事故",pastIncidents:"过去的事故",pastIncidentsResolved:"解决时间 $MINUTES 分钟 · $POSTS 则跟进",liveStatus:"实时状态",overallUptime:"总计在线时间：$UPTIME",overallUptimeTitle:"总计在线时间",averageResponseTime:"平均延迟：$TIMEms",averageResponseTimeTitle:"平均延迟",sevelDayResponseTime:"延迟时间（7 天）图表",responseTimeMs:"延迟时间（毫秒）",up:"🟩 正常",down:"🟥 下线",degraded:"🟨 出现问题",ms:"ms",loading:"加载中",navGitHub:"GitHub",footer:"本页面[开放源代码]($REPO) · 由 [Upptime](https://upptime.js.org) 提供支持",rateLimitExceededTitle:"已超过速率限制",rateLimitExceededIntro:"您已经超过了这个小时可以发送的请求的限制。因此，在您再次访问本网站前，您需要等待。或者，您也可以添加一个 GitHub Personal Access Token（GitHub 个人访问密钥）来继续使用本网站。",rateLimitExceededWhatDoesErrorMean:"这个错误是什么意思？",rateLimitExceededErrorMeaning:"本网站使用 GitHub API 来访问我们的网站的实时状态数据。GitHub 默认允许每一个 IP 地址每小时发送 60 个请求，然而您已经超过了这个限制。",rateLimitExceededErrorHowCanFix:"如何修复？",rateLimitExceededErrorFix:"您可以再等待一个小时。这样，您的 IP 地址的限制就会恢复正常。或者，您也可以添加一个 GitHub Personal Access Token（GitHub 个人访问密钥），这样可以放宽您的限制到 5000 次。",rateLimitExceededGeneratePAT:"了解如何添加 GitHub Personal Access Token（GitHub 个人访问密钥）",rateLimitExceededHasSet:"GitHub Personal Access Token（GitHub 个人访问密钥）已设置。",rateLimitExceededRemoveToken:"移除密钥",rateLimitExceededGitHubPAT:"GitHub Personal Access Token（GitHub 个人访问密钥）",rateLimitExceededCopyPastePAT:"复制粘贴您的密钥",rateLimitExceededSaveToken:"保存密钥",errorTitle:"错误",errorIntro:"尝试拉取最新的状态细节时发生了错误。",errorText:"请稍后再试。",errorHome:"带我回家",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled",url:"URL",status:"状态",history:"历史",responseTime:"延迟时间",responseTimeGraphAlt:"延迟时间图表",responseTimeDay:"24小时延迟时间",responseTimeWeek:"7天延迟时间",responseTimeMonth:"30天延迟时间",responseTimeYear:"1年延迟时间",uptime:"全时段在线时间",uptimeDay:"24小时在线时间",uptimeWeek:"7天在线时间",uptimeMonth:"30天在线时间",uptimeYear:"1年在线时间",liveStatusHtmlComment:"\x3c!--live status--\x3e",degradedPerformance:"🟨 性能降级",completeOutage:"🟥 服务完全中断",partialOutage:"🟧 服务部分中断",duration24H:"24小时",duration7D:"7天",duration30D:"30天",duration1Y:"1年",durationAll:"全时段"},path:"https://status.lakejason0.ml"};function bt(t,e,n){const s=t.slice();return s[1]=e[n],s}function $t(e){let n,s,r,o=gt["status-website"]&&!gt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=m("img"),this.h()},l(t){n=T(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(s=gt["status-website"].logoUrl)&&_(n,"src",s),_(n,"class","svelte-a08hsz")},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}(),i=gt["status-website"]&&!gt["status-website"].hideNavTitle&&function(e){let n,s,r=gt["status-website"].name+"";return{c(){n=m("div"),s=b(r)},l(t){n=T(t,"DIV",{});var e=S(n);s=x(e,r),e.forEach(d)},m(t,e){h(t,n,e),f(n,s)},p:t,d(t){t&&d(n)}}}();return{c(){n=m("div"),s=m("a"),o&&o.c(),r=$(),i&&i.c(),this.h()},l(t){n=T(t,"DIV",{});var e=S(n);s=T(e,"A",{href:!0,class:!0});var a=S(s);o&&o.l(a),r=P(a),i&&i.l(a),a.forEach(d),e.forEach(d),this.h()},h(){_(s,"href",gt["status-website"].logoHref||gt.path),_(s,"class","logo svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),o&&o.m(s,null),f(s,r),i&&i.m(s,null)},p(t,e){gt["status-website"]&&!gt["status-website"].hideNavLogo&&o.p(t,e),gt["status-website"]&&!gt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&d(n),o&&o.d(),i&&i.d()}}}function vt(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=m("li"),n=m("a"),s=b(i),o=$(),this.h()},l(t){e=T(t,"LI",{});var r=S(e);n=T(r,"A",{"aria-current":!0,href:!0,class:!0});var a=S(n);s=x(a,i),a.forEach(d),o=P(r),r.forEach(d),this.h()},h(){_(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),_(n,"href",t[1].href.replace("$OWNER",gt.owner).replace("$REPO",gt.repo)),_(n,"class","svelte-a08hsz")},m(t,r){h(t,e,r),f(e,n),f(n,s),f(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&_(n,"aria-current",r)},d(t){t&&d(e)}}}function wt(e){let n,s,r,o,i,a=gt["status-website"]&&gt["status-website"].logoUrl&&$t(),c=gt["status-website"]&&gt["status-website"].navbar&&function(t){let e,n=gt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=vt(bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(1&r){let o;for(n=gt["status-website"].navbar,o=0;o<n.length;o+=1){const i=bt(t,n,o);s[o]?s[o].p(i,r):(s[o]=vt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),l=gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&function(e){let n,s,r,o=gt.i18n.navGitHub+"";return{c(){n=m("li"),s=m("a"),r=b(o),this.h()},l(t){n=T(t,"LI",{});var e=S(n);s=T(e,"A",{href:!0,class:!0});var i=S(s);r=x(i,o),i.forEach(d),e.forEach(d),this.h()},h(){_(s,"href",`https://github.com/${gt.owner}/${gt.repo}`),_(s,"class","svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),f(s,r)},p:t,d(t){t&&d(n)}}}();return{c(){n=m("nav"),s=m("div"),a&&a.c(),r=$(),o=m("ul"),c&&c.c(),i=$(),l&&l.c(),this.h()},l(t){n=T(t,"NAV",{class:!0});var e=S(n);s=T(e,"DIV",{class:!0});var u=S(s);a&&a.l(u),r=P(u),o=T(u,"UL",{class:!0});var f=S(o);c&&c.l(f),i=P(f),l&&l.l(f),f.forEach(d),u.forEach(d),e.forEach(d),this.h()},h(){_(o,"class","svelte-a08hsz"),_(s,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),a&&a.m(s,null),f(s,r),f(s,o),c&&c.m(o,null),f(o,i),l&&l.m(o,null)},p(t,[e]){gt["status-website"]&&gt["status-website"].logoUrl&&a.p(t,e),gt["status-website"]&&gt["status-website"].navbar&&c.p(t,e),gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&d(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function yt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class _t extends ht{constructor(t){super(),ft(this,t,yt,wt,i,{segment:0})}}var Et={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function St(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Tt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function h(t){var e=Et[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function d(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+St(Tt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=xt(St(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Tt(r[8])+'" alt="'+Tt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Tt(r[11]||u[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+xt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Tt(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function Pt(t,e,n){const s=t.slice();return s[3]=e[n],s}function At(t,e,n){const s=t.slice();return s[3]=e[n],s}function kt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Lt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${gt.path}/themes/${(gt["status-website"]||{}).theme||"light"}.css`)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Nt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(gt["status-website"]||{}).themeUrl)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Rt(e){let n,s;return{c(){n=m("script"),this.h()},l(t){n=T(t,"SCRIPT",{src:!0,async:!0,defer:!0}),S(n).forEach(d),this.h()},h(){n.src!==(s=e[8].src)&&_(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function It(e){let n;return{c(){n=m("link"),this.h()},l(t){n=T(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",e[3].rel),_(n,"href",e[3].href),_(n,"media",e[3].media)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Ht(e){let n;return{c(){n=m("meta"),this.h()},l(t){n=T(t,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",e[3].name),_(n,"content",e[3].content)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function jt(e){let n,s,r,o,i,l,u,g,b,w,y,E,x,A,k,L,N,R,I=xt(gt.i18n.footer.replace(/\$REPO/,`https://github.com/${gt.owner}/${gt.repo}`))+"",O=(gt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customHeadHtml+"";return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new j(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}();let C=((gt["status-website"]||{}).themeUrl?Nt:Lt)(e),U=(gt["status-website"]||{}).scripts&&function(t){let e,n=(gt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Rt(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=kt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Rt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),M=(gt["status-website"]||{}).links&&function(t){let e,n=(gt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=It(At(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=At(t,n,o);s[o]?s[o].p(i,r):(s[o]=It(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),G=(gt["status-website"]||{}).metaTags&&function(t){let e,n=(gt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ht(Pt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Pt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Ht(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),D=gt["status-website"].css&&function(e){let n,s,r=`<style>${gt["status-website"].css}</style>`;return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new j(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}(),q=gt["status-website"].js&&function(e){let n,s,r=`<script>${gt["status-website"].js}<\/script>`;return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new j(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}(),W=(gt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customBodyHtml+"";return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){n=new j(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}();E=new _t({props:{segment:e[0]}});const z=e[2].default,B=function(t,e,n,s){if(t){const r=a(t,e,n,s);return t[0](r)}}(z,e,e[1],null);return{c(){O&&O.c(),n=v(),C.c(),s=m("link"),r=m("link"),o=m("link"),U&&U.c(),i=v(),M&&M.c(),l=v(),G&&G.c(),u=v(),D&&D.c(),g=v(),q&&q.c(),b=v(),w=$(),W&&W.c(),y=$(),it(E.$$.fragment),x=$(),A=m("main"),B&&B.c(),k=$(),L=m("footer"),N=m("p"),this.h()},l(t){const e=H('[data-svelte="svelte-ri9y7q"]',document.head);O&&O.l(e),n=v(),C.l(e),s=T(e,"LINK",{rel:!0,href:!0}),r=T(e,"LINK",{rel:!0,type:!0,href:!0}),o=T(e,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(e),i=v(),M&&M.l(e),l=v(),G&&G.l(e),u=v(),D&&D.l(e),g=v(),q&&q.l(e),b=v(),e.forEach(d),w=P(t),W&&W.l(t),y=P(t),at(E.$$.fragment,t),x=P(t),A=T(t,"MAIN",{class:!0});var a=S(A);B&&B.l(a),a.forEach(d),k=P(t),L=T(t,"FOOTER",{class:!0});var c=S(L);N=T(c,"P",{}),S(N).forEach(d),c.forEach(d),this.h()},h(){_(s,"rel","stylesheet"),_(s,"href",`${gt.path}/global.css`),_(r,"rel","icon"),_(r,"type","image/svg"),_(r,"href",(gt["status-website"]||{}).faviconSvg||(gt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(gt["status-website"]||{}).favicon||"/logo-192.png"),_(A,"class","container"),_(L,"class","svelte-jbr799")},m(t,e){O&&O.m(document.head,null),f(document.head,n),C.m(document.head,null),f(document.head,s),f(document.head,r),f(document.head,o),U&&U.m(document.head,null),f(document.head,i),M&&M.m(document.head,null),f(document.head,l),G&&G.m(document.head,null),f(document.head,u),D&&D.m(document.head,null),f(document.head,g),q&&q.m(document.head,null),f(document.head,b),h(t,w,e),W&&W.m(t,e),h(t,y,e),ct(E,t,e),h(t,x,e),h(t,A,e),B&&B.m(A,null),h(t,k,e),h(t,L,e),f(L,N),N.innerHTML=I,R=!0},p(t,[e]){(gt["status-website"]||{}).customHeadHtml&&O.p(t,e),C.p(t,e),(gt["status-website"]||{}).scripts&&U.p(t,e),(gt["status-website"]||{}).links&&M.p(t,e),(gt["status-website"]||{}).metaTags&&G.p(t,e),gt["status-website"].css&&D.p(t,e),gt["status-website"].js&&q.p(t,e),(gt["status-website"]||{}).customBodyHtml&&W.p(t,e);const n={};1&e&&(n.segment=t[0]),E.$set(n),B&&B.p&&2&e&&c(B,z,t,t[1],e,null,null)},i(t){R||(nt(E.$$.fragment,t),nt(B,t),R=!0)},o(t){st(E.$$.fragment,t),st(B,t),R=!1},d(t){O&&O.d(t),d(n),C.d(t),d(s),d(r),d(o),U&&U.d(t),d(i),M&&M.d(t),d(l),G&&G.d(t),d(u),D&&D.d(t),d(g),q&&q.d(t),d(b),t&&d(w),W&&W.d(t),t&&d(y),lt(E,t),t&&d(x),t&&d(A),B&&B.d(t),t&&d(k),t&&d(L)}}}function Ot(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ct extends ht{constructor(t){super(),ft(this,t,Ot,jt,i,{segment:0})}}function Ut(t){let e,n,s=t[1].stack+"";return{c(){e=m("pre"),n=b(s)},l(t){e=T(t,"PRE",{});var r=S(e);n=x(r,s),r.forEach(d)},m(t,s){h(t,e,s),f(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&A(n,s)},d(t){t&&d(e)}}}function Mt(e){let n,s,r,o,i,a,c,l,u,p=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&Ut(e);return{c(){s=$(),r=m("h1"),o=b(e[0]),i=$(),a=m("p"),c=b(p),l=$(),g&&g.c(),u=v(),this.h()},l(t){H('[data-svelte="svelte-1moakz"]',document.head).forEach(d),s=P(t),r=T(t,"H1",{class:!0});var n=S(r);o=x(n,e[0]),n.forEach(d),i=P(t),a=T(t,"P",{class:!0});var f=S(a);c=x(f,p),f.forEach(d),l=P(t),g&&g.l(t),u=v(),this.h()},h(){_(r,"class","svelte-17w3omn"),_(a,"class","svelte-17w3omn")},m(t,e){h(t,s,e),h(t,r,e),f(r,o),h(t,i,e),h(t,a,e),f(a,c),h(t,l,e),g&&g.m(t,e),h(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(o,t[0]),2&e&&p!==(p=t[1].message+"")&&A(c,p),t[2]&&t[1].stack?g?g.p(t,e):(g=Ut(t),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&d(s),t&&d(r),t&&d(i),t&&d(a),t&&d(l),g&&g.d(t),t&&d(u)}}}function Gt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Dt extends ht{constructor(t){super(),ft(this,t,Gt,Mt,i,{status:0,error:1})}}function qt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&it(n.$$.fragment),s=v()},l(t){n&&at(n.$$.fragment,t),s=v()},m(t,e){n&&ct(n,t,e),h(t,s,e),r=!0},p(t,e){const r=16&e?rt(o,[ot(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){tt();const t=n;st(t.$$.fragment,1,0,(()=>{lt(t,1)})),et()}i?(n=new i(a()),it(n.$$.fragment),nt(n.$$.fragment,1),ct(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&nt(n.$$.fragment,t),r=!0)},o(t){n&&st(n.$$.fragment,t),r=!1},d(t){t&&d(s),n&&lt(n,t)}}}function Wt(t){let e,n;return e=new Dt({props:{error:t[0],status:t[1]}}),{c(){it(e.$$.fragment)},l(t){at(e.$$.fragment,t)},m(t,s){ct(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function zt(t){let e,n,s,r;const o=[Wt,qt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=v()},l(t){n.l(t),s=v()},m(t,n){i[e].m(t,n),h(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(tt(),st(i[c],1,1,(()=>{i[c]=null})),et(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),nt(n,1),n.m(s.parentNode,s))},i(t){r||(nt(n),r=!0)},o(t){st(n),r=!1},d(t){i[e].d(t),t&&d(s)}}}function Bt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[zt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Ct({props:o}),{c(){it(n.$$.fragment)},l(t){at(n.$$.fragment,t)},m(t,e){ct(n,t,e),s=!0},p(t,[e]){const s=12&e?rt(r,[4&e&&{segment:t[2][0]},8&e&&ot(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(nt(n.$$.fragment,t),s=!0)},o(t){st(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function Kt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return M(l),u=mt,f=s,C().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class Jt extends ht{constructor(t){super(),ft(this,t,Kt,Bt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Vt=[],Ft=[{js:()=>Promise.all([import("./index.f20652b1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8a415d74.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].11a6b112.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].d88709ec.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.0e31b9ad.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Yt=(Qt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Qt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xt(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},se={};let re,oe;function ie(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ae(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(re))return null;let e=t.pathname.slice(re.length);if(""===e&&(e="/"),!Vt.some((t=>t.test(e))))for(let n=0;n<Yt.length;n+=1){const s=Yt[n],r=s.pattern.exec(e);if(r){const n=ie(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function ce(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ae(r);if(o){fe(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ne.pushState({id:te},"",r.href)}}function le(){return{x:pageXOffset,y:pageYOffset}}function ue(t){if(se[te]=le(),t.state){const e=ae(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else!function(t){ee=t}(ee+1),function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}function fe(t,e,n,s){return Xt(this,void 0,void 0,(function*(){const r=!!e;if(r)te=e;else{const t=le();se[te]=t,te=e=++ee,se[te]=n?t:{x:0,y:0}}if(yield oe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=se[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),se[te]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function he(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let de,pe=null;function me(t){const e=Zt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ae(new URL(t,he(document)));if(e)pe&&t===pe.href||(pe={href:t,promise:Re(e)}),pe.promise}(e.href)}function ge(t){clearTimeout(de),de=setTimeout((()=>{me(t)}),20)}function be(t,e={noscroll:!1,replaceState:!1}){const n=ae(new URL(t,he(document)));if(n){const s=fe(n,null,e.noscroll);return ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),s}return location.href=t,new Promise((()=>{}))}const $e="undefined"!=typeof __SAPPER__&&__SAPPER__;let ve,we,ye,_e=!1,Ee=[],Se="{}";const Te={page:function(t){const e=pt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:pt(null),session:pt($e&&$e.session)};let xe,Pe,Ae;function ke(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Le(t){return Xt(this,void 0,void 0,(function*(){ve&&Te.preloading.set(!0);const e=function(t){return pe&&pe.href===t.href?pe.promise:Re(t)}(t),n=we={},s=yield e,{redirect:r}=s;if(n===we)if(r)yield be(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ne(n,e,ke(e,t.page))}}))}function Ne(t,e,n){return Xt(this,void 0,void 0,(function*(){Te.page.set(n),Te.preloading.set(!1),ve?ve.$set(e):(e.stores={page:{subscribe:Te.page.subscribe},preloading:{subscribe:Te.preloading.subscribe},session:Te.session},e.level0={props:yield ye},e.notify=Te.page.notify,ve=new Jt({target:Ae,props:e,hydrate:!0})),Ee=t,Se=JSON.stringify(n.query),_e=!0,Pe=!1}))}function Re(t){return Xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ye){const t=()=>({});ye=$e.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},xe)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>Xt(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==Se)return!0;const r=Ee[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:f};const h=c++;let d;if(Pe||u||!Ee[a]||Ee[a].part!==e.i){u=!1;const{default:s,preload:r}=yield Ft[e.i].js();let o;o=_e||!$e.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},xe):{}:$e.preloaded[a+1],d={component:s,props:o,segment:f,match:l,part:e.i}}else d=Ee[a];return o[`level${h}`]=d})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Ie,He,je;Te.session.subscribe((t=>Xt(void 0,void 0,void 0,(function*(){if(xe=t,!_e)return;Pe=!0;const e=ae(new URL(location.href)),n=we={},{redirect:s,props:r,branch:o}=yield Re(e);n===we&&(s?yield be(s.location,{replaceState:!0}):yield Ne(o,r,ke(r,e.page)))})))),Ie={target:document.querySelector("#sapper")},He=Ie.target,Ae=He,je=$e.baseUrl,re=je,oe=Le,"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ne.scrollRestoration="auto"})),addEventListener("load",(()=>{ne.scrollRestoration="manual"})),addEventListener("click",ce),addEventListener("popstate",ue),addEventListener("touchstart",me),addEventListener("mousemove",ge),$e.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=$e;ye||(ye=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:ye},level1:{props:{status:o,error:i},component:Dt},segments:r},c=ie(n);Ne([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=ae(new URL(location.href));if(n)return fe(n,ee,!0,t)}));export{lt as A,w as B,r as C,q as D,u as E,H as F,xt as G,j as H,g as I,be as J,k as K,y as L,e as M,E as N,rt as O,M as P,G as Q,l as R,ht as S,ot as T,J as U,I as V,S as a,x as b,T as c,d,m as e,_ as f,h as g,f as h,ft as i,$ as j,P as k,tt as l,st as m,t as n,et as o,nt as p,U as q,gt as r,i as s,b as t,A as u,v,p as w,it as x,at as y,ct as z};

import __inject_styles from './inject_styles.5607aec6.js';