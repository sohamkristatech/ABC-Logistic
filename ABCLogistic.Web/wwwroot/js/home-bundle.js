/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (a[t] = w.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)), (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (p = oe.setDocument = function (e) {
                var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement
                    ? ((d = a),
                      (h = d.documentElement),
                      (g = !o(d)),
                      w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                      (n.attributes = ue(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                          return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                          ? ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n,
                                        r,
                                        i,
                                        o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        (i = t.getElementsByName(e)), (r = 0);
                                        while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    }
                                    return [];
                                }
                            })),
                      (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                          }),
                      (v = []),
                      (y = []),
                      (n.qsa = Q.test(d.querySelectorAll)) &&
                          (ue(function (e) {
                              (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                                  e.querySelectorAll(":checked").length || y.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                          }),
                          ue(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = d.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                  (h.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  y.push(",.*:");
                          })),
                      (n.matchesSelector = Q.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                          ue(function (e) {
                              (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), v.push("!=", W);
                          }),
                      (y = y.length && new RegExp(y.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = Q.test(h.compareDocumentPosition)),
                      (x =
                          t || Q.test(h.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                              : function (e, t) {
                                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                    return !1;
                                }),
                      (D = t
                          ? function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    r ||
                                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                        ? e === d || (e.ownerDocument === w && x(w, e))
                                            ? -1
                                            : t === d || (t.ownerDocument === w && x(w, t))
                                            ? 1
                                            : c
                                            ? O(c, e) - O(c, t)
                                            : 0
                                        : 4 & r
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                                if (i === o) return ce(e, t);
                                n = e;
                                while ((n = n.parentNode)) a.unshift(n);
                                n = t;
                                while ((n = n.parentNode)) s.unshift(n);
                                while (a[r] === s[r]) r++;
                                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                            }),
                      d)
                    : d;
            }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (((e.ownerDocument || e) !== d && p(e), (t = t.replace(z, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))))
                    try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else while ((t = e[r++])) n += i(t);
                return n;
            }),
            ((r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                E(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = oe.attr(r, e);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                      ((i += ""),
                                      "=" === t
                                          ? i === n
                                          : "!=" === t
                                          ? i !== n
                                          : "^=" === t
                                          ? n && 0 === i.indexOf(n)
                                          : "*=" === t
                                          ? n && i.indexOf(n) > -1
                                          : "$=" === t
                                          ? n && i.slice(-n.length) === n
                                          : "~=" === t
                                          ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                          : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, u) {
                                  var l,
                                      c,
                                      f,
                                      p,
                                      d,
                                      h,
                                      g = o !== a ? "nextSibling" : "previousSibling",
                                      y = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      m = !u && !s,
                                      x = !1;
                                  if (y) {
                                      if (o) {
                                          while (g) {
                                              p = t;
                                              while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                              h = g = "only" === e && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                          (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2]), (p = d && y.childNodes[d]);
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if (1 === p.nodeType && ++x && p === t) {
                                                  c[e] = [T, d, x];
                                                  break;
                                              }
                                      } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b]
                            ? i(t)
                            : i.length > 1
                            ? ((n = [e, e, "", t]),
                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, n) {
                                        var r,
                                            o = i(e, t),
                                            a = o.length;
                                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, n);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b]
                            ? se(function (e, t, n, i) {
                                  var o,
                                      a = r(e, null, i, []),
                                      s = e.length;
                                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, i, o) {
                                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(Z, ee)),
                            function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            U.test(e || "") || oe.error("unsupported lang: " + e),
                            (e = e.replace(Z, ee).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === h;
                    },
                    focus: function (e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he(function () {
                        return [0];
                    }),
                    last: he(function (e, t) {
                        return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = r.pseudos.eq);
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (u = []), (l = r.preFilter);
                while (s) {
                    (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length)));
                    for (a in r.filter) !(i = V[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                      while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                          while ((t = t[r]))
                              if (1 === t.nodeType || a)
                                  if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                  }
                      return !1;
                  };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                      var i = e.length;
                      while (i--) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                se(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g = o || be(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!o && t) ? g : we(g, p, e, s, u),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                    if ((n && n(y, v, s, u), r)) {
                        (l = we(v, d)), r(l, [], s, u), (c = l.length);
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                (l = []), (c = v.length);
                                while (c--) (f = v[c]) && l.push((y[c] = f));
                                i(null, (v = []), l, u);
                            }
                            c = v.length;
                            while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), (n = t.length);
                    while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e;
                }
                return o;
            }),
            (u = oe.select = function (e, t, n, i) {
                var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (((l = u[o]), r.relative[(c = l.type)])) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
                            break;
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(D).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                le(P, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            oe
        );
    })(e);
    (w.find = E), (w.expr = E.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = E.uniqueSort), (w.text = E.getText), (w.isXMLDoc = E.isXML), (w.contains = E.contains), (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                        : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                                                    : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                              try {
                                                  l();
                                              } catch (e) {
                                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                              }
                                          };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                        s &&
                            a.add(
                                function () {
                                    r = s;
                                },
                                n[3 - e][2].disable,
                                n[3 - e][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                    };
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }
    "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(w(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        n = a.length;
                        while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : z(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = K.get(o, e))) return n;
                                  if (void 0 !== (n = ne(o, e))) return n;
                              } else
                                  this.each(function () {
                                      K.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = J.get(e, t)), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = y.events) || (u = y.events = {}),
                    (a = y.handle) ||
                        (a = y.handle = function (t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = w.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = w.event.special[d] || {}),
                            (c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = w.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                            ((t.handleObj = a), (t.data = a.data), void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === r || w.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
                delete a.handle, (a.events = {});
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (p && ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    (l = s[f]), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && We.test(a) && Be.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + oe[a] + "Width", !0, i)) : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                        n === n &&
                        ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                  return et(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)),
                        s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            se(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
            (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
            (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = y && y.display) && (l = J.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), fe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === w.css(e, "float") &&
                    (u ||
                        (p.done(function () {
                            h.display = l;
                        }),
                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                (u = !1);
            for (r in d)
                u ||
                    (y ? "hidden" in y && (g = y.hidden) : (y = J.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !g),
                    g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                    r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (((r = G(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if ((r = pt.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
            return (
                w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                      var t, i, o, a;
                      if (r) {
                          (i = 0), (o = w(this)), (a = xt(e));
                          while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                      (i = w.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                        })
                    );
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(m + w.event.triggered) &&
                    (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                        (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                        (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !Y(i) ||
                        (c &&
                            g(i[m]) &&
                            !y(i) &&
                            ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                            t.isPropagationStopped() && h.addEventListener(m, Tt),
                            i[m](),
                            t.isPropagationStopped() && h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                            u && (i[c] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    },
                };
            });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n)) while ((r = o[i++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                (h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((o = o.replace(Ht, "$1")), (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                      (h.url = o + d)),
                h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c)) return E;
                h.async &&
                    h.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        E.abort("timeout");
                    }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                    ((c = !0),
                    u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                    r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                          204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                        : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                    m.fireWith(g, [E, C]),
                    f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return g(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Qt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || w.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                (o = A.exec(e)),
                (a = !n && []),
                o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                    w
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
                return z(
                    this,
                    function (e, r, i) {
                        var o;
                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                        this,
                        function (t, n, i) {
                            var o;
                            return y(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === i
                                ? w.css(t, n, s)
                                : w.style(t, n, i, s);
                        },
                        t,
                        a ? i : void 0,
                        a
                    );
                };
            });
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                    (i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }),
                    (i.guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
});

/* popper JS */
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
})(this, function () {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView,
            n = o.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        return 11 === e ? pe : 10 === e ? se : pe || se;
    }
    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? p(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode);
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host);
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, "top"),
            i = l(t, "left"),
            r = o ? -1 : 1;
        return (e.top += n * r), (e.bottom += n * r), (e.left += i * r), (e.right += i * r), e;
    }
    function m(e, t) {
        var o = "x" === t ? "Left" : "Top",
            n = "Left" == o ? "Right" : "Bottom";
        return parseFloat(e["border" + o + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10);
    }
    function h(e, t, o, n) {
        return ee(
            t["offset" + e],
            t["scroll" + e],
            o["client" + e],
            o["offset" + e],
            o["scroll" + e],
            r(10) ? parseInt(o["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
        );
    }
    function c(e) {
        var t = e.body,
            o = e.documentElement,
            n = r(10) && getComputedStyle(o);
        return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
    }
    function g(e) {
        return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, "top"),
                    i = l(e, "left");
                (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
            } else o = e.getBoundingClientRect();
        } catch (t) {}
        var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
        }
        return g(p);
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = "HTML" === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
        var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height });
        if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
            var w = parseFloat(m.marginTop, 10),
                y = parseFloat(m.marginLeft, 10);
            (b.top -= h - w), (b.bottom -= h - w), (b.left -= c - y), (b.right -= c - y), (b.marginTop = w), (b.marginLeft = y);
        }
        return (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) && (b = f(b, o)), b;
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0),
            r = ee(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, "left"),
            d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };
        return g(d);
    }
    function y(e) {
        var n = e.nodeName;
        if ("BODY" === n || "HTML" === n) return !1;
        if ("fixed" === t(e, "position")) return !0;
        var i = o(e);
        return !!i && y(i);
    }
    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && "none" === t(o, "transform"); ) o = o.parentElement;
        return o || document.documentElement;
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = { top: 0, left: 0 },
            d = p ? E(e) : a(e, t);
        if ("viewport" === r) s = w(d, p);
        else {
            var l;
            "scrollParent" === r ? ((l = n(o(t))), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : "window" === r ? (l = e.ownerDocument.documentElement) : (l = r);
            var f = b(l, d, p);
            if ("HTML" === l.nodeName && !y(d)) {
                var m = c(e.ownerDocument),
                    h = m.height,
                    g = m.width;
                (s.top += f.top - f.marginTop), (s.bottom = h + f.top), (s.left += f.left - f.marginLeft), (s.right = g + f.left);
            } else s = f;
        }
        i = i || 0;
        var u = "number" == typeof i;
        return (s.left += u ? i : i.left || 0), (s.top += u ? i : i.top || 0), (s.right -= u ? i : i.right || 0), (s.bottom -= u ? i : i.bottom || 0), s;
    }
    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = v(o, n, r, i),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s)
                .map(function (e) {
                    return fe({ key: e }, s[e], { area: x(s[e]) });
                })
                .sort(function (e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? E(t) : a(t, o);
        return b(o, i, n);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView,
            o = t.getComputedStyle(e),
            n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
            r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
        return r;
    }
    function T(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }
    function D(e, t, o) {
        o = o.split("-")[0];
        var n = S(e),
            i = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (i[p] = t[p] + t[d] / 2 - n[d] / 2), (i[s] = o === s ? t[s] - n[a] : t[T(s)]), i;
    }
    function C(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o;
            });
        var n = C(e, function (e) {
            return e[t] === o;
        });
        return e.indexOf(n);
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
        return (
            i.forEach(function (t) {
                t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t["function"] || t.fn;
                t.enabled && e(n) && ((o.offsets.popper = g(o.offsets.popper)), (o.offsets.reference = g(o.offsets.reference)), (o = n(o, t)));
            }),
            o
        );
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            (e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed)),
                (e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                (e.originalPlacement = e.placement),
                (e.positionFixed = this.options.positionFixed),
                (e.offsets.popper = D(this.popper, e.offsets.reference, e.placement)),
                (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                (e = P(this.modifiers, e)),
                this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t;
        });
    }
    function H(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function B() {
        return (
            (this.state.isDestroyed = !0),
            W(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style.left = ""),
                (this.popper.style.right = ""),
                (this.popper.style.bottom = ""),
                (this.popper.style.willChange = ""),
                (this.popper.style[H("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
    }
    function F(e, t, o, i) {
        (o.updateBound = i), A(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return M(r, "scroll", o.updateBound, o.scrollParents), (o.scrollElement = r), (o.eventsEnabled = !0), o;
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function R(e, t) {
        return (
            A(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = R(this.reference, this.state)));
    }
    function Y(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && Y(t[o]) && (n = "px"), (e.style[o] = t[o] + n);
        });
    }
    function V(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e, t) {
        var o = e.offsets,
            n = o.popper,
            i = o.reference,
            r = $,
            p = function (e) {
                return e;
            },
            s = r(i.width),
            d = r(n.width),
            a = -1 !== ["left", "right"].indexOf(e.placement),
            l = -1 !== e.placement.indexOf("-"),
            f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
            m = t ? r : p;
        return { left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right) };
    }
    function K(e, t, o) {
        var n = C(e, function (e) {
                var o = e.name;
                return o === t;
            }),
            i =
                !!n &&
                e.some(function (e) {
                    return e.name === o && e.enabled && e.order < n.order;
                });
        if (!i) {
            var r = "`" + t + "`";
            console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
        }
        return i;
    }
    function z(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ce.indexOf(e),
            n = ce.slice(o + 1).concat(ce.slice(0, o));
        return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = n;
            }
            var d = g(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (a = "vh" === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0)), (a / 100) * r;
        }
        return r;
    }
    function X(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(n),
            p = e.split(/(\+|\-)/).map(function (e) {
                return e.trim();
            }),
            s = p.indexOf(
                C(p, function (e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return (
            (a = a.map(function (e, n) {
                var i = (1 === n ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (p = !0), e) : p ? ((e[e.length - 1] += t), (p = !1), e) : e.concat(t);
                    }, [])
                    .map(function (e) {
                        return _(e, i, t, o);
                    });
            })),
            a.forEach(function (e, t) {
                e.forEach(function (o, n) {
                    Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
                });
            }),
            i
        );
    }
    function J(e, t) {
        var o,
            n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split("-")[0];
        return (
            (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
            "left" === d ? ((p.top += o[0]), (p.left -= o[1])) : "right" === d ? ((p.top += o[0]), (p.left += o[1])) : "top" === d ? ((p.left += o[0]), (p.top -= o[1])) : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document, oe = ["Edge", "Trident", "Firefox"], ne = 0, ie = 0; ie < oe.length; ie += 1)
        if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
            ne = 1;
            break;
        }
    var i = te && window.Promise,
        re = i
            ? function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function () {
                              (t = !1), e();
                          }));
                  };
              }
            : function (e) {
                  var t = !1;
                  return function () {
                      t ||
                          ((t = !0),
                          setTimeout(function () {
                              (t = !1), e();
                          }, ne));
                  };
              },
        pe = te && !!(window.MSInputMethodContext && document.documentMode),
        se = te && /MSIE 10/.test(navigator.userAgent),
        de = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        ae = (function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) (o = t[n]), (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t;
            };
        })(),
        le = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
        },
        fe =
            Object.assign ||
            function (e) {
                for (var t, o = 1; o < arguments.length; o++) for (var n in ((t = arguments[o]), t)) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
            },
        me = te && /Firefox/i.test(navigator.userAgent),
        he = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ce = he.slice(3),
        ge = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        ue = (function () {
            function t(o, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                de(this, t),
                    (this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update);
                    }),
                    (this.update = re(this.update.bind(this))),
                    (this.options = fe({}, t.Defaults, r)),
                    (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = n && n.jquery ? n[0] : n),
                    (this.options.modifiers = {}),
                    Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                        i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function (e) {
                            return fe({ name: e }, i.options.modifiers[e]);
                        })
                        .sort(function (e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function (t) {
                        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), (this.state.eventsEnabled = p);
            }
            return (
                ae(t, [
                    {
                        key: "update",
                        value: function () {
                            return k.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return B.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return I.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return U.call(this);
                        },
                    },
                ]),
                t
            );
        })();
    return (
        (ue.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
        (ue.placements = he),
        (ue.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = t.split("-")[1];
                        if (n) {
                            var i = e.offsets,
                                r = i.reference,
                                p = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) };
                            e.offsets.popper = fe({}, p, l[n]);
                        }
                        return e;
                    },
                },
                offset: { order: 200, enabled: !0, fn: J, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.boundariesElement || p(e.instance.popper);
                        e.instance.reference === o && (o = p(o));
                        var n = H("transform"),
                            i = e.instance.popper.style,
                            r = i.top,
                            s = i.left,
                            d = i[n];
                        (i.top = ""), (i.left = ""), (i[n] = "");
                        var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                        (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
                        var l = t.priority,
                            f = e.offsets.popper,
                            m = {
                                primary: function (e) {
                                    var o = f[e];
                                    return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
                                },
                                secondary: function (e) {
                                    var o = "right" === e ? "left" : "top",
                                        n = f[o];
                                    return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ("right" === e ? f.width : f.height))), le({}, o, n);
                                },
                            };
                        return (
                            l.forEach(function (e) {
                                var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                                f = fe({}, f, m[t](e));
                            }),
                            (e.offsets.popper = f),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            o = t.popper,
                            n = t.reference,
                            i = e.placement.split("-")[0],
                            r = Z,
                            p = -1 !== ["top", "bottom"].indexOf(i),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, o) {
                        var n;
                        if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = o.element;
                        if ("string" == typeof i) {
                            if (((i = e.instance.popper.querySelector(i)), !i)) return e;
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            c = a ? "bottom" : "right",
                            u = S(i)[l];
                        d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), (e.offsets.popper = g(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            w = t(e.instance.popper),
                            y = parseFloat(w["margin" + f], 10),
                            E = parseFloat(w["border" + f + "Width"], 10),
                            v = b - e.offsets.popper[m] - y - E;
                        return (v = ee(Q(s[l] - u, v), 0)), (e.arrowElement = i), (e.offsets.arrow = ((n = {}), le(n, m, $(v)), le(n, h, ""), n)), e;
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (W(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            n = e.placement.split("-")[0],
                            i = T(n),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case ge.FLIP:
                                p = [n, i];
                                break;
                            case ge.CLOCKWISE:
                                p = G(n);
                                break;
                            case ge.COUNTERCLOCKWISE:
                                p = G(n, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function (s, d) {
                                if (n !== s || p.length === d + 1) return e;
                                (n = e.placement.split("-")[0]), (i = T(n));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = Z,
                                    m = ("left" === n && f(a.right) > f(l.left)) || ("right" === n && f(a.left) < f(l.right)) || ("top" === n && f(a.bottom) > f(l.top)) || ("bottom" === n && f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b = ("left" === n && h) || ("right" === n && c) || ("top" === n && g) || ("bottom" === n && u),
                                    w = -1 !== ["top", "bottom"].indexOf(n),
                                    y = !!t.flipVariations && ((w && "start" === r && h) || (w && "end" === r && c) || (!w && "start" === r && g) || (!w && "end" === r && u));
                                (m || b || y) &&
                                    ((e.flipped = !0),
                                    (m || b) && (n = p[d + 1]),
                                    y && (r = z(r)),
                                    (e.placement = n + (r ? "-" + r : "")),
                                    (e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement))),
                                    (e = P(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            n = e.offsets,
                            i = n.popper,
                            r = n.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (i[p ? "left" : "top"] = r[o] - (s ? i[p ? "width" : "height"] : 0)), (e.placement = T(t)), (e.offsets.popper = g(i)), e;
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            o = C(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var o = t.x,
                            n = t.y,
                            i = e.offsets.popper,
                            r = C(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s,
                            d,
                            a = void 0 === r ? t.gpuAcceleration : r,
                            l = p(e.instance.popper),
                            f = u(l),
                            m = { position: i.position },
                            h = q(e, 2 > window.devicePixelRatio || !me),
                            c = "bottom" === o ? "top" : "bottom",
                            g = "right" === n ? "left" : "right",
                            b = H("transform");
                        if (
                            ((d = "bottom" == c ? ("HTML" === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom) : h.top),
                            (s = "right" == g ? ("HTML" === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right) : h.left),
                            a && b)
                        )
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"), (m[c] = 0), (m[g] = 0), (m.willChange = "transform");
                        else {
                            var w = "bottom" == c ? -1 : 1,
                                y = "right" == g ? -1 : 1;
                            (m[c] = d * w), (m[g] = s * y), (m.willChange = c + ", " + g);
                        }
                        var E = { "x-placement": e.placement };
                        return (e.attributes = fe({}, E, e.attributes)), (e.styles = fe({}, m, e.styles)), (e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles)), e;
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
                    },
                    onLoad: function (e, t, o, n, i) {
                        var r = L(i, t, e, o.positionFixed),
                            p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                        return t.setAttribute("x-placement", p), j(t, { position: o.positionFixed ? "fixed" : "absolute" }), o;
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        ue
    );
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], e)
        : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols &&
                (e = e.concat(
                    Object.getOwnPropertySymbols(r).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable;
                    })
                )),
                e.forEach(function (t) {
                    var e, n, i;
                    (e = o), (i = r[(n = t)]), n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i);
                });
        }
        return o;
    }
    (g = g && g.hasOwnProperty("default") ? g.default : g), (u = u && u.hasOwnProperty("default") ? u.default : u);
    var e = "transitionend";
    function n(t) {
        var e = this,
            n = !1;
        return (
            g(this).one(_.TRANSITION_END, function () {
                n = !0;
            }),
            setTimeout(function () {
                n || _.triggerTransitionEnd(e);
            }, t),
            this
        );
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
            return t;
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(e) ? e : null;
            } catch (t) {
                return null;
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? ((e = e.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
        },
        reflow: function (t) {
            return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
            g(t).trigger(e);
        },
        supportsTransitionEnd: function () {
            return Boolean(e);
        },
        isElement: function (t) {
            return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s =
                            r && _.isElement(r)
                                ? "element"
                                : ((a = r),
                                  {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                }
            var a;
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        },
    };
    (g.fn.emulateTransitionEnd = n),
        (g.event.special[_.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function (t) {
                if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            },
        });
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = g.fn[o],
        h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
        f = "alert",
        d = "fade",
        m = "show",
        p = (function () {
            function i(t) {
                this._element = t;
            }
            var t = i.prototype;
            return (
                (t.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }),
                (t.dispose = function () {
                    g.removeData(this._element, r), (this._element = null);
                }),
                (t._getRootElement = function (t) {
                    var e = _.getSelectorFromElement(t),
                        n = !1;
                    return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
                }),
                (t._triggerCloseEvent = function (t) {
                    var e = g.Event(h.CLOSE);
                    return g(t).trigger(e), e;
                }),
                (t._removeElement = function (e) {
                    var n = this;
                    if ((g(e).removeClass(m), g(e).hasClass(d))) {
                        var t = _.getTransitionDurationFromElement(e);
                        g(e)
                            .one(_.TRANSITION_END, function (t) {
                                return n._destroyElement(e, t);
                            })
                            .emulateTransitionEnd(t);
                    } else this._destroyElement(e);
                }),
                (t._destroyElement = function (t) {
                    g(t).detach().trigger(h.CLOSED).remove();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(r);
                        e || ((e = new i(this)), t.data(r, e)), "close" === n && e[n](this);
                    });
                }),
                (i._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this);
                    };
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                ]),
                i
            );
        })();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
        (g.fn[o] = p._jQueryInterface),
        (g.fn[o].Constructor = p),
        (g.fn[o].noConflict = function () {
            return (g.fn[o] = c), p._jQueryInterface;
        });
    var v = "button",
        y = "bs.button",
        E = "." + y,
        C = ".data-api",
        T = g.fn[v],
        S = "active",
        b = "btn",
        I = "focus",
        D = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        A = 'input:not([type="hidden"])',
        N = ".active",
        O = ".btn",
        k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C },
        P = (function () {
            function n(t) {
                this._element = t;
            }
            var t = n.prototype;
            return (
                (t.toggle = function () {
                    var t = !0,
                        e = !0,
                        n = g(this._element).closest(w)[0];
                    if (n) {
                        var i = this._element.querySelector(A);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(S)) t = !1;
                                else {
                                    var o = n.querySelector(N);
                                    o && g(o).removeClass(S);
                                }
                            if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                (i.checked = !this._element.classList.contains(S)), g(i).trigger("change");
                            }
                            i.focus(), (e = !1);
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
                }),
                (t.dispose = function () {
                    g.removeData(this._element, y), (this._element = null);
                }),
                (n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(y);
                        t || ((t = new n(this)), g(this).data(y, t)), "toggle" === e && t[e]();
                    });
                }),
                s(n, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                ]),
                n
            );
        })();
    g(document)
        .on(k.CLICK_DATA_API, D, function (t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
        })
        .on(k.FOCUS_BLUR_DATA_API, D, function (t) {
            var e = g(t.target).closest(O)[0];
            g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
        }),
        (g.fn[v] = P._jQueryInterface),
        (g.fn[v].Constructor = P),
        (g.fn[v].noConflict = function () {
            return (g.fn[v] = T), P._jQueryInterface;
        });
    var L = "carousel",
        j = "bs.carousel",
        H = "." + j,
        R = ".data-api",
        x = g.fn[L],
        F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        W = "next",
        q = "prev",
        M = "left",
        K = "right",
        Q = {
            SLIDE: "slide" + H,
            SLID: "slid" + H,
            KEYDOWN: "keydown" + H,
            MOUSEENTER: "mouseenter" + H,
            MOUSELEAVE: "mouseleave" + H,
            TOUCHSTART: "touchstart" + H,
            TOUCHMOVE: "touchmove" + H,
            TOUCHEND: "touchend" + H,
            POINTERDOWN: "pointerdown" + H,
            POINTERUP: "pointerup" + H,
            DRAG_START: "dragstart" + H,
            LOAD_DATA_API: "load" + H + R,
            CLICK_DATA_API: "click" + H + R,
        },
        B = "carousel",
        V = "active",
        Y = "slide",
        z = "carousel-item-right",
        X = "carousel-item-left",
        $ = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        tt = ".active.carousel-item",
        et = ".carousel-item",
        nt = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev",
        ot = ".carousel-indicators",
        rt = "[data-slide], [data-slide-to]",
        st = '[data-ride="carousel"]',
        at = { TOUCH: "touch", PEN: "pen" },
        lt = (function () {
            function r(t, e) {
                (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._indicatorsElement = this._element.querySelector(ot)),
                    (this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints),
                    (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                    this._addEventListeners();
            }
            var t = r.prototype;
            return (
                (t.next = function () {
                    this._isSliding || this._slide(W);
                }),
                (t.nextWhenVisible = function () {
                    !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
                }),
                (t.prev = function () {
                    this._isSliding || this._slide(q);
                }),
                (t.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                }),
                (t.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval), (this._interval = null)),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }),
                (t.to = function (t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(tt);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            g(this._element).one(Q.SLID, function () {
                                return e.to(t);
                            });
                        else {
                            if (n === t) return this.pause(), void this.cycle();
                            var i = n < t ? W : q;
                            this._slide(i, this._items[t]);
                        }
                }),
                (t.dispose = function () {
                    g(this._element).off(H),
                        g.removeData(this._element, j),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, F, t)), _.typeCheckConfig(L, t, U), t;
                }),
                (t._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        0 < e && this.prev(), e < 0 && this.next();
                    }
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard &&
                        g(this._element).on(Q.KEYDOWN, function (t) {
                            return e._keydown(t);
                        }),
                        "hover" === this._config.pause &&
                            g(this._element)
                                .on(Q.MOUSEENTER, function (t) {
                                    return e.pause(t);
                                })
                                .on(Q.MOUSELEAVE, function (t) {
                                    return e.cycle(t);
                                }),
                        this._config.touch && this._addTouchEventListeners();
                }),
                (t._addTouchEventListeners = function () {
                    var n = this;
                    if (this._touchSupported) {
                        var e = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? (n.touchStartX = t.originalEvent.clientX) : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
                            },
                            i = function (t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                                    n._handleSwipe(),
                                    "hover" === n._config.pause &&
                                        (n.pause(),
                                        n.touchTimeout && clearTimeout(n.touchTimeout),
                                        (n.touchTimeout = setTimeout(function (t) {
                                            return n.cycle(t);
                                        }, 500 + n._config.interval)));
                            };
                        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                            return t.preventDefault();
                        }),
                            this._pointerEvent
                                ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                                      return e(t);
                                  }),
                                  g(this._element).on(Q.POINTERUP, function (t) {
                                      return i(t);
                                  }),
                                  this._element.classList.add(J))
                                : (g(this._element).on(Q.TOUCHSTART, function (t) {
                                      return e(t);
                                  }),
                                  g(this._element).on(Q.TOUCHMOVE, function (t) {
                                      var e;
                                      (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? (n.touchDeltaX = 0) : (n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX);
                                  }),
                                  g(this._element).on(Q.TOUCHEND, function (t) {
                                      return i(t);
                                  }));
                    }
                }),
                (t._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                        }
                }),
                (t._getItemIndex = function (t) {
                    return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : []), this._items.indexOf(t);
                }),
                (t._getItemByDirection = function (t, e) {
                    var n = t === W,
                        i = t === q,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                    var s = (o + (t === q ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }),
                (t._triggerSlideEvent = function (t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(this._element.querySelector(tt)),
                        o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                    return g(this._element).trigger(o), o;
                }),
                (t._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        g(e).removeClass(V);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && g(n).addClass(V);
                    }
                }),
                (t._slide = function (t, e) {
                    var n,
                        i,
                        o,
                        r = this,
                        s = this._element.querySelector(tt),
                        a = this._getItemIndex(s),
                        l = e || (s && this._getItemByDirection(t, s)),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (((o = t === W ? ((n = X), (i = $), M) : ((n = z), (i = G), K)), l && g(l).hasClass(V))) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                        (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(l);
                        var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c });
                        if (g(this._element).hasClass(Y)) {
                            g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                            var f = parseInt(l.getAttribute("data-interval"), 10);
                            this._config.interval = f ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), f) : this._config.defaultInterval || this._config.interval;
                            var d = _.getTransitionDurationFromElement(s);
                            g(s)
                                .one(_.TRANSITION_END, function () {
                                    g(l)
                                        .removeClass(n + " " + i)
                                        .addClass(V),
                                        g(s).removeClass(V + " " + i + " " + n),
                                        (r._isSliding = !1),
                                        setTimeout(function () {
                                            return g(r._element).trigger(u);
                                        }, 0);
                                })
                                .emulateTransitionEnd(d);
                        } else g(s).removeClass(V), g(l).addClass(V), (this._isSliding = !1), g(this._element).trigger(u);
                        h && this.cycle();
                    }
                }),
                (r._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this).data(j),
                            e = l({}, F, g(this).data());
                        "object" == typeof i && (e = l({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if ((t || ((t = new r(this, e)), g(this).data(j, t)), "number" == typeof i)) t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]();
                        } else e.interval && e.ride && (t.pause(), t.cycle());
                    });
                }),
                (r._dataApiClickHandler = function (t) {
                    var e = _.getSelectorFromElement(this);
                    if (e) {
                        var n = g(e)[0];
                        if (n && g(n).hasClass(B)) {
                            var i = l({}, g(n).data(), g(this).data()),
                                o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
                        }
                    }
                }),
                s(r, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return F;
                        },
                    },
                ]),
                r
            );
        })();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
        g(window).on(Q.LOAD_DATA_API, function () {
            for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
                var i = g(t[e]);
                lt._jQueryInterface.call(i, i.data());
            }
        }),
        (g.fn[L] = lt._jQueryInterface),
        (g.fn[L].Constructor = lt),
        (g.fn[L].noConflict = function () {
            return (g.fn[L] = x), lt._jQueryInterface;
        });
    var ct = "collapse",
        ht = "bs.collapse",
        ut = "." + ht,
        ft = g.fn[ct],
        dt = { toggle: !0, parent: "" },
        gt = { toggle: "boolean", parent: "(string|element)" },
        _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" },
        mt = "show",
        pt = "collapse",
        vt = "collapsing",
        yt = "collapsed",
        Et = "width",
        Ct = "height",
        Tt = ".show, .collapsing",
        St = '[data-toggle="collapse"]',
        bt = (function () {
            function a(e, t) {
                (this._isTransitioning = !1),
                    (this._element = e),
                    (this._config = this._getConfig(t)),
                    (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                            return t === e;
                        });
                    null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(r));
                }
                (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }
            var t = a.prototype;
            return (
                (t.toggle = function () {
                    g(this._element).hasClass(mt) ? this.hide() : this.show();
                }),
                (t.show = function () {
                    var t,
                        e,
                        n = this;
                    if (
                        !this._isTransitioning &&
                        !g(this._element).hasClass(mt) &&
                        (this._parent &&
                            0 ===
                                (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                                    return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
                                })).length &&
                            (t = null),
                        !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))
                    ) {
                        var i = g.Event(_t.SHOW);
                        if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
                            t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                            var o = this._getDimension();
                            g(this._element).removeClass(pt).addClass(vt), (this._element.style[o] = 0), this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                s = _.getTransitionDurationFromElement(this._element);
                            g(this._element)
                                .one(_.TRANSITION_END, function () {
                                    g(n._element).removeClass(vt).addClass(pt).addClass(mt), (n._element.style[o] = ""), n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
                                })
                                .emulateTransitionEnd(s),
                                (this._element.style[o] = this._element[r] + "px");
                        }
                    }
                }),
                (t.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                        var e = g.Event(_t.HIDE);
                        if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
                            var n = this._getDimension();
                            (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o],
                                        s = _.getSelectorFromElement(r);
                                    if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = _.getTransitionDurationFromElement(this._element);
                            g(this._element)
                                .one(_.TRANSITION_END, function () {
                                    t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
                                })
                                .emulateTransitionEnd(a);
                        }
                    }
                }),
                (t.setTransitioning = function (t) {
                    this._isTransitioning = t;
                }),
                (t.dispose = function () {
                    g.removeData(this._element, ht), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                }),
                (t._getConfig = function (t) {
                    return ((t = l({}, dt, t)).toggle = Boolean(t.toggle)), _.typeCheckConfig(ct, t, gt), t;
                }),
                (t._getDimension = function () {
                    return g(this._element).hasClass(Et) ? Et : Ct;
                }),
                (t._getParent = function () {
                    var t,
                        n = this;
                    _.isElement(this._config.parent) ? ((t = this._config.parent), "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(t.querySelectorAll(e));
                    return (
                        g(i).each(function (t, e) {
                            n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                        }),
                        t
                    );
                }),
                (t._addAriaAndCollapsedClass = function (t, e) {
                    var n = g(t).hasClass(mt);
                    e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
                }),
                (a._getTargetFromElement = function (t) {
                    var e = _.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null;
                }),
                (a._jQueryInterface = function (i) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(ht),
                            n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                        if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || ((e = new a(this, n)), t.data(ht, e)), "string" == typeof i)) {
                            if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                            e[i]();
                        }
                    });
                }),
                s(a, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return dt;
                        },
                    },
                ]),
                a
            );
        })();
    g(document).on(_t.CLICK_DATA_API, St, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this),
            e = _.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function () {
            var t = g(this),
                e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e);
        });
    }),
        (g.fn[ct] = bt._jQueryInterface),
        (g.fn[ct].Constructor = bt),
        (g.fn[ct].noConflict = function () {
            return (g.fn[ct] = ft), bt._jQueryInterface;
        });
    var It = "dropdown",
        Dt = "bs.dropdown",
        wt = "." + Dt,
        At = ".data-api",
        Nt = g.fn[It],
        Ot = new RegExp("38|40|27"),
        kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At },
        Pt = "disabled",
        Lt = "show",
        jt = "dropup",
        Ht = "dropright",
        Rt = "dropleft",
        xt = "dropdown-menu-right",
        Ft = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Wt = ".dropdown form",
        qt = ".dropdown-menu",
        Mt = ".navbar-nav",
        Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Qt = "top-start",
        Bt = "top-end",
        Vt = "bottom-start",
        Yt = "bottom-end",
        zt = "right-start",
        Xt = "left-start",
        $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        Jt = (function () {
            function c(t, e) {
                (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
            }
            var t = c.prototype;
            return (
                (t.toggle = function () {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                        var t = c._getParentFromElement(this._element),
                            e = g(this._menu).hasClass(Lt);
                        if ((c._clearMenus(), !e)) {
                            var n = { relatedTarget: this._element },
                                i = g.Event(kt.SHOW, n);
                            if ((g(t).trigger(i), !i.isDefaultPrevented())) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var o = this._element;
                                    "parent" === this._config.reference
                                        ? (o = t)
                                        : _.isElement(this._config.reference) && ((o = this._config.reference), "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                                        (this._popper = new u(o, this._menu, this._getPopperConfig()));
                                }
                                "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    g(this._menu).toggleClass(Lt),
                                    g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
                            }
                        }
                    }
                }),
                (t.show = function () {
                    if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                        var t = { relatedTarget: this._element },
                            e = g.Event(kt.SHOW, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
                    }
                }),
                (t.hide = function () {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                        var t = { relatedTarget: this._element },
                            e = g.Event(kt.HIDE, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
                    }
                }),
                (t.dispose = function () {
                    g.removeData(this._element, Dt), g(this._element).off(wt), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                }),
                (t.update = function () {
                    (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t._addEventListeners = function () {
                    var e = this;
                    g(this._element).on(kt.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, this.constructor.Default, g(this._element).data(), t)), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
                }),
                (t._getMenuElement = function () {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(qt));
                    }
                    return this._menu;
                }),
                (t._getPlacement = function () {
                    var t = g(this._element.parentNode),
                        e = Vt;
                    return t.hasClass(jt) ? ((e = Qt), g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? (e = zt) : t.hasClass(Rt) ? (e = Xt) : g(this._menu).hasClass(xt) && (e = Yt), e;
                }),
                (t._detectNavbar = function () {
                    return 0 < g(this._element).closest(".navbar").length;
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this._config.offset
                            ? (t.fn = function (t) {
                                  return (t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                              })
                            : (t.offset = this._config.offset),
                        t
                    );
                }),
                (t._getPopperConfig = function () {
                    var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                    return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
                }),
                (c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(Dt);
                        if ((t || ((t = new c(this, "object" == typeof e ? e : null)), g(this).data(Dt, t)), "string" == typeof e)) {
                            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                (c._clearMenus = function (t) {
                    if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                        for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                            var o = c._getParentFromElement(e[n]),
                                r = g(e[n]).data(Dt),
                                s = { relatedTarget: e[n] };
                            if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                                var a = r._menu;
                                if (g(o).hasClass(Lt) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && g.contains(o, t.target))) {
                                    var l = g.Event(kt.HIDE, s);
                                    g(o).trigger(l),
                                        l.isDefaultPrevented() ||
                                            ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                                            e[n].setAttribute("aria-expanded", "false"),
                                            g(a).removeClass(Lt),
                                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
                                }
                            }
                        }
                }),
                (c._getParentFromElement = function (t) {
                    var e,
                        n = _.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode;
                }),
                (c._dataApiKeydownHandler = function (t) {
                    if (
                        (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || g(t.target).closest(qt).length))) : Ot.test(t.which)) &&
                        (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))
                    ) {
                        var e = c._getParentFromElement(this),
                            n = g(e).hasClass(Lt);
                        if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                            var i = [].slice.call(e.querySelectorAll(Kt));
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(Ut);
                                g(r).trigger("focus");
                            }
                            g(this).trigger("click");
                        }
                    }
                }),
                s(c, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return $t;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Gt;
                        },
                    },
                ]),
                c
            );
        })();
    g(document)
        .on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler)
        .on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler)
        .on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus)
        .on(kt.CLICK_DATA_API, Ut, function (t) {
            t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
        })
        .on(kt.CLICK_DATA_API, Wt, function (t) {
            t.stopPropagation();
        }),
        (g.fn[It] = Jt._jQueryInterface),
        (g.fn[It].Constructor = Jt),
        (g.fn[It].noConflict = function () {
            return (g.fn[It] = Nt), Jt._jQueryInterface;
        });
    var Zt = "modal",
        te = "bs.modal",
        ee = "." + te,
        ne = g.fn[Zt],
        ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api",
        },
        se = "modal-dialog-scrollable",
        ae = "modal-scrollbar-measure",
        le = "modal-backdrop",
        ce = "modal-open",
        he = "fade",
        ue = "show",
        fe = ".modal-dialog",
        de = ".modal-body",
        ge = '[data-toggle="modal"]',
        _e = '[data-dismiss="modal"]',
        me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pe = ".sticky-top",
        ve = (function () {
            function o(t, e) {
                (this._config = this._getConfig(e)),
                    (this._element = t),
                    (this._dialog = t.querySelector(fe)),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollbarWidth = 0);
            }
            var t = o.prototype;
            return (
                (t.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                }),
                (t.show = function (t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        g(this._element).hasClass(he) && (this._isTransitioning = !0);
                        var n = g.Event(re.SHOW, { relatedTarget: t });
                        g(this._element).trigger(n),
                            this._isShown ||
                                n.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                                    return e.hide(t);
                                }),
                                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                                    g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return e._showElement(t);
                                }));
                    }
                }),
                (t.hide = function (t) {
                    var e = this;
                    if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                        var n = g.Event(re.HIDE);
                        if ((g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                            this._isShown = !1;
                            var i = g(this._element).hasClass(he);
                            if (
                                (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(document).off(re.FOCUSIN),
                                g(this._element).removeClass(ue),
                                g(this._element).off(re.CLICK_DISMISS),
                                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                                i)
                            ) {
                                var o = _.getTransitionDurationFromElement(this._element);
                                g(this._element)
                                    .one(_.TRANSITION_END, function (t) {
                                        return e._hideModal(t);
                                    })
                                    .emulateTransitionEnd(o);
                            } else this._hideModal();
                        }
                    }
                }),
                (t.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (t) {
                        return g(t).off(ee);
                    }),
                        g(document).off(re.FOCUSIN),
                        g.removeData(this._element, te),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (t.handleUpdate = function () {
                    this._adjustDialog();
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, ie, t)), _.typeCheckConfig(Zt, t, oe), t;
                }),
                (t._showElement = function (t) {
                    var e = this,
                        n = g(this._element).hasClass(he);
                    (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        g(this._dialog).hasClass(se) ? (this._dialog.querySelector(de).scrollTop = 0) : (this._element.scrollTop = 0),
                        n && _.reflow(this._element),
                        g(this._element).addClass(ue),
                        this._config.focus && this._enforceFocus();
                    var i = g.Event(re.SHOWN, { relatedTarget: t }),
                        o = function () {
                            e._config.focus && e._element.focus(), (e._isTransitioning = !1), g(e._element).trigger(i);
                        };
                    if (n) {
                        var r = _.getTransitionDurationFromElement(this._dialog);
                        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                    } else o();
                }),
                (t._enforceFocus = function () {
                    var e = this;
                    g(document)
                        .off(re.FOCUSIN)
                        .on(re.FOCUSIN, function (t) {
                            document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
                        });
                }),
                (t._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard
                        ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                              27 === t.which && (t.preventDefault(), e.hide());
                          })
                        : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
                }),
                (t._setResizeEvent = function () {
                    var e = this;
                    this._isShown
                        ? g(window).on(re.RESIZE, function (t) {
                              return e.handleUpdate(t);
                          })
                        : g(window).off(re.RESIZE);
                }),
                (t._hideModal = function () {
                    var t = this;
                    (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function () {
                            g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
                        });
                }),
                (t._removeBackdrop = function () {
                    this._backdrop && (g(this._backdrop).remove(), (this._backdrop = null));
                }),
                (t._showBackdrop = function (t) {
                    var e = this,
                        n = g(this._element).hasClass(he) ? he : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement("div")),
                            (this._backdrop.className = le),
                            n && this._backdrop.classList.add(n),
                            g(this._backdrop).appendTo(document.body),
                            g(this._element).on(re.CLICK_DISMISS, function (t) {
                                e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                            }),
                            n && _.reflow(this._backdrop),
                            g(this._backdrop).addClass(ue),
                            !t)
                        )
                            return;
                        if (!n) return void t();
                        var i = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        g(this._backdrop).removeClass(ue);
                        var o = function () {
                            e._removeBackdrop(), t && t();
                        };
                        if (g(this._element).hasClass(he)) {
                            var r = _.getTransitionDurationFromElement(this._backdrop);
                            g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                        } else o();
                    } else t && t();
                }),
                (t._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }),
                (t._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                }),
                (t._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (t._setScrollbar = function () {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(me)),
                            e = [].slice.call(document.querySelectorAll(pe));
                        g(t).each(function (t, e) {
                            var n = e.style.paddingRight,
                                i = g(e).css("padding-right");
                            g(e)
                                .data("padding-right", n)
                                .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
                        }),
                            g(e).each(function (t, e) {
                                var n = e.style.marginRight,
                                    i = g(e).css("margin-right");
                                g(e)
                                    .data("margin-right", n)
                                    .css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
                            });
                        var n = document.body.style.paddingRight,
                            i = g(document.body).css("padding-right");
                        g(document.body)
                            .data("padding-right", n)
                            .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                    }
                    g(document.body).addClass(ce);
                }),
                (t._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(me));
                    g(t).each(function (t, e) {
                        var n = g(e).data("padding-right");
                        g(e).removeData("padding-right"), (e.style.paddingRight = n || "");
                    });
                    var e = [].slice.call(document.querySelectorAll("" + pe));
                    g(e).each(function (t, e) {
                        var n = g(e).data("margin-right");
                        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
                    });
                    var n = g(document.body).data("padding-right");
                    g(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                }),
                (t._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = ae), document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                }),
                (o._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var t = g(this).data(te),
                            e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                        if ((t || ((t = new o(this, e)), g(this).data(te, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n](i);
                        } else e.show && t.show(i);
                    });
                }),
                s(o, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ie;
                        },
                    },
                ]),
                o
            );
        })();
    g(document).on(re.CLICK_DATA_API, ge, function (t) {
        var e,
            n = this,
            i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var r = g(e).one(re.SHOW, function (t) {
            t.isDefaultPrevented() ||
                r.one(re.HIDDEN, function () {
                    g(n).is(":visible") && n.focus();
                });
        });
        ve._jQueryInterface.call(g(e), o, this);
    }),
        (g.fn[Zt] = ve._jQueryInterface),
        (g.fn[Zt].Constructor = ve),
        (g.fn[Zt].noConflict = function () {
            return (g.fn[Zt] = ne), ve._jQueryInterface;
        });
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ee = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Se(t, s, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (
            var n = new window.DOMParser().parseFromString(t, "text/html"),
                a = Object.keys(s),
                l = [].slice.call(n.body.querySelectorAll("*")),
                i = function (t, e) {
                    var n = l[t],
                        i = n.nodeName.toLowerCase();
                    if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var o = [].slice.call(n.attributes),
                        r = [].concat(s["*"] || [], s[i] || []);
                    o.forEach(function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                            for (
                                var i = e.filter(function (t) {
                                        return t instanceof RegExp;
                                    }),
                                    o = 0,
                                    r = i.length;
                                o < r;
                                o++
                            )
                                if (n.match(i[o])) return !0;
                            return !1;
                        })(t, r) || n.removeAttribute(t.nodeName);
                    });
                },
                o = 0,
                r = l.length;
            o < r;
            o++
        )
            i(o);
        return n.body.innerHTML;
    }
    var be = "tooltip",
        Ie = "bs.tooltip",
        De = "." + Ie,
        we = g.fn[be],
        Ae = "bs-tooltip",
        Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        ke = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
        },
        Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ee,
        },
        je = "show",
        He = "out",
        Re = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            INSERTED: "inserted" + De,
            CLICK: "click" + De,
            FOCUSIN: "focusin" + De,
            FOCUSOUT: "focusout" + De,
            MOUSEENTER: "mouseenter" + De,
            MOUSELEAVE: "mouseleave" + De,
        },
        xe = "fade",
        Fe = "show",
        Ue = ".tooltip-inner",
        We = ".arrow",
        qe = "hover",
        Me = "focus",
        Ke = "click",
        Qe = "manual",
        Be = (function () {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
            }
            var t = i.prototype;
            return (
                (t.enable = function () {
                    this._isEnabled = !0;
                }),
                (t.disable = function () {
                    this._isEnabled = !1;
                }),
                (t.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                }),
                (t.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = g(t.currentTarget).data(e);
                            n || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(e, n)),
                                (n._activeTrigger.click = !n._activeTrigger.click),
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                        } else {
                            if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        g.removeData(this.element, this.constructor.DATA_KEY),
                        g(this.element).off(this.constructor.EVENT_KEY),
                        g(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && g(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (t.show = function () {
                    var e = this;
                    if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var t = g.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        g(this.element).trigger(t);
                        var n = _.findShadowRoot(this.element),
                            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i) return;
                        var o = this.getTipElement(),
                            r = _.getUID(this.constructor.NAME);
                        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        g(o).data(this.constructor.DATA_KEY, this),
                            g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                            g(this.element).trigger(this.constructor.Event.INSERTED),
                            (this._popper = new u(this.element, o, {
                                placement: a,
                                modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } },
                                onCreate: function (t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                },
                                onUpdate: function (t) {
                                    return e._handlePopperPlacementChange(t);
                                },
                            })),
                            g(o).addClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                        var c = function () {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            (e._hoverState = null), g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
                        };
                        if (g(this.tip).hasClass(xe)) {
                            var h = _.getTransitionDurationFromElement(this.tip);
                            g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
                        } else c();
                    }
                }),
                (t.hide = function (t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = g.Event(this.constructor.Event.HIDE),
                        o = function () {
                            e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                g(e.element).trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t();
                        };
                    if ((g(this.element).trigger(i), !i.isDefaultPrevented())) {
                        if (
                            (g(n).removeClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            (this._activeTrigger[Ke] = !1),
                            (this._activeTrigger[Me] = !1),
                            (this._activeTrigger[qe] = !1),
                            g(this.tip).hasClass(xe))
                        ) {
                            var r = _.getTransitionDurationFromElement(n);
                            g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                        } else o();
                        this._hoverState = "";
                    }
                }),
                (t.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (t.isWithContent = function () {
                    return Boolean(this.getTitle());
                }),
                (t.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass(Ae + "-" + t);
                }),
                (t.getTipElement = function () {
                    return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
                }),
                (t.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
                }),
                (t.setElementContent = function (t, e) {
                    "object" != typeof e || (!e.nodeType && !e.jquery)
                        ? this.config.html
                            ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e))
                            : t.text(e)
                        : this.config.html
                        ? g(e).parent().is(t) || t.empty().append(e)
                        : t.text(g(e).text());
                }),
                (t.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                }),
                (t._getOffset = function () {
                    var e = this,
                        t = {};
                    return (
                        "function" == typeof this.config.offset
                            ? (t.fn = function (t) {
                                  return (t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                              })
                            : (t.offset = this.config.offset),
                        t
                    );
                }),
                (t._getContainer = function () {
                    return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
                }),
                (t._getAttachment = function (t) {
                    return Pe[t.toUpperCase()];
                }),
                (t._setListeners = function () {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t)
                            g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                                return i.toggle(t);
                            });
                        else if (t !== Qe) {
                            var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                            g(i.element)
                                .on(e, i.config.selector, function (t) {
                                    return i._enter(t);
                                })
                                .on(n, i.config.selector, function (t) {
                                    return i._leave(t);
                                });
                        }
                    }),
                        g(this.element)
                            .closest(".modal")
                            .on("hide.bs.modal", function () {
                                i.element && i.hide();
                            }),
                        this.config.selector ? (this.config = l({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                }),
                (t._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                }),
                (t._enter = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
                        g(e.getTipElement()).hasClass(Fe) || e._hoverState === je
                            ? (e._hoverState = je)
                            : (clearTimeout(e._timeout),
                              (e._hoverState = je),
                              e.config.delay && e.config.delay.show
                                  ? (e._timeout = setTimeout(function () {
                                        e._hoverState === je && e.show();
                                    }, e.config.delay.show))
                                  : e.show());
                }),
                (t._leave = function (t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(n, e)),
                        t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
                        e._isWithActiveTrigger() ||
                            (clearTimeout(e._timeout),
                            (e._hoverState = He),
                            e.config.delay && e.config.delay.hide
                                ? (e._timeout = setTimeout(function () {
                                      e._hoverState === He && e.hide();
                                  }, e.config.delay.hide))
                                : e.hide());
                }),
                (t._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }),
                (t._getConfig = function (t) {
                    var e = g(this.element).data();
                    return (
                        Object.keys(e).forEach(function (t) {
                            -1 !== Oe.indexOf(t) && delete e[t];
                        }),
                        "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        _.typeCheckConfig(be, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
                        t
                    );
                }),
                (t._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }),
                (t._cleanTipClass = function () {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Ne);
                    null !== e && e.length && t.removeClass(e.join(""));
                }),
                (t._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    (this.tip = e.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (t._fixTransition = function () {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (g(t).removeClass(xe), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ie),
                            e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), g(this).data(Ie, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Le;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return be;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return Ie;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return Re;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return De;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return ke;
                        },
                    },
                ]),
                i
            );
        })();
    (g.fn[be] = Be._jQueryInterface),
        (g.fn[be].Constructor = Be),
        (g.fn[be].noConflict = function () {
            return (g.fn[be] = we), Be._jQueryInterface;
        });
    var Ve = "popover",
        Ye = "bs.popover",
        ze = "." + Ye,
        Xe = g.fn[Ve],
        $e = "bs-popover",
        Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
        Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }),
        tn = "fade",
        en = "show",
        nn = ".popover-header",
        on = ".popover-body",
        rn = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            INSERTED: "inserted" + ze,
            CLICK: "click" + ze,
            FOCUSIN: "focusin" + ze,
            FOCUSOUT: "focusout" + ze,
            MOUSEENTER: "mouseenter" + ze,
            MOUSELEAVE: "mouseleave" + ze,
        },
        sn = (function (t) {
            var e, n;
            function i() {
                return t.apply(this, arguments) || this;
            }
            (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
            var o = i.prototype;
            return (
                (o.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }),
                (o.addAttachmentClass = function (t) {
                    g(this.getTipElement()).addClass($e + "-" + t);
                }),
                (o.getTipElement = function () {
                    return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
                }),
                (o.setContent = function () {
                    var t = g(this.getTipElement());
                    this.setElementContent(t.find(nn), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
                }),
                (o._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content;
                }),
                (o._cleanTipClass = function () {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Ge);
                    null !== e && 0 < e.length && t.removeClass(e.join(""));
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this).data(Ye),
                            e = "object" == typeof n ? n : null;
                        if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), g(this).data(Ye, t)), "string" == typeof n)) {
                            if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return Je;
                        },
                    },
                    {
                        key: "NAME",
                        get: function () {
                            return Ve;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function () {
                            return Ye;
                        },
                    },
                    {
                        key: "Event",
                        get: function () {
                            return rn;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function () {
                            return ze;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Ze;
                        },
                    },
                ]),
                i
            );
        })(Be);
    (g.fn[Ve] = sn._jQueryInterface),
        (g.fn[Ve].Constructor = sn),
        (g.fn[Ve].noConflict = function () {
            return (g.fn[Ve] = Xe), sn._jQueryInterface;
        });
    var an = "scrollspy",
        ln = "bs.scrollspy",
        cn = "." + ln,
        hn = g.fn[an],
        un = { offset: 10, method: "auto", target: "" },
        fn = { offset: "number", method: "string", target: "(string|element)" },
        dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" },
        gn = "dropdown-item",
        _n = "active",
        mn = '[data-spy="scroll"]',
        pn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        En = ".list-group-item",
        Cn = ".dropdown",
        Tn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        bn = "offset",
        In = "position",
        Dn = (function () {
            function n(t, e) {
                var n = this;
                (this._element = t),
                    (this._scrollElement = "BODY" === t.tagName ? window : t),
                    (this._config = this._getConfig(e)),
                    (this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    g(this._scrollElement).on(dn.SCROLL, function (t) {
                        return n._process(t);
                    }),
                    this.refresh(),
                    this._process();
            }
            var t = n.prototype;
            return (
                (t.refresh = function () {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? bn : In,
                        o = "auto" === this._config.method ? t : this._config.method,
                        r = o === In ? this._getScrollTop() : 0;
                    (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .map(function (t) {
                                var e,
                                    n = _.getSelectorFromElement(t);
                                if ((n && (e = document.querySelector(n)), e)) {
                                    var i = e.getBoundingClientRect();
                                    if (i.width || i.height) return [g(e)[o]().top + r, n];
                                }
                                return null;
                            })
                            .filter(function (t) {
                                return t;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .forEach(function (t) {
                                e._offsets.push(t[0]), e._targets.push(t[1]);
                            });
                }),
                (t.dispose = function () {
                    g.removeData(this._element, ln),
                        g(this._scrollElement).off(cn),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (t._getConfig = function (t) {
                    if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                        var e = g(t.target).attr("id");
                        e || ((e = _.getUID(an)), g(t.target).attr("id", e)), (t.target = "#" + e);
                    }
                    return _.typeCheckConfig(an, t, fn), t;
                }),
                (t._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }),
                (t._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }),
                (t._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                }),
                (t._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                        for (var o = this._offsets.length; o--; ) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                        }
                    }
                }),
                (t._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var t = this._selector.split(",").map(function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                        }),
                        n = g([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(gn)
                        ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n))
                        : (n.addClass(_n),
                          n
                              .parents(pn)
                              .prev(vn + ", " + En)
                              .addClass(_n),
                          n.parents(pn).prev(yn).children(vn).addClass(_n)),
                        g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e });
                }),
                (t._clear = function () {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function (t) {
                            return t.classList.contains(_n);
                        })
                        .forEach(function (t) {
                            return t.classList.remove(_n);
                        });
                }),
                (n._jQueryInterface = function (e) {
                    return this.each(function () {
                        var t = g(this).data(ln);
                        if ((t || ((t = new n(this, "object" == typeof e && e)), g(this).data(ln, t)), "string" == typeof e)) {
                            if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                            t[e]();
                        }
                    });
                }),
                s(n, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return un;
                        },
                    },
                ]),
                n
            );
        })();
    g(window).on(dn.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data());
        }
    }),
        (g.fn[an] = Dn._jQueryInterface),
        (g.fn[an].Constructor = Dn),
        (g.fn[an].noConflict = function () {
            return (g.fn[an] = hn), Dn._jQueryInterface;
        });
    var wn = "bs.tab",
        An = "." + wn,
        Nn = g.fn.tab,
        On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" },
        kn = "dropdown-menu",
        Pn = "active",
        Ln = "disabled",
        jn = "fade",
        Hn = "show",
        Rn = ".dropdown",
        xn = ".nav, .list-group",
        Fn = ".active",
        Un = "> li > .active",
        Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Mn = "> .dropdown-menu .active",
        Kn = (function () {
            function i(t) {
                this._element = t;
            }
            var t = i.prototype;
            return (
                (t.show = function () {
                    var n = this;
                    if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn)) || g(this._element).hasClass(Ln))) {
                        var t,
                            i,
                            e = g(this._element).closest(xn)[0],
                            o = _.getSelectorFromElement(this._element);
                        if (e) {
                            var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                            i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
                        }
                        var s = g.Event(On.HIDE, { relatedTarget: this._element }),
                            a = g.Event(On.SHOW, { relatedTarget: i });
                        if ((i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
                            o && (t = document.querySelector(o)), this._activate(this._element, e);
                            var l = function () {
                                var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                                    e = g.Event(On.SHOWN, { relatedTarget: i });
                                g(i).trigger(t), g(n._element).trigger(e);
                            };
                            t ? this._activate(t, t.parentNode, l) : l();
                        }
                    }
                }),
                (t.dispose = function () {
                    g.removeData(this._element, wn), (this._element = null);
                }),
                (t._activate = function (t, e, n) {
                    var i = this,
                        o = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName) ? g(e).children(Fn) : g(e).find(Un))[0],
                        r = n && o && g(o).hasClass(jn),
                        s = function () {
                            return i._transitionComplete(t, o, n);
                        };
                    if (o && r) {
                        var a = _.getTransitionDurationFromElement(o);
                        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
                    } else s();
                }),
                (t._transitionComplete = function (t, e, n) {
                    if (e) {
                        g(e).removeClass(Pn);
                        var i = g(e.parentNode).find(Mn)[0];
                        i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                    }
                    if ((g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn))) {
                        var o = g(t).closest(Rn)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(qn));
                            g(r).addClass(Pn);
                        }
                        t.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(wn);
                        if ((e || ((e = new i(this)), t.data(wn, e)), "string" == typeof n)) {
                            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]();
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                ]),
                i
            );
        })();
    g(document).on(On.CLICK_DATA_API, Wn, function (t) {
        t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
    }),
        (g.fn.tab = Kn._jQueryInterface),
        (g.fn.tab.Constructor = Kn),
        (g.fn.tab.noConflict = function () {
            return (g.fn.tab = Nn), Kn._jQueryInterface;
        });
    var Qn = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        Yn = g.fn[Qn],
        zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn },
        Xn = "fade",
        $n = "hide",
        Gn = "show",
        Jn = "showing",
        Zn = { animation: "boolean", autohide: "boolean", delay: "number" },
        ti = { animation: !0, autohide: !0, delay: 500 },
        ei = '[data-dismiss="toast"]',
        ni = (function () {
            function i(t, e) {
                (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
            }
            var t = i.prototype;
            return (
                (t.show = function () {
                    var t = this;
                    g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
                    var e = function () {
                        t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
                    };
                    if ((this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation)) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
                    } else e();
                }),
                (t.hide = function (t) {
                    var e = this;
                    this._element.classList.contains(Gn) &&
                        (g(this._element).trigger(zn.HIDE),
                        t
                            ? this._close()
                            : (this._timeout = setTimeout(function () {
                                  e._close();
                              }, this._config.delay)));
                }),
                (t.dispose = function () {
                    clearTimeout(this._timeout),
                        (this._timeout = null),
                        this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
                        g(this._element).off(zn.CLICK_DISMISS),
                        g.removeData(this._element, Bn),
                        (this._element = null),
                        (this._config = null);
                }),
                (t._getConfig = function (t) {
                    return (t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {})), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
                }),
                (t._setListeners = function () {
                    var t = this;
                    g(this._element).on(zn.CLICK_DISMISS, ei, function () {
                        return t.hide(!0);
                    });
                }),
                (t._close = function () {
                    var t = this,
                        e = function () {
                            t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
                        };
                    if ((this._element.classList.remove(Gn), this._config.animation)) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
                    } else e();
                }),
                (i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var t = g(this),
                            e = t.data(Bn);
                        if ((e || ((e = new i(this, "object" == typeof n && n)), t.data(Bn, e)), "string" == typeof n)) {
                            if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n](this);
                        }
                    });
                }),
                s(i, null, [
                    {
                        key: "VERSION",
                        get: function () {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function () {
                            return Zn;
                        },
                    },
                    {
                        key: "Default",
                        get: function () {
                            return ti;
                        },
                    },
                ]),
                i
            );
        })();
    (g.fn[Qn] = ni._jQueryInterface),
        (g.fn[Qn].Constructor = ni),
        (g.fn[Qn].noConflict = function () {
            return (g.fn[Qn] = Yn), ni._jQueryInterface;
        }),
        (function () {
            if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        })(),
        (t.Util = _),
        (t.Alert = p),
        (t.Button = P),
        (t.Carousel = lt),
        (t.Collapse = bt),
        (t.Dropdown = Jt),
        (t.Modal = ve),
        (t.Popover = sn),
        (t.Scrollspy = Dn),
        (t.Tab = Kn),
        (t.Toast = ni),
        (t.Tooltip = Be),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : (t.PerfectScrollbar = e());
})(this, function () {
    "use strict";
    function t(t) {
        return getComputedStyle(t);
    }
    function e(t, e) {
        for (var i in e) {
            var r = e[i];
            "number" == typeof r && (r += "px"), (t.style[i] = r);
        }
        return t;
    }
    function i(t) {
        var e = document.createElement("div");
        return (e.className = t), e;
    }
    function r(t, e) {
        if (!v) throw new Error("No element matching method supported");
        return v.call(t, e);
    }
    function l(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
    }
    function n(t, e) {
        return Array.prototype.filter.call(t.children, function (t) {
            return r(t, e);
        });
    }
    function o(t, e) {
        var i = t.element.classList,
            r = m.state.scrolling(e);
        i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
    }
    function s(t, e) {
        Y[e] = setTimeout(function () {
            return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
        }, t.settings.scrollingThreshold);
    }
    function a(t, e) {
        o(t, e), s(t, e);
    }
    function c(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e;
    }
    function h(t, e, i, r, l) {
        var n = i[0],
            o = i[1],
            s = i[2],
            h = i[3],
            u = i[4],
            d = i[5];
        void 0 === r && (r = !0), void 0 === l && (l = !1);
        var f = t.element;
        (t.reach[h] = null),
            f[s] < 1 && (t.reach[h] = "start"),
            f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"),
            e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)),
            t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
    }
    function u(t) {
        return parseInt(t, 10) || 0;
    }
    function d(t) {
        return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]");
    }
    function f(e) {
        var i = t(e);
        return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth);
    }
    function p(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
    }
    function b(t, i) {
        var r = { width: i.railXWidth },
            l = Math.floor(t.scrollTop);
        i.isRtl ? (r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth) : (r.left = t.scrollLeft),
            i.isScrollbarXUsingBottom ? (r.bottom = i.scrollbarXBottom - l) : (r.top = i.scrollbarXTop + l),
            e(i.scrollbarXRail, r);
        var n = { top: l, height: i.railYHeight };
        i.isScrollbarYUsingRight
            ? i.isRtl
                ? (n.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth)
                : (n.right = i.scrollbarYRight - t.scrollLeft)
            : i.isRtl
            ? (n.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth)
            : (n.left = i.scrollbarYLeft + t.scrollLeft),
            e(i.scrollbarYRail, n),
            e(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth }),
            e(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth });
    }
    function g(t, e) {
        function i(e) {
            (b[d] = g + Y * (e[a] - v)), o(t, f), R(t), e.stopPropagation(), e.preventDefault();
        }
        function r() {
            s(t, f), t[p].classList.remove(m.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i);
        }
        var l = e[0],
            n = e[1],
            a = e[2],
            c = e[3],
            h = e[4],
            u = e[5],
            d = e[6],
            f = e[7],
            p = e[8],
            b = t.element,
            g = null,
            v = null,
            Y = null;
        t.event.bind(t[h], "mousedown", function (e) {
            (g = b[d]),
                (v = e[a]),
                (Y = (t[n] - t[l]) / (t[c] - t[u])),
                t.event.bind(t.ownerDocument, "mousemove", i),
                t.event.once(t.ownerDocument, "mouseup", r),
                t[p].classList.add(m.state.clicking),
                e.stopPropagation(),
                e.preventDefault();
        });
    }
    var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps",
            element: {
                thumb: function (t) {
                    return "ps__thumb-" + t;
                },
                rail: function (t) {
                    return "ps__rail-" + t;
                },
                consuming: "ps__child--consume",
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (t) {
                    return "ps--active-" + t;
                },
                scrolling: function (t) {
                    return "ps--scrolling-" + t;
                },
            },
        },
        Y = { x: null, y: null },
        X = function (t) {
            (this.element = t), (this.handlers = {});
        },
        w = { isEmpty: { configurable: !0 } };
    (X.prototype.bind = function (t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
    }),
        (X.prototype.unbind = function (t, e) {
            var i = this;
            this.handlers[t] = this.handlers[t].filter(function (r) {
                return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
            });
        }),
        (X.prototype.unbindAll = function () {
            var t = this;
            for (var e in t.handlers) t.unbind(e);
        }),
        (w.isEmpty.get = function () {
            var t = this;
            return Object.keys(this.handlers).every(function (e) {
                return 0 === t.handlers[e].length;
            });
        }),
        Object.defineProperties(X.prototype, w);
    var y = function () {
        this.eventElements = [];
    };
    (y.prototype.eventElement = function (t) {
        var e = this.eventElements.filter(function (e) {
            return e.element === t;
        })[0];
        return e || ((e = new X(t)), this.eventElements.push(e)), e;
    }),
        (y.prototype.bind = function (t, e, i) {
            this.eventElement(t).bind(e, i);
        }),
        (y.prototype.unbind = function (t, e, i) {
            var r = this.eventElement(t);
            r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
        }),
        (y.prototype.unbindAll = function () {
            this.eventElements.forEach(function (t) {
                return t.unbindAll();
            }),
                (this.eventElements = []);
        }),
        (y.prototype.once = function (t, e, i) {
            var r = this.eventElement(t),
                l = function (t) {
                    r.unbind(e, l), i(t);
                };
            r.bind(e, l);
        });
    var W = function (t, e, i, r, l) {
            void 0 === r && (r = !0), void 0 === l && (l = !1);
            var n;
            if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else {
                if ("left" !== e) throw new Error("A proper axis should be provided");
                n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
            }
            h(t, i, n, r, l);
        },
        L = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent),
        },
        R = function (t) {
            var e = t.element,
                i = Math.floor(e.scrollTop);
            (t.containerWidth = e.clientWidth),
                (t.containerHeight = e.clientHeight),
                (t.contentWidth = e.scrollWidth),
                (t.contentHeight = e.scrollHeight),
                e.contains(t.scrollbarXRail) ||
                    (n(e, m.element.rail("x")).forEach(function (t) {
                        return l(t);
                    }),
                    e.appendChild(t.scrollbarXRail)),
                e.contains(t.scrollbarYRail) ||
                    (n(e, m.element.rail("y")).forEach(function (t) {
                        return l(t);
                    }),
                    e.appendChild(t.scrollbarYRail)),
                !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
                    ? ((t.scrollbarXActive = !0),
                      (t.railXWidth = t.containerWidth - t.railXMarginWidth),
                      (t.railXRatio = t.containerWidth / t.railXWidth),
                      (t.scrollbarXWidth = p(t, u((t.railXWidth * t.containerWidth) / t.contentWidth))),
                      (t.scrollbarXLeft = u(((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth)) / (t.contentWidth - t.containerWidth))))
                    : (t.scrollbarXActive = !1),
                !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
                    ? ((t.scrollbarYActive = !0),
                      (t.railYHeight = t.containerHeight - t.railYMarginHeight),
                      (t.railYRatio = t.containerHeight / t.railYHeight),
                      (t.scrollbarYHeight = p(t, u((t.railYHeight * t.containerHeight) / t.contentHeight))),
                      (t.scrollbarYTop = u((i * (t.railYHeight - t.scrollbarYHeight)) / (t.contentHeight - t.containerHeight))))
                    : (t.scrollbarYActive = !1),
                t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
                t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                b(e, t),
                t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), (t.scrollbarXWidth = 0), (t.scrollbarXLeft = 0), (e.scrollLeft = 0)),
                t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), (t.scrollbarYHeight = 0), (t.scrollbarYTop = 0), (e.scrollTop = 0));
        },
        T = {
            "click-rail": function (t) {
                t.event.bind(t.scrollbarY, "mousedown", function (t) {
                    return t.stopPropagation();
                }),
                    t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
                        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                        (t.element.scrollTop += i * t.containerHeight), R(t), e.stopPropagation();
                    }),
                    t.event.bind(t.scrollbarX, "mousedown", function (t) {
                        return t.stopPropagation();
                    }),
                    t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
                        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                        (t.element.scrollLeft += i * t.containerWidth), R(t), e.stopPropagation();
                    });
            },
            "drag-thumb": function (t) {
                g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
                    g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
            },
            keyboard: function (t) {
                function e(e, r) {
                    var l = Math.floor(i.scrollTop);
                    if (0 === e) {
                        if (!t.scrollbarYActive) return !1;
                        if ((0 === l && r > 0) || (l >= t.contentHeight - t.containerHeight && r < 0)) return !t.settings.wheelPropagation;
                    }
                    var n = i.scrollLeft;
                    if (0 === r) {
                        if (!t.scrollbarXActive) return !1;
                        if ((0 === n && e < 0) || (n >= t.contentWidth - t.containerWidth && e > 0)) return !t.settings.wheelPropagation;
                    }
                    return !0;
                }
                var i = t.element,
                    l = function () {
                        return r(i, ":hover");
                    },
                    n = function () {
                        return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
                    };
                t.event.bind(t.ownerDocument, "keydown", function (r) {
                    if (!((r.isDefaultPrevented && r.isDefaultPrevented()) || r.defaultPrevented) && (l() || n())) {
                        var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else for (; o.shadowRoot; ) o = o.shadowRoot.activeElement;
                            if (d(o)) return;
                        }
                        var s = 0,
                            a = 0;
                        switch (r.which) {
                            case 37:
                                s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                                break;
                            case 32:
                                a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                                break;
                            case 33:
                                a = t.containerHeight;
                                break;
                            case 34:
                                a = -t.containerHeight;
                                break;
                            case 36:
                                a = t.contentHeight;
                                break;
                            case 35:
                                a = -t.contentHeight;
                                break;
                            default:
                                return;
                        }
                        (t.settings.suppressScrollX && 0 !== s) || (t.settings.suppressScrollY && 0 !== a) || ((i.scrollTop -= a), (i.scrollLeft += s), R(t), e(s, a) && r.preventDefault());
                    }
                });
            },
            wheel: function (e) {
                function i(t, i) {
                    var r = Math.floor(o.scrollTop),
                        l = 0 === o.scrollTop,
                        n = r + o.offsetHeight === o.scrollHeight,
                        s = 0 === o.scrollLeft,
                        a = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                    return !(Math.abs(i) > Math.abs(t) ? l || n : s || a) || !e.settings.wheelPropagation;
                }
                function r(t) {
                    var e = t.deltaX,
                        i = -1 * t.deltaY;
                    return (
                        (void 0 !== e && void 0 !== i) || ((e = (-1 * t.wheelDeltaX) / 6), (i = t.wheelDeltaY / 6)),
                        t.deltaMode && 1 === t.deltaMode && ((e *= 10), (i *= 10)),
                        e !== e && i !== i && ((e = 0), (i = t.wheelDelta)),
                        t.shiftKey ? [-i, -e] : [e, i]
                    );
                }
                function l(e, i, r) {
                    if (!L.isWebKit && o.querySelector("select:focus")) return !0;
                    if (!o.contains(e)) return !1;
                    for (var l = e; l && l !== o; ) {
                        if (l.classList.contains(m.element.consuming)) return !0;
                        var n = t(l);
                        if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                            var s = l.scrollHeight - l.clientHeight;
                            if (s > 0 && !((0 === l.scrollTop && r > 0) || (l.scrollTop === s && r < 0))) return !0;
                            var a = l.scrollWidth - l.clientWidth;
                            if (a > 0 && !((0 === l.scrollLeft && i < 0) || (l.scrollLeft === a && i > 0))) return !0;
                        }
                        l = l.parentNode;
                    }
                    return !1;
                }
                function n(t) {
                    var n = r(t),
                        s = n[0],
                        a = n[1];
                    if (!l(t.target, s, a)) {
                        var c = !1;
                        e.settings.useBothWheelAxes
                            ? e.scrollbarYActive && !e.scrollbarXActive
                                ? (a ? (o.scrollTop -= a * e.settings.wheelSpeed) : (o.scrollTop += s * e.settings.wheelSpeed), (c = !0))
                                : e.scrollbarXActive && !e.scrollbarYActive && (s ? (o.scrollLeft += s * e.settings.wheelSpeed) : (o.scrollLeft -= a * e.settings.wheelSpeed), (c = !0))
                            : ((o.scrollTop -= a * e.settings.wheelSpeed), (o.scrollLeft += s * e.settings.wheelSpeed)),
                            R(e),
                            (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
                    }
                }
                var o = e.element;
                void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
            },
            touch: function (e) {
                function i(t, i) {
                    var r = Math.floor(h.scrollTop),
                        l = h.scrollLeft,
                        n = Math.abs(t),
                        o = Math.abs(i);
                    if (o > n) {
                        if ((i < 0 && r === e.contentHeight - e.containerHeight) || (i > 0 && 0 === r)) return 0 === window.scrollY && i > 0 && L.isChrome;
                    } else if (n > o && ((t < 0 && l === e.contentWidth - e.containerWidth) || (t > 0 && 0 === l))) return !0;
                    return !0;
                }
                function r(t, i) {
                    (h.scrollTop -= i), (h.scrollLeft -= t), R(e);
                }
                function l(t) {
                    return t.targetTouches ? t.targetTouches[0] : t;
                }
                function n(t) {
                    return !(
                        (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
                        ((!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                    );
                }
                function o(t) {
                    if (n(t)) {
                        var e = l(t);
                        (u.pageX = e.pageX), (u.pageY = e.pageY), (d = new Date().getTime()), null !== p && clearInterval(p);
                    }
                }
                function s(e, i, r) {
                    if (!h.contains(e)) return !1;
                    for (var l = e; l && l !== h; ) {
                        if (l.classList.contains(m.element.consuming)) return !0;
                        var n = t(l);
                        if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
                            var o = l.scrollHeight - l.clientHeight;
                            if (o > 0 && !((0 === l.scrollTop && r > 0) || (l.scrollTop === o && r < 0))) return !0;
                            var s = l.scrollLeft - l.clientWidth;
                            if (s > 0 && !((0 === l.scrollLeft && i < 0) || (l.scrollLeft === s && i > 0))) return !0;
                        }
                        l = l.parentNode;
                    }
                    return !1;
                }
                function a(t) {
                    if (n(t)) {
                        var e = l(t),
                            o = { pageX: e.pageX, pageY: e.pageY },
                            a = o.pageX - u.pageX,
                            c = o.pageY - u.pageY;
                        if (s(t.target, a, c)) return;
                        r(a, c), (u = o);
                        var h = new Date().getTime(),
                            p = h - d;
                        p > 0 && ((f.x = a / p), (f.y = c / p), (d = h)), i(a, c) && t.preventDefault();
                    }
                }
                function c() {
                    e.settings.swipeEasing &&
                        (clearInterval(p),
                        (p = setInterval(function () {
                            e.isInitialized ? clearInterval(p) : f.x || f.y ? (Math.abs(f.x) < 0.01 && Math.abs(f.y) < 0.01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), (f.x *= 0.8), (f.y *= 0.8))) : clearInterval(p);
                        }, 10)));
                }
                if (L.supportsTouch || L.supportsIePointer) {
                    var h = e.element,
                        u = {},
                        d = 0,
                        f = {},
                        p = null;
                    L.supportsTouch
                        ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c))
                        : L.supportsIePointer &&
                          (window.PointerEvent
                              ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c))
                              : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)));
                }
            },
        },
        H = function (r, l) {
            var n = this;
            if ((void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName)) throw new Error("no element is specified to initialize PerfectScrollbar");
            (this.element = r),
                r.classList.add(m.main),
                (this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1,
                });
            for (var o in l) n.settings[o] = l[o];
            (this.containerWidth = null), (this.containerHeight = null), (this.contentWidth = null), (this.contentHeight = null);
            var s = function () {
                    return r.classList.add(m.state.focus);
                },
                a = function () {
                    return r.classList.remove(m.state.focus);
                };
            (this.isRtl = "rtl" === t(r).direction),
                (this.isNegativeScroll = (function () {
                    var t = r.scrollLeft,
                        e = null;
                    return (r.scrollLeft = -1), (e = r.scrollLeft < 0), (r.scrollLeft = t), e;
                })()),
                (this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0),
                (this.event = new y()),
                (this.ownerDocument = r.ownerDocument || document),
                (this.scrollbarXRail = i(m.element.rail("x"))),
                r.appendChild(this.scrollbarXRail),
                (this.scrollbarX = i(m.element.thumb("x"))),
                this.scrollbarXRail.appendChild(this.scrollbarX),
                this.scrollbarX.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarX, "focus", s),
                this.event.bind(this.scrollbarX, "blur", a),
                (this.scrollbarXActive = null),
                (this.scrollbarXWidth = null),
                (this.scrollbarXLeft = null);
            var c = t(this.scrollbarXRail);
            (this.scrollbarXBottom = parseInt(c.bottom, 10)),
                isNaN(this.scrollbarXBottom) ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = u(c.top))) : (this.isScrollbarXUsingBottom = !0),
                (this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth)),
                e(this.scrollbarXRail, { display: "block" }),
                (this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight)),
                e(this.scrollbarXRail, { display: "" }),
                (this.railXWidth = null),
                (this.railXRatio = null),
                (this.scrollbarYRail = i(m.element.rail("y"))),
                r.appendChild(this.scrollbarYRail),
                (this.scrollbarY = i(m.element.thumb("y"))),
                this.scrollbarYRail.appendChild(this.scrollbarY),
                this.scrollbarY.setAttribute("tabindex", 0),
                this.event.bind(this.scrollbarY, "focus", s),
                this.event.bind(this.scrollbarY, "blur", a),
                (this.scrollbarYActive = null),
                (this.scrollbarYHeight = null),
                (this.scrollbarYTop = null);
            var h = t(this.scrollbarYRail);
            (this.scrollbarYRight = parseInt(h.right, 10)),
                isNaN(this.scrollbarYRight) ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = u(h.left))) : (this.isScrollbarYUsingRight = !0),
                (this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null),
                (this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth)),
                e(this.scrollbarYRail, { display: "block" }),
                (this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom)),
                e(this.scrollbarYRail, { display: "" }),
                (this.railYHeight = null),
                (this.railYRatio = null),
                (this.reach = {
                    x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null,
                }),
                (this.isAlive = !0),
                this.settings.handlers.forEach(function (t) {
                    return T[t](n);
                }),
                (this.lastScrollTop = Math.floor(r.scrollTop)),
                (this.lastScrollLeft = r.scrollLeft),
                this.event.bind(this.element, "scroll", function (t) {
                    return n.onScroll(t);
                }),
                R(this);
        };
    return (
        (H.prototype.update = function () {
            this.isAlive &&
                ((this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0),
                e(this.scrollbarXRail, { display: "block" }),
                e(this.scrollbarYRail, { display: "block" }),
                (this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight)),
                (this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom)),
                e(this.scrollbarXRail, { display: "none" }),
                e(this.scrollbarYRail, { display: "none" }),
                R(this),
                W(this, "top", 0, !1, !0),
                W(this, "left", 0, !1, !0),
                e(this.scrollbarXRail, { display: "" }),
                e(this.scrollbarYRail, { display: "" }));
        }),
        (H.prototype.onScroll = function (t) {
            this.isAlive &&
                (R(this),
                W(this, "top", this.element.scrollTop - this.lastScrollTop),
                W(this, "left", this.element.scrollLeft - this.lastScrollLeft),
                (this.lastScrollTop = Math.floor(this.element.scrollTop)),
                (this.lastScrollLeft = this.element.scrollLeft));
        }),
        (H.prototype.destroy = function () {
            this.isAlive &&
                (this.event.unbindAll(),
                l(this.scrollbarX),
                l(this.scrollbarY),
                l(this.scrollbarXRail),
                l(this.scrollbarYRail),
                this.removePsClasses(),
                (this.element = null),
                (this.scrollbarX = null),
                (this.scrollbarY = null),
                (this.scrollbarXRail = null),
                (this.scrollbarYRail = null),
                (this.isAlive = !1));
        }),
        (H.prototype.removePsClasses = function () {
            this.element.className = this.element.className
                .split(" ")
                .filter(function (t) {
                    return !t.match(/^ps([-_].+|)$/);
                })
                .join(" ");
        }),
        H
    );
});

