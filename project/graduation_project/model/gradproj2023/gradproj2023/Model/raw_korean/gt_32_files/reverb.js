define("reverb",[],function(){"use strict";var i=function(){var n,t,r="",a=!1,o=!0;function c(e){var n=new RegExp(/[^a-z0-9\.]+/g),t=new RegExp(/\.+/g),r=new RegExp(/(^_+)|(_+$)/g),a=e&&e.toLowerCase().replace(n,"_").replace(t,".").replace(r,"")||"no.name.page";if(e!==a&&("string"!=typeof e||0===e.replace(/ */,"").length))throw new Error("REVERB-ERROR: Countername must be a non-empty string");return-1===a.search(/\.page$/)&&(a+=".page"),a}return{invoke:function(e,n){a||("function"==typeof n&&(t=n),e||(e={trackUser:!1}),!1===e.useATI&&(o=!1),o?function(e,n){window.ATInternet={onTrackerLoad:function(){n.tagLoaded(e.atiOpts)}};var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://mybbc-analytics.files.bbci.co.uk/reverb-client-js/smarttag.min.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(t,null)}(e,i):(a=!0,this.contentLoaded()))},reset:function(){r="",n=null,o=!(a=!1)},tagLoaded:function(e){e instanceof Object||(e={}),e.secure=!0,n=new ATInternet.Tracker.Tag(e),a=!0,this.contentLoaded()},isReady:function(){return a},trackPage:function(e){a&&o&&(e?n.page.set({name:e}):n.page.set({name:r}),n.dispatch())},setCounterName:function(e){r=c(e)},getCounterName:function(){return r},generateCounterName:function(){var e=new RegExp(/\/$/),n=new RegExp(/^\//),t=new RegExp(/\//g),r=window.location.pathname.replace(n,"").replace(e,"").replace(t,".");if(""===r){var a=new RegExp(/ \- /),o=new RegExp(/BBC /gi);r=document.title.replace(a,"").replace(o,"")}return c(r)},contentLoaded:function(){""===r&&this.setCounterName(this.generateCounterName()),t&&(t(),t=null)},getSiteId:function(){return n.getConfig("site")}}}();return i});
