"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(t){var e,n=navigator.userAgent,i=/iphone/i.test(n),a=/chrome/i.test(n),r=/android/i.test(n);t.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},t.fn.extend({caret:function(t,e){var n;return 0===this.length||this.is(":hidden")?void 0:"number"==typeof t?(e="number"==typeof e?e:t,this.each(function(){this.setSelectionRange?this.setSelectionRange(t,e):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",t),n.select())})):(this[0].setSelectionRange?(t=this[0].selectionStart,e=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),t=0-n.duplicate().moveStart("character",-1e5),e=t+n.text.length),{begin:t,end:e})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var s,c,h,f,d,u,l,p;if(!n&&this.length>0){s=t(this[0]);var g=s.data(t.mask.dataName);return g?g():void 0}return o=t.extend({autoclear:t.mask.autoclear,placeholder:t.mask.placeholder,completed:null},o),c=t.mask.definitions,h=[],f=l=n.length,d=null,t.each(n.split(""),function(t,e){"?"==e?(l--,f=t):c[e]?(h.push(new RegExp(c[e])),null===d&&(d=h.length-1),f>t&&(u=h.length-1)):h.push(null)}),this.trigger("unmask").each(function(){function s(){if(o.completed){for(var t=d;u>=t;t++)if(h[t]&&j[t]===g(t))return;o.completed.call(I)}}function g(t){return o.placeholder.charAt(t<o.placeholder.length?t:0)}function m(t){for(;++t<l&&!h[t];);return t}function b(t){for(;--t>=0&&!h[t];);return t}function v(t,e){var n,i;if(!(0>t)){for(n=t,i=m(e);l>n;n++)if(h[n]){if(!(l>i&&h[n].test(j[i])))break;j[n]=j[i],j[i]=g(i),i=m(i)}S(),I.caret(Math.max(d,t))}}function y(t){var e,n,i,a;for(e=t,n=g(t);l>e;e++)if(h[e]){if(i=m(e),a=j[e],j[e]=n,!(l>i&&h[i].test(a)))break;n=a}}function k(){var t=I.val(),e=I.caret();if(p&&p.length&&p.length>t.length){for(T(!0);e.begin>0&&!h[e.begin-1];)e.begin--;if(0===e.begin)for(;e.begin<d&&!h[e.begin];)e.begin++;I.caret(e.begin,e.begin)}else{for(T(!0);e.begin<l&&!h[e.begin];)e.begin++;I.caret(e.begin,e.begin)}s()}function x(){T(),I.val()!=B&&I.change()}function w(t){if(!I.prop("readonly")){var e,n,a,r=t.which||t.keyCode;p=I.val(),8===r||46===r||i&&127===r?(e=I.caret(),n=e.begin,a=e.end,a-n===0&&(n=46!==r?b(n):a=m(n-1),a=46===r?m(a):a),z(n,a),v(n,a-1),t.preventDefault()):13===r?x.call(this,t):27===r&&(I.val(B),I.caret(0,T()),t.preventDefault())}}function $(e){if(!I.prop("readonly")){var n,i,a,o=e.which||e.keyCode,c=I.caret();if(!(e.ctrlKey||e.altKey||e.metaKey||32>o)&&o&&13!==o){if(c.end-c.begin!==0&&(z(c.begin,c.end),v(c.begin,c.end-1)),n=m(c.begin-1),l>n&&(i=String.fromCharCode(o),h[n].test(i))){if(y(n),j[n]=i,S(),a=m(n),r){var f=function(){t.proxy(t.fn.caret,I,a)()};setTimeout(f,0)}else I.caret(a);c.begin<=u&&s()}e.preventDefault()}}}function z(t,e){var n;for(n=t;e>n&&l>n;n++)h[n]&&(j[n]=g(n))}function S(){I.val(j.join(""))}function T(t){var e,n,i,a=I.val(),r=-1;for(e=0,i=0;l>e;e++)if(h[e]){for(j[e]=g(e);i++<a.length;)if(n=a.charAt(i-1),h[e].test(n)){j[e]=n,r=e;break}if(i>a.length){z(e+1,l);break}}else j[e]===a.charAt(i)&&i++,f>e&&(r=e);return t?S():f>r+1?o.autoclear||j.join("")===A?(I.val()&&I.val(""),z(0,l)):S():(S(),I.val(I.val().substring(0,r+1))),f?e:d}var I=t(this),j=t.map(n.split(""),function(t,e){return"?"!=t?c[t]?g(e):t:void 0}),A=j.join(""),B=I.val();I.data(t.mask.dataName,function(){return t.map(j,function(t,e){return h[e]&&t!=g(e)?t:null}).join("")}),I.one("unmask",function(){I.off(".mask").removeData(t.mask.dataName)}).on("focus.mask",function(){if(!I.prop("readonly")){clearTimeout(e);var t;B=I.val(),t=T(),e=setTimeout(function(){I.get(0)===document.activeElement&&(S(),t==n.replace("?","").length?I.caret(0,t):I.caret(t))},10)}}).on("blur.mask",x).on("keydown.mask",w).on("keypress.mask",$).on("input.mask paste.mask",function(){I.prop("readonly")||setTimeout(function(){var t=T(!0);I.caret(t),s()},0)}),a&&r&&I.off("input.mask").on("input.mask",k),T()})}})}),function(t,e,n){t.fn.backstretch=function(i,a){return(i===n||0===i.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),n=e.data("backstretch");if(n){if("string"==typeof i&&"function"==typeof n[i])return void n[i](a);a=t.extend(n.options,a),n.destroy(!0)}n=new r(this,i,a),e.data("backstretch",n)})},t.backstretch=function(e,n){return t("body").backstretch(e,n).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==n},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var i={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},a={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},r=function(n,a,r){this.options=t.extend({},t.fn.backstretch.defaults,r||{}),this.images=t.isArray(a)?a:[a],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=t(n),this.$root=this.isBody?t(o?e:document):this.$container,n=this.$container.children(".backstretch").first(),this.$wrap=n.length?n:t('<div class="backstretch"></div>').css(i).appendTo(this.$container),this.isBody||(n=this.$container.css("position"),a=this.$container.css("zIndex"),this.$container.css({position:"static"===n?"relative":n,zIndex:"auto"===a?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&o?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};r.prototype={resize:function(){try{var t,n={left:0,top:0},i=this.isBody?this.$root.width():this.$root.innerWidth(),a=i,r=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),o=a/this.$img.data("ratio");o>=r?(t=(o-r)/2,this.options.centeredY&&(n.top="-"+t+"px")):(o=r,a=o*this.$img.data("ratio"),t=(a-i)/2,this.options.centeredX&&(n.left="-"+t+"px")),this.$wrap.css({width:i,height:r}).find("img:not(.deleteable)").css({width:a,height:o}).css(n)}catch(s){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){var n=this,i=n.$wrap.find("img").addClass("deleteable"),r={relatedTarget:n.$container[0]};return n.$container.trigger(t.Event("backstretch.before",r),[n,e]),this.index=e,clearInterval(n.interval),n.$img=t("<img />").css(a).bind("load",function(a){var o=this.width||t(a.target).width();a=this.height||t(a.target).height(),t(this).data("ratio",o/a),t(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),t(["after","show"]).each(function(){n.$container.trigger(t.Event("backstretch."+this,r),[n,e])})}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[e]),n}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var o,s=navigator.userAgent,c=navigator.platform,h=s.match(/AppleWebKit\/([0-9]+)/),h=!!h&&h[1],f=s.match(/Fennec\/([0-9]+)/),f=!!f&&f[1],d=s.match(/Opera Mobi\/([0-9]+)/),u=!!d&&d[1],l=s.match(/MSIE ([0-9]+)/),l=!!l&&l[1];o=!((-1<c.indexOf("iPhone")||-1<c.indexOf("iPad")||-1<c.indexOf("iPod"))&&h&&534>h||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||d&&7458>u||-1<s.indexOf("Android")&&h&&533>h||f&&6>f||"palmGetResource"in e&&h&&534>h||-1<s.indexOf("MeeGo")&&-1<s.indexOf("NokiaBrowser/8.5.0")||l&&6>=l)}(jQuery,window);