/* Unison JS */
Unison = (function () {
    "use strict";
    var a,
        b = window,
        c = document,
        d = c.head,
        e = {},
        f = !1,
        g = {
            parseMQ: function (a) {
                var c = b.getComputedStyle(a, null).getPropertyValue("font-family");
                return c.replace(/"/g, "").replace(/'/g, "");
            },
            debounce: function (a, b, c) {
                var d;
                return function () {
                    var e = this,
                        f = arguments;
                    clearTimeout(d),
                        (d = setTimeout(function () {
                            (d = null), c || a.apply(e, f);
                        }, b)),
                        c && !d && a.apply(e, f);
                };
            },
            isObject: function (a) {
                return "object" == typeof a;
            },
            isUndefined: function (a) {
                return "undefined" == typeof a;
            },
        },
        h = {
            on: function (a, b) {
                g.isObject(e[a]) || (e[a] = []), e[a].push(b);
            },
            emit: function (a, b) {
                if (g.isObject(e[a])) for (var c = e[a].slice(), d = 0; d < c.length; d++) c[d].call(this, b);
            },
        },
        i = {
            all: function () {
                for (var a = {}, b = g.parseMQ(c.querySelector("title")).split(","), d = 0; d < b.length; d++) {
                    var e = b[d].trim().split(" ");
                    a[e[0]] = e[1];
                }
                return f ? a : null;
            },
            now: function (a) {
                var b = g.parseMQ(d).split(" "),
                    c = { name: b[0], width: b[1] };
                return f ? (g.isUndefined(a) ? c : a(c)) : null;
            },
            update: function () {
                i.now(function (b) {
                    b.name !== a && (h.emit(b.name), h.emit("change", b), (a = b.name));
                });
            },
        };
    return (
        (b.onresize = g.debounce(i.update, 100)),
        c.addEventListener("DOMContentLoaded", function () {
            (f = "none" !== b.getComputedStyle(d, null).getPropertyValue("clear")), i.update();
        }),
        { fetch: { all: i.all, now: i.now }, on: h.on, emit: h.emit, util: { debounce: g.debounce, isObject: g.isObject } }
    );
})();

/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

!(function () {
    "use strict";
    function e(e) {
        function t(t, n) {
            var s,
                h,
                k = t == window,
                y = n && void 0 !== n.message ? n.message : void 0;
            if (((n = e.extend({}, e.blockUI.defaults, n || {})), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked"))) {
                if (
                    ((n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {})),
                    (s = e.extend({}, e.blockUI.defaults.css, n.css || {})),
                    n.onOverlayClick && (n.overlayCSS.cursor = "pointer"),
                    (h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {})),
                    (y = void 0 === y ? n.message : y),
                    k && p && o(window, { fadeOut: 0 }),
                    y && "string" != typeof y && (y.parentNode || y.jquery))
                ) {
                    var m = y.jquery ? y[0] : y,
                        v = {};
                    e(t).data("blockUI.history", v), (v.el = m), (v.parent = m.parentNode), (v.display = m.style.display), (v.position = m.style.position), v.parent && v.parent.removeChild(m);
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var g,
                    I,
                    w,
                    U,
                    x = n.baseZ;
                (g = e(
                    r || n.forceIframe
                        ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>'
                        : '<div class="blockUI" style="display:none"></div>'
                )),
                    (I = e(
                        n.theme
                            ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>'
                            : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'
                    )),
                    n.theme && k
                        ? ((U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">'),
                          n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"),
                          (U += '<div class="ui-widget-content ui-dialog-content"></div>'),
                          (U += "</div>"))
                        : n.theme
                        ? ((U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">'),
                          n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"),
                          (U += '<div class="ui-widget-content ui-dialog-content"></div>'),
                          (U += "</div>"))
                        : (U = k
                              ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>'
                              : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>'),
                    (w = e(U)),
                    y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)),
                    n.theme || I.css(n.overlayCSS),
                    I.css("position", k ? "fixed" : "absolute"),
                    (r || n.forceIframe) && g.css("opacity", 0);
                var C = [g, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function () {
                    this.appendTo(S);
                }),
                    n.theme && n.draggable && e.fn.draggable && w.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
                var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
                if (u || O) {
                    if ((k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k))
                        var E = d(t, "borderTopWidth"),
                            T = d(t, "borderLeftWidth"),
                            M = E ? "(0 - " + E + ")" : 0,
                            B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function (e, t) {
                        var o = t[0].style;
                        if (((o.position = "absolute"), 2 > e))
                            k
                                ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"')
                                : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                                k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                                B && o.setExpression("left", B),
                                M && o.setExpression("top", M);
                        else if (n.centerY)
                            k &&
                                o.setExpression(
                                    "top",
                                    '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                                ),
                                (o.marginTop = 0);
                        else if (!n.centerY && k) {
                            var i = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                                s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';
                            o.setExpression("top", s);
                        }
                    });
                }
                if ((y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && g.show(), n.fadeIn)) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z);
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
                if ((i(1, t, n), k ? ((p = w[0]), (b = e(n.focusableElements, p)), n.focusInput && setTimeout(l, 20)) : a(w[0], n.centerX, n.centerY), n.timeout)) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n);
                    }, n.timeout);
                    e(t).data("blockUI.timeout", W);
                }
            }
        }
        function o(t, o) {
            var s,
                l = t == window,
                a = e(t),
                d = a.data("blockUI.history"),
                c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), (o = e.extend({}, e.blockUI.defaults, o || {})), i(0, t, o), null === o.onUnblock && ((o.onUnblock = a.data("blockUI.onUnblock")), a.removeData("blockUI.onUnblock"));
            var r;
            (r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI")),
                o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)),
                l && (p = b = null),
                o.fadeOut
                    ? ((s = r.length),
                      r.stop().fadeOut(o.fadeOut, function () {
                          0 === --s && n(r, d, o, t);
                      }))
                    : n(r, d, o, t);
        }
        function n(t, o, n, i) {
            var s = e(i);
            if (!s.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this);
                }),
                    o && o.el && ((o.el.style.display = o.display), (o.el.style.position = o.position), (o.el.style.cursor = "default"), o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")),
                    s.data("blockUI.static") && s.css("position", "static"),
                    "function" == typeof n.onUnblock && n.onUnblock(i, n);
                var l = e(document.body),
                    a = l.width(),
                    d = l[0].style.width;
                l.width(a - 1).width(a), (l[0].style.width = d);
            }
        }
        function i(t, o, n) {
            var i = o == window,
                l = e(o);
            if ((t || ((!i || p) && (i || l.data("blockUI.isBlocked")))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(a, n, s) : e(document).unbind(a, s);
            }
        }
        function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];
                if (n || i)
                    return (
                        setTimeout(function () {
                            l(i);
                        }, 10),
                        !1
                    );
            }
            var s = t.data,
                a = e(t.target);
            return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length;
        }
        function l(e) {
            if (b) {
                var t = b[e === !0 ? b.length - 1 : 0];
                t && t.focus();
            }
        }
        function a(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - d(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - d(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0");
        }
        function d(t, o) {
            return parseInt(e.css(t, o), 10) || 0;
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop || function () {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
        (e.blockUI = function (e) {
            t(window, e);
        }),
            (e.unblockUI = function (e) {
                o(window, e);
            }),
            (e.growlUI = function (t, o, n, i) {
                var s = e('<div class="growlUI"></div>');
                t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), void 0 === n && (n = 3e3);
                var l = function (t) {
                    (t = t || {}),
                        e.blockUI({
                            message: s,
                            fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                            fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                            timeout: "undefined" != typeof t.timeout ? t.timeout : n,
                            centerY: !1,
                            showOverlay: !1,
                            onUnblock: i,
                            css: e.blockUI.defaults.growlCSS,
                        });
                };
                l();
                s.css("opacity");
                s.mouseover(function () {
                    l({ fadeIn: 0, timeout: 3e4 });
                    var t = e(".blockMsg");
                    t.stop(), t.fadeTo(300, 1);
                }).mouseout(function () {
                    e(".blockMsg").fadeOut(1e3);
                });
            }),
            (e.fn.block = function (o) {
                if (this[0] === window) return e.blockUI(o), this;
                var n = e.extend({}, e.blockUI.defaults, o || {});
                return (
                    this.each(function () {
                        var t = e(this);
                        (n.ignoreIfBlocked && t.data("blockUI.isBlocked")) || t.unblock({ fadeOut: 0 });
                    }),
                    this.each(function () {
                        "static" == e.css(this, "position") && ((this.style.position = "relative"), e(this).data("blockUI.static", !0)), (this.style.zoom = 1), t(this, o);
                    })
                );
            }),
            (e.fn.unblock = function (t) {
                return this[0] === window
                    ? (e.unblockUI(t), this)
                    : this.each(function () {
                          o(this, t);
                      });
            }),
            (e.blockUI.version = 2.7),
            (e.blockUI.defaults = {
                message: "<h1>Please wait...</h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" },
                themedCSS: { width: "30%", top: "40%", left: "35%" },
                overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" },
                cursorReset: "default",
                growlCSS: {
                    width: "350px",
                    top: "10px",
                    left: "",
                    right: "10px",
                    border: "none",
                    padding: "5px",
                    opacity: 0.6,
                    cursor: "default",
                    color: "#fff",
                    backgroundColor: "#000",
                    "-webkit-border-radius": "10px",
                    "-moz-border-radius": "10px",
                    "border-radius": "10px",
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1e3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                focusableElements: ":input:enabled:visible",
                onBlock: null,
                onUnblock: null,
                onOverlayClick: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1,
            });
        var p = null,
            b = [];
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery);
})();

