/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(a,b,c,d){var e={exports:{}};e.exports;(function(){var f=a.fbq;f.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var b=a.postMessage||function(){};if(!f){b({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");"error"in console&&console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return!1}return!0}())return;f.__fbeventsModules||(f.__fbeventsModules={},f.__fbeventsResolvedModules={},f.getFbeventsModules=function(a){f.__fbeventsResolvedModules[a]||(f.__fbeventsResolvedModules[a]=f.__fbeventsModules[a]());return f.__fbeventsResolvedModules[a]},f.fbIsModuleLoaded=function(a){return!!f.__fbeventsModules[a]},f.ensureModuleRegistered=function(b,a){f.fbIsModuleLoaded(b)||(f.__fbeventsModules[b]=a)});f.ensureModuleRegistered("signalsFBEventsGetIwlUrl",function(){return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var b=f.getFbeventsModules("signalsFBEventsGetTier"),c=d();function d(){try{if(a.trustedTypes&&a.trustedTypes.createPolicy){var b=a.trustedTypes;return b.createPolicy("facebook.com/signals/iwl",{createScriptURL:function(a){var b=new URL(a);b=b.hostname.endsWith(".facebook.com")&&b.pathname=="/signals/iwl.js";if(!b)throw new Error("Disallowed script URL");return a}})}}catch(a){}return null}e.exports=function(a,d){d=b(d);d=d==null?"www.facebook.com":"www."+d+".facebook.com";d="https://"+d+"/signals/iwl.js?pixel_id="+a;if(c!=null)return c.createScriptURL(d);else return d}})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("signalsFBEventsGetTier",function(){return function(f,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var a=/^https:\/\/www\.([A-Za-z0-9\.]+)\.facebook\.com\/tr\/?$/,b=["https://www.facebook.com/tr","https://www.facebook.com/tr/"];e.exports=function(c){if(b.indexOf(c)!==-1)return null;var d=a.exec(c);if(d==null)throw new Error("Malformed tier: "+c);return d[1]}})();return e.exports}(a,b,c,d)});f.ensureModuleRegistered("SignalsFBEvents.plugins.iwlbootstrapper",function(){return function(a,b,c,d){var e={exports:{}};e.exports;(function(){"use strict";var c=f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),d=f.getFbeventsModules("SignalsFBEventsLogging"),g=f.getFbeventsModules("SignalsFBEventsNetworkConfig"),h=f.getFbeventsModules("SignalsFBEventsPlugin"),i=f.getFbeventsModules("signalsFBEventsGetIwlUrl"),j=f.getFbeventsModules("signalsFBEventsGetTier"),k=d.logUserError,l=/^https:\/\/.*\.facebook\.com$/i,m="FACEBOOK_IWL_CONFIG_STORAGE_KEY",n=null;e.exports=new h(function(d,e){try{n=a.sessionStorage?a.sessionStorage:{getItem:function(a){return null},removeItem:function(a){},setItem:function(a,b){}}}catch(a){return}function h(c,d){var e=b.createElement("script");e.async=!0;e.onload=function(){if(!a.FacebookIWL||!a.FacebookIWL.init)return;var b=j(g.ENDPOINT);b!=null&&a.FacebookIWL.set&&a.FacebookIWL.set("tier",b);d()};a.FacebookIWLSessionEnd=function(){n.removeItem(m),a.close()};e.src=i(c,g.ENDPOINT);b.body&&b.body.appendChild(e)}var o=!1,p=function(a){return!!(e&&e.pixelsByID&&Object.prototype.hasOwnProperty.call(e.pixelsByID,a))};function q(){if(o)return;var b=n.getItem(m);if(!b)return;b=JSON.parse(b);var c=b.pixelID,d=b.graphToken,e=b.sessionStartTime;o=!0;h(c,function(){var b=p(c)?c:null;a.FacebookIWL.init(b,d,e)})}function r(b){if(o)return;h(b,function(){return a.FacebookIWL.showConfirmModal(b)})}function s(a,b,c){n.setItem(m,JSON.stringify({graphToken:a,pixelID:b,sessionStartTime:c})),q()}c.listen(function(b){var c=b.graphToken;b=b.pixelID;s(c,b);a.FacebookIWLSessionEnd=function(){return n.removeItem(m)}});function d(a){var b=a.data,c=b.graphToken,d=b.msg_type,f=b.pixelID;b=b.sessionStartTime;if(e&&e.pixelsByID&&e.pixelsByID[f]&&e.pixelsByID[f].codeless==="false"){k({pixelID:f,type:"SITE_CODELESS_OPT_OUT"});return}if(n.getItem(m)||!l.test(a.origin)||!(a.data&&(d==="FACEBOOK_IWL_BOOTSTRAP"||d==="FACEBOOK_IWL_CONFIRM_DOMAIN")))return;switch(d){case"FACEBOOK_IWL_BOOTSTRAP":a.source.postMessage("FACEBOOK_IWL_BOOTSTRAP_ACK",a.origin);s(c,f,b);break;case"FACEBOOK_IWL_CONFIRM_DOMAIN":a.source.postMessage("FACEBOOK_IWL_CONFIRM_DOMAIN_ACK",a.origin);r(f);break}}if(n.getItem(m)){q();return}a.opener&&a.addEventListener("message",d)})})();return e.exports}(a,b,c,d)});e.exports=f.getFbeventsModules("SignalsFBEvents.plugins.iwlbootstrapper");f.registerPlugin&&f.registerPlugin("fbevents.plugins.iwlbootstrapper",e.exports);f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper",function(){return e.exports})})()})(window,document,location,history);
fbq.registerPlugin("fbevents.plugins.prohibitedsources", {__fbEventsPlugin: 1, plugin: function(fbq, instance, config) { /* empty plugin */ }});