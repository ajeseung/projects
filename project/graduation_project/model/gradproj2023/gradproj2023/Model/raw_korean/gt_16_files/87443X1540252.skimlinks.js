/*
 (c) Skimlinks 2009-2023
 Build time: Mon, 12 Jun 2023 15:01:45 GMT
 Version: "15.4.2-stackpath"
*/
(function(){function ac(){var a=t.linksImpressions;a={phr:a.skimwords.urls,unl:a.unlinked.urls,slc:a.skimlinks.count,swc:a.skimwords.count,ulc:a.unlinked.count,jsl:(new Date).getTime()-t.loading_started,pref:h.referrer,uc:ba,t:1,jsf:"",jv:S};ca&&(a.xrf=1);return Va(a)}function Wa(a,b){b=b||Xa(a);if(!b)return!0;Ya(b);var c=f("skimlinks_keywee_pixel",null);var d=r(k.location.href,"utm_campaign=fbkw");c&&d&&Za(c);f("vglnk")&&da(b,"skimwords-link")&&(a&&a.stopPropagation?a.stopPropagation():(c=k.event,
c.cancelBubble=!0));return!0}function Ya(a,b){a&&a.nodeName&&"A"!==a.nodeName.toUpperCase()&&"AREA"!==a.nodeName.toUpperCase()&&(a=$a(a));if(a){var c=bc(a);var d=n.waypointDomain;if(c.length>=d.length&&c.substr(0,d.length)===d)return!0;if(-1!==c.indexOf(d))d=c;else{d=a;var e=da(d,"skimwords-link"),m=y(d,"data-skim-creative"),f=y(d,"data-skimlinks-tracking")||ba,g=za?"&"+za:"";c=u(Aa(),{id:ab,isjs:1,jv:S,sref:k.location,url:c,xs:1,xtz:bb(),xuuid:h.uuid});m&&(c.xcreo=m);h.isAdblockUser&&(c.abp=1);h.cookie&&
(c.xguid=h.cookie);I&&(c.site=I);f&&(c.xcust=f);e&&(c.xs=2,c.xword=y(d,"data-skimwords-word")||"",cb.version&&(c.sv=cb.version));e=z(d);e.icust&&(c.xjsf=e.icust);e.sourceApp&&(c.xs=e.sourceApp);e.clientClickId&&(c.cci=e.clientClickId,delete z(d).clientClickId);e.linkSwappingMatchId&&(c.ls=e.linkSwappingMatchId);d=n.waypointDomain+"/?"+T(c)+g}db(a,d,b)}return!0}function $a(a){for(;a.parentNode;){a=a.parentNode;var b=a.nodeName.toUpperCase();if("A"===b||"AREA"===b)return a}return null}function eb(a,
b,c){a=J(k,["skimlinks_settings",a],k[a]);return A(a)?b:q(c)?c(a,b):a}function f(a,b,c){if(K(a)){a:{void 0===a&&(a=[]);for(var d=0;d<a.length;d++){var e=eb(a[d]);if(!A(e)){if(q(c)){b=c(e,b);break a}b=e;break a}}}return b}return eb(a,b,c)}function fb(){return J(ea(),["runTimeInfo","isAdblockUser"])}function U(a){try{var b=a.skimlinksOriginalHref||a.href;return fa(gb(b)?b.baseVal:b)}catch(c){return console.error("Unexpected href format"),console.error(c),""}}function ha(a){return a?a.replace(/^www\./i,
""):""}function Ba(){for(var a="",b=0;8>b;b++)a+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return a}function q(a){return"[object Function]"===Object.prototype.toString.call(a)}function D(a,b,c){for(var d=0,e=null===a?0:a.length;d<e;)c=b(c,a[d],d,a),d+=1;return c}function ia(a){return"console"in window&&q(window.console[a])?window.console[a]:function(){}}function ja(a,b){return D(b,function(b,d){return b&&q(a[d])},!0)}function cc(){try{var a=JSON.stringify({a:1});return 1===JSON.parse(a).a}catch(b){return!1}}
function v(a,b){var c=Error(b);c.name=a;hb(c,"getPrototypeOf"in Object?Object.getPrototypeOf(this):this.__proto__);Error.captureStackTrace&&Error.captureStackTrace(c,v);return c}function hb(a,b){"setPrototypeOf"in Object?Object.setPrototypeOf(a,b):a.__proto__=b}function A(a){return"undefined"===typeof a||null===a}function K(a){return Array.isArray?Array.isArray(a):"[object Array]"===Object.prototype.toString.call(a)}function L(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(K(a))for(var c=
0;c<a.length;c++)b(a[c],c,a);else for(c in a)L(a,c)&&b(a[c],c,a)}function u(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);A(a)&&(a={});w(b,function(b){A(b)&&(b={});w(Object.keys(b),function(c){a[c]=b[c]})});return a}function ka(a,b){var c=[];w(a,function(d,e){b(d,e,a)&&c.push(d)});return c}function ib(a){void 0===a&&(a=[]);return ka(a,function(a){return!!a})}function Ca(a,b){if(!a)return[];if(!b)return[].concat(a);var c=[];w(a,function(d,e){c.push(b(d,e,a))});return c}function fa(a){return A(a)?
"":a.toString().replace(/^[\s\xA0]+|[\s\xA0]+$/g,"")}function la(a){return"boolean"===typeof a}function E(a,b){return"undefined"===typeof a?b:a}function Da(a,b,c){a=E(a,"");b=E(b,"");c=E(c,0);return 0===a.slice(c).indexOf(b)}function ma(a,b,c){a=E(a,"");b=E(b,"");c=E(c,0);c=c<a.length?c|0:a.length;return a.substr(c-b.length,b.length)===b}function gb(a){var b=typeof a;return null!==a&&("object"===b||"function"===b)}function dc(a){return encodeURIComponent(a).replace(/[!'()*~]/g,function(a){return"%"+
a.charCodeAt(0).toString(16).toUpperCase()})}function F(a,b){void 0===b&&(b=!0);var c=document.createElement("a");if(b)var d=a;else{d=void 0;void 0===d&&(d="http");var e="";/^https?:\/\//.test(a)||/^\/[^/]+/.test(a)||(e=/^\/\//.test(a)?d+":":d+"://");d=""+e+a}c.href=d;try{return ha(c.hostname)}catch(m){return""}}function T(a,b){var c=[];b=b||dc;w(a,function(a,e){c.push(e+"="+b(a))});return c.join("&")}function Ea(a,b,c,d){function e(){if(q(d.onError)){var b=400<=l.status&&500>l.status,c=500<=l.status&&
600>l.status;d.onError(new (0===l.status?ec:b?fc:c?gc:hc)(g+" "+a+" "+l.status))}}b=b||{};d=d||{};var m=d.data,f=d.headers||{},g=d.method||"GET",l=new XMLHttpRequest;d.withCredentials&&(l.withCredentials=!0);b=T(b);b.length&&(a=a+"?"+b);l.open(g,a);w(f,function(a,b){l.setRequestHeader(b,a)});l.onload=function(){if(q(c))if(200<=l.status&&300>l.status){try{var a=JSON.parse(l.responseText)}catch(Jd){a=l.responseText}c(a)}else e()};l.onerror=e;l.send(m);return l}function J(a,b,c){if(!a||!b||!b.length)return c;
for(var d=b.length,e=0;e<d;e++){var m=b[e];if(a&&m in a)a=a[m];else return c}return a}function ea(){return window.__SKIM_JS_GLOBAL__&&q(window.__SKIM_JS_GLOBAL__.getDebugInfo)?window.__SKIM_JS_GLOBAL__.getDebugInfo():{}}function ic(a){var b=/(?::(\d+))?:(\d+)$/,c=/^([^ ]+)\s\((.*)\)$/,d={filename:a,"function":"?",lineno:null,colno:null,in_app:!0};c.test(a)&&(a=a.match(c).slice(1),c=a[1],d["function"]=a[0],d.filename=c);b.test(d.filename)&&(c=d.filename.match(b).slice(1),a=c[0],c=c[1],a&&c?(d.lineno=
parseInt(a,10),d.colno=parseInt(c,10)):!a&&c&&(d.lineno=parseInt(c,10)),d.filename=d.filename.replace(b,""));return d}function jc(a){a=a.stack.replace(a.toString(),"").replace(/^\s+at\s+/gm,"").split("\n");a=Ca(a,function(a){return fa(a)});a=ib(a);a.reverse();return Ca(a,ic)}function na(a,b){if(a&&jb){kb.push(a);try{kc.sendError(a,b)}catch(d){if(d===a)lb.error(a);else{var c=new lc;c.__sentryExtraData__={logger_error_message:d.message,logger_error_stack:d.stack,initial_error_message:a.message,intial_error_stack:a.stack};
throw c;}}}}function B(a){return q(a)?function(){try{a.apply(this,arguments)}catch(b){na(b)}}:a}function mb(a){var b=!1,c;return function(){if(b)return c;c=a.apply(this,arguments);b=!0;return c}}function nb(a,b){return K(a)?a:b}function y(a,b,c){3<=arguments.length&&("undefined"!==typeof a.setAttribute?a.setAttribute(b,c):a[b]=c);try{var d=a[b];d||(d=a.getAttribute(b));return d}catch(e){return null}}function M(a,b){var c=Array.prototype.slice.call(arguments,2),d=B(a);return window.setTimeout.apply(window,
[d,b].concat(c))}function mc(a,b){function c(){"object"===typeof a.skimlinksOriginalHref?(a.href.baseVal=a.skimlinksOriginalHref.baseVal,a.href.animVal=a.skimlinksOriginalHref.animVal):a.href=a.skimlinksOriginalHref;delete a.skimlinksOriginalHostname;delete a.skimlinksOriginalHref;delete a.skimlinksRestoreSwappedLink}b=b||ob;var d=M(c,b);a.skimlinksOriginalHostname=a.hostname;a.skimlinksOriginalHref="object"===typeof a.href?{animVal:a.href.animVal,baseVal:a.href.baseVal}:a.href;a.skimlinksRestoreSwappedLink=
function(){clearTimeout(d);c()}}function db(a,b,c){if(a){"string"===typeof a.skimlinksOriginalHref||mc(a,c);c=null;var d=a.childNodes.length&&3===a.childNodes[0].nodeType;"msie"===h.detect.browser&&d&&(c=a.innerHTML);"object"===typeof a.href?(a.href.baseVal=b,a.href.animVal=b):a.href=b;c&&c!==a.innerHTML&&(a.innerHTML=c)}}function pb(a){var b=a.href;b=h.cookie?b.replace(/([&?])xguid=([a-fA-F0-9]{32})/,"$1xguid="+h.cookie):b.replace(/([&?]xguid=[a-fA-F0-9]{32})/,"");b!==a.href&&db(a,b);return b}function qb(a){a=
a||document;a=a.body||a.getElementsByTagName("body")[0];if(!a)throw new rb;return a}function Za(a,b,c){if(!C){C=document.createElement("iframe");C.id="skimlinks-pixels-iframe";try{qb().appendChild(C)}catch(m){m instanceof rb&&document.documentElement.appendChild(C)}var d=C;d.width=0;d.height=0;d.style.display="none"}var e=C.contentDocument||C.contentWindow.document;d=qb(e);d||(d=document.createElement("body"),e.appendChild(d));e=e.createElement("img");e.src=a;e.width=1;e.height=1;q(b)&&(e.onload=
B(b));q(c)&&(e.onerror=B(c));d.appendChild(e)}function Aa(){var a={};Fa&&(a.dnt=Fa);sb&&(a.fdnt=1);return a}function oa(a,b,c,d){var e=d||{};d=e.usePixel||!1;var m=e.useSendBeacon||!1;e=e.callback||function(){};c=u({},c,Aa());m?tb(a,b,c,e):d?ub(a,b,c,e):Ga(a,b,c,e)}function tb(a,b,c,d){b=JSON.stringify(b);return navigator.sendBeacon&&(a=Ha(a,c),navigator.sendBeacon(a,b))?(d&&d(),!0):!1}function ub(a,b,c,d){c=u({},c);c.rnd=Math.random();b&&(c.data=JSON.stringify(b));Za(Ha(a,c),d,d)}function Ga(a,b,
c,d){b=JSON.stringify(b);vb.post(Ha(a,c),{},d,{headers:{"Content-type":"text/plain"},data:b,withCredentials:!0})}function Ha(a,b){var c=T(b),d=""+nc+a;return c?d+"?"+c:d}function r(a,b){return q(a.indexOf)?-1<a.indexOf(b):!1}function pa(a){var b=ha(qa);return r(a,wb)||r(a,"go.redirectingat.com")||!!b&&r(a,b)}function g(a,b,c){b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c;return a}function oc(a,b){if(!a)throw Error("[matchSelector] First argument needs to be an html element.");
var c=window.Element.prototype;c=c.matches||c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector;if(q(c))try{return c.call(a,b)}catch(e){return!1}c=(a.document||a.ownerDocument).querySelectorAll(b);for(var d=0;c[d]&&c[d]!==a;)d+=1;return!!c[d]}function Ia(a,b){var c=pc(a);if(!c||!K(b)||0===b.length)return!1;var d=b.map(function(a){return a+" *"}).concat(b).join(",");return oc(c,d)}function pc(a){for(;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.parentNode;return a}function xb(a,b){for(var c=
0;c<a.length;c++)if(b(a[c]))return a[c]}function N(a,b){if("function"!=typeof a||null!=b&&"function"!=typeof b)throw new TypeError("Expected a function");if(!N.Cache)return a;var c=function e(){for(var c=arguments.length,f=Array(c),g=0;g<c;g++)f[g]=arguments[g];c=b?b.apply(this,f):f[0];g=e.cache;if(g.has(c))return g.get(c);f=a.apply(this,f);e.cache=g.set(c,f)||g;return f};c.cache=new N.Cache;return c}function yb(a,b){return!!xb(b,function(b){var c=Da("*"),e=ma("*"),m=b.replace(/\*/g,"");return c&&
e?r(a,m):c?ma(a,m):e?Da(a,m):a===b})}function zb(a,b){return a&&a.length&&b?"undefined"!==typeof xb(a,b):!1}function qc(a){return f("_merchantSettings")?zb(rc,function(b){return r(a,b)}):!1}function Ab(a){if(!a||!a.href)return!0;var b=U(a);(b=!Bb(b))||(b=[].concat(sc(),tc(),Cb),b=b.length&&Ia(a,b)?!0:Ja.length?!Ia(a,Ja):!1);return b}function Bb(a){if(!a||qc(a))return!1;var b=n.hostname;var c=E(void 0,!0);c=F(a,c);var d=ma(c,"."+b)||ma(b,"."+c);if(b=c!==b&&!d)a=F(a),a=ra.length?!yb(a,ra):yb(a,uc()),
b=!a;return b}function vc(a){var b;if(b=Db)null===a.offsetParent?b=!0:(b=k.getComputedStyle,b=q(b)?"hidden"===b(a).visibility:!1);if(b)return p.IGNORE;var c=U(a);b=ha(F(c));c=c?/^https?:\/\//.test(c)||/^\/\//.test(c):!1;if(c&&!Ab(a)){if(ca)return p.TRACK;if(!0===n.aff_domains[b]||L(Ka,b))return p.AFFILIATE;if(pa(b))return p.PRE_AFFILIATED;if(a=La)a=!L(n.aff_domains,b)||A(n.aff_domains[b]);return a?p.UNKNOWN:""===h.cookie&&Eb?p.AFFILIATE:p.TRACK}return p.IGNORE}function da(a,b){if(!a||!a.className||
!b)return!1;var c=a&&a.className?fa(a.className).split(/\s+/):[];return r(c,b)}function sa(a){if("string"!==typeof a.skimlinksOriginalHref)return!1;var b=z(a),c=a.href,d=document.createElement("a"),e={};d.href=c;if(c=d.search.substring(1))for(c=c.replace(/&amp;/g,"&").split("&"),d=0;d<c.length;d++){var m=c[d].split("="),f=m[1];e[m[0]]=f?decodeURIComponent(f):null}b.icust&&b.icust!==e.xjsf&&(e.xjsf=b.icust);b.sourceApp&&b.sourceApp!==e.xs&&(e.xs=b.sourceApp);b=T(e);a.href=n.waypointDomain+"?"+b;return!0}
function z(a){if(!a)throw Error("getAnchorMetaData takes an anchor HTML element as an argument");var b=J(a,[Fb]);if(!b){b={icust:null,sourceApp:null};var c=[Fb],d=b;if(a&&c&&c.length)for(var e=c.length,f=a,g=null,h=0;h<e;h++){var l=c[h];if(h===e-1){try{a[l]=d}catch(Id){f[g]={},f[g][l]=d}break}l in a&&gb(a[l])||(a[l]={});f=a;g=l;a=a[l]}}return b}function Gb(a,b,c){b=u({},b,{domain_id:ta,publisher_id:ua,page_url:k.location.href,impression_id:h.uuid,jv:S});var d={};navigator.sendBeacon?d.useSendBeacon=
!!c:d.usePixel=!!c;oa("/generic_tracking/"+a,b,{},d)}function Xa(a){a=a.target||a.srcElement||a.originalTarget;if(!a)return null;var b=(a.nodeName||"").toLowerCase();return r(["a","area"],b)?a:$a(a)}function va(a){try{return a()}catch(b){}}function wc(a){var b=f("gtag");va(function(){b("event",O,{event_category:"click",event_label:a})})}function xc(a){var b=f("ga");va(function(){b("send","event","click",O,a)})}function yc(a){var b=f("_gaq");va(function(){b.push(["_trackEvent","click",O,a])})}function zc(a){var b=
f("pageTracker");b._trackPageview&&va(function(){b._trackPageview("/"+O+"/"+a)})}function Ac(a,b){return D(Object.keys(b),function(c,d){var e=a[d]===b[d];return c&&e},!0)}function Bc(a){return D(a,function(a,c){return a.concat(c)},[])}function Ma(a,b){void 0===b&&(b=!0);var c=a?"."+a:"";return Bc(G.querySelectorAll(b?"a[href]"+c+", area[href]"+c:"a[href]"+c))}function Cc(a,b){w(a,function(a){var c=r(b,a)&&!pa(a);n.aff_domains[a]=c})}function Dc(a,b){return!zb(a,function(a){return!b(a)})}function Ec(){for(var a=
new H,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];a.waitFor(c);return a}function Fc(a){return D(a,function(a,c){return r(a,c)?a:a.concat(c)},[])}function Na(a){var b=Hb[a];if(!b)throw Error("Unknown service "+a);return b}function Ib(a,b){if(a){var c=[].concat(a.split(" "),b);c=Fc(c)}else c=b;return c}function Gc(){if(Oa||wa){var a=[];Oa&&a.push("nofollow");wa&&(a=Ib(wa,a));w(Ma(),function(b){var c=a,d=y(b,"rel"),e=ha(b.hostname);e&&!0===n.aff_domains[e]&&y(b,"rel",Ib(d,c).join(" "))})}}
function Hc(a){if(a.affiliationType===p.IGNORE)return!1;var b=a.anchor,c=a.affiliationType,d=a.nativeEvent;if(a.type===P.LEFT_CLICK)if(b=a.anchor,c=a.affiliationType,c===p.AFFILIATE||c===p.UNKNOWN){b=a.anchor;c=a.nativeEvent;d=a.clientClickId;var e,m,g;if(g=f("skimlinks_strip_attribute",!1))for(m in g)if(L(g,m)){var n=g[m];(e=y(b,m))&&0===e.indexOf(n)&&(e=e.substr(n.length),y(b,m,e))}V&&y(b,"target",V);z(a.anchor);z(b).clientClickId=d;sa(b);O&&(a=b.href,f("gtag")?wc(a):f("ga")?xc(a):f("_gaq")?yc(a):
f("pageTracker")&&zc(a));a=Jb?(a=y(b,"onclick"))&&r(a.toString(),"return false")?!0:(a=b.onclick)&&q(a)&&r(a.toString(),".preventDefault()")?!0:!1:!1;a?(Wa(c,b),(V?k.open(b.href,V):k.open(b.href,"_blank")).focus()):Wa(c,b)}else c===p.PRE_AFFILIATED?pb(b):c===p.TRACK&&(a={publisher_id:ua,publisher_domain_id:ta,referrer:k.location.toString(),pref:h.referrer,site:""+I,url:b.href,custom:y(b,"data-skimlinks-tracking")||ba||"",xtz:h.timezone,uuid:h.uuid,product:"1"},ca&&(a.xrf=1),oa("/naclicks",a,null,
{usePixel:!0}));else{try{if(g=z(b),!g.icust||-1!==g.icust.indexOf("other_click__")){e="other_click__"+d.type+" ["+(void 0!=d.button?d.button:"")+"]";if(32<String(e).length)throw Error(e+" is not a valid icust value. The value should be less than 33 chars");z(b).icust=e;sa(b)}}catch(l){}c===p.AFFILIATE||c===p.UNKNOWN?Ya(b,200):c===p.PRE_AFFILIATED&&pb(b)}return!0}function Ic(){Na(Q.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(Hc,Pa.SKIMLINKS)}function Jc(){h.skimlinksEnabled&&(x.on("skim_js_start",
Ic),W.whenBeaconFullyReady(Gc))}function Va(a){return u({pag:k.location.href,guid:h.cookie,uuid:h.uuid,tz:h.timezone,publisher_id:ua,publisher_domain_id:ta},a)}function Kc(a){if(0!==t.awaitedModules.length&&(t.awaitedModules=ka(t.awaitedModules,function(b){return b!==a}),0===t.awaitedModules.length)){var b=ac();oa("/page",b)}}function Lc(){return D(Ma(),function(a,b){var c=U(b),d=F(c),e;(e=!d)||(e=!(!da(b,"skimwords-link")&&!da(b,"skimlinks-unlinked")));(e=e||!Bb(c))||(e=b&&K(xa)&&0!==xa.length?Ia(b,
xa):!1);if(e)return a;(e=a.urls[c])||(e={count:0,ae:!0===n.aff_domains[d]||(null===n.aff_domains[d]||void 0===n.aff_domains[d])&&La&&!pa(d)?1:0});e.count++;a:{if(-1!==c.indexOf("#slm-")&&(d=c.split("#slm-"),2===d.length&&!isNaN(d[1])&&10*parseInt(d[1],10)===10*d[1])){d=parseInt(d[1],10);break a}d=null}d&&(e.slmcid=d);d=e;1===d.ae&&a.count++;d.slmcid&&(e=d.slmcid,r(t.campaign_ids,e)||t.campaign_ids.push(e));if(!Kb&&0===d.ae)return a;a.urls[c]=d;return a},{urls:{},count:0})}function Mc(){w(Nc,function(a){var b=
k;"skimlinks_context_window"===a&&(b=window);L(b,a)&&(a={page_var:a,value:JSON.stringify(b[a])},Gb("page_variable_tracking",a))})}function Oc(){var a=mb(function(){t.linksImpressions.skimlinks=Lc();Kc("main-tracking");if(Object.keys(t.linksImpressions.skimlinks.urls).length){var a=Va({dl:t.linksImpressions.skimlinks.urls,hae:t.linksImpressions.skimlinks.count?1:0,typ:"l"});oa("/link",a)}});W.whenNoRequestsPending(a);M(a,2E3)}function Pc(){t.awaitedModules.push("main-tracking");h.skimwordsEnabled&&
t.awaitedModules.push("skimwords");h.unlinkedEnabled&&t.awaitedModules.push("unlinked");Lb&&W.whenPostPageLoadBeaconCallCompleted(Oc);if(navigator.sendBeacon&&1>1E4*Math.random()){var a={domain_id:ta,publisher_id:ua,page_url:k.location.href,impression_id:h.uuid,jv:S},b=tb("/generic_tracking/trackingMethodExperiment",u({trackingMethod:"sendBeacon"},a));Ga("/generic_tracking/trackingMethodExperiment",u({trackingMethod:"xhr"},a));b||Ga("/generic_tracking/trackingMethodExperiment",u({trackingMethod:"sendBeaconFailed"},
a))}}function Qc(){Mc()}function Mb(a,b){R||1E3<b?q(a)&&(R?Qa?a(!0):a(!1):a(!1)):M(Mb,b*=2,a,b)}function Nb(){R||(X.complete&&Y.complete&&(R=!0),R&&"0"!=X.width&&"0"==Y.width&&(Qa=!0))}function Rc(a){function b(a){return a.toLowerCase().replace(/^\/\/|^https?:\/\//,"")}var c=Ca(Ob,b);return r(c,b(a))}function Sc(){return{skimOptions:Tc,runTimeInfo:u({},{aff_domains:n.aff_domains},{consentState:Uc},{loggedErrors:kb},h)}}function Vc(a,b){var c=!1,d;return function(){if(c)return d;M(function(){c=!1},
b);c=!0;return d=a.apply(this,arguments)}}function Wc(a,b,c,d){void 0===d&&(d=!1);if(a&&(a.nodeName||a===k))if(G.addEventListener){var e=B(c.bind(a));a.addEventListener(b,e,d)}else a.attachEvent("on"+b,function(){return 7>h.detect.version&&!k.event?(M(c.bind(a,k.event),100),!0):c.call(a,k.event)})}function Pb(a,b,c,d){void 0===b&&(b=[]);if(a){var e=Vc(c,200);w(b,function(b){try{Wc(a,b,e,d)}catch(Hd){}})}}function Xc(){var a=Ma();return D(a,function(a,c){var b=U(c);var e=(b=F(b))&&!Ab(c)&&!pa(b),f=
L(n.aff_domains,b);e&&!f&&(a.push(b),n.aff_domains[b]=null,n.domain_data.domains.push(b));return a},[])}function Qb(a){var b=Xc();return W.sendBeaconRequest(b,a)}function Yc(){var a=new Zc;Hb[Q.ANCHOR_CLICK_INTERCEPTOR]=a}function $c(){k.__SKIM_JS_GLOBAL__||(k.__SKIM_JS_GLOBAL__={});if(!k.__SKIM_JS_GLOBAL__.init){k.skimlinksAPI={};k.__SKIM_JS_GLOBAL__.init=!0;k.__SKIM_JS_GLOBAL__.getDebugInfo=Sc;k.__SKIM_JS_GLOBAL__.bundledEntries=ad;if(Rc(n.hostname)||Ra&&G.querySelector(Ra))h.skimlinksEnabled=!1,
h.skimwordsEnabled=!1,h.unlinkedEnabled=!1;"msie"===h.detect.browser&&8>=h.detect.version&&(h.skimwordsEnabled=!1);try{ub("/robots.txt",void 0,{__skimjs_preflight__please_ignore__:!0})}catch(a){na(new bd,!0)}cd.detect(function(a){h.isAdblockUser=a});x.publish("skim_js_init");r(["interactive","complete"],G.readyState)?M(Z,0):(Qb(aa.PRE_PAGE_LOAD),document.addEventListener("DOMContentLoaded",Z),document.addEventListener("load",Z));Yc();x.publish("skim_js_start")}}var lb={log:ia("log"),info:ia("info"),
warn:ia("warn"),error:ia("error")},jb=function(){var a=!0;try{var b=[cc(),!!(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),ja(document,["querySelector","querySelectorAll"]),ja(Object,["keys"]),ja([],["indexOf"]),ja("",["indexOf"])];a=D(b,function(a,b){return a&&b},!0)}catch(c){a=!1}!1===a&&lb.info("[Skimlinks] Your browser doesn't support the base features necessary to run our javascript.");return a}();v.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,
writable:!0,configurable:!0}});hb(v,Error);var rb=v.bind(null,"DocumentBodyNotFound"),dd=v.bind(null,"PixelDropFailed");v.bind(null,"ScriptDropFailed");var hc=v.bind(null,"XhrError"),fc=v.bind(null,"XhrError4xx"),gc=v.bind(null,"XhrError5xx"),ec=v.bind(null,"XhrErrorZero"),lc=v.bind(null,"SentryLoggerError");v.bind(null,"SendBeaconFailedError");var bd=v.bind(null,"ResolveSslCertificateError");v.bind(null,"DisclosureReadyStateTimeout");var S="15.4.2-stackpath",ed="https://r.skimresources.com/api/",
Ka={"t.umblr.com":{name:"z"}},ab="87443X1540252",ua=87443,ta=1540252,nc="https://t.skimresources.com/api/v2",wb="go.skimresources.com",fd="https://sl-sentry.skimlinks.com",Rb="f648b8dfc7284fad8af093653eafd6ca",gd="production",hd=1>1E3*Math.random(),kc={sendError:function(a,b){if(!Rb)throw a;var c=b;c=(c=la(c)?c:!1)||hd?a instanceof dd&&fb()?!1:!0:!1;if(c){c=fd+"/api/46/store/";var d={sentry_version:"7",sentry_client:"raven-js/3.26.4",
sentry_key:Rb};var e={country:J(ea(),["runTimeInfo","country"]),beacon_consent:J(ea(),["runTimeInfo","consent"]),iab_consent:J(ea(),["runTimeInfo","consentState","skimlinks_consent"]),is_adblock_user:fb(),is_top_frame:window.top===window};e={event_id:Ba(),project:"46",platform:"javascript",logger:"javascript",release:S,exception:{values:[{type:a.name,value:a.message,stacktrace:{frames:jc(a)}}]},request:{headers:{"User-Agent":navigator.userAgent},url:location.href},extra:u({original_stacktrace:a.stack},
a.__sentryExtraData__,e)};Ea(c,d,null,{method:"POST",data:JSON.stringify(e)})}}},kb=[],bb=mb(function(){return(new Date).getTimezoneOffset()}),Sb=window.skimlinks_context_window||null,k=Sb?window[Sb]:window,G=k.document,id={getItem:function(a){try{return JSON.parse(localStorage.getItem(a))}catch(b){return null}},setItem:function(a,b){try{localStorage.setItem(a,JSON.stringify(b))}catch(c){}}},Sa=f("noskim",!1),jd=f("noskimlinks",!1),kd=f("noskimwords",!0),ld=f("nounlinked",
!0),md=f("skimwords_standard",false),nd=f("skimwords_lite",false),od=f("skimwords_diy",false),pd=f("skimwords_diy_filter",false),Tb=!Sa&&!jd,Ub=!Sa&&!kd,Vb=!Sa&&!ld,Fa=f("skimlinks_dnt",0,function(a){return a&&"0"!==a&&"false"!==a?1:0}),sb=f("skimlinks_nocookie",!1),Ta=f("skimlinks_excluded_classes",[]),Cb=f("custom_excluded_selectors",[],
nb),Ja=f("custom_included_selectors",[],nb),Ua=f("skimlinks_exclude",["kindle.amazon.com","giveaway.amazon.com","smile.amazon.com","wireless.amazon.com","amazon.com","m.gilt.com","gilttaste.com","parkandbond.com","gilt.com"]),ra=f("skimlinks_include",[]),Db=f("skimlinks_ignore_hidden_links",false),xa=f("skimlinks_link_impression_exclude_selector",[]),Oa=f("skimlinks_add_nofollow",false),wa=f("skimlinks_custom_rel",
""),Wb=f("skimlinks_before_click_handler",false,function(a,b){return la(a)?a:b}),Eb=f("skimlinks_first_party_na",!1),Lb=!f("noimpressions",!1),Kb=false,ob=f("skimlinks_replace_timeout",300,function(a,b){var c=parseFloat(a);return isNaN(c)?b:c}),La=f("skimlinks_affiliate_unknown_links",true),V=f("skimlinks_target",
null),qd=f("skimlinks_ajax_rerun",false),ca=f("skimlinks_revenue_forecast",false),rd=f("skimlinks_noright",false),Xb=f("skimlinks_url_extraction_rules",!1)||false,za=f("skimlinks_extra_redir_params",[]).join("&"),ba=f(["affiliate_tracking","skimlinks_tracking"],!1),ya=f("force_location"),I=f(["skimlinks_site","skimlinks_sitename"],
!1),qa=f("skimlinks_domain",""),O=f("skimlinks_google",false,function(a,b){return a?la(a)?a?"skimout":"":fa(a):b?"skimout":""}),Ob=f("noskim_domains",[]),sd=f("skimwords_horizontal_distance",80),td=f("skimwords_vertical_distance",80),ud=false,vd=f("skimwords_color",null),wd=f("skimwords_weight",null),
xd=f("skimwords_decoration",null),yd=f("skimwords_style",null),zd=f("skimwords_title",null),Ra=f("no_skim_selector",""),Ad=f("skimlinks_force_consent",!1),Jb=true,Tc={SW_STANDARD:md,SW_LITE:nd,SW_DIY:od,SW_DIY_FILTER:pd,HAS_SKIMLINKS:Tb,HAS_SKIMWORDS:Ub,HAS_UNLINKED:Vb,DO_NOT_TRACK:Fa,NO_COOKIE:sb,SL_EXCLUDED_CLASSES:Ta,CUSTOM_EXCLUDED_SELECTORS:Cb,
CUSTOM_INCLUDED_SELECTORS:Ja,SL_EXCLUDED_DOMAINS:Ua,SL_INCLUDED_DOMAINS:ra,SL_IGNORE_HIDDEN_LINKS:Db,SL_IMPRESSION_EXCLUDED_SELECTORS:xa,SL_ADD_NOFOLLOW:Oa,SL_CUSTOM_REL:wa,SL_BEFORE_CLICK_HANDLER:Wb,SL_FIRST_PARTY_NA:Eb,SL_TRACK_IMPRESSION:Lb,WITH_NA_LINK_IMPRESSIONS:Kb,SL_REPLACE_TIMEOUT:ob,SL_AFFILIATE_UNKNOWN_LINKS:La,SL_TARGET:V,AJAX_SUPPORT:qd,UNLINKED_EXCLUDES:[],SL_FORECAST:ca,NO_RIGHT_CLICK:rd,USE_MERCHANT_URL_EXTRACTION_RULES:Xb,EXTRA_REDIR_PARAMS:za,CUSTOM_TRACKING_VAR:ba,FORCE_LOCATION:ya,
SITE_NAME:I,CUSTOM_WAYPOINT_DOMAIN:qa,GOOGLE_TRACKING_ACTION_NAME:O,NO_SKIM_DOMAINS:Ob,SW_HORIZONTAL_DISTANCE:sd,SW_VERTICAL_DISTANCE:td,SL_PROFILING:!1,TRACK_COOKIE_SYNCS:ud,SW_LINK_COLOR:vd,SW_LINK_WEIGHT:wd,SW_LINK_DECORATION:xd,SW_LINK_STYLE:yd,SW_LINK_TITLE:zd,NO_SKIM_SELECTOR:Ra,SL_CONSENT:!1,FORCE_CONSENT:Ad,M101_TRACKING_ID:null,M101_CUSTOM_DOM_DETECTION:false,AE_CLICK_TRACKING:!1,INCENTIVE_ENABLED:!1,FORCE_PREVENTED_CLICKS_MONETIZATION:Jb,
IS_MINIMALISTIC_JS:!1,LINK_SWAPPING_404:!1,LINK_SWAPPING_OUT_OF_STOCK:!1,LINK_SWAPPING_PRODUCT_MATCH:!1,LINK_SWAPPING:!1,LINK_SWAPPING_MERCHANT_NAME_DETECTION:true,HAS_TABOOLA_TRACKING:!1,BEACON_RETRY_TIMER:-1},h=function(){var a=G.referrer||document.referrer||"",b=ya||k.location.href;var c="aspsession-id aspsessionid cftoken j-sessionid jsessid jsession_id jsessionid phpsessid phpsession-id phpsessionid seskey sessid session-id session-key session_id sessionid sessionkey uniqueid utm_campaign utm_medium utm_source utm_term".split(" ");
for(var d=0;d<c.length;d++){var e=c[d];var f=b.split("?");if(2<=f.length){b=f.shift();f=f.join("?");e=encodeURIComponent(e)+"=";f=f.split(/[&;]/gi);for(var g=f.length-1;0<=g;g--)Da(f[g],e)&&f.splice(g,1);b=b+"?"+f.join("&")}}"?"===b[b.length-1]&&(b=b.substr(0,b.length-1));c=b;d=id.getItem("skimCONSENT");b=navigator.userAgent.toLowerCase();b=/(webkit)[ /]([\w.]+)/.exec(b)||/(opera)(?:.*version)?[ /]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||0>b.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(b)||
[];b={browser:b[1]||"",version:parseFloat(b[2])||0};return{cookieSyncString:"",lastBeaconTimestamp:null,cookie:"",country:"",locale:"",consent:d,detect:b,isAdblockUser:!1,pageLocation:c,referrer:a,timezone:bb(),uuid:Ba(),skimwordsEnabled:Ub,skimlinksEnabled:Tb,unlinkedEnabled:Vb}}(),n=function(){var a=document.getElementsByTagName("html")?document.getElementsByTagName("html")[0]:null,b=ya?F(ya,!1):k.location.hostname;return{aff_domains:{},beacon:[],domain_data:{domains:[]},exclude:Ua,exclude_lookup:null,
excluded_classes:["noskimlinks","noskim"].concat(Ta),has_been_called:!1,hostname:b,html_root:a,include:ra,include_lookup:null,links:[],links_tracked:!1,target:null,waypointDomain:qa?"http://"+qa:"https://"+wb}}();var cb={};var Yb=function(a,b,c){if(0===b)return c;try{return a()}catch(d){return Yb(a,b-1,c)}};get_real_link=function(a){if(null==a)return null;for(;"A"!==a.nodeName.toUpperCase();)if(a=Yb(function(){return a.parentNode},3,null),null==a)return null;return a};var C,vb={get:function(a,b,c,
d){d=u({onError:na},d,{method:"GET"});Ea(a,b,B(c),d)},post:function(a,b,c,d){d=u({onError:na},d,{method:"POST"});Ea(a,b,B(c),d)}};"undefined"!==typeof window.Map&&(N.Cache=Map);var Bd=["noskim","norewrite"],Cd=["noskimlinks","noskim"].concat(["taboola","advert--taboola","trc_rbox","trc_related_container"]),Dd="*.criteo.com *.g.doubleclick.net *mjxads.internet.com *overture.com *pgpartner.co.uk *pgpartner.com *pricegrabber.co.uk *pricegrabber.com *youtube.com m.skimresources.com paid.outbrain.com track.celtra.com traffic.outbrain.com trc.taboola.com zergnet.com ad.doubleclick.net".split(" "),
rc=["itunes.apple.com","itunes.com","phobos.apple.com"],uc=N(function(){var a=[].concat(Ua,Dd);I&&a.push(I);return a}),tc=N(function(){return Cd.concat(Ta).map(function(a){return"."+a})}),sc=N(function(){return Bd.map(function(a){return"a[rel~='"+a+"']"})}),p;(function(a){a.AFFILIATE="AFFILIATE";a.PRE_AFFILIATED="PRE_AFFILIATED";a.UNKNOWN="UNKNOWN";a.TRACK="TRACK";a.IGNORE="IGNORE"})(p||(p={}));var Fb="__skimlinks__";var bc=function(a){a=U(a);if(Xb){var b=F(a);if(b in Ka)return b="[&?]"+Ka[b].name+
"=(http[^&]+)",b=new RegExp(b),decodeURIComponent(null!=a?a.match(b).pop():void 0)||a}return a};var Zb;(function(a){a.STARTING="STARTING";a.CANCELLED="CANCELLED";a.PENDING_API="PENDING_API";a.API_ERROR="API_ERROR";a.NO_OFFERS="NO_OFFERS";a.PENDING_MODULE="PENDING_MODULE";a.READY="READY"})(Zb||(Zb={}));var x={topics:{},on:function(a,b,c){K(this.topics[a])||(this.topics[a]=[]);var d;c&&(d=function(a){Ac(a,c)&&b(a)});this.topics[a].push(d||b)},publish:function(a,b){w(this.topics[a]||[],function(a){q(a)&&
a(b)})}},H=function(){function a(){var a=this;g(this,"ready",void 0);g(this,"pendingCallbacks",void 0);g(this,"subReadyStateList",void 0);g(this,"isReady",function(){return a.dependsOnSubReadyState()?Dc(a.subReadyStateList,function(a){return a.isReady()}):a.ready});g(this,"setReady",function(){a.dependsOnSubReadyState()||a.ready||(a.ready=!0,a.callPendingCallbacks())});g(this,"waitFor",function(b){b=ka(b,function(a){return!!a});a.subReadyStateList=a.subReadyStateList.concat(b);a.isReady()?a.callPendingCallbacks():
b.forEach(function(b){b.whenReady(a.whenSubReadyStateIsReady)})});g(this,"whenSubReadyStateIsReady",function(){a.isReady()&&a.callPendingCallbacks()});this.ready=!1;this.pendingCallbacks=[];this.subReadyStateList=[]}var b=a.prototype;b.whenReady=function(a){this.isReady()?a():this.pendingCallbacks.push(a)};b.dependsOnSubReadyState=function(){return 0!==this.subReadyStateList.length};b.callPendingCallbacks=function(){this.pendingCallbacks.forEach(function(a){setTimeout(a,0)});this.pendingCallbacks=
[]};return a}(),aa;(function(a){a.PRE_PAGE_LOAD="PRE_PAGE_LOAD";a.POST_PAGE_LOAD="POST_PAGE_LOAD";a.AUX="AUX"})(aa||(aa={}));var W=new (function(){function a(a,b){var c=this;g(this,"requestBeaconAPI",void 0);g(this,"beaconRequestHandler",void 0);g(this,"requestsHistory",void 0);g(this,"noRequestPendingReadyState",void 0);g(this,"beaconApiResponseReadyState",void 0);g(this,"postPageLoadCallReadyState",void 0);g(this,"beaconFullyReadyState",void 0);g(this,"whenNoRequestsPending",function(a){c.noRequestPendingReadyState.whenReady(a)});
g(this,"whenBeaconApiRequestCompleted",function(a){c.beaconApiResponseReadyState.whenReady(a)});g(this,"whenPostPageLoadBeaconCallCompleted",function(a){c.postPageLoadCallReadyState.whenReady(a)});g(this,"whenBeaconFullyReady",function(a){c.beaconFullyReadyState.whenReady(a)});g(this,"sendBeaconRequest",function(a,b){var d=0===a.length,e={readyState:new H,requestedDomains:a,response:null,beaconCallType:b};c.hasFetchedAtLeastOnce()&&d?(c.requestsHistory.push(e),e.readyState.setReady()):c.requestBeaconAPI(a,
b,function(b){b=u({requestedDomains:a},b);c.beaconRequestHandler(b);e.response=b;e.readyState.setReady()});c.updateRequestsHistory(e);e.readyState.whenReady(function(){e.response&&x.publish("EVENTS__BEACON__REQUEST_COMPLETED",e);c.resolveReadyStatesOnRequestCompleted(e)});return e});this.requestBeaconAPI=a;this.beaconRequestHandler=b;this.requestsHistory=[];this.noRequestPendingReadyState=new H;this.noRequestPendingReadyState.setReady();this.beaconApiResponseReadyState=new H;this.postPageLoadCallReadyState=
new H;this.beaconFullyReadyState=Ec(this.beaconApiResponseReadyState,this.postPageLoadCallReadyState)}var b=a.prototype;b.updateRequestsHistory=function(a){this.requestsHistory.push(a);this.noRequestPendingReadyState.waitFor([a.readyState])};b.resolveReadyStatesOnRequestCompleted=function(a){a.response&&!this.beaconApiResponseReadyState.isReady()&&this.beaconApiResponseReadyState.setReady();a.beaconCallType===aa.POST_PAGE_LOAD&&this.postPageLoadCallReadyState.setReady()};b.hasFetchedAtLeastOnce=function(){return 0!==
this.requestsHistory.length};return a}())(function(a,b,c){a=JSON.stringify({pubcode:ab,page:k.location.href,domains:a,link_swapping:!1});a={headers:{"Content-type":"application/x-www-form-urlencoded"},data:T({data:a}),withCredentials:!0};var d=Aa();"production"!==gd&&(d._=b);vb.post(""+ed,d,c,a)},function(a){var b={};a.country&&(b.country=a.country.toUpperCase());a.country_state&&(b.countryState=a.country_state);a.guid&&""===h.cookie&&(b.cookie=a.guid);la(a.consent)&&(b.consent=a.consent);a.csp&&
(b.cookieSyncString=a.csp);a.ts&&(b.lastBeaconTimestamp=a.ts);u(h,b);Cc(a.requestedDomains,a.merchant_domains)}),Q;(Q||(Q={})).ANCHOR_CLICK_INTERCEPTOR="ANCHOR_CLICK_INTERCEPTOR";var Hb={},P;(function(a){a.LEFT_CLICK="LEFT_CLICK";a.MIDDLE_CLICK="MIDDLE_CLICK";a.OTHER_CLICK="OTHER_CLICK"})(P||(P={}));var Pa;(function(a){a[a.LINK_SWAPPING=0]="LINK_SWAPPING";a[a.CONSENT=1]="CONSENT";a[a.INCENTIVE=2]="INCENTIVE";a[a.SKIMLINKS=3]="SKIMLINKS"})(Pa||(Pa={}));var t={campaign_ids:[],loading_started:(new Date).getTime(),
linksImpressions:{skimlinks:{count:0,urls:{}},skimwords:{count:0,urls:{}},unlinked:{count:0,urls:{}}},awaitedModules:[]},Nc=["skimlinks_included_ids","skimlinks_byrel","skimlinks_exrel","skimlinks_included_classes"],Ed=function(){function a(){g(this,"SERVICES",a.SERVICES);g(this,"getService",Na);g(this,"trackEvent",Gb);x.on("skim_js_init",this.onInit.bind(this));x.on("skim_js_start",this.onStart.bind(this));W.whenBeaconFullyReady(this.whenBeaconFullyReady.bind(this))}var b=a.prototype;b.onInit=function(){};
b.onStart=function(){};b.whenBeaconFullyReady=function(){};b.publishEvent=function(a,b){x.publish(a,b)};b.onEvent=function(a,b){x.on(a,b)};b.registerClickInterceptor=function(a,b){Na(Q.ANCHOR_CLICK_INTERCEPTOR).registerInterceptor(a,b)};return a}();g(Ed,"SERVICES",Q);new H;var Qa=!1,R=!1,X=null,Y=null,cd={detect:function(a){a:{try{var b=navigator.userAgent.toLowerCase();if(-1===b.indexOf("firefox")&&-1===b.indexOf("chrome")){R=!0;Qa=!1;break a}}catch(c){}b=""+11*Math.random();X=new Image;X.onload=
Nb;X.src="//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/,"1").replace(/\*/,b);Y=new Image;Y.onload=Nb;Y.src="//p.skimresources.com/px.gif?ch=*&rn=*".replace(/\*/,"2").replace(/\*/,b)}Mb(a,250)}};new H;var Uc={},$b=ib([!!Wb&&"mouseup","click"]),Fd=["auxclick","contextmenu","touchstart"],Gd=function(){function a(a,b){g(this,"type",void 0);g(this,"anchor",void 0);g(this,"affiliationType",void 0);g(this,"nativeEvent",void 0);g(this,"clientClickId",void 0);g(this,"targetedInterceptor",void 0);var c=
vc(a);this.type=this.getInternalClickType(b);this.anchor=a;this.affiliationType=c;this.nativeEvent=b;this.clientClickId=Ba();this.targetedInterceptor=null}var b=a.prototype;b.setAnchorClickInterceptorTarget=function(a){this.targetedInterceptor=a};b.setSourceApp=function(a){var b=this.anchor;z(b).sourceApp=a;sa(b)};b.setLinkSwappingMatchId=function(a){var b=this.anchor;z(b).linkSwappingMatchId=a;sa(b)};b.getInternalClickType=function(a){return r($b,a.type)&&0===a.button?P.LEFT_CLICK:"auxclick"!==a.type&&
"click"!==a.type||1!==a.button?P.OTHER_CLICK:P.MIDDLE_CLICK};return a}(),Zc=function(){function a(){var a=this;g(this,"interceptors",void 0);g(this,"onClick",function(b,c){var d=Xa(b);d&&(d.skimlinksOriginalHref&&d.skimlinksRestoreSwappedLink(),d=new Gd(d,b),a.dispatchAnchorClick(d,c))});g(this,"registerInterceptor",function(b,c){if(!q(b))throw Error("InterceptorHandler should be a function");if(A(c))throw Error("Missing priority for click interceptor");a.interceptors.push({handler:b,priority:c});
a.interceptors.sort(function(a,b){return a.priority-b.priority})});g(this,"triggerLeftClickFromMouseEvent",function(b,c){var d=a.findInterceptorsWithPriority(c);if(A(c))a.onClick(b);else if(d.length)a.onClick(b,d)});this.interceptors=[];this.initGlobalClickHandler()}var b=a.prototype;b.initGlobalClickHandler=function(){Pb(G,$b,this.onClick,!0);Pb(G,Fd,this.onClick,!0)};b.dispatchAnchorClick=function(a,b){var c=this;(b||this.interceptors).some(function(b){var d=b.handler;return c.isTargetedInterceptor(b,
a)?d(a):!1})};b.findInterceptorsWithPriority=function(a){return ka(this.interceptors,function(b){return b.priority===a})};b.isTargetedInterceptor=function(a,b){var c=b.targetedInterceptor===a.priority;return!b.targetedInterceptor||c};return a}(),Z=B(function(){Qb(aa.POST_PAGE_LOAD);document.removeEventListener("DOMContentLoaded",Z);document.removeEventListener("load",Z)}),ad={skimlinks:!1,skimwords:!1,unlinked:!1,audience:!1,GDPRConsent:!1,incentivePopup:!1};jb&&B(function(){x.on("skim_js_init",Jc);
x.on("skim_js_init",Pc);x.on("skim_js_start",Qc);$c()})()})();