/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
!(function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? (module.exports = t(require("jquery"))) : t(jQuery);
})(function (t) {
    var e = -1,
        o = -1,
        n = function (t) {
            return parseFloat(t) || 0;
        },
        a = function (e) {
            var o = 1,
                a = t(e),
                i = null,
                r = [];
            return (
                a.each(function () {
                    var e = t(this),
                        a = e.offset().top - n(e.css("margin-top")),
                        s = r.length > 0 ? r[r.length - 1] : null;
                    null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? (r[r.length - 1] = s.add(e)) : r.push(e), (i = a);
                }),
                r
            );
        },
        i = function (e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1,
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? (o.byRow = e) : "remove" === e && (o.remove = !0), o);
        },
        r = (t.fn.matchHeight = function (e) {
            var o = i(e);
            if (o.remove) {
                var n = this;
                return (
                    this.css(o.property, ""),
                    t.each(r._groups, function (t, e) {
                        e.elements = e.elements.not(n);
                    }),
                    this
                );
            }
            return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this);
        });
    (r.version = "0.7.2"),
        (r._groups = []),
        (r._throttle = 80),
        (r._maintainScroll = !1),
        (r._beforeUpdate = null),
        (r._afterUpdate = null),
        (r._rows = a),
        (r._parse = n),
        (r._parseOptions = i),
        (r._apply = function (e, o) {
            var s = i(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                u = h.parents().filter(":hidden");
            return (
                u.each(function () {
                    var e = t(this);
                    e.data("style-cache", e.attr("style"));
                }),
                u.css("display", "block"),
                s.byRow &&
                    !s.target &&
                    (h.each(function () {
                        var e = t(this),
                            o = e.css("display");
                        "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"),
                            e.data("style-cache", e.attr("style")),
                            e.css({ display: o, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" });
                    }),
                    (l = a(h)),
                    h.each(function () {
                        var e = t(this);
                        e.attr("style", e.data("style-cache") || "");
                    })),
                t.each(l, function (e, o) {
                    var a = t(o),
                        i = 0;
                    if (s.target) i = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                        a.each(function () {
                            var e = t(this),
                                o = e.attr("style"),
                                n = e.css("display");
                            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                            var a = {
                                display: n,
                            };
                            (a[s.property] = ""), e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "");
                        });
                    }
                    a.each(function () {
                        var e = t(this),
                            o = 0;
                        (s.target && e.is(s.target)) ||
                            ("border-box" !== e.css("box-sizing") && ((o += n(e.css("border-top-width")) + n(e.css("border-bottom-width"))), (o += n(e.css("padding-top")) + n(e.css("padding-bottom")))), e.css(s.property, i - o + "px"));
                    });
                }),
                u.each(function () {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || null);
                }),
                r._maintainScroll && t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
                this
            );
        }),
        (r._applyDataApi = function () {
            var e = {};
            t("[data-match-height], [data-mh]").each(function () {
                var o = t(this),
                    n = o.attr("data-mh") || o.attr("data-match-height");
                n in e ? (e[n] = e[n].add(o)) : (e[n] = o);
            }),
                t.each(e, function () {
                    this.matchHeight(!0);
                });
        });
    var s = function (e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups),
            t.each(r._groups, function () {
                r._apply(this.elements, this.options);
            }),
            r._afterUpdate && r._afterUpdate(e, r._groups);
    };
    (r._update = function (n, a) {
        if (a && "resize" === a.type) {
            var i = t(window).width();
            if (i === e) return;
            e = i;
        }
        n
            ? o === -1 &&
              (o = setTimeout(function () {
                  s(a), (o = -1);
              }, r._throttle))
            : s(a);
    }),
        t(r._applyDataApi);
    var h = t.fn.on ? "on" : "bind";
    t(window)[h]("load", function (t) {
        r._update(!1, t);
    }),
        t(window)[h]("resize orientationchange", function (t) {
            r._update(!0, t);
        });
});
/*
 *	jQuery Sliding Menu Plugin
 *	Mobile app list-style navigation in the browser
 *
 *	Written by Ali Zahid
 *	http://designplox.com/jquery-sliding-menu
 */
!(function (a) {
    var e = [];
    a.fn.slidingMenu = function (t) {
        function n(e) {
            var t = a("ul", e),
                n = [];
            return (
                a(t).each(function (e, t) {
                    var r = a(t),
                        s = r.prev(),
                        l = i();
                    if ((1 == s.length && (s.addClass("nav-has-children dropdown-item").attr("href", "#menu-panel-" + l), s.append('<i class="ft-arrow-right children-in"></i>')), r.attr("id", "menu-panel-" + l), 0 == e))
                        r.addClass("menu-panel-root");
                    else {
                        r.addClass("menu-panel");
                        var d = (a("<li></li>"), a("<a></a>").addClass("nav-has-parent back primary dropdown-item").attr("href", "#menu-panel-back"));
                        r.prepend(d);
                    }
                    n.push(t);
                }),
                n
            );
        }
        function r(e, t) {
            var n = { id: "menu-panel-" + i(), children: [], root: t ? !1 : !0 },
                s = [];
            return (
                t && n.children.push({ styleClass: "back", href: "#" + t.id }),
                a(e).each(function (a, e) {
                    if ((n.children.push(e), e.children)) {
                        var t = r(e.children, n);
                        (e.href = "#" + t[0].id), (e.styleClass = "nav"), (s = s.concat(t));
                    }
                }),
                [n].concat(s)
            );
        }
        function i() {
            var a;
            do a = Math.random().toString(36).substring(3, 8);
            while (e.indexOf(a) >= 0);
            return e.push(a), a;
        }
        function s() {
            var e = a(".sliding-menu-wrapper"),
                t = a(".sliding-menu-wrapper ul");
            t.length &&
                setTimeout(function () {
                    var n = a(l).width();
                    e.width(t.length * n),
                        t.each(function (e, t) {
                            var r = a(t);
                            r.width(n);
                        }),
                        e.css("margin-left", "");
                }, 300);
        }
        var l = this.selector,
            d = !1;
        "rtl" == a("html").data("textdirection") && (d = !0);
        var h = a.extend({ dataJSON: !1, backLabel: "Back" }, t);
        return this.each(function () {
            var e,
                t = this,
                i = a(t);
            if (i.hasClass("sliding-menu")) return void s();
            var l = i.outerWidth();
            (e = h.dataJSON ? r(h.dataJSON) : n(i)), i.empty().addClass("sliding-menu");
            var p;
            h.dataJSON
                ? a(e).each(function (e, t) {
                      var n = a("<ul></ul>");
                      t.root && (p = "#" + t.id),
                          n.attr("id", t.id),
                          n.addClass("menu-panel"),
                          n.width(l),
                          a(t.children).each(function (e, t) {
                              var r = a("<a></a>");
                              r.attr("class", t.styleClass), r.attr("href", t.href), r.text(t.label);
                              var i = a("<li></li>");
                              i.append(r), n.append(i);
                          }),
                          i.append(n);
                  })
                : a(e).each(function (e, t) {
                      var n = a(t);
                      n.hasClass("menu-panel-root") && (p = "#" + n.attr("id")), n.width(l), i.append(t);
                  }),
                (p = a(p)),
                p.addClass("menu-panel-root");
            var c = p;
            i.height(p.height());
            var u = a("<div></div>")
                .addClass("sliding-menu-wrapper")
                .width(e.length * l);
            return (
                i.wrapInner(u),
                (u = a(".sliding-menu-wrapper", i)),
                a("a", t).on("click", function (e) {
                    var t = a(this).attr("href"),
                        n = a(this).text();
                    if (u.is(":animated")) return void e.preventDefault();
                    if ("#" == t) e.preventDefault();
                    else if (0 == t.indexOf("#menu-panel")) {
                        var r,
                            s,
                            l = a(t),
                            o = a(this).hasClass("back");
                        d === !0 ? (s = parseInt(u.css("margin-right"))) : (r = parseInt(u.css("margin-left")));
                        var f = i.width();
                        a(this).closest("ul").hasClass("menu-panel-root") && (c = p),
                            o
                                ? ("#menu-panel-back" == t && (l = c.prev()), d === !0 ? (properties = { marginRight: s + f }) : (properties = { marginLeft: r + f }), u.stop(!0, !0).animate(properties, "fast"))
                                : (l.insertAfter(c),
                                  h.backLabel === !0 ? a(".back", l).html('<i class="la la-arrow-circle-o-left back-in"></i>' + n) : a(".back", l).text(h.backLabel),
                                  d === !0 ? (properties = { marginRight: s - f }) : (properties = { marginLeft: r - f }),
                                  u.stop(!0, !0).animate(properties, "fast")),
                            (c = l),
                            i.stop(!0, !0).animate({ height: l.height() }, "fast"),
                            e.preventDefault();
                    }
                }),
                this
            );
        });
    };
})(jQuery);

/*!
 * screenfull
 * v4.0.0 - 2018-12-15
 * (c) Sindre Sorhus; MIT License
 */

!(function () {
    "use strict";
    var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        e = "undefined" != typeof module && module.exports,
        t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = (function () {
            for (
                var e,
                    n = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                    ],
                    r = 0,
                    l = n.length,
                    t = {};
                r < l;
                r++
            )
                if ((e = n[r]) && e[1] in u) {
                    for (r = 0; r < e.length; r++) t[n[0][r]] = e[r];
                    return t;
                }
            return !1;
        })(),
        l = { change: c.fullscreenchange, error: c.fullscreenerror },
        n = {
            request: function (l) {
                return new Promise(
                    function (e) {
                        var n = c.requestFullscreen,
                            r = function () {
                                this.off("change", r), e();
                            }.bind(this);
                        (l = l || u.documentElement), / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? l[n]() : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", r);
                    }.bind(this)
                );
            },
            exit: function () {
                return new Promise(
                    function (e) {
                        var n = function () {
                            this.off("change", n), e();
                        }.bind(this);
                        u[c.exitFullscreen](), this.on("change", n);
                    }.bind(this)
                );
            },
            toggle: function (e) {
                return this.isFullscreen ? this.exit() : this.request(e);
            },
            onchange: function (e) {
                this.on("change", e);
            },
            onerror: function (e) {
                this.on("error", e);
            },
            on: function (e, n) {
                var r = l[e];
                r && u.addEventListener(r, n, !1);
            },
            off: function (e, n) {
                var r = l[e];
                r && u.removeEventListener(r, n, !1);
            },
            raw: c,
        };
    c
        ? (Object.defineProperties(n, {
              isFullscreen: {
                  get: function () {
                      return Boolean(u[c.fullscreenElement]);
                  },
              },
              element: {
                  enumerable: !0,
                  get: function () {
                      return u[c.fullscreenElement];
                  },
              },
              enabled: {
                  enumerable: !0,
                  get: function () {
                      return Boolean(u[c.fullscreenEnabled]);
                  },
              },
          }),
          e ? (module.exports = n) : (window.screenfull = n))
        : e
        ? (module.exports = !1)
        : (window.screenfull = !1);
})();

/*! pace 1.0.2 */
(function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function (a, b) {
            function c() {
                this.constructor = a;
            }
            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return (c.prototype = b.prototype), (a.prototype = new c()), (a.__super__ = b.prototype), a;
        },
        $ =
            [].indexOf ||
            function (a) {
                for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
                return -1;
            };
    for (
        u = {
            catchupTime: 100,
            initialRate: 0.03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: { checkInterval: 100, selectors: ["body"] },
            eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
            ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] },
        },
            C = function () {
                var a;
                return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
            },
            E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
            t = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
            null == E &&
                ((E = function (a) {
                    return setTimeout(a, 50);
                }),
                (t = function (a) {
                    return clearTimeout(a);
                })),
            G = function (a) {
                var b, c;
                return (
                    (b = C()),
                    (c = function () {
                        var d;
                        return (
                            (d = C() - b),
                            d >= 33
                                ? ((b = C()),
                                  a(d, function () {
                                      return E(c);
                                  }))
                                : setTimeout(c, 33 - d)
                        );
                    })()
                );
            },
            F = function () {
                var a, b, c;
                return (c = arguments[0]), (b = arguments[1]), (a = 3 <= arguments.length ? X.call(arguments, 2) : []), "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
            },
            v = function () {
                var a, b, c, d, e, f, g;
                for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                    if ((c = d[f])) for (a in c) Y.call(c, a) && ((e = c[a]), null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : (b[a] = e));
                return b;
            },
            q = function (a) {
                var b, c, d, e, f;
                for (c = b = 0, e = 0, f = a.length; f > e; e++) (d = a[e]), (c += Math.abs(d)), b++;
                return c / b;
            },
            x = function (a, b) {
                var c, d, e;
                if ((null == a && (a = "options"), null == b && (b = !0), (e = document.querySelector("[data-pace-" + a + "]")))) {
                    if (((c = e.getAttribute("data-pace-" + a)), !b)) return c;
                    try {
                        return JSON.parse(c);
                    } catch (f) {
                        return (d = f), "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
                    }
                }
            },
            g = (function () {
                function a() {}
                return (
                    (a.prototype.on = function (a, b, c, d) {
                        var e;
                        return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d });
                    }),
                    (a.prototype.once = function (a, b, c) {
                        return this.on(a, b, c, !0);
                    }),
                    (a.prototype.off = function (a, b) {
                        var c, d, e;
                        if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                            if (null == b) return delete this.bindings[a];
                            for (c = 0, e = []; c < this.bindings[a].length; ) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                            return e;
                        }
                    }),
                    (a.prototype.trigger = function () {
                        var a, b, c, d, e, f, g, h, i;
                        if (((c = arguments[0]), (a = 2 <= arguments.length ? X.call(arguments, 1) : []), null != (g = this.bindings) ? g[c] : void 0)) {
                            for (e = 0, i = []; e < this.bindings[c].length; ) (h = this.bindings[c][e]), (d = h.handler), (b = h.ctx), (f = h.once), d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                            return i;
                        }
                    }),
                    a
                );
            })(),
            j = window.Pace || {},
            window.Pace = j,
            v(j, g.prototype),
            D = j.options = v({}, u, window.paceOptions, x()),
            U = ["ajax", "document", "eventLag", "elements"],
            Q = 0,
            S = U.length;
        S > Q;
        Q++
    )
        (K = U[Q]), D[K] === !0 && (D[K] = u[K]);
    (i = (function (a) {
        function b() {
            return (V = b.__super__.constructor.apply(this, arguments));
        }
        return Z(b, a), b;
    })(Error)),
        (b = (function () {
            function a() {
                this.progress = 0;
            }
            return (
                (a.prototype.getElement = function () {
                    var a;
                    if (null == this.el) {
                        if (((a = document.querySelector(D.target)), !a)) throw new i();
                        (this.el = document.createElement("div")),
                            (this.el.className = "pace pace-active"),
                            (document.body.className = document.body.className.replace(/pace-done/g, "")),
                            (document.body.className += " pace-running"),
                            (this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
                            null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
                    }
                    return this.el;
                }),
                (a.prototype.finish = function () {
                    var a;
                    return (
                        (a = this.getElement()),
                        (a.className = a.className.replace("pace-active", "")),
                        (a.className += " pace-inactive"),
                        (document.body.className = document.body.className.replace("pace-running", "")),
                        (document.body.className += " pace-done")
                    );
                }),
                (a.prototype.update = function (a) {
                    return (this.progress = a), this.render();
                }),
                (a.prototype.destroy = function () {
                    try {
                        this.getElement().parentNode.removeChild(this.getElement());
                    } catch (a) {
                        i = a;
                    }
                    return (this.el = void 0);
                }),
                (a.prototype.render = function () {
                    var a, b, c, d, e, f, g;
                    if (null == document.querySelector(D.target)) return !1;
                    for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) (b = g[e]), (a.children[0].style[b] = d);
                    return (
                        (!this.lastRenderedProgress || this.lastRenderedProgress | (0 !== this.progress) | 0) &&
                            (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"),
                            this.progress >= 100 ? (c = "99") : ((c = this.progress < 10 ? "0" : ""), (c += 0 | this.progress)),
                            a.children[0].setAttribute("data-progress", "" + c)),
                        (this.lastRenderedProgress = this.progress)
                    );
                }),
                (a.prototype.done = function () {
                    return this.progress >= 100;
                }),
                a
            );
        })()),
        (h = (function () {
            function a() {
                this.bindings = {};
            }
            return (
                (a.prototype.trigger = function (a, b) {
                    var c, d, e, f, g;
                    if (null != this.bindings[a]) {
                        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) (c = f[d]), g.push(c.call(this, b));
                        return g;
                    }
                }),
                (a.prototype.on = function (a, b) {
                    var c;
                    return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
                }),
                a
            );
        })()),
        (P = window.XMLHttpRequest),
        (O = window.XDomainRequest),
        (N = window.WebSocket),
        (w = function (a, b) {
            var c, d, e;
            e = [];
            for (d in b.prototype)
                try {
                    e.push(
                        null == a[d] && "function" != typeof b[d]
                            ? "function" == typeof Object.defineProperty
                                ? Object.defineProperty(a, d, {
                                      get: function () {
                                          return b.prototype[d];
                                      },
                                      configurable: !0,
                                      enumerable: !0,
                                  })
                                : (a[d] = b.prototype[d])
                            : void 0
                    );
                } catch (f) {
                    c = f;
                }
            return e;
        }),
        (A = []),
        (j.ignore = function () {
            var a, b, c;
            return (b = arguments[0]), (a = 2 <= arguments.length ? X.call(arguments, 1) : []), A.unshift("ignore"), (c = b.apply(null, a)), A.shift(), c;
        }),
        (j.track = function () {
            var a, b, c;
            return (b = arguments[0]), (a = 2 <= arguments.length ? X.call(arguments, 1) : []), A.unshift("track"), (c = b.apply(null, a)), A.shift(), c;
        }),
        (J = function (a) {
            var b;
            if ((null == a && (a = "GET"), "track" === A[0])) return "force";
            if (!A.length && D.ajax) {
                if ("socket" === a && D.ajax.trackWebSockets) return !0;
                if (((b = a.toUpperCase()), $.call(D.ajax.trackMethods, b) >= 0)) return !0;
            }
            return !1;
        }),
        (k = (function (a) {
            function b() {
                var a,
                    c = this;
                b.__super__.constructor.apply(this, arguments),
                    (a = function (a) {
                        var b;
                        return (
                            (b = a.open),
                            (a.open = function (d, e) {
                                return J(d) && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments);
                            })
                        );
                    }),
                    (window.XMLHttpRequest = function (b) {
                        var c;
                        return (c = new P(b)), a(c), c;
                    });
                try {
                    w(window.XMLHttpRequest, P);
                } catch (d) {}
                if (null != O) {
                    window.XDomainRequest = function () {
                        var b;
                        return (b = new O()), a(b), b;
                    };
                    try {
                        w(window.XDomainRequest, O);
                    } catch (d) {}
                }
                if (null != N && D.ajax.trackWebSockets) {
                    window.WebSocket = function (a, b) {
                        var d;
                        return (d = null != b ? new N(a, b) : new N(a)), J("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d;
                    };
                    try {
                        w(window.WebSocket, N);
                    } catch (d) {}
                }
            }
            return Z(b, a), b;
        })(h)),
        (R = null),
        (y = function () {
            return null == R && (R = new k()), R;
        }),
        (I = function (a) {
            var b, c, d, e;
            for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
                if (((b = e[c]), "string" == typeof b)) {
                    if (-1 !== a.indexOf(b)) return !0;
                } else if (b.test(a)) return !0;
            return !1;
        }),
        y().on("request", function (b) {
            var c, d, e, f, g;
            return (
                (f = b.type),
                (e = b.request),
                (g = b.url),
                I(g)
                    ? void 0
                    : j.running || (D.restartOnRequestAfter === !1 && "force" !== J(f))
                    ? void 0
                    : ((d = arguments),
                      (c = D.restartOnRequestAfter || 0),
                      "boolean" == typeof c && (c = 0),
                      setTimeout(function () {
                          var b, c, g, h, i, k;
                          if ((b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h)) {
                              for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                                  if (((K = i[c]), K instanceof a)) {
                                      K.watch.apply(K, d);
                                      break;
                                  }
                                  k.push(void 0);
                              }
                              return k;
                          }
                      }, c))
            );
        }),
        (a = (function () {
            function a() {
                var a = this;
                (this.elements = []),
                    y().on("request", function () {
                        return a.watch.apply(a, arguments);
                    });
            }
            return (
                (a.prototype.watch = function (a) {
                    var b, c, d, e;
                    return (d = a.type), (b = a.request), (e = a.url), I(e) ? void 0 : ((c = "socket" === d ? new n(b) : new o(b)), this.elements.push(c));
                }),
                a
            );
        })()),
        (o = (function () {
            function a(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = this;
                if (((this.progress = 0), null != window.ProgressEvent))
                    for (
                        c = null,
                            a.addEventListener(
                                "progress",
                                function (a) {
                                    return (h.progress = a.lengthComputable ? (100 * a.loaded) / a.total : h.progress + (100 - h.progress) / 2);
                                },
                                !1
                            ),
                            g = ["load", "abort", "timeout", "error"],
                            d = 0,
                            e = g.length;
                        e > d;
                        d++
                    )
                        (b = g[d]),
                            a.addEventListener(
                                b,
                                function () {
                                    return (h.progress = 100);
                                },
                                !1
                            );
                else
                    (f = a.onreadystatechange),
                        (a.onreadystatechange = function () {
                            var b;
                            return 0 === (b = a.readyState) || 4 === b ? (h.progress = 100) : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
                        });
            }
            return a;
        })()),
        (n = (function () {
            function a(a) {
                var b,
                    c,
                    d,
                    e,
                    f = this;
                for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++)
                    (b = e[c]),
                        a.addEventListener(
                            b,
                            function () {
                                return (f.progress = 100);
                            },
                            !1
                        );
            }
            return a;
        })()),
        (d = (function () {
            function a(a) {
                var b, c, d, f;
                for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) (b = f[c]), this.elements.push(new e(b));
            }
            return a;
        })()),
        (e = (function () {
            function a(a) {
                (this.selector = a), (this.progress = 0), this.check();
            }
            return (
                (a.prototype.check = function () {
                    var a = this;
                    return document.querySelector(this.selector)
                        ? this.done()
                        : setTimeout(function () {
                              return a.check();
                          }, D.elements.checkInterval);
                }),
                (a.prototype.done = function () {
                    return (this.progress = 100);
                }),
                a
            );
        })()),
        (c = (function () {
            function a() {
                var a,
                    b,
                    c = this;
                (this.progress = null != (b = this.states[document.readyState]) ? b : 100),
                    (a = document.onreadystatechange),
                    (document.onreadystatechange = function () {
                        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
                    });
            }
            return (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }), a;
        })()),
        (f = (function () {
            function a() {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f = this;
                (this.progress = 0),
                    (a = 0),
                    (e = []),
                    (d = 0),
                    (c = C()),
                    (b = setInterval(function () {
                        var g;
                        return (
                            (g = C() - c - 50),
                            (c = C()),
                            e.push(g),
                            e.length > D.eventLag.sampleCount && e.shift(),
                            (a = q(e)),
                            ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? ((f.progress = 100), clearInterval(b)) : (f.progress = 100 * (3 / (a + 3)))
                        );
                    }, 50));
            }
            return a;
        })()),
        (m = (function () {
            function a(a) {
                (this.source = a), (this.last = this.sinceLastUpdate = 0), (this.rate = D.initialRate), (this.catchup = 0), (this.progress = this.lastProgress = 0), null != this.source && (this.progress = F(this.source, "progress"));
            }
            return (
                (a.prototype.tick = function (a, b) {
                    var c;
                    return (
                        null == b && (b = F(this.source, "progress")),
                        b >= 100 && (this.done = !0),
                        b === this.last
                            ? (this.sinceLastUpdate += a)
                            : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), (this.catchup = (b - this.progress) / D.catchupTime), (this.sinceLastUpdate = 0), (this.last = b)),
                        b > this.progress && (this.progress += this.catchup * a),
                        (c = 1 - Math.pow(this.progress / 100, D.easeFactor)),
                        (this.progress += c * this.rate * a),
                        (this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress)),
                        (this.progress = Math.max(0, this.progress)),
                        (this.progress = Math.min(100, this.progress)),
                        (this.lastProgress = this.progress),
                        this.progress
                    );
                }),
                a
            );
        })()),
        (L = null),
        (H = null),
        (r = null),
        (M = null),
        (p = null),
        (s = null),
        (j.running = !1),
        (z = function () {
            return D.restartOnPushState ? j.restart() : void 0;
        }),
        null != window.history.pushState &&
            ((T = window.history.pushState),
            (window.history.pushState = function () {
                return z(), T.apply(window.history, arguments);
            })),
        null != window.history.replaceState &&
            ((W = window.history.replaceState),
            (window.history.replaceState = function () {
                return z(), W.apply(window.history, arguments);
            })),
        (l = { ajax: a, elements: d, document: c, eventLag: f }),
        (B = function () {
            var a, c, d, e, f, g, h, i;
            for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) (a = g[c]), D[a] !== !1 && L.push(new l[a](D[a]));
            for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) (K = i[d]), L.push(new K(D));
            return (j.bar = r = new b()), (H = []), (M = new m());
        })(),
        (j.stop = function () {
            return j.trigger("stop"), (j.running = !1), r.destroy(), (s = !0), null != p && ("function" == typeof t && t(p), (p = null)), B();
        }),
        (j.restart = function () {
            return j.trigger("restart"), j.stop(), j.start();
        }),
        (j.go = function () {
            var a;
            return (
                (j.running = !0),
                r.render(),
                (a = C()),
                (s = !1),
                (p = G(function (b, c) {
                    var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
                    for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                        for (K = L[i], o = null != H[i] ? H[i] : (H[i] = []), h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t)
                            (g = h[k]), (n = null != o[k] ? o[k] : (o[k] = new m(g))), (f &= n.done), n.done || (e++, (p += n.tick(b)));
                    return (
                        (d = p / e),
                        r.update(M.tick(b, d)),
                        r.done() || f || s
                            ? (r.update(100),
                              j.trigger("done"),
                              setTimeout(function () {
                                  return r.finish(), (j.running = !1), j.trigger("hide");
                              }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0))))
                            : c()
                    );
                }))
            );
        }),
        (j.start = function (a) {
            v(D, a), (j.running = !0);
            try {
                r.render();
            } catch (b) {
                i = b;
            }
            return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
        }),
        "function" == typeof define && define.amd
            ? define(["pace"], function () {
                  return j;
              })
            : "object" == typeof exports
            ? (module.exports = j)
            : D.startOnPageLoad && j.start();
}.call(this));

var showOverlay = true;
var isAllChecked = false;
var isUnChecked = false;
var pageNumber = 0;

$(document).ready(function () {
    setTimeout(function () {
        $(".close-navbar").trigger("click");
    }, 10);

    $(document).ajaxStart(function () {
        $(".k-loading-image").hide();
        if (showOverlay)
            $("#divWait").css({ "display": "block" });
    });
    $(document).ajaxStop(function () {
        $("#divWait").css({ "display": "none" });
        $(".k-loading-image").show();
    });
    if ($("#phone").length > 0) {
        $("#phone").mask("(999) 999-9999?");
    }
    if ($("#faxnumber").length > 0) {
        $("#faxnumber").mask("(999) 999-9999?");
    }
    $('.addempform').hide();
    $('.addempbtn').click(function (e) {

        $('.addempform').slideDown('slow', function () {
            reposition();
        });
        $('.addempbtn').removeClass('selected');
        $this = $(this);

        divID = $this.attr('title');
        $('#' + divID).slideDown('slow');

    });
    $('.closeform').click(function (e) {
        $(this).parents('.addempform').slideUp('slow', function () {
            reposition();
        });
    });
    $('#add').click(function () {
        return !$('#select1 option:selected').remove().appendTo('#select2');
    });
    $('#remove').click(function () {
        return !$('#select2 option:selected').remove().appendTo('#select1');
    });
    $('form').submit(function () {
        $('#select2 option').each(function (i) {
            $(this).attr("selected", "selected");
        });
    });
    $('.modal').on('show.bs.modal', function () {
        reposition($(this));
    });
    $('.modal-child').on('show.bs.modal', function () {
        var modalParent = $(this).attr('data-modal-parent');
        $(modalParent).css('opacity', 0);

    });
    $('.modal-child').on('hidden.bs.modal', function () {
        var modalParent = $(this).attr('data-modal-parent');
        $(modalParent).css('opacity', 1);

    });
});
function SetLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

function initializeAllCheckBox() { var n = $("#allCheckBox").is(":checked"); $(".singleCheckBox").prop("checked", n ? !0 : !1); $(".singleCheckBox").closest("tr").addClass(n ? "selected-row" : "not-selected-row"); $(".singleCheckBox").closest("tr").removeClass(n ? "not-selected-row" : "selected-row") }
function initializeSingleCheckBox(n) { var t = $(n).is(":checked"); $(n).closest("tr").addClass(t ? "selected-row" : "not-selected-row"); $(n).closest("tr").removeClass(t ? "not-selected-row" : "selected-row"); t && $(".singleCheckBox").length == $(".selected-row").length ? $("#allCheckBox").prop("checked", !0) : $("#allCheckBox").prop("checked", !1) }
function Check_CheckBox_Count() { var n = $("input[name=ids]"), t = n.filter(":checked").length; return t > 0 ? confirm("Are you sure? Do you want to delete record(s)?") : (alert("Please select at least one checkbox to delete."), !1) }
function validateEmail(n) { return n.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? !0 : !1 }
function ValidateNumber(n) { var i = window.event || n || event, t = i.which || i.keyCode; return t > 31 && (t < 48 || t > 57) && (t < 96 || t > 105) ? !1 : !0 }
function isNumberKey(n, t, i, r) { var o = GetCursorLocation(n), u = t.which ? t.which : t.keyCode, e, s, f; if (u > 31 && (u < 48 || u > 57) && (u < 96 || u > 105) && u != 46 && u != 190 && u != 110 && !(u == 8 || u == 16 || u == 32 || u == 35 || u == 36 || u == 37 || u == 39 || u == 46)) return !1; if (e = i, s = r, Num = n.value, f = Num.indexOf("."), f != -1) { if (u != 9 && u != 8 && Num.length - f > s && (o > f || f > e - 1) || f > e - 1 && o < f && u != 8 && u != 9) return !1 } else if (u != 9 && u != 8 && Num.length > e - 1 && u != 46) return !1; return !0 }
function isNumberOnlyKey(n, t) { console.log("isNumberOnlyKey"); var u = GetCursorLocation(n), i = t.which ? t.which : t.keyCode, r = t.keyCode; return i > 95 && i < 106 ? !0 : i > 31 && (i < 46 || i > 57) && i != 47 && r != 9 && r != 37 && r != 38 && r != 39 && r != 40 ? !1 : i == 47 ? !1 : !0 }
function GetCursorLocation(n) { var t, i, u, r = -1; return typeof n.selectionStart == "number" ? r = n.selectionStart : document.selection && n.createTextRange && (t = document.selection, t && (u = t.createRange(), i = n.createTextRange(), i.setEndPoint("EndToStart", u), r = i.text.length)), r }
function populateDropdown(n, t, i) { n.html(""); n.append($("<option><\/option>").val("").html(i)); $.each(t, function (t, i) { n.append($("<option><\/option>").val(i.value).html(i.name)) }); $(n).removeAttr("disabled") }
function populateDropdownWithoutLabel(n, t) { $(n).children("option:not(:first)").remove(); $.each(t, function (t, i) { n.append($("<option><\/option>").val(i.value).html(i.name)) }); $(n).removeAttr("disabled") }
function validateFromDateToDate(n, t) { var i = n.split("/"), u = parseInt(i[0]), f = parseInt(i[1]), e = parseInt(i[2]), r = t.split("/"), o = parseInt(r[0]), s = parseInt(r[1]), h = parseInt(r[2]), c = new Date(u + "/" + f + "/" + e), l = new Date(o + "/" + s + "/" + h); return c > l ? !1 : !0 }
function getQueryString(n) { for (urlStr = window.location.search.substring(1), sv = urlStr.split("&"), i = 0; i < sv.length; i++) if (ft = sv[i].split("="), ft[0] == n) return ft[1] }
//function DisableCutCopyPaste() { $("input[type='password']").bind("cut copy paste", function (n) { n.preventDefault() }) } var dateFomat = "mm/dd/yyyy", MaskingFormatPhone = "(000) 000-0000", MaskingFormatZip = "00000", MaskingFormatLicense = "000000000", MaskingFormatFifteenDigit = "000000000000000", MaskingFormatNineDigit = "000000000", _ValidFileExtention = "You can only upload files like .xls, .xlsx.", _RequiredField = "##FieldName## is required.", _StartFileProcess = "File process starting...", _ValidationCompleted = "Validation process has been completed and starting to process file...", _RecordCount = "Validating records ##MsgRecordCount## out of ##MsgTotalRecord##", _ErrorValidating = "Some error occurred while validating file...", _FileProcessCompleted = "File process has been completed....", _FileProcessing = "Processing records ##MsgRecordCount## out of ##MsgTotalRecord##", _ErrorProcessing = "Some error occurred while processing file...", _AjaxSuccess = "1", _AjaxFailure = "0", ww, adjustMenu; $.validator.setDefaults({ ignore: [] }); $(document).on("change", ".btn-file :file", function () { var n = $(this), t = n.get(0).files ? n.get(0).files.length : 1, i = n.val().replace(/\\/g, "/").replace(/.*\//, ""); n.trigger("fileselect", [t, i]) }); $(document).ready(function () { $(".btn-file :file").on("fileselect", function (n, t, i) { var u = $(this).parents(".input-group").find(":text"), r = t > 1 ? t + " files selected" : i; u.length ? u.val(r) : r && alert(r) }); DisableCutCopyPaste() }); ww = $(window).width(); $(window).load(function () { $("#main-menu li a").each(function () { $(this).next().length > 0 && $(this).addClass("parent") }); $(".toggleMenu").click(function (n) { n.preventDefault(); $(this).toggleClass("active"); $("#main-menu").toggle() }); adjustMenu() }); $(window).bind("resize orientationchange", function () { ww = $(window).width(); adjustMenu() }); adjustMenu = function () { ww < 1023 ? ($(".toggleMenu").css("display", "inline-block"), $(".toggleMenu").hasClass("active") ? $("#main-menu").show() : $("#main-menu").hide(), $("#main-menu li").unbind("mouseenter mouseleave"), $("#main-menu li a.parent").unbind("click").bind("click", function (n) { n.preventDefault(); $(this).parent("li").toggleClass("hover") })) : ww >= 768 && ($(".toggleMenu").css("display", "none"), $("#main-menu").show(), $("#main-menu li").removeClass("hover"), $("#main-menu li a").unbind("click"), $("#main-menu li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave", function () { $("#main-menu li").hoverIntent({ over: function () { $(this).removeClass("hover").addClass("hover") }, out: function () { $(this).removeClass("hover") } }) })) }; $("#main-menu").bind("show.smapi", function (n, t) { $(t).dataSM("parent-a").children("span.sub-arrow").text("-") }); $("#main-menu").bind("hide.smapi", function (n, t) { $(t).dataSM("parent-a").children("span.sub-arrow").text("+") })
function reposition(mod) {
    var modal = mod ? mod : $('.modal:visible');
    var dialog = modal.find('.modal-dialog');
    modal.css('display', 'block');
    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
}
$(window).on('resize', function () {
    $('.modal:visible').each(reposition);
});
$('body').on('click', function (e) {
    $('[rel="popover"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
/*-----Page Active-----*/
function PageActive(pageid) {
    $('#' + pageid).addClass("active");
}
function onGridDataBound(n) { if (!n.sender.dataSource.view().length) { var t = n.sender.thead.find("th:visible").length, i = '<tr><td colspan="' + t + '" align="center">No records found.<\/td><\/tr>'; n.sender.tbody.parent().width(n.sender.thead.width()).end().html(i) } }

function showLoader() {
    $("#divWait").css({ "display": "block" });
}
function GetLocalStorage(name) {
    var searchResult = localStorage.getItem(name);
    if (searchResult !== null) { return searchResult.split(",,,,"); }
}

//var successMsgHtml = '<div class="alert alert-success" role="alert"><span id = "msg-caption" ></span></div >';
var successMsgHtml = '<div class="green-box" role="alert"><span id = "msg-caption" ></span></div >';
//var errorMsgHtml = '<div class="alert alert-danger" role="alert"><span id = "msg-caption" ></span></div >';
var errorMsgHtml = '<div class="error-message" role="alert"><span id = "msg-caption" ></span></div >';

function DisplayErrorMsg(msg, errorDivId) {
    var message = "<ul class='p-0 mb-0 list-unstyled'>";
    $.each(msg, function (i) {
        message += "<li> " + msg[i] + " </li>";
    });
    message += "</ul>";
    if (message !== "" && message !== undefined) {
        $(errorDivId).removeClass("displaynone");
        var specialMatch = message.match(/[^[\]]+(?=])/g);
        if (specialMatch) {
            var html = $(errorMsgHtml);
            html.find("#msg-caption").html(specialMatch[0].replace('"', '').replace('"', ''));
            $(errorDivId).html(html);
        }
        else {
            var _html = $(errorMsgHtml);
            _html.find("#msg-caption").html(message);
            $(errorDivId).html(_html);
        }
    }
}

function DisplaySuccessMsg(msg, divId) {
    var message = "<ul class='p-0 mb-0 list-unstyled'>";
    //$.each(msg, function (i) {
        message += "<li> " + msg + " </li>";
    //});
    message += "</ul>";
    if (message !== "" && message !== undefined) {
        $(divId).removeClass("displaynone");
        var specialMatch = message.match(/[^[\]]+(?=])/g);
        if (specialMatch) {
            var html = $(successMsgHtml);
            html.find("#msg-caption").html(specialMatch[0].replace('"', '').replace('"', ''));
            $(divId).html(html);
        }
        else {
            var _html = $(successMsgHtml);
            _html.find("#msg-caption").html(message);
            $(divId).html(_html);
        }
    }
}

function ShowImage(path, file) {
    if (file != undefined && file != null && file != "") {
        $("#divImg #img").html("");
        $("#divImg #img").append("<img class='img-fluid' src='" + path + file + "' alt='img' />");
        $("#divImg").modal('show');
    }
}

function SearchExt(str, strArray) {
    for (var j = 0; j < strArray.length; j++) {
        if (strArray[j].match(str)) { return true; }
    }
    return false;
}
function DateTimeFilter(element) {
    $(element).kendoDatePicker({
        format: "MM/dd/yyyy"
    });
};

function OnlyNumber(e) {
    var keyCode = e.which ? e.which : e.keyCode;

    if (!(keyCode >= 48 && keyCode <= 57)) {
        return false;
    }
}


function PhoneNumberVal(e) {
    var keyCode = e.which ? e.which : e.keyCode;

    if (!(keyCode >= 48 && keyCode <= 57) && keyCode != 40 && keyCode != 41 && keyCode != 45) {
        return false;
    }
}

function IsNOTUndefinedNullEmpty(value) {
    if (value == undefined || value == null || value == '') {
        return false;
    }
    return true;
}
function IsNOTUndefinedOrNullOrEmptyOrZero(value) {
    if (value == undefined || value == null || value == '' || value == '0' || value == 0) {
        return false;
    }
    return true;
}

function IsDecimalKey(e) {
    var evt = window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
        return false;
    else {
        var $txtBox = $(e);
        var len = $txtBox.val().length;
        var index = $txtBox.val().indexOf('.');
        debugger
        if (index >= 0 && charCode == 46) {
            return false;
        }
    }
    return true; 
}

// for restric scripts in text box
$(document).on("focusout", "input,textarea", function () {
    if ($(this).length > 0) {
        var txt = $($.parseHTML($(this).val())).text();
        $(this).val(txt);
    }
});
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
// Unobtrusive validation support library for jQuery and jQuery Validate
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// @version v3.2.11
!function(a){"function"==typeof define&&define.amd?define("jquery.validate.unobtrusive",["jquery-validation"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery-validation")):jQuery.validator.unobtrusive=a(jQuery)}(function(a){function e(a,e,n){a.rules[e]=n,a.message&&(a.messages[e]=a.message)}function n(a){return a.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/g)}function t(a){return a.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g,"\\$1")}function r(a){return a.substr(0,a.lastIndexOf(".")+1)}function i(a,e){return 0===a.indexOf("*.")&&(a=a.replace("*.",e)),a}function o(e,n){var r=a(this).find("[data-valmsg-for='"+t(n[0].name)+"']"),i=r.attr("data-valmsg-replace"),o=i?a.parseJSON(i)!==!1:null;r.removeClass("field-validation-valid").addClass("field-validation-error"),e.data("unobtrusiveContainer",r),o?(r.empty(),e.removeClass("input-validation-error").appendTo(r)):e.hide()}function d(e,n){var t=a(this).find("[data-valmsg-summary=true]"),r=t.find("ul");r&&r.length&&n.errorList.length&&(r.empty(),t.addClass("validation-summary-errors").removeClass("validation-summary-valid"),a.each(n.errorList,function(){a("<li />").html(this.message).appendTo(r)}))}function s(e){var n=e.data("unobtrusiveContainer");if(n){var t=n.attr("data-valmsg-replace"),r=t?a.parseJSON(t):null;n.addClass("field-validation-valid").removeClass("field-validation-error"),e.removeData("unobtrusiveContainer"),r&&n.empty()}}function l(e){var n=a(this),t="__jquery_unobtrusive_validation_form_reset";if(!n.data(t)){n.data(t,!0);try{n.data("validator").resetForm()}finally{n.removeData(t)}n.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"),n.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")}}function u(e){var n=a(e),t=n.data(v),r=a.proxy(l,e),i=f.unobtrusive.options||{},u=function(n,t){var r=i[n];r&&a.isFunction(r)&&r.apply(e,t)};return t||(t={options:{errorClass:i.errorClass||"input-validation-error",errorElement:i.errorElement||"span",errorPlacement:function(){o.apply(e,arguments),u("errorPlacement",arguments)},invalidHandler:function(){d.apply(e,arguments),u("invalidHandler",arguments)},messages:{},rules:{},success:function(){s.apply(e,arguments),u("success",arguments)}},attachValidation:function(){n.off("reset."+v,r).on("reset."+v,r).validate(this.options)},validate:function(){return n.validate(),n.valid()}},n.data(v,t)),t}var m,f=a.validator,v="unobtrusiveValidation";return f.unobtrusive={adapters:[],parseElement:function(e,n){var t,r,i,o=a(e),d=o.parents("form")[0];d&&(t=u(d),t.options.rules[e.name]=r={},t.options.messages[e.name]=i={},a.each(this.adapters,function(){var n="data-val-"+this.name,t=o.attr(n),s={};void 0!==t&&(n+="-",a.each(this.params,function(){s[this]=o.attr(n+this)}),this.adapt({element:e,form:d,message:t,params:s,rules:r,messages:i}))}),a.extend(r,{__dummy__:!0}),n||t.attachValidation())},parse:function(e){var n=a(e),t=n.parents().addBack().filter("form").add(n.find("form")).has("[data-val=true]");n.find("[data-val=true]").each(function(){f.unobtrusive.parseElement(this,!0)}),t.each(function(){var a=u(this);a&&a.attachValidation()})}},m=f.unobtrusive.adapters,m.add=function(a,e,n){return n||(n=e,e=[]),this.push({name:a,params:e,adapt:n}),this},m.addBool=function(a,n){return this.add(a,function(t){e(t,n||a,!0)})},m.addMinMax=function(a,n,t,r,i,o){return this.add(a,[i||"min",o||"max"],function(a){var i=a.params.min,o=a.params.max;i&&o?e(a,r,[i,o]):i?e(a,n,i):o&&e(a,t,o)})},m.addSingleVal=function(a,n,t){return this.add(a,[n||"val"],function(r){e(r,t||a,r.params[n])})},f.addMethod("__dummy__",function(a,e,n){return!0}),f.addMethod("regex",function(a,e,n){var t;return!!this.optional(e)||(t=new RegExp(n).exec(a),t&&0===t.index&&t[0].length===a.length)}),f.addMethod("nonalphamin",function(a,e,n){var t;return n&&(t=a.match(/\W/g),t=t&&t.length>=n),t}),f.methods.extension?(m.addSingleVal("accept","mimtype"),m.addSingleVal("extension","extension")):m.addSingleVal("extension","extension","accept"),m.addSingleVal("regex","pattern"),m.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),m.addMinMax("length","minlength","maxlength","rangelength").addMinMax("range","min","max","range"),m.addMinMax("minlength","minlength").addMinMax("maxlength","minlength","maxlength"),m.add("equalto",["other"],function(n){var o=r(n.element.name),d=n.params.other,s=i(d,o),l=a(n.form).find(":input").filter("[name='"+t(s)+"']")[0];e(n,"equalTo",l)}),m.add("required",function(a){"INPUT"===a.element.tagName.toUpperCase()&&"CHECKBOX"===a.element.type.toUpperCase()||e(a,"required",!0)}),m.add("remote",["url","type","additionalfields"],function(o){var d={url:o.params.url,type:o.params.type||"GET",data:{}},s=r(o.element.name);a.each(n(o.params.additionalfields||o.element.name),function(e,n){var r=i(n,s);d.data[r]=function(){var e=a(o.form).find(":input").filter("[name='"+t(r)+"']");return e.is(":checkbox")?e.filter(":checked").val()||e.filter(":hidden").val()||"":e.is(":radio")?e.filter(":checked").val()||"":e.val()}}),e(o,"remote",d)}),m.add("password",["min","nonalphamin","regex"],function(a){a.params.min&&e(a,"minlength",a.params.min),a.params.nonalphamin&&e(a,"nonalphamin",a.params.nonalphamin),a.params.regex&&e(a,"regex",a.params.regex)}),m.add("fileextensions",["extensions"],function(a){e(a,"extension",a.params.extensions)}),a(function(){f.unobtrusive.parse(document)}),f.unobtrusive});