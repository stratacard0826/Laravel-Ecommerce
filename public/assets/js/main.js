/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/**
 * segment - A little JavaScript class (without dependencies) to draw and animate SVG path strokes
 * @version v0.0.2
 * @link https://github.com/lmgonzalves/segment
 * @license MIT
 */
function Segment(t,e,n){this.path=t,this.length=t.getTotalLength(),this.path.style.strokeDashoffset=2*this.length,this.begin=e?this.valueOf(e):0,this.end=n?this.valueOf(n):this.length,this.timer=null,this.draw(this.begin,this.end)}Segment.prototype={draw:function(t,e,n,i){if(n){var s=i.hasOwnProperty("delay")?1e3*parseFloat(i.delay):0,a=i.hasOwnProperty("easing")?i.easing:null,h=i.hasOwnProperty("callback")?i.callback:null,r=this;if(this.stop(),s)return delete i.delay,this.timer=setTimeout(function(){r.draw(t,e,n,i)},s),this.timer;var l=new Date,o=1e3/60,g=this.begin,f=this.end,u=this.valueOf(t),d=this.valueOf(e);!function p(){var t=new Date,e=(t-l)/1e3,i=e/parseFloat(n),s=i;return"function"==typeof a&&(s=a(s)),i>1?(r.stop(),s=1):r.timer=setTimeout(p,o),r.begin=g+(u-g)*s,r.end=f+(d-f)*s,r.begin<0&&(r.begin=0),r.end>r.length&&(r.end=r.length),r.begin<r.end?r.draw(r.begin,r.end):r.draw(r.begin+(r.end-r.begin),r.end-(r.end-r.begin)),i>1&&"function"==typeof h?h.call(r.context):void 0}()}else this.path.style.strokeDasharray=this.strokeDasharray(t,e)},strokeDasharray:function(t,e){return this.begin=this.valueOf(t),this.end=this.valueOf(e),[this.length,this.length+this.begin,this.end-this.begin].join(" ")},valueOf:function(t){var e=parseFloat(t);if(("string"==typeof t||t instanceof String)&&~t.indexOf("%")){var n;~t.indexOf("+")?(n=t.split("+"),e=this.percent(n[0])+parseFloat(n[1])):~t.indexOf("-")?(n=t.split("-"),e=this.percent(n[0])-parseFloat(n[1])):e=this.percent(t)}return e},stop:function(){clearTimeout(this.timer),this.timer=null},percent:function(t){return parseFloat(t)/100*this.length}};;
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.ease={})}(this,function(n){"use strict";function t(n,t){return null==n||isNaN(n)?t:+n}function u(n,u){n=Math.max(1,t(n,1)),u=t(u,.3)*A;var i=u*Math.asin(1/n);return function(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/u)}}function i(n,u){n=Math.max(1,t(n,1)),u=t(u,.3)*A;var i=u*Math.asin(1/n);return function(t){return n*Math.pow(2,-10*t)*Math.sin((t-i)/u)+1}}function r(n,u){n=Math.max(1,t(n,1)),u=1.5*t(u,.3)*A;var i=u*Math.asin(1/n);return function(t){return n*((t=2*t-1)<0?Math.pow(2,10*t)*Math.sin((i-t)/u):Math.pow(2,-10*t)*Math.sin((t-i)/u)+2)/2}}function o(n){return n=t(n,1.70158),function(t){return t*t*((n+1)*t-n)}}function e(n){return n=t(n,1.70158),function(t){return--t*t*((n+1)*t+n)+1}}function c(n){return n=1.525*t(n,1.70158),function(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}}function a(n){return 1-f(1-n)}function f(n){return B>n?L*n*n:D>n?L*(n-=C)*n+E:G>n?L*(n-=F)*n+H:L*(n-=J)*n+K}function h(n){return((n*=2)<=1?1-f(1-n):f(n-1)+1)/2}function s(n){return 1-Math.sqrt(1-n*n)}function M(n){return Math.sqrt(1- --n*n)}function p(n){return((n*=2)<=1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}function l(n){return Math.pow(2,10*n-10)}function w(n){return 1-Math.pow(2,-10*n)}function b(n){return((n*=2)<=1?Math.pow(2,10*n-10):2-Math.pow(2,10-10*n))/2}function d(n){return 1-Math.cos(n*R)}function y(n){return Math.sin(n*R)}function x(n){return(1-Math.cos(Q*n))/2}function q(n){return n*n*n}function k(n){return--n*n*n+1}function m(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}function v(n){return n*n}function P(n){return n*(2-n)}function O(n){return((n*=2)<=1?n*n:--n*(2-n)+1)/2}function g(n){return+n}function I(n){return n=t(n,3),function(t){return Math.pow(t,n)}}function N(n){return n=t(n,3),function(t){return 1-Math.pow(1-t,n)}}function j(n){return n=t(n,3),function(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}}function z(n,t,u){var i=(n+="").indexOf("-");return 0>i&&(n+="-in"),arguments.length>1&&T.hasOwnProperty(n)?T[n](t,u):S.hasOwnProperty(n)?S[n]:g}var A=1/(2*Math.PI),B=4/11,C=6/11,D=8/11,E=.75,F=9/11,G=10/11,H=.9375,J=21/22,K=63/64,L=1/B/B,Q=Math.PI,R=Q/2,S={"linear-in":g,"linear-out":g,"linear-in-out":g,"quad-in":v,"quad-out":P,"quad-in-out":O,"cubic-in":q,"cubic-out":k,"cubic-in-out":m,"poly-in":q,"poly-out":k,"poly-in-out":m,"sin-in":d,"sin-out":y,"sin-in-out":x,"exp-in":l,"exp-out":w,"exp-in-out":b,"circle-in":s,"circle-out":M,"circle-in-out":p,"bounce-in":a,"bounce-out":f,"bounce-in-out":h,"back-in":o(),"back-out":e(),"back-in-out":c(),"elastic-in":u(),"elastic-out":i(),"elastic-in-out":r()},T={"poly-in":I,"poly-out":N,"poly-in-out":j,"back-in":o,"back-out":e,"back-in-out":c,"elastic-in":u,"elastic-out":i,"elastic-in-out":r};n.ease=z});;
/*
 AngularJS v1.5.0-rc.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,Z,u){'use strict';function P(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.0-rc.0/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function Ca(a){if(null==a||Za(a))return!1;if(K(a)||G(a)||A&&a instanceof
A)return!0;var b="length"in Object(a)&&a.length;return U(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(D(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||Ca(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(oc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function pc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function qc(a){return function(b,d){a(d,b)}}function Wd(){return++pb}function Ob(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(J(g)||D(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],s=g[m];d&&J(s)?ba(s)?a[m]=new Date(s.valueOf()):Oa(s)?a[m]=new RegExp(s):s.nodeName?a[m]=s.cloneNode(!0):
Pb(s)?a[m]=s.clone():(J(a[m])||(a[m]=K(s)?[]:{}),Ob(a[m],[s],!0)):a[m]=s}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function L(a){return Ob(a,wa.call(arguments,1),!1)}function Xd(a){return Ob(a,wa.call(arguments,1),!0)}function ea(a){return parseInt(a,10)}function Qb(a,b){return L(Object.create(a),b)}function w(){}function $a(a){return a}function ka(a){return function(){return a}}function rc(a){return D(a.toString)&&a.toString!==ra}function x(a){return"undefined"===typeof a}function z(a){return"undefined"!==
typeof a}function J(a){return null!==a&&"object"===typeof a}function oc(a){return null!==a&&"object"===typeof a&&!sc(a)}function G(a){return"string"===typeof a}function U(a){return"number"===typeof a}function ba(a){return"[object Date]"===ra.call(a)}function D(a){return"function"===typeof a}function Oa(a){return"[object RegExp]"===ra.call(a)}function Za(a){return a&&a.window===a}function ab(a){return a&&a.$evalAsync&&a.$watch}function bb(a){return"boolean"===typeof a}function tc(a){return a&&U(a.length)&&
Yd.test(ra.call(a))}function Pb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Zd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return H(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(oc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)qa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!J(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Za(a)||ab(a))throw Da("cpws");var b=!1,c;K(a)?(c=[],b=!0):tc(a)?c=new a.constructor(a):ba(a)?c=new Date(a.getTime()):Oa(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):D(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(sc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(tc(b))throw Da("cpta");
if(a===b)throw Da("cpi");K(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function V(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(J(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function la(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<
d;c++)if(!la(a[c],b[c]))return!1;return!0}}else{if(ba(a))return ba(b)?la(a.getTime(),b.getTime()):!1;if(Oa(a))return Oa(b)?a.toString()==b.toString():!1;if(ab(a)||ab(b)||Za(a)||Za(b)||K(b)||ba(b)||Oa(b))return!1;d=X();for(c in a)if("$"!==c.charAt(0)&&!D(a[c])){if(!la(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&z(b[c])&&!D(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(wa.call(b,d))}function uc(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!D(b)||
b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function $d(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Za(b)?d="$WINDOW":b&&Z===b?d="$DOCUMENT":ab(b)&&(d="$SCOPE");return d}function eb(a,b){if("undefined"===typeof a)return u;U(b)||(b=b?2:null);return JSON.stringify(a,$d,b)}function vc(a){return G(a)?JSON.parse(a):a}function wc(a,b){var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return isNaN(d)?b:d}function Rb(a,b,d){d=d?-1:1;var c=wc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function ua(a){a=A(a).clone();try{a.empty()}catch(b){}var d=A("<div>").append(a).html();try{return a[0].nodeType===Qa?H(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+H(b)})}catch(c){return H(d)}}function xc(a){try{return decodeURIComponent(a)}catch(b){}}function yc(a){var b={};n((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=xc(e),z(e)&&(f=z(f)?xc(f):!0,qa.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Sb(a){var b=[];n(a,function(a,c){K(a)?n(a,function(a){b.push(ga(c,!0)+(!0===a?"":"="+ga(a,!0)))}):b.push(ga(c,!0)+(!0===a?"":"="+ga(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ga(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ga(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ae(a,b){var d,c,e=Ra.length;for(c=0;c<e;++c)if(d=Ra[c]+b,G(d=a.getAttribute(d)))return d;return null}function be(a,b){var d,c,e={};n(Ra,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Ra,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(e.strictDi=null!==ae(d,"strict-di"),b(d,c?[c]:[],e))}function zc(a,b,d){J(d)||(d={});d=L({strictDi:!1},d);var c=function(){a=A(a);if(a.injector()){var c=a[0]===Z?"document":ua(a);throw Da("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,
b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(d.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return c();S.name=S.name.replace(f,"");$.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};D($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ce(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}function de(a){a=$.element(a).injector();if(!a)throw Da("test");
return a.get("$$testability")}function Ac(a,b){b=b||"_";return a.replace(ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function fe(){var a;if(!Bc){var b=rb();(xa=x(b)?S.jQuery:b?S[b]:u)&&xa.fn.on?(A=xa,L(xa.fn,{scope:Sa.scope,isolateScope:Sa.isolateScope,controller:Sa.controller,injector:Sa.injector,inheritedData:Sa.inheritedData}),a=xa.cleanData,xa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=xa._data(f,"events"))&&c.$destroy&&xa(f).triggerHandler("$destroy");a(b)}):A=E;$.element=
A;Bc=!0}}function sb(a,b,d){if(!a)throw Da("areq",b||"?",d||"required");return a}function Ta(a,b,d){d&&K(a)&&(a=a[a.length-1]);sb(D(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ua(a,b){if("hasOwnProperty"===a)throw Da("badname",b);}function Cc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&D(a)?uc(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||
a[e]!==b)c||(c=A(wa.call(a,0,e))),c.push(b);return c||a}function X(){return Object.create(null)}function ge(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=P("$injector"),c=P("ng"),e=b(a,"angular",Object);e.$$minErr=e.$$minErr||P;return b(e,"module",function(){var a={};return function(g,h,k){if("hasOwnProperty"===g)throw c("badname","module");h&&a.hasOwnProperty(g)&&(a[g]=null);return b(a,g,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return t}}function b(a,
d){return function(b,e){e&&D(e)&&(e.$$moduleName=g);c.push([a,d,arguments]);return t}}if(!h)throw d("nomod",g);var c=[],f=[],B=[],Q=a("$injector","invoke","push",f),t={_invokeQueue:c,_configBlocks:f,_runBlocks:B,requires:h,name:g,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:function(a,b){function c(d){function f(a){return e.isFunction(a)?function(b,c){return d.invoke(a,this,{$element:b,$attrs:c})}:a}var g=b.template||b.templateUrl?b.template:"";return{controller:b.controller||function(){},controllerAs:Dc(b.controller)||b.controllerAs||a,template:f(g),templateUrl:f(b.templateUrl),transclude:b.transclude===u?!0:b.transclude,scope:!1===b.isolate?!0:{},bindToController:b.bindings||
{},restrict:b.restrict||"E"}}b.$canActivate&&(c.$canActivate=b.$canActivate);b.$routeConfig&&(c.$routeConfig=b.$routeConfig);c.$inject=["$injector"];return t.directive(a,c)},config:Q,run:function(a){B.push(a);return this}};k&&Q(k);return t})}})}function he(a){L(a,{bootstrap:zc,copy:Pa,extend:L,merge:Xd,equals:la,element:A,forEach:n,injector:fb,noop:w,bind:uc,toJson:eb,fromJson:vc,identity:$a,isUndefined:x,isDefined:z,isString:G,isFunction:D,isObject:J,isNumber:U,isElement:Pb,isArray:K,version:ie,
isDate:ba,lowercase:H,uppercase:ub,callbacks:{counter:0},getTestability:de,$$minErr:P,$$csp:Ea,reloadWithDebugInfo:ce});Tb=ge(S);Tb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:je});a.provider("$compile",Ec).directive({a:ke,input:Fc,textarea:Fc,form:le,script:me,select:ne,style:oe,option:pe,ngBind:qe,ngBindHtml:re,ngBindTemplate:se,ngClass:te,ngClassEven:ue,ngClassOdd:ve,ngCloak:we,ngController:xe,ngForm:ye,ngHide:ze,ngIf:Ae,ngInclude:Be,ngInit:Ce,ngNonBindable:De,ngPluralize:Ee,
ngRepeat:Fe,ngShow:Ge,ngStyle:He,ngSwitch:Ie,ngSwitchWhen:Je,ngSwitchDefault:Ke,ngOptions:Le,ngTransclude:Me,ngModel:Ne,ngList:Oe,ngChange:Pe,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Qe,ngModelOptions:Re}).directive({ngInclude:Se}).directive(vb).directive(Kc);a.provider({$anchorScroll:Te,$animate:Ue,$animateCss:Ve,$$animateQueue:We,$$AnimateRunner:Xe,$$animateAsyncRun:Ye,$browser:Ze,$cacheFactory:$e,$controller:af,$document:bf,
$exceptionHandler:cf,$filter:Lc,$$forceReflow:df,$interpolate:ef,$interval:ff,$http:gf,$httpParamSerializer:hf,$httpParamSerializerJQLike:jf,$httpBackend:kf,$xhrFactory:lf,$location:mf,$log:nf,$parse:of,$rootScope:pf,$q:qf,$$q:rf,$sce:sf,$sceDelegate:tf,$sniffer:uf,$templateCache:vf,$templateRequest:wf,$$testability:xf,$timeout:yf,$window:zf,$$rAF:Af,$$jqLite:Bf,$$HashMap:Cf,$$cookieReader:Df})}])}function gb(a){return a.replace(Ef,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Ff,"Moz$1")}
function Mc(a){a=a.nodeType;return 1===a||!a||9===a}function Nc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Ub.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Gf.exec(a)||["",""])[1].toLowerCase();c=na[c]||na._default;d.innerHTML=c[1]+a.replace(Hf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function E(a){if(a instanceof E)return a;
var b;G(a)&&(a=Y(a),b=!0);if(!(this instanceof E)){if(b&&"<"!=a.charAt(0))throw Vb("nosel");return new E(a)}if(b){b=Z;var d;a=(d=If.exec(a))?[b.createElement(d[1])]:(d=Nc(a,b))?d.childNodes:[]}Oc(this,a)}function Wb(a){return a.cloneNode(!0)}function wb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)hb(d[c])}function Pc(a,b,d,c){if(z(c))throw Vb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];z(d)&&cb(c||[],d);
z(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Pc(a)),delete ib[d],a.ng339=u))}function xb(a,b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++Jf,d=ib[d]={events:{},data:{},handle:u});return d}function Xb(a,b,d){if(Mc(a)){var c=z(d),e=!c&&b&&
!J(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];L(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",Y((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Y(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");n(b.split(" "),function(a){a=Y(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",Y(d))}}function Oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Qc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(z(d=A.data(a,b[c])))return d;a=a.parentNode||
11===a.nodeType&&a.host}}function Rc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Yb(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Kf(a,b){b=b||S;if("complete"===b.document.readyState)b.setTimeout(a);else A(b).on("load",a)}function Sc(a,b){var d=Db[b.toLowerCase()];return d&&Tc[ta(a)]&&d}function Lf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=
c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Mf;1<g&&(f=V(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Mf(a,b,d){d.call(a,b)}function Nf(a,b,d){var c=b.relatedTarget;c&&(c===a||Of.call(a,c))||d.call(a,b)}function Bf(){this.$get=
function(){return L(E,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Fa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Wd)():d+":"+a}function Va(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Uc(a){a=a.toString().replace(Pf,
"");return a.match(Qf)||a.match(Rf)}function Sf(a){return(a=Uc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(J(b))n(b,qc(a));else return a(b,c)}}function c(a,b){Ua(a,"service");if(D(b)||K(b))b=r.instantiate(b);if(!b.$get)throw Ga("pget",a);return s[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(x(c))throw Ga("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(x(a)||
K(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Tb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(r.invoke(a)):K(a)?b.push(r.invoke(a)):Ta(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||
e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ga("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=fb.$$annotate(a,b,g),l,m,s;m=0;for(l=k.length;m<l;m++){s=k[m];if("string"!==typeof s)throw Ga("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}K(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,
instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||D(a)?a:d},get:d,annotate:fb.$$annotate,has:function(b){return s.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Va([],!0),s={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ka(b),!1)}),constant:d(function(a,b){Ua(a,"constant");s[a]=b;B[a]=b}),
decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},r=s.$injector=h(s,function(a,b){$.isString(b)&&l.push(b);throw Ga("unpr",l.join(" <- "));}),B={},Q=h(B,function(a,b){var c=r.get(a+"Provider",b);return t.invoke(c.$get,c,u,a)}),t=Q;s.$injectorProvider={$get:ka(Q)};var p=g(a),t=Q.get("$injector");t.strictDi=b;n(p,function(a){a&&t.invoke(a)});return t}function Te(){var a=!0;this.disableAutoScrolling=function(){a=
!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;D(c)?c=c():Pb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):U(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Kf(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Tf(a){G(a)&&(a=a.split(" "));var b=X();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return J(a)?a:{}}function Uf(a,b,d,c){function e(a){try{a.apply(null,wa.call(arguments,1))}finally{if(Q--,
0===Q)for(;t.length;)try{t.pop()()}catch(b){d.error(b)}}}function f(){M=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=x(p)?null:p;la(p,W)&&(p=W);W=p}function h(){if(v!==k.url()||y!==p)v=k.url(),y=p,n(F,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,s=a.setTimeout,r=a.clearTimeout,B={};k.isMock=!1;var Q=0,t=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){Q++};k.notifyWhenNoOutstandingRequests=function(a){0===Q?a():t.push(a)};var p,
y,v=l.href,ya=b.find("base"),M=null;g();y=p;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=y===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;y=e;if(!c.history||h&&f){if(!h||M)M=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(M=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),y=p;return k}return M||l.href.replace(/%27/g,"'")};k.state=function(){return p};var F=[],C=!1,
W=null;k.onUrlChange=function(b){if(!C){if(c.history)A(a).on("popstate",f);A(a).on("hashchange",f);C=!0}F.push(b);return b};k.$$applicationDestroyed=function(){A(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ya.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;Q++;c=s(function(){delete B[c];e(a)},b||0);B[c]=!0;return c};k.defer.cancel=function(a){return B[a]?(delete B[a],r(a),e(w),!0):!1}}function Ze(){this.$get=["$window",
"$log","$sniffer","$document",function(a,b,d,c){return new Uf(a,c,b,d)}]}function $e(){this.$get=function(){function a(a,c){function e(a){a!=s&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,s),s=a,s.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw P("$cacheFactory")("iid",a);var g=0,h=L({},c,{id:a}),k=X(),l=c&&c.capacity||Number.MAX_VALUE,m=X(),s=null,r=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(r.key);
return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==s&&(s=b.p);b==r&&(r=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=X();g=0;m=X();s=r=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return L({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function vf(){this.$get=
["$cacheFactory",function(a){return a("templates")}]}function Ec(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ia("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==H(b))throw ia("baddir",a);if(a!==a.trim())throw ia("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Zd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function r(b,f){Ua(b,"directive");G(b)?(c(b),sb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);D(h)?h={compile:ka(h)}:!h.compile&&h.link&&(h.compile=ka(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,r={isolateScope:null,bindToController:null};J(l.scope)&&(!0===l.bindToController?(r.bindToController=d(l.scope,m,!0),r.isolateScope={}):r.isolateScope=d(l.scope,m,!1));J(l.bindToController)&&(r.bindToController=d(l.bindToController,m,!0));if(J(r.bindToController)){var O=l.controller,Q=l.controllerAs;if(!O)throw ia("noctrl",m);if(!Dc(O,Q))throw ia("noident",m);}var ha=k.$$bindings=r;J(ha.isolateScope)&&(h.$$isolateBindings=ha.isolateScope);
h.$$moduleName=e.$$moduleName;f.push(h)}catch(n){c(n)}});return f}])),e[b].push(f)):n(b,qc(r));return this};this.aHrefSanitizationWhitelist=function(a){return z(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return z(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return z(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest",
"$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,p,y,v,ya,M,F,C){function W(a,b,c){$.innerHTML="<span "+b+">";b=$.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function O(a,b,c,d,e){a instanceof A||(a=A(a));n(a,function(b,c){b.nodeType==Qa&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=R(a,b,a,c,d,e);O.$$addScopeClass(a);
var g=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(U(g,A("<div>").append(a).html())):c?Sa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);O.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}
function R(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,r,B,v;if(p)for(v=Array(c.length),m=0;m<h.length;m+=3)f=h[m],v[f]=c[f];else v=c;m=0;for(r=h.length;m<r;)k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),O.$$addScopeInfo(A(k),l)):l=a,B=c.transcludeOnThisElement?ha(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ha(a,b):null,c(f,l,k,d,B)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,r,p,B=0;B<a.length;B++){k=new ka;l=Ha(a[B],[],k,0===B?d:u,e);(f=l.length?oa(l,a[B],k,b,c,null,[],[],f):
null)&&f.scope&&O.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:R(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),r=!0,p=p||f;f=null}return r?g:null}function ha(a,b,c){var d=function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})},e=d.$$slots=X(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ha(a,b.$$slots[f],c):null;return d}function Ha(a,
b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:pa(b,va(ta(a)),"E",d,e);for(var l,m,r,p=a.attributes,B=0,v=p&&p.length;B<v;B++){var F=!1,t=!1;l=p[B];k=l.name;m=Y(l.value);l=va(k);if(r=ja.test(l))k=k.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(ma))&&sa(l[1])&&(F=k,t=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=va(k.toLowerCase());h[l]=k;if(r||!c.hasOwnProperty(l))c[l]=m,Sc(a,l)&&(c[l]=!0);T(a,b,m,l,r);pa(b,l,"A",d,e,F,t)}a=a.className;J(a)&&
(a=a.animVal);if(G(a)&&""!==a)for(;k=g.exec(a);)l=va(k[2]),pa(b,l,"C",d,e)&&(c[l]=Y(k[3])),a=a.substr(k.index+k[0].length);break;case Qa:if(11===Ka)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Qa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);S(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=va(k[1]),pa(b,l,"M",d,e)&&(c[l]=Y(k[2]))}catch(O){}}b.sort(fa);return b}function q(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function z(a,b,c){return function(d,e,f,g,h){e=q(e[0],b,c);return a(d,e,f,g,h)}}function Zb(a,b,c,d,e,f){if(a)return O(b,c,d,e,f);var g;return function(){g||(g=O(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,l,m){function r(a,b,c,d){if(a){c&&(a=z(a,c,d));a.require=I.require;a.directiveName=sa;if(C===I||I.$$isolateScope)a=da(a,{isolateScope:!0});
h.push(a)}if(b){c&&(b=z(b,c,d));b.require=I.require;b.directiveName=sa;if(C===I||I.$$isolateScope)b=da(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;if(G(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ia("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||null}function B(a,b,c,d,e,f){var g=X(),h;for(h in d){var k=
d[h],l={$scope:k===C||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=y(m,l,!0,k.controllerAs);g[k.name]=l;ya||a.data("$"+k.name+"Controller",l.instance)}return g}function v(a,c,e,f,g){function k(a,b,c,d){var e;ab(a)||(d=c,c=b,b=a,a=u);ya&&(e=y);c||(c=ya?R.parent():R);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,q);if(x(f))throw ia("noslot",d,ua(R));}else return g(a,b,e,c,q)}var m,r,F,y,Q,R,W;b===e?(f=d,R=d.$$element):(R=A(e),f=new ka(R,d));F=c;C?r=
c.$new(!0):t&&(F=c.$parent);g&&(Q=k,Q.$$boundTransclude=g,Q.isSlotFilled=function(a){return!!g.$$slots[a]});N&&(y=B(R,f,Q,N,r,c));C&&(O.$$addScopeInfo(R,r,!0,!(ha&&(ha===C||ha===C.$$originalDirective))),O.$$addScopeClass(R,!0),r.$$isolateBindings=C.$$isolateBindings,(W=ca(c,f,r,r.$$isolateBindings,C))&&r.$on("$destroy",W));for(var Vc in y){W=N[Vc];var n=y[Vc],M=W.$$bindings.bindToController;n.identifier&&M&&(m=ca(F,f,n.instance,M,W));var Ha=n();Ha!==n.instance&&(n.instance=Ha,R.data("$"+W.name+"Controller",
Ha),m&&m(),m=ca(F,f,n.instance,M,W))}fa=0;for(T=h.length;fa<T;fa++)m=h[fa],ea(m,m.isolateScope?r:c,R,f,m.require&&p(m.directiveName,m.require,R,y),Q);var q=c;C&&(C.template||null===C.templateUrl)&&(q=r);a&&a(q,e.childNodes,u,g);for(fa=l.length-1;0<=fa;fa--)m=l[fa],ea(m,m.isolateScope?r:c,R,f,m.require&&p(m.directiveName,m.require,R,y),Q)}m=m||{};for(var F=-Number.MAX_VALUE,t=m.newScopeDirective,N=m.controllerDirectives,C=m.newIsolateScopeDirective,ha=m.templateDirective,R=m.nonTlbTranscludeDirective,
W=!1,M=!1,ya=m.hasElementTranscludeDirective,w=d.$$element=A(b),I,sa,oa,H=e,L,pa=!1,S=!1,E,fa=0,T=a.length;fa<T;fa++){I=a[fa];var $=I.$$start,ba=I.$$end;$&&(w=q(b,$,ba));oa=u;if(F>I.priority)break;if(E=I.scope)I.templateUrl||(J(E)?(Wa("new/isolated scope",C||t,I,w),C=I):Wa("new/isolated scope",C,I,w)),t=t||I;sa=I.name;if(!pa&&(I.replace&&(I.templateUrl||I.template)||I.transclude&&!I.$$tlb)){for(E=fa+1;pa=a[E++];)if(pa.transclude&&!pa.$$tlb||pa.replace&&(pa.templateUrl||pa.template)){S=!0;break}pa=
!0}!I.templateUrl&&I.controller&&(E=I.controller,N=N||X(),Wa("'"+sa+"' controller",N[sa],I,w),N[sa]=I);if(E=I.transclude)if(W=!0,I.$$tlb||(Wa("transclusion",R,I,w),R=I),"element"==E)ya=!0,F=I.priority,oa=w,w=d.$$element=A(Z.createComment(" "+sa+": "+d[sa]+" ")),b=w[0],aa(f,wa.call(oa,0),b),H=Zb(S,oa,e,F,g&&g.name,{nonTlbTranscludeDirective:R});else{var V=X();oa=A(Wb(b)).contents();if(J(E)){oa=[];var ga=X(),ja=X();n(E,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;ga[a]=b;V[b]=null;ja[b]=
c});n(w.contents(),function(a){var b=ga[va(ta(a))];b?(ja[b]=!0,V[b]=V[b]||[],V[b].push(a)):oa.push(a)});n(ja,function(a,b){if(!a)throw ia("reqslot",b);});for(var la in V)V[la]&&(V[la]=Zb(S,V[la],e))}w.empty();H=Zb(S,oa,e,u,u,{needsNewScope:I.$$isolateScope||I.$$newScope});H.$$slots=V}if(I.template)if(M=!0,Wa("template",ha,I,w),ha=I,E=D(I.template)?I.template(w,d):I.template,E=na(E),I.replace){g=I;oa=Ub.test(E)?Xc(U(I.templateNamespace,Y(E))):[];b=oa[0];if(1!=oa.length||1!==b.nodeType)throw ia("tplrt",
sa,"");aa(f,w,b);E={$attr:{}};var ma=Ha(b,[],E),qa=a.splice(fa+1,a.length-(fa+1));(C||t)&&P(ma,C,t);a=a.concat(ma).concat(qa);Yc(d,E);T=a.length}else w.html(E);if(I.templateUrl)M=!0,Wa("template",ha,I,w),ha=I,I.replace&&(g=I),v=Vf(a.splice(fa,a.length-fa),w,d,f,W&&H,h,l,{controllerDirectives:N,newScopeDirective:t!==I&&t,newIsolateScopeDirective:C,templateDirective:ha,nonTlbTranscludeDirective:R}),T=a.length;else if(I.compile)try{L=I.compile(w,d,H),D(L)?r(null,L,$,ba):L&&r(L.pre,L.post,$,ba)}catch(ra){c(ra,
ua(w))}I.terminal&&(v.terminal=!0,F=Math.max(F,I.priority))}v.scope=t&&!0===t.scope;v.transcludeOnThisElement=W;v.templateOnThisElement=M;v.transclude=H;m.hasElementTranscludeDirective=ya;return v}function P(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Qb(a[d],{$$isolateScope:b,$$newScope:c})}function pa(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(x(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Qb(m,
{$$start:k,$$end:l})),b.push(m),h=m)}catch(v){c(v)}}return h}function sa(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Yc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?
a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Vf(a,b,c,e,f,g,h,k){var l=[],m,r,p=b[0],B=a.shift(),v=Qb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),F=D(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,y=B.templateNamespace;b.empty();d(F).then(function(d){var t,O;d=na(d);if(B.replace){d=Ub.test(d)?Xc(U(y,Y(d))):[];t=d[0];if(1!=d.length||1!==t.nodeType)throw ia("tplrt",B.name,F);d={$attr:{}};aa(e,b,t);var C=Ha(t,[],d);J(B.scope)&&
P(C,!0);a=C.concat(a);Yc(c,d)}else t=p,b.html(d);a.unshift(v);m=oa(a,t,c,f,b,B,g,h,k);n(e,function(a,c){a==t&&(e[c]=b[0])});for(r=R(b[0].childNodes,f);l.length;){d=l.shift();O=l.shift();var Q=l.shift(),W=l.shift(),C=b[0];if(!d.$$destroyed){if(O!==p){var M=O.className;k.hasElementTranscludeDirective&&B.replace||(C=Wb(t));aa(Q,A(O),C);N(A(C),M)}O=m.transcludeOnThisElement?ha(d,m.transclude,W):W;m(r,d,C,e,O)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&
(a=ha(b,m.transclude,e)),m(r,b,c,d,a)))}}function fa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Wa(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ia("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function S(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&O.$$addBindingClass(a);return function(a,c){var e=c.parent();b||O.$$addBindingClass(e);O.$$addBindingInfo(e,
d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=H(a||"html");switch(a){case "svg":case "math":var c=Z.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function E(a,b){if("srcdoc"==b)return M.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function T(a,c,d,e,f){var g=E(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===ta(a))throw ia("selmulti",
ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=X());if(l.test(e))throw ia("nodomevents");var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function aa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<
k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Z.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);A.hasData(d)&&(A.data(c,A.data(d)),A(d).off("$destroy"));A.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function da(a,b){return L(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ca(a,c,d,e,f){var g=[];n(e,function(e,h){var k=
e.attrName,l=e.optional,m,r,v,F;switch(e.mode){case "@":l||qa.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){G(a)&&(d[h]=a)});c.$$observers[k].$$scope=a;G(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!qa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;r=p(c[k]);F=r.literal?la:function(a,b){return a===b||a!==a&&b!==b};v=r.assign||function(){m=d[h]=r(a);throw ia("nonassign",c[k],f.name);};m=d[h]=r(a);l=function(b){F(b,d[h])||(F(b,m)?v(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?
a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,r.literal);g.push(l);break;case "&":r=c.hasOwnProperty(k)?p(c[k]):w;if(r===w&&l)break;d[h]=function(b){return r(a,b)}}});return g.length&&function(){for(var a=0,b=g.length;a<b;++a)g[a]()}}var ba=/^\w/,$=Z.createElement("div"),ka=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};ka.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&F.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&F.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zc(a,b);c&&c.length&&F.addClass(this.$$element,c);(c=Zc(b,a))&&c.length&&F.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Sc(this.$$element[0],a),g=$c[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,"-"));f=ta(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=
b=C(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=Y(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+C(Y(g[m]),!0),f=f+(" "+Y(g[m+1]));g=Y(g[2*l]).split(/\s/);f+=C(Y(g[0]),!0);2===g.length&&(f+=" "+Y(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):ba.test(e)?this.$$element.attr(e,b):W(this.$$element[0],e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,
b){var c=this,d=c.$$observers||(c.$$observers=X()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){cb(e,b)}}};var V=b.startSymbol(),ga=b.endSymbol(),na="{{"==V||"}}"==ga?$a:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,ga)},ja=/^ngAttr[A-Z]/,ma=/^(.+)Start$/;O.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;O.$$addBindingClass=m?function(a){N(a,"ng-binding")}:
w;O.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;O.$$addScopeClass=m?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:w;return O}]}function va(a){return gb(a.replace(Wc,""))}function Zc(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Xc(a){a=A(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Wf.call(a,
b,1);return a}function Dc(a,b){if(b&&G(b))return b;if(G(a)){var d=ad.exec(a);if(d)return d[3]}}function af(){var a={},b=!1;this.register=function(b,c){Ua(b,"controller");J(b)?L(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!J(a.$scope))throw P("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,s;h=!0===h;k&&G(k)&&(s=k);if(G(f)){k=f.match(ad);if(!k)throw Xf("ctrlfmt",f);m=k[1];s=s||k[3];f=a.hasOwnProperty(m)?
a[m]:Cc(g.$scope,m,!0)||(b?Cc(c,m,!0):u);Ta(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),s&&e(g,s,l,m||f.name),L(function(){var a=d.invoke(f,l,g,m);a!==l&&(J(a)||D(a))&&(l=a,s&&e(g,s,l,m||f.name));return l},{instance:l,identifier:s});l=d.instantiate(f,g,m);s&&e(g,s,l,m||f.name);return l}}]}function bf(){this.$get=["$window",function(a){return A(a.document)}]}function cf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function $b(a){return J(a)?
ba(a)?a.toISOString():eb(a):a}function hf(){this.$get=function(){return function(a){if(!a)return"";var b=[];pc(a,function(a,c){null===a||x(a)||(K(a)?n(a,function(a,d){b.push(ga(c)+"="+ga($b(a)))}):b.push(ga(c)+"="+ga($b(a))))});return b.join("&")}}}function jf(){this.$get=function(){return function(a){function b(a,e,f){null===a||x(a)||(K(a)?n(a,function(a,c){b(a,e+"["+(J(a)?c:"")+"]")}):J(a)&&!ba(a)?pc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ga(e)+"="+ga($b(a))))}if(!a)return"";var d=
[];b(a,"",!0);return d.join("&")}}}function ac(a,b){if(G(a)){var d=a.replace(Yf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(bd))||(c=(c=d.match(Zf))&&$f[c[0]].test(d));c&&(a=vc(d))}}return a}function cd(a){var b=X(),d;G(a)?n(a.split("\n"),function(a){d=a.indexOf(":");var e=H(Y(a.substr(0,d)));a=Y(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):J(a)&&n(a,function(a,d){var f=H(d),g=Y(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function dd(a){var b;return function(d){b||(b=cd(a));return d?
(d=b[H(d)],void 0===d&&(d=null),d):b}}function ed(a,b,d,c){if(D(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function gf(){var a=this.defaults={transformResponse:[ac],transformRequest:[function(a){return J(a)&&"[object File]"!==ra.call(a)&&"[object Blob]"!==ra.call(a)&&"[object FormData]"!==ra.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:V(bc),put:V(bc),patch:V(bc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
b=!1;this.useApplyAsync=function(a){return z(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return z(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a){var b=L({},a);b.data=ed(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){D(a)?(c=a(b),null!=c&&(d[e]=
c)):d[e]=a});return d}if(!J(b))throw P("$http")("badreq",b);if(!G(b.url))throw P("$http")("badreq",b.url);var f=L({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=L({},b.headers),f,g,h,c=L({},c.common,c[H(b.method)]);a:for(f in c){g=H(f);for(h in d)if(H(h)===g)continue a;d[f]=c[f]}return e(d,V(b))}(b);f.method=ub(f.method);f.paramSerializer=G(f.paramSerializer)?l.get(f.paramSerializer):
f.paramSerializer;var g=[function(b){var d=b.headers,e=ed(b.data,dd(d),u,b.transformRequest);x(e)&&n(d,function(a,b){"content-type"===H(b)&&delete d[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,e).then(c,c)},u],h=k.when(f);for(n(Q,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Ta(a,
"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Ta(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function s(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}n&&(200<=a&&300>a?n.put(R,[a,c,cd(d),e]):n.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?F.resolve:F.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}
function s(a){l(a.data,a.status,V(a.headers()),a.statusText)}function Q(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var F=k.defer(),C=F.promise,n,N,O=c.headers,R=r(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(Q,Q);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(n=J(c.cache)?c.cache:J(a.cache)?a.cache:B);n&&(N=n.get(R),z(N)?N&&D(N.then)?N.then(s,s):K(N)?l(N[1],N[0],V(N[2]),N[3]):l(N,200,{},"OK"):n.put(R,C));x(N)&&((N=gd(c.url)?
f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||a.xsrfHeaderName]=N),e(c.method,R,d,g,O,c.timeout,c.withCredentials,c.responseType));return C}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var B=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var Q=[];n(c,function(a){Q.unshift(G(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,function(a){m[a]=function(b,c){return m(L({},c||{},{method:a,
url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(L({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function lf(){this.$get=function(){return function(){return new S.XMLHttpRequest}}}function kf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return ag(a,c,a.defer,b.angular.callbacks,d[0])}]}function ag(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;
f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,B="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),B=a.type,g="error"===a.type?404:200);d&&d(g,B)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,s,r,B){function Q(){y&&y();v&&v.abort()}function t(b,c,e,f,g){z(M)&&d.cancel(M);y=v=null;b(c,e,f,g);
a.$$completeOutstandingRequest(w)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==H(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var y=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){t(l,a,c[p].data,"",b);c[p]=w})}else{var v=b(e,h);v.open(e,h,!0);n(m,function(a,b){z(a)&&v.setRequestHeader(b,a)});v.onload=function(){var a=v.statusText||"",b="response"in v?v.response:v.responseText,c=1223===v.status?204:v.status;0===c&&(c=b?200:
"file"==za(h).protocol?404:0);t(l,c,b,v.getAllResponseHeaders(),a)};e=function(){t(l,-1,null,null,"")};v.onerror=e;v.onabort=e;r&&(v.withCredentials=!0);if(B)try{v.responseType=B}catch(q){if("json"!==B)throw q;}v.send(x(k)?null:k)}if(0<s)var M=d(Q,s);else s&&D(s.then)&&s.then(Q)}}function ef(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+
a}function g(c){return c.replace(s,a).replace(r,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,s,r){function y(a){try{var b=a;a=s?e.getTrusted(s,b):e.valueOf(b);var d;if(r&&!z(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}d=a}return d}catch(g){c(La.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=ka(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}r=!!r;var n,
q,F=0,C=[],W=[];v=f.length;for(var N=[],O=[];F<v;)if(-1!=(n=f.indexOf(a,F))&&-1!=(q=f.indexOf(b,n+l)))F!==n&&N.push(g(f.substring(F,n))),F=f.substring(n+l,q),C.push(F),W.push(d(F,y)),F=q+m,O.push(N.length),N.push("");else{F!==v&&N.push(g(f.substring(F)));break}s&&1<N.length&&La.throwNoconcat(f);if(!k||C.length){var R=function(a){for(var b=0,c=C.length;b<c;b++){if(r&&x(a[b]))return;N[O[b]]=a[b]}return N.join("")};return L(function(a){var b=0,d=C.length,e=Array(d);try{for(;b<d;b++)e[b]=W[b](a);return R(e)}catch(g){c(La.interr(f,
g))}},{exp:f,expressions:C,$$watchDelegate:function(a,b){var c;return a.$watchGroup(W,function(d,e){var f=R(d);D(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,s=new RegExp(a.replace(/./g,f),"g"),r=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function ff(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function s(){r?f.apply(null,B):f(p)}var r=4<arguments.length,
B=r?wa.call(arguments,4):[],n=b.setInterval,t=b.clearInterval,p=0,y=z(m)&&!m,v=(y?c:d).defer(),q=v.promise;l=z(l)?l:0;q.$$intervalId=n(function(){y?e.defer(s):a.$evalAsync(s);v.notify(p++);0<l&&p>=l&&(v.resolve(p),t(q.$$intervalId),delete g[q.$$intervalId]);y||a.$apply()},k);g[q.$$intervalId]=v;return q}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function cc(a){a=a.split("/");
for(var b=a.length;b--;)a[b]=qb(a[b]);return a.join("/")}function hd(a,b){var d=za(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||bg[d.protocol]||null}function id(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=za(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=yc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ma(a,b){if(0===b.indexOf(a))return b.substr(a.length)}
function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function kb(a){return a.replace(/(#.+)|#$/,"$1")}function dc(a,b,d){this.$$html5=!0;d=d||"";hd(a,this);this.$$parse=function(a){var d=ma(b,a);if(!G(d))throw Eb("ipthprfx",a,b);id(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Sb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=cc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&
"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;z(f=ma(a,c))?(g=f,g=z(f=ma(d,f))?b+(ma("/",f)||f):a+g):z(f=ma(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function ec(a,b,d){hd(a,this);this.$$parse=function(c){var e=ma(a,c)||ma(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",x(e)&&(a=c,this.replace())):(f=ma(d,e),x(f)&&(f=e));id(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};
this.$$compose=function(){var b=Sb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=cc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function jd(a,b,d){this.$$html5=!0;ec.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=ma(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=
Sb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=cc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Fb(a){return function(){return this[a]}}function kd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function mf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return z(b)?(a=b,this):a};this.html5Mode=function(a){return bb(a)?(b.enabled=a,this):J(a)?(bb(a.enabled)&&(b.enabled=a.enabled),
bb(a.requireBase)&&(b.requireBase=a.requireBase),bb(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var s=c.url(),r;if(b.enabled){if(!m&&b.requireBase)throw Eb("nobase");r=s.substring(0,
s.indexOf("/",s.indexOf("//")+2))+(m||"/");m=e.history?dc:jd}else r=Ja(s),m=ec;var B=r.substr(0,Ja(r).lastIndexOf("/")+1);l=new m(r,B,"#"+a);l.$$parseLinkUrl(s,s);l.$$state=c.state();var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=A(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&
(h=za(h.animVal).href);n.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});kb(l.absUrl())!=kb(s)&&c.url(l.absUrl(),!0);var t=!0;c.onUrlChange(function(a,b){x(ma(B,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=kb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(t=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=kb(c.url()),b=kb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(t||m)t=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function nf(){var a=!0,b=this;this.debugEnabled=function(b){return z(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Xa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ca("isecfld",b);return a}function ld(a,b){a+="";if(!G(a))throw ca("iseccst",b);return a}function Aa(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",
b);}return a}function md(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===cg||a===dg||a===eg)throw ca("isecff",b);}}function Gb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function fg(a,b){return"undefined"!==typeof a?a:b}function nd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function T(a,b){var d,c;switch(a.type){case q.Program:d=!0;n(a.body,function(a){T(a.expression,
b);d=d&&a.expression.constant});a.constant=d;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:T(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:T(a.left,b);T(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:T(a.left,b);T(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:T(a.test,
b);T(a.alternate,b);T(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:T(a.object,b);a.computed&&T(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case q.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){T(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case q.AssignmentExpression:T(a.left,b);T(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:d=!0;c=[];n(a.elements,function(a){T(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case q.ObjectExpression:d=!0;c=[];n(a.properties,function(a){T(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=
d;a.toWatch=c;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function od(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}function pd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function qd(a){if(1===a.body.length&&pd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function rd(a){return 0===a.body.length||
1===a.body.length&&(a.body[0].expression.type===q.Literal||a.body[0].expression.type===q.ArrayExpression||a.body[0].expression.type===q.ObjectExpression)}function sd(a,b){this.astBuilder=a;this.$filter=b}function td(a,b){this.astBuilder=a;this.$filter=b}function Hb(a){return"constructor"==a}function fc(a){return D(a.valueOf)?a.valueOf():gg.call(a)}function of(){var a=X(),b=X();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?
!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&fc(b));return h},b,d,f)}for(var l=[],m=[],s=0,n=g.length;s<n;s++)l[s]=c,m[s]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&fc(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;D(b)&&b.apply(this,
arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;D(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,
d,e,f){e=a(c,d,e,f);c=b(e,c,d);return z(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Ea().noUnsafeEval,m={csp:l,expensiveChecks:!1},s={csp:l,expensiveChecks:!0};return function(c,l,n){var t,p,y;switch(typeof c){case "string":y=c=c.trim();var v=n?b:a;t=v[y];t||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),n=n?s:m,t=new gc(n),t=(new hc(t,d,n)).parse(c),
t.constant?t.$$watchDelegate=h:p?t.$$watchDelegate=t.literal?g:f:t.inputs&&(t.$$watchDelegate=e),v[y]=t);return k(t,l);case "function":return k(c,l);default:return k(w,l)}}}]}function qf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return ud(function(b){a.$evalAsync(b)},b)}]}function rf(){this.$get=["$browser","$exceptionHandler",function(a,b){return ud(function(b){a.defer(b)},b)}]}function ud(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}
function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{D(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=P("$q",TypeError);L(d.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,
a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});L(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(J(a)||D(a))g=a&&a.then;D(g)?
(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];
a=d[f][3];try{e.notify(D(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return h(e,!1)}return d&&D(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},m=function r(a){if(!D(a))throw g("norslvr",a);if(!(this instanceof r))return new r(a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});
return b.promise};m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Af(){this.$get=["$window","$timeout",function(a,
b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function pf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=
null}b.prototype=a;return b}var b=10,d=P("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ka&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=
this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function s(a){if(y.$$phase)throw d("inprog",y.$$phase);y.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function B(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function t(){for(;M.length;)try{M.shift()()}catch(a){f(a)}e=
null}function p(){null===e&&(e=h.defer(function(){y.$apply(t)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,
a);var h=this,k=h.$$watchers,l={fn:b,last:q,get:f,exp:e||a,eq:!!d};c=null;D(b)||(l.fn=w);k||(k=h.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=cb(k,l)&&r(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,
b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(J(e))if(Ca(e))for(f!==s&&(f=s,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},n=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>
a)for(b in l++,f)qa.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),s=[],r={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(J(e))if(Ca(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)qa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,r,n=b,p,B=[],M,z;s("$digest");h.$$checkUrlChange();this===y&&null!==e&&(h.defer.cancel(e),t());c=null;do{r=!1;for(p=
this;v.length;){try{z=v.shift(),z.scope.$eval(z.expression,z.locals)}catch(w){f(w)}c=null}a:do{if(l=p.$$watchers)for(m=l.length;m--;)try{if(a=l[m])if((g=a.get(p))!==(k=a.last)&&!(a.eq?la(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?Pa(g,null):g,a.fn(g,k===q?g:k,p),5>n&&(M=4-n,B[M]||(B[M]=[]),B[M].push({msg:D(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(x){f(x)}if(!(l=p.$$watchersCount&&p.$$childHead||
p!==this&&p.$$nextSibling))for(;p!==this&&!(l=p.$$nextSibling);)p=p.$parent}while(p=l);if((r||v.length)&&!n--)throw y.$$phase=null,d("infdig",b,B);}while(r||v.length);for(y.$$phase=null;u.length;)try{u.shift()()}catch(A){f(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===y&&h.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)B(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){y.$$phase||v.length||
h.defer(function(){v.length&&y.$digest()});v.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{s("$apply");try{return this.$eval(a)}finally{y.$$phase=null}}catch(b){f(b)}finally{try{y.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&M.push(b);p()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;
while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,B(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(s){f(s)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=
null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=
null;return e}};var y=new m,v=y.$$asyncQueue=[],u=y.$$postDigestQueue=[],M=y.$$applyAsyncQueue=[];return y}]}function je(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=za(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function hg(a){if("self"===a)return a;
if(G(a)){if(-1<a.indexOf("***"))throw Ba("iwcard",a);a=vd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Oa(a))return new RegExp("^"+a.source+"$");throw Ba("imatcher");}function wd(a){var b=[];z(a)&&n(a,function(a){b.push(hg(a))});return b}function tf(){this.SCE_CONTEXTS=ja;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=wd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=wd(a));return b};this.$get=["$injector",
function(d){function c(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ja.HTML]=e(g);h[ja.CSS]=e(g);h[ja.URL]=e(g);h[ja.JS]=e(g);h[ja.RESOURCE_URL]=
e(h[ja.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||x(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ja.RESOURCE_URL){var g=za(e.toString()),s,r,n=!1;s=0;for(r=a.length;s<r;s++)if(c(a[s],g)){n=!0;break}if(n)for(s=0,r=b.length;s<r;s++)if(c(b[s],
g)){n=!1;break}if(n)return e;throw Ba("insecurl",e.toString());}if(d===ja.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function sf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ka)throw Ba("iequirks");var c=V(ja);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},
c.valueOf=$a);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(ja,function(a,b){var d=H(b);c[gb("parse_as_"+d)]=function(b){return e(a,b)};c[gb("get_trusted_"+d)]=function(b){return f(a,b)};c[gb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function uf(){this.$get=["$window","$document",function(a,b){var d={},c=ea((/android (\d+)/.exec(H((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||
{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var s in k)if(l=h.exec(s)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=G(k.webkitTransition),m=G(k.webkitAnimation))}return{history:!(!a.history||!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ka)return!1;if(x(d[a])){var b=f.createElement("div");
d[a]="on"+a in b}return d[a]},csp:Ea(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function wf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;G(g)&&b.get(g)||(g=e.getTrustedResourceUrl(g));var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==ac}):k===ac&&(k=null);return d.get(g,L({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,
a.data);return a.data},function(a){if(!h)throw ia("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function xf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=$.element(a).data("$binding");c&&n(c,function(c){d?(new RegExp("(^|\\s)"+vd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function yf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){D(f)||(l=k,k=f,f=w);var m=wa.call(arguments,3),s=z(l)&&!l,r=(s?c:d).defer(),
n=r.promise,q;q=b.defer(function(){try{r.resolve(f.apply(null,m))}catch(b){r.reject(b),e(b)}finally{delete g[n.$$timeoutId]}s||a.$apply()},k);n.$$timeoutId=q;g[q]=r;return n}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function za(a){Ka&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,
search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function gd(a){a=G(a)?za(a):a;return a.protocol===xd.protocol&&a.host===xd.host}function zf(){this.$get=ka(S)}function yd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=
a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Df(){this.$get=yd}function Lc(a){function b(d,c){if(J(d)){var e={};n(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",zd);b("date",Ad);b("filter",ig);b("json",jg);b("limitTo",kg);b("lowercase",lg);b("number",Bd);b("orderBy",Cd);b("uppercase",mg)}function ig(){return function(a,
b,d){if(!Ca(a)){if(null==a)return a;throw P("filter")("notarray",a);}var c;switch(ic(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=ng(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function ng(a,b,d){var c=J(a)&&"$"in a;!0===b?b=la:D(b)||(b=function(a,b){if(x(a))return!1;if(null===a||null===b)return a===b;if(J(b)||J(a)&&!rc(a))return!1;a=H(""+a);b=H(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!J(e)?Ma(e,
a.$,b,!1):Ma(e,a,b,d)}}function Ma(a,b,d,c,e){var f=ic(a),g=ic(b);if("string"===g&&"!"===b.charAt(0))return!Ma(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return Ma(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&Ma(a[h],b,d,!0))return!0;return e?!1:Ma(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!D(e)&&!x(e)&&(f="$"===h,!Ma(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function ic(a){return null===
a?"null":typeof a}function zd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Dd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Dd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function og(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Ed))&&(a=a.replace(Ed,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=
a.length);for(e=0;a.charAt(e)==jc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==jc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Fd&&(d=d.splice(0,Fd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function pg(a,b,d,c){var e=a.d,f=e.length-a.i;b=x(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d)e.splice(d);else{a.i=1;e.length=d=b+1;for(var g=0;g<d;g++)e[g]=0}for(5<=c&&e[d-1]++;f<b;f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),
a.i++}function Dd(a,b,d,c,e){if(!G(a)&&!U(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=og(h);pg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h):(f=k,k=[0]);h=[];for(k.length>b.lgSize&&h.unshift(k.splice(-b.lgSize).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>
a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Ib(a,b,d){var c="";0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a=jc+a;d&&(a=a.substr(a.length-b));return c+a}function da(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Ib(e,b,c)}}function Jb(a,b){return function(d,c){var e=d["get"+a](),f=ub(b?"SHORT"+a:a);return c[f][e]}}function Gd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Hd(a){return function(b){var d=Gd(b.getFullYear());
b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ib(b,a)}}function kc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ad(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));h.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;h=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,
f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=qg.test(c)?ea(c):b(c));U(c)&&(c=new Date(c));if(!ba(c)||!isFinite(c.getTime()))return c;for(;d;)(l=rg.exec(d))?(h=db(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=wc(f,c.getTimezoneOffset()),c=Rb(c,f,!0));n(h,function(b){k=sg[b];g+=k?k(c,a.DATETIME_FORMATS,
m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function jg(){return function(a,b){x(b)&&(b=2);return eb(a,b)}}function kg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if(isNaN(b))return a;U(a)&&(a=a.toString());if(!K(a)&&!G(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Cd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=$a;if(D(b))h=b;
else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!Ca(a))throw P("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,
function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(rc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?
-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Na(a){D(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ka(a)}function Id(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Kb;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Ua(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});cb(g,a);a.$$parentForm=Kb};Jd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?
-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(cb(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ya);c.addClass(a,Lb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ya,Lb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");
f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function lc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=H(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});b.on("compositionend",function(){h=!1;k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=Y(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",
k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",k);c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Mb(a,b){return function(d,c){var e,f;if(ba(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(tg.test(d))return new Date(d);
a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function s(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return z(a)&&!ba(a)?d(a)||
u:a}Kd(e,f,g,h);lb(e,f,g,h,k,l);var n=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,q),n&&(a=Rb(a,n)),a):u});h.$formatters.push(function(a){if(a&&!ba(a))throw nb("datefmt",a);if(s(a))return(q=a)&&n&&(q=Rb(q,n,!0)),m("date")(a,c,n);q=null;return""});if(z(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!s(a)||x(t)||d(a)>=t};g.$observe("min",function(a){t=r(a);h.$validate()})}if(z(g.max)||g.ngMax){var p;h.$validators.max=
function(a){return!s(a)||x(p)||d(a)<=p};g.$observe("max",function(a){p=r(a);h.$validate()})}}}function Kd(a,b,d,c){(c.$$hasNativeValidators=J(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?u:a})}function Ld(a,b,d,c,e){if(z(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function mc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==
b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):J(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||X(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!la(a,
m)){var q=e(m),n=c(l,q),l=c(q,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=V(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Jd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Ac(a,"-"):"";
b(ob+a,!0===c);b(Md+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Md]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){x(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Nd(c.$pending)&&(c.$pending=u));bb(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Od,!0),c.$valid=c.$invalid=u,d("",null)):(b(Od,!1),c.$valid=Nd(c.$error),c.$invalid=!c.$valid,d("",
c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Nd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var ug=/^\/(.+)\/([a-z]*)$/,H=function(a){return G(a)?a.toLowerCase():a},qa=Object.prototype.hasOwnProperty,ub=function(a){return G(a)?a.toUpperCase():a},Ka,A,xa,wa=[].slice,Wf=[].splice,vg=[].push,ra=Object.prototype.toString,sc=Object.getPrototypeOf,Da=P("ng"),$=S.angular||(S.angular={}),Tb,pb=0;Ka=Z.documentMode;
w.$inject=[];$a.$inject=[];var K=Array.isArray,Yd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,Y=function(a){return G(a)?a.trim():a},vd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ea=function(){if(!z(Ea.rules)){var a=Z.querySelector("[ng-csp]")||Z.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ea.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),
noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ea;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ea.rules},rb=function(){if(z(rb.name_))return rb.name_;var a,b,d=Ra.length,c,e;for(b=0;b<d;++b)if(c=Ra[b],a=Z.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},Ra=["ng-","data-ng-","ng:","x-ng-"],ee=/[A-Z]/g,Bc=!1,Qa=3,ie={full:"1.5.0-rc.0",major:1,minor:5,dot:0,codeName:"oblong-panoptikum"};E.expando=
"ng339";var ib=E.cache={},Jf=1;E._data=function(a){return this.cache[a[this.expando]]||{}};var Ef=/([\:\-\_]+(.))/g,Ff=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Vb=P("jqLite"),If=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Ub=/<|&#?\w+;/,Gf=/<([\w:-]+)/,Hf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Of=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Sa=E.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===Z.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),E(S).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+
"]"},eq:function(a){return 0<=a?A(this[a]):A(this[this.length+a])},length:0,push:vg,sort:[].sort,splice:[].splice},Db={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Db[H(a)]=a});var Tc={};n("input select option textarea button form details".split(" "),function(a){Tc[a]=!0});var $c={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Xb,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;return!1},
cleanData:function(a){for(var b=0,d=a.length;b<d;b++)hb(a[b])}},function(a,b){E[b]=a});n({data:Xb,inheritedData:Cb,scope:function(a){return A.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return A.data(a,"$isolateScope")||A.data(a,"$isolateScopeNoTemplate")},controller:Qc,injector:function(a){return Cb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=gb(b);if(z(d))a.style[b]=d;else return a.style[b]},attr:function(a,
b,d){var c=a.nodeType;if(c!==Qa&&2!==c&&8!==c)if(c=H(b),Db[c])if(z(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||w).specified?c:u;else if(z(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(z(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Qa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&
"select"===ta(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Rc},function(a,b){E.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Rc&&x(2==a.length&&a!==zb&&a!==Qc?b:c)){if(J(b)){for(e=0;e<g;e++)if(a===Xb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?
e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:hb,on:function(a,b,d,c){if(z(c))throw Vb("onargs");if(Mc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Lf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Nf),h(b,u,!0)):h(b)}},off:Pc,one:function(a,b,d){a=A(a);a.on(b,function e(){a.off(b,d);a.off(b,
e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);n(new E(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new E(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new E(b),
function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=A(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Yb,detach:function(a){Yb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new E(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;x(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?
a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Wb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},
stopPropagation:w,type:f,target:a},b.type&&(c=L(c,b)),b=V(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){E.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)x(f)?(f=a(this[g],b,c,e),z(f)&&(f=A(f))):Oc(f,a(this[g],b,c,e));return z(f)?f:this};E.prototype.bind=E.prototype.on;E.prototype.unbind=E.prototype.off});Va.prototype={put:function(a,b){this[Fa(a,this.nextUid)]=b},get:function(a){return this[Fa(a,this.nextUid)]},remove:function(a){var b=
this[a=Fa(a,this.nextUid)];delete this[a];return b}};var Cf=[function(){this.$get=[function(){return Va}]}],Qf=/^([^\(]+?)=>/,Rf=/^[^\(]*\(\s*([^\)]*)\)/m,wg=/,/,xg=/^\s*(_?)(\S+?)\1\s*$/,Pf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=P("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Sf(a)),Ga("strictdi",d);b=Uc(a);n(b[1].split(wg),function(a){a.replace(xg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?
(b=a.length-1,Ta(a[b],"fn"),c=a.slice(0,b)):Ta(a,"fn",!0);return c};var Pd=P("$animate"),We=function(){var a=new Va,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):K(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Tf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});
b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ue=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Pd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=
e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Pd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,
off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&A(f);g=g&&A(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&A(f);g=g&&A(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,c,g){g=Ia(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=jb(g.removeClass,
c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?L(k.from,c):c;k.to=k.to?L(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Ye=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=
!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Xe=function(){this.$get=["$q","$sniffer","$$animateAsyncRun",function(a,b,d){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=d();this._state=0}c.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};c.all=function(a,b){function c(g){k=k&&g;++d===a.length&&b(k)}var d=0,k=!0;n(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},
done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(n(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]},Ve=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),
g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=Pa(e);g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ia=P("$compile");Ec.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Xf=P("$controller"),ad=/^(\S+)(\s+as\s+(\w+))?$/,df=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof
A&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},bd="application/json",bc={"Content-Type":bd+";charset=utf-8"},Zf=/^\[|^\{(?!\{)/,$f={"[":/]$/,"{":/}$/},Yf=/^\)\]\}',?\n/,yg=P("$http"),fd=function(a){return function(){throw yg("legacy",a);}},La=$.$interpolateMinErr=P("$interpolate");La.throwNoconcat=function(a){throw La("noconcat",a);};La.interr=function(a,b){return La("interr",a,b.toString())};var zg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,bg={http:80,https:443,ftp:21},Eb=P("$location"),Ag={$$html5:!1,
$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=zg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Fb("$$protocol"),host:Fb("$$host"),port:Fb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||U(a))a=a.toString(),this.$$search=yc(a);
else if(J(a))a=Pa(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Eb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([jd,ec,dc],function(a){a.prototype=Object.create(Ag);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Eb("nostate");this.$$state=
x(b)?null:b;return this}});var ca=P("$parse"),cg=Function.prototype.call,dg=Function.prototype.apply,eg=Function.prototype.bind,Nb=X();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Nb[a]=!0});var Bg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Nb[b],e=Nb[d];Nb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==
b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=z(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,
d)+"]":" "+d;throw ca("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=H(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Bg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";
q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=Pa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:q.Property,kind:"init"};this.peek().constant?
b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,
value:null},undefined:{type:q.Literal,value:u},"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};sd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};T(c,d.$filter);var e="",f;this.stage="assign";if(f=qd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=
od(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext",
"ifDefined","plus","text",e))(this.$filter,Xa,Aa,md,ld,Gb,fg,nd,a);this.state=this.stage=u;e.literal=rd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,
function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m;c=c||w;if(!f&&z(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:n(a.body,function(b,c){k.recurse(b.expression,
u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case q.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,
0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,
d.name=a.name);Xa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Hb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();
k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Xa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,
a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Hb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),
function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:h=this.nextId();g={};if(!pd(a.left))throw ca("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case q.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===
q.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case q.ThisExpression:this.assign(b,"s");c("s");break;case q.LocalsExpression:this.assign(b,"l");c("l");break;case q.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||
(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+
"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),
";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,
b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(U(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;T(c,d.$filter);var e,f;if(e=qd(c))f=this.recurse(e);e=od(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=
g);e.literal=rd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,
e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return Xa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Hb(a.name),b,d,f.expression);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Xa(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,
f.expensiveChecks,b,d,f.expression);case q.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],r=0;r<g.length;++r)n.push(g[r](a,c,d,f));a=e.apply(u,n,f);return b?{context:u,name:u,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),r;if(null!=n.value){Aa(n.context,f.expression);md(n.value,f.expression);r=[];for(var q=0;q<g.length;++q)r.push(Aa(g[q](a,c,d,m),
f.expression));r=Aa(n.value.apply(n.context,r),f.expression)}return b?{value:r}:r};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);Aa(n.value,f.expression);Gb(n.context);n.context[n.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=
[],n(a.properties,function(a){g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=z(d)?+d:
0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=z(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=nd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(z(h)?h:0)-(z(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,
e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=
b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==
c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&Aa(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=ld(m),Xa(m,e),c&&1!==c&&(Gb(l),l&&!l[m]&&(l[m]={})),n=l[m],Aa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Gb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:u;(d||Hb(b))&&Aa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var hc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new td(this.ast,b):new sd(this.ast,b)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};X();X();var gg=Object.prototype.valueOf,Ba=P("$sce"),ja={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=P("$compile"),aa=Z.createElement("a"),xd=za(S.location.href);
yd.$inject=["$document"];Lc.$inject=["$provide"];var Fd=22,Ed=".",jc="0";zd.$inject=["$locale"];Bd.$inject=["$locale"];var sg={yyyy:da("FullYear",4),yy:da("FullYear",2,0,!0),y:da("FullYear",1),MMMM:Jb("Month"),MMM:Jb("Month",!0),MM:da("Month",2,1),M:da("Month",1,1),dd:da("Date",2),d:da("Date",1),HH:da("Hours",2),H:da("Hours",1),hh:da("Hours",2,-12),h:da("Hours",1,-12),mm:da("Minutes",2),m:da("Minutes",1),ss:da("Seconds",2),s:da("Seconds",1),sss:da("Milliseconds",3),EEEE:Jb("Day"),EEE:Jb("Day",!0),
a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:Hd(2),w:Hd(1),G:kc,GG:kc,GGG:kc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},rg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,qg=/^\-?\d+$/;Ad.$inject=["$locale"];var lg=ka(H),mg=ka(ub);Cd.$inject=["$parse"];var ke=ka({restrict:"E",compile:function(a,b){if(!b.href&&
!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ra.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};n(Db,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});n($c,function(a,b){vb[b]=function(){return{priority:100,
link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ug))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=va("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ra.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ka&&f&&c.prop(f,e[g])):"href"===
a&&e.$set(g,null)})}}}});var Kb={$addControl:w,$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Id.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Qd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Id,compile:function(d,f){d.addClass(Ya).addClass(ob);var g=f.name?"name":
a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var r=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",r,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",r,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):w;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,u),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",
function(){n.$$parentForm.$removeControl(n);q(a,u);L(n,Kb)})}}}}}]},le=Qd(),ye=Qd(!0),tg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Cg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/[\]$'()*,;~]*)?$/,Dg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Eg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Rd=/^(\d{4})-(\d{2})-(\d{2})$/,Sd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
nc=/^(\d{4})-W(\d\d)$/,Td=/^(\d{4})-(\d\d)$/,Ud=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Vd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);lc(c)},date:mb("date",Rd,Mb(Rd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Sd,Mb(Sd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Ud,Mb(Ud,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",nc,function(a,b){if(ba(a))return a;if(G(a)){nc.lastIndex=0;var d=nc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=
0,h=0,k=Gd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Td,Mb(Td,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Kd(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:Eg.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!U(a))throw nb("numfmt",a);a=a.toString()}return a});if(z(d.min)||
d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g};d.$observe("min",function(a){z(a)&&!U(a)&&(a=parseFloat(a,10));g=U(a)&&!isNaN(a)?a:u;c.$validate()})}if(z(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h};d.$observe("max",function(a){z(a)&&!U(a)&&(a=parseFloat(a,10));h=U(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);lc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||
Cg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);lc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Dg.test(d)}},radio:function(a,b,d,c){x(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Ld(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Ld(h,a,"ngFalseValue",d.ngFalseValue,
!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return la(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Fc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Vd[H(g.type)]||Vd.text)(e,f,g,h[0],b,a,d,c)}}}}],Fg=/^(true|false|\d+)$/,
Qe=function(){return{restrict:"A",priority:100,compile:function(a,b){return Fg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},qe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=x(a)?"":a})}}}}],se=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);
return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],re=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Pe=ka({restrict:"A",
require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),te=mc("",!0),ve=mc("Odd",0),ue=mc("Even",1),we=Na({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),xe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},Gg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=
va("ng-"+a);Kc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Gg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ae=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=Z.createComment(" end ngIf: "+
c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=tb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],Be=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,r){var q=0,u,t,p,y=function(){t&&(t.remove(),t=null);u&&(u.$destroy(),u=null);p&&
(d.leave(p).then(function(){t=null}),t=p,p=null)};c.$watch(f,function(f){var m=function(){!z(h)||h&&!c.$eval(h)||b()},t=++q;f?(a(f,!0).then(function(a){if(t===q){var b=c.$new();n.template=a;a=r(b,function(a){y();d.enter(a,null,e).then(m)});u=b;p=a;u.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){t===q&&(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],Se=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Nc(e.template,Z).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ce=Na({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Oe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?Y(e):e;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&n(a.split(g),function(a){a&&
b.push(f?Y(a):a)});return b}});c.$formatters.push(function(a){return K(a)?a.join(e):u});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Md="ng-invalid",Ya="ng-pristine",Lb="ng-dirty",Od="ng-pending",nb=P("ngModel"),Hg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=
[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Kb;var m=e(d.ngModel),s=m.assign,r=m,q=s,A=null,t,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");r=function(a){var c=m(a);D(c)&&(c=b(a));return c};q=function(a,b){D(m(a))?f(a,{$$$p:p.$modelValue}):
s(a,p.$modelValue)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ua(c));};this.$render=w;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var y=0;Jd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,
Lb);f.addClass(c,Ya)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Ya);f.addClass(c,Lb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(A);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!U(p.$modelValue)||!isNaN(p.$modelValue)){var a=
p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!D(h.then))throw nb("$asyncValidators",
h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},w):g(!0)}function f(a,b){h===y&&p.$setValidity(a,b)}function g(a){h===y&&c(a)}y++;var h=y;(function(){var a=p.$$parserName||"parse";if(x(t))f(a,null);else return t||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,t),t;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(A);if(p.$$lastCommittedViewValue!==
a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(t=x(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),x(b)){t=!1;break}U(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=r(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());
p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){q(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&z(d.debounce)&&(d=d.debounce,U(d)?c=d:U(d[b])?c=d[b]:U(d["default"])&&
(c=d["default"]));g.cancel(A);c?A=g(function(){p.$commitViewValue()},c):h.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=r(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;t=u;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,w))}return b})}],Ne=["$rootScope",function(a){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:Hg,priority:1,compile:function(b){b.addClass(Ya).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,
function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Ig=/(\s+|^)default(\s+|$)/,Re=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Pa(a.$eval(b.ngModelOptions));z(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Y(this.$options.updateOn.replace(Ig,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=
!0}]}},De=Na({terminal:!0,priority:1E3}),Jg=P("ngOptions"),Kg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Le=["$compile","$parse",function(a,b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!r&&Ca(a))b=a;else{b=[];
for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Kg);if(!m)throw Jg("iexp",a,ua(c));var n=m[5]||m[7],r=m[6];a=/ as /.test(m[0])&&m[1];var q=m[9];c=b(m[2]?m[1]:n);var u=a&&b(a)||c,t=q&&b(q),p=q?function(a,b){return t(d,b)}:function(a){return Fa(a)},y=function(a,b){return p(a,A(a,b))},v=b(m[2]||m[1]),z=b(m[3]||""),w=b(m[4]||""),F=b(m[8]),x={},A=r?function(a,b){x[r]=b;x[n]=a;return x}:function(a){x[n]=a;return x};return{trackBy:q,getTrackByValue:y,getWatchables:b(F,
function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=A(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=v(d,k),b.push(g);m[4]&&(k=w(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=F(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],r=A(c[n],n),s=u(d,r),n=p(s,r),t=v(d,r),x=z(d,r),r=w(d,r),s=new e(n,s,t,x,r);a.push(s);b[n]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[y(a)]},getViewValueFromOption:function(a){return q?
$.copy(a.viewValue):a.viewValue}}}}}var c=Z.createElement("option"),e=Z.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&H(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function q(a){for(var b;a;)b=
a.nextSibling,Yb(a),a=b}function r(a){var b=y&&y[0],c=F&&F[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function u(){var a=C&&x.readValue();C=D.getOptions();var b={},d=g[0].firstChild;M&&g.prepend(y);d=r(d);C.items.forEach(function(a){var f,h;z(a.group)?(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=
h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){q(b[a].currentOptionElement)});q(d);t.$render();if(!t.$isEmpty(a)){var f=x.readValue();(D.trackBy||p?la(a,f):a===f)||(t.$setViewValue(f),t.$render())}}var x=k[0],t=k[1],p=h.multiple,y;k=0;for(var v=g.children(),w=v.length;k<w;k++)if(""===v[k].value){y=v.eq(k);break}var M=!!y,F=A(c.cloneNode(!1));F.val("?");var C,D=d(h.ngOptions,g,b);p?(t.$isEmpty=function(a){return!a||0===a.length},x.writeValue=function(a){C.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=C.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},x.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=C.selectValueMap[a])&&!a.disabled&&b.push(C.getViewValueFromOption(a))});return b},D.trackBy&&b.$watchCollection(function(){if(K(t.$viewValue))return t.$viewValue.map(function(a){return D.getTrackByValue(a)})},function(){t.$render()})):(x.writeValue=function(a){var b=C.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&
(F.remove(),M||y.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||M?(F.remove(),M||g.prepend(y),g.val(""),y.prop("selected",!0),y.attr("selected",!0)):(M||y.remove(),g.prepend(F),g.val("?"),F.prop("selected",!0),F.attr("selected",!0))},x.readValue=function(){var a=C.selectValueMap[g.val()];return a&&!a.disabled?(M||y.remove(),F.remove(),C.getViewValueFromOption(a)):null},D.trackBy&&b.$watch(function(){return D.getTrackByValue(t.$viewValue)},
function(){t.$render()}));M?(y.remove(),a(y)(b),y.removeClass("ng-scope")):y=A(c.cloneNode(!1));u();b.$watchCollection(D.getWatchables,u)}}}}],Ee=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),q=h.offset||0,r=f.$eval(m)||{},u={},z=b.startSymbol(),t=b.endSymbol(),p=z+l+"-"+q+t,y=$.noop,v;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+H(c[2]),r[c]=g.attr(h.$attr[b]))});
n(r,function(a,d){u[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in r||(c=a.pluralCat(c-q));c===v||e&&U(v)&&isNaN(v)||(y(),e=u[c],x(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),y=w,k()):y=f.$watch(e,k),v=c)})}}}],Fe=["$parse","$animate",function(a,b){var d=P("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=Z.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",g);var l=k[1],m=k[2],q=k[3],r=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var x=k[3]||k[1],z=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var t,p,y,v,w={$id:Fa};r?t=a(r):(y=function(a,b){return Fa(b)},v=function(a){return a});return function(a,e,f,k,l){t&&(p=function(b,c,d){z&&(w[z]=b);w[x]=c;w.$index=d;return t(a,w)});var r=X();a.$watchCollection(m,function(f){var k,m,t=e[0],w,D=X(),C,G,J,E,K,H,L;q&&(a[q]=f);if(Ca(f))K=f,m=p||y;else for(L in m=p||v,K=[],f)qa.call(f,L)&&"$"!==L.charAt(0)&&K.push(L);C=K.length;L=Array(C);for(k=0;k<C;k++)if(G=f===K?k:K[k],J=f[G],E=m(G,J,k),r[E])H=r[E],delete r[E],D[E]=H,L[k]=H;else{if(D[E])throw n(L,
function(a){a&&a.scope&&(r[a.id]=a)}),d("dupes",g,E,J);L[k]={id:E,scope:u,clone:u};D[E]=!0}for(w in r){H=r[w];E=tb(H.clone);b.leave(E);if(E[0].parentNode)for(k=0,m=E.length;k<m;k++)E[k].$$NG_REMOVED=!0;H.scope.$destroy()}for(k=0;k<C;k++)if(G=f===K?k:K[k],J=f[G],H=L[k],H.scope){w=t;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);H.clone[0]!=w&&b.move(tb(H.clone),null,A(t));t=H.clone[H.clone.length-1];c(H.scope,k,x,J,z,G,C)}else l(function(a,d){H.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,
null,A(t));t=e;H.clone=a;D[H.id]=H;c(H.scope,k,x,J,z,G,C)});r=D})}}}}],Ge=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ze=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],He=Na(function(a,b,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ie=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var q=tb(g[c].clone);k[c].$destroy();(h[c]=a.leave(q)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+
b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=Z.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],Je=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Ke=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Lg=P("ngTransclude"),Me=Na({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Lg("orphan",ua(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),me=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Mg={$setViewValue:w,$render:w},
Ng=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Va;c.ngModelCtrl=Mg;c.unknownOption=A(Z.createElement("option"));c.renderUnknownOption=function(b){b="? "+Fa(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",function(){c.renderUnknownOption=w});c.removeUnknownOption=function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),
a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Ua(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,
l){if(e){var m;d.$observe("value",function(a){z(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],ne=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ng,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",
function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Va(a);n(b.find("option"),function(a){a.selected=z(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||la(g,e.$viewValue)||(g=V(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},pe=["$interpolate",function(a){return{restrict:"E",
priority:100,compile:function(b,d){if(z(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],oe=ka({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},
Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw P("ngPattern")("noregexp",f,a,ua(b));e=a||u;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=isNaN(a)?-1:a;c.$validate()});
c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};S.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(fe(),he($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==
b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=
a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),A(Z).ready(function(){be(Z,zc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(t,e,i){var a;return function(){var n=this,o=arguments,r=function(){a=null,i||t.apply(n,o)},s=i&&!a;clearTimeout(a),a=setTimeout(r,e),s&&t.apply(n,o)}}function i(t){var e=++h;return String(null==t?"rmjs-":t)+e}function a(t){var e=t.clone().css({height:"auto",width:t.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(t),i=e.outerHeight(),a=parseInt(e.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=t.data("defaultHeight");e.remove();var o=a||t.data("collapsedHeight")||n;t.data({expandedHeight:i,maxHeight:a,collapsedHeight:o}).css({maxHeight:"none"})}function n(t){if(!d[t.selector]){var e=" ";t.embedCSS&&""!==t.blockCSS&&(e+=t.selector+" + [data-readmore-toggle], "+t.selector+"[data-readmore]{"+t.blockCSS+"}"),e+=t.selector+"[data-readmore]{transition: height "+t.speed+"ms;overflow: hidden;}",function(t,e){var i=t.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),t.getElementsByTagName("head")[0].appendChild(i)}(document,e),d[t.selector]=!0}}function o(e,i){this.element=e,this.options=t.extend({},s,i),n(this.options),this._defaults=s,this._name=r,this.init(),window.addEventListener?(window.addEventListener("load",l),window.addEventListener("resize",l)):(window.attachEvent("load",l),window.attachEvent("resize",l))}var r="readmore",s={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,beforeToggle:function(){},afterToggle:function(){}},d={},h=0,l=e(function(){t("[data-readmore]").each(function(){var e=t(this),i="true"===e.attr("aria-expanded");a(e),e.css({height:e.data(i?"expandedHeight":"collapsedHeight")})})},100);o.prototype={init:function(){var e=t(this.element);e.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),a(e);var n=e.data("collapsedHeight"),o=e.data("heightMargin");if(e.outerHeight(!0)<=n+o)return!0;var r=e.attr("id")||i(),s=this.options.startOpen?this.options.lessLink:this.options.moreLink;e.attr({"data-readmore":"","aria-expanded":this.options.startOpen,id:r}),e.after(t(s).on("click",function(t){return function(i){t.toggle(this,e[0],i)}}(this)).attr({"data-readmore-toggle":"","aria-controls":r})),this.options.startOpen||e.css({height:n})},toggle:function(e,i,a){a&&a.preventDefault(),e||(e=t('[aria-controls="'+_this.element.id+'"]')[0]),i||(i=_this.element);var n=t(i),o="",r="",s=!1,d=n.data("collapsedHeight");n.height()<=d?(o=n.data("expandedHeight")+"px",r="lessLink",s=!0):(o=d,r="moreLink"),this.options.beforeToggle(e,n,!s),n.css({height:o}),n.on("transitionend",function(i){return function(){i.options.afterToggle(e,n,s),t(this).attr({"aria-expanded":s}).off("transitionend")}}(this)),t(e).replaceWith(t(this.options[r]).on("click",function(t){return function(e){t.toggle(this,i,e)}}(this)).attr({"data-readmore-toggle":"","aria-controls":n.attr("id")}))},destroy:function(){t(this.element).each(function(){var e=t(this);e.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),e.removeData()})}},t.fn.readmore=function(e){var i=arguments,a=this.selector;return e=e||{},"object"==typeof e?this.each(function(){if(t.data(this,"plugin_"+r)){var i=t.data(this,"plugin_"+r);i.destroy.apply(i)}e.selector=a,t.data(this,"plugin_"+r,new o(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var a=t.data(this,"plugin_"+r);a instanceof o&&"function"==typeof a[e]&&a[e].apply(a,Array.prototype.slice.call(i,1))}):void 0}});;
angular.module("cgBusy",[]),angular.module("cgBusy").factory("_cgBusyTrackerFactory",["$timeout","$q",function(a,b){return function(){var c={};c.promises=[],c.delayPromise=null,c.durationPromise=null,c.delayJustFinished=!1,c.reset=function(b){c.minDuration=b.minDuration,c.promises=[],angular.forEach(b.promises,function(a){a&&!a.$cgBusyFulfilled&&d(a)}),0!==c.promises.length&&(c.delayJustFinished=!1,b.delay&&(c.delayPromise=a(function(){c.delayPromise=null,c.delayJustFinished=!0},parseInt(b.delay,10))),b.minDuration&&(c.durationPromise=a(function(){c.durationPromise=null},parseInt(b.minDuration,10)+(b.delay?parseInt(b.delay,10):0))))},c.isPromise=function(a){var b=a&&(a.then||a.$then||a.$promise&&a.$promise.then);return"undefined"!=typeof b},c.callThen=function(a,c,d){var e;a.then||a.$then?e=a:a.$promise?e=a.$promise:a.denodeify&&(e=b.when(a));var f=e.then||e.$then;f.call(e,c,d)};var d=function(a){if(!c.isPromise(a))throw new Error("cgBusy expects a promise (or something that has a .promise or .$promise");-1===c.promises.indexOf(a)&&(c.promises.push(a),c.callThen(a,function(){a.$cgBusyFulfilled=!0,-1!==c.promises.indexOf(a)&&c.promises.splice(c.promises.indexOf(a),1)},function(){a.$cgBusyFulfilled=!0,-1!==c.promises.indexOf(a)&&c.promises.splice(c.promises.indexOf(a),1)}))};return c.active=function(){return c.delayPromise?!1:c.delayJustFinished?(c.delayJustFinished=!1,0===c.promises.length&&(c.durationPromise=null),c.promises.length>0):c.durationPromise?!0:c.promises.length>0},c}}]),angular.module("cgBusy").value("cgBusyDefaults",{}),angular.module("cgBusy").directive("cgBusy",["$compile","$templateCache","cgBusyDefaults","$http","_cgBusyTrackerFactory",function(a,b,c,d,e){return{restrict:"A",link:function(f,g,h){var i=g.css("position");("static"===i||""===i||"undefined"==typeof i)&&g.css("position","relative");var j,k,l,m,n,o=e(),p={templateUrl:"angular-busy.html",delay:0,minDuration:0,backdrop:!0,message:"Please Wait...",wrapperClass:"cg-busy cg-busy-animation"};angular.extend(p,c),f.$watchCollection(h.cgBusy,function(c){if(c||(c={promise:null}),angular.isString(c))throw new Error("Invalid value for cg-busy. cgBusy no longer accepts string ids to represent promises/trackers.");(angular.isArray(c)||o.isPromise(c))&&(c={promise:c}),c=angular.extend(angular.copy(p),c),c.templateUrl||(c.templateUrl=p.templateUrl),angular.isArray(c.promise)||(c.promise=[c.promise]),m||(m=f.$new()),m.$message=c.message,angular.equals(o.promises,c.promise)||o.reset({promises:c.promise,delay:c.delay,minDuration:c.minDuration}),m.$cgBusyIsActive=function(){return o.active()},j&&l===c.templateUrl&&n===c.backdrop||(j&&j.remove(),k&&k.remove(),l=c.templateUrl,n=c.backdrop,d.get(l,{cache:b}).success(function(b){if(c.backdrop="undefined"==typeof c.backdrop?!0:c.backdrop,c.backdrop){var d='<div class="cg-busy cg-busy-backdrop cg-busy-backdrop-animation ng-hide" ng-show="$cgBusyIsActive()"></div>';k=a(d)(m),g.append(k)}var e='<div class="'+c.wrapperClass+' ng-hide" ng-show="$cgBusyIsActive()">'+b+"</div>";j=a(e)(m),angular.element(j.children()[0]).css("position","absolute").css("top",0).css("left",0).css("right",0).css("bottom",0),g.append(j)}).error(function(a){throw new Error("Template specified for cgBusy ("+c.templateUrl+") could not be loaded. "+a)}))},!0)}}}]),angular.module("cgBusy").run(["$templateCache",function(a){"use strict";a.put("angular-busy.html",'<div class="cg-busy-default-wrapper">\n\n   <div class="cg-busy-default-sign">\n\n      <div class="cg-busy-default-spinner">\n         <div class="bar1"></div>\n         <div class="bar2"></div>\n         <div class="bar3"></div>\n         <div class="bar4"></div>\n         <div class="bar5"></div>\n         <div class="bar6"></div>\n         <div class="bar7"></div>\n         <div class="bar8"></div>\n         <div class="bar9"></div>\n         <div class="bar10"></div>\n         <div class="bar11"></div>\n         <div class="bar12"></div>\n      </div>\n\n      <div class="cg-busy-default-text">{{$message}}</div>\n\n   </div>\n\n</div>')}]);;
/*
 * angular-confirm
 * http://schlogen.github.io/angular-confirm/
 * Version: 1.1.0 - 2015-14-07
 * License: Apache
 */
angular.module('angular-confirm', ['ui.bootstrap'])
  .controller('ConfirmModalController', ['$scope', '$modalInstance', 'data', function ($scope, $modalInstance, data) {
    $scope.data = angular.copy(data);

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }])
  .value('$confirmModalDefaults', {
    template: '<div class="modal-header"><h3 class="modal-title">{{data.title}}</h3></div>' +
    '<div class="modal-body">{{data.text}}</div>' +
    '<div class="modal-footer">' +
    '<button class="btn btn-primary" ng-click="ok()">{{data.ok}}</button>' +
    '<button class="btn btn-default" ng-click="cancel()">{{data.cancel}}</button>' +
    '</div>',
    controller: 'ConfirmModalController',
    defaultLabels: {
      title: 'Confirm',
      ok: 'OK',
      cancel: 'Cancel'
    }
  })
  .factory('$confirm', ['$modal', '$confirmModalDefaults', function ($modal, $confirmModalDefaults) {
    return function (data, settings) {
      settings = angular.extend($confirmModalDefaults, (settings || {}));

      data = angular.extend({}, settings.defaultLabels, data || {});

      if ('templateUrl' in settings && 'template' in settings) {
        delete settings.template;
      }

      settings.resolve = {
        data: function () {
          return data;
        }
      };

      return $modal.open(settings).result;
    };
  }])
  .directive('confirm', ['$confirm', function ($confirm) {
    return {
      priority: 1,
      restrict: 'A',
      scope: {
        confirmIf: "=",
        ngClick: '&',
        confirm: '@',
        confirmSettings: "=",
        confirmTitle: '@',
        confirmOk: '@',
        confirmCancel: '@'
      },
      link: function (scope, element, attrs) {


        element.unbind("click").bind("click", function ($event) {

          $event.preventDefault();

          if (angular.isUndefined(scope.confirmIf) || scope.confirmIf) {

            var data = {text: scope.confirm};
            if (scope.confirmTitle) {
              data.title = scope.confirmTitle;
            }
            if (scope.confirmOk) {
              data.ok = scope.confirmOk;
            }
            if (scope.confirmCancel) {
              data.cancel = scope.confirmCancel;
            }
            $confirm(data, scope.confirmSettings || {}).then(scope.ngClick);
          } else {

            scope.$apply(scope.ngClick);
          }
        });

      }
    }
  }]);
;
/*
 AngularJS v1.5.0-build.4454+sha.4bcb307
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,e,z){'use strict';function A(a){var d=[];t(d,e.noop).chars(a);return d.join("")}function g(a,d){var b={},c=a.split(","),l;for(l=0;l<c.length;l++)b[d?e.lowercase(c[l]):c[l]]=!0;return b}function B(a,d){null===a||a===z?a="":"string"!==typeof a&&(a=""+a);f.innerHTML=a;var b=5;do{if(0===b)throw u("uinput");b--;11>=document.documentMode&&n(f);a=f.innerHTML;f.innerHTML=a}while(a!==f.innerHTML);for(b=f.firstChild;b;){switch(b.nodeType){case 1:d.start(b.nodeName.toLowerCase(),C(b.attributes));
break;case 3:d.chars(b.textContent)}var c;if(!(c=b.firstChild)&&(1==b.nodeType&&d.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===f)break;c=b.nextSibling;1==b.nodeType&&d.end(b.nodeName.toLowerCase())}b=c}for(;b=f.firstChild;)f.removeChild(b)}function C(a){for(var d={},b=0,c=a.length;b<c;b++){var l=a[b];d[l.name]=l.value}return d}function v(a){return a.replace(/&/g,"&amp;").replace(D,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(E,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var b=!1,c=e.bind(a,a.push);return{start:function(a,h){a=e.lowercase(a);!b&&F[a]&&(b=a);b||!0!==r[a]||(c("<"),c(a),e.forEach(h,function(b,h){var f=e.lowercase(h),g="img"===a&&"src"===f||"background"===f;!0!==G[f]||!0===w[f]&&!d(b,g)||(c(" "),c(h),c('="'),c(v(b)),c('"'))}),c(">"))},end:function(a){a=e.lowercase(a);b||!0!==r[a]||!0===x[a]||(c("</"),c(a),c(">"));a==
b&&(b=!1)},chars:function(a){b||c(v(a))}}}function n(a){if(a.nodeType===Node.ELEMENT_NODE)for(var d=a.attributes,b=0,c=d.length;b<c;b++){var e=d[b],h=e.name.toLowerCase();if("xmlns:ns1"===h||0===h.indexOf("ns1:"))a.removeAttributeNode(e),b--,c--}(d=a.firstChild)&&n(d);(d=a.nextSibling)&&n(d)}var u=e.$$minErr("$sanitize"),D=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,E=/([^\#-~ |!])/g,x=g("area,br,col,hr,img,wbr"),k=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),m=g("rp,rt"),s=e.extend({},m,k),k=e.extend({},
k,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),m=e.extend({},m,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),H=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
F=g("script,style"),r=e.extend({},x,k,m,s),w=g("background,cite,href,longdesc,src,usemap,xlink:href"),s=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),m=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),G=e.extend({},w,m,s),f;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw u("noinert");var d=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===d.length?f=d[0]:(d=a.createElement("html"),f=a.createElement("body"),d.appendChild(f),a.appendChild(d))})(y);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(d){a&&e.extend(r,H);return function(a){var c=
[];B(a,t(c,function(a,b){return!/^unsafe:/.test(d(a,b))}));return c.join("")}}];this.enableSvg=function(d){return e.isDefined(d)?(a=d,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i;return function(c,f,h){function g(a){a&&p.push(A(a))}function m(a,b){var c;p.push("<a ");e.isFunction(h)&&(h=h(a));if(e.isObject(h))for(c in h)p.push(c+'="'+h[c]+'" ');else h={};!e.isDefined(f)||
"target"in h||p.push('target="',f,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');g(b);p.push("</a>")}if(!c)return c;for(var q=c,p=[],k,n;c=q.match(d);)k=c[0],c[2]||c[4]||(k=(c[3]?"http://":"mailto:")+k),n=c.index,g(q.substr(0,n)),m(k,c[0].replace(b,"")),q=q.substring(n+c[0].length);g(q);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;
/* --- Made by justgoscha and licensed under MIT license --- */

var app = angular.module('autocomplete', []);

app.directive('autocomplete', function() {
  var index = -1;

  return {
    restrict: 'E',
    scope: {
      searchParam: '=ngModel',
      suggestions: '=data',
      onType: '=onType',
      onSelect: '=onSelect',
      autocompleteRequired: '='
    },
    controller: ['$scope', function($scope){
      // the index of the suggestions that's currently selected
      $scope.selectedIndex = -1;

      $scope.initLock = true;

      // set new index
      $scope.setIndex = function(i){
        $scope.selectedIndex = parseInt(i);
      };

      this.setIndex = function(i){
        $scope.setIndex(i);
        $scope.$apply();
      };

      $scope.getIndex = function(i){
        return $scope.selectedIndex;
      };

      // watches if the parameter filter should be changed
      var watching = true;

      // autocompleting drop down on/off
      $scope.completing = false;

      // starts autocompleting on typing in something
      $scope.$watch('searchParam', function(newValue, oldValue){

        if (oldValue === newValue || (!oldValue && $scope.initLock)) {
          return;
        }

        if(watching && typeof $scope.searchParam !== 'undefined' && $scope.searchParam !== null) {
          $scope.completing = true;
          $scope.searchFilter = $scope.searchParam;
          $scope.selectedIndex = -1;
        }

        // function thats passed to on-type attribute gets executed
        if($scope.onType)
          $scope.onType($scope.searchParam);
      });

      // for hovering over suggestions
      this.preSelect = function(suggestion){

        watching = false;

        // this line determines if it is shown
        // in the input field before it's selected:
        //$scope.searchParam = suggestion;

        $scope.$apply();
        watching = true;

      };

      $scope.preSelect = this.preSelect;

      this.preSelectOff = function(){
        watching = true;
      };

      $scope.preSelectOff = this.preSelectOff;

      // selecting a suggestion with RIGHT ARROW or ENTER
      $scope.select = function(suggestion){
        if(suggestion){
          $scope.searchParam = suggestion;
          $scope.searchFilter = suggestion;
          if($scope.onSelect)
            $scope.onSelect(suggestion);
        }
        watching = false;
        $scope.completing = false;
        setTimeout(function(){watching = true;},1000);
        $scope.setIndex(-1);
      };


    }],
    link: function(scope, element, attrs){

      setTimeout(function() {
        scope.initLock = false;
        scope.$apply();
      }, 250);

      var attr = '';

      // Default atts
      scope.attrs = {
        "placeholder": "start typing...",
        "class": "",
        "id": "",
        "inputclass": "",
        "inputid": ""
      };

      for (var a in attrs) {
        attr = a.replace('attr', '').toLowerCase();
        // add attribute overriding defaults
        // and preventing duplication
        if (a.indexOf('attr') === 0) {
          scope.attrs[attr] = attrs[a];
        }
      }

      if (attrs.clickActivation) {
        element[0].onclick = function(e){
          if(!scope.searchParam){
            setTimeout(function() {
              scope.completing = true;
              scope.$apply();
            }, 200);
          }
        };
      }

      var key = {left: 37, up: 38, right: 39, down: 40 , enter: 13, esc: 27, tab: 9};

      document.addEventListener("keydown", function(e){
        var keycode = e.keyCode || e.which;

        switch (keycode){
          case key.esc:
            // disable suggestions on escape
            scope.select();
            scope.setIndex(-1);
            scope.$apply();
            e.preventDefault();
        }
      }, true);

      document.addEventListener("blur", function(e){
        // disable suggestions on blur
        // we do a timeout to prevent hiding it before a click event is registered
        setTimeout(function() {
          scope.select();
          scope.setIndex(-1);
          scope.$apply();
        }, 150);
      }, true);

      element[0].addEventListener("keydown",function (e){
        var keycode = e.keyCode || e.which;

        var l = angular.element(this).find('li').length;

        // this allows submitting forms by pressing Enter in the autocompleted field
        if(!scope.completing || l == 0) return;

        // implementation of the up and down movement in the list of suggestions
        switch (keycode){
          case key.up:

            index = scope.getIndex()-1;
            if(index<-1){
              index = l-1;
            } else if (index >= l ){
              index = -1;
              scope.setIndex(index);
              scope.preSelectOff();
              break;
            }
            scope.setIndex(index);

            if(index!==-1)
              scope.preSelect(angular.element(angular.element(this).find('li')[index]).text());

            scope.$apply();

            break;
          case key.down:
            index = scope.getIndex()+1;
            if(index<-1){
              index = l-1;
            } else if (index >= l ){
              index = -1;
              scope.setIndex(index);
              scope.preSelectOff();
              scope.$apply();
              break;
            }
            scope.setIndex(index);

            if(index!==-1)
              scope.preSelect(angular.element(angular.element(this).find('li')[index]).text());

            break;
          case key.left:
            break;
          case key.right:
          case key.enter:
          case key.tab:

            index = scope.getIndex();
            // scope.preSelectOff();
            if(index !== -1) {
              scope.select(angular.element(angular.element(this).find('li')[index]).text());
              if(keycode == key.enter) {
                e.preventDefault();
              }
            } else {
              if(keycode == key.enter) {
                scope.select();
              }
            }
            scope.setIndex(-1);
            scope.$apply();

            break;
          case key.esc:
            // disable suggestions on escape
            scope.select();
            scope.setIndex(-1);
            scope.$apply();
            e.preventDefault();
            break;
          default:
            return;
        }

      });
    },
    template: '\
        <div class="autocomplete {{ attrs.class }}" id="{{ attrs.id }}">\
          <input\
            type="text"\
            ng-model="searchParam"\
            placeholder="{{ attrs.placeholder }}"\
            class="{{ attrs.inputclass }}"\
            id="{{ attrs.inputid }}"\
            ng-required="{{ autocompleteRequired }}" />\
          <ul ng-show="completing && (suggestions | filter:searchFilter).length > 0">\
            <li\
              suggestion\
              ng-repeat="suggestion in suggestions | filter:searchFilter | orderBy:\'toString()\' track by $index"\
              index="{{ $index }}"\
              val="{{ suggestion }}"\
              ng-class="{ active: ($index === selectedIndex) }"\
              ng-click="select(suggestion)"\
              ng-bind-html="suggestion | highlight:searchParam"></li>\
          </ul>\
        </div>'
  };
});

app.filter('highlight', ['$sce', function ($sce) {
  return function (input, searchParam) {
    if (typeof input === 'function') return '';
    if (searchParam) {
      var words = '(' +
            searchParam.split(/\ /).join(' |') + '|' +
            searchParam.split(/\ /).join('|') +
          ')',
          exp = new RegExp(words, 'gi');
      if (words.length) {
        input = input.replace(exp, "<span class=\"highlight\">$1</span>");
      }
    }
    return $sce.trustAsHtml(input);
  };
}]);

app.directive('suggestion', function(){
  return {
    restrict: 'A',
    require: '^autocomplete', // ^look for controller on parents element
    link: function(scope, element, attrs, autoCtrl){
      element.bind('mouseenter', function() {
        autoCtrl.preSelect(attrs.val);
        autoCtrl.setIndex(attrs.index);
      });

      element.bind('mouseleave', function() {
        autoCtrl.preSelectOff();
      });
    }
  };
});
;
/*! ngTagsInput v3.0.0 License: MIT */!function(){"use strict";var a={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,left:37,right:39,"delete":46,comma:188},b=9007199254740991,c=["text","email","url"],d=angular.module("ngTagsInput",[]);d.directive("tagsInput",["$timeout","$document","$window","tagsInputConfig","tiUtil",function(d,e,f,g,h){function i(a,b,c,d){var e,f,g,i={};return e=function(b){return h.safeToString(b[a.displayProperty])},f=function(b,c){b[a.displayProperty]=c},g=function(b){var d=e(b);return d&&d.length>=a.minLength&&d.length<=a.maxLength&&a.allowedTagsPattern.test(d)&&!h.findInObjectArray(i.items,b,a.keyProperty||a.displayProperty)&&c({$tag:b})},i.items=[],i.addText=function(a){var b={};return f(b,a),i.add(b)},i.add=function(c){var d=e(c);return a.replaceSpacesWithDashes&&(d=h.replaceSpacesWithDashes(d)),f(c,d),g(c)?(i.items.push(c),b.trigger("tag-added",{$tag:c})):d&&b.trigger("invalid-tag",{$tag:c}),c},i.remove=function(a){var c=i.items[a];return d({$tag:c})?(i.items.splice(a,1),i.clearSelection(),b.trigger("tag-removed",{$tag:c}),c):void 0},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a]},i.selectPrior=function(){i.select(--i.index)},i.selectNext=function(){i.select(++i.index)},i.removeSelected=function(){return i.remove(i.index)},i.clearSelection=function(){i.selected=null,i.index=-1},i.clearSelection(),i}function j(a){return-1!==c.indexOf(a)}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",text:"=?",onTagAdding:"&",onTagAdded:"&",onInvalidTag:"&",onTagRemoving:"&",onTagRemoved:"&",onTagClicked:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(a,c,d){a.events=h.simplePubSub(),g.load("tagsInput",a,c,{template:[String,"ngTagsInput/tag-item.html"],type:[String,"text",j],placeholder:[String,"Add a tag"],tabindex:[Number,null],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number,b],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],addOnPaste:[Boolean,!1],pasteSplitPattern:[RegExp,/,/],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number,0],maxTags:[Number,b],displayProperty:[String,"text"],keyProperty:[String,""],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1],spellcheck:[Boolean,!0]}),a.tagList=new i(a.options,a.events,h.handleUndefinedResult(a.onTagAdding,!0),h.handleUndefinedResult(a.onTagRemoving,!0)),this.registerAutocomplete=function(){var b=d.find("input");return{addTag:function(b){return a.tagList.add(b)},focusInput:function(){b[0].focus()},getTags:function(){return a.tagList.items},getCurrentTagText:function(){return a.newTag.text()},getOptions:function(){return a.options},on:function(b,c){return a.events.on(b,c),this}}},this.registerTagItem=function(){return{getOptions:function(){return a.options},removeTag:function(b){a.disabled||a.tagList.remove(b)}}}}],link:function(b,c,g,i){var j,k=[a.enter,a.comma,a.space,a.backspace,a["delete"],a.left,a.right],l=b.tagList,m=b.events,n=b.options,o=c.find("input"),p=["minTags","maxTags","allowLeftoverText"];j=function(){i.$setValidity("maxTags",l.items.length<=n.maxTags),i.$setValidity("minTags",l.items.length>=n.minTags),i.$setValidity("leftoverText",b.hasFocus||n.allowLeftoverText?!0:!b.newTag.text())},i.$isEmpty=function(a){return!a||!a.length},b.newTag={text:function(a){return angular.isDefined(a)?(b.text=a,void m.trigger("input-change",a)):b.text||""},invalid:null},b.track=function(a){return a[n.keyProperty||n.displayProperty]},b.$watch("tags",function(a){a?(l.items=h.makeObjectArray(a,n.displayProperty),b.tags=l.items):l.items=[]}),b.$watch("tags.length",function(){j(),i.$validate()}),g.$observe("disabled",function(a){b.disabled=a}),b.eventHandlers={input:{keydown:function(a){m.trigger("input-keydown",a)},focus:function(){b.hasFocus||(b.hasFocus=!0,m.trigger("input-focus"))},blur:function(){d(function(){var a=e.prop("activeElement"),d=a===o[0],f=c[0].contains(a);(d||!f)&&(b.hasFocus=!1,m.trigger("input-blur"))})},paste:function(a){a.getTextData=function(){var b=a.clipboardData||a.originalEvent&&a.originalEvent.clipboardData;return b?b.getData("text/plain"):f.clipboardData.getData("Text")},m.trigger("input-paste",a)}},host:{click:function(){b.disabled||o[0].focus()}},tag:{click:function(a){m.trigger("tag-clicked",{$tag:a})}}},m.on("tag-added",b.onTagAdded).on("invalid-tag",b.onInvalidTag).on("tag-removed",b.onTagRemoved).on("tag-clicked",b.onTagClicked).on("tag-added",function(){b.newTag.text("")}).on("tag-added tag-removed",function(){b.tags=l.items,i.$setDirty()}).on("invalid-tag",function(){b.newTag.invalid=!0}).on("option-change",function(a){-1!==p.indexOf(a.name)&&j()}).on("input-change",function(){l.clearSelection(),b.newTag.invalid=null}).on("input-focus",function(){c.triggerHandler("focus"),i.$setValidity("leftoverText",!0)}).on("input-blur",function(){n.addOnBlur&&!n.addFromAutocompleteOnly&&l.addText(b.newTag.text()),c.triggerHandler("blur"),j()}).on("input-keydown",function(c){var d,e,f,g,i=c.keyCode,j={};if(!h.isModifierOn(c)&&-1!==k.indexOf(i)){if(j[a.enter]=n.addOnEnter,j[a.comma]=n.addOnComma,j[a.space]=n.addOnSpace,d=!n.addFromAutocompleteOnly&&j[i],e=(i===a.backspace||i===a["delete"])&&l.selected,g=i===a.backspace&&0===b.newTag.text().length&&n.enableEditingLastTag,f=(i===a.backspace||i===a.left||i===a.right)&&0===b.newTag.text().length&&!n.enableEditingLastTag,d)l.addText(b.newTag.text());else if(g){var m;l.selectPrior(),m=l.removeSelected(),m&&b.newTag.text(m[n.displayProperty])}else e?l.removeSelected():f&&(i===a.left||i===a.backspace?l.selectPrior():i===a.right&&l.selectNext());(d||f||e||g)&&c.preventDefault()}}).on("input-paste",function(a){if(n.addOnPaste){var b=a.getTextData(),c=b.split(n.pasteSplitPattern);c.length>1&&(c.forEach(function(a){l.addText(a)}),a.preventDefault())}})}}}]),d.directive("tiTagItem",["tiUtil",function(a){return{restrict:"E",require:"^tagsInput",template:'<ng-include src="$$template"></ng-include>',scope:{data:"="},link:function(b,c,d,e){var f=e.registerTagItem(),g=f.getOptions();b.$$template=g.template,b.$$removeTagSymbol=g.removeTagSymbol,b.$getDisplayText=function(){return a.safeToString(b.data[g.displayProperty])},b.$removeTag=function(){f.removeTag(b.$index)},b.$watch("$parent.$index",function(a){b.$index=a})}}}]),d.directive("autoComplete",["$document","$timeout","$sce","$q","tagsInputConfig","tiUtil",function(b,c,d,e,f,g){function h(a,b,c){var d,f,h,i={};return h=function(){return b.tagsInput.keyProperty||b.tagsInput.displayProperty},d=function(a,c){return a.filter(function(a){return!g.findInObjectArray(c,a,h(),function(a,c){return b.tagsInput.replaceSpacesWithDashes&&(a=g.replaceSpacesWithDashes(a),c=g.replaceSpacesWithDashes(c)),g.defaultComparer(a,c)})})},i.reset=function(){f=null,i.items=[],i.visible=!1,i.index=-1,i.selected=null,i.query=null},i.show=function(){b.selectFirstMatch?i.select(0):i.selected=null,i.visible=!0},i.load=g.debounce(function(c,j){i.query=c;var k=e.when(a({$query:c}));f=k,k.then(function(a){k===f&&(a=g.makeObjectArray(a.data||a,h()),a=d(a,j),i.items=a.slice(0,b.maxResultsToShow),i.items.length>0?i.show():i.reset())})},b.debounceDelay),i.selectNext=function(){i.select(++i.index)},i.selectPrior=function(){i.select(--i.index)},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a],c.trigger("suggestion-selected",a)},i.reset(),i}function i(a,b){var c=a.find("li").eq(b),d=c.parent(),e=c.prop("offsetTop"),f=c.prop("offsetHeight"),g=d.prop("clientHeight"),h=d.prop("scrollTop");h>e?d.prop("scrollTop",e):e+f>g+h&&d.prop("scrollTop",e+f-g)}return{restrict:"E",require:"^tagsInput",scope:{source:"&"},templateUrl:"ngTagsInput/auto-complete.html",controller:["$scope","$element","$attrs",function(a,b,c){a.events=g.simplePubSub(),f.load("autoComplete",a,c,{template:[String,"ngTagsInput/auto-complete-match.html"],debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10],loadOnDownArrow:[Boolean,!1],loadOnEmpty:[Boolean,!1],loadOnFocus:[Boolean,!1],selectFirstMatch:[Boolean,!0],displayProperty:[String,""]}),a.suggestionList=new h(a.source,a.options,a.events),this.registerAutocompleteMatch=function(){return{getOptions:function(){return a.options},getQuery:function(){return a.suggestionList.query}}}}],link:function(b,c,d,e){var f,h=[a.enter,a.tab,a.escape,a.up,a.down],j=b.suggestionList,k=e.registerAutocomplete(),l=b.options,m=b.events;l.tagsInput=k.getOptions(),f=function(a){return a&&a.length>=l.minLength||!a&&l.loadOnEmpty},b.addSuggestionByIndex=function(a){j.select(a),b.addSuggestion()},b.addSuggestion=function(){var a=!1;return j.selected&&(k.addTag(angular.copy(j.selected)),j.reset(),k.focusInput(),a=!0),a},b.track=function(a){return a[l.tagsInput.keyProperty||l.tagsInput.displayProperty]},k.on("tag-added tag-removed invalid-tag input-blur",function(){j.reset()}).on("input-change",function(a){f(a)?j.load(a,k.getTags()):j.reset()}).on("input-focus",function(){var a=k.getCurrentTagText();l.loadOnFocus&&f(a)&&j.load(a,k.getTags())}).on("input-keydown",function(c){var d=c.keyCode,e=!1;if(!g.isModifierOn(c)&&-1!==h.indexOf(d))return j.visible?d===a.down?(j.selectNext(),e=!0):d===a.up?(j.selectPrior(),e=!0):d===a.escape?(j.reset(),e=!0):(d===a.enter||d===a.tab)&&(e=b.addSuggestion()):d===a.down&&b.options.loadOnDownArrow&&(j.load(k.getCurrentTagText(),k.getTags()),e=!0),e?(c.preventDefault(),c.stopImmediatePropagation(),!1):void 0}),m.on("suggestion-selected",function(a){i(c,a)})}}}]),d.directive("tiAutocompleteMatch",["$sce","tiUtil",function(a,b){return{restrict:"E",require:"^autoComplete",template:'<ng-include src="$$template"></ng-include>',scope:{data:"="},link:function(c,d,e,f){var g=f.registerAutocompleteMatch(),h=g.getOptions();c.$$template=h.template,c.$index=c.$parent.$index,c.$highlight=function(c){return h.highlightMatchedText&&(c=b.safeHighlight(c,g.getQuery())),a.trustAsHtml(c)},c.$getDisplayText=function(){return b.safeToString(c.data[h.displayProperty||h.tagsInput.displayProperty])}}}}]),d.directive("tiTranscludeAppend",function(){return function(a,b,c,d,e){e(function(a){b.append(a)})}}),d.directive("tiAutosize",["tagsInputConfig",function(a){return{restrict:"A",require:"ngModel",link:function(b,c,d,e){var f,g,h=a.getTextAutosizeThreshold();f=angular.element('<span class="input"></span>'),f.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),c.parent().append(f),g=function(a){var b,e=a;return angular.isString(e)&&0===e.length&&(e=d.placeholder),e&&(f.text(e),f.css("display",""),b=f.prop("offsetWidth"),f.css("display","none")),c.css("width",b?b+h+"px":""),a},e.$parsers.unshift(g),e.$formatters.unshift(g),d.$observe("placeholder",function(a){e.$modelValue||g(a)})}}}]),d.directive("tiBindAttrs",function(){return function(a,b,c){a.$watch(c.tiBindAttrs,function(a){angular.forEach(a,function(a,b){c.$set(b,a)})},!0)}}),d.provider("tagsInputConfig",function(){var a={},b={},c=3;this.setDefaults=function(b,c){return a[b]=c,this},this.setActiveInterpolation=function(a,c){return b[a]=c,this},this.setTextAutosizeThreshold=function(a){return c=a,this},this.$get=["$interpolate",function(d){var e={};return e[String]=function(a){return a},e[Number]=function(a){return parseInt(a,10)},e[Boolean]=function(a){return"true"===a.toLowerCase()},e[RegExp]=function(a){return new RegExp(a)},{load:function(c,f,g,h){var i=function(){return!0};f.options={},angular.forEach(h,function(h,j){var k,l,m,n,o,p;k=h[0],l=h[1],m=h[2]||i,n=e[k],o=function(){var b=a[c]&&a[c][j];return angular.isDefined(b)?b:l},p=function(a){f.options[j]=a&&m(a)?n(a):o()},b[c]&&b[c][j]?g.$observe(j,function(a){p(a),f.events.trigger("option-change",{name:j,newValue:a})}):p(g[j]&&d(g[j])(f.$parent))})},getTextAutosizeThreshold:function(){return c}}}]}),d.factory("tiUtil",["$timeout",function(a){var b={};return b.debounce=function(b,c){var d;return function(){var e=arguments;a.cancel(d),d=a(function(){b.apply(null,e)},c)}},b.makeObjectArray=function(a,b){if(!angular.isArray(a)||0===a.length||angular.isObject(a[0]))return a;var c=[];return a.forEach(function(a){var d={};d[b]=a,c.push(d)}),c},b.findInObjectArray=function(a,c,d,e){var f=null;return e=e||b.defaultComparer,a.some(function(a){return e(a[d],c[d])?(f=a,!0):void 0}),f},b.defaultComparer=function(a,c){return b.safeToString(a).toLowerCase()===b.safeToString(c).toLowerCase()},b.safeHighlight=function(a,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}if(!c)return a;a=b.encodeHTML(a),c=b.encodeHTML(c);var e=new RegExp("&[^;]+;|"+d(c),"gi");return a.replace(e,function(a){return a.toLowerCase()===c.toLowerCase()?"<em>"+a+"</em>":a})},b.safeToString=function(a){return angular.isUndefined(a)||null==a?"":a.toString().trim()},b.encodeHTML=function(a){return b.safeToString(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},b.handleUndefinedResult=function(a,b){return function(){var c=a.apply(null,arguments);return angular.isUndefined(c)?b:c}},b.replaceSpacesWithDashes=function(a){return b.safeToString(a).replace(/\s/g,"-")},b.isModifierOn=function(a){return a.shiftKey||a.ctrlKey||a.altKey||a.metaKey},b.simplePubSub=function(){var a={};return{on:function(b,c){return b.split(" ").forEach(function(b){a[b]||(a[b]=[]),a[b].push(c)}),this},trigger:function(c,d){var e=a[c]||[];return e.every(function(a){return b.handleUndefinedResult(a,!0)(d)}),this}}},b}]),d.run(["$templateCache",function(a){a.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ng-click="eventHandlers.host.click()" ti-transclude-append><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="{ selected: tag == tagList.selected }" ng-click="eventHandlers.tag.click(tag)"><ti-tag-item data="::tag"></ti-tag-item></li></ul><input class="input" autocomplete="off" ng-model="newTag.text" ng-model-options="{getterSetter: true}" ng-keydown="eventHandlers.input.keydown($event)" ng-focus="eventHandlers.input.focus($event)" ng-blur="eventHandlers.input.blur($event)" ng-paste="eventHandlers.input.paste($event)" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ng-disabled="disabled" ti-bind-attrs="{type: options.type, placeholder: options.placeholder, tabindex: options.tabindex, spellcheck: options.spellcheck}" ti-autosize></div></div>'),a.put("ngTagsInput/tag-item.html",'<span ng-bind="$getDisplayText()"></span> <a class="remove-button" ng-click="$removeTag()" ng-bind="::$$removeTagSymbol"></a>'),a.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-if="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="{selected: item == suggestionList.selected}" ng-click="addSuggestionByIndex($index)" ng-mouseenter="suggestionList.select($index)"><ti-autocomplete-match data="::item"></ti-autocomplete-match></li></ul></div>'),a.put("ngTagsInput/auto-complete-match.html",'<span ng-bind-html="$highlight($getDisplayText())"></span>')}])}();;
!function(a,b){function c(a){try{return 0!==angular.element(a).length}catch(b){return!1}}function d(a,b){if(!a||""===a||e.hasOwnProperty(a))throw"textAngular Error: A unique name is required for a Tool Definition";if(b.display&&(""===b.display||!c(b.display))||!b.display&&!b.buttontext&&!b.iconclass)throw'textAngular Error: Tool Definition for "'+a+'" does not have a valid display/iconclass/buttontext value';e[a]=b}b["true"]=a;var e={};angular.module("textAngularSetup",[]).constant("taRegisterTool",d).value("taTools",e).value("taOptions",{forceTextAngularSanitize:!0,keyMappings:[],toolbar:[["h1","h2","h3","h4","h5","h6","p","pre","quote"],["bold","italics","underline","strikeThrough","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight","justifyFull","indent","outdent"],["html","insertImage","insertLink","insertVideo","wordcount","charcount"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",disabled:"disabled",textEditor:"form-control",htmlEditor:"form-control"},defaultTagAttributes:{a:{target:""}},setup:{textEditorSetup:function(a){},htmlEditorSetup:function(a){}},defaultFileDropHandler:function(a,b){var c=new FileReader;return"image"===a.type.substring(0,5)?(c.onload=function(){""!==c.result&&b("insertImage",c.result,!0)},c.readAsDataURL(a),!0):!1}}).value("taSelectableElements",["a","img"]).value("taCustomRenderers",[{selector:"img",customAttribute:"ta-insert-video",renderLogic:function(a){var b=angular.element("<iframe></iframe>"),c=a.prop("attributes");angular.forEach(c,function(a){b.attr(a.name,a.value)}),b.attr("src",b.attr("ta-insert-video")),a.replaceWith(b)}}]).value("taTranslations",{html:{tooltip:"Toggle html / Rich Text"},heading:{tooltip:"Heading "},p:{tooltip:"Paragraph"},pre:{tooltip:"Preformatted text"},ul:{tooltip:"Unordered List"},ol:{tooltip:"Ordered List"},quote:{tooltip:"Quote/unquote selection or paragraph"},undo:{tooltip:"Undo"},redo:{tooltip:"Redo"},bold:{tooltip:"Bold"},italic:{tooltip:"Italic"},underline:{tooltip:"Underline"},strikeThrough:{tooltip:"Strikethrough"},justifyLeft:{tooltip:"Align text left"},justifyRight:{tooltip:"Align text right"},justifyFull:{tooltip:"Justify text"},justifyCenter:{tooltip:"Center"},indent:{tooltip:"Increase indent"},outdent:{tooltip:"Decrease indent"},clear:{tooltip:"Clear formatting"},insertImage:{dialogPrompt:"Please enter an image URL to insert",tooltip:"Insert image",hotkey:"the - possibly language dependent hotkey ... for some future implementation"},insertVideo:{tooltip:"Insert video",dialogPrompt:"Please enter a youtube URL to embed"},insertLink:{tooltip:"Insert / edit link",dialogPrompt:"Please enter a URL to insert"},editLink:{reLinkButton:{tooltip:"Relink"},unLinkButton:{tooltip:"Unlink"},targetToggle:{buttontext:"Open in New Window"}},wordcount:{tooltip:"Display words Count"},charcount:{tooltip:"Display characters Count"}}).factory("taToolFunctions",["$window","taTranslations",function(a,b){return{imgOnSelectAction:function(a,b,c){var d=function(){c.updateTaBindtaTextElement(),c.hidePopover()};a.preventDefault(),c.displayElements.popover.css("width","375px");var e=c.displayElements.popoverContainer;e.empty();var f=angular.element('<div class="btn-group" style="padding-right: 6px;">'),g=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');g.on("click",function(a){a.preventDefault(),b.css({width:"100%",height:""}),d()});var h=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');h.on("click",function(a){a.preventDefault(),b.css({width:"50%",height:""}),d()});var i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');i.on("click",function(a){a.preventDefault(),b.css({width:"25%",height:""}),d()});var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');j.on("click",function(a){a.preventDefault(),b.css({width:"",height:""}),d()}),f.append(g),f.append(h),f.append(i),f.append(j),e.append(f),f=angular.element('<div class="btn-group" style="padding-right: 6px;">');var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');k.on("click",function(a){a.preventDefault(),b.css("float","left"),b.css("cssFloat","left"),b.css("styleFloat","left"),d()});var l=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');l.on("click",function(a){a.preventDefault(),b.css("float","right"),b.css("cssFloat","right"),b.css("styleFloat","right"),d()});var m=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');m.on("click",function(a){a.preventDefault(),b.css("float",""),b.css("cssFloat",""),b.css("styleFloat",""),d()}),f.append(k),f.append(m),f.append(l),e.append(f),f=angular.element('<div class="btn-group">');var n=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');n.on("click",function(a){a.preventDefault(),b.remove(),d()}),f.append(n),e.append(f),c.showPopover(b),c.showResizeOverlay(b)},aOnSelectAction:function(c,d,e){c.preventDefault(),e.displayElements.popover.css("width","436px");var f=e.displayElements.popoverContainer;f.empty(),f.css("line-height","28px");var g=angular.element('<a href="'+d.attr("href")+'" target="_blank">'+d.attr("href")+"</a>");g.css({display:"inline-block","max-width":"200px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","vertical-align":"middle"}),f.append(g);var h=angular.element('<div class="btn-group pull-right">'),i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.reLinkButton.tooltip+'"><i class="fa fa-edit icon-edit"></i></button>');i.on("click",function(c){c.preventDefault();var f=a.prompt(b.insertLink.dialogPrompt,d.attr("href"));f&&""!==f&&"http://"!==f&&(d.attr("href",f),e.updateTaBindtaTextElement()),e.hidePopover()}),h.append(i);var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.unLinkButton.tooltip+'"><i class="fa fa-unlink icon-unlink"></i></button>');j.on("click",function(a){a.preventDefault(),d.replaceWith(d.contents()),e.updateTaBindtaTextElement(),e.hidePopover()}),h.append(j);var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">'+b.editLink.targetToggle.buttontext+"</button>");"_blank"===d.attr("target")&&k.addClass("active"),k.on("click",function(a){a.preventDefault(),d.attr("target","_blank"===d.attr("target")?"":"_blank"),k.toggleClass("active"),e.updateTaBindtaTextElement()}),h.append(k),f.append(h),e.showPopover(d)},extractYoutubeVideoId:function(a){var b=/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i,c=a.match(b);return c&&c[1]||null}}}]).run(["taRegisterTool","$window","taTranslations","taSelection","taToolFunctions","$sanitize","taOptions",function(a,b,c,d,e,f,g){var h={};if(f("",h),g.forceTextAngularSanitize===!0&&"taSanitize"!==h.version)throw angular.$$minErr("textAngular")("textAngularSetup","The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");a("html",{iconclass:"fa fa-code",tooltiptext:c.html.tooltip,action:function(){this.$editor().switchView()},activeState:function(){return this.$editor().showHtml}});var i=function(a){return function(){return this.$editor().queryFormatBlockState(a)}},j=function(){return this.$editor().wrapSelection("formatBlock","<"+this.name.toUpperCase()+">")};angular.forEach(["h1","h2","h3","h4","h5","h6"],function(b){a(b.toLowerCase(),{buttontext:b.toUpperCase(),tooltiptext:c.heading.tooltip+b.charAt(1),action:j,activeState:i(b.toLowerCase())})}),a("p",{buttontext:"P",tooltiptext:c.p.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<P>")},activeState:function(){return this.$editor().queryFormatBlockState("p")}}),a("pre",{buttontext:"pre",tooltiptext:c.pre.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<PRE>")},activeState:function(){return this.$editor().queryFormatBlockState("pre")}}),a("ul",{iconclass:"fa fa-list-ul",tooltiptext:c.ul.tooltip,action:function(){return this.$editor().wrapSelection("insertUnorderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertUnorderedList")}}),a("ol",{iconclass:"fa fa-list-ol",tooltiptext:c.ol.tooltip,action:function(){return this.$editor().wrapSelection("insertOrderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertOrderedList")}}),a("quote",{iconclass:"fa fa-quote-right",tooltiptext:c.quote.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),a("undo",{iconclass:"fa fa-undo",tooltiptext:c.undo.tooltip,action:function(){return this.$editor().wrapSelection("undo",null)}}),a("redo",{iconclass:"fa fa-repeat",tooltiptext:c.redo.tooltip,action:function(){return this.$editor().wrapSelection("redo",null)}}),a("bold",{iconclass:"fa fa-bold",tooltiptext:c.bold.tooltip,action:function(){return this.$editor().wrapSelection("bold",null)},activeState:function(){return this.$editor().queryCommandState("bold")},commandKeyCode:98}),a("justifyLeft",{iconclass:"fa fa-align-left",tooltiptext:c.justifyLeft.tooltip,action:function(){return this.$editor().wrapSelection("justifyLeft",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="left"===a.css("text-align")||"left"===a.attr("align")||"right"!==a.css("text-align")&&"center"!==a.css("text-align")&&"justify"!==a.css("text-align")&&!this.$editor().queryCommandState("justifyRight")&&!this.$editor().queryCommandState("justifyCenter")&&!this.$editor().queryCommandState("justifyFull")),b=b||this.$editor().queryCommandState("justifyLeft")}}),a("justifyRight",{iconclass:"fa fa-align-right",tooltiptext:c.justifyRight.tooltip,action:function(){return this.$editor().wrapSelection("justifyRight",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="right"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyRight")}}),a("justifyFull",{iconclass:"fa fa-align-justify",tooltiptext:c.justifyFull.tooltip,action:function(){return this.$editor().wrapSelection("justifyFull",null)},activeState:function(a){var b=!1;return a&&(b="justify"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyFull")}}),a("justifyCenter",{iconclass:"fa fa-align-center",tooltiptext:c.justifyCenter.tooltip,action:function(){return this.$editor().wrapSelection("justifyCenter",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="center"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyCenter")}}),a("indent",{iconclass:"fa fa-indent",tooltiptext:c.indent.tooltip,action:function(){return this.$editor().wrapSelection("indent",null)},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")},commandKeyCode:"TabKey"}),a("outdent",{iconclass:"fa fa-outdent",tooltiptext:c.outdent.tooltip,action:function(){return this.$editor().wrapSelection("outdent",null)},activeState:function(){return!1},commandKeyCode:"ShiftTabKey"}),a("italics",{iconclass:"fa fa-italic",tooltiptext:c.italic.tooltip,action:function(){return this.$editor().wrapSelection("italic",null)},activeState:function(){return this.$editor().queryCommandState("italic")},commandKeyCode:105}),a("underline",{iconclass:"fa fa-underline",tooltiptext:c.underline.tooltip,action:function(){return this.$editor().wrapSelection("underline",null)},activeState:function(){return this.$editor().queryCommandState("underline")},commandKeyCode:117}),a("strikeThrough",{iconclass:"fa fa-strikethrough",tooltiptext:c.strikeThrough.tooltip,action:function(){return this.$editor().wrapSelection("strikeThrough",null)},activeState:function(){return document.queryCommandState("strikeThrough")}}),a("clear",{iconclass:"fa fa-ban",tooltiptext:c.clear.tooltip,action:function(a,b){var c;this.$editor().wrapSelection("removeFormat",null);var e=angular.element(d.getSelectionElement()),f=function(a){a=angular.element(a);var b=a;angular.forEach(a.children(),function(a){var c=angular.element("<p></p>");c.html(angular.element(a).html()),b.after(c),b=c}),a.remove()};if(angular.forEach(e.find("ul"),f),angular.forEach(e.find("ol"),f),"li"===e[0].tagName.toLowerCase()){var g=e[0].parentNode.childNodes,h=[],i=[],j=!1;for(c=0;c<g.length;c++)g[c]===e[0]?j=!0:j?i.push(g[c]):h.push(g[c]);var k=angular.element(e[0].parentNode),l=angular.element("<p></p>");if(l.html(angular.element(e[0]).html()),0===h.length||0===i.length)0===i.length?k.after(l):k[0].parentNode.insertBefore(l[0],k[0]),0===h.length&&0===i.length?k.remove():angular.element(e[0]).remove();else{var m=angular.element("<"+k[0].tagName+"></"+k[0].tagName+">"),n=angular.element("<"+k[0].tagName+"></"+k[0].tagName+">");for(c=0;c<h.length;c++)m.append(angular.element(h[c]));for(c=0;c<i.length;c++)n.append(angular.element(i[c]));k.after(n),k.after(l),k.after(m),k.remove()}d.setSelectionToElementEnd(l[0])}var o=this.$editor(),p=function(a){a=angular.element(a),a[0]!==o.displayElements.text[0]&&a.removeAttr("class"),angular.forEach(a.children(),p)};angular.forEach(e,p),"li"!==e[0].tagName.toLowerCase()&&"ol"!==e[0].tagName.toLowerCase()&&"ul"!==e[0].tagName.toLowerCase()&&this.$editor().wrapSelection("formatBlock","default"),b()}}),a("insertImage",{iconclass:"fa fa-picture-o",tooltiptext:c.insertImage.tooltip,action:function(){var a;return a=b.prompt(c.insertImage.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a?this.$editor().wrapSelection("insertImage",a,!0):void 0},onElementSelect:{element:"img",action:e.imgOnSelectAction}}),a("insertVideo",{iconclass:"fa fa-youtube-play",tooltiptext:c.insertVideo.tooltip,action:function(){var a;if(a=b.prompt(c.insertVideo.dialogPrompt,"https://"),a&&""!==a&&"https://"!==a&&(videoId=e.extractYoutubeVideoId(a),videoId)){var d="https://www.youtube.com/embed/"+videoId,f='<img class="ta-insert-video" src="https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg" ta-insert-video="'+d+'" contenteditable="false" allowfullscreen="true" frameborder="0" />';return this.$editor().wrapSelection("insertHTML",f,!0)}},onElementSelect:{element:"img",onlyWithAttrs:["ta-insert-video"],action:e.imgOnSelectAction}}),a("insertLink",{tooltiptext:c.insertLink.tooltip,iconclass:"fa fa-link",action:function(){var a;return a=b.prompt(c.insertLink.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a?this.$editor().wrapSelection("createLink",a,!0):void 0},activeState:function(a){return a?"A"===a[0].tagName:!1},onElementSelect:{element:"a",action:e.aOnSelectAction}}),a("wordcount",{display:'<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',disabled:!0,wordcount:0,activeState:function(){var a=this.$editor().displayElements.text,b=a[0].innerHTML||"",c=0;return""!==b.replace(/\s*<[^>]*?>\s*/g,"")&&(c=b.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi,"").replace(/(<[^>]*?>\s*<[^>]*?>)/gi," ").replace(/(<[^>]*?>)/gi,"").replace(/\s+/gi," ").match(/\S+/g).length),this.wordcount=c,this.$editor().wordcount=c,!1}}),a("charcount",{display:'<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',disabled:!0,charcount:0,activeState:function(){var a=this.$editor().displayElements.text,b=a[0].innerText||a[0].textContent,c=b.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g," ").replace(/\s+$/g," ").length;return this.charcount=c,this.$editor().charcount=c,!1}})}]),/*
@license textAngular
Author : Austin Anderson
License : 2013 MIT
Version 1.4.6

See README.md or https://github.com/fraywing/textAngular/wiki for requirements and use.
*/
"undefined"!=typeof module&&"undefined"!=typeof a&&module.exports===a&&(module.exports="textAngular"),function(){"use strict";var b={ie:function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}(),webkit:/AppleWebKit\/([\d.]+)/i.test(navigator.userAgent)},c=!1;b.webkit&&(document.addEventListener("mousedown",function(a){var b=a||window.event,d=b.target;if(c&&null!==d){for(var e=!1,f=d;null!==f&&"html"!==f.tagName.toLowerCase()&&!e;)e="true"===f.contentEditable,f=f.parentNode;e||(document.getElementById("textAngular-editableFix-010203040506070809").setSelectionRange(0,0),d.focus(),d.select&&d.select())}c=!1},!1),angular.element(document).ready(function(){angular.element(document.body).append(angular.element('<input id="textAngular-editableFix-010203040506070809" class="ta-hidden-input" aria-hidden="true" unselectable="on" tabIndex="-1">'))}));var d=/^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i,f=/^(ul|li|ol)$/i,g=/^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video|li)$/i;String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var h,i,j,k,l,m;if(b.ie>8||void 0===b.ie){for(var n=document.styleSheets,o=0;o<n.length;o++)if((0===n[o].media.length||n[o].media.mediaText.match(/(all|screen)/gi))&&n[o].href&&n[o].href.match(/textangular\.(min\.|)css/gi)){h=n[o];break}h||(h=function(){var a=document.createElement("style");return b.webkit&&a.appendChild(document.createTextNode("")),document.getElementsByTagName("head")[0].appendChild(a),a.sheet}()),i=function(a,b){return k(h,a,b)},k=function(a,b,c){var d,e;return a.cssRules?d=Math.max(a.cssRules.length-1,0):a.rules&&(d=Math.max(a.rules.length-1,0)),a.insertRule?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d),h.rules?e=h.rules[d]:h.cssRules&&(e=h.cssRules[d]),e},m=function(a,b){var c,d;for(c=0;c<b.length;c++)if(b[c].cssText===a.cssText){d=c;break}return d},j=function(a){l(h,a)},l=function(a,b){var c=a.cssRules||a.rules;if(c&&0!==c.length){var d=m(b,c);a.removeRule?a.removeRule(d):a.deleteRule(d)}}}angular.module("textAngular.factories",[]).factory("taBrowserTag",[function(){return function(a){return a?""===a?void 0===b.ie?"div":b.ie<=8?"P":"p":b.ie<=8?a.toUpperCase():a:b.ie<=8?"P":"p"}}]).factory("taApplyCustomRenderers",["taCustomRenderers","taDOM",function(a,b){return function(c){var d=angular.element("<div></div>");return d[0].innerHTML=c,angular.forEach(a,function(a){var c=[];a.selector&&""!==a.selector?c=d.find(a.selector):a.customAttribute&&""!==a.customAttribute&&(c=b.getByAttribute(d,a.customAttribute)),angular.forEach(c,function(b){b=angular.element(b),a.selector&&""!==a.selector&&a.customAttribute&&""!==a.customAttribute?void 0!==b.attr(a.customAttribute)&&a.renderLogic(b):a.renderLogic(b)})}),d[0].innerHTML}}]).factory("taFixChrome",function(){var a=function(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var b,c,d,e=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,f="",g=0;b=e.exec(a);)c=b[3]||b[4],c&&c.match(/line-height: 1.[0-9]{3,12};|color: inherit; line-height: 1.1;/i)&&(c=c.replace(/( |)font-family: inherit;|( |)line-height: 1.[0-9]{3,12};|( |)color: inherit;/gi,""),d="<"+b[1].trim(),c.trim().length>0&&(d+=" style="+b[2].substring(0,1)+c+b[2].substring(0,1)),d+=b[5].trim()+">",f+=a.substring(g,b.index)+d,g=b.index+b[0].length);return f+=a.substring(g),g>0?f.replace(/<span\s?>(.*?)<\/span>(<br(\/|)>|)/gi,"$1"):a};return a}).factory("taSanitize",["$sanitize",function(a){function b(a,b){for(var c,d=0,e=0,f=/<[^>]*>/gi;c=f.exec(a);)if(e=c.index,"/"===c[0].substr(1,1)){if(0===d)break;d--}else d++;return b+a.substring(0,e)+angular.element(b)[0].outerHTML.substring(b.length)+a.substring(e)}function c(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var d,f,g,h,i,k,l=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,m="",n="",o=0;f=l.exec(a);){h=f[3]||f[4];var p=new RegExp(j,"i");if(angular.isString(h)&&p.test(h)){i="";for(var q=new RegExp(j,"ig");g=q.exec(h);)for(d=0;d<e.length;d++)g[2*d+2]&&(i+="<"+e[d].tag+">");k=c(a.substring(o,f.index)),n+=m.length>0?b(k,m):k,h=h.replace(new RegExp(j,"ig"),""),n+="<"+f[1].trim(),h.length>0&&(n+=' style="'+h+'"'),n+=f[5]+">",o=f.index+f[0].length,m=i}}return n+=m.length>0?b(a.substring(o),m):a.substring(o)}function d(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var b,c=/<([^>\/]+?)align=("([^"]+)"|'([^']+)')([^>]*)>/gi,d="",e=0;b=c.exec(a);){d+=a.substring(e,b.index),e=b.index+b[0].length;var f="<"+b[1]+b[5];/style=("([^"]+)"|'([^']+)')/gi.test(f)?f=f.replace(/style=("([^"]+)"|'([^']+)')/i,'style="$2$3 text-align:'+(b[3]||b[4])+';"'):f+=' style="text-align:'+(b[3]||b[4])+';"',f+=">",d+=f}return d+a.substring(e)}for(var e=[{property:"font-weight",values:["bold"],tag:"b"},{property:"font-style",values:["italic"],tag:"i"}],f=[],g=0;g<e.length;g++){for(var h="("+e[g].property+":\\s*(",i=0;i<e[g].values.length;i++)i>0&&(h+="|"),h+=e[g].values[i];h+=");)",f.push(h)}var j="("+f.join("|")+")";return function(b,e,f){if(!f)try{b=c(b)}catch(g){}b=d(b);var h;try{h=a(b),f&&(h=b)}catch(g){h=e||""}var i,j=h.match(/(<pre[^>]*>.*?<\/pre[^>]*>)/gi),k=h.replace(/(&#(9|10);)*/gi,""),l=/<pre[^>]*>.*?<\/pre[^>]*>/gi,m=0,n=0;for(h="";null!==(i=l.exec(k))&&m<j.length;)h+=k.substring(n,i.index)+j[m],n=i.index+i[0].length,m++;return h+k.substring(n)}}]).factory("taToolExecuteAction",["$q","$log",function(a,b){return function(c){void 0!==c&&(this.$editor=function(){return c});var d,e=a.defer(),f=e.promise,g=this.$editor();try{d=this.action(e,g.startAction()),f["finally"](function(){g.endAction.call(g)})}catch(h){b.error(h)}(d||void 0===d)&&e.resolve()}}]),angular.module("textAngular.DOM",["textAngular.factories"]).factory("taExecCommand",["taSelection","taBrowserTag","$document",function(a,b,c){var e=function(b,c){var d,e,f=b.find("li");for(e=f.length-1;e>=0;e--)d=angular.element("<"+c+">"+f[e].innerHTML+"</"+c+">"),b.after(d);b.remove(),a.setSelectionToElementEnd(d[0])},g=function(b){/(<br(|\/)>)$/i.test(b.innerHTML.trim())?a.setSelectionBeforeElement(angular.element(b).find("br")[0]):a.setSelectionToElementEnd(b)},h=function(a,b){var c=angular.element("<"+b+">"+a[0].innerHTML+"</"+b+">");a.after(c),a.remove(),g(c.find("li")[0])},i=function(a,c,d){for(var e="",f=0;f<a.length;f++)e+="<"+b("li")+">"+a[f].innerHTML+"</"+b("li")+">";var h=angular.element("<"+d+">"+e+"</"+d+">");c.after(h),c.remove(),g(h.find("li")[0])};return function(g,j){return g=b(g),function(k,l,m,n){var o,p,q,r,s,t,u,v=angular.element("<"+g+">");try{u=a.getSelectionElement()}catch(w){}var x=angular.element(u);if(void 0!==u){var y=u.tagName.toLowerCase();if("insertorderedlist"===k.toLowerCase()||"insertunorderedlist"===k.toLowerCase()){var z=b("insertorderedlist"===k.toLowerCase()?"ol":"ul");if(y===z)return e(x,g);if("li"===y&&x.parent()[0].tagName.toLowerCase()===z&&1===x.parent().children().length)return e(x.parent(),g);if("li"===y&&x.parent()[0].tagName.toLowerCase()!==z&&1===x.parent().children().length)return h(x.parent(),z);if(y.match(d)&&!x.hasClass("ta-bind")){if("ol"===y||"ul"===y)return h(x,z);var A=!1;return angular.forEach(x.children(),function(a){a.tagName.match(d)&&(A=!0)}),A?i(x.children(),x,z):i([angular.element("<div>"+u.innerHTML+"</div>")[0]],x,z)}if(y.match(d)){if(r=a.getOnlySelectedElements(),0===r.length)p=angular.element("<"+z+"><li>"+u.innerHTML+"</li></"+z+">"),x.html(""),x.append(p);else{if(1===r.length&&("ol"===r[0].tagName.toLowerCase()||"ul"===r[0].tagName.toLowerCase()))return r[0].tagName.toLowerCase()===z?e(angular.element(r[0]),g):h(angular.element(r[0]),z);q="";var B=[];for(o=0;o<r.length;o++)if(3!==r[o].nodeType){var C=angular.element(r[o]);if("li"===r[o].tagName.toLowerCase())continue;q+="ol"===r[o].tagName.toLowerCase()||"ul"===r[o].tagName.toLowerCase()?C[0].innerHTML:"span"!==r[o].tagName.toLowerCase()||"ol"!==r[o].childNodes[0].tagName.toLowerCase()&&"ul"!==r[o].childNodes[0].tagName.toLowerCase()?"<"+b("li")+">"+C[0].innerHTML+"</"+b("li")+">":C[0].childNodes[0].innerHTML,B.unshift(C)}p=angular.element("<"+z+">"+q+"</"+z+">"),B.pop().replaceWith(p),angular.forEach(B,function(a){a.remove()})}return void a.setSelectionToElementEnd(p[0])}}else{if("formatblock"===k.toLowerCase()){for(t=m.toLowerCase().replace(/[<>]/gi,""),"default"===t.trim()&&(t=g,m="<"+g+">"),p="li"===y?x.parent():x;!p[0].tagName||!p[0].tagName.match(d)&&!p.parent().attr("contenteditable");)p=p.parent(),y=(p[0].tagName||"").toLowerCase();if(y===t){r=p.children();var D=!1;for(o=0;o<r.length;o++)D=D||r[o].tagName.match(d);D?(p.after(r),s=p.next(),p.remove(),p=s):(v.append(p[0].childNodes),p.after(v),p.remove(),p=v)}else if(p.parent()[0].tagName.toLowerCase()!==t||p.parent().hasClass("ta-bind"))if(y.match(f))p.wrap(m);else{for(r=a.getOnlySelectedElements(),0===r.length&&(r=[p[0]]),o=0;o<r.length;o++)if(3===r[o].nodeType||!r[o].tagName.match(d))for(;3===r[o].nodeType||!r[o].tagName||!r[o].tagName.match(d);)r[o]=r[o].parentNode;if(angular.element(r[0]).hasClass("ta-bind"))p=angular.element(m),p[0].innerHTML=r[0].innerHTML,r[0].innerHTML=p[0].outerHTML;else if("blockquote"===t){for(q="",o=0;o<r.length;o++)q+=r[o].outerHTML;for(p=angular.element(m),p[0].innerHTML=q,r[0].parentNode.insertBefore(p[0],r[0]),o=r.length-1;o>=0;o--)r[o].parentNode&&r[o].parentNode.removeChild(r[o])}else for(o=0;o<r.length;o++)p=angular.element(m),p[0].innerHTML=r[o].innerHTML,r[o].parentNode.insertBefore(p[0],r[o]),r[o].parentNode.removeChild(r[o])}else{var E=p.parent(),F=E.contents();for(o=0;o<F.length;o++)E.parent().hasClass("ta-bind")&&3===F[o].nodeType&&(v=angular.element("<"+g+">"),v[0].innerHTML=F[o].outerHTML,F[o]=v[0]),E.parent()[0].insertBefore(F[o],E[0]);E.remove()}return void a.setSelectionToElementEnd(p[0])}if("createlink"===k.toLowerCase()){var G='<a href="'+m+'" target="'+(n.a.target?n.a.target:"")+'">',H="</a>",I=a.getSelection();if(I.collapsed)a.insertHtml(G+m+H,j);else if(rangy.getSelection().getRangeAt(0).canSurroundContents()){var J=angular.element(G+H)[0];rangy.getSelection().getRangeAt(0).surroundContents(J)}return}if("inserthtml"===k.toLowerCase())return void a.insertHtml(m,j)}}try{c[0].execCommand(k,l,m)}catch(w){}}}}]).service("taSelection",["$window","$document","taDOM",function(a,b,c){var e=b[0],f=a.rangy,h=function(a,b){return a.tagName&&a.tagName.match(/^br$/i)&&0===b&&!a.previousSibling?{element:a.parentNode,offset:0}:{element:a,offset:b}},i={getSelection:function(){var a=f.getSelection().getRangeAt(0),b=a.commonAncestorContainer,c={start:h(a.startContainer,a.startOffset),end:h(a.endContainer,a.endOffset),collapsed:a.collapsed};return b=3===b.nodeType?b.parentNode:b,b.parentNode===c.start.element||b.parentNode===c.end.element?c.container=b.parentNode:c.container=b,c},getOnlySelectedElements:function(){var a=f.getSelection().getRangeAt(0),b=a.commonAncestorContainer;return b=3===b.nodeType?b.parentNode:b,a.getNodes([1],function(a){return a.parentNode===b})},getSelectionElement:function(){return i.getSelection().container},setSelection:function(a,b,c){var d=f.createRange();d.setStart(a,b),d.setEnd(a,c),f.getSelection().setSingleRange(d)},setSelectionBeforeElement:function(a){var b=f.createRange();b.selectNode(a),b.collapse(!0),f.getSelection().setSingleRange(b)},setSelectionAfterElement:function(a){var b=f.createRange();b.selectNode(a),b.collapse(!1),f.getSelection().setSingleRange(b)},setSelectionToElementStart:function(a){var b=f.createRange();b.selectNodeContents(a),b.collapse(!0),f.getSelection().setSingleRange(b)},setSelectionToElementEnd:function(a){var b=f.createRange();b.selectNodeContents(a),b.collapse(!1),a.childNodes&&a.childNodes[a.childNodes.length-1]&&"br"===a.childNodes[a.childNodes.length-1].nodeName&&(b.startOffset=b.endOffset=b.startOffset-1),f.getSelection().setSingleRange(b)},insertHtml:function(a,b){var h,j,k,l,m,n,o,p=angular.element("<div>"+a+"</div>"),q=f.getSelection().getRangeAt(0),r=e.createDocumentFragment(),s=p[0].childNodes,t=!0;if(s.length>0){for(l=[],k=0;k<s.length;k++)"p"===s[k].nodeName.toLowerCase()&&""===s[k].innerHTML.trim()||3===s[k].nodeType&&""===s[k].nodeValue.trim()||(t=t&&!d.test(s[k].nodeName),l.push(s[k]));for(var u=0;u<l.length;u++)n=r.appendChild(l[u]);!t&&q.collapsed&&/^(|<br(|\/)>)$/i.test(q.startContainer.innerHTML)&&q.selectNode(q.startContainer)}else t=!0,n=r=e.createTextNode(a);if(t)q.deleteContents();else if(q.collapsed&&q.startContainer!==b)if(q.startContainer.innerHTML&&q.startContainer.innerHTML.match(/^<[^>]*>$/i))h=q.startContainer,1===q.startOffset?(q.setStartAfter(h),q.setEndAfter(h)):(q.setStartBefore(h),q.setEndBefore(h));else{if(3===q.startContainer.nodeType&&q.startContainer.parentNode!==b)for(h=q.startContainer.parentNode,j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,q.startContainer,q.startOffset);!g.test(h.nodeName);){angular.element(h).after(j),h=h.parentNode;var v=j;j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,v)}else h=q.startContainer,j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,void 0,void 0,q.startOffset);if(angular.element(h).after(j),q.setStartAfter(h),q.setEndAfter(h),/^(|<br(|\/)>)$/i.test(h.innerHTML.trim())&&(q.setStartBefore(h),q.setEndBefore(h),angular.element(h).remove()),/^(|<br(|\/)>)$/i.test(j.innerHTML.trim())&&angular.element(j).remove(),"li"===h.nodeName.toLowerCase()){for(o=e.createDocumentFragment(),m=0;m<r.childNodes.length;m++)p=angular.element("<li>"),c.transferChildNodes(r.childNodes[m],p[0]),c.transferNodeAttributes(r.childNodes[m],p[0]),o.appendChild(p[0]);r=o,n&&(n=r.childNodes[r.childNodes.length-1],n=n.childNodes[n.childNodes.length-1])}}else q.deleteContents();q.insertNode(r),n&&i.setSelectionToElementEnd(n)}};return i}]).service("taDOM",function(){var a={getByAttribute:function(b,c){var d=[],e=b.children();return e.length&&angular.forEach(e,function(b){d=d.concat(a.getByAttribute(angular.element(b),c))}),void 0!==b.attr(c)&&d.push(b),d},transferChildNodes:function(a,b){for(b.innerHTML="";a.childNodes.length>0;)b.appendChild(a.childNodes[0]);return b},splitNodes:function(b,c,d,e,f,g){if(!e&&isNaN(g))throw new Error("taDOM.splitNodes requires a splitNode or splitIndex");for(var h=document.createDocumentFragment(),i=document.createDocumentFragment(),j=0;b.length>0&&(isNaN(g)||g!==j)&&b[0]!==e;)h.appendChild(b[0]),j++;for(!isNaN(f)&&f>=0&&b[0]&&(h.appendChild(document.createTextNode(b[0].nodeValue.substring(0,f))),b[0].nodeValue=b[0].nodeValue.substring(f));b.length>0;)i.appendChild(b[0]);a.transferChildNodes(h,c),a.transferChildNodes(i,d)},transferNodeAttributes:function(a,b){for(var c=0;c<a.attributes.length;c++)b.setAttribute(a.attributes[c].name,a.attributes[c].value);return b}};return a}),angular.module("textAngular.validators",[]).directive("taMaxText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMaxText));if(isNaN(e))throw"Max text must be an integer";c.$observe("taMaxText",function(a){if(e=parseInt(a),isNaN(e))throw"Max text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMaxText=function(a){var b=angular.element("<div/>");return b.html(a),b.text().length<=e}}}}).directive("taMinText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMinText));if(isNaN(e))throw"Min text must be an integer";c.$observe("taMinText",function(a){if(e=parseInt(a),isNaN(e))throw"Min text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMinText=function(a){var b=angular.element("<div/>");return b.html(a),!b.text().length||b.text().length>=e}}}}),angular.module("textAngular.taBind",["textAngular.factories","textAngular.DOM"]).service("_taBlankTest",[function(){var a=/<(a|abbr|acronym|bdi|bdo|big|cite|code|del|dfn|img|ins|kbd|label|map|mark|q|ruby|rp|rt|s|samp|time|tt|var)[^>]*(>|$)/i;return function(b){return function(c){if(!c)return!0;var d,e=/(^[^<]|>)[^<]/i.exec(c);return e?d=e.index:(c=c.toString().replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,""),d=c.indexOf(">")),c=c.trim().substring(d,d+100),/^[^<>]+$/i.test(c)?!1:0===c.length||c===b||/^>(\s|&nbsp;)*<\/[^>]+>$/gi.test(c)?!0:/>\s*[^\s<]/i.test(c)||a.test(c)?!1:!0}}}]).directive("taButton",[function(){return{link:function(a,b,c){b.attr("unselectable","on"),b.on("mousedown",function(a,b){return b&&angular.extend(a,b),a.preventDefault(),!1})}}}]).directive("taBind",["taSanitize","$timeout","$window","$document","taFixChrome","taBrowserTag","taSelection","taSelectableElements","taApplyCustomRenderers","taOptions","_taBlankTest","$parse","taDOM","textAngularManager",function(a,e,f,h,k,l,m,n,o,q,r,s,t,u){return{priority:2,require:["ngModel","?ngModelOptions"],link:function(l,v,w,x){function y(a){var b;return R.forEach(function(c){if(c.keyCode===a.keyCode){var d=(a.metaKey?O:0)+(a.ctrlKey?N:0)+(a.shiftKey?Q:0)+(a.altKey?P:0);if(c.forbiddenModifiers&d)return;c.mustHaveModifiers.every(function(a){return d&a})&&(b=c.specialKey)}}),b}var z,A,B,C,D=x[0],E=x[1]||{},F=void 0!==v.attr("contenteditable")&&v.attr("contenteditable"),G=F||"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase(),H=!1,I=!1,J=!1,K=w.taUnsafeSanitizer||q.disableSanitizer,L=/^(9|19|20|27|33|34|35|36|37|38|39|40|45|112|113|114|115|116|117|118|119|120|121|122|123|144|145)$/i,M=/^(8|13|32|46|59|61|107|109|173|186|187|188|189|190|191|192|219|220|221|222)$/i,N=1,O=2,P=4,Q=8,R=[{specialKey:"UndoKey",forbiddenModifiers:P+Q,mustHaveModifiers:[O+N],keyCode:90},{specialKey:"RedoKey",forbiddenModifiers:P,mustHaveModifiers:[O+N,Q],keyCode:90},{specialKey:"RedoKey",forbiddenModifiers:P+Q,mustHaveModifiers:[O+N],keyCode:89},{specialKey:"TabKey",forbiddenModifiers:O+Q+P+N,mustHaveModifiers:[],keyCode:9},{specialKey:"ShiftTabKey",forbiddenModifiers:O+P+N,mustHaveModifiers:[Q],keyCode:9}];void 0===w.taDefaultWrap&&(w.taDefaultWrap="p"),""===w.taDefaultWrap?(B="",C=void 0===b.ie?"<div><br></div>":b.ie>=11?"<p><br></p>":b.ie<=8?"<P>&nbsp;</P>":"<p>&nbsp;</p>"):(B=void 0===b.ie||b.ie>=11?"<"+w.taDefaultWrap+"><br></"+w.taDefaultWrap+">":b.ie<=8?"<"+w.taDefaultWrap.toUpperCase()+"></"+w.taDefaultWrap.toUpperCase()+">":"<"+w.taDefaultWrap+"></"+w.taDefaultWrap+">",C=void 0===b.ie||b.ie>=11?"<"+w.taDefaultWrap+"><br></"+w.taDefaultWrap+">":b.ie<=8?"<"+w.taDefaultWrap.toUpperCase()+">&nbsp;</"+w.taDefaultWrap.toUpperCase()+">":"<"+w.taDefaultWrap+">&nbsp;</"+w.taDefaultWrap+">"),E.$options||(E.$options={});var S=r(C),T=function(a){if(S(a))return a;var b=angular.element("<div>"+a+"</div>");if(0===b.children().length)a="<"+w.taDefaultWrap+">"+a+"</"+w.taDefaultWrap+">";else{var c,e=b[0].childNodes,f=!1;for(c=0;c<e.length&&!(f=e[c].nodeName.toLowerCase().match(d));c++);if(f)for(a="",c=0;c<e.length;c++){var g=e[c],h=g.nodeName.toLowerCase();if("#comment"===h)a+="<!--"+g.nodeValue+"-->";else if("#text"===h){var i=g.textContent;a+=i.trim()?"<"+w.taDefaultWrap+">"+i+"</"+w.taDefaultWrap+">":i}else if(h.match(d))a+=g.outerHTML;else{var j=g.outerHTML||g.nodeValue;a+=""!==j.trim()?"<"+w.taDefaultWrap+">"+j+"</"+w.taDefaultWrap+">":j}}else a="<"+w.taDefaultWrap+">"+a+"</"+w.taDefaultWrap+">"}return a};w.taPaste&&(A=s(w.taPaste)),v.addClass("ta-bind");var U;l["$undoManager"+(w.id||"")]=D.$undoManager={_stack:[],_index:0,_max:1e3,push:function(a){return"undefined"==typeof a||null===a||"undefined"!=typeof this.current()&&null!==this.current()&&a===this.current()?a:(this._index<this._stack.length-1&&(this._stack=this._stack.slice(0,this._index+1)),this._stack.push(a),U&&e.cancel(U),this._stack.length>this._max&&this._stack.shift(),this._index=this._stack.length-1,a)},undo:function(){return this.setToIndex(this._index-1)},redo:function(){return this.setToIndex(this._index+1)},setToIndex:function(a){return 0>a||a>this._stack.length-1?void 0:(this._index=a,this.current())},current:function(){return this._stack[this._index]}};var V,W=l["$undoTaBind"+(w.id||"")]=function(){if(!H&&F){var a=D.$undoManager.undo();"undefined"!=typeof a&&null!==a&&(ka(a),Z(a,!1),V&&e.cancel(V),V=e(function(){v[0].focus(),m.setSelectionToElementEnd(v[0])},1))}},X=l["$redoTaBind"+(w.id||"")]=function(){if(!H&&F){var a=D.$undoManager.redo();"undefined"!=typeof a&&null!==a&&(ka(a),Z(a,!1),V&&e.cancel(V),V=e(function(){v[0].focus(),m.setSelectionToElementEnd(v[0])},1))}},Y=function(){if(F)return v[0].innerHTML;if(G)return v.val();throw"textAngular Error: attempting to update non-editable taBind"},Z=function(a,b,c){J=c||!1,("undefined"==typeof b||null===b)&&(b=!0&&F),("undefined"==typeof a||null===a)&&(a=Y()),S(a)?(""!==D.$viewValue&&D.$setViewValue(""),b&&""!==D.$undoManager.current()&&D.$undoManager.push("")):(ja(),D.$viewValue!==a&&(D.$setViewValue(a),b&&D.$undoManager.push(a))),D.$render()};l["updateTaBind"+(w.id||"")]=function(){H||Z(void 0,void 0,!0)};var $=function(b){return D.$oldViewValue=a(k(b),D.$oldViewValue,K)};if(v.attr("required")&&(D.$validators.required=function(a,b){return!S(a||b)}),D.$parsers.push($),D.$parsers.unshift(T),D.$formatters.push($),D.$formatters.unshift(T),D.$formatters.unshift(function(a){return D.$undoManager.push(a||"")}),G)if(l.events={},F){var _=!1,aa=function(b){if(b&&b.trim().length){if(b.match(/class=["']*Mso(Normal|List)/i)){var c=b.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);c=c?c[1]:b,c=c.replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/class=(["']|)MsoNormal(["']|)/gi,"");var d=angular.element("<div>"+c+"</div>"),f=angular.element("<div></div>"),g={element:null,lastIndent:[],lastLi:null,isUl:!1};g.lastIndent.peek=function(){var a=this.length;return a>0?this[a-1]:void 0};for(var h=function(a){g.isUl=a,g.element=angular.element(a?"<ul>":"<ol>"),g.lastIndent=[],g.lastIndent.peek=function(){var a=this.length;return a>0?this[a-1]:void 0},g.lastLevelMatch=null},i=0;i<=d[0].childNodes.length;i++)if(d[0].childNodes[i]&&"#text"!==d[0].childNodes[i].nodeName&&"p"===d[0].childNodes[i].tagName.toLowerCase()){var j=angular.element(d[0].childNodes[i]),k=(j.attr("class")||"").match(/MsoList(Bullet|Number|Paragraph)(CxSp(First|Middle|Last)|)/i);if(k){if(j[0].childNodes.length<2||j[0].childNodes[1].childNodes.length<1)continue;var n="bullet"===k[1].toLowerCase()||"number"!==k[1].toLowerCase()&&!(/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(j[0].childNodes[1].innerHTML)||/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(j[0].childNodes[1].childNodes[0].innerHTML)),o=(j.attr("style")||"").match(/margin-left:([\-\.0-9]*)/i),p=parseFloat(o?o[1]:0),q=(j.attr("style")||"").match(/mso-list:l([0-9]+) level([0-9]+) lfo[0-9+]($|;)/i);if(q&&q[2]&&(p=parseInt(q[2])),q&&(!g.lastLevelMatch||q[1]!==g.lastLevelMatch[1])||!k[3]||"first"===k[3].toLowerCase()||null===g.lastIndent.peek()||g.isUl!==n&&g.lastIndent.peek()===p)h(n),f.append(g.element);else if(null!=g.lastIndent.peek()&&g.lastIndent.peek()<p)g.element=angular.element(n?"<ul>":"<ol>"),g.lastLi.append(g.element);else if(null!=g.lastIndent.peek()&&g.lastIndent.peek()>p){for(;null!=g.lastIndent.peek()&&g.lastIndent.peek()>p;)if("li"!==g.element.parent()[0].tagName.toLowerCase()){if(!/[uo]l/i.test(g.element.parent()[0].tagName.toLowerCase()))break;g.element=g.element.parent(),g.lastIndent.pop()}else g.element=g.element.parent();g.isUl="ul"===g.element[0].tagName.toLowerCase(),n!==g.isUl&&(h(n),f.append(g.element))}g.lastLevelMatch=q,p!==g.lastIndent.peek()&&g.lastIndent.push(p),g.lastLi=angular.element("<li>"),g.element.append(g.lastLi),g.lastLi.html(j.html().replace(/<!(--|)\[if !supportLists\](--|)>[\s\S]*?<!(--|)\[endif\](--|)>/gi,"")),j.remove()}else h(!1),f.append(j)}var r=function(a){a=angular.element(a);for(var b=a[0].childNodes.length-1;b>=0;b--)a.after(a[0].childNodes[b]);a.remove()};angular.forEach(f.find("span"),function(a){a.removeAttribute("lang"),a.attributes.length<=0&&r(a)}),angular.forEach(f.find("font"),r),b=f.html()}else{if(b=b.replace(/<(|\/)meta[^>]*?>/gi,""),b.match(/<[^>]*?(ta-bind)[^>]*?>/)){if(b.match(/<[^>]*?(text-angular)[^>]*?>/)){var s=angular.element("<div>"+b+"</div>");s.find("textarea").remove();for(var u=t.getByAttribute(s,"ta-bind"),w=0;w<u.length;w++){for(var x=u[w][0].parentNode.parentNode,y=0;y<u[w][0].childNodes.length;y++)x.parentNode.insertBefore(u[w][0].childNodes[y],x);x.parentNode.removeChild(x)}b=s.html().replace('<br class="Apple-interchange-newline">',"")}}else b.match(/^<span/)&&(b.match(/<span class=(\"Apple-converted-space\"|\'Apple-converted-space\')>.<\/span>/gi)||(b=b.replace(/<(|\/)span[^>]*?>/gi,"")));b=b.replace(/<br class="Apple-interchange-newline"[^>]*?>/gi,"").replace(/<span class="Apple-converted-space">( |&nbsp;)<\/span>/gi,"&nbsp;")}/<li(\s.*)?>/i.test(b)&&/(<ul(\s.*)?>|<ol(\s.*)?>).*<li(\s.*)?>/i.test(b)===!1&&(b=b.replace(/<li(\s.*)?>.*<\/li(\s.*)?>/i,"<ul>$&</ul>")),b=b.replace(/^[ |\u00A0]+/gm,function(a){for(var b="",c=0;c<a.length;c++)b+="&nbsp;";return b}).replace(/\n|\r\n|\r/g,"<br />").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),A&&(b=A(l,{$html:b})||b),b=a(b,"",K),m.insertHtml(b,v[0]),e(function(){D.$setViewValue(Y()),_=!1,v.removeClass("processing-paste")},0)}else _=!1,v.removeClass("processing-paste")};v.on("paste",l.events.paste=function(a,b){if(b&&angular.extend(a,b),H||_)return a.stopPropagation(),a.preventDefault(),!1;_=!0,v.addClass("processing-paste");var c,d=(a.originalEvent||a).clipboardData;if(d&&d.getData&&d.types.length>0){for(var g="",i=0;i<d.types.length;i++)g+=" "+d.types[i];return/text\/html/i.test(g)?c=d.getData("text/html"):/text\/plain/i.test(g)&&(c=d.getData("text/plain")),aa(c),a.stopPropagation(),a.preventDefault(),!1}var j=f.rangy.saveSelection(),k=angular.element('<div class="ta-hidden-input" contenteditable="true"></div>');h.find("body").append(k),k[0].focus(),e(function(){f.rangy.restoreSelection(j),aa(k[0].innerHTML),v[0].focus(),k.remove()},0)}),v.on("cut",l.events.cut=function(a){H?a.preventDefault():e(function(){D.$setViewValue(Y())},0)}),v.on("keydown",l.events.keydown=function(a,b){b&&angular.extend(a,b),a.specialKey=y(a);var c;if(q.keyMappings.forEach(function(b){a.specialKey===b.commandKeyCode&&(a.specialKey=void 0),b.testForKey(a)&&(c=b.commandKeyCode),("UndoKey"===b.commandKeyCode||"RedoKey"===b.commandKeyCode)&&(b.enablePropagation||a.preventDefault())}),"undefined"!=typeof c&&(a.specialKey=c),"undefined"==typeof a.specialKey||"UndoKey"===a.specialKey&&"RedoKey"===a.specialKey||(a.preventDefault(),u.sendKeyCommand(l,a)),!H&&("UndoKey"===a.specialKey&&(W(),a.preventDefault()),"RedoKey"===a.specialKey&&(X(),a.preventDefault()),13===a.keyCode&&!a.shiftKey)){var d,e=m.getSelectionElement();if(!e.tagName.match(g))return;var f=angular.element(B);if(/^<br(|\/)>$/i.test(e.innerHTML.trim())&&"blockquote"===e.parentNode.tagName.toLowerCase()&&!e.nextSibling){d=angular.element(e);var h=d.parent();h.after(f),d.remove(),0===h.children().length&&h.remove(),m.setSelectionToElementStart(f[0]),a.preventDefault()}else/^<[^>]+><br(|\/)><\/[^>]+>$/i.test(e.innerHTML.trim())&&"blockquote"===e.tagName.toLowerCase()&&(d=angular.element(e),d.after(f),d.remove(),m.setSelectionToElementStart(f[0]),a.preventDefault())}});var ba;if(v.on("keyup",l.events.keyup=function(a,b){if(b&&angular.extend(a,b),9===a.keyCode){var c=m.getSelection();return void(c.start.element===v[0]&&v.children().length&&m.setSelectionToElementStart(v.children()[0]))}if(U&&e.cancel(U),!H&&!L.test(a.keyCode)){if(""!==B&&13===a.keyCode&&!a.shiftKey){for(var d=m.getSelectionElement();!d.tagName.match(g)&&d!==v[0];)d=d.parentNode;if(d.tagName.toLowerCase()!==w.taDefaultWrap&&"li"!==d.tagName.toLowerCase()&&(""===d.innerHTML.trim()||"<br>"===d.innerHTML.trim())){var f=angular.element(B);angular.element(d).replaceWith(f),m.setSelectionToElementStart(f[0])}}var h=Y();""!==B&&""===h.trim()?(ka(B),m.setSelectionToElementStart(v.children()[0])):"<"!==h.substring(0,1)&&""!==w.taDefaultWrap;var i=z!==a.keyCode&&M.test(a.keyCode);ba&&e.cancel(ba),ba=e(function(){Z(h,i,!0)},E.$options.debounce||400),i||(U=e(function(){D.$undoManager.push(h)},250)),z=a.keyCode}}),v.on("blur",l.events.blur=function(){I=!1,H?(J=!0,D.$render()):Z(void 0,void 0,!0)}),w.placeholder&&(b.ie>8||void 0===b.ie)){var ca;if(!w.id)throw"textAngular Error: An unique ID is required for placeholders to work";ca=i("#"+w.id+".placeholder-text:before",'content: "'+w.placeholder+'"'),l.$on("$destroy",function(){j(ca)})}v.on("focus",l.events.focus=function(){I=!0,v.removeClass("placeholder-text"),ja()}),v.on("mouseup",l.events.mouseup=function(){var a=m.getSelection();a.start.element===v[0]&&v.children().length&&m.setSelectionToElementStart(v.children()[0])}),v.on("mousedown",l.events.mousedown=function(a,b){b&&angular.extend(a,b),a.stopPropagation()})}else{v.on("change blur",l.events.change=l.events.blur=function(){H||D.$setViewValue(Y())}),v.on("keydown",l.events.keydown=function(a,b){if(b&&angular.extend(a,b),9===a.keyCode){var c=this.selectionStart,d=this.selectionEnd,e=v.val();if(a.shiftKey){var f=e.lastIndexOf("\n",c),g=e.lastIndexOf("	",c);-1!==g&&g>=f&&(v.val(e.substring(0,g)+e.substring(g+1)),this.selectionStart=this.selectionEnd=c-1)}else v.val(e.substring(0,c)+"	"+e.substring(d)),this.selectionStart=this.selectionEnd=c+1;a.preventDefault()}});var da=function(a,b){for(var c="",d=0;b>d;d++)c+=a;return c},ea=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},fa=function(a,b){var c="",d=a.childNodes;return b++,c+=da("	",b-1)+a.outerHTML.substring(0,4),ea(d,function(a,d){var e=d.nodeName.toLowerCase();return"#comment"===e?void(c+="<!--"+d.nodeValue+"-->"):"#text"===e?void(c+=d.textContent):void(d.outerHTML&&(c+="ul"===e||"ol"===e?"\n"+fa(d,b):"\n"+da("	",b)+d.outerHTML))}),c+="\n"+da("	",b-1)+a.outerHTML.substring(a.outerHTML.lastIndexOf("<"))};D.$formatters.unshift(function(a){var b=angular.element("<div>"+a+"</div>")[0].childNodes;return b.length>0&&(a="",ea(b,function(b,c){var d=c.nodeName.toLowerCase();return"#comment"===d?void(a+="<!--"+c.nodeValue+"-->"):"#text"===d?void(a+=c.textContent):void(c.outerHTML&&(a.length>0&&(a+="\n"),a+="ul"===d||"ol"===d?""+fa(c,0):""+c.outerHTML))})),a})}var ga,ha=function(a){return l.$emit("ta-element-select",this),a.preventDefault(),!1},ia=function(a,b){if(b&&angular.extend(a,b),!p&&!H){p=!0;var c;c=a.originalEvent?a.originalEvent.dataTransfer:a.dataTransfer,l.$emit("ta-drop-event",this,a,c),e(function(){p=!1,Z(void 0,void 0,!0)},100)}},ja=l["reApplyOnSelectorHandlers"+(w.id||"")]=function(){H||angular.forEach(n,function(a){v.find(a).off("click",ha).on("click",ha)})},ka=function(a){v[0].innerHTML=a},la=!1;D.$render=function(){if(!la){la=!0;var a=D.$viewValue||"";J||(F&&I&&(v.removeClass("placeholder-text"),ga&&e.cancel(ga),ga=e(function(){I||(v[0].focus(),m.setSelectionToElementEnd(v.children()[v.children().length-1])),ga=void 0},1)),F?(ka(w.placeholder?""===a?B:a:""===a?B:a),H?v.off("drop",ia):(ja(),v.on("drop",ia))):"textarea"!==v[0].tagName.toLowerCase()&&"input"!==v[0].tagName.toLowerCase()?ka(o(a)):v.val(a)),F&&w.placeholder&&(""===a?I?v.removeClass("placeholder-text"):v.addClass("placeholder-text"):v.removeClass("placeholder-text")),la=J=!1}},w.taReadonly&&(H=l.$eval(w.taReadonly),H?(v.addClass("ta-readonly"),("textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase())&&v.attr("disabled","disabled"),void 0!==v.attr("contenteditable")&&v.attr("contenteditable")&&v.removeAttr("contenteditable")):(v.removeClass("ta-readonly"),"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase()?v.removeAttr("disabled"):F&&v.attr("contenteditable","true")),l.$watch(w.taReadonly,function(a,b){b!==a&&(a?(v.addClass("ta-readonly"),("textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase())&&v.attr("disabled","disabled"),void 0!==v.attr("contenteditable")&&v.attr("contenteditable")&&v.removeAttr("contenteditable"),angular.forEach(n,function(a){
v.find(a).on("click",ha)}),v.off("drop",ia)):(v.removeClass("ta-readonly"),"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase()?v.removeAttr("disabled"):F&&v.attr("contenteditable","true"),angular.forEach(n,function(a){v.find(a).off("click",ha)}),v.on("drop",ia)),H=a)})),F&&!H&&(angular.forEach(n,function(a){v.find(a).on("click",ha)}),v.on("drop",ia),v.on("blur",function(){b.webkit&&(c=!0)}))}}}]);var p=!1,q=angular.module("textAngular",["ngSanitize","textAngularSetup","textAngular.factories","textAngular.DOM","textAngular.validators","textAngular.taBind"]);q.config([function(){angular.forEach(e,function(a,b){delete e[b]})}]),q.run([function(){if("function"==typeof define&&define.amd)define(function(a){window.rangy=a("rangy"),window.rangy.saveSelection=a("rangy/lib/rangy-selectionsaverestore")});else if("function"==typeof require&&"undefined"!=typeof module&&"object"==typeof a)window.rangy=require("rangy"),window.rangy.saveSelection=require("rangy/lib/rangy-selectionsaverestore");else{if(!window.rangy)throw"rangy-core.js and rangy-selectionsaverestore.js are required for textAngular to work correctly, rangy-core is not yet loaded.";if(window.rangy.init(),!window.rangy.saveSelection)throw"rangy-selectionsaverestore.js is required for textAngular to work correctly."}}]),q.directive("textAngular",["$compile","$timeout","taOptions","taSelection","taExecCommand","textAngularManager","$window","$document","$animate","$log","$q","$parse",function(a,b,c,d,e,f,g,h,i,j,k,l){return{require:"?ngModel",scope:{},restrict:"EA",priority:2,link:function(m,n,o,p){var q,r,s,t,u,v,w,x,y,z,A,B=o.serial?o.serial:Math.floor(1e16*Math.random());m._name=o.name?o.name:"textAngularEditor"+B;var C=function(a,c,d){b(function(){var b=function(){a.off(c,b),d.apply(this,arguments)};a.on(c,b)},100)};if(y=e(o.taDefaultWrap),angular.extend(m,angular.copy(c),{wrapSelection:function(a,b,c){"undo"===a.toLowerCase()?m["$undoTaBindtaTextElement"+B]():"redo"===a.toLowerCase()?m["$redoTaBindtaTextElement"+B]():(y(a,!1,b,m.defaultTagAttributes),c&&m["reApplyOnSelectorHandlerstaTextElement"+B](),m.displayElements.text[0].focus())},showHtml:m.$eval(o.taShowHtml)||!1}),o.taFocussedClass&&(m.classes.focussed=o.taFocussedClass),o.taTextEditorClass&&(m.classes.textEditor=o.taTextEditorClass),o.taHtmlEditorClass&&(m.classes.htmlEditor=o.taHtmlEditorClass),o.taDefaultTagAttributes)try{angular.extend(m.defaultTagAttributes,angular.fromJson(o.taDefaultTagAttributes))}catch(D){j.error(D)}o.taTextEditorSetup&&(m.setup.textEditorSetup=m.$parent.$eval(o.taTextEditorSetup)),o.taHtmlEditorSetup&&(m.setup.htmlEditorSetup=m.$parent.$eval(o.taHtmlEditorSetup)),o.taFileDrop?m.fileDropHandler=m.$parent.$eval(o.taFileDrop):m.fileDropHandler=m.defaultFileDropHandler,w=n[0].innerHTML,n[0].innerHTML="",m.displayElements={forminput:angular.element("<input type='hidden' tabindex='-1' style='display: none;'>"),html:angular.element("<textarea></textarea>"),text:angular.element("<div></div>"),scrollWindow:angular.element("<div class='ta-scroll-window'></div>"),popover:angular.element('<div class="popover fade bottom" style="max-width: none; width: 305px;"></div>'),popoverArrow:angular.element('<div class="arrow"></div>'),popoverContainer:angular.element('<div class="popover-content"></div>'),resize:{overlay:angular.element('<div class="ta-resizer-handle-overlay"></div>'),background:angular.element('<div class="ta-resizer-handle-background"></div>'),anchors:[angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tr"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-bl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-br"></div>')],info:angular.element('<div class="ta-resizer-handle-info"></div>')}},m.displayElements.popover.append(m.displayElements.popoverArrow),m.displayElements.popover.append(m.displayElements.popoverContainer),m.displayElements.scrollWindow.append(m.displayElements.popover),m.displayElements.popover.on("mousedown",function(a,b){return b&&angular.extend(a,b),a.preventDefault(),!1}),m.showPopover=function(a){m.displayElements.popover.css("display","block"),m.reflowPopover(a),i.addClass(m.displayElements.popover,"in"),C(h.find("body"),"click keyup",function(){m.hidePopover()})},m.reflowPopover=function(a){m.displayElements.text[0].offsetHeight-51>a[0].offsetTop?(m.displayElements.popover.css("top",a[0].offsetTop+a[0].offsetHeight+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("top").addClass("bottom")):(m.displayElements.popover.css("top",a[0].offsetTop-54+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("bottom").addClass("top"));var b=m.displayElements.text[0].offsetWidth-m.displayElements.popover[0].offsetWidth,c=a[0].offsetLeft+a[0].offsetWidth/2-m.displayElements.popover[0].offsetWidth/2;m.displayElements.popover.css("left",Math.max(0,Math.min(b,c))+"px"),m.displayElements.popoverArrow.css("margin-left",Math.min(c,Math.max(0,c-b))-11+"px")},m.hidePopover=function(){m.displayElements.popover.css("display",""),m.displayElements.popoverContainer.attr("style",""),m.displayElements.popoverContainer.attr("class","popover-content"),m.displayElements.popover.removeClass("in")},m.displayElements.resize.overlay.append(m.displayElements.resize.background),angular.forEach(m.displayElements.resize.anchors,function(a){m.displayElements.resize.overlay.append(a)}),m.displayElements.resize.overlay.append(m.displayElements.resize.info),m.displayElements.scrollWindow.append(m.displayElements.resize.overlay),m.reflowResizeOverlay=function(a){a=angular.element(a)[0],m.displayElements.resize.overlay.css({display:"block",left:a.offsetLeft-5+"px",top:a.offsetTop-5+"px",width:a.offsetWidth+10+"px",height:a.offsetHeight+10+"px"}),m.displayElements.resize.info.text(a.offsetWidth+" x "+a.offsetHeight)},m.showResizeOverlay=function(a){var b=h.find("body");z=function(c){var d={width:parseInt(a.attr("width")),height:parseInt(a.attr("height")),x:c.clientX,y:c.clientY};(void 0===d.width||isNaN(d.width))&&(d.width=a[0].offsetWidth),(void 0===d.height||isNaN(d.height))&&(d.height=a[0].offsetHeight),m.hidePopover();var e=d.height/d.width,f=function(b){function c(a){return Math.round(Math.max(0,a))}var f={x:Math.max(0,d.width+(b.clientX-d.x)),y:Math.max(0,d.height+(b.clientY-d.y))},g=void 0!==o.taResizeForceAspectRatio,h=o.taResizeMaintainAspectRatio,i=g||h&&!b.shiftKey;if(i){var j=f.y/f.x;f.x=e>j?f.x:f.y/e,f.y=e>j?f.x*e:f.y}var k=angular.element(a);k.css("height",c(f.y)+"px"),k.css("width",c(f.x)+"px"),m.reflowResizeOverlay(a)};b.on("mousemove",f),C(b,"mouseup",function(c){c.preventDefault(),c.stopPropagation(),b.off("mousemove",f),m.showPopover(a)}),c.stopPropagation(),c.preventDefault()},m.displayElements.resize.anchors[3].off("mousedown"),m.displayElements.resize.anchors[3].on("mousedown",z),m.reflowResizeOverlay(a),C(b,"click",function(){m.hideResizeOverlay()})},m.hideResizeOverlay=function(){m.displayElements.resize.anchors[3].off("mousedown",z),m.displayElements.resize.overlay.css("display","")},m.setup.htmlEditorSetup(m.displayElements.html),m.setup.textEditorSetup(m.displayElements.text),m.displayElements.html.attr({id:"taHtmlElement"+B,"ng-show":"showHtml","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.text.attr({id:"taTextElement"+B,contentEditable:"true","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.scrollWindow.attr({"ng-hide":"showHtml"}),o.taDefaultWrap&&m.displayElements.text.attr("ta-default-wrap",o.taDefaultWrap),o.taUnsafeSanitizer&&(m.displayElements.text.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer),m.displayElements.html.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer)),m.displayElements.scrollWindow.append(m.displayElements.text),n.append(m.displayElements.scrollWindow),n.append(m.displayElements.html),m.displayElements.forminput.attr("name",m._name),n.append(m.displayElements.forminput),o.tabindex&&(n.removeAttr("tabindex"),m.displayElements.text.attr("tabindex",o.tabindex),m.displayElements.html.attr("tabindex",o.tabindex)),o.placeholder&&(m.displayElements.text.attr("placeholder",o.placeholder),m.displayElements.html.attr("placeholder",o.placeholder)),o.taDisabled&&(m.displayElements.text.attr("ta-readonly","disabled"),m.displayElements.html.attr("ta-readonly","disabled"),m.disabled=m.$parent.$eval(o.taDisabled),m.$parent.$watch(o.taDisabled,function(a){m.disabled=a,m.disabled?n.addClass(m.classes.disabled):n.removeClass(m.classes.disabled)})),o.taPaste&&(m._pasteHandler=function(a){return l(o.taPaste)(m.$parent,{$html:a})},m.displayElements.text.attr("ta-paste","_pasteHandler($html)")),a(m.displayElements.scrollWindow)(m),a(m.displayElements.html)(m),m.updateTaBindtaTextElement=m["updateTaBindtaTextElement"+B],m.updateTaBindtaHtmlElement=m["updateTaBindtaHtmlElement"+B],n.addClass("ta-root"),m.displayElements.scrollWindow.addClass("ta-text ta-editor "+m.classes.textEditor),m.displayElements.html.addClass("ta-html ta-editor "+m.classes.htmlEditor),m._actionRunning=!1;var E=!1;if(m.startAction=function(){return m._actionRunning=!0,E=g.rangy.saveSelection(),function(){E&&g.rangy.restoreSelection(E)}},m.endAction=function(){m._actionRunning=!1,E&&(m.showHtml?m.displayElements.html[0].focus():m.displayElements.text[0].focus(),g.rangy.removeMarkers(E)),E=!1,m.updateSelectedStyles(),m.showHtml||m["updateTaBindtaTextElement"+B]()},u=function(){m.focussed=!0,n.addClass(m.classes.focussed),x.focus(),n.triggerHandler("focus")},m.displayElements.html.on("focus",u),m.displayElements.text.on("focus",u),v=function(a){return m._actionRunning||h[0].activeElement===m.displayElements.html[0]||h[0].activeElement===m.displayElements.text[0]||(n.removeClass(m.classes.focussed),x.unfocus(),b(function(){m._bUpdateSelectedStyles=!1,n.triggerHandler("blur"),m.focussed=!1},0)),a.preventDefault(),!1},m.displayElements.html.on("blur",v),m.displayElements.text.on("blur",v),m.displayElements.text.on("paste",function(a){n.triggerHandler("paste",a)}),m.queryFormatBlockState=function(a){return!m.showHtml&&a.toLowerCase()===h[0].queryCommandValue("formatBlock").toLowerCase()},m.queryCommandState=function(a){return m.showHtml?"":h[0].queryCommandState(a)},m.switchView=function(){m.showHtml=!m.showHtml,i.enabled(!1,m.displayElements.html),i.enabled(!1,m.displayElements.text),m.showHtml?b(function(){return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.html[0].focus()},100):b(function(){return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.text[0].focus()},100)},o.ngModel){var F=!0;p.$render=function(){if(F){F=!1;var a=m.$parent.$eval(o.ngModel);void 0!==a&&null!==a||!w||""===w||p.$setViewValue(w)}m.displayElements.forminput.val(p.$viewValue),m.html=p.$viewValue||""},n.attr("required")&&(p.$validators.required=function(a,b){var c=a||b;return!(!c||""===c.trim())})}else m.displayElements.forminput.val(w),m.html=w;if(m.$watch("html",function(a,b){a!==b&&(o.ngModel&&p.$viewValue!==a&&p.$setViewValue(a),m.displayElements.forminput.val(a))}),o.taTargetToolbars)x=f.registerEditor(m._name,m,o.taTargetToolbars.split(","));else{var G=angular.element('<div text-angular-toolbar name="textAngularToolbar'+B+'">');o.taToolbar&&G.attr("ta-toolbar",o.taToolbar),o.taToolbarClass&&G.attr("ta-toolbar-class",o.taToolbarClass),o.taToolbarGroupClass&&G.attr("ta-toolbar-group-class",o.taToolbarGroupClass),o.taToolbarButtonClass&&G.attr("ta-toolbar-button-class",o.taToolbarButtonClass),o.taToolbarActiveButtonClass&&G.attr("ta-toolbar-active-button-class",o.taToolbarActiveButtonClass),o.taFocussedClass&&G.attr("ta-focussed-class",o.taFocussedClass),n.prepend(G),a(G)(m.$parent),x=f.registerEditor(m._name,m,["textAngularToolbar"+B])}m.$on("$destroy",function(){f.unregisterEditor(m._name),angular.element(window).off("blur")}),m.$on("ta-element-select",function(a,b){x.triggerElementSelect(a,b)&&m["reApplyOnSelectorHandlerstaTextElement"+B]()}),m.$on("ta-drop-event",function(a,c,d,e){m.displayElements.text[0].focus(),e&&e.files&&e.files.length>0?(angular.forEach(e.files,function(a){try{k.when(m.fileDropHandler(a,m.wrapSelection)||m.fileDropHandler!==m.defaultFileDropHandler&&k.when(m.defaultFileDropHandler(a,m.wrapSelection))).then(function(){m["updateTaBindtaTextElement"+B]()})}catch(b){j.error(b)}}),d.preventDefault(),d.stopPropagation()):b(function(){m["updateTaBindtaTextElement"+B]()},0)}),m._bUpdateSelectedStyles=!1,angular.element(window).on("blur",function(){m._bUpdateSelectedStyles=!1,m.focussed=!1}),m.updateSelectedStyles=function(){var a;A&&b.cancel(A),void 0!==(a=d.getSelectionElement())&&a.parentNode!==m.displayElements.text[0]?x.updateSelectedStyles(angular.element(a)):x.updateSelectedStyles(),m._bUpdateSelectedStyles&&(A=b(m.updateSelectedStyles,200))},q=function(){return m.focussed?void(m._bUpdateSelectedStyles||(m._bUpdateSelectedStyles=!0,m.$apply(function(){m.updateSelectedStyles()}))):void(m._bUpdateSelectedStyles=!1)},m.displayElements.html.on("keydown",q),m.displayElements.text.on("keydown",q),r=function(){m._bUpdateSelectedStyles=!1},m.displayElements.html.on("keyup",r),m.displayElements.text.on("keyup",r),s=function(a,b){b&&angular.extend(a,b),m.$apply(function(){return x.sendKeyCommand(a)?(m._bUpdateSelectedStyles||m.updateSelectedStyles(),a.preventDefault(),!1):void 0})},m.displayElements.html.on("keypress",s),m.displayElements.text.on("keypress",s),t=function(){m._bUpdateSelectedStyles=!1,m.$apply(function(){m.updateSelectedStyles()})},m.displayElements.html.on("mouseup",t),m.displayElements.text.on("mouseup",t)}}}]),q.service("textAngularManager",["taToolExecuteAction","taTools","taRegisterTool",function(a,b,c){var d={},e={};return{registerEditor:function(c,f,g){if(!c||""===c)throw"textAngular Error: An editor requires a name";if(!f)throw"textAngular Error: An editor requires a scope";if(e[c])throw'textAngular Error: An Editor with name "'+c+'" already exists';var h=[];return angular.forEach(g,function(a){d[a]&&h.push(d[a])}),e[c]={scope:f,toolbars:g,_registerToolbar:function(a){this.toolbars.indexOf(a.name)>=0&&h.push(a)},editorFunctions:{disable:function(){angular.forEach(h,function(a){a.disabled=!0})},enable:function(){angular.forEach(h,function(a){a.disabled=!1})},focus:function(){angular.forEach(h,function(a){a._parent=f,a.disabled=!1,a.focussed=!0,f.focussed=!0})},unfocus:function(){angular.forEach(h,function(a){a.disabled=!0,a.focussed=!1}),f.focussed=!1},updateSelectedStyles:function(a){angular.forEach(h,function(b){angular.forEach(b.tools,function(c){c.activeState&&(b._parent=f,c.active=c.activeState(a))})})},sendKeyCommand:function(c){var d=!1;return(c.ctrlKey||c.metaKey||c.specialKey)&&angular.forEach(b,function(b,e){if(b.commandKeyCode&&(b.commandKeyCode===c.which||b.commandKeyCode===c.specialKey))for(var g=0;g<h.length;g++)if(void 0!==h[g].tools[e]){a.call(h[g].tools[e],f),d=!0;break}}),d},triggerElementSelect:function(a,c){var d=function(a,b){for(var c=!0,d=0;d<b.length;d++)c=c&&a.attr(b[d]);return c},e=[],g={},i=!1;c=angular.element(c);var j=!1;if(angular.forEach(b,function(a,b){a.onElementSelect&&a.onElementSelect.element&&a.onElementSelect.element.toLowerCase()===c[0].tagName.toLowerCase()&&(!a.onElementSelect.filter||a.onElementSelect.filter(c))&&(j=j||angular.isArray(a.onElementSelect.onlyWithAttrs)&&d(c,a.onElementSelect.onlyWithAttrs),(!a.onElementSelect.onlyWithAttrs||d(c,a.onElementSelect.onlyWithAttrs))&&(g[b]=a))}),j?(angular.forEach(g,function(a,b){a.onElementSelect.onlyWithAttrs&&d(c,a.onElementSelect.onlyWithAttrs)&&e.push({name:b,tool:a})}),e.sort(function(a,b){return b.tool.onElementSelect.onlyWithAttrs.length-a.tool.onElementSelect.onlyWithAttrs.length})):angular.forEach(g,function(a,b){e.push({name:b,tool:a})}),e.length>0)for(var k=0;k<e.length;k++){for(var l=e[k].tool,m=e[k].name,n=0;n<h.length;n++)if(void 0!==h[n].tools[m]){l.onElementSelect.action.call(h[n].tools[m],a,c,f),i=!0;break}if(i)break}return i}}},e[c].editorFunctions},retrieveEditor:function(a){return e[a]},unregisterEditor:function(a){delete e[a]},registerToolbar:function(a){if(!a)throw"textAngular Error: A toolbar requires a scope";if(!a.name||""===a.name)throw"textAngular Error: A toolbar requires a name";if(d[a.name])throw'textAngular Error: A toolbar with name "'+a.name+'" already exists';d[a.name]=a,angular.forEach(e,function(b){b._registerToolbar(a)})},retrieveToolbar:function(a){return d[a]},retrieveToolbarsViaEditor:function(a){var b=[],c=this;return angular.forEach(this.retrieveEditor(a).toolbars,function(a){b.push(c.retrieveToolbar(a))}),b},unregisterToolbar:function(a){delete d[a]},updateToolsDisplay:function(a){var b=this;angular.forEach(a,function(a,c){b.updateToolDisplay(c,a)})},resetToolsDisplay:function(){var a=this;angular.forEach(b,function(b,c){a.resetToolDisplay(c)})},updateToolDisplay:function(a,b){var c=this;angular.forEach(d,function(d,e){c.updateToolbarToolDisplay(e,a,b)})},resetToolDisplay:function(a){var b=this;angular.forEach(d,function(c,d){b.resetToolbarToolDisplay(d,a)})},updateToolbarToolDisplay:function(a,b,c){if(!d[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';d[a].updateToolDisplay(b,c)},resetToolbarToolDisplay:function(a,c){if(!d[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';d[a].updateToolDisplay(c,b[c],!0)},removeTool:function(a){delete b[a],angular.forEach(d,function(b){delete b.tools[a];for(var c=0;c<b.toolbar.length;c++){for(var d,e=0;e<b.toolbar[c].length;e++){if(b.toolbar[c][e]===a){d={group:c,index:e};break}if(void 0!==d)break}void 0!==d&&(b.toolbar[d.group].slice(d.index,1),b._$element.children().eq(d.group).children().eq(d.index).remove())}})},addTool:function(a,b,e,f){c(a,b),angular.forEach(d,function(c){c.addTool(a,b,e,f)})},addToolToToolbar:function(a,b,e,f,g){c(a,b),d[e].addTool(a,b,f,g)},refreshEditor:function(a){if(!e[a])throw'textAngular Error: No Editor with name "'+a+'" exists';e[a].scope.updateTaBindtaTextElement(),e[a].scope.$$phase||e[a].scope.$digest()},sendKeyCommand:function(a,b){angular.forEach(e,function(c){return c.editorFunctions.sendKeyCommand(b)?(a._bUpdateSelectedStyles||a.updateSelectedStyles(),b.preventDefault(),!1):void 0})}}}]),q.directive("textAngularToolbar",["$compile","textAngularManager","taOptions","taTools","taToolExecuteAction","$window",function(a,b,c,d,e,f){return{scope:{name:"@"},restrict:"EA",link:function(g,h,i){if(!g.name||""===g.name)throw"textAngular Error: A toolbar requires a name";angular.extend(g,angular.copy(c)),i.taToolbar&&(g.toolbar=g.$parent.$eval(i.taToolbar)),i.taToolbarClass&&(g.classes.toolbar=i.taToolbarClass),i.taToolbarGroupClass&&(g.classes.toolbarGroup=i.taToolbarGroupClass),i.taToolbarButtonClass&&(g.classes.toolbarButton=i.taToolbarButtonClass),i.taToolbarActiveButtonClass&&(g.classes.toolbarButtonActive=i.taToolbarActiveButtonClass),i.taFocussedClass&&(g.classes.focussed=i.taFocussedClass),g.disabled=!0,g.focussed=!1,g._$element=h,h[0].innerHTML="",h.addClass("ta-toolbar "+g.classes.toolbar),g.$watch("focussed",function(){g.focussed?h.addClass(g.classes.focussed):h.removeClass(g.classes.focussed)});var j=function(b,c){var d;if(d=b&&b.display?angular.element(b.display):angular.element("<button type='button'>"),b&&b["class"]?d.addClass(b["class"]):d.addClass(g.classes.toolbarButton),d.attr("name",c.name),d.attr("ta-button","ta-button"),d.attr("ng-disabled","isDisabled()"),d.attr("tabindex","-1"),d.attr("ng-click","executeAction()"),d.attr("ng-class","displayActiveToolClass(active)"),b&&b.tooltiptext&&d.attr("title",b.tooltiptext),b&&!b.display&&!c._display&&(d[0].innerHTML="",b.buttontext&&(d[0].innerHTML=b.buttontext),b.iconclass)){var e=angular.element("<i>"),f=d[0].innerHTML;e.addClass(b.iconclass),d[0].innerHTML="",d.append(e),f&&""!==f&&d.append("&nbsp;"+f)}return c._lastToolDefinition=angular.copy(b),a(d)(c)};g.tools={},g._parent={disabled:!0,showHtml:!1,queryFormatBlockState:function(){return!1},queryCommandState:function(){return!1}};var k={$window:f,$editor:function(){return g._parent},isDisabled:function(){return"function"!=typeof this.$eval("disabled")&&this.$eval("disabled")||this.$eval("disabled()")||"html"!==this.name&&this.$editor().showHtml||this.$parent.disabled||this.$editor().disabled},displayActiveToolClass:function(a){return a?g.classes.toolbarButtonActive:""},executeAction:e};angular.forEach(g.toolbar,function(a){var b=angular.element("<div>");b.addClass(g.classes.toolbarGroup),angular.forEach(a,function(a){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]),b.append(g.tools[a].$element)}),h.append(b)}),g.updateToolDisplay=function(a,b,c){var d=g.tools[a];if(d){if(d._lastToolDefinition&&!c&&(b=angular.extend({},d._lastToolDefinition,b)),null===b.buttontext&&null===b.iconclass&&null===b.display)throw'textAngular Error: Tool Definition for updating "'+a+'" does not have a valid display/iconclass/buttontext value';null===b.buttontext&&delete b.buttontext,null===b.iconclass&&delete b.iconclass,null===b.display&&delete b.display;var e=j(b,d);d.$element.replaceWith(e),d.$element=e}},g.addTool=function(a,b,c,e){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]);var f;void 0===c&&(c=g.toolbar.length-1),f=angular.element(h.children()[c]),void 0===e?(f.append(g.tools[a].$element),g.toolbar[c][g.toolbar[c].length-1]=a):(f.children().eq(e).after(g.tools[a].$element),g.toolbar[c][e]=a)},b.registerToolbar(g),g.$on("$destroy",function(){b.unregisterToolbar(g.name)})}}}])}()}({},function(){return this}());;
!function(a,b){b["true"]=a,function(b,c){"function"==typeof define&&define.amd?define(b):"undefined"!=typeof module&&"object"==typeof a?module.exports=b():c.rangy=b()}(function(){function a(a,b){var c=typeof a[b];return c==u||!(c!=t||!a[b])||"unknown"==c}function b(a,b){return!(typeof a[b]!=t||!a[b])}function c(a,b){return typeof a[b]!=v}function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&A(a,z)&&C(a,y)}function f(a){return b(a,"body")?a.body:a.getElementsByTagName("body")[0]}function g(b){typeof console!=v&&a(console,"log")&&console.log(b)}function h(a,b){F&&b?alert(a):g(a)}function i(a){H.initialized=!0,H.supported=!1,h("Rangy is not supported in this environment. Reason: "+a,H.config.alertOnFail)}function j(a){h("Rangy warning: "+a,H.config.alertOnWarn)}function k(a){return a.message||a.description||String(a)}function l(){if(F&&!H.initialized){var b,c=!1,d=!1;a(document,"createRange")&&(b=document.createRange(),A(b,x)&&C(b,w)&&(c=!0));var h=f(document);if(!h||"body"!=h.nodeName.toLowerCase())return void i("No body element found");if(h&&a(h,"createTextRange")&&(b=h.createTextRange(),e(b)&&(d=!0)),!c&&!d)return void i("Neither Range nor TextRange are available");H.initialized=!0,H.features={implementsDomRange:c,implementsTextRange:d};var j,l;for(var m in E)(j=E[m])instanceof p&&j.init(j,H);for(var n=0,o=K.length;o>n;++n)try{K[n](H)}catch(q){l="Rangy init listener threw an exception. Continuing. Detail: "+k(q),g(l)}}}function m(a,b,c){c&&(a+=" in module "+c.name),H.warn("DEPRECATED: "+a+" is deprecated. Please use "+b+" instead.")}function n(a,b,c,d){a[b]=function(){return m(b,c,d),a[c].apply(a,G.toArray(arguments))}}function o(a){a=a||window,l();for(var b=0,c=L.length;c>b;++b)L[b](a)}function p(a,b,c){this.name=a,this.dependencies=b,this.initialized=!1,this.supported=!1,this.initializer=c}function q(a,b,c){var d=new p(a,b,function(b){if(!b.initialized){b.initialized=!0;try{c(H,b),b.supported=!0}catch(d){var e="Module '"+a+"' failed to load: "+k(d);g(e),d.stack&&g(d.stack)}}});return E[a]=d,d}function r(){}function s(){}var t="object",u="function",v="undefined",w=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],x=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],y=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],z=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],A=d(a),B=d(b),C=d(c),D=[].forEach?function(a,b){a.forEach(b)}:function(a,b){for(var c=0,d=a.length;d>c;++c)b(a[c],c)},E={},F=typeof window!=v&&typeof document!=v,G={isHostMethod:a,isHostObject:b,isHostProperty:c,areHostMethods:A,areHostObjects:B,areHostProperties:C,isTextRange:e,getBody:f,forEach:D},H={version:"1.3.0",initialized:!1,isBrowser:F,supported:!0,util:G,features:{},modules:E,config:{alertOnFail:!1,alertOnWarn:!1,preferTextRange:!1,autoInitialize:typeof rangyAutoInitialize==v?!0:rangyAutoInitialize}};H.fail=i,H.warn=j;var I;({}).hasOwnProperty?(G.extend=I=function(a,b,c){var d,e;for(var f in b)b.hasOwnProperty(f)&&(d=a[f],e=b[f],c&&null!==d&&"object"==typeof d&&null!==e&&"object"==typeof e&&I(d,e,!0),a[f]=e);return b.hasOwnProperty("toString")&&(a.toString=b.toString),a},G.createOptions=function(a,b){var c={};return I(c,b),a&&I(c,a),c}):i("hasOwnProperty not supported"),F||i("Rangy can only run in a browser"),function(){var a;if(F){var b=document.createElement("div");b.appendChild(document.createElement("span"));var c=[].slice;try{1==c.call(b.childNodes,0)[0].nodeType&&(a=function(a){return c.call(a,0)})}catch(d){}}a||(a=function(a){for(var b=[],c=0,d=a.length;d>c;++c)b[c]=a[c];return b}),G.toArray=a}();var J;F&&(a(document,"addEventListener")?J=function(a,b,c){a.addEventListener(b,c,!1)}:a(document,"attachEvent")?J=function(a,b,c){a.attachEvent("on"+b,c)}:i("Document does not have required addEventListener or attachEvent method"),G.addListener=J);var K=[];G.deprecationNotice=m,G.createAliasForDeprecatedMethod=n,H.init=l,H.addInitListener=function(a){H.initialized?a(H):K.push(a)};var L=[];H.addShimListener=function(a){L.push(a)},F&&(H.shim=H.createMissingNativeApi=o,n(H,"createMissingNativeApi","shim")),p.prototype={init:function(){for(var a,b,c=this.dependencies||[],d=0,e=c.length;e>d;++d){if(b=c[d],a=E[b],!(a&&a instanceof p))throw new Error("required module '"+b+"' not found");if(a.init(),!a.supported)throw new Error("required module '"+b+"' not supported")}this.initializer(this)},fail:function(a){throw this.initialized=!0,this.supported=!1,new Error(a)},warn:function(a){H.warn("Module "+this.name+": "+a)},deprecationNotice:function(a,b){H.warn("DEPRECATED: "+a+" in module "+this.name+" is deprecated. Please use "+b+" instead")},createError:function(a){return new Error("Error in Rangy "+this.name+" module: "+a)}},H.createModule=function(a){var b,c;2==arguments.length?(b=arguments[1],c=[]):(b=arguments[2],c=arguments[1]);var d=q(a,c,b);H.initialized&&H.supported&&d.init()},H.createCoreModule=function(a,b,c){q(a,b,c)},H.RangePrototype=r,H.rangePrototype=new r,H.selectionPrototype=new s,H.createCoreModule("DomUtil",[],function(a,b){function c(a){var b;return typeof a.namespaceURI==F||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==b}function d(a){var b=a.parentNode;return 1==b.nodeType?b:null}function e(a){for(var b=0;a=a.previousSibling;)++b;return b}function f(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}}function g(a,b){var c,d=[];for(c=a;c;c=c.parentNode)d.push(c);for(c=b;c;c=c.parentNode)if(K(d,c))return c;return null}function h(a,b,c){for(var d=c?b:b.parentNode;d;){if(d===a)return!0;d=d.parentNode}return!1}function i(a,b){return h(a,b,!0)}function j(a,b,c){for(var d,e=c?a:a.parentNode;e;){if(d=e.parentNode,d===b)return e;e=d}return null}function k(a){var b=a.nodeType;return 3==b||4==b||8==b}function l(a){if(!a)return!1;var b=a.nodeType;return 3==b||8==b}function m(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}function n(a,b,c){var d=a.cloneNode(!1);if(d.deleteData(0,b),a.deleteData(b,a.length-b),m(d,a),c)for(var f,g=0;f=c[g++];)f.node==a&&f.offset>b?(f.node=d,f.offset-=b):f.node==a.parentNode&&f.offset>e(a)&&++f.offset;return d}function o(a){if(9==a.nodeType)return a;if(typeof a.ownerDocument!=F)return a.ownerDocument;if(typeof a.document!=F)return a.document;if(a.parentNode)return o(a.parentNode);throw b.createError("getDocument: no document found for node")}function p(a){var c=o(a);if(typeof c.defaultView!=F)return c.defaultView;if(typeof c.parentWindow!=F)return c.parentWindow;throw b.createError("Cannot get a window object for node")}function q(a){if(typeof a.contentDocument!=F)return a.contentDocument;if(typeof a.contentWindow!=F)return a.contentWindow.document;throw b.createError("getIframeDocument: No Document object found for iframe element")}function r(a){if(typeof a.contentWindow!=F)return a.contentWindow;if(typeof a.contentDocument!=F)return a.contentDocument.defaultView;throw b.createError("getIframeWindow: No Window object found for iframe element")}function s(a){return a&&G.isHostMethod(a,"setTimeout")&&G.isHostObject(a,"document")}function t(a,b,c){var d;if(a?G.isHostProperty(a,"nodeType")?d=1==a.nodeType&&"iframe"==a.tagName.toLowerCase()?q(a):o(a):s(a)&&(d=a.document):d=document,!d)throw b.createError(c+"(): Parameter must be a Window object or DOM node");return d}function u(a){for(var b;b=a.parentNode;)a=b;return a}function v(a,c,d,f){var h,i,k,l,m;if(a==d)return c===f?0:f>c?-1:1;if(h=j(d,a,!0))return c<=e(h)?-1:1;if(h=j(a,d,!0))return e(h)<f?-1:1;if(i=g(a,d),!i)throw new Error("comparePoints error: nodes have no common ancestor");if(k=a===i?i:j(a,i,!0),l=d===i?i:j(d,i,!0),k===l)throw b.createError("comparePoints got to case 4 and childA and childB are the same!");for(m=i.firstChild;m;){if(m===k)return-1;if(m===l)return 1;m=m.nextSibling}}function w(a){var b;try{return b=a.parentNode,!1}catch(c){return!0}}function x(a){if(!a)return"[No node]";if(L&&w(a))return"[Broken node]";if(k(a))return'"'+a.data+'"';if(1==a.nodeType){var b=a.id?' id="'+a.id+'"':"";return"<"+a.nodeName+b+">[index:"+e(a)+",length:"+a.childNodes.length+"]["+(a.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return a.nodeName}function y(a){for(var b,c=o(a).createDocumentFragment();b=a.firstChild;)c.appendChild(b);return c}function z(a,b,c){var d=H(a),e=a.createElement("div");e.contentEditable=""+!!c,b&&(e.innerHTML=b);var f=d.firstChild;return f?d.insertBefore(e,f):d.appendChild(e),e}function A(a){return a.parentNode.removeChild(a)}function B(a){this.root=a,this._next=a}function C(a){return new B(a)}function D(a,b){this.node=a,this.offset=b}function E(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var F="undefined",G=a.util,H=G.getBody;G.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),G.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method");var I=document.createElement("div");G.areHostMethods(I,["insertBefore","appendChild","cloneNode"]||!G.areHostObjects(I,["previousSibling","nextSibling","childNodes","parentNode"]))||b.fail("Incomplete Element implementation"),G.isHostProperty(I,"innerHTML")||b.fail("Element is missing innerHTML property");var J=document.createTextNode("test");G.areHostMethods(J,["splitText","deleteData","insertData","appendData","cloneNode"]||!G.areHostObjects(I,["previousSibling","nextSibling","childNodes","parentNode"])||!G.areHostProperties(J,["data"]))||b.fail("Incomplete Text Node implementation");var K=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1},L=!1;!function(){var b=document.createElement("b");b.innerHTML="1";var c=b.firstChild;b.innerHTML="<br />",L=w(c),a.features.crashyTextNodes=L}();var M;typeof window.getComputedStyle!=F?M=function(a,b){return p(a).getComputedStyle(a,null)[b]}:typeof document.documentElement.currentStyle!=F?M=function(a,b){return a.currentStyle?a.currentStyle[b]:""}:b.fail("No means of obtaining computed style properties found"),B.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a,b,c=this._current=this._next;if(this._current)if(a=c.firstChild)this._next=a;else{for(b=null;c!==this.root&&!(b=c.nextSibling);)c=c.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=null}},D.prototype={equals:function(a){return!!a&&this.node===a.node&&this.offset==a.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},E.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11,INVALID_NODE_TYPE_ERR:24},E.prototype.toString=function(){return this.message},a.dom={arrayContains:K,isHtmlNamespace:c,parentElement:d,getNodeIndex:e,getNodeLength:f,getCommonAncestor:g,isAncestorOf:h,isOrIsAncestorOf:i,getClosestAncestorIn:j,isCharacterDataNode:k,isTextOrCommentNode:l,insertAfter:m,splitDataNode:n,getDocument:o,getWindow:p,getIframeWindow:r,getIframeDocument:q,getBody:H,isWindow:s,getContentDocument:t,getRootContainer:u,comparePoints:v,isBrokenNode:w,inspectNode:x,getComputedStyleProperty:M,createTestElement:z,removeNode:A,fragmentFromNodeChildren:y,createIterator:C,DomPosition:D},a.DOMException=E}),H.createCoreModule("DomRange",["DomUtil"],function(a,b){function c(a,b){return 3!=a.nodeType&&(P(a,b.startContainer)||P(a,b.endContainer))}function d(a){return a.document||Q(a.startContainer)}function e(a){return W(a.startContainer)}function f(a){return new L(a.parentNode,O(a))}function g(a){return new L(a.parentNode,O(a)+1)}function h(a,b,c){var d=11==a.nodeType?a.firstChild:a;return N(b)?c==b.length?J.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:S(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]),d}function i(a,b,c){if(z(a),z(b),d(b)!=d(a))throw new M("WRONG_DOCUMENT_ERR");var e=R(a.startContainer,a.startOffset,b.endContainer,b.endOffset),f=R(a.endContainer,a.endOffset,b.startContainer,b.startOffset);return c?0>=e&&f>=0:0>e&&f>0}function j(a){for(var b,c,e,f=d(a.range).createDocumentFragment();c=a.next();){if(b=a.isPartiallySelectedSubtree(),c=c.cloneNode(!b),b&&(e=a.getSubtreeIterator(),c.appendChild(j(e)),e.detach()),10==c.nodeType)throw new M("HIERARCHY_REQUEST_ERR");f.appendChild(c)}return f}function k(a,b,c){var d,e;c=c||{stop:!1};for(var f,g;f=a.next();)if(a.isPartiallySelectedSubtree()){if(b(f)===!1)return void(c.stop=!0);if(g=a.getSubtreeIterator(),k(g,b,c),g.detach(),c.stop)return}else for(d=J.createIterator(f);e=d.next();)if(b(e)===!1)return void(c.stop=!0)}function l(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),l(b),b.detach()):a.remove()}function m(a){for(var b,c,e=d(a.range).createDocumentFragment();b=a.next();){if(a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),c=a.getSubtreeIterator(),b.appendChild(m(c)),c.detach()):a.remove(),10==b.nodeType)throw new M("HIERARCHY_REQUEST_ERR");e.appendChild(b)}return e}function n(a,b,c){var d,e=!(!b||!b.length),f=!!c;e&&(d=new RegExp("^("+b.join("|")+")$"));var g=[];return k(new p(a,!1),function(b){if(!(e&&!d.test(b.nodeType)||f&&!c(b))){var h=a.startContainer;if(b!=h||!N(h)||a.startOffset!=h.length){var i=a.endContainer;b==i&&N(i)&&0==a.endOffset||g.push(b)}}}),g}function o(a){var b="undefined"==typeof a.getName?"Range":a.getName();return"["+b+"("+J.inspectNode(a.startContainer)+":"+a.startOffset+", "+J.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function p(a,b){if(this.range=a,this.clonePartiallySelectedTextNodes=b,!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&N(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==c||N(this.sc)?T(this.sc,c,!0):this.sc.childNodes[this.so],this._last=this.ec!==c||N(this.ec)?T(this.ec,c,!0):this.ec.childNodes[this.eo-1])}}function q(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){if(d=e.nodeType,V(a,d))return e;e=e.parentNode}return null}}function r(a,b){if(ea(a,b))throw new M("INVALID_NODE_TYPE_ERR")}function s(a,b){if(!V(b,a.nodeType))throw new M("INVALID_NODE_TYPE_ERR")}function t(a,b){if(0>b||b>(N(a)?a.length:a.childNodes.length))throw new M("INDEX_SIZE_ERR")}function u(a,b){if(ca(a,!0)!==ca(b,!0))throw new M("WRONG_DOCUMENT_ERR")}function v(a){if(da(a,!0))throw new M("NO_MODIFICATION_ALLOWED_ERR")}function w(a,b){if(!a)throw new M(b)}function x(a,b){return b<=(N(a)?a.length:a.childNodes.length)}function y(a){return!!a.startContainer&&!!a.endContainer&&!(X&&(J.isBrokenNode(a.startContainer)||J.isBrokenNode(a.endContainer)))&&W(a.startContainer)==W(a.endContainer)&&x(a.startContainer,a.startOffset)&&x(a.endContainer,a.endOffset)}function z(a){if(!y(a))throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: ("+a.inspect()+")")}function A(a,b){z(a);var c=a.startContainer,d=a.startOffset,e=a.endContainer,f=a.endOffset,g=c===e;N(e)&&f>0&&f<e.length&&S(e,f,b),N(c)&&d>0&&d<c.length&&(c=S(c,d,b),g?(f-=d,e=c):e==c.parentNode&&f>=O(c)&&f++,d=0),a.setStartAndEnd(c,d,e,f)}function B(a){z(a);var b=a.commonAncestorContainer.parentNode.cloneNode(!1);return b.appendChild(a.cloneContents()),b.innerHTML}function C(a){a.START_TO_START=ka,a.START_TO_END=la,a.END_TO_END=ma,a.END_TO_START=na,a.NODE_BEFORE=oa,a.NODE_AFTER=pa,a.NODE_BEFORE_AND_AFTER=qa,a.NODE_INSIDE=ra}function D(a){C(a),C(a.prototype)}function E(a,b){return function(){z(this);var c,d,e=this.startContainer,f=this.startOffset,h=this.commonAncestorContainer,i=new p(this,!0);e!==h&&(c=T(e,h,!0),d=g(c),e=d.node,f=d.offset),k(i,v),i.reset();var j=a(i);return i.detach(),b(this,e,f,e,f),j}}function F(b,d){function e(a,b){return function(c){s(c,Z),s(W(c),$);var d=(a?f:g)(c);(b?h:i)(this,d.node,d.offset)}}function h(a,b,c){var e=a.endContainer,f=a.endOffset;(b!==a.startContainer||c!==a.startOffset)&&((W(b)!=W(e)||1==R(b,c,e,f))&&(e=b,f=c),d(a,b,c,e,f))}function i(a,b,c){var e=a.startContainer,f=a.startOffset;(b!==a.endContainer||c!==a.endOffset)&&((W(b)!=W(e)||-1==R(b,c,e,f))&&(e=b,f=c),d(a,e,f,b,c))}var j=function(){};j.prototype=a.rangePrototype,b.prototype=new j,K.extend(b.prototype,{setStart:function(a,b){r(a,!0),t(a,b),h(this,a,b)},setEnd:function(a,b){r(a,!0),t(a,b),i(this,a,b)},setStartAndEnd:function(){var a=arguments,b=a[0],c=a[1],e=b,f=c;switch(a.length){case 3:f=a[2];break;case 4:e=a[2],f=a[3]}d(this,b,c,e,f)},setBoundary:function(a,b,c){this["set"+(c?"Start":"End")](a,b)},setStartBefore:e(!0,!0),setStartAfter:e(!1,!0),setEndBefore:e(!0,!1),setEndAfter:e(!1,!1),collapse:function(a){z(this),a?d(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):d(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){r(a,!0),d(this,a,0,a,U(a))},selectNode:function(a){r(a,!1),s(a,Z);var b=f(a),c=g(a);d(this,b.node,b.offset,c.node,c.offset)},extractContents:E(m,d),deleteContents:E(l,d),canSurroundContents:function(){z(this),v(this.startContainer),v(this.endContainer);var a=new p(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);return a.detach(),!b},splitBoundaries:function(){A(this)},splitBoundariesPreservingPositions:function(a){A(this,a)},normalizeBoundaries:function(){z(this);var a,b=this.startContainer,c=this.startOffset,e=this.endContainer,f=this.endOffset,g=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(e=a,f=a.length,a.appendData(b.data),Y(b))},h=function(a){var d=a.previousSibling;if(d&&d.nodeType==a.nodeType){b=a;var g=a.length;if(c=d.length,a.insertData(0,d.data),Y(d),b==e)f+=c,e=b;else if(e==a.parentNode){var h=O(a);f==h?(e=a,f=g):f>h&&f--}}},i=!0;if(N(e))f==e.length?g(e):0==f&&(a=e.previousSibling,a&&a.nodeType==e.nodeType&&(f=a.length,b==e&&(i=!1),a.appendData(e.data),Y(e),e=a));else{if(f>0){var j=e.childNodes[f-1];j&&N(j)&&g(j)}i=!this.collapsed}if(i){if(N(b))0==c?h(b):c==b.length&&(a=b.nextSibling,a&&a.nodeType==b.nodeType&&(e==a&&(e=b,f+=b.length),b.appendData(a.data),Y(a)));else if(c<b.childNodes.length){var k=b.childNodes[c];k&&N(k)&&h(k)}}else b=e,c=f;d(this,b,c,e,f)},collapseToPoint:function(a,b){r(a,!0),t(a,b),this.setStartAndEnd(a,b)}}),D(b)}function G(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:J.getCommonAncestor(a.startContainer,a.endContainer)}function H(a,b,c,d,e){a.startContainer=b,a.startOffset=c,a.endContainer=d,a.endOffset=e,a.document=J.getDocument(b),G(a)}function I(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,this.document=a,G(this)}var J=a.dom,K=a.util,L=J.DomPosition,M=a.DOMException,N=J.isCharacterDataNode,O=J.getNodeIndex,P=J.isOrIsAncestorOf,Q=J.getDocument,R=J.comparePoints,S=J.splitDataNode,T=J.getClosestAncestorIn,U=J.getNodeLength,V=J.arrayContains,W=J.getRootContainer,X=a.features.crashyTextNodes,Y=J.removeNode;p.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;return a&&(this._next=a!==this._last?a.nextSibling:null,N(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a,b,c=this._current;!N(c)||c!==this.sc&&c!==this.ec?c.parentNode&&Y(c):(a=c===this.sc?this.so:0,b=c===this.ec?this.eo:c.length,a!=b&&c.deleteData(a,b-a))},isPartiallySelectedSubtree:function(){var a=this._current;return c(a,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode)a=this.range.cloneRange(),a.collapse(!1);else{a=new I(d(this.range));var b=this._current,c=b,e=0,f=b,g=U(b);P(b,this.sc)&&(c=this.sc,e=this.so),P(b,this.ec)&&(f=this.ec,g=this.eo),H(a,c,e,f,g)}return new p(a,this.clonePartiallySelectedTextNodes)},detach:function(){this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};var Z=[1,3,4,5,7,8,10],$=[2,9,11],_=[5,6,10,12],aa=[1,3,4,5,7,8,10,11],ba=[1,3,4,5,7,8],ca=q([9,11]),da=q(_),ea=q([6,10,12]),fa=document.createElement("style"),ga=!1;try{fa.innerHTML="<b>x</b>",ga=3==fa.firstChild.nodeType}catch(ha){}a.features.htmlParsingConforms=ga;var ia=ga?function(a){var b=this.startContainer,c=Q(b);if(!b)throw new M("INVALID_STATE_ERR");var d=null;return 1==b.nodeType?d=b:N(b)&&(d=J.parentElement(b)),d=null===d||"HTML"==d.nodeName&&J.isHtmlNamespace(Q(d).documentElement)&&J.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1),d.innerHTML=a,J.fragmentFromNodeChildren(d)}:function(a){var b=d(this),c=b.createElement("body");return c.innerHTML=a,J.fragmentFromNodeChildren(c)},ja=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ka=0,la=1,ma=2,na=3,oa=0,pa=1,qa=2,ra=3;K.extend(a.rangePrototype,{compareBoundaryPoints:function(a,b){z(this),u(this.startContainer,b.startContainer);var c,d,e,f,g=a==na||a==ka?"start":"end",h=a==la||a==ka?"start":"end";return c=this[g+"Container"],d=this[g+"Offset"],e=b[h+"Container"],f=b[h+"Offset"],R(c,d,e,f)},insertNode:function(a){if(z(this),s(a,aa),v(this.startContainer),P(a,this.startContainer))throw new M("HIERARCHY_REQUEST_ERR");var b=h(a,this.startContainer,this.startOffset);this.setStartBefore(b)},cloneContents:function(){z(this);var a,b;if(this.collapsed)return d(this).createDocumentFragment();if(this.startContainer===this.endContainer&&N(this.startContainer))return a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=d(this).createDocumentFragment(),b.appendChild(a),b;var c=new p(this,!0);return a=j(c),c.detach(),a},canSurroundContents:function(){z(this),v(this.startContainer),v(this.endContainer);var a=new p(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);return a.detach(),!b},surroundContents:function(a){if(s(a,ba),!this.canSurroundContents())throw new M("INVALID_STATE_ERR");var b=this.extractContents();if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);h(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){z(this);for(var a,b=new I(d(this)),c=ja.length;c--;)a=ja[c],b[a]=this[a];return b},toString:function(){z(this);var a=this.startContainer;if(a===this.endContainer&&N(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],c=new p(this,!0);return k(c,function(a){(3==a.nodeType||4==a.nodeType)&&b.push(a.data)}),c.detach(),b.join("")},compareNode:function(a){z(this);var b=a.parentNode,c=O(a);if(!b)throw new M("NOT_FOUND_ERR");var d=this.comparePoint(b,c),e=this.comparePoint(b,c+1);return 0>d?e>0?qa:oa:e>0?pa:ra},comparePoint:function(a,b){return z(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),R(a,b,this.startContainer,this.startOffset)<0?-1:R(a,b,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:ia,toHtml:function(){return B(this)},intersectsNode:function(a,b){if(z(this),W(a)!=e(this))return!1;var c=a.parentNode,d=O(a);if(!c)return!0;var f=R(c,d,this.endContainer,this.endOffset),g=R(c,d+1,this.startContainer,this.startOffset);return b?0>=f&&g>=0:0>f&&g>0},isPointInRange:function(a,b){return z(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),R(a,b,this.startContainer,this.startOffset)>=0&&R(a,b,this.endContainer,this.endOffset)<=0},intersectsRange:function(a){return i(this,a,!1)},intersectsOrTouchesRange:function(a){return i(this,a,!0)},intersection:function(a){if(this.intersectsRange(a)){var b=R(this.startContainer,this.startOffset,a.startContainer,a.startOffset),c=R(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();return-1==b&&d.setStart(a.startContainer,a.startOffset),1==c&&d.setEnd(a.endContainer,a.endOffset),d}return null},union:function(a){if(this.intersectsOrTouchesRange(a)){var b=this.cloneRange();return-1==R(a.startContainer,a.startOffset,this.startContainer,this.startOffset)&&b.setStart(a.startContainer,a.startOffset),1==R(a.endContainer,a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset),b}throw new M("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==ra},containsNodeContents:function(a){return this.comparePoint(a,0)>=0&&this.comparePoint(a,U(a))<=0},containsRange:function(a){var b=this.intersection(a);return null!==b&&a.equals(b)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);if(c.length>0){b.setStart(c[0],0);var d=c.pop();return b.setEnd(d,d.length),this.containsRange(b)}return this.containsNodeContents(a)},getNodes:function(a,b){return z(this),n(this,a,b)},getDocument:function(){return d(this)},collapseBefore:function(a){this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){this.setStartAfter(a),this.collapse(!0)},getBookmark:function(b){var c=d(this),e=a.createRange(c);b=b||J.getBody(c),e.selectNodeContents(b);var f=this.intersection(e),g=0,h=0;return f&&(e.setEnd(f.startContainer,f.startOffset),g=e.toString().length,h=g+f.toString().length),{start:g,end:h,containerNode:b}},moveToBookmark:function(a){var b=a.containerNode,c=0;this.setStart(b,0),this.collapse(!0);for(var d,e,f,g,h=[b],i=!1,j=!1;!j&&(d=h.pop());)if(3==d.nodeType)e=c+d.length,!i&&a.start>=c&&a.start<=e&&(this.setStart(d,a.start-c),i=!0),i&&a.end>=c&&a.end<=e&&(this.setEnd(d,a.end-c),j=!0),c=e;else for(g=d.childNodes,f=g.length;f--;)h.push(g[f])},getName:function(){return"DomRange"},equals:function(a){return I.rangesEqual(this,a)},isValid:function(){return y(this)},inspect:function(){return o(this)},detach:function(){}}),F(I,H),K.extend(I,{rangeProperties:ja,RangeIterator:p,copyComparisonConstants:D,createPrototypeRange:F,inspect:o,toHtml:B,getRangeDocument:d,rangesEqual:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset}}),a.DomRange=I}),H.createCoreModule("WrappedRange",["DomRange"],function(a,b){var c,d,e=a.dom,f=a.util,g=e.DomPosition,h=a.DomRange,i=e.getBody,j=e.getContentDocument,k=e.isCharacterDataNode;if(a.features.implementsDomRange&&!function(){function d(a){for(var b,c=m.length;c--;)b=m[c],a[b]=a.nativeRange[b];a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset}function g(a,b,c,d,e){var f=a.startContainer!==b||a.startOffset!=c,g=a.endContainer!==d||a.endOffset!=e,h=!a.equals(a.nativeRange);(f||g||h)&&(a.setEnd(d,e),a.setStart(b,c))}var k,l,m=h.rangeProperties;c=function(a){if(!a)throw b.createError("WrappedRange: Range must be specified");this.nativeRange=a,d(this)},h.createPrototypeRange(c,g),k=c.prototype,k.selectNode=function(a){this.nativeRange.selectNode(a),d(this)},k.cloneContents=function(){return this.nativeRange.cloneContents()},k.surroundContents=function(a){this.nativeRange.surroundContents(a),d(this)},k.collapse=function(a){this.nativeRange.collapse(a),d(this)},k.cloneRange=function(){return new c(this.nativeRange.cloneRange())},k.refresh=function(){d(this)},k.toString=function(){return this.nativeRange.toString()};var n=document.createTextNode("test");i(document).appendChild(n);var o=document.createRange();o.setStart(n,0),o.setEnd(n,0);try{o.setStart(n,1),k.setStart=function(a,b){this.nativeRange.setStart(a,b),d(this)},k.setEnd=function(a,b){this.nativeRange.setEnd(a,b),d(this)},l=function(a){return function(b){this.nativeRange[a](b),d(this)}}}catch(p){k.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}d(this)},k.setEnd=function(a,b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}d(this)},l=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(e){this.nativeRange[b](c),this.nativeRange[a](c)}d(this)}}}k.setStartBefore=l("setStartBefore","setEndBefore"),k.setStartAfter=l("setStartAfter","setEndAfter"),k.setEndBefore=l("setEndBefore","setStartBefore"),k.setEndAfter=l("setEndAfter","setStartAfter"),k.selectNodeContents=function(a){this.setStartAndEnd(a,0,e.getNodeLength(a))},o.selectNodeContents(n),o.setEnd(n,3);var q=document.createRange();q.selectNodeContents(n),q.setEnd(n,4),q.setStart(n,2),-1==o.compareBoundaryPoints(o.START_TO_END,q)&&1==o.compareBoundaryPoints(o.END_TO_START,q)?k.compareBoundaryPoints=function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:k.compareBoundaryPoints=function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};var r=document.createElement("div");r.innerHTML="123";var s=r.firstChild,t=i(document);t.appendChild(r),o.setStart(s,1),o.setEnd(s,2),o.deleteContents(),"13"==s.data&&(k.deleteContents=function(){this.nativeRange.deleteContents(),d(this)},k.extractContents=function(){var a=this.nativeRange.extractContents();return d(this),a}),t.removeChild(r),t=null,f.isHostMethod(o,"createContextualFragment")&&(k.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),i(document).removeChild(n),k.getName=function(){return"WrappedRange"},a.WrappedRange=c,a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),a.createRange()}}(),a.features.implementsTextRange){var l=function(a){var b=a.parentElement(),c=a.duplicate();c.collapse(!0);var d=c.parentElement();c=a.duplicate(),c.collapse(!1);var f=c.parentElement(),g=d==f?d:e.getCommonAncestor(d,f);return g==b?g:e.getCommonAncestor(b,g)},m=function(a){return 0==a.compareEndPoints("StartToEnd",a)},n=function(a,b,c,d,f){var h=a.duplicate();h.collapse(c);var i=h.parentElement();if(e.isOrIsAncestorOf(b,i)||(i=b),!i.canHaveHTML){var j=new g(i.parentNode,e.getNodeIndex(i));return{boundaryPosition:j,nodeInfo:{nodeIndex:j.offset,containerElement:j.node}}}var l=e.getDocument(i).createElement("span");l.parentNode&&e.removeNode(l);for(var m,n,o,p,q,r=c?"StartToStart":"StartToEnd",s=f&&f.containerElement==i?f.nodeIndex:0,t=i.childNodes.length,u=t,v=u;;){if(v==t?i.appendChild(l):i.insertBefore(l,i.childNodes[v]),h.moveToElementText(l),m=h.compareEndPoints(r,a),0==m||s==u)break;if(-1==m){if(u==s+1)break;s=v}else u=u==s+1?s:v;v=Math.floor((s+u)/2),i.removeChild(l)}if(q=l.nextSibling,-1==m&&q&&k(q)){h.setEndPoint(c?"EndToStart":"EndToEnd",a);var w;if(/[\r\n]/.test(q.data)){var x=h.duplicate(),y=x.text.replace(/\r\n/g,"\r").length;for(w=x.moveStart("character",y);-1==(m=x.compareEndPoints("StartToEnd",x));)w++,x.moveStart("character",1)}else w=h.text.length;p=new g(q,w)}else n=(d||!c)&&l.previousSibling,o=(d||c)&&l.nextSibling,p=o&&k(o)?new g(o,0):n&&k(n)?new g(n,n.data.length):new g(i,e.getNodeIndex(l));return e.removeNode(l),{boundaryPosition:p,nodeInfo:{nodeIndex:v,containerElement:i}}},o=function(a,b){var c,d,f,g,h=a.offset,j=e.getDocument(a.node),l=i(j).createTextRange(),m=k(a.node);return m?(c=a.node,d=c.parentNode):(g=a.node.childNodes,c=h<g.length?g[h]:null,d=a.node),f=j.createElement("span"),f.innerHTML="&#feff;",c?d.insertBefore(f,c):d.appendChild(f),l.moveToElementText(f),l.collapse(!b),d.removeChild(f),m&&l[b?"moveStart":"moveEnd"]("character",h),l};d=function(a){this.textRange=a,this.refresh()},d.prototype=new h(document),
d.prototype.refresh=function(){var a,b,c,d=l(this.textRange);m(this.textRange)?b=a=n(this.textRange,d,!0,!0).boundaryPosition:(c=n(this.textRange,d,!0,!1),a=c.boundaryPosition,b=n(this.textRange,d,!1,!1,c.nodeInfo).boundaryPosition),this.setStart(a.node,a.offset),this.setEnd(b.node,b.offset)},d.prototype.getName=function(){return"WrappedTextRange"},h.copyComparisonConstants(d);var p=function(a){if(a.collapsed)return o(new g(a.startContainer,a.startOffset),!0);var b=o(new g(a.startContainer,a.startOffset),!0),c=o(new g(a.endContainer,a.endOffset),!1),d=i(h.getRangeDocument(a)).createTextRange();return d.setEndPoint("StartToStart",b),d.setEndPoint("EndToEnd",c),d};if(d.rangeToTextRange=p,d.prototype.toTextRange=function(){return p(this)},a.WrappedTextRange=d,!a.features.implementsDomRange||a.config.preferTextRange){var q=function(a){return a("return this;")()}(Function);"undefined"==typeof q.Range&&(q.Range=d),a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),i(a).createTextRange()},a.WrappedRange=d}}a.createRange=function(c){return c=j(c,b,"createRange"),new a.WrappedRange(a.createNativeRange(c))},a.createRangyRange=function(a){return a=j(a,b,"createRangyRange"),new h(a)},f.createAliasForDeprecatedMethod(a,"createIframeRange","createRange"),f.createAliasForDeprecatedMethod(a,"createIframeRangyRange","createRangyRange"),a.addShimListener(function(b){var c=b.document;"undefined"==typeof c.createRange&&(c.createRange=function(){return a.createRange(c)}),c=b=null})}),H.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(a,b){function c(a){return"string"==typeof a?/^backward(s)?$/i.test(a):!!a}function d(a,c){if(a){if(C.isWindow(a))return a;if(a instanceof r)return a.win;var d=C.getContentDocument(a,b,c);return C.getWindow(d)}return window}function e(a){return d(a,"getWinSelection").getSelection()}function f(a){return d(a,"getDocSelection").document.selection}function g(a){var b=!1;return a.anchorNode&&(b=1==C.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)),b}function h(a,b,c){var d=c?"end":"start",e=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[e+"Container"],a.focusOffset=b[e+"Offset"]}function i(a){var b=a.nativeSelection;a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset}function j(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function k(b){var c;return b instanceof F?(c=a.createNativeRange(b.getDocument()),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset)):b instanceof G?c=b.nativeRange:J.implementsDomRange&&b instanceof C.getWindow(b.startContainer).Range&&(c=b),c}function l(a){if(!a.length||1!=a[0].nodeType)return!1;for(var b=1,c=a.length;c>b;++b)if(!C.isAncestorOf(a[0],a[b]))return!1;return!0}function m(a){var c=a.getNodes();if(!l(c))throw b.createError("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}function n(a){return!!a&&"undefined"!=typeof a.text}function o(a,b){var c=new G(b);a._ranges=[c],h(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function p(b){if(b._ranges.length=0,"None"==b.docSelection.type)j(b);else{var c=b.docSelection.createRange();if(n(c))o(b,c);else{b.rangeCount=c.length;for(var d,e=L(c.item(0)),f=0;f<b.rangeCount;++f)d=a.createRange(e),d.selectNode(c.item(f)),b._ranges.push(d);b.isCollapsed=1==b.rangeCount&&b._ranges[0].collapsed,h(b,b._ranges[b.rangeCount-1],!1)}}}function q(a,c){for(var d=a.docSelection.createRange(),e=m(c),f=L(d.item(0)),g=M(f).createControlRange(),h=0,i=d.length;i>h;++h)g.add(d.item(h));try{g.add(e)}catch(j){throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}g.select(),p(a)}function r(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function s(a){a.win=a.anchorNode=a.focusNode=a._ranges=null,a.rangeCount=a.anchorOffset=a.focusOffset=0,a.detached=!0}function t(a,b){for(var c,d,e=ba.length;e--;)if(c=ba[e],d=c.selection,"deleteAll"==b)s(d);else if(c.win==a)return"delete"==b?(ba.splice(e,1),!0):d;return"deleteAll"==b&&(ba.length=0),null}function u(a,c){for(var d,e=L(c[0].startContainer),f=M(e).createControlRange(),g=0,h=c.length;h>g;++g){d=m(c[g]);try{f.add(d)}catch(i){throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}f.select(),p(a)}function v(a,b){if(a.win.document!=L(b))throw new H("WRONG_DOCUMENT_ERR")}function w(b){return function(c,d){var e;this.rangeCount?(e=this.getRangeAt(0),e["set"+(b?"Start":"End")](c,d)):(e=a.createRange(this.win.document),e.setStartAndEnd(c,d)),this.setSingleRange(e,this.isBackward())}}function x(a){var b=[],c=new I(a.anchorNode,a.anchorOffset),d=new I(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var f=0,g=a.rangeCount;g>f;++f)b[f]=F.inspect(a.getRangeAt(f));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}a.config.checkSelectionRanges=!0;var y,z,A="boolean",B="number",C=a.dom,D=a.util,E=D.isHostMethod,F=a.DomRange,G=a.WrappedRange,H=a.DOMException,I=C.DomPosition,J=a.features,K="Control",L=C.getDocument,M=C.getBody,N=F.rangesEqual,O=E(window,"getSelection"),P=D.isHostObject(document,"selection");J.implementsWinGetSelection=O,J.implementsDocSelection=P;var Q=P&&(!O||a.config.preferTextRange);if(Q)y=f,a.isSelectionValid=function(a){var b=d(a,"isSelectionValid").document,c=b.selection;return"None"!=c.type||L(c.createRange().parentElement())==b};else{if(!O)return b.fail("Neither document.selection or window.getSelection() detected."),!1;y=e,a.isSelectionValid=function(){return!0}}a.getNativeSelection=y;var R=y();if(!R)return b.fail("Native selection was null (possibly issue 138?)"),!1;var S=a.createNativeRange(document),T=M(document),U=D.areHostProperties(R,["anchorNode","focusNode","anchorOffset","focusOffset"]);J.selectionHasAnchorAndFocus=U;var V=E(R,"extend");J.selectionHasExtend=V;var W=typeof R.rangeCount==B;J.selectionHasRangeCount=W;var X=!1,Y=!0,Z=V?function(b,c){var d=F.getRangeDocument(c),e=a.createRange(d);e.collapseToPoint(c.endContainer,c.endOffset),b.addRange(k(e)),b.extend(c.startContainer,c.startOffset)}:null;D.areHostMethods(R,["addRange","getRangeAt","removeAllRanges"])&&typeof R.rangeCount==B&&J.implementsDomRange&&!function(){var b=window.getSelection();if(b){for(var c=b.rangeCount,d=c>1,e=[],f=g(b),h=0;c>h;++h)e[h]=b.getRangeAt(h);var i=C.createTestElement(document,"",!1),j=i.appendChild(document.createTextNode("   ")),k=document.createRange();if(k.setStart(j,1),k.collapse(!0),b.removeAllRanges(),b.addRange(k),Y=1==b.rangeCount,b.removeAllRanges(),!d){var l=window.navigator.appVersion.match(/Chrome\/(.*?) /);if(l&&parseInt(l[1])>=36)X=!1;else{var m=k.cloneRange();k.setStart(j,0),m.setEnd(j,3),m.setStart(j,2),b.addRange(k),b.addRange(m),X=2==b.rangeCount}}for(C.removeNode(i),b.removeAllRanges(),h=0;c>h;++h)0==h&&f?Z?Z(b,e[h]):(a.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"),b.addRange(e[h])):b.addRange(e[h])}}(),J.selectionSupportsMultipleRanges=X,J.collapsedNonEditableSelectionsSupported=Y;var $,_=!1;T&&E(T,"createControlRange")&&($=T.createControlRange(),D.areHostProperties($,["item","add"])&&(_=!0)),J.implementsControlRange=_,z=U?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:!1};var aa;E(R,"getRangeAt")?aa=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:U&&(aa=function(b){var c=L(b.anchorNode),d=a.createRange(c);return d.setStartAndEnd(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),d.collapsed!==this.isCollapsed&&d.setStartAndEnd(b.focusNode,b.focusOffset,b.anchorNode,b.anchorOffset),d}),r.prototype=a.selectionPrototype;var ba=[],ca=function(a){if(a&&a instanceof r)return a.refresh(),a;a=d(a,"getNativeSelection");var b=t(a),c=y(a),e=P?f(a):null;return b?(b.nativeSelection=c,b.docSelection=e,b.refresh()):(b=new r(c,e,a),ba.push({win:a,selection:b})),b};a.getSelection=ca,D.createAliasForDeprecatedMethod(a,"getIframeSelection","getSelection");var da=r.prototype;if(!Q&&U&&D.areHostMethods(R,["removeAllRanges","addRange"])){da.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),j(this)};var ea=function(a,b){Z(a.nativeSelection,b),a.refresh()};W?da.addRange=function(b,d){if(_&&P&&this.docSelection.type==K)q(this,b);else if(c(d)&&V)ea(this,b);else{var e;X?e=this.rangeCount:(this.removeAllRanges(),e=0);var f=k(b).cloneRange();try{this.nativeSelection.addRange(f)}catch(g){}if(this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==e+1){if(a.config.checkSelectionRanges){var i=aa(this.nativeSelection,this.rangeCount-1);i&&!N(i,b)&&(b=new G(i))}this._ranges[this.rangeCount-1]=b,h(this,b,ha(this.nativeSelection)),this.isCollapsed=z(this)}else this.refresh()}}:da.addRange=function(a,b){c(b)&&V?ea(this,a):(this.nativeSelection.addRange(k(a)),this.refresh())},da.setRanges=function(a){if(_&&P&&a.length>1)u(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;c>b;++b)this.addRange(a[b])}}}else{if(!(E(R,"empty")&&E(S,"select")&&_&&Q))return b.fail("No means of selecting a Range or TextRange was found"),!1;da.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=this.docSelection.type){var a;if(this.anchorNode)a=L(this.anchorNode);else if(this.docSelection.type==K){var b=this.docSelection.createRange();b.length&&(a=L(b.item(0)))}if(a){var c=M(a).createTextRange();c.select(),this.docSelection.empty()}}}catch(d){}j(this)},da.addRange=function(b){this.docSelection.type==K?q(this,b):(a.WrappedTextRange.rangeToTextRange(b).select(),this._ranges[0]=b,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,h(this,b,!1))},da.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?u(this,a):b&&this.addRange(a[0])}}da.getRangeAt=function(a){if(0>a||a>=this.rangeCount)throw new H("INDEX_SIZE_ERR");return this._ranges[a].cloneRange()};var fa;if(Q)fa=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=M(b.win.document).createTextRange(),c.collapse(!0)),b.docSelection.type==K?p(b):n(c)?o(b,c):j(b)};else if(E(R,"getRangeAt")&&typeof R.rangeCount==B)fa=function(b){if(_&&P&&b.docSelection.type==K)p(b);else if(b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount,b.rangeCount){for(var c=0,d=b.rangeCount;d>c;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));h(b,b._ranges[b.rangeCount-1],ha(b.nativeSelection)),b.isCollapsed=z(b)}else j(b)};else{if(!U||typeof R.isCollapsed!=A||typeof S.collapsed!=A||!J.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;fa=function(a){var b,c=a.nativeSelection;c.anchorNode?(b=aa(c,0),a._ranges=[b],a.rangeCount=1,i(a),a.isCollapsed=z(a)):j(a)}}da.refresh=function(a){var b=a?this._ranges.slice(0):null,c=this.anchorNode,d=this.anchorOffset;if(fa(this),a){var e=b.length;if(e!=this._ranges.length)return!0;if(this.anchorNode!=c||this.anchorOffset!=d)return!0;for(;e--;)if(!N(b[e],this._ranges[e]))return!0;return!1}};var ga=function(a,b){var c=a.getAllRanges();a.removeAllRanges();for(var d=0,e=c.length;e>d;++d)N(b,c[d])||a.addRange(c[d]);a.rangeCount||j(a)};_&&P?da.removeRange=function(a){if(this.docSelection.type==K){for(var b,c=this.docSelection.createRange(),d=m(a),e=L(c.item(0)),f=M(e).createControlRange(),g=!1,h=0,i=c.length;i>h;++h)b=c.item(h),b!==d||g?f.add(c.item(h)):g=!0;f.select(),p(this)}else ga(this,a)}:da.removeRange=function(a){ga(this,a)};var ha;!Q&&U&&J.implementsDomRange?(ha=g,da.isBackward=function(){return ha(this)}):ha=da.isBackward=function(){return!1},da.isBackwards=da.isBackward,da.toString=function(){for(var a=[],b=0,c=this.rangeCount;c>b;++b)a[b]=""+this._ranges[b];return a.join("")},da.collapse=function(b,c){v(this,b);var d=a.createRange(b);d.collapseToPoint(b,c),this.setSingleRange(d),this.isCollapsed=!0},da.collapseToStart=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},da.collapseToEnd=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},da.selectAllChildren=function(b){v(this,b);var c=a.createRange(b);c.selectNodeContents(b),this.setSingleRange(c)},da.deleteFromDocument=function(){if(_&&P&&this.docSelection.type==K){for(var a,b=this.docSelection.createRange();b.length;)a=b.item(0),b.remove(a),C.removeNode(a);this.refresh()}else if(this.rangeCount){var c=this.getAllRanges();if(c.length){this.removeAllRanges();for(var d=0,e=c.length;e>d;++d)c[d].deleteContents();this.addRange(c[e-1])}}},da.eachRange=function(a,b){for(var c=0,d=this._ranges.length;d>c;++c)if(a(this.getRangeAt(c)))return b},da.getAllRanges=function(){var a=[];return this.eachRange(function(b){a.push(b)}),a},da.setSingleRange=function(a,b){this.removeAllRanges(),this.addRange(a,b)},da.callMethodOnEachRange=function(a,b){var c=[];return this.eachRange(function(d){c.push(d[a].apply(d,b||[]))}),c},da.setStart=w(!0),da.setEnd=w(!1),a.rangePrototype.select=function(a){ca(this.getDocument()).setSingleRange(this,a)},da.changeEachRange=function(a){var b=[],c=this.isBackward();this.eachRange(function(c){a(c),b.push(c)}),this.removeAllRanges(),c&&1==b.length?this.addRange(b[0],"backward"):this.setRanges(b)},da.containsNode=function(a,b){return this.eachRange(function(c){return c.containsNode(a,b)},!0)||!1},da.getBookmark=function(a){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[a])}},da.moveToBookmark=function(b){for(var c,d,e=[],f=0;c=b.rangeBookmarks[f++];)d=a.createRange(this.win),d.moveToBookmark(c),e.push(d);b.backward?this.setSingleRange(e[0],"backward"):this.setRanges(e)},da.saveRanges=function(){return{backward:this.isBackward(),ranges:this.callMethodOnEachRange("cloneRange")}},da.restoreRanges=function(a){this.removeAllRanges();for(var b,c=0;b=a.ranges[c];++c)this.addRange(b,a.backward&&0==c)},da.toHtml=function(){var a=[];return this.eachRange(function(b){a.push(F.toHtml(b))}),a.join("")},J.implementsTextRange&&(da.getNativeTextRange=function(){var c;if(c=this.docSelection){var d=c.createRange();if(n(d))return d;throw b.createError("getNativeTextRange: selection is a control selection")}if(this.rangeCount>0)return a.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));throw b.createError("getNativeTextRange: selection contains no range")}),da.getName=function(){return"WrappedSelection"},da.inspect=function(){return x(this)},da.detach=function(){t(this.win,"delete"),s(this)},r.detachAll=function(){t(null,"deleteAll")},r.inspect=x,r.isDirectionBackward=c,a.Selection=r,a.selectionPrototype=da,a.addShimListener(function(a){"undefined"==typeof a.getSelection&&(a.getSelection=function(){return ca(a)}),a=null})});var M=!1,N=function(a){M||(M=!0,!H.initialized&&H.config.autoInitialize&&l())};return F&&("complete"==document.readyState?N():(a(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",N,!1),J(window,"load",N))),H},this),function(b,c){"function"==typeof define&&define.amd?define(["./rangy-core"],b):"undefined"!=typeof module&&"object"==typeof a?module.exports=b(require("rangy")):b(c.rangy)}(function(a){return a.createModule("SaveRestore",["WrappedRange"],function(a,b){function c(a,b){return(b||document).getElementById(a)}function d(a,b){var c,d="selectionBoundary_"+ +new Date+"_"+(""+Math.random()).slice(2),e=o.getDocument(a.startContainer),f=a.cloneRange();return f.collapse(b),c=e.createElement("span"),c.id=d,c.style.lineHeight="0",c.style.display="none",c.className="rangySelectionBoundary",c.appendChild(e.createTextNode(r)),f.insertNode(c),c}function e(a,d,e,f){var g=c(e,a);g?(d[f?"setStartBefore":"setEndBefore"](g),p(g)):b.warn("Marker element has been removed. Cannot restore selection.")}function f(a,b){return b.compareBoundaryPoints(a.START_TO_START,a)}function g(b,c){var e,f,g=a.DomRange.getRangeDocument(b),h=b.toString(),i=q(c);return b.collapsed?(f=d(b,!1),{document:g,markerId:f.id,collapsed:!0}):(f=d(b,!1),e=d(b,!0),{document:g,startMarkerId:e.id,endMarkerId:f.id,collapsed:!1,backward:i,toString:function(){return"original text: '"+h+"', new text: '"+b.toString()+"'"}})}function h(d,f){var g=d.document;"undefined"==typeof f&&(f=!0);var h=a.createRange(g);if(d.collapsed){var i=c(d.markerId,g);if(i){i.style.display="inline";var j=i.previousSibling;j&&3==j.nodeType?(p(i),h.collapseToPoint(j,j.length)):(h.collapseBefore(i),p(i))}else b.warn("Marker element has been removed. Cannot restore selection.")}else e(g,h,d.startMarkerId,!0),e(g,h,d.endMarkerId,!1);return f&&h.normalizeBoundaries(),h}function i(b,d){var e,h,i=[],j=q(d);b=b.slice(0),b.sort(f);for(var k=0,l=b.length;l>k;++k)i[k]=g(b[k],j);for(k=l-1;k>=0;--k)e=b[k],h=a.DomRange.getRangeDocument(e),e.collapsed?e.collapseAfter(c(i[k].markerId,h)):(e.setEndBefore(c(i[k].endMarkerId,h)),e.setStartAfter(c(i[k].startMarkerId,h)));return i}function j(c){if(!a.isSelectionValid(c))return b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."),null;var d=a.getSelection(c),e=d.getAllRanges(),f=1==e.length&&d.isBackward(),g=i(e,f);return f?d.setSingleRange(e[0],f):d.setRanges(e),{win:c,rangeInfos:g,restored:!1}}function k(a){for(var b=[],c=a.length,d=c-1;d>=0;d--)b[d]=h(a[d],!0);return b}function l(b,c){if(!b.restored){var d=b.rangeInfos,e=a.getSelection(b.win),f=k(d),g=d.length;1==g&&c&&a.features.selectionHasExtend&&d[0].backward?(e.removeAllRanges(),e.addRange(f[0],!0)):e.setRanges(f),b.restored=!0}}function m(a,b){var d=c(b,a);d&&p(d)}function n(a){for(var b,c=a.rangeInfos,d=0,e=c.length;e>d;++d)b=c[d],b.collapsed?m(a.doc,b.markerId):(m(a.doc,b.startMarkerId),m(a.doc,b.endMarkerId))}var o=a.dom,p=o.removeNode,q=a.Selection.isDirectionBackward,r="\ufeff";a.util.extend(a,{saveRange:g,restoreRange:h,saveRanges:i,restoreRanges:k,saveSelection:j,restoreSelection:l,removeMarkerElement:m,removeMarkers:n})}),a},this)}({},function(){return this}());;
!function(a,b){b["true"]=a,/**
 * @license AngularJS v1.3.10
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
function(a,b,c){"use strict";function d(){this.$get=["$$sanitizeUri",function(a){return function(b){"undefined"!=typeof arguments[1]&&(arguments[1].version="taSanitize");var c=[];return g(b,l(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function e(a){var c=[],d=l(c,b.noop);return d.chars(a),c.join("")}function f(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function g(a,c){function d(a,d,f,g){if(d=b.lowercase(d),D[d])for(;k.last()&&E[k.last()];)e("",k.last());C[d]&&k.last()==d&&e("",d),g=z[d]||!!g,g||k.push(d);var i={};f.replace(p,function(a,b,c,d,e){var f=c||d||e||"";i[b]=h(f)}),c.start&&c.start(d,i,g)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=k.length-1;f>=0&&k[f]!=d;f--);if(f>=0){for(e=k.length-1;e>=f;e--)c.end&&c.end(k[e]);k.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,g,i,j,k=[],l=a;for(k.last=function(){return k[k.length-1]};a;){if(j="",g=!0,k.last()&&G[k.last()])a=a.replace(new RegExp("([^]*)<\\s*\\/\\s*"+k.last()+"[^>]*>","i"),function(a,b){return b=b.replace(s,"$1").replace(v,"$1"),c.chars&&c.chars(h(b)),""}),e("",k.last());else{if(y.test(a)){if(i=a.match(y)){i[0];c.whitespace&&c.whitespace(i[0]),a=a.replace(i[0],""),g=!1}}else t.test(a)?(i=a.match(t),i&&(c.comment&&c.comment(i[1]),a=a.replace(i[0],""),g=!1)):u.test(a)?(i=a.match(u),i&&(a=a.replace(i[0],""),g=!1)):r.test(a)?(i=a.match(o),i&&(a=a.substring(i[0].length),i[0].replace(o,e),g=!1)):q.test(a)&&(i=a.match(n),i?(i[4]&&(a=a.substring(i[0].length),i[0].replace(n,d)),g=!1):(j+="<",a=a.substring(1)));g&&(f=a.indexOf("<"),j+=0>f?a:a.substring(0,f),a=0>f?"":a.substring(f),c.chars&&c.chars(h(j)))}if(a==l)throw m("badparse","The sanitizer was unable to parse the following block of html: {0}",a);l=a}e()}function h(a){if(!a)return"";var b=N.exec(a),c=b[1],d=b[3],e=b[2];return e&&(M.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in M?M.textContent:M.innerText),c+e+d}function i(a){return a.replace(/&/g,"&amp;").replace(w,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(x,function(a){var b=a.charCodeAt(0);return 159>=b||173==b||b>=1536&&1540>=b||1807==b||6068==b||6069==b||b>=8204&&8207>=b||b>=8232&&8239>=b||b>=8288&&8303>=b||65279==b||b>=65520&&65535>=b?"&#"+b+";":a}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(a){var c="",d=a.split(";");return b.forEach(d,function(a){var d=a.split(":");if(2==d.length){var e=O(b.lowercase(d[0])),a=O(b.lowercase(d[1]));(("color"===e||"background-color"===e)&&(a.match(/^rgb\([0-9%,\. ]*\)$/i)||a.match(/^rgba\([0-9%,\. ]*\)$/i)||a.match(/^hsl\([0-9%,\. ]*\)$/i)||a.match(/^hsla\([0-9%,\. ]*\)$/i)||a.match(/^#[0-9a-f]{3,6}$/i)||a.match(/^[a-z]*$/i))||"text-align"===e&&("left"===a||"right"===a||"center"===a||"justify"===a)||"float"===e&&("left"===a||"right"===a||"none"===a)||("width"===e||"height"===e)&&a.match(/[0-9\.]*(px|em|rem|%)/)||"direction"===e&&a.match(/^ltr|rtl|initial|inherit$/))&&(c+=e+": "+a+";")}}),c}function k(a,b,c,d){return"img"===a&&b["ta-insert-video"]&&("ta-insert-video"===c||"allowfullscreen"===c||"frameborder"===c||"contenteditable"===c&&"false"===d)?!0:!1}function l(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&G[a]&&(d=a),d||H[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,g){var h=b.lowercase(g),l="img"===a&&"src"===h||"background"===h;("style"===h&&""!==(d=j(d))||k(a,f,h,d)||L[h]===!0&&(I[h]!==!0||c(d,l)))&&(e(" "),e(g),e('="'),e(i(d)),e('"'))}),e(g?"/>":">"))},comment:function(a){e(a)},whitespace:function(a){e(i(a))},end:function(a){a=b.lowercase(a),d||H[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(i(a))}}}var m=b.$$minErr("$sanitize"),n=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,o=/^<\/\s*([\w:-]+)[^>]*>/,p=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,q=/^</,r=/^<\//,s=/<!--(.*?)-->/g,t=/(^<!--.*?-->)/,u=/<!DOCTYPE([^>]*?)>/i,v=/<!\[CDATA\[(.*?)]]>/g,w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,x=/([^\#-~| |!])/g,y=/^(\s+)/,z=f("area,br,col,hr,img,wbr,input"),A=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),B=f("rp,rt"),C=b.extend({},B,A),D=b.extend({},A,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),E=b.extend({},B,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),F=f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),G=f("script,style"),H=b.extend({},z,D,E,C,F),I=f("background,cite,href,longdesc,src,usemap,xlink:href"),J=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,id,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),K=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),L=b.extend({},I,K,J),M=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/,O=function(){return String.prototype.trim?function(a){return b.isString(a)?a.trim():a}:function(a){return b.isString(a)?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):a}}();b.module("ngSanitize",[]).provider("$sanitize",d),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,d=/^mailto:/;return function(f,g){function h(a){a&&n.push(e(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace(/"/g,"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]||j[4]||(k=(j[3]?"http://":"mailto:")+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(d,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular)}({},function(){return this}());;
/*
 angular-file-upload v2.2.0
 https://github.com/nervgh/angular-file-upload
 */

(function webpackUniversalModuleDefinition(root, factory) {
 if(typeof exports === 'object' && typeof module === 'object')
  module.exports = factory();
 else if(typeof define === 'function' && define.amd)
  define([], factory);
 else if(typeof exports === 'object')
  exports["angular-file-upload"] = factory();
 else
  root["angular-file-upload"] = factory();
})(this, function() {
 return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
   /******/
   /******/ 		// Check if module is in cache
   /******/ 		if(installedModules[moduleId])
   /******/ 			return installedModules[moduleId].exports;
   /******/
   /******/ 		// Create a new module (and put it into the cache)
   /******/ 		var module = installedModules[moduleId] = {
    /******/ 			exports: {},
    /******/ 			id: moduleId,
    /******/ 			loaded: false
    /******/ 		};
   /******/
   /******/ 		// Execute the module function
   /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
   /******/
   /******/ 		// Flag the module as loaded
   /******/ 		module.loaded = true;
   /******/
   /******/ 		// Return the exports of the module
   /******/ 		return module.exports;
   /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var options = _interopRequire(__webpack_require__(2));

   var serviceFileUploader = _interopRequire(__webpack_require__(3));

   var serviceFileLikeObject = _interopRequire(__webpack_require__(4));

   var serviceFileItem = _interopRequire(__webpack_require__(5));

   var serviceFileDirective = _interopRequire(__webpack_require__(6));

   var serviceFileSelect = _interopRequire(__webpack_require__(7));

   var serviceFileDrop = _interopRequire(__webpack_require__(8));

   var serviceFileOver = _interopRequire(__webpack_require__(9));

   var directiveFileSelect = _interopRequire(__webpack_require__(10));

   var directiveFileDrop = _interopRequire(__webpack_require__(11));

   var directiveFileOver = _interopRequire(__webpack_require__(12));

   angular.module(CONFIG.name, []).value("fileUploaderOptions", options).factory("FileUploader", serviceFileUploader).factory("FileLikeObject", serviceFileLikeObject).factory("FileItem", serviceFileItem).factory("FileDirective", serviceFileDirective).factory("FileSelect", serviceFileSelect).factory("FileDrop", serviceFileDrop).factory("FileOver", serviceFileOver).directive("nvFileSelect", directiveFileSelect).directive("nvFileDrop", directiveFileDrop).directive("nvFileOver", directiveFileOver).run(["FileUploader", "FileLikeObject", "FileItem", "FileDirective", "FileSelect", "FileDrop", "FileOver", function (FileUploader, FileLikeObject, FileItem, FileDirective, FileSelect, FileDrop, FileOver) {
    // only for compatibility
    FileUploader.FileLikeObject = FileLikeObject;
    FileUploader.FileItem = FileItem;
    FileUploader.FileDirective = FileDirective;
    FileUploader.FileSelect = FileSelect;
    FileUploader.FileDrop = FileDrop;
    FileUploader.FileOver = FileOver;
   }]);

   /***/ },
  /* 1 */
  /***/ function(module, exports) {

   module.exports = {
    "name": "angularFileUpload"
   };

   /***/ },
  /* 2 */
  /***/ function(module, exports) {

   "use strict";

   module.exports = {
    url: "/",
    alias: "file",
    headers: {},
    queue: [],
    progress: 0,
    autoUpload: false,
    removeAfterUpload: false,
    method: "POST",
    filters: [],
    formData: [],
    queueLimit: Number.MAX_VALUE,
    withCredentials: false
   };

   /***/ },
  /* 3 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var copy = angular.copy;
   var extend = angular.extend;
   var forEach = angular.forEach;
   var isObject = angular.isObject;
   var isNumber = angular.isNumber;
   var isDefined = angular.isDefined;
   var isArray = angular.isArray;
   var element = angular.element;

   module.exports = function (fileUploaderOptions, $rootScope, $http, $window, FileLikeObject, FileItem) {
    var File = $window.File;
    var FormData = $window.FormData;

    var FileUploader = (function () {
     /**********************
      * PUBLIC
      **********************/
     /**
      * Creates an instance of FileUploader
      * @param {Object} [options]
      * @constructor
      */

     function FileUploader(options) {
      _classCallCheck(this, FileUploader);

      var settings = copy(fileUploaderOptions);

      extend(this, settings, options, {
       isUploading: false,
       _nextIndex: 0,
       _failFilterIndex: -1,
       _directives: { select: [], drop: [], over: [] }
      });

      // add default filters
      this.filters.unshift({ name: "queueLimit", fn: this._queueLimitFilter });
      this.filters.unshift({ name: "folder", fn: this._folderFilter });
     }

     _createClass(FileUploader, {
      addToQueue: {
       /**
        * Adds items to the queue
        * @param {File|HTMLInputElement|Object|FileList|Array<Object>} files
        * @param {Object} [options]
        * @param {Array<Function>|String} filters
        */

       value: function addToQueue(files, options, filters) {
        var _this = this;

        var list = this.isArrayLikeObject(files) ? files : [files];
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];

        forEach(list, function (some /*{File|HTMLInputElement|Object}*/) {
         var temp = new FileLikeObject(some);

         if (_this._isValidFile(temp, arrayOfFilters, options)) {
          var fileItem = new FileItem(_this, some, options);
          addedFileItems.push(fileItem);
          _this.queue.push(fileItem);
          _this._onAfterAddingFile(fileItem);
         } else {
          var filter = arrayOfFilters[_this._failFilterIndex];
          _this._onWhenAddingFileFailed(temp, filter, options);
         }
        });

        if (this.queue.length !== count) {
         this._onAfterAddingAll(addedFileItems);
         this.progress = this._getTotalProgress();
        }

        this._render();
        if (this.autoUpload) this.uploadAll();
       }
      },
      removeFromQueue: {
       /**
        * Remove items from the queue. Remove last: index = -1
        * @param {FileItem|Number} value
        */

       value: function removeFromQueue(value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) item.cancel();
        this.queue.splice(index, 1);
        item._destroy();
        this.progress = this._getTotalProgress();
       }
      },
      clearQueue: {
       /**
        * Clears the queue
        */

       value: function clearQueue() {
        while (this.queue.length) {
         this.queue[0].remove();
        }
        this.progress = 0;
       }
      },
      uploadItem: {
       /**
        * Uploads a item from the queue
        * @param {FileItem|Number} value
        */

       value: function uploadItem(value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.isHTML5 ? "_xhrTransport" : "_iframeTransport";

        item._prepareToUploading();
        if (this.isUploading) {
         return;
        }this.isUploading = true;
        this[transport](item);
       }
      },
      cancelItem: {
       /**
        * Cancels uploading of item from the queue
        * @param {FileItem|Number} value
        */

       value: function cancelItem(value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.isHTML5 ? "_xhr" : "_form";
        if (item && item.isUploading) item[prop].abort();
       }
      },
      uploadAll: {
       /**
        * Uploads all not uploaded items of queue
        */

       value: function uploadAll() {
        var items = this.getNotUploadedItems().filter(function (item) {
         return !item.isUploading;
        });
        if (!items.length) {
         return;
        }forEach(items, function (item) {
         return item._prepareToUploading();
        });
        items[0].upload();
       }
      },
      cancelAll: {
       /**
        * Cancels all uploads
        */

       value: function cancelAll() {
        var items = this.getNotUploadedItems();
        forEach(items, function (item) {
         return item.cancel();
        });
       }
      },
      isFile: {
       /**
        * Returns "true" if value an instance of File
        * @param {*} value
        * @returns {Boolean}
        * @private
        */

       value: function isFile(value) {
        return this.constructor.isFile(value);
       }
      },
      isFileLikeObject: {
       /**
        * Returns "true" if value an instance of FileLikeObject
        * @param {*} value
        * @returns {Boolean}
        * @private
        */

       value: function isFileLikeObject(value) {
        return this.constructor.isFileLikeObject(value);
       }
      },
      isArrayLikeObject: {
       /**
        * Returns "true" if value is array like object
        * @param {*} value
        * @returns {Boolean}
        */

       value: function isArrayLikeObject(value) {
        return this.constructor.isArrayLikeObject(value);
       }
      },
      getIndexOfItem: {
       /**
        * Returns a index of item from the queue
        * @param {Item|Number} value
        * @returns {Number}
        */

       value: function getIndexOfItem(value) {
        return isNumber(value) ? value : this.queue.indexOf(value);
       }
      },
      getNotUploadedItems: {
       /**
        * Returns not uploaded items
        * @returns {Array}
        */

       value: function getNotUploadedItems() {
        return this.queue.filter(function (item) {
         return !item.isUploaded;
        });
       }
      },
      getReadyItems: {
       /**
        * Returns items ready for upload
        * @returns {Array}
        */

       value: function getReadyItems() {
        return this.queue.filter(function (item) {
         return item.isReady && !item.isUploading;
        }).sort(function (item1, item2) {
         return item1.index - item2.index;
        });
       }
      },
      destroy: {
       /**
        * Destroys instance of FileUploader
        */

       value: function destroy() {
        var _this = this;

        forEach(this._directives, function (key) {
         forEach(_this._directives[key], function (object) {
          object.destroy();
         });
        });
       }
      },
      onAfterAddingAll: {
       /**
        * Callback
        * @param {Array} fileItems
        */

       value: function onAfterAddingAll(fileItems) {}
      },
      onAfterAddingFile: {
       /**
        * Callback
        * @param {FileItem} fileItem
        */

       value: function onAfterAddingFile(fileItem) {}
      },
      onWhenAddingFileFailed: {
       /**
        * Callback
        * @param {File|Object} item
        * @param {Object} filter
        * @param {Object} options
        */

       value: function onWhenAddingFileFailed(item, filter, options) {}
      },
      onBeforeUploadItem: {
       /**
        * Callback
        * @param {FileItem} fileItem
        */

       value: function onBeforeUploadItem(fileItem) {}
      },
      onProgressItem: {
       /**
        * Callback
        * @param {FileItem} fileItem
        * @param {Number} progress
        */

       value: function onProgressItem(fileItem, progress) {}
      },
      onProgressAll: {
       /**
        * Callback
        * @param {Number} progress
        */

       value: function onProgressAll(progress) {}
      },
      onSuccessItem: {
       /**
        * Callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onSuccessItem(item, response, status, headers) {}
      },
      onErrorItem: {
       /**
        * Callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onErrorItem(item, response, status, headers) {}
      },
      onCancelItem: {
       /**
        * Callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onCancelItem(item, response, status, headers) {}
      },
      onCompleteItem: {
       /**
        * Callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onCompleteItem(item, response, status, headers) {}
      },
      onCompleteAll: {
       /**
        * Callback
        */

       value: function onCompleteAll() {}
      },
      _getTotalProgress: {
       /**********************
        * PRIVATE
        **********************/
       /**
        * Returns the total progress
        * @param {Number} [value]
        * @returns {Number}
        * @private
        */

       value: function _getTotalProgress(value) {
        if (this.removeAfterUpload) {
         return value || 0;
        }var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = (value || 0) * ratio / 100;

        return Math.round(uploaded * ratio + current);
       }
      },
      _getFilters: {
       /**
        * Returns array of filters
        * @param {Array<Function>|String} filters
        * @returns {Array<Function>}
        * @private
        */

       value: function _getFilters(filters) {
        if (!filters) {
         return this.filters;
        }if (isArray(filters)) {
         return filters;
        }var names = filters.match(/[^\s,]+/g);
        return this.filters.filter(function (filter) {
         return names.indexOf(filter.name) !== -1;
        });
       }
      },
      _render: {
       /**
        * Updates html
        * @private
        */

       value: function _render() {
        if (!$rootScope.$$phase) $rootScope.$apply();
       }
      },
      _folderFilter: {
       /**
        * Returns "true" if item is a file (not folder)
        * @param {File|FileLikeObject} item
        * @returns {Boolean}
        * @private
        */

       value: function _folderFilter(item) {
        return !!(item.size || item.type);
       }
      },
      _queueLimitFilter: {
       /**
        * Returns "true" if the limit has not been reached
        * @returns {Boolean}
        * @private
        */

       value: function _queueLimitFilter() {
        return this.queue.length < this.queueLimit;
       }
      },
      _isValidFile: {
       /**
        * Returns "true" if file pass all filters
        * @param {File|Object} file
        * @param {Array<Function>} filters
        * @param {Object} options
        * @returns {Boolean}
        * @private
        */

       value: function _isValidFile(file, filters, options) {
        var _this = this;

        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
         _this._failFilterIndex++;
         return filter.fn.call(_this, file, options);
        });
       }
      },
      _isSuccessCode: {
       /**
        * Checks whether upload successful
        * @param {Number} status
        * @returns {Boolean}
        * @private
        */

       value: function _isSuccessCode(status) {
        return status >= 200 && status < 300 || status === 304;
       }
      },
      _transformResponse: {
       /**
        * Transforms the server response
        * @param {*} response
        * @param {Object} headers
        * @returns {*}
        * @private
        */

       value: function _transformResponse(response, headers) {
        var headersGetter = this._headersGetter(headers);
        forEach($http.defaults.transformResponse, function (transformFn) {
         response = transformFn(response, headersGetter);
        });
        return response;
       }
      },
      _parseHeaders: {
       /**
        * Parsed response headers
        * @param headers
        * @returns {Object}
        * @see https://github.com/angular/angular.js/blob/master/src/ng/http.js
        * @private
        */

       value: function _parseHeaders(headers) {
        var parsed = {},
            key,
            val,
            i;

        if (!headers) {
         return parsed;
        }forEach(headers.split("\n"), function (line) {
         i = line.indexOf(":");
         key = line.slice(0, i).trim().toLowerCase();
         val = line.slice(i + 1).trim();

         if (key) {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
         }
        });

        return parsed;
       }
      },
      _headersGetter: {
       /**
        * Returns function that returns headers
        * @param {Object} parsedHeaders
        * @returns {Function}
        * @private
        */

       value: function _headersGetter(parsedHeaders) {
        return function (name) {
         if (name) {
          return parsedHeaders[name.toLowerCase()] || null;
         }
         return parsedHeaders;
        };
       }
      },
      _xhrTransport: {
       /**
        * The XMLHttpRequest transport
        * @param {FileItem} item
        * @private
        */

       value: function _xhrTransport(item) {
        var _this = this;

        var xhr = item._xhr = new XMLHttpRequest();
        var form = new FormData();

        this._onBeforeUploadItem(item);

        forEach(item.formData, function (obj) {
         forEach(obj, function (value, key) {
          form.append(key, value);
         });
        });

        if (typeof item._file.size != "number") {
         throw new TypeError("The file specified is no longer valid");
        }

        form.append(item.alias, item._file, item.file.name);

        xhr.upload.onprogress = function (event) {
         var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
         _this._onProgressItem(item, progress);
        };

        xhr.onload = function () {
         var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
         var response = _this._transformResponse(xhr.response, headers);
         var gist = _this._isSuccessCode(xhr.status) ? "Success" : "Error";
         var method = "_on" + gist + "Item";
         _this[method](item, response, xhr.status, headers);
         _this._onCompleteItem(item, response, xhr.status, headers);
        };

        xhr.onerror = function () {
         var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
         var response = _this._transformResponse(xhr.response, headers);
         _this._onErrorItem(item, response, xhr.status, headers);
         _this._onCompleteItem(item, response, xhr.status, headers);
        };

        xhr.onabort = function () {
         var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
         var response = _this._transformResponse(xhr.response, headers);
         _this._onCancelItem(item, response, xhr.status, headers);
         _this._onCompleteItem(item, response, xhr.status, headers);
        };

        xhr.open(item.method, item.url, true);

        xhr.withCredentials = item.withCredentials;

        forEach(item.headers, function (value, name) {
         xhr.setRequestHeader(name, value);
        });

        xhr.send(form);
        this._render();
       }
      },
      _iframeTransport: {
       /**
        * The IFrame transport
        * @param {FileItem} item
        * @private
        */

       value: function _iframeTransport(item) {
        var _this = this;

        var form = element("<form style=\"display: none;\" />");
        var iframe = element("<iframe name=\"iframeTransport" + Date.now() + "\">");
        var input = item._input;

        if (item._form) item._form.replaceWith(input); // remove old form
        item._form = form; // save link to new form

        this._onBeforeUploadItem(item);

        input.prop("name", item.alias);

        forEach(item.formData, function (obj) {
         forEach(obj, function (value, key) {
          var element_ = element("<input type=\"hidden\" name=\"" + key + "\" />");
          element_.val(value);
          form.append(element_);
         });
        });

        form.prop({
         action: item.url,
         method: "POST",
         target: iframe.prop("name"),
         enctype: "multipart/form-data",
         encoding: "multipart/form-data" // old IE
        });

        iframe.bind("load", function () {
         var html = "";
         var status = 200;

         try {
          // Fix for legacy IE browsers that loads internal error page
          // when failed WS response received. In consequence iframe
          // content access denied error is thrown becouse trying to
          // access cross domain page. When such thing occurs notifying
          // with empty response object. See more info at:
          // http://stackoverflow.com/questions/151362/access-is-denied-error-on-accessing-iframe-document-object
          // Note that if non standard 4xx or 5xx error code returned
          // from WS then response content can be accessed without error
          // but 'XHR' status becomes 200. In order to avoid confusion
          // returning response via same 'success' event handler.

          // fixed angular.contents() for iframes
          html = iframe[0].contentDocument.body.innerHTML;
         } catch (e) {
          // in case we run into the access-is-denied error or we have another error on the server side
          // (intentional 500,40... errors), we at least say 'something went wrong' -> 500
          status = 500;
         }

         var xhr = { response: html, status: status, dummy: true };
         var headers = {};
         var response = _this._transformResponse(xhr.response, headers);

         _this._onSuccessItem(item, response, xhr.status, headers);
         _this._onCompleteItem(item, response, xhr.status, headers);
        });

        form.abort = function () {
         var xhr = { status: 0, dummy: true };
         var headers = {};
         var response;

         iframe.unbind("load").prop("src", "javascript:false;");
         form.replaceWith(input);

         _this._onCancelItem(item, response, xhr.status, headers);
         _this._onCompleteItem(item, response, xhr.status, headers);
        };

        input.after(form);
        form.append(input).append(iframe);

        form[0].submit();
        this._render();
       }
      },
      _onWhenAddingFileFailed: {
       /**
        * Inner callback
        * @param {File|Object} item
        * @param {Object} filter
        * @param {Object} options
        * @private
        */

       value: function _onWhenAddingFileFailed(item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
       }
      },
      _onAfterAddingFile: {
       /**
        * Inner callback
        * @param {FileItem} item
        */

       value: function _onAfterAddingFile(item) {
        this.onAfterAddingFile(item);
       }
      },
      _onAfterAddingAll: {
       /**
        * Inner callback
        * @param {Array<FileItem>} items
        */

       value: function _onAfterAddingAll(items) {
        this.onAfterAddingAll(items);
       }
      },
      _onBeforeUploadItem: {
       /**
        *  Inner callback
        * @param {FileItem} item
        * @private
        */

       value: function _onBeforeUploadItem(item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
       }
      },
      _onProgressItem: {
       /**
        * Inner callback
        * @param {FileItem} item
        * @param {Number} progress
        * @private
        */

       value: function _onProgressItem(item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
       }
      },
      _onSuccessItem: {
       /**
        * Inner callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onSuccessItem(item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
       }
      },
      _onErrorItem: {
       /**
        * Inner callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onErrorItem(item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
       }
      },
      _onCancelItem: {
       /**
        * Inner callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onCancelItem(item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
       }
      },
      _onCompleteItem: {
       /**
        * Inner callback
        * @param {FileItem} item
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onCompleteItem(item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);

        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;

        if (isDefined(nextItem)) {
         nextItem.upload();
         return;
        }

        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
       }
      }
     }, {
      isFile: {
       /**********************
        * STATIC
        **********************/
       /**
        * Returns "true" if value an instance of File
        * @param {*} value
        * @returns {Boolean}
        * @private
        */

       value: function isFile(value) {
        return File && value instanceof File;
       }
      },
      isFileLikeObject: {
       /**
        * Returns "true" if value an instance of FileLikeObject
        * @param {*} value
        * @returns {Boolean}
        * @private
        */

       value: function isFileLikeObject(value) {
        return value instanceof FileLikeObject;
       }
      },
      isArrayLikeObject: {
       /**
        * Returns "true" if value is array like object
        * @param {*} value
        * @returns {Boolean}
        */

       value: function isArrayLikeObject(value) {
        return isObject(value) && "length" in value;
       }
      },
      inherit: {
       /**
        * Inherits a target (Class_1) by a source (Class_2)
        * @param {Function} target
        * @param {Function} source
        */

       value: function inherit(target, source) {
        target.prototype = Object.create(source.prototype);
        target.prototype.constructor = target;
        target.super_ = source;
       }
      }
     });

     return FileUploader;
    })();

    /**********************
     * PUBLIC
     **********************/
    /**
     * Checks a support the html5 uploader
     * @returns {Boolean}
     * @readonly
     */
    FileUploader.prototype.isHTML5 = !!(File && FormData);
    /**********************
     * STATIC
     **********************/
    /**
     * @borrows FileUploader.prototype.isHTML5
     */
    FileUploader.isHTML5 = FileUploader.prototype.isHTML5;

    return FileUploader;
   };

   module.exports.$inject = ["fileUploaderOptions", "$rootScope", "$http", "$window", "FileLikeObject", "FileItem"];

   /***/ },
  /* 4 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var copy = angular.copy;
   var isElement = angular.isElement;
   var isString = angular.isString;

   module.exports = function () {
    var FileLikeObject = (function () {
     /**
      * Creates an instance of FileLikeObject
      * @param {File|HTMLInputElement|Object} fileOrInput
      * @constructor
      */

     function FileLikeObject(fileOrInput) {
      _classCallCheck(this, FileLikeObject);

      var isInput = isElement(fileOrInput);
      var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
      var postfix = isString(fakePathOrObject) ? "FakePath" : "Object";
      var method = "_createFrom" + postfix;
      this[method](fakePathOrObject);
     }

     _createClass(FileLikeObject, {
      _createFromFakePath: {
       /**
        * Creates file like object from fake path string
        * @param {String} path
        * @private
        */

       value: function _createFromFakePath(path) {
        this.lastModifiedDate = null;
        this.size = null;
        this.type = "like/" + path.slice(path.lastIndexOf(".") + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf("/") + path.lastIndexOf("\\") + 2);
       }
      },
      _createFromObject: {
       /**
        * Creates file like object from object
        * @param {File|FileLikeObject} object
        * @private
        */

       value: function _createFromObject(object) {
        this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
       }
      }
     });

     return FileLikeObject;
    })();

    return FileLikeObject;
   };

   module.exports.$inject = [];

   /***/ },
  /* 5 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var copy = angular.copy;
   var extend = angular.extend;
   var element = angular.element;
   var isElement = angular.isElement;

   module.exports = function ($compile, FileLikeObject) {
    var FileItem = (function () {
     /**
      * Creates an instance of FileItem
      * @param {FileUploader} uploader
      * @param {File|HTMLInputElement|Object} some
      * @param {Object} options
      * @constructor
      */

     function FileItem(uploader, some, options) {
      _classCallCheck(this, FileItem);

      var isInput = isElement(some);
      var input = isInput ? element(some) : null;
      var file = !isInput ? some : null;

      extend(this, {
       url: uploader.url,
       alias: uploader.alias,
       headers: copy(uploader.headers),
       formData: copy(uploader.formData),
       removeAfterUpload: uploader.removeAfterUpload,
       withCredentials: uploader.withCredentials,
       method: uploader.method
      }, options, {
       uploader: uploader,
       file: new FileLikeObject(some),
       isReady: false,
       isUploading: false,
       isUploaded: false,
       isSuccess: false,
       isCancel: false,
       isError: false,
       progress: 0,
       index: null,
       _file: file,
       _input: input
      });

      if (input) this._replaceNode(input);
     }

     _createClass(FileItem, {
      upload: {
       /**********************
        * PUBLIC
        **********************/
       /**
        * Uploads a FileItem
        */

       value: function upload() {
        try {
         this.uploader.uploadItem(this);
        } catch (e) {
         this.uploader._onCompleteItem(this, "", 0, []);
         this.uploader._onErrorItem(this, "", 0, []);
        }
       }
      },
      cancel: {
       /**
        * Cancels uploading of FileItem
        */

       value: function cancel() {
        this.uploader.cancelItem(this);
       }
      },
      remove: {
       /**
        * Removes a FileItem
        */

       value: function remove() {
        this.uploader.removeFromQueue(this);
       }
      },
      onBeforeUpload: {
       /**
        * Callback
        * @private
        */

       value: function onBeforeUpload() {}
      },
      onProgress: {
       /**
        * Callback
        * @param {Number} progress
        * @private
        */

       value: function onProgress(progress) {}
      },
      onSuccess: {
       /**
        * Callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onSuccess(response, status, headers) {}
      },
      onError: {
       /**
        * Callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onError(response, status, headers) {}
      },
      onCancel: {
       /**
        * Callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onCancel(response, status, headers) {}
      },
      onComplete: {
       /**
        * Callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        */

       value: function onComplete(response, status, headers) {}
      },
      _onBeforeUpload: {
       /**********************
        * PRIVATE
        **********************/
       /**
        * Inner callback
        */

       value: function _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
       }
      },
      _onProgress: {
       /**
        * Inner callback
        * @param {Number} progress
        * @private
        */

       value: function _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
       }
      },
      _onSuccess: {
       /**
        * Inner callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = null;
        this.onSuccess(response, status, headers);
       }
      },
      _onError: {
       /**
        * Inner callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = null;
        this.onError(response, status, headers);
       }
      },
      _onCancel: {
       /**
        * Inner callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = null;
        this.onCancel(response, status, headers);
       }
      },
      _onComplete: {
       /**
        * Inner callback
        * @param {*} response
        * @param {Number} status
        * @param {Object} headers
        * @private
        */

       value: function _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.removeAfterUpload) this.remove();
       }
      },
      _destroy: {
       /**
        * Destroys a FileItem
        */

       value: function _destroy() {
        if (this._input) this._input.remove();
        if (this._form) this._form.remove();
        delete this._form;
        delete this._input;
       }
      },
      _prepareToUploading: {
       /**
        * Prepares to uploading
        * @private
        */

       value: function _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
       }
      },
      _replaceNode: {
       /**
        * Replaces input element on his clone
        * @param {JQLite|jQuery} input
        * @private
        */

       value: function _replaceNode(input) {
        var clone = $compile(input.clone())(input.scope());
        clone.prop("value", null); // FF fix
        input.css("display", "none");
        input.after(clone); // remove jquery dependency
       }
      }
     });

     return FileItem;
    })();

    return FileItem;
   };

   module.exports.$inject = ["$compile", "FileLikeObject"];

   /***/ },
  /* 6 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var extend = angular.extend;

   module.exports = function () {
    var FileDirective = (function () {
     /**
      * Creates instance of {FileDirective} object
      * @param {Object} options
      * @param {Object} options.uploader
      * @param {HTMLElement} options.element
      * @param {Object} options.events
      * @param {String} options.prop
      * @constructor
      */

     function FileDirective(options) {
      _classCallCheck(this, FileDirective);

      extend(this, options);
      this.uploader._directives[this.prop].push(this);
      this._saveLinks();
      this.bind();
     }

     _createClass(FileDirective, {
      bind: {
       /**
        * Binds events handles
        */

       value: function bind() {
        for (var key in this.events) {
         var prop = this.events[key];
         this.element.bind(key, this[prop]);
        }
       }
      },
      unbind: {
       /**
        * Unbinds events handles
        */

       value: function unbind() {
        for (var key in this.events) {
         this.element.unbind(key, this.events[key]);
        }
       }
      },
      destroy: {
       /**
        * Destroys directive
        */

       value: function destroy() {
        var index = this.uploader._directives[this.prop].indexOf(this);
        this.uploader._directives[this.prop].splice(index, 1);
        this.unbind();
        // this.element = null;
       }
      },
      _saveLinks: {
       /**
        * Saves links to functions
        * @private
        */

       value: function _saveLinks() {
        for (var key in this.events) {
         var prop = this.events[key];
         this[prop] = this[prop].bind(this);
        }
       }
      }
     });

     return FileDirective;
    })();

    /**
     * Map of events
     * @type {Object}
     */
    FileDirective.prototype.events = {};

    return FileDirective;
   };

   module.exports.$inject = [];

   /***/ },
  /* 7 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

   var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var extend = angular.extend;

   module.exports = function (FileDirective) {
    var FileSelect = (function (_FileDirective) {
     /**
      * Creates instance of {FileSelect} object
      * @param {Object} options
      * @constructor
      */

     function FileSelect(options) {
      _classCallCheck(this, FileSelect);

      var extendedOptions = extend(options, {
       // Map of events
       events: {
        $destroy: "destroy",
        change: "onChange"
       },
       // Name of property inside uploader._directive object
       prop: "select"
      });

      _get(Object.getPrototypeOf(FileSelect.prototype), "constructor", this).call(this, extendedOptions);

      if (!this.uploader.isHTML5) {
       this.element.removeAttr("multiple");
      }
      this.element.prop("value", null); // FF fix
     }

     _inherits(FileSelect, _FileDirective);

     _createClass(FileSelect, {
      getOptions: {
       /**
        * Returns options
        * @return {Object|undefined}
        */

       value: function getOptions() {}
      },
      getFilters: {
       /**
        * Returns filters
        * @return {Array<Function>|String|undefined}
        */

       value: function getFilters() {}
      },
      isEmptyAfterSelection: {
       /**
        * If returns "true" then HTMLInputElement will be cleared
        * @returns {Boolean}
        */

       value: function isEmptyAfterSelection() {
        return !!this.element.attr("multiple");
       }
      },
      onChange: {
       /**
        * Event handler
        */

       value: function onChange() {
        var files = this.uploader.isHTML5 ? this.element[0].files : this.element[0];
        var options = this.getOptions();
        var filters = this.getFilters();

        if (!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
         this.element.prop("value", null);
         this.element.replaceWith(this.element = this.element.clone(true)); // IE fix
        }
       }
      }
     });

     return FileSelect;
    })(FileDirective);

    return FileSelect;
   };

   module.exports.$inject = ["FileDirective"];

   /***/ },
  /* 8 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

   var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var extend = angular.extend;
   var forEach = angular.forEach;

   module.exports = function (FileDirective) {
    var FileDrop = (function (_FileDirective) {
     /**
      * Creates instance of {FileDrop} object
      * @param {Object} options
      * @constructor
      */

     function FileDrop(options) {
      _classCallCheck(this, FileDrop);

      var extendedOptions = extend(options, {
       // Map of events
       events: {
        $destroy: "destroy",
        drop: "onDrop",
        dragover: "onDragOver",
        dragleave: "onDragLeave"
       },
       // Name of property inside uploader._directive object
       prop: "drop"
      });

      _get(Object.getPrototypeOf(FileDrop.prototype), "constructor", this).call(this, extendedOptions);
     }

     _inherits(FileDrop, _FileDirective);

     _createClass(FileDrop, {
      getOptions: {
       /**
        * Returns options
        * @return {Object|undefined}
        */

       value: function getOptions() {}
      },
      getFilters: {
       /**
        * Returns filters
        * @return {Array<Function>|String|undefined}
        */

       value: function getFilters() {}
      },
      onDrop: {
       /**
        * Event handler
        */

       value: function onDrop(event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
         return;
        }var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        forEach(this.uploader._directives.over, this._removeOverClass, this);
        this.uploader.addToQueue(transfer.files, options, filters);
       }
      },
      onDragOver: {
       /**
        * Event handler
        */

       value: function onDragOver(event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
         return;
        }transfer.dropEffect = "copy";
        this._preventAndStop(event);
        forEach(this.uploader._directives.over, this._addOverClass, this);
       }
      },
      onDragLeave: {
       /**
        * Event handler
        */

       value: function onDragLeave(event) {
        if (event.currentTarget === this.element[0]) {
         return;
        }this._preventAndStop(event);
        forEach(this.uploader._directives.over, this._removeOverClass, this);
       }
      },
      _getTransfer: {
       /**
        * Helper
        */

       value: function _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
       }
      },
      _preventAndStop: {
       /**
        * Helper
        */

       value: function _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
       }
      },
      _haveFiles: {
       /**
        * Returns "true" if types contains files
        * @param {Object} types
        */

       value: function _haveFiles(types) {
        if (!types) {
         return false;
        }if (types.indexOf) {
         return types.indexOf("Files") !== -1;
        } else if (types.contains) {
         return types.contains("Files");
        } else {
         return false;
        }
       }
      },
      _addOverClass: {
       /**
        * Callback
        */

       value: function _addOverClass(item) {
        item.addOverClass();
       }
      },
      _removeOverClass: {
       /**
        * Callback
        */

       value: function _removeOverClass(item) {
        item.removeOverClass();
       }
      }
     });

     return FileDrop;
    })(FileDirective);

    return FileDrop;
   };

   module.exports.$inject = ["FileDirective"];

   /***/ },
  /* 9 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

   var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

   var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

   var CONFIG = _interopRequire(__webpack_require__(1));

   var extend = angular.extend;

   module.exports = function (FileDirective) {
    var FileOver = (function (_FileDirective) {
     /**
      * Creates instance of {FileDrop} object
      * @param {Object} options
      * @constructor
      */

     function FileOver(options) {
      _classCallCheck(this, FileOver);

      var extendedOptions = extend(options, {
       // Map of events
       events: {
        $destroy: "destroy"
       },
       // Name of property inside uploader._directive object
       prop: "over",
       // Over class
       overClass: "nv-file-over"
      });

      _get(Object.getPrototypeOf(FileOver.prototype), "constructor", this).call(this, extendedOptions);
     }

     _inherits(FileOver, _FileDirective);

     _createClass(FileOver, {
      addOverClass: {
       /**
        * Adds over class
        */

       value: function addOverClass() {
        this.element.addClass(this.getOverClass());
       }
      },
      removeOverClass: {
       /**
        * Removes over class
        */

       value: function removeOverClass() {
        this.element.removeClass(this.getOverClass());
       }
      },
      getOverClass: {
       /**
        * Returns over class
        * @returns {String}
        */

       value: function getOverClass() {
        return this.overClass;
       }
      }
     });

     return FileOver;
    })(FileDirective);

    return FileOver;
   };

   module.exports.$inject = ["FileDirective"];

   /***/ },
  /* 10 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var CONFIG = _interopRequire(__webpack_require__(1));

   module.exports = function ($parse, FileUploader, FileSelect) {

    return {
     link: function (scope, element, attributes) {
      var uploader = scope.$eval(attributes.uploader);

      if (!(uploader instanceof FileUploader)) {
       throw new TypeError("\"Uploader\" must be an instance of FileUploader");
      }

      var object = new FileSelect({
       uploader: uploader,
       element: element
      });

      object.getOptions = $parse(attributes.options).bind(object, scope);
      object.getFilters = function () {
       return attributes.filters;
      };
     }
    };
   };

   module.exports.$inject = ["$parse", "FileUploader", "FileSelect"];

   /***/ },
  /* 11 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var CONFIG = _interopRequire(__webpack_require__(1));

   module.exports = function ($parse, FileUploader, FileDrop) {

    return {
     link: function (scope, element, attributes) {
      var uploader = scope.$eval(attributes.uploader);

      if (!(uploader instanceof FileUploader)) {
       throw new TypeError("\"Uploader\" must be an instance of FileUploader");
      }

      if (!uploader.isHTML5) return;

      var object = new FileDrop({
       uploader: uploader,
       element: element
      });

      object.getOptions = $parse(attributes.options).bind(object, scope);
      object.getFilters = function () {
       return attributes.filters;
      };
     }
    };
   };

   module.exports.$inject = ["$parse", "FileUploader", "FileDrop"];

   /***/ },
  /* 12 */
  /***/ function(module, exports, __webpack_require__) {

   "use strict";

   var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

   var CONFIG = _interopRequire(__webpack_require__(1));

   module.exports = function (FileUploader, FileOver) {

    return {
     link: function (scope, element, attributes) {
      var uploader = scope.$eval(attributes.uploader);

      if (!(uploader instanceof FileUploader)) {
       throw new TypeError("\"Uploader\" must be an instance of FileUploader");
      }

      var object = new FileOver({
       uploader: uploader,
       element: element
      });

      object.getOverClass = function () {
       return attributes.overClass || object.overClass;
      };
     }
    };
   };

   module.exports.$inject = ["FileUploader", "FileOver"];

   /***/ }
  /******/ ])
});
;
//# sourceMappingURL=angular-file-upload.js.map;
/*
 * angular-socialshare
 * 2.3.1
 * 
 * A social media url and content share module for angularjs.
 * http://720kb.github.io/angular-socialshare
 * 
 * MIT license
 * Thu Sep 29 2016
 */
!function(e){"use strict";var o="socialshare",i="Socialshare",t=["facebook","facebook-messenger","sms","twitter","linkedin","google","pinterest","tumblr","reddit","stumbleupon","buffer","digg","delicious","vk","pocket","wordpress","flipboard","xing","hackernews","evernote","whatsapp","telegram","viber","skype","email","ok"],a=function(){var o=[{provider:"email",conf:{subject:"",body:"",to:"",cc:"",bcc:"",trigger:"click"}},{provider:"facebook",conf:{url:"",text:"",media:"",type:"",via:"",to:"",from:"",ref:"",display:"",source:"",caption:"",redirectUri:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"facebook-messenger",conf:{url:""}},{provider:"twitter",conf:{url:"",text:"",via:"",hashtags:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"linkedin",conf:{url:"",text:"",description:"",source:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"reddit",conf:{url:"",text:"",subreddit:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"vk",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"ok",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"digg",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"delicious",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"stumbleupon",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"pinterest",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"google",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"tumblr",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"buffer",conf:{url:"",text:"",via:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"pocket",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"flipboard",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"hackernews",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"wordpress",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"xing",conf:{url:"",text:"",media:"",follow:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"evernote",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"whatsapp",conf:{url:"",text:""}},{provider:"sms",conf:{url:"",text:"",to:"",trigger:"click"}},{provider:"telegram",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"viber",conf:{url:"",text:""}},{provider:"skype",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}}];return{configure:function(i){var a,r,s,h,c=0,n=0,p=e.injector(["ng"]).get("$log");if(i&&i.length>0)for(;c<i.length;c+=1)if(i[c].provider&&t.indexOf(i[c].provider)>-1){for(;n<o.length;n+=1)if(h=o[n],h&&h.provider&&i[c].provider===h.provider){for(a=Object.keys(h.conf),r=0;r<a.length;r+=1)s=a[r],s&&i[c].conf[s]&&(h.conf[s]=i[c].conf[s]);n=0;break}}else p.warn("Invalid provider at element "+c+" with name:"+i[c].provider)},$get:function(){return o}}},r=function(e,o){var i;o.socialshareType&&"feed"===o.socialshareType?(i="https://www.facebook.com/dialog/feed?",o.socialshareVia&&(i+="&app_id="+encodeURIComponent(o.socialshareVia)),o.socialshareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(o.socialshareRedirectUri)),o.socialshareUrl&&(i+="&link="+encodeURIComponent(o.socialshareUrl)),o.socialshareTo&&(i+="&to="+encodeURIComponent(o.socialshareTo)),o.socialshareDisplay&&(i+="&display="+encodeURIComponent(o.socialshareDisplay)),o.socialshareRef&&(i+="&ref="+encodeURIComponent(o.socialshareRef)),o.socialshareFrom&&(i+="&from="+encodeURIComponent(o.socialshareFrom)),o.socialshareDescription&&(i+="&description="+encodeURIComponent(o.socialshareDescription)),o.socialshareText&&(i+="&name="+encodeURIComponent(o.socialshareText)),o.socialshareCaption&&(i+="&caption="+encodeURIComponent(o.socialshareCaption)),o.socialshareMedia&&(i+="&picture="+encodeURIComponent(o.socialshareMedia)),o.socialshareSource&&(i+="&source="+encodeURIComponent(o.socialshareSource)),e.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)):o.socialshareType&&"send"===o.socialshareType?(i="https://www.facebook.com/dialog/send?",o.socialshareVia&&(i+="&app_id="+encodeURIComponent(o.socialshareVia)),o.socialshareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(o.socialshareRedirectUri)),o.socialshareUrl&&(i+="&link="+encodeURIComponent(o.socialshareUrl)),o.socialshareTo&&(i+="&to="+encodeURIComponent(o.socialshareTo)),o.socialshareDisplay&&(i+="&display="+encodeURIComponent(o.socialshareDisplay)),o.socialshareRef&&(i+="&ref="+encodeURIComponent(o.socialshareRef)),e.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)):e.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(o.socialshareUrl||e.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},s=function(e,o){var i="mailto:";o.socialshareTo&&(i+=encodeURIComponent(o.socialshareTo)),i+="?",o.socialshareBody&&(i+="body="+o.socialshareBody),o.socialshareSubject&&(i+="&subject="+encodeURIComponent(o.socialshareSubject)),o.socialshareCc&&(i+="&cc="+encodeURIComponent(o.socialshareCc)),o.socialshareBcc&&(i+="&bcc="+encodeURIComponent(o.socialshareBcc)),e.open(i,"_blank")},h=function(e,o,i){var t="fb-messenger://share?link="+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t),i.attr("target","_top")},c=function(e,o){var i="https://www.twitter.com/intent/tweet?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)),o.socialshareVia&&(i+="&via="+encodeURIComponent(o.socialshareVia)),o.socialshareHashtags&&(i+="&hashtags="+encodeURIComponent(o.socialshareHashtags)),i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Twitter","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},n=function(e,o){e.open("https://plus.google.com/share?url="+encodeURIComponent(o.socialshareUrl||e.location.href),"Google+","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},p=function(e,o){var i="https://www.reddit.com/";i+=o.socialshareSubreddit?"r/"+o.socialshareSubreddit+"/submit?url=":"submit?url=",o.socialsharePopupWidth<900&&(o.socialsharePopupWidth=900),o.socialsharePopupHeight<650&&(o.socialsharePopupHeight=650),e.open(i+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},l=function(e,o){e.open("https://www.stumbleupon.com/submit?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"StumbleUpon","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},d=function(e,o){var i="https://www.linkedin.com/shareArticle?mini=true";i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),o.socialshareDescription&&(i+="&summary="+encodeURIComponent(o.socialshareDescription)),o.socialshareSource&&(i+="&source="+encodeURIComponent(o.socialshareSource)),e.open(i,"Linkedin","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},u=function(e,o){e.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&media="+encodeURIComponent(o.socialshareMedia)+"&description="+encodeURIComponent(o.socialshareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},g=function(e,o){e.open("https://www.digg.com/submit?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Digg","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},f=function(e,o){if(o.socialshareMedia){var i="https://www.tumblr.com/share/photo?source="+encodeURIComponent(o.socialshareMedia);o.socialshareText&&(i+="&caption="+encodeURIComponent(o.socialshareText)),e.open(i,"Tumblr","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)}else e.open("https://www.tumblr.com/share/link?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&description="+encodeURIComponent(o.socialshareText),"Tumblr","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},m=function(e,o){var i="https://www.vk.com/share.php?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),o.socialshareMedia&&(i+="&image="+encodeURIComponent(o.socialshareMedia)),o.socialshareDescription&&(i+="&description="+encodeURIComponent(o.socialshareDescription)),e.open(i,"Vk","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},b=function(e,o){e.open("http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&st.comments="+encodeURIComponent(o.socialshareText),"Ok","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},k=function(e,o){e.open("https://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Delicious","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},U=function(e,o){var i="https://bufferapp.com/add?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)),o.socialshareVia&&(i+="&via="+encodeURIComponent(o.socialshareVia)),o.socialshareMedia&&(i+="&picture="+encodeURIComponent(o.socialshareMedia)),i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Buffer","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},w=function(e,o){var i="https://news.ycombinator.com/submitlink?";o.socialshareText&&(i+="t="+encodeURIComponent(o.socialshareText)+"&"),i+="u="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Hackernews","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},P=function(e,o){var i="https://share.flipboard.com/bookmarklet/popout?v=2&";o.socialshareText&&(i+="title="+encodeURIComponent(o.socialshareText)+"&"),i+="url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Flipboard","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},H=function(e,o){var i="https://getpocket.com/save?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)+"&"),i+="url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Pocket","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},v=function(e,o){var i="http://wordpress.com/press-this.php?";o.socialshareText&&(i+="t="+encodeURIComponent(o.socialshareText)+"&"),o.socialshareMedia&&(i+="i="+encodeURIComponent(o.socialshareMedia)+"&"),i+="u="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Wordpress","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},W=function(e,o){var i="";o.socialshareFollow&&(i="&follow_url="+encodeURIComponent(o.socialshareFollow)),e.open("https://www.xing.com/spi/shares/new?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+i,"Xing","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},R=function(e,o){var i="http://www.evernote.com/clip.action?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),e.open(i,"Evernote","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},C=function(e,o,i){var t="whatsapp://send?text="+encodeURIComponent(o.socialshareText+" ")+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t),i.attr("target","_top")},I=function(e,o,i){o.socialshareText.indexOf("%")>=0&&$log.warn('sending sms text with "%" sign is not supported');var t=encodeURIComponent(o.socialshareText.replace("%",""))+" - "+encodeURIComponent(o.socialshareUrl),a=o.socialshareTo||"",r="sms:"+a+"?&body="+t;i.attr("href",r),i.attr("target","_blank")},x=function(e,o,i){var t="viber://forward?text="+encodeURIComponent(o.socialshareText+" ")+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t),i.attr("target","_top")},S=function(e,o){var i="https://telegram.me/share/url?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&text="+encodeURIComponent(o.socialshareText)),e.open(i,"Telegram","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},T=function(e,o){var i="https://web.skype.com/share?source=button&url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&text="+encodeURIComponent(o.socialshareText)),e.open(i,"Skype","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},y=["$window","$log",function(e,o){this.emailShare=s,this.facebookShare=r,this.twitterShare=c,this.stumbleuponShare=l,this.pinterestShare=u,this.googleShare=n,this.bufferShare=U,this.hackernewsShare=w,this.okShare=b,this.deliciousShare=k,this.pocketShare=H,this.vkShare=m,this.flipboardShare=P,this.xingShare=W,this.diggShare=g,this.linkedinShare=d,this.wordpressShare=v,this.telegramShare=S,this.redditShare=p,this.evernoteShare=R,this.tumblrShare=f,this.skypeShare=T,this.smsShare=I,this.share=function(i){switch(i.provider){case"email":this.emailShare(e,i.attrs);break;case"sms":this.smsShare(e,o,i.attrs);break;case"facebook":this.facebookShare(e,i.attrs);break;case"twitter":this.twitterShare(e,i.attrs);break;case"pinterest":this.pinterestShare(e,i.attrs);break;case"ok":this.okShare(e,i.attrs);break;case"vk":this.vkShare(e,i.attrs);break;case"delicious":this.deliciousShare(e,i.attrs);break;case"digg":this.diggShare(e,i.attrs);break;case"google":this.googleShare(e,i.attrs);break;case"reddit":this.redditShare(e,i.attrs);break;case"hackernews":this.hackernewsShare(e,i.attrs);break;case"skype":this.skypeShare(e,i.attrs);break;case"evernote":this.evernoteShare(e,i.attrs);break;case"pocket":this.pocketShare(e,i.attrs);break;case"tumblr":this.tumblrShare(e,i.attrs);break;case"telegram":this.telegramShare(e,i.attrs);break;case"xing":this.xingShare(e,i.attrs);break;case"buffer":this.bufferShare(e,i.attrs);break;case"stumbleupon":this.stumbleuponShare(e,i.attrs);break;case"linkedin":this.linkedinShare(e,i.attrs);break;case"wordpress":this.wordpressShare(e,i.attrs);break;case"flipboard":this.flipboardShare(e,i.attrs);break;default:return}}}],z=["$window","socialshareConf","Socialshare","$log",function(e,o,i){var a=function(a,r,s){for(var h,c=0,n=(function(){return!(s.socialshareProvider in D)||void D[s.socialshareProvider](e,s,r)});c<o.length;c+=1)if(o[c].provider===s.socialshareProvider){h=o[c];break}t.indexOf(h.provider)===-1&&i.warn("Invalid Provider Name : "+s.socialshareProvider),s.socialshareUrl=s.socialshareUrl||h.conf.url,s.socialshareText=s.socialshareText||h.conf.text,s.socialshareMedia=s.socialshareMedia||h.conf.media,s.socialshareType=s.socialshareType||h.conf.type,s.socialshareVia=s.socialshareVia||h.conf.via,s.socialshareTo=s.socialshareTo||h.conf.to,s.socialshareFrom=s.socialshareFrom||h.conf.from,s.socialshareRef=s.socialshareRef||h.conf.ref,s.socialshareDislay=s.socialshareDislay||h.conf.display,s.socialshareSource=s.socialshareSource||h.conf.source,s.socialshareCaption=s.socialshareCaption||h.conf.caption,s.socialshareRedirectUri=s.socialshareRedirectUri||h.conf.redirectUri,s.socialshareTrigger=s.socialshareTrigger||h.conf.trigger,s.socialsharePopupHeight=s.socialsharePopupHeight||h.conf.popupHeight,s.socialsharePopupWidth=s.socialsharePopupWidth||h.conf.popupWidth,s.socialshareSubreddit=s.socialshareSubreddit||h.conf.subreddit,s.socialshareDescription=s.socialshareDescription||h.conf.description,s.socialshareFollow=s.socialshareFollow||h.conf.follow,s.socialshareHashtags=s.socialshareHashtags||h.conf.hashtags,s.socialshareBody=s.socialshareBody||h.conf.body,s.socialshareSubject=s.socialshareSubject||h.conf.subject,s.socialshareCc=s.socialshareCc||h.conf.cc,s.socialshareBcc=s.socialshareBcc||h.conf.bcc,s.socialshareTrigger?r.bind(s.socialshareTrigger,n):n()};return{restrict:"A",link:a}}],D={email:s,facebook:r,"facebook-messenger":h,twitter:c,google:n,reddit:p,stumbleupon:l,linkedin:d,pinterest:u,digg:g,tumblr:f,vk:m,ok:b,delicious:k,buffer:U,hackernews:w,flipboard:P,pocket:H,wordpress:v,xing:W,evernote:R,whatsapp:C,sms:I,telegram:S,viber:x,skype:T};e.module("720kb.socialshare",[]).provider(o+"Conf",a).service(i,y).directive(o,z)}(angular);
//# sourceMappingURL=angular-socialshare.js.map
;
// jQuery RoyalSlider plugin. Copyright Dmitry Semenov http://dimsemenov.com 
// jquery.royalslider v9.5.7
(function(n){function v(b,f){var c,a=this,e=window.navigator,g=e.userAgent.toLowerCase();a.uid=n.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,h=["webkit","Moz","ms","O"],k="",l=0,q;for(c=0;c<h.length;c++)q=h[c],!k&&q+"Transform"in d&&(k=q),q=q.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[q+"RequestAnimationFrame"],window.cancelAnimationFrame=window[q+"CancelAnimationFrame"]||window[q+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-l)),e=window.setTimeout(function(){a(c+d)},d);l=c+d;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=g.match(/(ipad)/);a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);c=function(a){a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||
[];return{browser:a[1]||"",version:a[2]||"0"}}(g);h={};c.browser&&(h[c.browser]=!0,h.version=c.version);h.chrome&&(h.webkit=!0);a._a=h;a.isAndroid=-1<g.indexOf("android");a.slider=n(b);a.ev=n(a);a._b=n(document);a.st=n.extend({},n.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;!a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),a._e=c+"ransform"in d&&c+"ransition"in d,a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));k=k.toLowerCase();a._g="-"+k+"-";a._h="vertical"===a.st.slidesOrientation?
!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;n.each(n.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>
a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.pointerMultitouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=
6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=n(d+"</div></div>");var m=a.ns,k=function(b,c,d,e,f){a._j1=b+c+m;a._k1=b+d+m;a._l1=b+e+m;f&&(a._m1=b+f+m)};c=e.pointerEnabled;a.pointerEnabled=c||e.msPointerEnabled;a.pointerEnabled?(a.hasTouch=!1,a._n1=.2,a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),c?k("pointer","down","move","up",
"cancel"):k("MSPointer","Down","Move","Up","Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+m,a._k1+=" touchmove"+m,a._l1+=" touchend"+m,a._m1+=" touchcancel"+m,a._n1=.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=.2));a.st.sliderDrag&&(a._f1=!0,h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1=
"-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",a._h?"pan-y":"pan-x");a._q1=n('<div class="rsPreloader"></div>');e=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,e.css(h))):(a._x1="left",a._w1="top");var p;n(window).on("resize"+a.ns,function(){p&&clearTimeout(p);p=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();a.st.arrowsNavHideOnTouch&&
(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);a.st.arrowsNav&&(e=a._o1,n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),a._c2=e.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=e.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),e.one("mousemove.arrowshover",
function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),e.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a.hasTouch&&a.st.sliderTouch||!a.hasTouch&&a.st.sliderDrag)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var r=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=
n(b.target).attr("class");if(-1!==n.inArray(c,r)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(n(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick",b)}}).on("click.rs","a",function(b){if(a.dragSuccess)return!1;a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}n.rsModules||(n.rsModules={uid:0});v.prototype={constructor:v,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;
b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));this._y=b},_s:function(b,f){function c(b,c){c?g.images.push(b.attr(c)):g.images.push(b.text());if(h){h=!1;g.caption="src"===c?b.attr("alt"):b.contents();g.image=g.images[0];g.videoURL=b.attr("data-rsVideo");var d=b.attr("data-rsw"),
e=b.attr("data-rsh");"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d,10),g.iH=parseInt(e,10)):a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth,g.iH=a.st.imgHeight)}}var a=this,e,g={},d,h=!0;b=n(b);a._k2=b;a.ev.trigger("rsBeforeParseNode",[b,g]);if(!g.stopParsing)return b=a._k2,g.id=a._r,g.contentAdded=!1,a._r++,g.images=[],g.isBig=!1,g.hasCover||(b.hasClass("rsImg")?(d=b,e=!0):(d=b.find(".rsImg"),d.length&&(e=!0)),e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=
n(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(g.caption=d.remove()),g.content=b,a.ev.trigger("rsAfterParseNode",[b,g]),f&&a.slides.push(g),0===g.images.length&&(g.isLoaded=!0,g.isRendered=!1,g.isLoading=!1,g.images=null),g},_b2:function(){var b=this,f,c,a=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(e){if(!b.st.keyboardNavEnabled)return!0;if(!(b._l2||(c=
e.keyCode,37!==c&&39!==c||f))){if(document.activeElement&&/(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName))return!0;b.isFullscreen&&e.preventDefault();a(c);f=setInterval(function(){a(c)},700)}}).on("keyup"+b.ns,function(a){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+
" click");this.slider.data("royalSlider",null);n.removeData(this.slider,"royalSlider");n(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,f,g){c.isAdded?(a(f,c),e(f,c)):(g||(g=d.slidesJQ[f]),c.holder?g=c.holder:(g=d.slidesJQ[f]=n(g),c.holder=g),c.appendOnLoaded=!1,e(f,c,g),a(f,c),d._p2(c,g,b),c.isAdded=!0)}function a(a,c){c.contentAdded||(d.setItemHtml(c,b),b||(c.contentAdded=
!0))}function e(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function g(a){if(l){if(a>q-1)return g(a-q);if(0>a)return g(q+a)}return a}var d=this,h,k,l=d._z,q=d.numSlides;if(!isNaN(f))return g(f);var m=d.currSlideId,p,r=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,t=Math.min(2,r),w=!1,v=!1,u;for(k=m;k<m+1+t;k++)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){w=!0;break}for(k=m-1;k>m-1-t;k--)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){v=!0;break}if(w)for(k=
m;k<m+r+1;k++)u=g(k),p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,(h=d.slides[u])&&c(h,u);if(v)for(k=m-1;k>m-1-r;k--)u=g(k),p=Math.floor((d._u-(m-k))/q)*q,(h=d.slides[u])&&c(h,u);if(!b)for(t=g(m-r),m=g(m+r),r=t>m?0:t,k=0;k<q;k++)t>m&&k>t-1||!(k<r||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),h.isAdded=!1)},setItemHtml:function(b,f){var c=this,a=function(){if(!b.images)b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0);else if(!b.isLoading){var a,f;b.content.hasClass("rsImg")?(a=b.content,
f=!0):a=b.content.find(".rsImg:not(img)");a&&!a.is("img")&&a.each(function(){var a=n(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=n(c):a.replaceWith(c)});a=f?b.content:b.content.find("img.rsImg");k();a.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)n("<img />").on("load.rs error.rs",function(a){n(this).off("load.rs error.rs");e([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;a=function(a){n(this).off("load.rs error.rs");
b.loaded.push(this);b.loaded.length===b.numStartedLoad&&e(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var h=n("<img />");b.numStartedLoad++;h.on("load.rs error.rs",a).attr("src",b.images[g])}}}},e=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();else if(b.iW&&b.iH)g();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)g();else{var e=new Image;e.onload=function(){e.width?(b.iW=e.width,b.iH=e.height,g()):setTimeout(function(){e.width&&(b.iW=e.width,b.iH=
e.height);g()},1E3)};e.src=d.src}}else g()},g=function(){b.isLoaded=!0;b.isLoading=!1;d();l();h()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16));b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);
b.isAppended=!0;b.isLoaded&&(c._q2(b),h());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},h=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},k=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},l=function(a){c.st.usePreloader&&(a=b.holder.find(".rsPreloader"),a.length&&a.remove())};b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=
!0,k(),b.holder.slideId=-99):a()},_p2:function(b,f,c){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,a,e="touchstart"===b.type;c._s2=e;c.ev.trigger("rsDragStart");if(n(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)e&&(c._v2=!0);else{e&&(c._v2=!1);c._w2();if(e){var g=b.originalEvent.touches;if(g&&0<g.length)a=g[0],1<g.length&&(c._v2=!0);else return}else b.preventDefault(),a=b,c.pointerEnabled&&
(a=a.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=a.pageX;c._c3=a.pageY;c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;c._f3=0;c._g3=0;c._h3=f?c._i3:c._p;c._j3=(new Date).getTime();if(e)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,a=b.pageX-this._b3,e=b.pageY-this._c3,g=this._h3+a,d=this._h3+e,h=f?this._e3:this._h,g=h?g:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===
d&&0!==a?this._f3=0<a?1:-1:"y"===d&&0!==e&&(this._g3=0<e?1:-1);d=h?this._b3:this._c3;a=h?a:e;f?g>this._n3?g=this._h3+a*this._n1:g<this._o3&&(g=this._h3+a*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(g=this._h3+a*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));this._h3=g;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,a,e="touchmove"===b.type;if(!c._s2||e){if(e){if(c._r3)return;var g=
b.originalEvent.touches;if(g){if(1<g.length)return;a=g[0]}else return}else a=b,c.pointerEnabled&&(a=a.originalEvent);c._a3||(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,"0s"),function h(){c._l2&&(c._t3=requestAnimationFrame(h),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=a;else if(g=f?c._e3:c._h,a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),7<a){if(g)b.preventDefault(),c._z2="x";else if(e){c._v3(b);return}c._l3=!0}else if(-7>a){if(!g)b.preventDefault(),
c._z2="y";else if(e){c._v3(b);return}c._l3=!0}}},_v3:function(b,f){this._r3=!0;this._a3=this._l2=!1;this._y2(b)},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function a(a,b){if(e._l||f)h=(-e._u-e._d1)*e._w,k=Math.abs(e._p-h),e._c=k/b,a&&(e._c+=250),e._c=c(e._c),e._x3(h,!1)}var e=this,g,d,h,k;g=-1<b.type.indexOf("touch");if(!e._s2||g)if(e._s2=!1,e.ev.trigger("rsDragRelease"),e._u3=null,e._l2=!1,e._r3=!1,e._l3=!1,e._m3=0,cancelAnimationFrame(e._t3),e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),
e._b.off(e._k1).off(e._l1),g&&e._e1.off(e._m1),e._i1(),!e._a3&&!e._v2&&f&&e._w3){var l=n(b.target).closest(".rsNavItem");l.length&&e.goTo(l.index())}else{d=f?e._e3:e._h;if(!e._a3||"y"===e._z2&&d||"x"===e._z2&&!d)if(!f&&e._t2){e._t2=!1;if(e.st.navigateByClick){e._i2(e.pointerEnabled?b.originalEvent:b);e.dragSuccess=!0;return}e.dragSuccess=!0}else{e._t2=!1;e.dragSuccess=!1;return}else e.dragSuccess=!0;e._t2=!1;e._z2="";var q=e.st.minSlideOffset;g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?
b.originalEvent:b;var m=d?g.pageX:g.pageY,p=e._d3;g=e._v;var r=e.currSlideId,t=e.numSlides,w=d?e._f3:e._g3,v=e._z;Math.abs(m-p);g=m-g;d=(new Date).getTime()-e._j3;d=Math.abs(g)/d;if(0===w||1>=t)a(!0,d);else{if(!v&&!f)if(0>=r){if(0<w){a(!0,d);return}}else if(r>=t-1&&0>w){a(!0,d);return}if(f){h=e._i3;if(h>e._n3)h=e._n3;else if(h<e._o3)h=e._o3;else{m=d*d/.006;l=-e._i3;p=e._y3-e._z3+e._i3;0<g&&m>l?(l+=e._z3/(15/(m/d*.003)),d=d*l/m,m=l):0>g&&m>p&&(p+=e._z3/(15/(m/d*.003)),d=d*p/m,m=p);l=Math.max(Math.round(d/
.003),50);h+=m*(0>g?-1:1);if(h>e._n3){e._a4(h,l,!0,e._n3,200);return}if(h<e._o3){e._a4(h,l,!0,e._o3,200);return}}e._a4(h,l,!0)}else l=function(a){var b=Math.floor(a/e._w);a-b*e._w>q&&b++;return b},p+q<m?0>w?a(!1,d):(l=l(m-p),e._m2(e.currSlideId-l,c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),!1,!0,!0)):p-q>m?0<w?a(!1,d):(l=l(p-m),e._m2(e.currSlideId+l,c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),!1,!0,!0)):a(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:
0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.slider){if(this.st.autoScaleSlider){var a=this.st.autoScaleSliderWidth,e=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",e/a*f),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",a/e*c),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),
c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&b.images&&b.isLoaded&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,
(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]}},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,n('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));f<=this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",
[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(b){var f=this;b=f.numSlides;b=0>=f._u?0:Math.floor(f._u/b);f.numSlides=f.slides.length;0===f.numSlides?(f.currSlideId=f._d1=f._u=
0,f.currSlide=f._g4=null):f._u=b*f.numSlides+f.currSlideId;for(b=0;b<f.numSlides;b++)f.slides[b].id=b;f.currSlide=f.slides[f.currSlideId];f._r1=f.slidesJQ[f.currSlideId];f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1):0>f.currSlideId&&f.goTo(0);f._t();f._l&&f._p1.css(f._g+f._u1,"0ms");f._h4&&clearTimeout(f._h4);f._h4=setTimeout(function(){f._l&&f._p3((-f._u-f._d1)*f._w);f._n2();f._l||f._r1.css({display:"block",opacity:1})},14);f.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?
this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,a,e){var g=this,d,h,k;g.ev.trigger("rsBeforeMove",[b,a]);k="next"===b?g.currSlideId+1:"prev"===
b?g.currSlideId-1:b=parseInt(b,10);if(!g._z){if(0>k){g._i4("left",!a);return}if(k>=g.numSlides){g._i4("right",!a);return}}g._r2&&(g._u2(!0),c=!1);h=k-g.currSlideId;k=g._o2=g.currSlideId;var l=g.currSlideId+h;a=g._u;var n;g._z?(l=g._n2(!1,l),a+=h):a=l;g._o=l;g._g4=g.slidesJQ[g.currSlideId];g._u=a;g.currSlideId=g._o;g.currSlide=g.slides[g.currSlideId];g._r1=g.slidesJQ[g.currSlideId];var l=g.st.slidesDiff,m=Boolean(0<h);h=Math.abs(h);var p=Math.floor(k/g._y),r=Math.floor((k+(m?l:-l))/g._y),p=(m?Math.max(p,
r):Math.min(p,r))*g._y+(m?g._y-1:0);p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);k=m?p-k:k-p;k>g._y&&(k=g._y);if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),f*=1.4,k=0;k<g.numSlides;k++)g.slides[k].positionSet=!1;g._c=f;g._n2(!0);e||(n=!0);d=(-a-g._d1)*g._w;n?setTimeout(function(){g._j4=!1;g._x3(d,b,!1,c);g.ev.trigger("rsOnUpdateNav")},0):(g._x3(d,b,!1,c),g.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display",
"block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,a,e){function g(){var a;h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),h.data("rsTimeout",""));if(a=k.data("rsTimeout"))clearTimeout(a),k.data("rsTimeout",
"")}var d=this,h,k,l={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,l[d._g+d._u1]=d._c+"ms",l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:n.rsCSS3Easing[d.st.easeOut],d._p1.css(l),a||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,h=d._g4,k=d._r1,k.data("rsTimeout")&&k.css("opacity",0),g(),h&&h.data("rsTimeout",setTimeout(function(){l[d._g+d._u1]="0ms";l.zIndex=0;l.display="none";h.data("rsTimeout",
"");h.css(l);setTimeout(function(){h.css("opacity",0)},16)},d._c+60)),l.display="block",l.zIndex=d._m,l.opacity=0,l[d._g+d._u1]="0ms",l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],k.css(l),k.data("rsTimeout",setTimeout(function(){k.css(d._g+d._u1,d._c+"ms");k.data("rsTimeout",setTimeout(function(){k.css("opacity",1);k.data("rsTimeout","")},20))},20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",d._p1.animate(l,d._c,a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,k=d._r1,k.stop(!0,!0).css({opacity:0,display:"block",
zIndex:d._m}),d._c=d.st.transitionSpeed,k.animate({opacity:1},d._c,d.st.easeInOut),g(),h&&h.data("rsTimeout",setTimeout(function(){h.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=e?setTimeout(function(){d.loadingTimeout=null;e.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._h?this._x1:this._w1),10);else{if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:
b},_k4:function(b){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,a=(-c._u-c._d1)*c._w;if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var e=function(){c._r2=!1};c._x3(a+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(a,"",!1,!0,e)})}},_q2:function(b,f){if(!b.isRendered){var c=b.content,a="rsMainSlideImage",
e,g=n.isFunction(this.st.imageAlignCenter)?this.st.imageAlignCenter(b):this.st.imageAlignCenter,d=n.isFunction(this.st.imageScaleMode)?this.st.imageScaleMode(b):this.st.imageScaleMode,h;b.videoURL&&(a="rsVideoContainer","fill"!==d?e=!0:(h=c,h.hasClass(a)||(h=h.find("."+a)),h.css({width:"100%",height:"100%"}),a="rsMainSlideImage"));c.hasClass(a)||(c=c.find("."+a));if(c){var k=b.iW,l=b.iH;b.isRendered=!0;if("none"!==d||g){a="fill"!==d?this._d4:0;h=this._b4-2*a;var q=this._c4-2*a,m,p,r={};"fit-if-smaller"===
d&&(k>h||l>q)&&(d="fit");if("fill"===d||"fit"===d)m=h/k,p=q/l,m="fill"==d?m>p?m:p:"fit"==d?m<p?m:p:1,k=Math.ceil(k*m,10),l=Math.ceil(l*m,10);"none"!==d&&(r.width=k,r.height=l,e&&c.find(".rsImg").css({width:"100%",height:"100%"}));g&&(r.marginLeft=Math.floor((h-k)/2)+a,r.marginTop=Math.floor((q-l)/2)+a);c.css(r)}}}}};n.rsProto=v.prototype;n.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=n(this);if("object"!==typeof b&&b){if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,
Array.prototype.slice.call(f,1))}else c.data("royalSlider")||c.data("royalSlider",new v(c,b))})};n.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,
addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};n.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};n.extend(jQuery.easing,{easeInOutSine:function(b,
f,c,a,e){return-a/2*(Math.cos(Math.PI*f/e)-1)+c},easeOutSine:function(b,f,c,a,e){return a*Math.sin(f/e*(Math.PI/2))+c},easeOutCubic:function(b,f,c,a,e){return a*((f=f/e-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.thumbnails v1.0.8
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,b,c){b=f(b);c.thumbnail=b.find(".rsTmb").remove();c.thumbnail.length?c.thumbnail=f(document.createElement("div")).append(c.thumbnail).html():(c.thumbnail=b.attr("data-rsTmb"),c.thumbnail||(c.thumbnail=b.find(".rsImg").attr("data-rsTmb")),c.thumbnail=c.thumbnail?'<img src="'+c.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,b,c){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+b.thumbnail+"</div>";a._e&&a._s3.css(a._g+"transition-duration","0ms");c>=a.numSlides?a._s3.append(e):a._l5.eq(c).before(e);a._l5=a._s3.children();a.updateThumbsSize(!0)}),a.ev.on("rsOnRemoveSlide",function(e,b){var c=a._l5.eq(b);c&&(a._e&&a._s3.css(a._g+"transition-duration","0ms"),c.remove(),
a._l5=a._s3.children(),a.updateThumbsSize(!0))}))},_k6:function(){var a=this,e="rsThumbs",b=a.st.thumbs,c="",g,d,h=b.spacing;a._j5=!0;a._e3="vertical"===b.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=b.arrows&&b.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);c+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=b.appendSpan?'<span class="thumbIco"></span>':
"";for(var k=0;k<a.numSlides;k++)d=a.slides[k],c+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+"</div>";c=f(c+"</div></div>");g={};b.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=b.paddingTop);b.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=b.paddingBottom);c.css(g);a._s3=f(c).find("."+e+"Container");a._q6&&(e+="Arrow",b.arrowLeft?a._r6=b.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),c.append(a._r6)),b.arrowRight?a._s6=b.arrowRight:
(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),c.append(a._s6)),a._r6.click(function(){var b=(Math.floor(a._i3/a._t6)+a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b<a._o3?a._o3:b)}),b.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),c.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),
c.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=c;a._l5=a._s3.children();a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(c);a._w3=!0;a._v6=h;b.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)});a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",function(b,c){a.updateThumbsSize(!0,c)})},updateThumbsSize:function(a,e){var b=this,c=b._l5.first(),f={},d=b._l5.length;b._t6=(b._e3?c.outerWidth():c.outerHeight())+b._v6;b._y3=d*b._t6-b._v6;f[b._e3?"width":"height"]=b._y3+b._v6;b._z3=b._e3?b._k5.width():void 0!==e?e:b._k5.height();b._w3&&(b.isFullscreen||b.st.thumbs.fitInViewport)&&(b._e3?b._c4=b._w6-b._k5.outerHeight():
b._b4=b._w6-b._k5.outerWidth());b._z3&&(b._o3=-(b._y3-b._z3)-b.st.thumbs.firstMargin,b._n3=b.st.thumbs.firstMargin,b._u6=Math.floor(b._z3/b._t6),b._y3<b._z3?(b.st.thumbs.autoCenter?b._q3((b._z3-b._y3)/2):b._q3(b._n3),b.st.thumbs.arrows&&b._r6&&(b._r6.addClass("rsThumbsArrowDisabled"),b._s6.addClass("rsThumbsArrowDisabled")),b._l6=!1,b._m5=!1,b._k5.off(b._j1)):b.st.thumbs.navigation&&!b._l6&&(b._l6=!0,!b.hasTouch&&b.st.thumbs.drag||b.hasTouch&&b.st.thumbs.touch)&&(b._m5=!0,b._k5.on(b._j1,function(a){b._g2(a,
!0)})),b._s3.css(f),a&&e&&b._m6(b.currSlideId,!0))},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,b,c,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);
d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),b=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=b?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,e,b?"easeOutCubic":d.st.easeInOut));c&&(d._i3=c);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(c,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):
this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var b=0,c,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(b=1),d=-a+this._u6-2+b,c=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(c=(-a+1)*this._t6+
this._n3):c=this._n3,c!==this._i3&&(b=void 0===c?this._i3:c,b>this._n3?this._q3(this._n3):b<this._o3?this._q3(this._o3):void 0!==c&&(e?this._q3(c):this._a4(c))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.fullscreen v1.0.6
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""},d=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var e=0,f=d.length;e<f;e++)if(b.prefix=d[e],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(a.nativeFS=!0,b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,b.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+
"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(a){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()},a._u5=b):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},enterFullscreen:function(a){var b=
this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(a){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");c("body, html").css({overflow:"hidden",
height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;
b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=
a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a,b){var d=a.isLoaded||a.isLoading?'<img class="rsImg rsMainSlideImage" src="'+
a.image+'"/>':'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>';a.content.hasClass("rsImg")?a.content=c(d):a.content.find(".rsImg").eq(0).replaceWith(d);a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){a._l2||a._r2||!a._a5||e!==a.currSlide||a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;a._f5||a._e5||(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;a._z||a.st.loopRewind||(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},a.currSlide.customDelay?a.currSlide.customDelay:a.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),
this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.video v1.1.3
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=f.extend({},a._a7,
a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var d=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,c,e){b=f(c);if(e.videoURL){a.st.video.disableCSS3inFF&&d&&(a._e=a._f=!1);c=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');b.hasClass("rsImg")?
e.content=c.append(b).append(g):e.content.find(".rsImg").wrap(c).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var d=a.currSlide;if(!d.videoURL)return!1;a._d7=d;var b=a._e7=d.content,d=d.videoURL,c,e;d.match(/youtu\.be/i)||d.match(/youtube\.com/i)?(e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(e=d.match(e))&&11==e[7].length&&
(c=e[7]),void 0!==c&&(a._c7=a.st.video.youTubeCode.replace("%id%",c))):d.match(/vimeo\.com/i)&&(e=/(www\.)?vimeo.com\/(\d+)($|\/)/,(e=d.match(e))&&(c=e[2]),void 0!==c&&(a._c7=a.st.video.vimeoCode.replace("%id%",c)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[d]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),b=b.hasClass("rsVideoContainer")?
b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._f7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),a._f7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",
[a.videoObj]);var d=a._c7.find("iframe");if(d.length)try{d.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_f7:function(a,d){var b=[],c=this.st.video;c.autoHideArrows&&(this._c2&&(b.push(this._c2,this._d2),this._e2=!a),this._v5&&b.push(this._v5));c.autoHideControlNav&&this._k5&&b.push(this._k5);c.autoHideBlocks&&this._d7.animBlocks&&b.push(this._d7.animBlocks);c.autoHideCaption&&this.globalCaption&&b.push(this.globalCaption);this.slider[a?"removeClass":
"addClass"]("rsVideoPlaying");if(b.length)for(c=0;c<b.length;c++)a?b[c].removeClass("rsHidden"):b[c].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l){l.extend(l.rsProto,{_p4:function(){function m(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=l.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){m()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=l(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(b.hasClass("rsABlock")?d.animBlocks=b.css("display","none"):d.animBlocks=!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){m()},a.st.fadeinLoadedSlide?
300:0)});a.ev.on("rsAfterSlideChange",function(){m()})},_v4:function(l,a){setTimeout(function(){l.css(a)},6)},_u4:function(m){var a=this,b,g,f,d,h,e,n;a._s4=[];m.each(function(m){b=l(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&"top"!==e&&"bottom"!==e&&"right"!==e&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var p;p="right"===
e||"left"===e?!0:!1;var k;n=!1;a._e?(k=0,h=a._x1):(p?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",n=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",n=!0),h="margin-"+h,n&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),isNaN(k)&&(k=0),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,p);g[h]=a._m4(k,p)}c=b.attr("data-fade-effect");if(!c)c=a.st.block.fadeEffect;else if("none"===c.toLowerCase()||
"false"===c.toLowerCase())c=!1;c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=l.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*m);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,
f);a._s4.push(setTimeout(function(b,d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,m),6>=d.delay?12:d.delay))})}});l.rsModules.animatedBlocks=l.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,c,e,f=!0,d=function(d){e=a.slides[a.currSlideId];(b=e.holder)&&(c=b.height())&&void 0!==c&&c>(a.st.minAutoHeight||30)&&(a._c4=c,a._e||!d?a._e1.css("height",c):a._e1.stop(!0,!0).animate({height:c},a.st.transitionSpeed),a.ev.trigger("rsAutoHeightChange",c),f&&(a._e&&setTimeout(function(){a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16),f=!1))};a.ev.on("rsMaybeSizeReady.rsAutoHeight",
function(a,b){e===b&&d()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&d()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){d(!1);setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)});a.ev.on("rsBeforeAnimStart",function(){d(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){d(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.global-caption v1.0.1
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1:a.slider);a.globalCaption.html(a.currSlide.caption||"")}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption||"")}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,h,d,f;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var g=a.st.deeplinking.change,e=a.st.deeplinking.prefix,c="#"+e,k=function(){var a=window.location.hash;return a&&0<a.indexOf(e)&&(a=parseInt(a.substring(c.length),10),0<=a)?a-1:-1},p=k();-1!==p&&(a.st.startSlideId=p);g&&(b(window).on("hashchange"+a.ns,function(b){h||(b=k(),0>b||(b>a.numSlides-1&&(b=a.numSlides-1),
a.goTo(b)))}),a.ev.on("rsBeforeAnimStart",function(){d&&clearTimeout(d);f&&clearTimeout(f)}),a.ev.on("rsAfterSlideChange",function(){d&&clearTimeout(d);f&&clearTimeout(f);f=setTimeout(function(){h=!0;window.location.replace((""+window.location).split("#")[0]+c+(a.currSlideId+1));d=setTimeout(function(){h=!1;d=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){d=f=null;g&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,h){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var f=document,g,e=b.event.special,c=f.documentMode,k="onhashchange"in a&&(c===h||7<c);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;e.hashchange=b.extend(e.hashchange,{setup:function(){if(k)return!1;b(g.start)},teardown:function(){if(k)return!1;b(g.stop)}});g=function(){function g(){var f=d(),e=q(l);f!==l?(m(l=f,e),b(a).trigger("hashchange")):
e!==l&&(location.href=location.href.replace(/#.*/,"")+e);c=setTimeout(g,b.fn.hashchange.delay)}var e={},c,l=d(),n=function(a){return a},m=n,q=n;e.start=function(){c||g()};e.stop=function(){c&&clearTimeout(c);c=h};a.attachEvent&&!a.addEventListener&&!k&&function(){var a,c;e.start=function(){a||(c=(c=b.fn.hashchange.src)&&c+d(),a=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||m(d());g()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,f.onpropertychange=
function(){try{"title"===event.propertyName&&(a.document.title=f.title)}catch(b){}})};e.stop=n;q=function(){return d(a.location.href)};m=function(c,e){var d=a.document,g=b.fn.hashchange.domain;c!==e&&(d.title=f.title,d.open(),g&&d.write('<script>document.domain="'+g+'"\x3c/script>'),d.close(),a.location.hash=c)}}();return e}()})(jQuery,this);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._g7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7={enabled:!0,centerArea:.6,center:!0,breakpoint:0,breakpointCenterArea:.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._h7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._i7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow","visible");a._o1=a.st.controlsInside?
a._i7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._i7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._i7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._g7})(jQuery);
;
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.3 - 2015-10-23
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$injector",function(a,b){var c=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,d,e){function f(){d.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),c?c(d,{addClass:"in",easing:"ease",to:{height:d[0].scrollHeight+"px"}}).start()["finally"](g):a.addClass(d,"in",{to:{height:d[0].scrollHeight+"px"}}).then(g)}function g(){d.removeClass("collapsing").addClass("collapse").css({height:"auto"})}function h(){return d.hasClass("collapse")||d.hasClass("in")?(d.css({height:d[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(c?c(d,{removeClass:"in",to:{height:"0"}}).start()["finally"](i):a.removeClass(d,"in",{to:{height:"0"}}).then(i))):i()}function i(){d.css({height:"0"}),d.removeClass("collapsing").addClass("collapse")}b.$watch(e.uibCollapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.collapse").value("$collapseSuppressWarning",!1).directive("collapse",["$animate","$injector","$log","$collapseSuppressWarning",function(a,b,c,d){var e=b.has("$animateCss")?b.get("$animateCss"):null;return{link:function(b,f,g){function h(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start().done(i):a.animate(f,{},{height:f[0].scrollHeight+"px"}).then(i)}function i(){f.removeClass("collapsing").addClass("collapse in").css({height:"auto"})}function j(){return f.hasClass("collapse")||f.hasClass("in")?(f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse in").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),void(e?e(f,{to:{height:"0"}}).start().done(k):a.animate(f,{},{height:"0"}).then(k))):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse")}d||c.warn("collapse is now deprecated. Use uib-collapse instead."),b.$watch(g.collapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass,a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)}}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){return{require:["?^uibAccordionGroup","?^accordionGroup"],link:function(a,b,c,d){d=d[0]?d[0]:d[1],a.$watch(function(){return d[c.uibAccordionTransclude]},function(a){a&&(b.find("span").html(""),b.find("span").append(a))})}}}),angular.module("ui.bootstrap.accordion").value("$accordionSuppressWarning",!1).controller("AccordionController",["$scope","$attrs","$controller","$log","$accordionSuppressWarning",function(a,b,c,d,e){e||d.warn("AccordionController is now deprecated. Use UibAccordionController instead."),angular.extend(this,c("UibAccordionController",{$scope:a,$attrs:b}))}]).directive("accordion",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",controller:"AccordionController",controllerAs:"accordion",transclude:!0,replace:!1,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion.html"},link:function(){b||a.warn("accordion is now deprecated. Use uib-accordion instead.")}}}]).directive("accordionGroup",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/accordion/accordion-group.html"},scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(c,d,e,f){b||a.warn("accordion-group is now deprecated. Use uib-accordion-group instead."),f.addGroup(c),c.openClass=e.openClass||"panel-open",c.panelClass=e.panelClass,c.$watch("isOpen",function(a){d.toggleClass(c.openClass,!!a),a&&f.closeOthers(c)}),c.toggleOpen=function(a){c.isDisabled||a&&32!==a.which||(c.isOpen=!c.isOpen)}}}}]).directive("accordionHeading",["$log","$accordionSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(c,d,e,f,g){b||a.warn("accordion-heading is now deprecated. Use uib-accordion-heading instead."),f.setHeading(g(c,angular.noop))}}}]).directive("accordionTransclude",["$log","$accordionSuppressWarning",function(a,b){return{require:"^accordionGroup",link:function(c,d,e,f){b||a.warn("accordion-transclude is now deprecated. Use uib-accordion-transclude instead."),c.$watch(function(){return f[e.accordionTransclude]},function(a){a&&(d.find("span").html(""),d.find("span").append(a))})}}}]),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.alert").value("$alertSuppressWarning",!1).controller("AlertController",["$scope","$attrs","$controller","$log","$alertSuppressWarning",function(a,b,c,d,e){e||d.warn("AlertController is now deprecated. Use UibAlertController instead."),angular.extend(this,c("UibAlertController",{$scope:a,$attrs:b}))}]).directive("alert",["$log","$alertSuppressWarning",function(a,b){return{controller:"AlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"},link:function(){b||a.warn("alert is now deprecated. Use uib-alert instead.")}}}]),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",function(){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(a,b,c,d){var e=d[0],f=d[1];b.find("input").css({display:"none"}),f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.uibBtnRadio)))},b.on(e.toggleEvent,function(){if(!c.disabled){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.uibBtnRadio)),f.$render()})}})}}}).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.buttons").value("$buttonsSuppressWarning",!1).controller("ButtonsController",["$controller","$log","$buttonsSuppressWarning",function(a,b,c){c||b.warn("ButtonsController is now deprecated. Use UibButtonsController instead."),angular.extend(this,a("UibButtonsController"))}]).directive("btnRadio",["$log","$buttonsSuppressWarning",function(a,b){return{require:["btnRadio","ngModel"],controller:"ButtonsController",controllerAs:"buttons",link:function(c,d,e,f){b||a.warn("btn-radio is now deprecated. Use uib-btn-radio instead.");var g=f[0],h=f[1];d.find("input").css({display:"none"}),h.$render=function(){d.toggleClass(g.activeClass,angular.equals(h.$modelValue,c.$eval(e.btnRadio)))},d.bind(g.toggleEvent,function(){if(!e.disabled){var a=d.hasClass(g.activeClass);(!a||angular.isDefined(e.uncheckable))&&c.$apply(function(){h.$setViewValue(a?null:c.$eval(e.btnRadio)),h.$render()})}})}}}]).directive("btnCheckbox",["$document","$log","$buttonsSuppressWarning",function(a,b,c){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",controllerAs:"button",link:function(d,e,f,g){function h(){return j(f.btnCheckboxTrue,!0)}function i(){return j(f.btnCheckboxFalse,!1)}function j(a,b){var c=d.$eval(a);return angular.isDefined(c)?c:b}c||b.warn("btn-checkbox is now deprecated. Use uib-btn-checkbox instead.");var k=g[0],l=g[1];e.find("input").css({display:"none"}),l.$render=function(){e.toggleClass(k.activeClass,angular.equals(l.$modelValue,h()))},e.bind(k.toggleEvent,function(){f.disabled||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})}),e.on("keypress",function(b){f.disabled||32!==b.which||a[0].activeElement!==e[0]||d.$apply(function(){l.$setViewValue(e.hasClass(k.activeClass)?i():h()),l.$render()})})}}}]),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$animate",function(a,b,c,d){function e(b,c,e){s||(angular.extend(b,{direction:e,active:!0}),angular.extend(m.currentSlide||{},{direction:e,active:!1}),d.enabled()&&!a.noTransition&&!a.$currentTransition&&b.$element&&m.slides.length>1&&(b.$element.data(q,b.direction),m.currentSlide&&m.currentSlide.$element&&m.currentSlide.$element.data(q,b.direction),a.$currentTransition=!0,o?d.on("addClass",b.$element,function(b,c){"close"===c&&(a.$currentTransition=null,d.off("addClass",b))}):b.$element.one("$animate:close",function(){a.$currentTransition=null})),m.currentSlide=b,r=c,g())}function f(a){if(angular.isUndefined(n[a].index))return n[a];var b;n.length;for(b=0;b<n.length;++b)if(n[b].index==a)return n[b]}function g(){h();var b=+a.interval;!isNaN(b)&&b>0&&(k=c(i,b))}function h(){k&&(c.cancel(k),k=null)}function i(){var b=+a.interval;l&&!isNaN(b)&&b>0&&n.length?a.next():a.pause()}function j(b){b.length||(a.$currentTransition=null)}var k,l,m=this,n=m.slides=a.slides=[],o=angular.version.minor>=4,p="uib-noTransition",q="uib-slideDirection",r=-1;m.currentSlide=null;var s=!1;m.select=a.select=function(b,c){var d=a.indexOfSlide(b);void 0===c&&(c=d>m.getCurrentIndex()?"next":"prev"),b&&b!==m.currentSlide&&!a.$currentTransition&&e(b,d,c)},a.$on("$destroy",function(){s=!0}),m.getCurrentIndex=function(){return m.currentSlide&&angular.isDefined(m.currentSlide.index)?+m.currentSlide.index:r},a.indexOfSlide=function(a){return angular.isDefined(a.index)?+a.index:n.indexOf(a)},a.next=function(){var b=(m.getCurrentIndex()+1)%n.length;return 0===b&&a.noWrap()?void a.pause():m.select(f(b),"next")},a.prev=function(){var b=m.getCurrentIndex()-1<0?n.length-1:m.getCurrentIndex()-1;return a.noWrap()&&b===n.length-1?void a.pause():m.select(f(b),"prev")},a.isActive=function(a){return m.currentSlide===a},a.$watch("interval",g),a.$watchCollection("slides",j),a.$on("$destroy",h),a.play=function(){l||(l=!0,g())},a.pause=function(){a.noPause||(l=!1,h())},m.addSlide=function(b,c){b.$element=c,n.push(b),1===n.length||b.active?(m.select(n[n.length-1]),1===n.length&&a.play()):b.active=!1},m.removeSlide=function(a){angular.isDefined(a.index)&&n.sort(function(a,b){return+a.index>+b.index});var b=n.indexOf(a);n.splice(b,1),n.length>0&&a.active?b>=n.length?m.select(n[b-1]):m.select(n[b]):r>b&&r--,0===n.length&&(m.currentSlide=null)},a.$watch("noTransition",function(a){b.data(p,a)})}]).directive("uibCarousel",[function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}]).directive("uibSlide",function(){return{require:"^uibCarousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}).animation(".item",["$injector","$animate",function(a,b){function c(a,b,c){a.removeClass(b),c&&c()}var d="uib-noTransition",e="uib-slideDirection",f=null;return a.has("$animateCss")&&(f=a.get("$animateCss")),{beforeAddClass:function(a,g,h){if("active"==g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k+" "+j,h);return a.addClass(j),f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()},beforeRemoveClass:function(a,g,h){if("active"===g&&a.parent()&&a.parent().parent()&&!a.parent().parent().data(d)){var i=!1,j=a.data(e),k="next"==j?"left":"right",l=c.bind(this,a,k,h);return f?f(a,{addClass:k}).start().done(l):b.addClass(a,k).then(function(){i||l(),h()}),function(){i=!0}}h()}}}]),angular.module("ui.bootstrap.carousel").value("$carouselSuppressWarning",!1).controller("CarouselController",["$scope","$element","$controller","$log","$carouselSuppressWarning",function(a,b,c,d,e){e||d.warn("CarouselController is now deprecated. Use UibCarouselController instead."),angular.extend(this,c("UibCarouselController",{$scope:a,$element:b}))}]).directive("carousel",["$log","$carouselSuppressWarning",function(a,b){return{transclude:!0,replace:!0,controller:"CarouselController",controllerAs:"carousel",require:"carousel",templateUrl:function(a,b){return b.templateUrl||"template/carousel/carousel.html"},scope:{interval:"=",noTransition:"=",noPause:"=",noWrap:"&"},link:function(){b||a.warn("carousel is now deprecated. Use uib-carousel instead.")}}}]).directive("slide",["$log","$carouselSuppressWarning",function(a,b){return{require:"^carousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/carousel/slide.html"},scope:{active:"=?",actual:"=?",index:"=?"},link:function(c,d,e,f){b||a.warn("slide is now deprecated. Use uib-slide instead."),f.addSlide(c,d),c.$on("$destroy",function(){f.removeSlide(c)}),c.$watch("active",function(a){a&&f.select(c)})}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(a,b,c){function d(a){var b=[],d=a.split("");return angular.forEach(g,function(c,e){var f=a.indexOf(e);if(f>-1){a=a.split(""),d[f]="("+c.regex+")",a[f]="$";for(var g=f+1,h=f+e.length;h>g;g++)d[g]="",a[g]="$";a=a.join(""),b.push({index:f,apply:c.apply})}}),{regex:new RegExp("^"+d.join("")+"$"),map:c(b,"index")}}function e(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}var f,g,h=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){f=b.id,this.parsers={},g={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)}},MMM:{regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:b.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:b.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a}},hh:{regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a}},H:{regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a}},h:{regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a}},mm:{regex:"[0-5][0-9]",apply:function(a){this.minutes=+a}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a}},sss:{regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a}},ss:{regex:"[0-5][0-9]",apply:function(a){this.seconds=+a}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a}},a:{regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)}}}},this.init(),this.parse=function(c,g,i){if(!angular.isString(c)||!g)return c;g=b.DATETIME_FORMATS[g]||g,g=g.replace(h,"\\$&"),b.id!==f&&this.init(),this.parsers[g]||(this.parsers[g]=d(g));var j=this.parsers[g],k=j.regex,l=j.map,m=c.match(k);if(m&&m.length){var n,o;angular.isDate(i)&&!isNaN(i.getTime())?n={year:i.getFullYear(),month:i.getMonth(),date:i.getDate(),hours:i.getHours(),minutes:i.getMinutes(),seconds:i.getSeconds(),milliseconds:i.getMilliseconds()}:(i&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var p=1,q=m.length;q>p;p++){var r=l[p-1];r.apply&&r.apply.call(n,m[p])}return e(n.year,n.month,n.date)&&(angular.isDate(i)&&!isNaN(i.getTime())?(o=new Date(i),o.setFullYear(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)):o=new Date(n.year,n.month,n.date,n.hours,n.minutes,n.seconds,n.milliseconds||0)),o}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(a,b,c){b||a.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(a,b,c){b||a.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,c)}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){i[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){i[d]=angular.isDefined(c)?c:b[d],a[d]=i[d],("minMode"==d&&i.modes.indexOf(a.datepickerMode)<i.modes.indexOf(i[d])||"maxMode"==d&&i.modes.indexOf(a.datepickerMode)>i.modes.indexOf(i[d]))&&(a.datepickerMode=i[d])}):(i[d]=g[d]||null,a[d]=i[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(j.$isEmpty(j.$modelValue)||j.$invalid)&&(i.activeDate=a,i.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$viewValue){var a=new Date(j.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$viewValue?new Date(j.$viewValue):null;j.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$viewValue?new Date(j.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$viewValue?new Date(j.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){i.element[0].focus()};a.$on("uib:datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),i.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):a.toggleMode("up"===c?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/e,10)*e+1}var e;this.element=b,this.yearpickerInit=function(){e=this.yearRange,this.step={years:e}},this._refreshView=function(){for(var b,c=new Array(e),f=0,g=d(this.activeDate.getFullYear());e>f;f++)b=new Date(this.activeDate),b.setFullYear(g+f,0,1),c[f]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+f});a.title=[c[0].label,c[e-1].label].join(" - "),a.rows=this.split(c,5)},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=5:"right"===a?c+=1:"down"===a?c+=5:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*this.step.years:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+e-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/day.html"},require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/month.html"},require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0]||d[2],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/year.html"},require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0]||d[2];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){
    function m(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function n(b){if(angular.isNumber(b)&&(b=new Date(b)),b){if(angular.isDate(b)&&!isNaN(b))return b;if(angular.isString(b)){var c=j.parse(b,r,a.date);return isNaN(c)?void 0:c}return void 0}return null}function o(a,b){var d=a||b;if(!c.ngRequired&&!d)return!0;if(angular.isNumber(d)&&(d=new Date(d)),d){if(angular.isDate(d)&&!isNaN(d))return!0;if(angular.isString(d)){var e=j.parse(d,r);return!isNaN(e)}return!1}return!0}function p(c){var d=A[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}function q(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}var r,s,t,u,v,w,x,y,z,A,B={},C=!1;a.watchData={},this.init=function(h){if(z=h,s=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):k.closeOnDateSelection,t=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):k.appendToBody,u=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):k.onOpenFocus,v=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:k.datepickerPopupTemplateUrl,w=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:k.datepickerTemplateUrl,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):k.showButtonBar,k.html5Types[c.type]?(r=k.html5Types[c.type],C=!0):(r=c.datepickerPopup||c.uibDatepickerPopup||k.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||k.datepickerPopup;if(c!==r&&(r=c,z.$modelValue=null,!r))throw new Error("uibDatepickerPopup must have a date format specified.")})),!r)throw new Error("uibDatepickerPopup must have a date format specified.");if(C&&c.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(x=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),x.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":v}),y=angular.element(x.children()[0]),y.attr("template-url",w),C&&"month"===c.type&&(y.attr("datepicker-mode",'"month"'),y.attr("min-mode","month")),c.datepickerOptions){var l=a.$parent.$eval(c.datepickerOptions);l&&l.initDate&&(a.initDate=l.initDate,y.attr("init-date","initDate"),delete l.initDate),angular.forEach(l,function(a,b){y.attr(m(b),a)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(b){if(c[b]){var d=e(c[b]);if(a.$parent.$watch(d,function(c){a.watchData[b]=c,("minDate"===b||"maxDate"===b)&&(B[b]=new Date(c))}),y.attr(m(b),"watchData."+b),"datepickerMode"===b){var f=d.assign;a.$watch("watchData."+b,function(b,c){angular.isFunction(f)&&b!==c&&f(a.$parent,b)})}}}),c.dateDisabled&&y.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.showWeeks&&y.attr("show-weeks",c.showWeeks),c.customClass&&y.attr("custom-class","customClass({ date: date, mode: mode })"),C?z.$formatters.push(function(b){return a.date=b,b}):(z.$$parserName="date",z.$validators.date=o,z.$parsers.unshift(n),z.$formatters.push(function(b){return a.date=b,z.$isEmpty(b)?b:i(b,r)})),z.$viewChangeListeners.push(function(){a.date=j.parse(z.$viewValue,r,a.date)}),b.bind("keydown",q),A=d(x)(a),x.remove(),t?f.find("body").append(A):b.after(A),a.$on("$destroy",function(){a.isOpen===!0&&(g.$$phase||a.$apply(function(){a.isOpen=!1})),A.remove(),b.unbind("keydown",q),f.unbind("click",p)})},a.getText=function(b){return a[b+"Text"]||k[b+"Text"]},a.isDisabled=function(b){return"today"===b&&(b=new Date),a.watchData.minDate&&a.compare(b,B.minDate)<0||a.watchData.maxDate&&a.compare(b,B.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?i(a.date,r):null;b.val(d),z.$setViewValue(d),s&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(a.isOpen=!1,b[0].focus())},a.select=function(b){if("today"===b){var c=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(c.getFullYear(),c.getMonth(),c.getDate())):b=new Date(c.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(){a.isOpen=!1,b[0].focus()},a.$watch("isOpen",function(c){c?(a.position=t?h.offset(b):h.position(b),a.position.top=a.position.top+b.prop("offsetHeight"),l(function(){u&&a.$broadcast("uib:datepicker.focus"),f.bind("click",p)},0,!1)):f.unbind("click",p)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(a,b,c,d,e,f,g,h,i){i||e.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var j=this,k={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(c,e){j[c]=angular.isDefined(b[c])?6>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):g[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){j[d]=a?new Date(a):null,j.refreshView()}):j[d]=g[d]?new Date(g[d]):null}),angular.forEach(["minMode","maxMode"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(c){j[d]=angular.isDefined(c)?c:b[d],a[d]=j[d],("minMode"==d&&j.modes.indexOf(a.datepickerMode)<j.modes.indexOf(j[d])||"maxMode"==d&&j.modes.indexOf(a.datepickerMode)>j.modes.indexOf(j[d]))&&(a.datepickerMode=j[d])}):(j[d]=g[d]||null,a[d]=j[d])}),a.datepickerMode=a.datepickerMode||g.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(b.initDate)?(this.activeDate=a.$parent.$eval(b.initDate)||new Date,a.$parent.$watch(b.initDate,function(a){a&&(k.$isEmpty(k.$modelValue)||k.$invalid)&&(j.activeDate=a,j.refreshView())})):this.activeDate=new Date,a.isActive=function(b){return 0===j.compare(b.date,j.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){k=a,k.$render=function(){j.render()}},this.render=function(){if(k.$viewValue){var a=new Date(k.$viewValue),b=!isNaN(a);b?this.activeDate=a:h||e.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=k.$viewValue?new Date(k.$viewValue):null;k.$setValidity("dateDisabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=k.$viewValue?new Date(k.$viewValue):null;return{date:a,label:f(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date),customClass:this.customClass(a)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},this.fixTimeZone=function(a){var b=a.getHours();a.setHours(23===b?b+2:0)},a.select=function(b){if(a.datepickerMode===j.minMode){var c=k.$viewValue?new Date(k.$viewValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),k.$setViewValue(c),k.$render()}else j.activeDate=b,a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=j.activeDate.getFullYear()+a*(j.step.years||0),c=j.activeDate.getMonth()+a*(j.step.months||0);j.activeDate.setFullYear(b,c,1),j.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===j.maxMode&&1===b||a.datepickerMode===j.minMode&&-1===b||(a.datepickerMode=j.modes[j.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var l=function(){j.element[0].focus()};a.$on("uib:datepicker.focus",l),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),j.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(j.isDisabled(j.activeDate))return;a.select(j.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(j.handleKeyDown(c,b),j.refreshView()):a.toggleMode("up"===c?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(c,d,e,f){b||a.warn("datepicker is now deprecated. Use uib-datepicker instead.");var g=f[0],h=f[1];g.init(h)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(c,d,e,f){b||a.warn("daypicker is now deprecated. Use uib-daypicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(c,d,e,f){b||a.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(c,d,e,f){b||a.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var g=f[0];angular.extend(g,f[1]),g.yearpickerInit(),g.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(a,b){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(c,d,e,f){b||a.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var g=f[0],h=f[1];h.init(g)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(a,b){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/datepicker/popup.html"},link:function(){b||a.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b){c||(a.bind("click",d),a.bind("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b){c===b&&(c=null,a.unbind("click",d),a.unbind("keydown",e))};var d=function(a){if(c&&(!a||"disabled"!==c.getAutoClose())){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(c.focusToggleElement(),d()):c.isKeynavEnabled()&&/(38|40)/.test(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.openClass,q=angular.noop,r=c.onToggle?d(c.onToggle):angular.noop,s=!1,t=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(m=d(c.isOpen),q=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),s=angular.isDefined(c.dropdownAppendToBody),t=angular.isDefined(c.uibKeyboardNav),s&&n.dropdownMenu&&(i.find("body").append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return t},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(s&&n.dropdownMenu){var e=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right");m?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),n.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,p).then(function(){angular.isDefined(c)&&c!==d&&r(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var t=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(t),n.dropdownMenu=t}f.close(o),n.selectedOption=null}angular.isFunction(q)&&q(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==o.getAutoClose()&&(o.isOpen=!1)});var u=a.$on("$destroy",function(){o.$destroy()});o.$on("$destroy",u)}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"AC",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibKeyboardNav",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){b.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=d.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(d.selectedOption)?d.selectedOption=d.selectedOption===b.length-1?d.selectedOption:d.selectedOption+1:d.selectedOption=0;break;case 38:angular.isNumber(d.selectedOption)?d.selectedOption=0===d.selectedOption?0:d.selectedOption-1:d.selectedOption=b.length-1}b[d.selectedOption].focus()}})}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.dropdown").value("$dropdownSuppressWarning",!1).service("dropdownService",["$log","$dropdownSuppressWarning","uibDropdownService",function(a,b,c){b||a.warn("dropdownService is now deprecated. Use uibDropdownService instead."),angular.extend(this,c)}]).controller("DropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest","$log","$dropdownSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m){m||l.warn("DropdownController is now deprecated. Use UibDropdownController instead.");var n,o,p=this,q=a.$new(),r=e.openClass,s=angular.noop,t=c.onToggle?d(c.onToggle):angular.noop,u=!1,v=!1;b.addClass("dropdown"),this.init=function(){c.isOpen&&(o=d(c.isOpen),s=o.assign,a.$watch(o,function(a){q.isOpen=!!a})),u=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.uibKeyboardNav),u&&p.dropdownMenu&&(i.find("body").append(p.dropdownMenu),b.on("$destroy",function(){p.dropdownMenu.remove()}))},this.toggle=function(a){return q.isOpen=arguments.length?!!a:!q.isOpen},this.isOpen=function(){return q.isOpen},q.getToggleElement=function(){return p.toggleElement},q.getAutoClose=function(){return c.autoClose||"always"},q.getElement=function(){return b},q.isKeynavEnabled=function(){return v},q.focusDropdownEntry=function(a){var c=p.dropdownMenu?angular.element(p.dropdownMenu).find("a"):angular.element(b).find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(p.selectedOption)?p.selectedOption=p.selectedOption===c.length-1?p.selectedOption:p.selectedOption+1:p.selectedOption=0;break;case 38:angular.isNumber(p.selectedOption)?p.selectedOption=0===p.selectedOption?0:p.selectedOption-1:p.selectedOption=c.length-1}c[p.selectedOption].focus()},q.getDropdownElement=function(){return p.dropdownMenu},q.focusToggleElement=function(){p.toggleElement&&p.toggleElement[0].focus()},q.$watch("isOpen",function(c,d){if(u&&p.dropdownMenu){var e=h.positionElements(b,p.dropdownMenu,"bottom-left",!0),i={top:e.top+"px",display:c?"block":"none"},l=p.dropdownMenu.hasClass("dropdown-menu-right");l?(i.left="auto",i.right=window.innerWidth-(e.left+b.prop("offsetWidth"))+"px"):(i.left=e.left+"px",i.right="auto"),p.dropdownMenu.css(i)}if(g[c?"addClass":"removeClass"](b,r).then(function(){angular.isDefined(c)&&c!==d&&t(a,{open:!!c})}),c)p.dropdownMenuTemplateUrl&&k(p.dropdownMenuTemplateUrl).then(function(a){n=q.$new(),j(a.trim())(n,function(a){var b=a;p.dropdownMenu.replaceWith(b),p.dropdownMenu=b})}),q.focusToggleElement(),f.open(q);else{if(p.dropdownMenuTemplateUrl){n&&n.$destroy();var m=angular.element('<ul class="dropdown-menu"></ul>');p.dropdownMenu.replaceWith(m),p.dropdownMenu=m}f.close(q),p.selectedOption=null}angular.isFunction(s)&&s(a,c)}),a.$on("$locationChangeSuccess",function(){"disabled"!==q.getAutoClose()&&(q.isOpen=!1)});var w=a.$on("$destroy",function(){q.$destroy()});q.$on("$destroy",w)}]).directive("dropdown",["$log","$dropdownSuppressWarning",function(a,b){return{controller:"DropdownController",link:function(c,d,e,f){b||a.warn("dropdown is now deprecated. Use uib-dropdown instead."),f.init()}}}]).directive("dropdownMenu",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"AC",require:"?^dropdown",link:function(c,d,e,f){if(f&&!angular.isDefined(e.dropdownNested)){b||a.warn("dropdown-menu is now deprecated. Use uib-dropdown-menu instead."),d.addClass("dropdown-menu");var g=e.templateUrl;g&&(f.dropdownMenuTemplateUrl=g),f.dropdownMenu||(f.dropdownMenu=d)}}}}]).directive("keyboardNav",["$log","$dropdownSuppressWarning",function(a,b){return{restrict:"A",require:"?^dropdown",link:function(c,d,e,f){b||a.warn("keyboard-nav is now deprecated. Use uib-keyboard-nav instead."),d.bind("keydown",function(a){if(-1!==[38,40].indexOf(a.which)){a.preventDefault(),a.stopPropagation();var b=f.dropdownMenu.find("a");switch(a.which){case 40:angular.isNumber(f.selectedOption)?f.selectedOption=f.selectedOption===b.length-1?f.selectedOption:f.selectedOption+1:f.selectedOption=0;break;case 38:angular.isNumber(f.selectedOption)?f.selectedOption=0===f.selectedOption?0:f.selectedOption-1:f.selectedOption=b.length-1}b[f.selectedOption].focus()}})}}}]).directive("dropdownToggle",["$log","$dropdownSuppressWarning",function(a,b){return{require:"?^dropdown",link:function(c,d,e,f){if(b||a.warn("dropdown-toggle is now deprecated. Use uib-dropdown-toggle instead."),f){d.addClass("dropdown-toggle"),f.toggleElement=d;var g=function(a){a.preventDefault(),d.hasClass("disabled")||e.disabled||c.$apply(function(){f.toggle()})};d.bind("click",g),d.attr({"aria-haspopup":!0,"aria-expanded":!1}),c.$watch(f.isOpen,function(a){d.attr("aria-expanded",!!a)}),c.$on("$destroy",function(){d.unbind("click",g)})}}}}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,f){d.addClass("modal-backdrop"),f.modalInClass&&(e?e(d,{addClass:f.modalInClass}).start():a.addClass(d,f.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var g=c();e?e(d,{removeClass:f.modalInClass}).start().then(g):a.removeClass(d,f.modalInClass).then(g)}))}var e=null;return b.has("$animateCss")&&(e=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animate","$injector",function(a,b,c,d){var e=null;return d.has("$animateCss")&&(e=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),d.size=g.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",d.close),d.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"==a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=e?e(f,{addClass:g.modalInClass}).start():c.addClass(f,g.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();e?e(f,{removeClass:g.modalInClass}).start().then(d):c.removeClass(f,g.modalInClass).then(d)})),b.when(h).then(function(){var a=f[0].querySelector("[autofocus]");a?a.focus():f[0].focus()});var i=a.getTop();i&&a.modalRendered(i.key)})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap",function(a,b,c,d,e,f,g,h,i){function j(){for(var a=-1,b=u.keys(),c=0;c<b.length;c++)u.get(b[c]).value.backdrop&&(a=c);return a}function k(a,b){var d=c.find("body").eq(0),e=u.get(a).value;u.remove(a),n(e.modalDomEl,e.modalScope,function(){var b=e.openedClass||t;v.remove(b,a),d.toggleClass(b,v.hasKey(b)),l(!0)}),m(),b&&b.focus?b.focus():d.focus()}function l(a){var b;u.length()>0&&(b=u.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function m(){if(q&&-1==j()){var a=r;n(q,r,function(){a=null}),q=void 0,r=void 0}}function n(b,c,d){function e(){e.done||(e.done=!0,p?p(b,{event:"leave"}).start().then(function(){b.remove()}):a.leave(b),c.$destroy(),d&&d())}var g,h=null,i=function(){return g||(g=f.defer(),h=g.promise),function(){g.resolve()}};return c.$broadcast(w.NOW_CLOSING_EVENT,i),f.when(h).then(e)}function o(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var p=null;g.has("$animateCss")&&(p=g.get("$animateCss"));var q,r,s,t="modal-open",u=i.createNew(),v=h.createNew(),w={NOW_CLOSING_EVENT:"modal.stack.now-closing"},x=0,y="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(j,function(a){r&&(r.index=a)}),c.bind("keydown",function(a){if(a.isDefaultPrevented())return a;var b=u.top();if(b&&b.value.keyboard)switch(a.which){case 27:a.preventDefault(),e.$apply(function(){w.dismiss(b.key,"escape key press")});break;case 9:w.loadFocusElementList(b);var c=!1;a.shiftKey?w.isFocusInFirstItem(a)&&(c=w.focusLastFocusableElement()):w.isFocusInLastItem(a)&&(c=w.focusFirstFocusableElement()),c&&(a.preventDefault(),a.stopPropagation())}}),w.open=function(a,b){var f=c[0].activeElement,g=b.openedClass||t;l(!1),u.add(a,{deferred:b.deferred,renderDeferred:b.renderDeferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard,openedClass:b.openedClass,windowTopClass:b.windowTopClass}),v.put(g,a);var h=c.find("body").eq(0),i=j();if(i>=0&&!q){r=e.$new(!0),r.index=i;var k=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');k.attr("backdrop-class",b.backdropClass),b.animation&&k.attr("modal-animation","true"),q=d(k)(r),h.append(q)}var m=angular.element('<div uib-modal-window="modal-window"></div>');m.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,"window-top-class":b.windowTopClass,size:b.size,index:u.length()-1,animate:"animate"}).html(b.content),b.animation&&m.attr("modal-animation","true");var n=d(m)(b.scope);u.top().value.modalDomEl=n,u.top().value.modalOpener=f,h.append(n),h.addClass(g),w.clearFocusListCache()},w.close=function(a,b){var c=u.get(a);return c&&o(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),k(a,c.value.modalOpener),!0):!c},w.dismiss=function(a,b){var c=u.get(a);return c&&o(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),k(a,c.value.modalOpener),!0):!c},w.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},w.getTop=function(){return u.top()},w.modalRendered=function(a){var b=u.get(a);b&&b.value.renderDeferred.resolve()},w.focusFirstFocusableElement=function(){return s.length>0?(s[0].focus(),!0):!1},w.focusLastFocusableElement=function(){return s.length>0?(s[s.length-1].focus(),!0):!1},w.isFocusInFirstItem=function(a){return s.length>0?(a.target||a.srcElement)==s[0]:!1},w.isFocusInLastItem=function(a){return s.length>0?(a.target||a.srcElement)==s[s.length-1]:!1},w.clearFocusListCache=function(){s=[],x=0},w.loadFocusElementList=function(a){if((void 0===s||!s.length)&&a){var b=a.value.modalDomEl;b&&b.length&&(s=b[0].querySelectorAll(y))}},w}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$templateRequest","$controller","$uibModalStack","$modalSuppressWarning","$log",function(b,c,d,e,f,g,h,i){function j(a){return a.template?d.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}function k(a){var c=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?c.push(d.when(b.invoke(a))):angular.isString(a)?c.push(d.when(b.get(a))):c.push(d.when(a))}),c}var l={},m=null;return l.getPromiseChain=function(){return m},l.open=function(b){function e(){return r}var l=d.defer(),n=d.defer(),o=d.defer(),p={result:l.promise,opened:n.promise,rendered:o.promise,close:function(a){return g.close(p,a)},dismiss:function(a){return g.dismiss(p,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=d.all([j(b)].concat(k(b.resolve)));return q=m=d.all([m]).then(e,e).then(function(a){var d=(b.scope||c).$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var e,j={},k=1;b.controller&&(j.$scope=d,j.$uibModalInstance=p,Object.defineProperty(j,"$modalInstance",{get:function(){return h||i.warn("$modalInstance is now deprecated. Use $uibModalInstance instead."),p}}),angular.forEach(b.resolve,function(b,c){j[c]=a[k++]}),e=f(b.controller,j),b.controllerAs&&(b.bindToController&&angular.extend(e,d),d[b.controllerAs]=e)),g.open(p,{scope:d,deferred:l,renderDeferred:o,content:a[0],animation:b.animation,backdrop:b.backdrop,keyboard:b.keyboard,backdropClass:b.backdropClass,windowTopClass:b.windowTopClass,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size,openedClass:b.openedClass}),n.resolve(!0)},function(a){n.reject(a),l.reject(a)})["finally"](function(){m===q&&(m=null)}),p},l}]};return a}),angular.module("ui.bootstrap.modal").value("$modalSuppressWarning",!1).directive("modalBackdrop",["$animate","$injector","$modalStack","$log","$modalSuppressWarning",function(a,b,c,d,e){function f(b,f,h){e||d.warn("modal-backdrop is now deprecated. Use uib-modal-backdrop instead."),f.addClass("modal-backdrop"),h.modalInClass&&(g?g(f,{addClass:h.modalInClass}).start():a.addClass(f,h.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(b,c){var d=c();g?g(f,{removeClass:h.modalInClass}).start().then(d):a.removeClass(f,h.modalInClass).then(d)}))}var g=null;return b.has("$animateCss")&&(g=b.get("$animateCss")),{replace:!0,templateUrl:"template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),f}}}]).directive("modalWindow",["$modalStack","$q","$animate","$injector","$log","$modalSuppressWarning",function(a,b,c,d,e,f){var g=null;return d.has("$animateCss")&&(g=d.get("$animateCss")),{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(d,h,i){f||e.warn("modal-window is now deprecated. Use uib-modal-window instead."),h.addClass(i.windowClass||""),h.addClass(i.windowTopClass||""),d.size=i.size,d.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},h.on("click",d.close),d.$isRendered=!0;var j=b.defer();i.$observe("modalRender",function(a){"true"==a&&j.resolve()}),j.promise.then(function(){var e=null;i.modalInClass&&(e=g?g(h,{addClass:i.modalInClass}).start():c.addClass(h,i.modalInClass),d.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();g?g(h,{removeClass:i.modalInClass}).start().then(d):c.removeClass(h,i.modalInClass).then(d)})),b.when(e).then(function(){var a=h[0].querySelector("[autofocus]");a?a.focus():h[0].focus()});var f=a.getTop();f&&a.modalRendered(f.key)})}}}]).directive("modalAnimationClass",["$log","$modalSuppressWarning",function(a,b){return{compile:function(c,d){b||a.warn("modal-animation-class is now deprecated. Use uib-modal-animation-class instead."),d.modalAnimation&&c.addClass(d.modalAnimationClass)}}}]).directive("modalTransclude",["$log","$modalSuppressWarning",function(a,b){return{link:function(c,d,e,f,g){
    b||a.warn("modal-transclude is now deprecated. Use uib-modal-transclude instead."),g(c.$parent,function(a){d.empty(),d.append(a)})}}}]).service("$modalStack",["$animate","$timeout","$document","$compile","$rootScope","$q","$injector","$$multiMap","$$stackedMap","$uibModalStack","$log","$modalSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k,l){l||k.warn("$modalStack is now deprecated. Use $uibModalStack instead."),angular.extend(this,j)}]).provider("$modal",["$uibModalProvider",function(a){angular.extend(this,a),this.$get=["$injector","$log","$modalSuppressWarning",function(b,c,d){return d||c.warn("$modal is now deprecated. Use $uibModal instead."),b.invoke(a.$get)}]}]),angular.module("ui.bootstrap.pagination",[]).controller("UibPaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(g,h){e=g,this.config=h,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=h.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.pagination").value("$paginationSuppressWarning",!1).controller("PaginationController",["$scope","$attrs","$parse","$log","$paginationSuppressWarning",function(a,b,c,d,e){e||d.warn("PaginationController is now deprecated. Use UibPaginationController instead.");var f=this,g={$setViewValue:angular.noop},h=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(d,e){g=d,this.config=e,g.$render=function(){f.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){f.itemsPerPage=parseInt(b,10),a.totalPages=f.calculateTotalPages()}):this.itemsPerPage=e.itemsPerPage,a.$watch("totalItems",function(){a.totalPages=f.calculateTotalPages()}),a.$watch("totalPages",function(b){h(a.$parent,b),a.page>b?a.selectPage(b):g.$render()})},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(g.$viewValue,10)||1},a.selectPage=function(b,c){c&&c.preventDefault();var d=!a.ngDisabled||!c;d&&a.page!==b&&b>0&&b<=a.totalPages&&(c&&c.target&&c.target.blur(),g.$setViewValue(b),g.$render())},a.getText=function(b){return a[b+"Text"]||f.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages}}]).directive("pagination",["$parse","uibPaginationConfig","$log","$paginationSuppressWarning",function(a,b,c,d){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["pagination","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pagination.html"},replace:!0,link:function(e,f,g,h){function i(a,b,c){return{number:a,text:b,active:c}}function j(a,b){var c=[],d=1,e=b,f=angular.isDefined(m)&&b>m;f&&(n?(d=Math.max(a-Math.floor(m/2),1),e=d+m-1,e>b&&(e=b,d=e-m+1)):(d=(Math.ceil(a/m)-1)*m+1,e=Math.min(d+m-1,b)));for(var g=d;e>=g;g++){var h=i(g,g,g===a);c.push(h)}if(f&&!n){if(d>1){var j=i(d-1,"...",!1);c.unshift(j)}if(b>e){var k=i(e+1,"...",!1);c.push(k)}}return c}d||c.warn("pagination is now deprecated. Use uib-pagination instead.");var k=h[0],l=h[1];if(l){var m=angular.isDefined(g.maxSize)?e.$parent.$eval(g.maxSize):b.maxSize,n=angular.isDefined(g.rotate)?e.$parent.$eval(g.rotate):b.rotate;e.boundaryLinks=angular.isDefined(g.boundaryLinks)?e.$parent.$eval(g.boundaryLinks):b.boundaryLinks,e.directionLinks=angular.isDefined(g.directionLinks)?e.$parent.$eval(g.directionLinks):b.directionLinks,k.init(l,b),g.maxSize&&e.$parent.$watch(a(g.maxSize),function(a){m=parseInt(a,10),k.render()});var o=k.render;k.render=function(){o(),e.page>0&&e.page<=e.totalPages&&(e.pages=j(e.page,e.totalPages))}}}}}]).directive("pager",["uibPagerConfig","$log","$paginationSuppressWarning",function(a,b,c){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["pager","?ngModel"],controller:"PaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"template/pagination/pager.html"},replace:!0,link:function(d,e,f,g){c||b.warn("pager is now deprecated. Use uib-pager instead.");var h=g[0],i=g[1];i&&(d.align=angular.isDefined(f.align)?d.$parent.$eval(f.align):a.align,h.init(i,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){var n=m.createNew();return h.on("keypress",function(a){if(27===a.which){var b=n.top();b&&(b.value.close(),n.removeTop(),b=null)}}),function(e,k,m,o){function p(a){var b=(a||o.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}o=angular.extend({},b,d,o);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup title="'+r+"title"+s+'" '+(o.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){L.isOpen?q():m()}function m(){(!K||a.$eval(d[k+"Enable"]))&&(u(),x(),L.popupDelay?F||(F=g(r,L.popupDelay,!1)):r())}function q(){s(),L.popupCloseDelay?G||(G=g(t,L.popupCloseDelay,!1)):t()}function r(){return s(),u(),L.content?(v(),void L.$evalAsync(function(){L.isOpen=!0,y(!0),Q()})):angular.noop}function s(){F&&(g.cancel(F),F=null),H&&(g.cancel(H),H=null)}function t(){s(),u(),L&&L.$evalAsync(function(){L.isOpen=!1,y(!1),L.animation?E||(E=g(w,150,!1)):w()})}function u(){G&&(g.cancel(G),G=null),E&&(g.cancel(E),E=null)}function v(){C||(D=L.$new(),C=c(D,function(a){I?h.find("body").append(a):b.after(a)}),z())}function w(){A(),E=null,C&&(C.remove(),C=null),D&&(D.$destroy(),D=null)}function x(){L.title=d[k+"Title"],O?L.content=O(a):L.content=d[e],L.popupClass=d[k+"Class"],L.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:o.placement;var b=parseInt(d[k+"PopupDelay"],10),c=parseInt(d[k+"PopupCloseDelay"],10);L.popupDelay=isNaN(b)?o.popupDelay:b,L.popupCloseDelay=isNaN(c)?o.popupCloseDelay:c}function y(b){N&&angular.isFunction(N.assign)&&N.assign(a,b)}function z(){P.length=0,O?(P.push(a.$watch(O,function(a){L.content=a,!a&&L.isOpen&&t()})),P.push(D.$watch(function(){M||(M=!0,D.$$postDigest(function(){M=!1,L&&L.isOpen&&Q()}))}))):P.push(d.$observe(e,function(a){L.content=a,!a&&L.isOpen?t():Q()})),P.push(d.$observe(k+"Title",function(a){L.title=a,L.isOpen&&Q()})),P.push(d.$observe(k+"Placement",function(a){L.placement=a?a:o.placement,L.isOpen&&Q()}))}function A(){P.length&&(angular.forEach(P,function(a){a()}),P.length=0)}function B(){var a=d[k+"Trigger"];R(),J=p(a),"none"!==J.show&&J.show.forEach(function(a,c){a===J.hide[c]?b[0].addEventListener(a,j):a&&(b[0].addEventListener(a,m),J.hide[c].split(" ").forEach(function(a){b[0].addEventListener(a,q)})),b.on("keypress",function(a){27===a.which&&q()})})}var C,D,E,F,G,H,I=angular.isDefined(o.appendToBody)?o.appendToBody:!1,J=p(void 0),K=angular.isDefined(d[k+"Enable"]),L=a.$new(!0),M=!1,N=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,O=o.useContentExp?l(d[e]):!1,P=[],Q=function(){C&&C.html()&&(H||(H=g(function(){C.css({top:0,left:0});var a=i.positionElements(b,C,L.placement,I);a.top+="px",a.left+="px",a.visibility="visible",C.css(a),H=null},0,!1)))};L.origScope=a,L.isOpen=!1,n.add(L,{close:t}),L.contentExp=function(){return L.content},d.$observe("disabled",function(a){a&&s(),a&&L.isOpen&&t()}),N&&a.$watch(N,function(a){L&&!a===L.isOpen&&j()});var R=function(){J.show.forEach(function(a){b.unbind(a,m)}),J.hide.forEach(function(a){a.split(" ").forEach(function(a){b[0].removeEventListener(a,q)})})};B();var S=a.$eval(d[k+"Animation"]);L.animation=angular.isDefined(S)?!!S:o.animation;var T=a.$eval(d[k+"AppendToBody"]);I=angular.isDefined(T)?T:I,I&&a.$on("$locationChangeSuccess",function(){L.isOpen&&t()}),a.$on("$destroy",function(){s(),u(),R(),w(),n.remove(L),L=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(a,b,c){a.placement&&b.addClass(a.placement),a.popupClass&&b.addClass(a.popupClass),a.animation()&&b.addClass(c.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(a,b){b.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(a){angular.extend(this,a),this.$get=["$log","$tooltipSuppressWarning","$injector",function(b,c,d){return c||b.warn("$tooltip is now deprecated. Use $uibTooltip instead."),d.invoke(a.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(a,b,c,d,e,f){return{link:function(g,h,i){f||e.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var j,k,l,m=g.$eval(i.tooltipTemplateTranscludeScope),n=0,o=function(){k&&(k.remove(),k=null),j&&(j.$destroy(),j=null),l&&(a.leave(l).then(function(){k=null}),k=l,l=null)};g.$watch(b.parseAsResourceUrl(i.tooltipTemplateTransclude),function(b){var e=++n;b?(d(b,!0).then(function(d){if(e===n){var f=m.$new(),g=d,i=c(g)(f,function(b){o(),a.enter(b,h)});j=f,l=i,j.$emit("$includeContentLoaded",b)}},function(){e===n&&(o(),g.$emit("$includeContentError",b))}),g.$emit("$includeContentRequested",b)):o()}),g.$on("$destroy",o)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(a,b){return{restrict:"A",link:function(c,d,e){b||a.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),c.placement&&d.addClass(c.placement),c.popupClass&&d.addClass(c.popupClass),c.animation()&&d.addClass(e.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(c,d){b||a.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),d.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(c,d){b||a.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(a){return a("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(c,d){b||a.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),d.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(a){return a("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(a,b){b.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(c,d){b||a.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),d.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(a){return a("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(c,d){b||a.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),d.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(a){return a("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(a,b){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(c,d){b||a.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),d.addClass("popover")}}}]).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,f){e||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=f&&angular.isDefined(f.title)?f.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){var a=d.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("max",function(b){d.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{max:"=?"},templateUrl:"template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.progressbar").value("$progressSuppressWarning",!1).controller("ProgressController",["$scope","$attrs","uibProgressConfig","$log","$progressSuppressWarning",function(a,b,c,d,e){e||d.warn("ProgressController is now deprecated. Use UibProgressController instead.");var f=this,g=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(a.max)?a.max:c.max,this.addBar=function(b,c,d){g||c.css({transition:"none"}),this.bars.push(b),b.max=a.max,b.title=d&&angular.isDefined(d.title)?d.title:"progressbar",b.$watch("value",function(a){b.recalculatePercentage()}),b.recalculatePercentage=function(){b.percent=+(100*b.value/b.max).toFixed(2);var a=f.bars.reduce(function(a,b){return a+b.percent},0);a>100&&(b.percent-=a-100)},b.$on("$destroy",function(){c=null,f.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)},a.$watch("max",function(b){f.bars.forEach(function(b){b.max=a.max,b.recalculatePercentage()})})}]).directive("progress",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{max:"=?",title:"@?"},templateUrl:"template/progressbar/progress.html",link:function(){b||a.warn("progress is now deprecated. Use uib-progress instead.")}}}]).directive("bar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(c,d,e,f){b||a.warn("bar is now deprecated. Use uib-bar instead."),f.addBar(c,d)}}}]).directive("progressbar",["$log","$progressSuppressWarning",function(a,b){return{replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",max:"=?",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(c,d,e,f){b||a.warn("progressbar is now deprecated. Use uib-progressbar instead."),f.addBar(c,angular.element(d.children()[0]),{title:e.title})}}}]),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(d.$viewValue===b?0:b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.rating").value("$ratingSuppressWarning",!1).controller("RatingController",["$scope","$attrs","$controller","$log","$ratingSuppressWarning",function(a,b,c,d,e){e||d.warn("RatingController is now deprecated. Use UibRatingController instead."),angular.extend(this,c("UibRatingController",{$scope:a,$attrs:b}))}]).directive("rating",["$log","$ratingSuppressWarning",function(a,b){return{require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(c,d,e,f){b||a.warn("rating is now deprecated. Use uib-rating instead.");var g=f[0],h=f[1];g.init(h)}}}]),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect(),a.selectCalled=!1)}),a.active=!0,a.selectCalled||(a.onSelect(),a.selectCalled=!0)},b.addTab=function(a){c.push(a),1===c.length&&a.active!==!1?a.active=!0:a.active?b.select(a):a.active=!1},b.removeTab=function(a){var e=c.indexOf(a);if(a.active&&c.length>1&&!d){var f=e==c.length-1?e-1:e+1;b.select(c[f])}c.splice(e,1)};var d;a.$on("$destroy",function(){d=!0})}]).directive("uibTabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"UibTabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(b,c,d,e,f){b.$watch("active",function(a){a&&e.select(b)}),b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:["?^uibTab","?^tab"],link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase()||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:["?^uibTabset","?^tabset"],link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.tabs").value("$tabsSuppressWarning",!1).controller("TabsetController",["$scope","$controller","$log","$tabsSuppressWarning",function(a,b,c,d){d||c.warn("TabsetController is now deprecated. Use UibTabsetController instead."),angular.extend(this,b("UibTabsetController",{$scope:a}))}]).directive("tabset",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(c,d,e){b||a.warn("tabset is now deprecated. Use uib-tabset instead."),c.vertical=angular.isDefined(e.vertical)?c.$parent.$eval(e.vertical):!1,c.justified=angular.isDefined(e.justified)?c.$parent.$eval(e.justified):!1}}}]).directive("tab",["$parse","$log","$tabsSuppressWarning",function(a,b,c){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},link:function(d,e,f,g,h){c||b.warn("tab is now deprecated. Use uib-tab instead."),d.$watch("active",function(a){a&&g.select(d)}),d.disabled=!1,f.disable&&d.$parent.$watch(a(f.disable),function(a){d.disabled=!!a}),d.select=function(){d.disabled||(d.active=!0)},g.addTab(d),d.$on("$destroy",function(){g.removeTab(d)}),d.$transcludeFn=h}}}]).directive("tabHeadingTransclude",["$log","$tabsSuppressWarning",function(a,b){return{restrict:"A",require:"^tab",link:function(c,d){b||a.warn("tab-heading-transclude is now deprecated. Use uib-tab-heading-transclude instead."),c.$watch("headingElement",function(a){a&&(d.html(""),d.append(a))})}}}]).directive("tabContentTransclude",["$log","$tabsSuppressWarning",function(a,b){function c(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||a.hasAttribute("x-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase()||"x-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(d,e,f){b||a.warn("tab-content-transclude is now deprecated. Use uib-tab-content-transclude instead.");var g=d.$eval(f.tabContentTransclude);g.$transcludeFn(g.$parent,function(a){angular.forEach(a,function(a){c(a)?g.headingElement=a:e.append(a)})})}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===r[1]&&(b+=12)),b):void 0}function i(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function j(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a.toString()}function k(a){l(),q.$setViewValue(new Date(p)),m(a)}function l(){q.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function m(b){var c=p.getHours(),d=p.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:j(c),"m"!==b&&(a.minutes=j(d)),a.meridian=p.getHours()<12?r[0]:r[1]}function n(a,b){var c=new Date(a.getTime()+6e4*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes()),d}function o(a){p=n(p,a),k()}var p=new Date,q={$setViewValue:angular.noop},r=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){q=b,q.$render=this.render,q.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;h&&this.setupMousewheelEvents(e,f);var i=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;i&&this.setupArrowkeyEvents(e,f),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f)};var s=g.hourStep;c.hourStep&&a.$parent.$watch(d(c.hourStep),function(a){s=parseInt(a,10)});var t=g.minuteStep;c.minuteStep&&a.$parent.$watch(d(c.minuteStep),function(a){t=parseInt(a,10)});var u;a.$parent.$watch(d(c.min),function(a){var b=new Date(a);u=isNaN(b)?void 0:b});var v;a.$parent.$watch(d(c.max),function(a){var b=new Date(a);v=isNaN(b)?void 0:b}),a.noIncrementHours=function(){var a=n(p,60*s);
    return a>v||p>a&&u>a},a.noDecrementHours=function(){var a=n(p,60*-s);return u>a||a>p&&a>v},a.noIncrementMinutes=function(){var a=n(p,t);return a>v||p>a&&u>a},a.noDecrementMinutes=function(){var a=n(p,-t);return u>a||a>p&&a>v},a.noToggleMeridian=function(){return p.getHours()<13?n(p,720)>v:n(p,-720)<u},a.showMeridian=g.showMeridian,c.showMeridian&&a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,q.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(p.setHours(c),k())}else m()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c){b.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply())}),c.bind("keydown",function(b){38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply())})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){q.$setViewValue(null),q.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=h(),b=i();angular.isDefined(a)&&angular.isDefined(b)?(p.setHours(a),u>p||p>v?d(!0):k("h")):d(!0)},b.bind("blur",function(b){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=j(a.hours)})}),a.updateMinutes=function(){var a=i(),b=h();angular.isDefined(a)&&angular.isDefined(b)?(p.setMinutes(a),u>p||p>v?d(void 0,!0):k("m")):d(void 0,!0)},c.bind("blur",function(b){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=j(a.minutes)})})},this.render=function(){var b=q.$viewValue;isNaN(b)?(q.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(p=b),u>p||p>v?(q.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):l(),m())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*s)},a.decrementHours=function(){a.noDecrementHours()||o(60*-s)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(t)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(-t)},a.toggleMeridian=function(){a.noToggleMeridian()||o(720*(p.getHours()<12?1:-1))}}]).directive("uibTimepicker",function(){return{restrict:"EA",require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.timepicker").value("$timepickerSuppressWarning",!1).controller("TimepickerController",["$scope","$element","$attrs","$controller","$log","$timepickerSuppressWarning",function(a,b,c,d,e,f){f||e.warn("TimepickerController is now deprecated. Use UibTimepickerController instead."),angular.extend(this,d("UibTimepickerController",{$scope:a,$element:b,$attrs:c}))}]).directive("timepicker",["$log","$timepickerSuppressWarning",function(a,b){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(a,b){return b.templateUrl||"template/timepicker/timepicker.html"},link:function(c,d,e,f){b||a.warn("timepicker is now deprecated. Use uib-timepicker instead.");var g=f[0],h=f[1];h&&g.init(h,d.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(){K.moveInProgress||(K.moveInProgress=!0,K.$digest()),S&&g.cancel(S),S=g(function(){K.matches.length&&n(),K.moveInProgress=!1},r)}function n(){K.position=C?k.offset(b):k.position(b),K.position.top+=b.prop("offsetHeight")}var o,p,q=[9,13,27,38,40],r=200,s=a.$eval(c.typeaheadMinLength);s||0===s||(s=1);var t,u,v=a.$eval(c.typeaheadWaitMs)||0,w=a.$eval(c.typeaheadEditable)!==!1,x=e(c.typeaheadLoading).assign||angular.noop,y=e(c.typeaheadOnSelect),z=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,A=e(c.typeaheadNoResults).assign||angular.noop,B=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,C=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,D=c.typeaheadAppendToElementId||!1,E=a.$eval(c.typeaheadFocusFirst)!==!1,F=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,G=e(c.ngModel),H=e(c.ngModel+"($$$p)"),I=function(b,c){return angular.isFunction(G(a))&&p&&p.$options&&p.$options.getterSetter?H(b,{$$$p:c}):G.assign(b,c)},J=l.parse(c.uibTypeahead),K=a.$new(),L=a.$on("$destroy",function(){K.$destroy()});K.$on("$destroy",L);var M="typeahead-"+K.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":M});var N=angular.element("<div uib-typeahead-popup></div>");N.attr({id:M,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(c.typeaheadTemplateUrl)&&N.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&N.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var O=function(){K.matches=[],K.activeIdx=-1,b.attr("aria-expanded",!1)},P=function(a){return M+"-option-"+a};K.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",P(a))});var Q=function(a,b){return K.matches.length>b&&a?a.toUpperCase()===K.matches[b].label.toUpperCase():!1},R=function(c){var d={$viewValue:c};x(a,!0),A(a,!1),f.when(J.source(a,d)).then(function(e){var f=c===o.$viewValue;if(f&&t)if(e&&e.length>0){K.activeIdx=E?0:-1,A(a,!1),K.matches.length=0;for(var g=0;g<e.length;g++)d[J.itemName]=e[g],K.matches.push({id:P(g),label:J.viewMapper(K,d),model:e[g]});K.query=c,n(),b.attr("aria-expanded",!0),F&&1===K.matches.length&&Q(c,0)&&K.select(0)}else O(),A(a,!0);f&&x(a,!1)},function(){O(),x(a,!1),A(a,!0)})};C&&(angular.element(i).bind("resize",m),h.find("body").bind("scroll",m));var S;K.moveInProgress=!1,K.query=void 0;var T,U=function(a){T=g(function(){R(a)},v)},V=function(){T&&g.cancel(T)};O(),K.select=function(d){var e,f,h={};u=!0,h[J.itemName]=f=K.matches[d].model,e=J.modelMapper(a,h),I(a,e),o.$setValidity("editable",!0),o.$setValidity("parse",!0),y(a,{$item:f,$model:e,$label:J.viewMapper(a,h)}),O(),K.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.bind("keydown",function(a){if(0!==K.matches.length&&-1!==q.indexOf(a.which)){if(-1===K.activeIdx&&(9===a.which||13===a.which))return O(),void K.$digest();a.preventDefault(),40===a.which?(K.activeIdx=(K.activeIdx+1)%K.matches.length,K.$digest()):38===a.which?(K.activeIdx=(K.activeIdx>0?K.activeIdx:K.matches.length)-1,K.$digest()):13===a.which||9===a.which?K.$apply(function(){K.select(K.activeIdx)}):27===a.which&&(a.stopPropagation(),O(),K.$digest())}}),b.bind("blur",function(){z&&K.matches.length&&-1!==K.activeIdx&&!u&&(u=!0,K.$apply(function(){K.select(K.activeIdx)})),t=!1,u=!1});var W=function(a){b[0]!==a.target&&3!==a.which&&0!==K.matches.length&&(O(),j.$$phase||K.$digest())};h.bind("click",W),a.$on("$destroy",function(){h.unbind("click",W),(C||D)&&X.remove(),C&&(angular.element(i).unbind("resize",m),h.find("body").unbind("scroll",m)),N.remove()});var X=d(N)(K);C?h.find("body").append(X):D!==!1?angular.element(h[0].getElementById(D)).append(X):b.after(X),this.init=function(b,c){o=b,p=c,o.$parsers.unshift(function(b){return t=!0,0===s||b&&b.length>=s?v>0?(V(),U(b)):R(b):(x(a,!1),V(),O()),w?b:b?void o.$setValidity("editable",!1):(o.$setValidity("editable",!0),null)}),o.$formatters.push(function(b){var c,d,e={};return w||o.$setValidity("editable",!0),B?(e.$model=b,B(a,e)):(e[J.itemName]=b,c=J.viewMapper(a,e),e[J.itemName]=void 0,d=J.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",function(){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"template/typeahead/typeahead-match.html";a(g).then(function(a){b(a.trim())(d,function(a){e.replaceWith(a)})})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.typeahead").value("$typeaheadSuppressWarning",!1).service("typeaheadParser",["$parse","uibTypeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d){return d||c.warn("typeaheadParser is now deprecated. Use uibTypeaheadParser instead."),b}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$window","$rootScope","$uibPosition","typeaheadParser","$log","$typeaheadSuppressWarning",function(a,b,c,d,e,f,g,h,i,j,k){var l=[9,13,27,38,40],m=200;return{require:["ngModel","^?ngModelOptions"],link:function(n,o,p,q){function r(){N.moveInProgress||(N.moveInProgress=!0,N.$digest()),V&&d.cancel(V),V=d(function(){N.matches.length&&s(),N.moveInProgress=!1},m)}function s(){N.position=F?h.offset(o):h.position(o),N.position.top+=o.prop("offsetHeight")}k||j.warn("typeahead is now deprecated. Use uib-typeahead instead.");var t=q[0],u=q[1],v=n.$eval(p.typeaheadMinLength);v||0===v||(v=1);var w,x,y=n.$eval(p.typeaheadWaitMs)||0,z=n.$eval(p.typeaheadEditable)!==!1,A=b(p.typeaheadLoading).assign||angular.noop,B=b(p.typeaheadOnSelect),C=angular.isDefined(p.typeaheadSelectOnBlur)?n.$eval(p.typeaheadSelectOnBlur):!1,D=b(p.typeaheadNoResults).assign||angular.noop,E=p.typeaheadInputFormatter?b(p.typeaheadInputFormatter):void 0,F=p.typeaheadAppendToBody?n.$eval(p.typeaheadAppendToBody):!1,G=p.typeaheadAppendToElementId||!1,H=n.$eval(p.typeaheadFocusFirst)!==!1,I=p.typeaheadSelectOnExact?n.$eval(p.typeaheadSelectOnExact):!1,J=b(p.ngModel),K=b(p.ngModel+"($$$p)"),L=function(a,b){return angular.isFunction(J(n))&&u&&u.$options&&u.$options.getterSetter?K(a,{$$$p:b}):J.assign(a,b)},M=i.parse(p.typeahead),N=n.$new(),O=n.$on("$destroy",function(){N.$destroy()});N.$on("$destroy",O);var P="typeahead-"+N.$id+"-"+Math.floor(1e4*Math.random());o.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":P});var Q=angular.element("<div typeahead-popup></div>");Q.attr({id:P,matches:"matches",active:"activeIdx",select:"select(activeIdx)","move-in-progress":"moveInProgress",query:"query",position:"position"}),angular.isDefined(p.typeaheadTemplateUrl)&&Q.attr("template-url",p.typeaheadTemplateUrl),angular.isDefined(p.typeaheadPopupTemplateUrl)&&Q.attr("popup-template-url",p.typeaheadPopupTemplateUrl);var R=function(){N.matches=[],N.activeIdx=-1,o.attr("aria-expanded",!1)},S=function(a){return P+"-option-"+a};N.$watch("activeIdx",function(a){0>a?o.removeAttr("aria-activedescendant"):o.attr("aria-activedescendant",S(a))});var T=function(a,b){return N.matches.length>b&&a?a.toUpperCase()===N.matches[b].label.toUpperCase():!1},U=function(a){var b={$viewValue:a};A(n,!0),D(n,!1),c.when(M.source(n,b)).then(function(c){var d=a===t.$viewValue;if(d&&w)if(c&&c.length>0){N.activeIdx=H?0:-1,D(n,!1),N.matches.length=0;for(var e=0;e<c.length;e++)b[M.itemName]=c[e],N.matches.push({id:S(e),label:M.viewMapper(N,b),model:c[e]});N.query=a,s(),o.attr("aria-expanded",!0),I&&1===N.matches.length&&T(a,0)&&N.select(0)}else R(),D(n,!0);d&&A(n,!1)},function(){R(),A(n,!1),D(n,!0)})};F&&(angular.element(f).bind("resize",r),e.find("body").bind("scroll",r));var V;N.moveInProgress=!1,R(),N.query=void 0;var W,X=function(a){W=d(function(){U(a)},y)},Y=function(){W&&d.cancel(W)};t.$parsers.unshift(function(a){return w=!0,0===v||a&&a.length>=v?y>0?(Y(),X(a)):U(a):(A(n,!1),Y(),R()),z?a:a?void t.$setValidity("editable",!1):(t.$setValidity("editable",!0),null)}),t.$formatters.push(function(a){var b,c,d={};return z||t.$setValidity("editable",!0),E?(d.$model=a,E(n,d)):(d[M.itemName]=a,b=M.viewMapper(n,d),d[M.itemName]=void 0,c=M.viewMapper(n,d),b!==c?b:a)}),N.select=function(a){var b,c,e={};x=!0,e[M.itemName]=c=N.matches[a].model,b=M.modelMapper(n,e),L(n,b),t.$setValidity("editable",!0),t.$setValidity("parse",!0),B(n,{$item:c,$model:b,$label:M.viewMapper(n,e)}),R(),N.$eval(p.typeaheadFocusOnSelect)!==!1&&d(function(){o[0].focus()},0,!1)},o.bind("keydown",function(a){if(0!==N.matches.length&&-1!==l.indexOf(a.which)){if(-1===N.activeIdx&&(9===a.which||13===a.which))return R(),void N.$digest();a.preventDefault(),40===a.which?(N.activeIdx=(N.activeIdx+1)%N.matches.length,N.$digest()):38===a.which?(N.activeIdx=(N.activeIdx>0?N.activeIdx:N.matches.length)-1,N.$digest()):13===a.which||9===a.which?N.$apply(function(){N.select(N.activeIdx)}):27===a.which&&(a.stopPropagation(),R(),N.$digest())}}),o.bind("blur",function(){C&&N.matches.length&&-1!==N.activeIdx&&!x&&(x=!0,N.$apply(function(){N.select(N.activeIdx)})),w=!1,x=!1});var Z=function(a){o[0]!==a.target&&3!==a.which&&0!==N.matches.length&&(R(),g.$$phase||N.$digest())};e.bind("click",Z),n.$on("$destroy",function(){e.unbind("click",Z),(F||G)&&$.remove(),F&&(angular.element(f).unbind("resize",r),e.find("body").unbind("scroll",r)),Q.remove()});var $=a(Q)(N);F?e.find("body").append($):G!==!1?angular.element(e[0].getElementById(G)).append($):o.after($)}}}]).directive("typeaheadPopup",["$typeaheadSuppressWarning","$log",function(a,b){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"template/typeahead/typeahead-popup.html"},link:function(c,d,e){a||b.warn("typeahead-popup is now deprecated. Use uib-typeahead-popup instead."),c.templateUrl=e.templateUrl,c.isOpen=function(){return c.matches.length>0},c.isActive=function(a){return c.active==a},c.selectActive=function(a){c.active=a},c.selectMatch=function(a){c.select({activeIdx:a})}}}}]).directive("typeaheadMatch",["$templateRequest","$compile","$parse","$typeaheadSuppressWarning","$log",function(a,b,c,d,e){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(f,g,h){d||e.warn("typeahead-match is now deprecated. Use uib-typeahead-match instead.");var i=c(h.templateUrl)(f.$parent)||"template/typeahead/typeahead-match.html";a(i).then(function(a){b(a.trim())(f,function(a){g.replaceWith(a)})})}}}]).filter("typeaheadHighlight",["$sce","$injector","$log","$typeaheadSuppressWarning",function(a,b,c,d){function e(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function f(a){return/<.*>/g.test(a)}var g;return g=b.has("$sanitize"),function(b,h){return d||c.warn("typeaheadHighlight is now deprecated. Use uibTypeaheadHighlight instead."),!g&&f(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=h?(""+b).replace(new RegExp(e(h),"gi"),"<strong>$&</strong>"):b,g||(b=a.trustAsHtml(b)),b}}]),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel {{panelClass || \'panel-default\'}}">\n  <div class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" uib-collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" style="min-width: 0;" ng-transclude></div>\n</div>\n')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}" aria-valuetext="{{r.title}}"></i>\n</span>\n');
}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group" ng-class="{\'has-error\': invalidHours}">\n        <input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td>:</td>\n      <td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n        <input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}">\n      </td>\n      <td ng-show="showMeridian"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a href tabindex="-1" ng-bind-html="match.label | uibTypeaheadHighlight:query"></a>\n')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');;

'use strict';

angular.module('colorpicker.module', [])
    .factory('Helper', function () {
      return {
        closestSlider: function (elem) {
          var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
          if (matchesSelector.bind(elem)('I')) {
            return elem.parentNode;
          }
          return elem;
        },
        getOffset: function (elem, fixedPosition) {
          var
              x = 0,
              y = 0,
              scrollX = 0,
              scrollY = 0;
          while (elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
            x += elem.offsetLeft;
            y += elem.offsetTop;
            if (!fixedPosition && elem.tagName === 'BODY') {
              scrollX += document.documentElement.scrollLeft || elem.scrollLeft;
              scrollY += document.documentElement.scrollTop || elem.scrollTop;
            } else {
              scrollX += elem.scrollLeft;
              scrollY += elem.scrollTop;
            }
            elem = elem.offsetParent;
          }
          return {
            top: y,
            left: x,
            scrollX: scrollX,
            scrollY: scrollY
          };
        },
        // a set of RE's that can match strings and generate color tuples. https://github.com/jquery/jquery-color/
        stringParsers: [
          {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (execResult) {
              return [
                execResult[1],
                execResult[2],
                execResult[3],
                execResult[4]
              ];
            }
          },
          {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
            parse: function (execResult) {
              return [
                2.55 * execResult[1],
                2.55 * execResult[2],
                2.55 * execResult[3],
                execResult[4]
              ];
            }
          },
          {
            re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            parse: function (execResult) {
              return [
                parseInt(execResult[1], 16),
                parseInt(execResult[2], 16),
                parseInt(execResult[3], 16)
              ];
            }
          },
          {
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            parse: function (execResult) {
              return [
                parseInt(execResult[1] + execResult[1], 16),
                parseInt(execResult[2] + execResult[2], 16),
                parseInt(execResult[3] + execResult[3], 16)
              ];
            }
          }
        ]
      };
    })
    .factory('Color', ['Helper', function (Helper) {
      return {
        value: {
          h: 1,
          s: 1,
          b: 1,
          a: 1
        },
        // translate a format from Color object to a string
        'rgb': function () {
          var rgb = this.toRGB();
          return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
        },
        'rgba': function () {
          var rgb = this.toRGB();
          return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';
        },
        'hex': function () {
          return  this.toHex();
        },

        // HSBtoRGB from RaphaelJS
        RGBtoHSB: function (r, g, b, a) {
          r /= 255;
          g /= 255;
          b /= 255;

          var H, S, V, C;
          V = Math.max(r, g, b);
          C = V - Math.min(r, g, b);
          H = (C === 0 ? null :
              V == r ? (g - b) / C :
                  V == g ? (b - r) / C + 2 :
                      (r - g) / C + 4
              );
          H = ((H + 360) % 6) * 60 / 360;
          S = C === 0 ? 0 : C / V;
          return {h: H || 1, s: S, b: V, a: a || 1};
        },

        //parse a string to HSB
        setColor: function (val) {
          val = val.toLowerCase();
          for (var key in Helper.stringParsers) {
            if (Helper.stringParsers.hasOwnProperty(key)) {
              var parser = Helper.stringParsers[key];
              var match = parser.re.exec(val),
                  values = match && parser.parse(match),
                  space = parser.space || 'rgba';
              if (values) {
                this.value = this.RGBtoHSB.apply(null, values);
                return false;
              }
            }
          }
        },

        setHue: function (h) {
          this.value.h = 1 - h;
        },

        setSaturation: function (s) {
          this.value.s = s;
        },

        setLightness: function (b) {
          this.value.b = 1 - b;
        },

        setAlpha: function (a) {
          this.value.a = parseInt((1 - a) * 100, 10) / 100;
        },

        // HSBtoRGB from RaphaelJS
        // https://github.com/DmitryBaranovskiy/raphael/
        toRGB: function (h, s, b, a) {
          if (!h) {
            h = this.value.h;
            s = this.value.s;
            b = this.value.b;
          }
          h *= 360;
          var R, G, B, X, C;
          h = (h % 360) / 60;
          C = b * s;
          X = C * (1 - Math.abs(h % 2 - 1));
          R = G = B = b - C;

          h = ~~h;
          R += [C, X, 0, 0, X, C][h];
          G += [X, C, C, X, 0, 0][h];
          B += [0, 0, X, C, C, X][h];
          return {
            r: Math.round(R * 255),
            g: Math.round(G * 255),
            b: Math.round(B * 255),
            a: a || this.value.a
          };
        },

        toHex: function (h, s, b, a) {
          var rgb = this.toRGB(h, s, b, a);
          return '#' + ((1 << 24) | (parseInt(rgb.r, 10) << 16) | (parseInt(rgb.g, 10) << 8) | parseInt(rgb.b, 10)).toString(16).substr(1);
        }
      };
    }])
    .factory('Slider', ['Helper', function (Helper) {
      var
          slider = {
            maxLeft: 0,
            maxTop: 0,
            callLeft: null,
            callTop: null,
            knob: {
              top: 0,
              left: 0
            }
          },
          pointer = {};

      return {
        getSlider: function() {
          return slider;
        },
        getLeftPosition: function(event) {
          return Math.max(0, Math.min(slider.maxLeft, slider.left + ((event.pageX || pointer.left) - pointer.left)));
        },
        getTopPosition: function(event) {
          return Math.max(0, Math.min(slider.maxTop, slider.top + ((event.pageY || pointer.top) - pointer.top)));
        },
        setSlider: function (event, fixedPosition) {
          var
            target = Helper.closestSlider(event.target),
            targetOffset = Helper.getOffset(target, fixedPosition);
          slider.knob = target.children[0].style;
          slider.left = event.pageX - targetOffset.left - window.pageXOffset + targetOffset.scrollX;
          slider.top = event.pageY - targetOffset.top - window.pageYOffset + targetOffset.scrollY;

          pointer = {
            left: event.pageX,
            top: event.pageY
          };
        },
        setSaturation: function(event, fixedPosition) {
          slider = {
            maxLeft: 100,
            maxTop: 100,
            callLeft: 'setSaturation',
            callTop: 'setLightness'
          };
          this.setSlider(event, fixedPosition)
        },
        setHue: function(event, fixedPosition) {
          slider = {
            maxLeft: 0,
            maxTop: 100,
            callLeft: false,
            callTop: 'setHue'
          };
          this.setSlider(event, fixedPosition)
        },
        setAlpha: function(event, fixedPosition) {
          slider = {
            maxLeft: 0,
            maxTop: 100,
            callLeft: false,
            callTop: 'setAlpha'
          };
          this.setSlider(event, fixedPosition)
        },
        setKnob: function(top, left) {
          slider.knob.top = top + 'px';
          slider.knob.left = left + 'px';
        }
      };
    }])
    .directive('colorpicker', ['$document', '$compile', 'Color', 'Slider', 'Helper', function ($document, $compile, Color, Slider, Helper) {
      return {
        require: '?ngModel',
        restrict: 'A',
        link: function ($scope, elem, attrs, ngModel) {
          var
              thisFormat = attrs.colorpicker ? attrs.colorpicker : 'hex',
              position = angular.isDefined(attrs.colorpickerPosition) ? attrs.colorpickerPosition : 'bottom',
              fixedPosition = angular.isDefined(attrs.colorpickerFixedPosition) ? attrs.colorpickerFixedPosition : false,
              target = angular.isDefined(attrs.colorpickerParent) ? elem.parent() : angular.element(document.body),
              withInput = angular.isDefined(attrs.colorpickerWithInput) ? attrs.colorpickerWithInput : false,
              inputTemplate = withInput ? '<input type="text" name="colorpicker-input">' : '',
              template =
                  '<div class="colorpicker dropdown">' +
                      '<div class="dropdown-menu">' +
                      '<colorpicker-saturation><i></i></colorpicker-saturation>' +
                      '<colorpicker-hue><i></i></colorpicker-hue>' +
                      '<colorpicker-alpha><i></i></colorpicker-alpha>' +
                      '<colorpicker-preview></colorpicker-preview>' +
                      inputTemplate +
                      '<button class="close close-colorpicker">&times;</button>' +
                      '</div>' +
                      '</div>',
              colorpickerTemplate = angular.element(template),
              pickerColor = Color,
              sliderAlpha,
              sliderHue = colorpickerTemplate.find('colorpicker-hue'),
              sliderSaturation = colorpickerTemplate.find('colorpicker-saturation'),
              colorpickerPreview = colorpickerTemplate.find('colorpicker-preview'),
              pickerColorPointers = colorpickerTemplate.find('i');

          $compile(colorpickerTemplate)($scope);

          if (withInput) {
            var pickerColorInput = colorpickerTemplate.find('input');
            pickerColorInput
                .on('mousedown', function() {
                  event.stopPropagation();
                })
                .on('keyup', function(event) {
                  var newColor = this.value;
                  elem.val(newColor);
                  if(ngModel) {
                    $scope.$apply(ngModel.$setViewValue(newColor));
                  }
                  event.stopPropagation();
                  event.preventDefault();
                });
            elem.on('keyup', function() {
              pickerColorInput.val(elem.val());
            });
          }

          var bindMouseEvents = function() {
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
          };

          if (thisFormat === 'rgba') {
            colorpickerTemplate.addClass('alpha');
            sliderAlpha = colorpickerTemplate.find('colorpicker-alpha');
            sliderAlpha
                .on('click', function(event) {
                  Slider.setAlpha(event, fixedPosition);
                  mousemove(event);
                })
                .on('mousedown', function(event) {
                  Slider.setAlpha(event, fixedPosition);
                  bindMouseEvents();
                });
          }

          sliderHue
              .on('click', function(event) {
                Slider.setHue(event, fixedPosition);
                mousemove(event);
              })
              .on('mousedown', function(event) {
                Slider.setHue(event, fixedPosition);
                bindMouseEvents();
              });

          sliderSaturation
              .on('click', function(event) {
                Slider.setSaturation(event, fixedPosition);
                mousemove(event);
              })
              .on('mousedown', function(event) {
                Slider.setSaturation(event, fixedPosition);
                bindMouseEvents();
              });

          if (fixedPosition) {
            colorpickerTemplate.addClass('colorpicker-fixed-position');
          }

          colorpickerTemplate.addClass('colorpicker-position-' + position);

          target.append(colorpickerTemplate);

          if(ngModel) {
            ngModel.$render = function () {
              elem.val(ngModel.$viewValue);
            };
            $scope.$watch(attrs.ngModel, function() {
              update();
            });
          }

          elem.on('$destroy', function() {
            colorpickerTemplate.remove();
          });

          var previewColor = function () {
            try {
              colorpickerPreview.css('backgroundColor', pickerColor[thisFormat]());
            } catch (e) {
              colorpickerPreview.css('backgroundColor', pickerColor.toHex());
            }
            sliderSaturation.css('backgroundColor', pickerColor.toHex(pickerColor.value.h, 1, 1, 1));
            if (thisFormat === 'rgba') {
              sliderAlpha.css.backgroundColor = pickerColor.toHex();
            }
          };

          var mousemove = function (event) {
            var
                left = Slider.getLeftPosition(event),
                top = Slider.getTopPosition(event),
                slider = Slider.getSlider();

            Slider.setKnob(top, left);

            if (slider.callLeft) {
              pickerColor[slider.callLeft].call(pickerColor, left / 100);
            }
            if (slider.callTop) {
              pickerColor[slider.callTop].call(pickerColor, top / 100);
            }
            previewColor();
            var newColor = pickerColor[thisFormat]();
            elem.val(newColor);
            if(ngModel) {
              $scope.$apply(ngModel.$setViewValue(newColor));
            }
            if (withInput) {
              pickerColorInput.val(newColor);
            }
            return false;
          };

          var mouseup = function () {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
          };

          var update = function () {
            pickerColor.setColor(elem.val());
            pickerColorPointers.eq(0).css({
              left: pickerColor.value.s * 100 + 'px',
              top: 100 - pickerColor.value.b * 100 + 'px'
            });
            pickerColorPointers.eq(1).css('top', 100 * (1 - pickerColor.value.h) + 'px');
            pickerColorPointers.eq(2).css('top', 100 * (1 - pickerColor.value.a) + 'px');
            previewColor();
          };

          var getColorpickerTemplatePosition = function() {
            var
                positionValue,
                positionOffset = Helper.getOffset(elem[0]);

            if(angular.isDefined(attrs.colorpickerParent)) {
              positionOffset.left = 0;
              positionOffset.top = 0;
            }

            if (position === 'top') {
              positionValue =  {
                'top': positionOffset.top - 147,
                'left': positionOffset.left
              };
            } else if (position === 'right') {
              positionValue = {
                'top': positionOffset.top,
                'left': positionOffset.left + 126
              };
            } else if (position === 'bottom') {
              positionValue = {
                'top': positionOffset.top + elem[0].offsetHeight + 2,
                'left': positionOffset.left
              };
            } else if (position === 'left') {
              positionValue = {
                'top': positionOffset.top,
                'left': positionOffset.left - 150
              };
            }
            return {
              'top': positionValue.top + 'px',
              'left': positionValue.left + 'px'
            };
          };

          var documentMousedownHandler = function() {
            hideColorpickerTemplate();
          };

          elem.on('click', function () {
            update();
            colorpickerTemplate
                .addClass('colorpicker-visible')
                .css(getColorpickerTemplatePosition());

            // register global mousedown event to hide the colorpicker
            $document.on('mousedown', documentMousedownHandler);
          });

          colorpickerTemplate.on('mousedown', function (event) {
            event.stopPropagation();
            event.preventDefault();
          });

          var hideColorpickerTemplate = function() {
            if (colorpickerTemplate.hasClass('colorpicker-visible')) {
              colorpickerTemplate.removeClass('colorpicker-visible');

              // unregister the global mousedown event
              $document.off('mousedown', documentMousedownHandler);
            }
          };

          colorpickerTemplate.find('button').on('click', function () {
            hideColorpickerTemplate();
          });
        }
      };
    }]);;
( function( $ ) {

  'use strict';

  function ideaingCartSummay(){

    this.isCart = function(){
      return typeof wc_cart_params === 'undefined' ? false : true;
    }

    this.isCheckout = function(){
      return typeof wc_checkout_params === 'undefined' ? false : true;
    }

    this.isVisible = function(){
      return $( document.body ).hasClass('ics--active');
    }

    this.init();
  }

  ideaingCartSummay.prototype.trigger = function( el, event, options ){

    if (window.CustomEvent) {
      var e = new CustomEvent(event, {detail: options});
    } else {
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(event, true, true, options);
    }

    el.dispatchEvent(e);
  };

  ideaingCartSummay.prototype.init = function () {

    var self = this;

    if ( self.isCheckout() || self.isCart() ) return;

    $( document ).on('click', '.ics--toggle', function(){
      self.toggle();
    });

    $( document ).on('click', '.ics--open', function(){
      self.open();
    });

    $( document ).on('click', '.ics--close', function(){
      self.close();
    });

    $( document ).on('keyup', function(e){
      if ( 27 === e.keyCode ) self.close();
    });

    document.body.addEventListener('added_to_cart', function(e){

      self.update(e.detail, 'open');
    }, false)

    setTimeout(function(){ self.build(); }, 0 );
  };

  ideaingCartSummay.prototype.build = function () {

    var self = this;

    self.template = [
      '<div class="ics--close overlay"></div>',
      '<aside>',
        '<header>',
          '<div class="row">',
            '<div class="col-xs-4">',
              '<button class="ics--close"><i class="m-icon--arrow_forward"></i></button>',
            '</div>', // .col-*
            '<div class="col-xs-4">',
              '<strong>Cart</strong>',
            '</div>', // .col-*
            '<div class="col-xs-4 u--i">',
              '<span class="u--c">',
                '<span class="m-icon--shopping-bag-light-green"></span>',
            '</div>', // .col-*
          '</div>', // .row
        '</header>',
        '<div class="loader">',
          '<div>',
            '<div class="loader">',
              '<ul class="bokeh">',
                '<li></li>',
                '<li></li>',
                '<li></li>',
                '<li></li>',
              '</ul>',
            '</div>',
          '</div>',
        '</div>',
      '</aside>'
    ].join('');

    self.element = document.createElement('div');
    self.element.id = 'ideaing-g-cart-summary';
    self.element.className = 'global-cart-summary';
    self.element.innerHTML = self.template;

    document.body.appendChild(self.element);

    self.firstContent();
  };

  ideaingCartSummay.prototype.open = function () {

    var self = this;

    if ( self.switching ) return;

    self.switching = true;

    $( document.body ).addClass('ics--active');

    setTimeout(function(){

      $( document.body ).addClass('ics--on');

      self.switching = false;

      self.trigger(document.body, 'cart_summary_opened', self.element);

    }, 20 );
  };

  ideaingCartSummay.prototype.close = function () {

    var self = this;

    if ( self.switching ) return;

    self.switching = true;

    $( document.body ).addClass('ics--off');

    setTimeout(function(){

      $( document.body ).removeClass('ics--on ics--off ics--active');

      self.switching = false;

      self.trigger(document.body, 'cart_summary_closed', self.element);

    }, 400 );
  };

  ideaingCartSummay.prototype.toggle = function () {

    this.isVisible() ? this.close() : this.open();
  };

  ideaingCartSummay.prototype.firstContent = function () {

    var self = this;

    $.ajax({
      type: "POST",
      dataType: "json",
      url: '/ideas/wp-admin/admin-ajax.php',
      data: {
        action: 'global_cart_summary_fragments',
      },
      success: function( response ){

        console.log(self.cart, response);

        if ( undefined == self.cart ) self.update(response);

      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.warn(thrownError);
      }
    });
  };

  ideaingCartSummay.prototype.update = function (response, callback) {

    var self = this,
        fragments = response.fragments || false;

    if ( !fragments ) return;

    self.cart = {
      total: fragments['.cart-count'] || '',
      html: fragments['.global-cart-summary'] || self.template
    };

    $('.cart-count').text(self.cart.total);
    $( self.element ).find('aside').html(self.cart.html);

    if ( self.cart.total ){
      $('body').addClass('has-in-cart');
      callback ? self[callback]() : '';
    } else {
      $('body').removeClass('has-in-cart');
    }
  };

  $(document).ready(function(){

    try {

      new ideaingCartSummay();

    } catch (e) {

      console.error(e);
    }
  });

} )( jQuery );
;
( function( $ ) {

  'use strict';

  function ideaingAddToBag(){

    this.init();
  }

  ideaingAddToBag.prototype.trigger = function( el, event, options ){

    if (window.CustomEvent) {
      var e = new CustomEvent(event, {detail: options});
    } else {
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(event, true, true, options);
    }

    el.dispatchEvent(e);
  };

  ideaingAddToBag.prototype.init = function () {

    var self = this;

    $( document ).on('click', '.add-to-bag', function(e){

      e.preventDefault();

      self.add($(this));
    });
  };

  ideaingAddToBag.prototype.add = function ($thisbutton) {

    var self = this;

    if ( ! $thisbutton.attr( 'data-product_id' ) || $thisbutton.hasClass('loading') ) {
      return true;
    }

    $thisbutton.addClass( 'loading' );

    var data = {};

    $.each( $thisbutton.data(), function( key, value ) {
      data[key] = value;
    });

    $.post( '/ideas/shop?wc-ajax=add_to_cart', data, function( response ) {

      $thisbutton.removeClass( 'loading' );

      if ( response && ! response.error ) {

        self.trigger(document.body, 'added_to_cart', response);

      } else {

        console.warn(response);
      }
    });
  };

  $(document).ready(function(){

    try {

      new ideaingAddToBag();

    } catch (e) {

      console.error(e);
    }
  });

} )( jQuery );
;
( function( $ ) {

  'use strict';

  function ideaingCheckout(){

    this.isCheckout = function(){
      return typeof wc_checkout_params === 'undefined' ? false : true;
    }

    this.init();
  }

  ideaingCheckout.prototype.trigger = function( el, event, options ){

    if (window.CustomEvent) {
      var e = new CustomEvent(event, {detail: options});
    } else {
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(event, true, true, options);
    }

    el.dispatchEvent(e);
  };

  ideaingCheckout.prototype.init = function () {

    var self = this;

    if ( ! self.isCheckout() ) return;

    if ( $('#ship-to-different-address-checkbox').prop('checked') ){
      $('#ship-to-different-address').add('on-add-billing');
      self.trigger(document.body, 'country_to_state_changed', []);
    } else {
      $('#ship-to-different-address').remove('on-add-billing');
    }

    $( document ).on('focus', '.form-row input', function(){
      $(this).parent('.form-row').addClass('focus');
    });

    $( document ).on('blur', '.form-row input', function(){
      $(this).parent('.form-row').removeClass('focus');
    });

    $( document ).on('keyup change', '.form-row input', function(){
      self.update();
    });

    $( document ).on('change', '#createaccount', function(){

      $(this).parents('.create-account').toggleClass('on-create-account');
    });

    $( document ).on('click', '.on2', function( e ){

      $( document.body ).toggleClass('on-2');

      $('html, body').animate({ scrollTop: 0 }, 'slow');

      self.trigger(document.body, 'update_checkout', []);
    });

    $( document ).on('click', '.ship-to-diff-address', function(){
      var checkbox = $('#ship-to-different-address-checkbox'),
          checked = checkbox.prop('checked'),
          label = $(this),
          labeled = $(this).hasClass('same-address');

      if ( checked != labeled ) return;

      checkbox.prop('checked', !labeled).change();
      $('#ship-to-different-address').toggleClass('on-add-billing');
    });

    $( document ).on('change', '#ship-to-different-address-checkbox', function(){

      if($(this).prop('checked')) self.trigger(document.body, 'country_to_state_changed', []);
    });

    $( document.body ).on('update_checkout', function(){

      setTimeout(function(){ self.review(); }, 50 );
    });

    setTimeout(function(){ self.update(); }, 0 );
  };

  ideaingCheckout.prototype.update = function () {

    var self = this;

    $('.form-row').each( function(){

      self.fielded( $(this).find('input') );
    });
  };

  ideaingCheckout.prototype.fielded = function ( el ) {

    if ( el.val() ){

      el.parent('.form-row').addClass('active');

    } else {

      el.parent('.form-row').removeClass('active');
    }
  };

  ideaingCheckout.prototype.review = function ( el ) {

    $('[data-live]').each( function(){

      var live = $(this),
          look = live.attr('data-live'),
          target = $(look);

      live.html('');

      if (target.length) {

        target.each(function(){

          var s = $(this),
              v = s.val();

          switch ( live.attr('data-live-type') ){

            case 'radio':

              v = $('[for="'+$('[name="'+ s.attr('name') +'"]:checked').attr('id')+'"]').html();

            break;

            case 'select':

              v = s.find('option:selected').text();

            break;

          }

          live.html(v);
        });
      }
    });
  };

  $(document).ready(function(){

    try {

      new ideaingCheckout();

    } catch (e) {

      console.error(e);
    }
  });

  $( document ).on('click', '.secure-checkout [data-alien]', function( e ){

    var alein = $( '[name="' + $(this).attr('data-alien') + '"]' );

    if ( alein.length ) alein.trigger("click");
  });

} )( jQuery );
;
(function ($, root, undefined) {



	$(function () {


// For the simple custom JS functions

        $('body').on('click', '[data-toggle]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $show = $that.data('toggle');
            var $hide = $that.data('hide');
            var $overlay = $that.data('overlay');

            if($overlay){
                $('.page-overlay').fadeToggle();
            }

            if($hide){
                $($hide).hide();
                $that.siblings().removeClass('active');
                $($show).fadeIn();
                $that.addClass('active');
            }else{
                $($show).fadeToggle();
                $that.toggleClass('active');
            }
            return false;
        });

        $('body').on('click', '[data-switch]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $show = $that.data('switch');
            var $hide = $that.data('hide');

            $($hide).fadeOut(
                function(){
                    $($show).fadeIn();
                }
            );

            if(!$that.hasClass('active')){
                $that.addClass('active');
                $that.siblings().not($that).removeClass('active');
            }
            return false;
        });

        $('[data-slidein]').on('click', function(e){
            e.preventDefault();
            var $that = $(this);
            var $show = $that.data('slidein');
            var $hide = $that.data('hide');

            //if(!$that.hasClass('active')){
            //    console.log(33)

                $that.toggleClass('active');
                $($show).toggleClass('slid-in');
                if($hide){
                    $($hide).fadeToggle();
                }
                return true;

            //}else{
            //    console.log(22)
            //    $that.removeClass('active');
            //    $($show).removeClass('slid-in');
            //    if($hide){
            //        $($hide).fadeIn();
            //    }
            //    return true;
            //
            //}

        });


        $('body').on('click', '[data-click]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $clickMe = $that.data('click');

            $($clickMe).click();

            return false;
        });

        $('body').on('click', '[data-showpass]', function(e){
            e.preventDefault();
            var $that = $(this);
            var $selector = $that.data('showpass');
            var $node = $($selector);

            if($node.attr('type') == 'password'){
                $($node).attr('type', 'text');
                $that.text('hide');
            }else if($node.attr('type') == 'text'){
                $($node).attr('type', 'password');
                $that.text('show');
            }
            return false;
        });

        $('body').on('click', '.search-toggle-button.desktop', function(e){
            e.preventDefault();
            var $show = $('.desktop-search-bar');

            if(!$show.hasClass('shown')){
                $(this).addClass('active');
                $show.show();
                $show.animate({
                    opacity: '1',
                    top: '50px',
                }, 600)
                $show.addClass('shown');
                $show.find('input').focus();
            }else{
                $(this).removeClass('active');

                $show.animate({
                    top: '35px',
                    opacity: 0,
                }, 200);
                $show.fadeOut();
                $show.removeClass('shown');
            }
        });

        $('body').on('click', '.search-toggle-button.mobile', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
            $('.mobile-search-bar').toggleClass('on');
            $('.mobile-search-bar').find('input').focus();
            $('.category-menu').fadeToggle();
            //$('.category-menu' ).animate({
            //    opacity: 0,
            //}, 1000);
        });

        $('body').on('click', '.hide-search', function(e){
            var $show = $('.search-bar');

            $show.animate({
                top: '35px',
                opacity: 0,
            }, 200);
            $show.blur();
            $show.fadeOut();
            $show.removeClass('shown');
        });



        $(document).click(function(event) {
            if(!$(event.target).closest('.hide-on-out').length) {
                if($('.hide-on-out').is(":visible")) {
                    $('.hide-on-out').fadeOut();
                    $('[data-hideonout]').removeClass('active');
                }
            }
        })

        $('.page-overlay, .login-signup-modal').click(function(event){
            if(event.target !== this){ // only fire if the block itself is clicked, not it's children (sometimes we need to hide the modal when anything outside it's main block is clickced
                return;
            }

            $('.modal, .page-overlay').fadeOut();

            var $hide = $('[data-overlay="true"]').data('toggle');

            if($hide){
                $($hide).hide();
            }
        });

        $('body').on('mouseover', '.rsContent .hero-tags .tag', function(){
            var extraHeroTagsHTML = "<div class='hero-tags extra'></div>";
            if(!$('#hero .hero-tags.extra').length){
                $('#hero .rsOverflow').append(extraHeroTagsHTML);
            }
            $("#hero .rsOverflow .hero-tags.extra ").html($(this)[0].outerHTML);
            $("#hero .rsOverflow .hero-tags.extra a, #hero .rsOverflow .hero-tags.extra .hover-box").show();
        })
        $('body').on('mouseleave', '.hero-tags.extra .tag', function(){
            $("#hero .rsOverflow .hero-tags.extra a, #hero .rsOverflow .hero-tags.extra .hover-box").hide();
        })





        $("#back-to-top").click(function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });

        $('[data-scrollto]').click(function() {
            var $scrollNode = $(this).data('scrollto');
            var $scrollTo   = $($scrollNode);
            var $offset     = $scrollTo.offset().top - 70;

            $('html, body').animate({ scrollTop: $offset }, 'slow');
            return false;
        });

        $("li.nested").click(function() {
            $(this).find('ul').fadeToggle();
        });




        $('[data-toggle="modal"]').click(function() {
            var $modal = $(this).data('target');
            $($modal).fadeToggle();
            $('.page-overlay:not(.picture-overlay)').fadeToggle();
            if($($modal).hasClass('login-signup-modal')){
                $('.picture-overlay').show();
            }
        });

        $('[data-dismiss="modal"]').click(function() {
           var $modal = $(this).parents('.modal');
            $modal.fadeOut();
            $('.page-overlay').fadeOut();
            return true;
        });

        $('.desktop-view .shop-by-category-item a.show-menus, .desktop-view .shop-by-category-item a.hide-menus').click(function(e){
            e.preventDefault();
            $('.shop-by-category-item').removeClass('selected');
            $('.shop-by-category-submneu').removeClass('selected');
            
            if($(this).hasClass('show-menus')){
                $(this).parent().addClass('selected');
                var submenu = $(this).parent().data('submenu');
                $('.shop-by-category-submneu.' + submenu).addClass('selected');
            }
        })
        $('.desktop-view .shop-by-category-item').mouseover(function(e){
            $('.shop-by-category-item').removeClass('selected');
            $('.shop-by-category-submneu').removeClass('selected');
            
//            if($(this).find('a').hasClass('show-menus')){
                $(this).addClass('selected');
                var submenu = $(this).data('submenu');
                $('.shop-by-category-submneu.' + submenu).addClass('selected');
//            }
        });
        
        $('.show-and-hide-grandchild').click(function(){
            if($(this).parent().hasClass('selected')){
                $(".shop-by-category-submneu > div").removeClass('selected');
            }else{
                $(".shop-by-category-submneu > div").removeClass('selected');
                $(this).parent().addClass('selected');
            }
        })
        
        
        $('#mobile-shop-by-category-items').change(function(){
            $('.shop-by-category-submneu').removeClass('active');
            var submenu = $(this).val();
            $('.shop-by-category-submneu.' + submenu).addClass('active');
        })

        $('.notification-holder').click(function(){
            if($('.notification-popup').is(":visible")){
                $('.notification-popup').hide();
            }else{
                $('.notification-popup').show();
            }
        })

        $('#top-nav .profile-photo').click(function(){
            if($('.profilelinks-popup').is(":visible")){
                $('.profilelinks-popup').hide();
            }else{
                $('.profilelinks-popup').show();
            }
        })
        $("#top-nav .profilelinks-popup a").click(function(){
            $('.profilelinks-popup').hide();
        })

        $(".show-hero-category").click(function(e){
            e.preventDefault();
            if($(".hideen-hero-category-menu").is(":visible")){
                $(".hideen-hero-category-menu").hide();
            }else{
                $(".hideen-hero-category-menu").show();
            }
        })
        
        $(".hideen-hero-category-menu a").click(function(){
            $(".hideen-hero-category-menu").hide();
        })

        $("body").on('click', '.mobile-show', function(){
            if($(this).find('.p-show').is(":visible")){
                $(this).parent().addClass('hover');
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $(this).parent().removeClass('un-hover');
                }                
                
                $(this).find('.p-show').hide();
                $(this).find('.p-close').show();
            }else{
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $(this).parent().addClass('un-hover');
                }                
                $(this).parent().removeClass('hover');
                $(this).find('.p-show').show();
                $(this).find('.p-close').hide();
            }
        })

        $("body").on('click', '.show-and-hide', function(){
            if($(this).parent().hasClass('active')){
                $('.shop-by-category-item').removeClass('active');
            }else{
                $('.shop-by-category-item').removeClass('active');
                $(this).parent().addClass('active');
            }
        })

        // scroll and stick the share bar
        function sticky_relocate() {

            if(window.innerWidth < 620){
                if(!$('#mobile-sticky-anchor').length){
                    return false;
                }
                var div_top = $('#mobile-sticky-anchor').offset().top;
                var window_top = $(window).scrollTop();
                if (window_top > div_top) {
                    $('.ideas-sharing').fadeIn();
                } else {
                    $('.ideas-sharing').fadeOut();
                }
            }else{
                if(!$('#sticky-anchor').length){
                    return false;
                }

                var div_top = $('#sticky-anchor').offset().top;
                var window_top = $(window).scrollTop();
                if (window_top > div_top) {
                    $('.sticks-on-scroll').addClass('stick');
                } else {
                    $('.sticks-on-scroll').removeClass('stick');
                } 
            }

        }

        $(function () {
            if($('#sticky-anchor').length){
                $(window).scroll(sticky_relocate);
                sticky_relocate();
            }
        });

    //     Sticking headers
    //    $(function () {
    //        $(window).scroll(function(){
    //            if($('.scroll-header').length){
    //                if($(window).scrollTop() <= 700){
    //                    $('header.colophon').removeClass('scroll-header');
    //                }
    //            }
    //            else if(($(window).scrollTop() > 700)){
    //                $('header.colophon').addClass('scroll-header');
    //            }
    //
    //        });
    //    });

        $(function () {
            if(window.innerWidth < 620){
                return false;
            }
            var $showMe = $('.story-header');
            if($showMe.length){
                $(window).scroll(function(){
                    var window_top = $(window).scrollTop();
                    var div_top = $('#hero-nav').offset().top;
                    var $main_header = $('#top-nav');

                    if (window_top > div_top) {
                        $showMe.fadeIn();
                        $main_header.fadeOut();
                    } else {
                        $showMe.fadeOut();
                        $main_header.fadeIn();

                    }
                });
            }
        });

        $('.readmore').readmore({
            startOpen: false,
            collapsedHeight: 300,
            moreLink: '<a class="morelink" href="#">Read more</a>',
            lessLink: '<a class="morelink" href="#">Close</a>',
        });

        $(window).scroll(function() {

            var $currentPos = $(window).scrollTop() + $(window).height();

            var $triggerPoint = $(document).height() - 600; // roughly, the point where the first chunk of loaded content ends

            if($currentPos > $triggerPoint) { // if we are around that point, fire the Load More in the backgriund
                $('.bottom-load-more').click();
                $('.bottom-load-more').addClass('disabled').attr('disabled', true);
            }

            //if(window.innerWidth < 620){
            //    return false;
            //}

            var body = $('body');
            if(body.hasClass('home') || body.hasClass('room-landing')){
                var $percent = 0.4;
            }else{
                var $percent = 0.5;
            }

            if($('.bottom-block').is(':visible')){
                if($(window).scrollTop() + $(window).height() < $(document).height() * $percent) {
                    $('.bottom-block').fadeOut();
                }
            }else{
                if($(window).scrollTop() + $(window).height() > $(document).height() * $percent) {
                    $('.bottom-block').fadeIn();
                }
            }

            if(window.innerWidth < 620){
                if($('.mobile-sharing').is(':visible')){
                    if($(window).scrollTop() + $(window).height() < $(document).height() * 0.1) {
                        $('.mobile-sharing').fadeOut();
                    }
                }else{
                    if($(window).scrollTop() + $(window).height() > $(document).height() * 0.1) {
                        $('.mobile-sharing').fadeIn();
                    }
                }
                //
                //if($('.subscribe_email_popup').length){
                //    var offset = $(window).scrollTop() + 40;
                //    $('.subscribe_email_popup').css('top', offset);
                //}
            }

        });

            if(window.innerWidth < 620) {
                $('a.signin').click(function () {
                    setTimeout(function(){
                        if( $('#myModal.login-signup-modal').is(':visible')){
                            var modalHeight = $('#myModal.login-signup-modal > div').height();

                            $('body').css('max-height', (modalHeight + 100) + 'px');
                            $('body').css('overflow', 'hidden');
                        }else{
                            $('body').css('max-height', 'none');
                            $('body').css('overflow', 'auto');
                        }
                    }, 500)

                });

                $('.login-signup-modal .close-modal').click(function(){
                    $('body').css('max-height', 'none');
                    $('body').css('overflow', 'auto');
                });
            }



            $('html, body').on('touchmove', function(e){
            // To prevent jerking on iphone when focusing modal fields, we make modal absolute (in public.common) and then prevent native touch activity like scrolling when newsletter modal is up
            if($('.subscribe_email_popup').length){
                e.preventDefault();
            }

        });

        $('.home-hamburger').click(function(){
            $('body').toggleClass('has-active-menu');
        });
        $('.slide-back').click(function(){
            $('body').removeClass('has-active-menu');
        });

        // Hamburger menu animation
        (function() {
            /* In animations (to close icon) */

            if (!$('#menu-icon-wrapper').length){
                return;
            }

            var beginAC = 80,
                endAC = 320,
                beginB = 80,
                endB = 320;

            function inAC(s) {
                s.draw('80% - 240', '80%', 0.3, {
                    delay: 0.1,
                    callback: function() {
                        inAC2(s)
                    }
                });
            }

            function inAC2(s) {
                s.draw('100% - 545', '100% - 305', 0.6, {
                    easing: ease.ease('elastic-out', 1, 0.3)
                });
            }

            function inB(s) {
                s.draw(beginB - 60, endB + 60, 0.1, {
                    callback: function() {
                        inB2(s)
                    }
                });
            }

            function inB2(s) {
                s.draw(beginB + 120, endB - 120, 0.3, {
                    easing: ease.ease('bounce-out', 1, 0.3)
                });
            }

            /* Out animations (to burger icon) */

            function outAC(s) {
                s.draw('90% - 240', '90%', 0.1, {
                    easing: ease.ease('elastic-in', 1, 0.3),
                    callback: function() {
                        outAC2(s)
                    }
                });
            }

            function outAC2(s) {
                s.draw('20% - 240', '20%', 0.3, {
                    callback: function() {
                        outAC3(s)
                    }
                });
            }

            function outAC3(s) {
                s.draw(beginAC, endAC, 0.7, {
                    easing: ease.ease('elastic-out', 1, 0.3)
                });
            }

            function outB(s) {
                s.draw(beginB, endB, 0.7, {
                    delay: 0.1,
                    easing: ease.ease('elastic-out', 2, 0.4)
                });
            }

            /* Awesome burger default */

            var pathA = document.getElementById('pathA'),
                pathB = document.getElementById('pathB'),
                pathC = document.getElementById('pathC'),
                segmentA = new Segment(pathA, beginAC, endAC),
                segmentB = new Segment(pathB, beginB, endB),
                segmentC = new Segment(pathC, beginAC, endAC),
                trigger = document.getElementById('menu-icon-trigger'),
                toCloseIcon = true,
                dummy = document.getElementById('dummy'),
                wrapper = document.getElementById('menu-icon-wrapper');

                wrapper.style.visibility = 'visible';

                trigger.onclick = function() {
                    if (toCloseIcon) {
                        inAC(segmentA);
                        inB(segmentB);
                        inAC(segmentC);

                        dummy.className = 'dummy slide-menu dummy--active';
                    } else {
                        outAC(segmentA);
                        outB(segmentB);
                        outAC(segmentC);

                        dummy.className = 'dummy  slide-menu';
                    }
                    toCloseIcon = !toCloseIcon;
                };


        })();

        var body = $('body');
        if(body.hasClass('home') || body.hasClass('room-landing')){
            var $percent = 0.5;
        }else{
            var $percent = 0.6;
        }

        $(window).scroll(function() {
            //var scroll = getCurrentScroll();
            //if ( scroll >= shrinkHeader ) {
            //    $('.mobile-sharing').addClass('shrink');
            //}
            //else {
            //    $('.mobile-sharing').removeClass('shrink');
            //}

            if(window.innerWidth < 620){ // add the shrink class to header when scrolling, remove it when scrolling is stopped
                $('#top-nav, .mobile-sharing').addClass('shrink');

                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function() {
                    $('#top-nav, .mobile-sharing').removeClass('shrink');
                }, 250));
            }

        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }


        $(document).ready(function(){
            setTimeout(function(){
                $('.hero-login').slideDown();
                $('.login-wrap').fadeIn('slow');
            }, 7000)

            if(!$('body').hasClass('.giveaway-page')){
                setTimeout(function(){
                    $('#giveaway-popup').fadeIn('slow');
                }, 30000)
            }

            setInterval(function(){
                    $('.red-logo')
                        .animate({
                            opacity: 1,
                        }, 1000, function() {
                        })
                        .delay(2000)
                        .animate({
                            opacity: 0,
                        }, 1000, function() {
                        })
            }, 20000);
        });



	}); // global function()

    (function(Giveaway, $, undefined) {
        Giveaway.startCountDown = function(duration, display) {
            var timer = duration, days, hours, minutes, seconds;
            setInterval(function () {
                // get total seconds between the times
                var delta = timer;
                // calculate (and subtract) whole days
                var days = Math.floor(delta / 86400);
                delta -= days * 86400;
                // calculate (and subtract) whole hours
                var hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;
                // calculate (and subtract) whole minutes
                var minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                // what's left is seconds
                var seconds = delta % 60;  // in theory the modulus is not required

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes and ' + seconds + ' seconds');

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        Giveaway.fireSlider = function () {
            $('.giveaway-slider-content ').royalSlider({
                arrowsNav: true,
                loop: false,
                keyboardNavEnabled: true,
                controlsInside: true,
                imageScaleMode: 'fit',
                arrowsNavAutoHide: false,
                navigateByClick: false,
                autoPlay: false,
                transitionType: 'move',
                globalCaption: false,
                deeplinking: {
                    enabled: true,
                    change: false
                },
                /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
                imgWidth: "100%",
                imageScaleMode: "fill",
                visibleNearby: {
                    enabled: true,
                    centerArea: 0.25,
                    center: false,
                    breakpoint: 620,
                    breakpointCenterArea: 0.9,
                }
            });
        }

    }( window.Giveaway = window.Giveaway || {}, jQuery ));

    if(window.innerWidth < 1070){ // mobile only
        $(window).scroll(function(){
            $('.homepage-grid .box-item, .related-items  .product-box').each(function(){
                var that = $(this);
                var imgTop = that.offset().top + 450;
                var imgBottom = imgTop + that.height() + 350;
                var window_top = $(window).scrollTop() + $(window).height();
                if (window_top > imgTop && window_top < imgBottom) { // we have scrolled over the element
                    that.addClass('hovered');
                }else if(that.hasClass('hovered')){
                    that.removeClass('hovered');
                }
            });
        });
    }


    $(document).ready(function(){ // add Get It Button overlay on images that link to vendors
        $('.article-content').find('img').each(function(){
            if(!$(this).parents('.get-it-inner').length){
                var theLinkNode = $(this).parent('a');
                theLinkNode.attr('target', '_blank').wrap('<div class="get-it-inner"></div>');
                var strong = theLinkNode.parents('.thumb-box').find('strong a');
                var text = strong.text();

                if(text.indexOf('$') == -1){ // price is not hardcoded into the name
                    var href =  theLinkNode.attr('href');
                    postData = false;

                    if(href && href.indexOf('/open/') > -1 && href.indexOf('/idea/') == -1){
                        productID = href.replace(/\D/g,'');
                        postData = {'id': productID};

                    }else if(href && href.indexOf('/product/') > -1){
                        productURL = href.substr(href.lastIndexOf('/') + 1);
                        postData = {'url': productURL};
                    }

                    if(postData){
                        $.post( "/api/product/get-for-thumb", postData)
                            .success(function( postResp ) {
                                var getItNode = theLinkNode.parents('.get-it-inner');
                                getItNode.append('<span class="merchant-widget__price">$'+ Math.round(postResp.sale_price) +'</span>');
                                getItNode.append('<div class="merchant-widget__logo trans-all"><span class="white">from <img class="vendor-logo img-responsive merchant-widget__store" src="' + postResp.storeLogo + '"></span></div>');
                                var width = getItNode.width();
                                if(width < 320){
                                    getItNode.addClass('smallish');
                                }
                            });
                    }
                }
            }
            if($(this).parents('p').next('p').find('a.vendor-link').length){
                $(this).parents('p').each(function(){
                    $(this).next('p').andSelf().wrapAll('<div class="thumb-box"></div>');
                });
            }else if($(this).parents('p').find('a.vendor-link').length){
                $(this).parents('.get-it-inner').each(function(){
                    $(this).parents('p').find('a.vendor-link').andSelf().wrapAll('<div class="thumb-box"></div>');
                });
            }
        });

        $('.thumb-box').each(function(){
            if(!$(this).parents('.float-thumbs').length){
                $(this).next('.thumb-box').andSelf().wrapAll('<div class="float-thumbs"></div>');
            }
        });

    });

    if(window.innerWidth < 1070){ // mobile only
        jQuery(window).scroll(function(){
            jQuery('.article-content .get-it-inner').each(function(){
                var that = $(this);
                var imgTop = that.offset().top + 450;
                var imgBottom = imgTop + that.height() + 350;
                var window_top = $(window).scrollTop() + $(window).height();
                if (window_top > imgTop && window_top < imgBottom) { // we have scrolled over the element
                    that.addClass('hovered');
                }else if(that.hasClass('hovered')){
                    that.removeClass('hovered');
                }
            });
        });
    }

    function showImages(el) {
        var windowHeight = jQuery( window ).height();
        jQuery(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    jQuery(document).ready(function(){
        showImages('.article-content img');
    });

    // if the image in the window of browser when scrolling the page, show that image
    jQuery(window).scroll(function() {
        showImages('.article-content img');
    });




})(jQuery, this);

;
// for the pure CSS slider to work on iOS

var iPadLabels = function () {
    function fix() {
        var labels = document.getElementsByTagName('label'),
            target_id,
            el;
        for (var i = 0; labels[i]; i++) {
            if (labels[i].getAttribute('for')) {
                labels[i].onclick = labelClick;
            }
        }
    };
    function labelClick() {
        el = document.getElementById(this.getAttribute('for'));
        if (['radio', 'checkbox'].indexOf(el.getAttribute('type')) != -1) {
            el.setAttribute('selected', !el.getAttribute('selected'));
        } else {
            el.focus();
        }
    };
    return {
        fix: fix
    }
}();

window.onload = function () {

    iPadLabels.fix();

};
/**
 * Created by sanzeeb on 1/7/2016.
 */

var publicApp = angular.module('publicApp', ['ui.bootstrap', 'ngSanitize', 'angularFileUpload', '720kb.socialshare']);

publicApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);

// directive for heart action for grid items
publicApp.directive('heartCounterPublic', ['$http', function ($http) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            uid: '=',
            iid: '=',
            plink: '=',
            sec: '=',
        },
        controller: function ($scope, $element, $attrs) {

            // console.log(window.location.host);
            // Heart Section

            $scope.unHeart = false;
            $scope.heartCounter = 0;

            $scope.heartCounterAction = function () {


                $http({
                    url: '/api/heart/count-heart',
                    method: "POST",
                    data: {
                        section: $attrs.sec,
                        uid: $scope.uid,
                        iid: $scope.iid,
                        plink: $scope.cleanUrl($attrs.plink),
                    }
                }).success(function (data) {
                    $attrs.ustatus = data.UserStatus;

                    $scope.unHeart = data.UserStatus;
                    $scope.heartCounter = data.Count;

                });
            };

            // clean url for ideaing URL (take only permalink)
            $scope.cleanUrl = function (urlString) {
                return urlString;
            };




            $scope.heartAction = function () {

                // an anonymous will be returned without performing any action.
                if ($attrs.uid == 0)
                    return;

                $http({
                    url: '/api/heart/add-heart',
                    method: "POST",
                    data: {
                        section: $attrs.sec,
                        uid: $scope.uid,
                        iid: $scope.iid,
                        plink: $scope.cleanUrl($attrs.plink),
                        uht: $scope.unHeart
                    }
                }).success(function (data) {
                    $scope.heartCounterAction();
                    $scope.unHeart = !$scope.unHeart;
                });
            };

            $scope.heartCounterAction();

        },

        template: '      <div class="">' +
        '                    <a class="likes"' +
        '                       ng-click="heartAction()"' +
        '                    >' +
        '                        <i ng-class="unHeart != false ? \'m-icon m-icon--heart-solid\' : \'m-icon m-icon--ScrollingHeaderHeart\'">' +
        '                                <span class="m-hover">' +
        '                                    <span class="path1"></span><span class="path2"></span>' +
        '                                </span>' +
        '                        </i>' +
        '                        <span class="social-stats__text" ng-bind="heartCounter">&nbsp; </span>' +
        '                    </a>' +
        '                </div>'


    }
}]);

// directive for pulling author info pulling in grid items
publicApp.directive('showAuthorInfo', ['$http', '$window', function ($http, $window) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            email: '@',
            url: '@'

        },
        controller: function ($scope, $element, $attrs) {

            $scope.authorInfo = function () {

                $http({
                    url: '/api/info-raw/' + $scope.email,
                    method: "GET",
                }).success(function (data) {

                    $scope.authorName = data.name;
                    $scope.authorImage = data.medias[0].media_link;
                    $scope.authorBio = data.user_profile.personal_info;

                    // console.log($scope.authorName," - ",$scope.authorImage);

                });
            };

            $scope.authorInfo();

        },

        template: '      <div class="box-item__author">' +
        '                    <a href="{{ url }}" class="user-widget">' +
        '                       <img class="user-widget__img" src="{{ authorImage }}">' +
        '                     <span class="user-widget__name">{{ authorName }}</span>' +
        '                    </a>' +
        '                </div>'
    }

}]);


publicApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);

// custom directive //
publicApp.factory('layoutApi', function ($http) {

        var layoutApi = {};

        layoutApi.getProductsForShopMenu = function () {
            return $http({
                method: 'GET',
                url: '/api/layout/get-shop-menu',
            });
        };


        return layoutApi;
    })
    .directive('a', function () {
        return {
            restrict: 'E',
            link: function (scope, elem, attrs) {
                if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                    elem.on('click', function (e) {
                        e.preventDefault();
                    });
                }
            }
        };
    });
// //


publicApp.controller('ProductModalInstanceCtrl', function ($scope, $uibModalInstance, pagingApi, productData) {
    $scope.data = productData.data;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.openSharingModal = function ($service) {
        pagingApi.openSharingModal($service);
    };
});
publicApp.controller('ModalInstanceCtrltest', function ($scope, $uibModalInstance, pagingApi, $http) {
    $scope.ok = function () {
        $uibModalInstance.close();
    };
    $scope.hideAndForget = function () {
        $http({
            url: '/hide-signup',
            method: "GET",

        }).success(function () {
            $('#subscribe_email_popup').removeClass('ns-show');
            $('#subscribe_email_popup').addClass('ns-goback');

            setTimeout(function(){
                $uibModalInstance.close();
            }, 150);
        });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.openSharingModal = function ($service) {
        pagingApi.openSharingModal($service);
    };

});

publicApp.controller('publicController', ['$rootScope', '$scope', '$http', '$window', '$timeout', '$uibModal', 'layoutApi', '$compile', '$interval', 'FileUploader', 'pagingApi', '$uibModalStack'
    , function ($rootScope, $scope, $http, $window, $timeout,  $uibModal, layoutApi, $compile, $interval, FileUploader, pagingApi, $uibModalInstance, $uibModalStack) {

        // text area internal function for comment
        $scope.focusEditor = function () {
            $timeout(function () {
                angular.element('div[contenteditable=true]').trigger('focus');
            })
        }
        $scope.insertCustomImagePopup = function () {
            alert("Please add the code for photo uploading here");
        }
        $scope.openProductPopup = function (id) {
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        };
        $scope.textAreaSetup = function ($element) {
            $element.attr('focus-me', 'focus_editor');
        };

        $scope.renderHTML = function(html_code)
                {
                    var decoded = angular.element('<div />').html(html_code).text();
                    return decoded;
        };


        // update comment in the comment view through AJAX call.
        var commnetTimer = $interval(function () {
            //  console.log("in");
            if ($scope.uid != null) {
                $scope.loadNotification($scope.uid);
            }

            if ($scope.itemId != 0) {

                // reduce http call in comment section.
                if ($scope.commentSection == 'giveaway')
                    $scope.getCommentsForGiveaway($scope.itemId);
                else
                    $scope.getCommentsForIdeas($scope.itemId);

            }
        }, 15000);//10000

        // $scope.openEmailPopuponTime = function () {
        //     if (!$('body').hasClass('login-signup')) {
        //         setTimeout(function () {
        //             $scope.getEmailPopup(false);
        //         }, 25000)
        //     }

        // }

        $scope.getEmailPopup = function (clickStatus) {

            var templateUrl = "subscribe_email_popup.html";

            $scope.isSubscriberClicked = clickStatus;

            instance = $uibModal.open({
                    animation: true,
                    backdrop:false,
                    templateUrl: templateUrl,
                    scope: $scope,
                    size: 'lg',
                    windowClass: 'subscribe_email_popup',
                    controller: 'ModalInstanceCtrltest'
                });

            $scope.modalInstance = instance.result.finally(function () {
                    $scope.uploader.formData = [];

                    $http({
                        url: '/hide-signup',
                        method: "GET",

                    }).success(function (data) {
                        //  console.log(data)
                    });

                    $('html').removeClass('overhide');
            });

                instance.rendered.then(function () {
                    //console.log('yo maaaan1')

                    var $this = $('.modal.subscribe_email_popup');

                    if(window.innerWidth < 620){
                        // Position modal absolute and bump it down to the scrollPosition
                        $this.css({
                            position: 'absolute',
                            top: ($(window).scrollTop() + 40) + 'px',
                        });
                    }

                    setTimeout(function(){
                    //console.log('yo maaaan2')
                     $('#subscribe_email_popup').addClass('ns-show');
                     $('#subscribe_email_popup').removeClass('ns-hide');

                    }, 500);

                })
        };

        $scope.openProfileSetting = function (onlyImage) {

            // for changing only image from user profile's "Change Image" button
            if (onlyImage == true)
                $scope.onlyImage = true;
            else
                $scope.onlyImage = false;

            var templateUrl = "profile-setting.html";
            var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    scope: $scope,
                    size: 'lg',
                    windowClass: 'profile-setting-modal',
                    controller: 'ModalInstanceCtrltest'
                })
                .result.finally(function () {
                    $scope.uploader.formData = [];
                });
        };

        $scope.openSharingModal = function ($service) {
            pagingApi.openSharingModal($service, $scope)

        };

        // load shop information.
        layoutApi.getProductsForShopMenu().success(function (response) {
            $scope.productsForShopMenu = response;
        });


        // uploader section //

        uploader = $scope.uploader = new FileUploader({
            //  var uploader = new FileUploader({
            url: '/api/media/media-upload',
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // Content upload CALLBACKS

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            //  console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            //   console.info('onAfterAddingFile', fileItem);
            // console.log($scope.isProfilePage);
            // if the page is profile update then this auto upload will work on profile image select
            if ($scope.isProfilePage) {
                $scope.oldMediaLink = $scope.mediaLink;
                $scope.showBrowseButton = !$scope.showBrowseButton;
                $scope.uploader.uploadAll();

                //  console.log($scope.oldMediaLink, ' : ', $scope.MediaLink);

            }
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            //   console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            //   console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            //    console.info('onProgressItem');
            $scope.initProfilePicture('/assets/images/ajax-loader.gif');
        };
        uploader.onProgressAll = function (progress) {
            //   console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            //     console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            //   console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            //   console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            //     console.info('onCompleteItem', response);
            $scope.mediaLink = response.result;
        };
        uploader.onCompleteAll = function () {
            //    console.info('onCompleteAll');
        };
        // End uploader section //


        // initialize variables
        $scope.initPage = function () {

            // $scope.TEST = "TSSSSST";
            // console.log($scope.TEST);

            // email subscription
            $scope.SubscriberEmail = '';
            $scope.responseMessage = '';
            $scope.giveAwayID = '';

            $scope.alerts = [];
            $scope.alertHTML = '';
            $scope.Code = '';

            $scope.logingRedirectLocation = '/';

            // Media Upload //
            $scope.mediaTitle = '';
            $scope.mediaTypes = [
                {"key": "img-link", "value": "Image Link"},
                {"key": "img-upload", "value": "Image Upload"},
                {"key": "video-link", "value": "Video Link"},
                {"key": "video-upload", "value": "Video Upload"}
            ];
            $scope.mediaLink = "";
            $scope.isMediaUploadable = true;


            $scope.FullName = '';

            $scope.Email = '';
            $scope.Password = '';
            $scope.PersonalInfo = '';
            $scope.Address = '';
            $scope.Permalink = '';
            $scope.AcceptTerms = true;
            $scope.AcceptTermsModal = true;

            $scope.LoginEmail = '';
            $scope.LoginPassword = '';
            $scope.RememberMe = false;


            //settings for user profile edit section
            $scope.isProfilePage = false;
            $scope.uploader.formData = [];
            $scope.showBrowseButton = true;
            $scope.onlyImage = false;

            // popup signup
            $scope.popupSignup = true;

            // notification
            $scope.notificationCounter = 0;
            $scope.notifications = [];
            $scope.uid = null;
            $scope.notificationLimit = 10;

            // comment ideas and giveaway
            $scope.itemId = 0;
            $scope.userId = 0;
            $scope.isAdmin = false;
            $scope.commentId = null;
            $scope.commentsCount = 0;

            $scope.commentSection = '';


            //Ideas author info
            $scope.authorName = '';
            $scope.authorImage = null;

            // Heart Section

            $scope.unHeart = false;
            $scope.heartCounter = 0;
            $scope.heartUsersInfo = [];

            // Contact Us
            $scope.Type = 'Support';
            $scope.contactError = false;

            // user profile heart comment hide/show

            $scope.showComment = true;
            $scope.showHeart = true;

            $scope.activeClassAll = 'active';
            $scope.activeClassComment = '';
            $scope.activeClassHeart = '';

            // profile feed and post toggle

            $scope.postActive = true;
            $scope.orderActive = true;
            $scope.ActivityActive = true;

            // Membership Subscription and Payment

            $scope.setMembershipSubscription = false;

            // user profile settings

            $scope.setDailyEmailNotification = true;

            $scope.socialCounter = function () {

                $scope.countSocialShares();
                $scope.countSocialFollowers();
            };

            setTimeout(
                function () {
                    $('#top-nav a.new-message span').css('visibility', 'visible');
                },
                6000);

            jQuery(document).ready(function ($) {
                var args = {
                    arrowsNav: true,
                    loop: true,
                    loopRewind: true,
                    keyboardNavEnabled: true,
                    controlsInside: true,
                    controlNavigation: 'bullets',
                    arrowsNavAutoHide: false,
                    slidesSpacing: 0,
                    imageScaleMode: 'none',
                    imgWidth: 1175,
                    imageAlignCenter: true,
                    autoScaleSliderWidth: 1180,
                    autoScaleSliderHeight: 394,
                    thumbsFitInViewport: false,
                    navigateByClick: true,
                    startSlideId: 0,
                    autoPlay: {
                        enabled: true,
                        pauseOnHover: true,
                        delay: 15000
                    },
                    transitionType: 'move',
                    globalCaption: false,
                    addActiveClass: true,
                    deeplinking: {
                        enabled: true,
                        change: false
                    },
                };

                if (window.innerWidth < 1176) {
                    args.visibleNearby = {
                        enabled: false,
                        center: false,
                    }
                } else {
                    args.visibleNearby = {
                        enabled: true,
                        center: true,
                        navigateByCenterClick: true
                    }
                }

                $('.story-hero-slider').royalSlider(args);
            });

          
             var args = {
                    arrowsNav: false,
                    loop: true,
                    loopRewind: true,
                    keyboardNavEnabled: true,
                    controlsInside: true,
                    controlNavigation: 'thumbnails',
                    arrowsNavAutoHide: false,
                    slidesSpacing: 0,
                    imageScaleMode: false,
                    imgWidth: 1175,
                    imageAlignCenter: true,
                    //autoScaleSliderWidth: 1180,
                    //autoScaleSliderHeight: 394,
                    thumbsFitInViewport: false,
                    navigateByClick: true,
                    startSlideId: 0,
                    autoPlay: {
                        enabled: true,
                        pauseOnHover: true,
                        delay: 15000
                    },
                    transitionType: 'move',
                    globalCaption: false,
                    addActiveClass: true,
                    deeplinking: {
                        enabled: true,
                        change: false
                    },
                    visibleNearby: {
                        enabled: false,
                        center: true,
                    },
                    thumbs: {
                        arrows: false,
                        appendSpan: true,
                        firstMargin: false,
                        orientation: 'horizontal'
                    },

                };
                $('.default-hero-slider').royalSlider(args);


        };

        $scope.isEmpty = function (data) {
            if (!data || data.length === 0)
                return true;
            else
                return false;

        };

        // membership subscription

        $scope.changeSubscription = function(){


            if($scope.setMembershipSubscription == false)
            {
                window.location = '/payment/payment-info'

            }else{
                $http({
                    url: '/payment/cancel-membership',
                    method: "GET",
                }).success(function (data) {
                    console.log('cancel membership :',data);
                    $scope.setMembershipSubscription = false;

                });
            }
        };

        // check membership status
        $scope.checkSubscription = function(){
            $http({
                url: '/payment/membership-check',
                method: "GET",
            }).success(function (data) {
                console.log('chk subs :',data);
                if(data.status_code == 200 && data.data != '')
                    $scope.setMembershipSubscription = true;

                console.log('chk subs :',data,$scope.setMembershipSubscription);

            });
        };

        // contact us

        $scope.sendContactUsQuery = function () {
            $scope.contactError = false;
            if ($scope.isEmpty($scope.Email) || $scope.isEmpty($scope.Message)) {
                $scope.contactError = true;
                return;
            }


            $http({
                url: '/api/contact-us',
                method: "POST",
                data: {
                    Name: $scope.Name,
                    Email: $scope.Email,
                    Type: $scope.Type,
                    Message: $scope.Message,
                }
            }).success(function (data) {

                if (data.status_code == '406') {
                    $scope.errorMessage = 'Invalid Email provided';
                    $scope.contactError = true;
                } else {

                    $scope.Code = true;
                    window.location = '/';
                }

            });

        };

        // Heart //

        $scope.heartAction = function () {

            //  console.log($window.plink,$window.uid,$window.itemId);
            //return;
            userId = $window.uid;
            ItemId = $window.itemId;
            permalink = $window.plink;
            section = 'ideas';

            // an anonymous will be returned without performing any action.
            if (userId == 0)
                return;

            $http({
                url: '/api/heart/add-heart',
                method: "POST",
                data: {
                    uid: userId,
                    iid: ItemId,
                    plink: permalink,
                    section: section,
                    uht: $scope.unHeart
                }
            }).success(function (data) {
                $scope.heartCounterAction();
                $scope.unHeart = !$scope.unHeart;
            });
        };

        $scope.heartCounterAction = function () {

            userId = $window.uid;
            ItemId = $window.itemId;
            section = 'ideas';

            $http({
                url: '/api/heart/count-heart',
                method: "POST",
                data: {
                    uid: userId,
                    iid: ItemId,
                    section: section
                }
            }).success(function (data) {
                $scope.unHeart = data.UserStatus;
                $scope.heartCounter = data.Count;

                //   console.log($scope.heartCounter);
            });

        };

        // get recently liked users list
        $scope.heartUsers = function (section) {
            ItemId = $window.itemId;

            $http({
                url: '/api/heart/heart-users',
                method: "POST",
                data: {
                    iid: ItemId,
                    section: section
                }

            }).success(function (data) {
                $scope.heartUsersInfo = data;
            });
        };

        // Add an Alert in a web application
        $scope.addAlert = function (alertType, message, category) {
            $scope.alertHTML = message;

            if(category !== undefined){
                $scope.alerts[category] = [];
                $scope.alerts[category].push({type: alertType});
            }else{
                $scope.alerts.push({type: alertType});
            }
        };

        $scope.closeAlert = function (index) {
            $scope.alerts = [];
            $scope.responseMessage = '';

        };

        // Build HTML listed response for popup notification.
        $scope.buildErrorMessage = function (errorObj) {

            var alertHTML = '';
            alertHTML = '<ul>';
            angular.forEach(errorObj, function (value, key) {

                alertHTML += '<li>' + value + '</li>';
            });
            alertHTML += '</ul>';

            return alertHTML;
        };


        // Build popup notification box based on status.
        $scope.outputStatus = function (data, message, goTo, from) {

            var statusCode = data.status_code;

            //console.log(statusCode);
            
            switch (statusCode) {
                case 400:
                {
                    if (data.data.error.message[0] == "Validation failed") {
                        $scope.addAlert('danger', $scope.buildErrorMessage(data.data.error.message[1]));
                    } 
                }
                    break;
                case 401:
                {
                    $scope.addAlert('danger', data.data.error.message);

                }
                    break;
                case 200:
                {
                    $scope.addAlert('success', message);
                    if (message == 'Password was reset successfully') {
                        window.location = '/login';
                    }
                    else if (data.data == 'Registration completed successfully') {
                        $scope.addAlert('success', 'SUCCESS! You just made the best decision', 'register');

                        if(from == 'subscribe-modal'){
                            $('.toggles, .bordering .content').animate({opacity: "0"}, function(){
                                setTimeout(function(){
                                    $scope.hideAndForget();
                                    window.location = '/welcome';
                                }, 2000);
                            })
                        }else{
                            setTimeout(function(){
                               // $scope.hideAndForget();
                                window.location = '/welcome';
                            }, 2000);
                        }


                    } else if (data.data == 'Registration completed successfully, please verify your email') {
                        $scope.addAlert('success', 'SUCCESS! You just made the best decision', 'register');

                        if(from == 'subscribe-modal'){
                            $('.toggles, .bordering .content').animate({opacity: "0"}, function(){
                                setTimeout(function(){
                                    //$scope.hideAndForget();
                                    //window.location = '/welcome';
                                }, 2000);
                            })
                        }else{
                            setTimeout(function(){
                               // $scope.hideAndForget();
                                window.location = '/welcome';
                            }, 2000);
                        }
                    }


                }
                    break;
                case 210:
                {
                    $scope.addAlert('', message);
                }
                    break;
                case 220:
                {
                    if (data.data.message == 'Successfully authenticated') {
                    	if(goTo === 'home'){
                    		window.location = '/';		 
                    	}else if(goTo == 'profile'){
                            window.location = '/user/profile';      
                    	}else if(goTo == 'welocome'){
                            window.location = '/welcome';
                    	}else{

                            if($('html').hasClass('idea-stories')){
                                $timeout = 4000;
                            }else{
                                $timeout = 1; 
                            }

                         // $scope.addAlert('success', data.data.message);
                           setTimeout(function(){
                                location.reload();
                          }, $timeout)
                        }
                    } else {
                        $scope.addAlert('success', data.data.message);
                    }
                }
                    break;
                case 410:
                {
                    $scope.addAlert('danger', data.data.error.message);
                }
                    break;
                case 500:
                {
                    $scope.addAlert('danger', data.data.error.message);
                }
                    break;
                default:
                {
                    $scope.addAlert('danger', 'Request failed !');
                }
            }
        };

        // redirect a user after login as per role.
        $scope.redirectUser = function (role) {
            switch (role[0]) {
                case 'admin':
                    window.location = '/user/profile'; //window.location = '/admin/dashboard';
                    break;
                case 'editor':
                    window.location = '/user/profile'; //window.location = '/admin/dashboard';
                    break;
                case 'user':
                    window.location = '/user/profile';

                    break;

            }
        };

        $scope.getAuthorInfoByEmail = function (email) {
            //console.log("inside");
            $http({
                url: '/api/info-raw/' + email,
                method: "GET",
            }).success(function (data) {

                $scope.authorName = data.name;
                $scope.authorImage = data.medias[0].media_link;
                $scope.authorBio = data.user_profile.personal_info;
                $scope.authorPermalink = data.permalink;

                // console.log($scope.authorName," - ",$scope.authorImage);

            });
        };

        // Comment for ideas section
        $scope.addCommentForIdeas = function (userId, itemId, permalink, comment) {
            //   console.log(userId, itemId, permalink, comment);

            $http({
                url: '/api/comment/add-ideas-comment',
                method: "POST",
                data: {
                    uid: userId,
                    pid: itemId,
                    plink: permalink,
                    comment: comment,
                    img: $window.img
                }
            }).success(function (data) {
                $scope.html = "";
                $scope.getCommentsForIdeas($scope.itemId);
            });
        };

        $scope.getCommentsForIdeas = function (pid) {

            $http({
                url: '/api/comment/get-ideas-comment/' + pid,
                method: "GET"
            }).success(function (data) {
                $scope.itemId = pid;
                $scope.comments = data.data;
                $scope.commentsCount = $scope.comments.length;

                if($scope.commentsCount == 0){
                    $scope.commentsCountView = 'Drop a Comment'
                }else{
                    $scope.commentsCountView = $scope.commentsCount < 2 ? $scope.commentsCount + " " + "Comment" : $scope.commentsCount + " " + "Comments";
                }

            });
        };

        // Comment for giveaway section
        $scope.addCommentForGiveaway = function (userId, itemId, permalink, comment) {
            //   console.log(userId, itemId, permalink, comment);

            $http({
                url: '/api/comment/add-giveaway-comment',
                method: "POST",
                data: {
                    uid: userId,
                    pid: itemId,
                    //  plink: permalink + '/' + $window.giveawayLink,
                    plink: $window.giveawayLink,

                    comment: comment,
                    img: $window.img
                }
            }).success(function (data) {
                $scope.html = "";
                $scope.getCommentsForGiveaway($scope.itemId);
            });
        };

        $scope.getCommentsForGiveaway = function (pid) {

            // set comment section to reduce call
            $scope.commentSection = 'giveaway';
            $http({
                url: '/api/comment/get-giveaway-comment/' + pid,
                method: "GET"
            }).success(function (data) {
                $scope.itemId = pid;
                $scope.comments = data.data;
                $scope.commentsCount = $scope.comments.length;
                $scope.commentsCountView = $scope.commentsCount < 2 ? $scope.commentsCount + " " + "Comment" : $scope.commentsCount + " " + "Comments";


                //   console.log('item id :'+ $scope.itemId );

            });
        };


        $scope.initCommentCounter = function () {
            //  $scope.getCommentsForIdeas($window.itemId);
        };


        $scope.editComment = function (comment) {
            //  console.log(comment);

            $scope.isEdit = true;

            $scope.commentId = comment.CommentId;

            $scope.html = comment.Comment;


        };

        $scope.updateComment = function (comment) {
            $http({
                url: '/api/comment/update-comment',
                method: "POST",
                data: {
                    cid: $scope.commentId,
                    comment: $scope.html
                }
            }).success(function (data) {
                $scope.html = "";
                $scope.isEdit = false;
                // console.log("pid :"+ $scope.productId);
                //  $scope.getCommentsForIdeas($scope.itemId);

                // reduce http call in comment section.
                if ($scope.commentSection == 'giveaway')
                    $scope.getCommentsForGiveaway($scope.itemId);
                else
                    $scope.getCommentsForIdeas($scope.itemId);
            });

        };


        $scope.deleteComment = function (id) {
            $http({
                url: '/api/comment/delete-comment',
                method: "POST",
                data: {
                    cid: id
                }
            }).success(function (data) {
                //  $scope.getCommentsForIdeas($scope.itemId);
                // reduce http call in comment section.
                if ($scope.commentSection == 'giveaway')
                    $scope.getCommentsForGiveaway($scope.itemId);
                else
                    $scope.getCommentsForIdeas($scope.itemId);
            });

        };

        // Subscribe a user through email and redirect to registration page.
        $scope.subscribe = function (formData, source) {

            $scope.responseMessage = '';
            if ((source == 'popup') && ($scope.isSubscriberClicked == false))
                source = 'popup';
            else if ((source == 'popup') && ($scope.isSubscriberClicked == true))
                source = 'popup-notice';
            else if (source == 'ideas')
                source = 'ideas';
            else if (source == 'footer')
                source = 'footer';
            else if (source == 'home')
                source = 'home';
            else
                source = '';

            if(formData === undefined){
                $scope.responseMessage = "Please enter an email";
            }

            $http({
                url: '/api/subscribe',
                method: "POST",
                data: {
                    'Email': formData.SubscriberEmail,
                    'Source': source,
                    'SetCookie': 'true'
                }
            }).success(function (data) { 

                if (data.status_code == 406) {

                    $scope.responseMessage = "Please enter a valid email";
                }
                else if (data.status_code == 200) {

                    $scope.responseMessage = "Success! You'll start receiving the best tips in the world";
                    // $('.alerts').addClass('alertme');  
                    $('.toggles, .bordering .content').animate({opacity: "0"}, function(){
                         setTimeout(function(){ 
                            $scope.hideAndForget();
                        }, 2000);
                    })
 
                    //Redirect a user to registration page. 
                    //window.location = '/signup/' + formData.SubscriberEmail + '/' + source;

                } else if (data.data.isUser == 1) {
                    $scope.responseMessage = "This email already exists, redirecting to Log In";
                    //console.log(data);
                    window.location = '/login/';
                } else {
                    $scope.responseMessage = "Sorry, this email already exists. Redirecting to Sign Up";
                    //console.log(data);
                    window.location = '/signup/' + formData.SubscriberEmail + '/' + source;
                }

            //    console.log("in :"+$scope.responseMessage);

            });

        };
        // Subscribe a user through email and redirect to registration page.
        $scope.enterGiveaway = function (formID, redirect) {

            var form = $('#' + formID);

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var emailTest = re.test(form.find('input[name="email"]').val());

            $scope.alertHTML = null;

            if (emailTest == false)
                $scope.addAlert('danger', 'Please enter a valid email address')

            if (form.find('input[name="password"]').val() == '')
                $scope.addAlert('danger', 'Please enter a password')


            //console.log($scope.alertHTML);

            if ($scope.alertHTML != null)
                return;


            $http({
                url: '/api/giveaway/enter',
                method: "POST",
                data: {
                    'Email': form.find('input[name="email"]').val(),
                    'Password': form.find('input[name="password"]').val(),
                    'giveaway_id': $('#giveaway_id').val(),
                    //'SetCookie': 'true'
                }
            }).success(function (data) {
                //console.log(data,redirect);

                if (data.status_code == 200 || data.status_code == 210) {
                    $scope.addAlert('success', data.data);
                    window.location.href = '/giveaway/' + redirect;
                } else if (data.status_code == 400 || data.status_code == 500) {
                    $scope.addAlert('danger', data.data);

                }

                return;
                if (redirect) {
                    window.location.href = '/giveaway/' + redirect;
                } else {
                    $scope.responseMessage = data;
                }
            });
 
        };

        $scope.registerSubscribedUser = function (from) {

            // defining the regsitration source
            sourceSegment = '';
            valSeg = window.location.pathname.split('/');

            if (valSeg[3] == 'popup')
                sourceSegment = 'popup';
            else if (valSeg[3] == 'ideas')
                sourceSegment = 'ideas';
            else if (valSeg[3] == 'home')
                sourceSegment = 'home';

            $scope.closeAlert();

            if ($scope.AcceptTerms == false && $scope.AcceptTermsModal == false) {
                $scope.addAlert('danger', 'Please accept the Terms and Conditions', 'register');
                return;
            }

            if ($scope.FullName == '') {
                $scope.addAlert('danger', 'Please enter your name', 'register');
                return;
            }

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var emailTest = re.test($scope.Email);

            if (emailTest == false) {
                $scope.addAlert('danger', 'Please enter a valid email', 'register');
                return;
            }

            if ($scope.Password == '') {
                $scope.addAlert('danger', 'Please enter the password', 'register');
                return;
            }

            //if ($scope.Password != $scope.PasswordConf) {
            //    $scope.addAlert('danger', 'Passwords do not match!');
            //    return;
            //}

            $http({
                url: '/api/register-user',
                method: "POST",
                data: {
                    FullName: $scope.FullName,
                    Email: $scope.Email,
                    Password: $scope.Password,
                    UserFrom: sourceSegment,
                    Valid: true
                }

            }).success(function (data) { 
                $scope.outputStatus(data, data.data, 'welcome', from);
            });

        };

        $scope.registerUser = function (source) {
            $scope.closeAlert();

            $scope.alertHTML = null;

            if ($scope.FullName == '') {
                $scope.addAlert('danger', 'Full name can\'t be empty!');
                return;
            }

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var emailTest = re.test($scope.Email);

            if (emailTest == false) {
                $scope.addAlert('danger', 'Please enter a valid email');
                return;
            }

            if ($scope.Password == '' || $scope.PasswordConf == '') {
                $scope.addAlert('danger', 'Please enter both password and confirmation');
                return;
            }

            if ($scope.Password != $scope.PasswordConf) {
                $scope.addAlert('danger', 'Passwords do not match!');
                return;
            }

            $http({
                url: '/api/register-user',
                method: "POST",
                data: {
                    FullName: $scope.FullName,
                    Email: $scope.Email,
                    Password: $scope.Password,
                    Source: source,
                    Valid: false
                }

            }).success(function (data) {
                $scope.outputStatus(data, data.data);
                if (source == 'giveaway') {
                    $scope.loginUser('giveaway');
                }

            }).error(function (data) {
                console.log(data);
            });

        };

        // Load user activity like/comment in user profile
        $scope.userActivityList = function (userId, count) {

            if ($scope.userActivityCount == null)
                $scope.userActivityCount = count;
            else
                $scope.userActivityCount = $scope.userActivityCount + count;

            $scope.profilePicture = $window.profilePicture;
            $scope.profileFullName = $window.profileFullName;


            // console.log('act : ', userId, $scope.userActivityCount);

            $http({
                url: '/api/user/activities',
                method: "POST",
                data: {
                    UserId: userId,
                    ActivityCount: $scope.userActivityCount
                }

            }).success(function (data) {
                $scope.activityData = data.data;
                //   console.log($scope.activityData);
            });

        };

        // Manage different click events in profile menu bar
        $scope.clickOnPost = function (parmalink, count) {
            $scope.postActive = true;
            $scope.orderActive = false;
            $scope.ActivityActive = false;
            $scope.userActivityCount = null;
            $scope.userPostList(parmalink, count);

        };
        // Manage different click events in profile menu bar
        $scope.clickOnOrders = function (parmalink, count) {
            $scope.orderActive = true;
            $scope.ActivityActive = false;
            $scope.postActive = false;
            $scope.userActivityCount = null;
            $scope.userOrderList(parmalink, count);

        };

        $scope.clickOnActivity = function (parmalink, count) {

            $scope.postActive = true;
            $scope.orderActive = true;
            $scope.ActivityActive = true;
            $scope.orderActive = false;
            $scope.userActivityCount = null;
            $scope.showActivity('all');
            $scope.userActivityList(parmalink, count);
            $scope.userPostList(parmalink, count);
        };

        $scope.clickOnActivityLike = function (parmalink, count) {

            $scope.orderActive = false;
            $scope.postActive = false;
            $scope.ActivityActive = true;
            $scope.userActivityList(parmalink, count);
            $scope.showActivity('heart');
        };

        $scope.clickOnActivityComment = function (parmalink, count) {

            $scope.orderActive = false;
            $scope.postActive = false;
            $scope.ActivityActive = true;
            $scope.userActivityList(parmalink, count);
            $scope.showActivity('comment');
        };

        $scope.orderDetailsModal = function ($orderId) {
            var templateUrl = "user-order-details.html";

            $scope.thisOrderId = $orderId;

            $http({
                url: '/ideas/wp-admin/admin-ajax.php?action=account_order&order_id=' + $orderId,
                method: "POST",
            }).success(function (data) {
                $scope.orderProducts = data.products;

                var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    scope: $scope,
                    size: 'lg',
                    windowClass: 'user-order-details-modal',
                    controller: 'ModalInstanceCtrltest'
                })
                    .result.finally(function () {
                        $scope.uploader.formData = [];
                    });
            });
        };

        // Load user activity like/comment in user profile
        $scope.userPostList = function (parmalink, count) {

            if ($scope.userActivityCount == null)
                $scope.userActivityCount = count;
            else
                $scope.userActivityCount = $scope.userActivityCount + count;

            $http({
                url: '/api/user/posts',
                method: "POST",
                data: {
                    Permalink: parmalink,
                    PostCount: $scope.userActivityCount,
                    AuthorPicture: $window.profilePicture,
                    AuthorName: $window.profileFullName,
                }

            }).success(function (data) {
                $scope.userPostData = data.data;
            });

        };


        // Load user activity like/comment in user profile
        $scope.userOrderList = function (parmalink, count) {

            if ($scope.userActivityCount == null)
                $scope.userActivityCount = count;
            else
                $scope.userActivityCount = $scope.userActivityCount + count;

            $http({
                url: '/api/user/orders',
                method: "POST",
                data: {
                    Permalink: parmalink,
                    PostCount: $scope.userActivityCount,
                    AuthorPicture: $window.profilePicture,
                    AuthorName: $window.profileFullName,
                }

            }).success(function (data) {
                $scope.userOrderData = data.data;
                $scope.totalOrders = data.data.length;
            });

        };


        $scope.registerWithFB = function () {

            //window.location = '/api/fb-login';

            $window.open('/api/fb-login', 'Register with Facebook', 'width=750,height=500');

        };

        $scope.giveawayLoginFB = function () {

            var $modal = $window.open('/api/fb-login?vlu=giveaway&pl=' + $window.giveawayLink, 'Register with Facebook', 'width=750,height=500');

            //window.location = '/api/fb-login?vlu=giveaway&pl=' + $window.giveawayLink;
        };


        $scope.loginUser = function (goTo) {
            $scope.closeAlert();

            $http({
                url: '/api/authenticate',
                method: "POST",
                data: {
                    Email: $scope.LoginEmail,
                    Password: $scope.LoginPassword,
                    RememberMe: $scope.RememberMe == true ? true : false
                }
            }).success(function (data) {
                var WpLoginURL = '/ideas/api?call=login&username=' + $scope.Email + '&password=' + $scope.Password + '&remember=' + $scope.rememberMe;

                $http({
                    url: WpLoginURL,
                    method: "GET"

                }).success(function (response) {
                    // var from = $location.search().from;
                    // if (from === 'cms') {
                    //     window.location = '/ideas/wp-admin';

                    // }
                }).error(function (response) {
                    // console.log(response)
                    // if (response.success) {
                    //     var from = $location.search().from;
                    //     if (from === 'cms') {
                    //         window.location = '/ideas/wp-admin';
                    //     }
                    // }
                     $scope.outputStatus(data, data.data, goTo);

                });

            });
        };


        $scope.logoutUser = function () {
            //  var WpLogoutURL = 'https://ideaing.com/ideas/api?call=logout';
            var WpLogoutURL = '/ideas/api?call=logout';
            $http({
                url: WpLogoutURL,
                method: "GET"

            }).success(function (data) {
                window.location = '/api/logout';
            }).error(function (data) {
                window.location = '/api/logout';
            });
        }

        $scope.passwordResetRequest = function () {
            $scope.closeAlert();
            if (!$scope.LoginEmail) {
                $scope.addAlert('danger', 'The Email field is required!');
                return;
            }
            $http({
                url: '/password-reset-request/' + $scope.LoginEmail,
                method: "GET",
            }).success(function (data) {
                $scope.outputStatus(data, data.data);
            });
        };

        $scope.passwordReset = function () {
            $scope.closeAlert();

            if ($scope.Password != $scope.PasswordConf) {
                $scope.addAlert('danger', 'Passwords do not match');
                return;
            }

            $http({
                url: '/api/password-reset',
                method: "POST",
                data: {
                    Password: $scope.Password,
                    Code: $scope.Code
                }
            }).success(function (data) {
                //console.log(data.data);
                $scope.outputStatus(data, data.data);

                /* if(data.status_code == 200)
                 window.location = $scope.logingRedirectLocation;
                 */
            });
        };

        //update user information
        $scope.updateUser = function (formData, meidaLink) {
            $scope.closeAlert();
            //console.log("address :"+ tmp.FullName);

            $http({
                url: '/api/change-profile',
                method: "POST",
                data: {
                    FullName: formData.FullName,
                    LastName: formData.LastName,
                    Email: formData.Email,
                    RecoveryEmail: formData.RecoveryEmail,
                    Password: formData.Password,
                    PersonalInfo: formData.PersonalInfo,

                    FacebookLink: formData.FacebookLink,
                    TwitterLink: formData.TwitterLink,

                    Password: formData.Password,
                    NewPassword: formData.NewPassword,

                    Street: formData.Street,
                    Apartment: formData.Apartment,
                    City: formData.City,
                    Country: formData.Country,
                    State: formData.State,
                    Zip: formData.Zip,

                    Permalink: formData.Permalink,
                    MediaLink: meidaLink
                }
            }).success(function (data) {
                // console.log(data);
                $scope.outputStatus(data, 'User information updated successfully');
                location.reload();

                // $scope.Password = '';
                //    $window.location = '/admin/user-list';
            });
        };


        // Profile picture upload and edit section //

        // init page //

        $scope.initProfilePage = function () {
            $scope.isProfilePage = true;
            $scope.uploader.formData.push({
                'isProfilePage': 1
            });
        };

        $scope.initProfilePicture = function (link) {
            $scope.mediaLink = link;
        };

        //update only profile picture information
        $scope.updateProfilePicture = function (formData, meidaLink) {
            $scope.closeAlert();
            $http({
                url: '/api/change-profile',
                method: "POST",
                data: {
                    FullName: formData.FullName,
                    Email: formData.Email,
                    MediaLink: meidaLink
                }
            }).success(function (data) {
                // console.log(data);
                $scope.outputStatus(data, 'Profile picture updated successfully');
                $scope.showBrowseButton = !$scope.showBrowseButton;

            });
        };

        $scope.cancelPictureUpdate = function () {
            $scope.mediaLink = $scope.oldMediaLink;
            $scope.showBrowseButton = !$scope.showBrowseButton;

        };

        //notification
        $scope.loadNotification = function (uid) {

            $scope.uid = uid;
            var limit = $scope.notificationLimit;
            $http({
                url: '/api/notification/' + uid + '/' + limit,
                method: "GET",
            }).success(function (data) {
                $scope.notificationCounter = data.data.NotReadNoticeCount;
                $scope.notifications = data.data.NoticeNotRead;
            //  console.log($scope.notifications);
            });
        };

        // load more notification apart from default load
        $scope.loadMoreNotifications = function (uid, limit) {
            $scope.notificationLimit += limit;

            $scope.loadNotification(uid);
        };

        $scope.readSingleNotification = function(uid,plink){

        //    console.log('data',uid,plink);

            $http({
                url: '/api/read-single-notification',
                method: "POST",
                data:{
                    UserId: uid,
                    Permalink: plink
                }
            }).success(function (data) {

                $scope.loadNotification(uid);

            });

        };

        $scope.readAllNotification = function () {

            // $scope.uid = uid;
            $http({
                url: '/api/read-all-notification/' + $scope.uid,
                method: "GET",
            }).success(function (data) {

                $scope.loadNotification($scope.uid);
                //    $scope.notificationCounter = data.data.NotReadNoticeCount;
                //    $scope.notifications = data.data.NoticeNotRead;

            });
        };

        // Activity hide show for user profile

        $scope.showActivity = function (data) {
            if (data == 'all') {
                $scope.showComment = true;
                $scope.showHeart = true;

                $scope.activeClassAll = 'active';
                $scope.activeClassComment = '';
                $scope.activeClassHeart = '';


            } else if (data == 'comment') {
                $scope.showComment = true;
                $scope.showHeart = false;

                $scope.activeClassAll = '';
                $scope.activeClassComment = 'active';
                $scope.activeClassHeart = '';

            } else if (data == 'heart') {
                $scope.showComment = false;
                $scope.showHeart = true;

                $scope.activeClassAll = '';
                $scope.activeClassComment = '';
                $scope.activeClassHeart = 'active';
            }
        };

        // Fetch all user settings for profile

        $scope.getProfileSettings = function (id) {
            //console.log("hi !:"+id );
            $http({
                url: '/api/user/profile-settings/' + id,
                method: "GET",

            }).success(function (data) {
                // console.log(data);

                if (data.data.email_notification == true) {
                    $scope.setDailyEmailNotification = true;
                } else {
                    $scope.setDailyEmailNotification = false;
                }

            });
        };

        $scope.setDailyEmail = function (id) {

            if ($scope.setDailyEmailNotification == true) {
                $scope.setDailyEmailNotification = false;
            } else {
                $scope.setDailyEmailNotification = true;
            }

            $http({
                url: '/api/user/profile-settings/set-daily-email',
                method: "POST",
                data: {
                    'UserId': id,
                    'Status': $scope.setDailyEmailNotification
                }

            }).success(function (data) {
                // console.log(data);

            });

        };


        // test function //
        $scope.chk = function () {
            $scope.closeAlert();
            $http({
                url: '/secure-page-header',
                method: "GET",

            }).success(function (data) {
                // $scope.outputStatus(data, data.data);

                /* if(data.status_code == 200)
                 window.location = $scope.logingRedirectLocation;
                 */
            });
        };

        $scope.countSocialShares = function () {
            pagingApi.countSocialShares();
        }
        $scope.countSocialFollowers = function () {

            var thisUrl = window.location.host + window.location.pathname;

            $http({
                url: '/api/social/get-fan-counts',
                method: "GET", 
                params: {'url': thisUrl}
            }).success(function (response) {
                $('.fan-count.twi').html(response.twitter);
                $('.fan-count.fb').html(response.facebook);
                $('.fan-count.gp').html(response.gplus);
                $('.fan-count.pint').html(response.pinterest);
                $('.fan-count.inst').html(response.instagram);
            });
        };

        $scope.initPage();

    }]);

;

angular.module('pagingApp', [
    'pagingApp.controllers',
    //'pagingApp.services',
    'pagingApp.filters',
    'cgBusy'
]);

angular.module('pagingApp.controllers', [ 'ui.bootstrap'])

    // directive for heart action for grid items
    .directive('heartCounterDir', ['$http', function($http) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope:{
                uid:'=',
                iid:'=',
                plink:'=',
                sec:'=',
            },
            controller:function($scope, $element, $attrs){

                // Heart Section

                $scope.unHeart = false;
                $scope.heartCounter = 0;

                $scope.heartCounterAction = function(){

                   // console.log('hi : ',$scope.iid,$scope.plink);

                    $http({
                        url: '/api/heart/count-heart',
                        method: "POST",
                        data:{
                            section: $attrs.sec,
                            uid: $scope.uid,
                            iid: $scope.iid,
                            plink: $scope.plink,
                        }
                    }).success(function (data) {
                        $attrs.ustatus = data.UserStatus;

                        $scope.unHeart = data.UserStatus;
                        $scope.heartCounter = data.Count;

                    });
                };

                // clean url for ideaing URL (take only permalink)
                $scope.cleanUrl = function(url){
                    var domainBuilder = "https://"+window.location.host+"/ideas/";
                    return url.replace(domainBuilder,'');
                };

                $scope.heartAction = function(){
                    // an anonymous will be returned without performing any action.
                    if($attrs.uid==0)
                        return;

                    $http({
                        url: '/api/heart/add-heart',
                        method: "POST",
                        data:{
                            section: $attrs.sec,
                            uid: $scope.uid,
                            iid: $scope.iid,
                            plink: $scope.cleanUrl($scope.plink),
                            uht: $scope.unHeart
                        }
                    }).success(function (data) {
                        $scope.heartCounterAction();
                        $scope.unHeart = ! $scope.unHeart;
                    });
                };

                $scope.heartCounterAction();

            },

            template: '      <div class="">'+
            '                    <a href="#" class="likes"'+
            '                       ng-click="heartAction()"'+
            '                    >'+
            '                        <i ng-class="unHeart != false ? \'m-icon m-icon--heart-solid\' : \'m-icon m-icon--ScrollingHeaderHeart\'">'+
            '                                <span class="m-hover">'+
            '                                    <span class="path1"></span><span class="path2"></span>'+
            '                                </span>'+
            '                        </i>'+
            '                        <span class="social-stats__text" ng-bind="heartCounter">&nbsp; </span>'+
            '                    </a>'+
            '                </div>'

        }
    }])

    .controller('pagingController', function($scope, $timeout, $uibModal, $http, pagingApi, $filter) {

        $scope.initGrid = function($category){
            $scope.allContent = [];
            $scope.content = [];
            $scope.newStuff = [];
            $scope.currentPage = 1;
            $scope.currentDay = 'Today';
            $scope.contentBlock = angular.element( document.querySelector('.main-content') );
            $scope.filterLoad = [];
            $scope.readContent = [];
            $scope.ideaCategory = false;
            $scope.hasMore = false;
            //$scope.globalOffset = 0;

            $scope.loadReadContent($category);
        }
      

        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };

        $scope.loadReadContent = function($category, $callback){

            $('.category-menu a, .mid-menu a').removeClass('active');

            $('.category-menu, .mid-menu').find('a.category-link__' + $category).addClass('active');

                $scope.currentPage = 1;
                $scope.ideaCategory = $category;
                $scope.firstLoad = pagingApi.getReadContent($category).success(function (response) {
                     $scope.readContent = response;
                     $('.popular-box').fadeIn();
                });

        

            $scope.firstLoad = pagingApi.getGridContent(1, 0, false, false,  $scope.ideaCategory).success(function (response) {
                $scope.allContent[0] = response;

                var newContent = [];
                newContent[0] = $scope.sliceToRows(response['content']['ideas'], response['content']['products']);

                $scope.content = newContent;

                $scope.hasMore = response['hasMore'];
                $scope.unreadCount = response['unreadCount'];

            });
        };


        $scope.loadMore = function() {

            if($('.bottom-load-more').hasClass('disabled')){
                return false;
            }

            $scope.currentPage++;
            $scope.allContent[$scope.currentPage] = [];

            var $limit = 0;
            $scope.filterBy = null;
            var $daysBack = false;

            $scope.nextLoad =  pagingApi.getGridContent($scope.currentPage, $limit, $scope.currentTag, $scope.filterBy, $scope.ideaCategory).success(function (response) {

                var newContent = $scope.sliceToRows(response['content']['ideas'], response['content']['products']);;
                // if($scope.currentPage == 2){
                //     newContent['currentDay'] = 'Yesterday';
                // }else{
                //     newContent['currentDay'] = $daysBack + ' Days Ago';
                // }
                $scope.newStuff[0] = newContent;

                $scope.content = $scope.content.concat($scope.newStuff);

                $scope.hasMore = response['hasMore'];
                $scope.unreadCount = response['unreadCount'];

                $('.bottom-load-more').removeClass('disabled').attr('disabled', false);
            });
        };


        $scope.sliceToRows = function($ideas, $products){
            var $return = [];
            console.log('$ideas');

            console.log($ideas);
            $return['row-1'] = $ideas.slice(0, 1);
            $return['row-2'] = $ideas.slice(2, 4);
            $return['row-3'] = $products.slice(0, 3);
            $return['row-4'] = $ideas.slice(4, 5);
            $return['row-5'] = $ideas.slice(5, 7);
            $return['row-6'] = $products.slice(3, 6);
           
            return $return;
        };


            $scope.switchCategory = function(categoryName) {

                if($('.bottom-load-more').hasClass('disabled')){
                    return false;
                }

                if($scope.ideaCategory == categoryName){
                    return false;
                }

                currentRoute = $filter('getURISegment')(1);

                if(currentRoute && currentRoute != 'smart-home' && currentRoute != 'smart-body' && currentRoute != 'smart-entertainment' && currentRoute != 'smart-travel'){ // not a category page

                    if(categoryName == 'default'){
                        categoryName = '';
                    }

                    window.location.href  = '/' + categoryName;
                    return false;
                }

                $('.popular-box').fadeOut(function(){
                    $scope.ideaCategory = categoryName;

                    $('.guide-switch').click();
                    $scope.loadReadContent(categoryName);

                    $scope.filterBy = false;

                    if(categoryName == 'default'){
                        window.history.replaceState({category: 'smarthome'}, 'Smart Home', '/');
                    }else{
                        window.history.replaceState({category: 'smarthome'}, 'Smart Home', categoryName);
                    }
                });


            }

            $scope.fadeAnimation = function ($node, $action, $callback) {
                $($node).fadeOut(
                    $callback()
                );

            };

            // email subscription //

            $scope.subscribe = function () {

                $scope.responseMessage = '';

                $http({
                    url: '/api/subscribe',
                    method: "POST",
                    data: {
                        'Email': $scope.SubscriberEmail
                    }
                }).success(function (data) {

                    if (data.status_code == 406) {

                        $scope.responseMessage = "Please enter a valid email address";
                    }

                    else if (data.status_code == 200) {
                        $scope.responseMessage = "Successfully Subscribed";
                        $scope.SubscriberEmail = '';

                    } else {
                        $scope.responseMessage = "Email already subscribed";
                    }
                });

            };

            $scope.open = function (key) {
                var templateUrl = "room-related-product-" + key + ".html";
                var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    size: 'lg',
                    controller: 'ModalInstanceCtrltest'
                });
            };

            $scope.openProfileSetting = function () {
                var templateUrl = "profile-setting.html";
                var modalInstance = $uibModal.open({
                    templateUrl: templateUrl,
                    size: 'lg',
                    windowClass: 'profile-setting-modal',
                    controller: 'ModalInstanceCtrltest'
                });
            };

            $scope.openProductPopup = function (id) {
                pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
            }
        })
            .controller('SearchController', function ($scope, $http, $uibModal, pagingApi, $timeout, $filter, $window) {

        $scope.searchPage = function(){
            var $route = $filter('getURISegment')(2);
            var $searchQuery = false;
            if ($route == 'search') {
                if ($searchQuery = $filter('getURISegment')(3)) {
                    $scope.$searchQuery = $searchQuery;
                }
            }

            $scope.currentPage = 1;
            $scope.offset = 0;
            $scope.type = 'undefined';
            $scope.sortBy = false;
            $scope.hasMore = false;

            $scope.firstLoad = pagingApi.getSearchContent($scope.$searchQuery, 15, 0).success(function (response) {
                $scope.content = response['content'];
                $scope.hasMore = response['hasMore'];

                $('#search-header').show();
                $('#hit-count').text(response['count']);
            });
        }

        //$scope.getContentFromSearch = function() {


        $scope.loadMore = function () {

            if ($('.bottom-load-more').hasClass('disabled')) {
                return false;
            }

            $scope.offset = 15 * $scope.currentPage++;
            $scope.nextLoad = pagingApi.getSearchContent($scope.$searchQuery, 15, $scope.offset, $scope.type, $scope.sortBy).success(function (response) {
                var $newStuff = $scope.content.concat(response['content'])

                if ($scope.sortBy) {
                    $newStuff.sort(function (a, b) {
                        return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                    });
                }

                $scope.content = $newStuff;
                $scope.hasMore = response['hasMore'];
                $scope.currentPage++;
                $('.bottom-load-more').removeClass('disabled').attr('disabled', false);

            });
        }


        $scope.filterSearchContent = function($filterBy, $sortBy) {

            if(!$filterBy){
                $filterBy = $scope.type;
            }

            if($filterBy){
                if(!$sortBy && $('a[data-filterby="'+$filterBy+'"]').hasClass('active')){
                    return true;
                }

                $scope.type = $filterBy;
                $scope.currentPage = 1;
                $scope.offset = 0;

                $('a[data-filterby]').removeClass('active');
                $('a[data-filterby="'+$filterBy+'"]').addClass('active');

            }

            if($filterBy == 'all'){
                $('a[data-filterby]').removeClass('active');
                $('a[data-filterby="false"]').addClass('active');

                $filterBy = 'undefined';
            }


            if(!$sortBy){
                $sortBy = $scope.sortBy;
            }

            if($sortBy && $sortBy != 'undefined'){

                if(!$filterBy && $('a[data-sotyby="'+$sortBy+'"]').hasClass('active')){
                    return true;
                }

                $scope.sortBy = $sortBy;
                $scope.currentPage = 1;
                $scope.offset = 0;

                $('a[data-sortby]').removeClass('active');
                $('a[data-sortby="'+$sortBy+'"]').addClass('active');
            }

            var contentBlock =  $('.grid-box-3');

            contentBlock.fadeOut(500, function(){
                $scope.nextLoad =  pagingApi.getSearchContent($scope.$searchQuery, 15, $scope.offset, $filterBy, $sortBy).success(function (response) {
                    $scope.content = response['content'];
                    $scope.hasMore = response['hasMore'];
                    $('#hit-count').text(response['count']);
                    contentBlock.fadeIn();

                });
            });
        }

        $scope.openSearchDropdown = function (query){
                $http({
                    method: "get",
                    url: '/api/search/find-categories/' + query,
                }).success(function (response) {
                    $scope.categorySuggestions = response;
                }).error(function (response) {
                    $scope.categorySuggestions = [];
                });
        }

        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };

        $scope.$window = $window;

        $scope.open = false;

        $scope.toggleSearch = function () {
            $scope.open = !$scope.open;

            if ($scope.open) {
                $scope.$window.onclick = function (event) {
                    closeSearchWhenClickingElsewhere(event, $scope.toggleSearch);
                };
            } else {
                $scope.open = false;
                $scope.$window.onclick = null;
                $scope.$apply();
            }
        };

        function closeSearchWhenClickingElsewhere(event, callbackOnClose) {

            var clickedElement = event.target;
            if (!clickedElement) return;

            var elementClasses = clickedElement.classList;
            console.log(clickedElement.classList);
            var clickedOnSearchDrawer = elementClasses.contains('top-search') || elementClasses.contains('cat-suggestions');

            if (!clickedOnSearchDrawer) {
                callbackOnClose();
                return;
            }

        }

        $scope.openProductPopup = function(id){
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        }


    })
//    .controller('ModalInstanceCtrltest', function ($scope, $uibModalInstance) {
//        
//        $scope.ok = function () {
//            $uibModalInstance.close();
//        };

//        $scope.cancel = function () {
//            $uibModalInstance.dismiss('cancel');
//        };
//    })
    .controller('shoplandingController', ['$scope', '$http', 'pagingApi', '$timeout', '$window', '$uibModal', function ($scope, $http, pagingApi, $timeout, $window, $uibModal) {
        
        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };

        $scope.openProductPopup = function(id){
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        }

        $scope.hasMore = false;

        var everythingLoaded = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(everythingLoaded);
                var footer = document.getElementsByClassName('about-footer')[0];
                footer.style.display = 'block';
                footer.style.position = 'static';
            }
        }, 10);

        angular.element($window).bind("scroll", function() {

            var topMenuClasses = document.getElementById("publicApp").classList;
            if(document.documentElement.clientWidth > 620) {
                if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                    if (!topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.add("shop-top-menu-container");
                    }
                } else {
                    if (topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.remove("shop-top-menu-container");
                    }
                }
            }else {
                if (topMenuClasses.contains("shop-top-menu-container")) {
                    topMenuClasses.remove("shop-top-menu-container");
                }
            }
        });

        $scope.nextLoad = pagingApi.getPlainContent(1, 3, 'deal', 'idea').success(function (response) {
            $scope.dailyDeals = response['content'];
            $timeout(function() {
                jQuery('#daily-deals').royalSlider({
                    arrowsNav: true,
                    loop: false,
                    keyboardNavEnabled: true,
                    controlsInside: false,
                    imageScaleMode: 'fit',
                    arrowsNavAutoHide: false,
                    controlNavigation: 'bullets',
                    controlsInside: true,
                    thumbsFitInViewport: false,
                    navigateByClick: false,
                    startSlideId: 0,
                    autoPlay: false,
                    transitionType:'move',
                    globalCaption: false,
                    deeplinking: {
                      enabled: true,
                      change: false
                    },
                    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
                    imgWidth: "100%",
                    autoHeight: true,
                    imageScaleMode: "fill",
                    //    autoScaleSliderWidth: 1500,
                    //    autoScaleSliderHeight: 500,
                    //    autoScaleSlider: true
                });
                }, 
            100);
            
            
              

        });


        pagingApi.getPlainContent(1, 9, false, 'product').success(function (response) {
            $scope.newestArrivals = [];
            for(var i=0; i<= response['content'].length; i++){
                if(i%3 == 0){
                    var newestArrival = [response['content'][i]];
                }else{
                    newestArrival.push(response['content'][i]);
                    if(i%3 == 2 || i == response['content'].length-1){
                        $scope.newestArrivals.push(newestArrival);
                    }
                }
                $scope.hasMore = response['hasMore'];
            }
            
            $timeout(function(){
                jQuery('#newest-arrivals').royalSlider({
                    arrowsNav: true,
                    loop: false,
                    keyboardNavEnabled: true,
                    controlsInside: false,
                    arrowsNavAutoHide: false,
                    controlNavigation: 'bullets',
                    controlsInside: true,
                    thumbsFitInViewport: false,
                    navigateByClick: false,
                    startSlideId: 0,
                    autoPlay: false,
                    transitionType:'move',
                    globalCaption: false,
                    deeplinking: {
                      enabled: true,
                      change: false
                    },
                    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
                    imgWidth: "100%",
                    imageScaleMode: "fill",
                    autoHeight: true
                }, 100);
            })
        });
    }])

    .controller('shopcategoryController', function ($scope, $filter, pagingApi, $window, $uibModal, $timeout) {
        $scope.renderHTML = function(html_code)
        {
            var decoded = angular.element('<div />').html(html_code).text();
            return decoded;
        };
        $scope.openProductPopup = function(id){
            pagingApi.openProductPopup($scope, $uibModal, $timeout, id);
        }
        $scope.currentPage = 1;
        $scope.currentCategory = false;
        $scope.$filterBy = false;
        $scope.sortBy = false;
        $scope.hasMore = false;


        var $route =  $filter('getURISegment')(2);
        var $category = false;
        var filterTopOffset = 500;

        var everythingLoaded = setInterval(function() {
            if (/loaded|complete/.test(document.readyState)) {
                clearInterval(everythingLoaded);
                var footer = document.getElementsByClassName('about-footer')[0];
                footer.style.display = 'block';
                footer.style.position = 'static';

                var roomFilter = document.getElementsByClassName('room-filter')[0],
                    rect = roomFilter.getBoundingClientRect(),
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                filterTopOffset = rect.top + scrollTop;
            }
        }, 10);

        angular.element($window).bind("scroll", function() {

            var topMenuClasses = document.getElementById("publicApp").classList;
            if(document.documentElement.clientWidth > 620) {
                if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                    if (!topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.add("shop-top-menu-container");
                    }
                } else {
                    if (topMenuClasses.contains("shop-top-menu-container")) {
                        topMenuClasses.remove("shop-top-menu-container");
                    }
                }
            }else {
                if (topMenuClasses.contains("shop-top-menu-container")) {
                    topMenuClasses.remove("shop-top-menu-container");
                }
            }

            if (document.querySelector('.show-filter') !== null) {
                var showFilter = document.getElementsByClassName('show-filter')[0];
                if (showFilter.querySelector('.room-filter') !== null) {
                    // .. it exists as a child
                    var roomFilter = document.getElementsByClassName('room-filter')[0],
                        roomFilterClassList = roomFilter.classList;

                    if(document.body.scrollTop > (filterTopOffset - 55)){
                        if (!roomFilterClassList.contains("room-filter-fixed")) {

                            var rect = roomFilter.getBoundingClientRect(),
                                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                            filterTopOffset = rect.top + scrollTop;

                            roomFilterClassList.add("room-filter-fixed");
                            roomFilter.style.left = (showFilter.getBoundingClientRect().left + (window.pageXOffset || document.documentElement.scrollLeft)) + 'px';
                        }
                    }else{
                        if (roomFilterClassList.contains("room-filter-fixed")) {
                            roomFilterClassList.remove("room-filter-fixed");
                            roomFilter.style.left = '-220px';
                        }
                    }
                }

            }



        });

        if($route == 'shop'){
            if($category = $filter('getURISegment')(5)){
                $scope.currentCategory = $category;
            }else if($category = $filter('getURISegment')(4)){
                $scope.currentCategory = $category;
            }else{
                $scope.currentCategory = $filter('getURISegment')(3);
            }
        }

        // For Forced route confuguration
        if ($filter('getURISegment')(2) == 'smartbody') {

            $scope.currentCategory = 'smartbody';

            if ($filter('getURISegment')(3) != false) {
                $scope.currentCategory = $filter('getURISegment')(3);
            }
        }

    //    console.log('route :', $route, $filter('getURISegment')(3),$scope.currentCategory);


        $scope.nextLoad = pagingApi.getPlainContent(1, 15,  $scope.currentCategory, 'product', $scope.currentCategory).success(function (response) {

            if($scope.sortBy){
                response.sort(function(a, b) {
                    return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                });
            }

            $scope.content = response['content'];
            $scope.hasMore = response['hasMore'];
        });

        $scope.loadMore = function() {

            if($('.bottom-load-more').hasClass('disabled')){
                return false;
            }

            $scope.currentPage++;

            var $limit = 15;

            $scope.nextLoad =  pagingApi.getPlainContent($scope.currentPage, $limit,  $scope.currentCategory, 'product', $scope.currentCategory).success(function (response) {
                var $newStuff = $scope.content.concat(response['content'])

                if($scope.sortBy){
                    $newStuff.sort(function (a, b) {
                        return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                    });
                }

                $scope.content = $newStuff;
                $scope.hasMore = response['hasMore'];
                $('.bottom-load-more').removeClass('disabled').attr('disabled', false);

            });
        };

        //$scope.sortContent = function($sortBy){
        //
        //    if($sortBy === $scope.sortBy){
        //        return true;
        //    }
        //
        //    $('a[data-sortby]').removeClass('active');
        //    $('a[data-sortby="'+$sortBy+'"]').addClass('active');
        //
        //    var contentBlock =  $('.grid-box-3');
        //
        //    contentBlock.fadeOut(500, function(){
        //        $scope.nextLoad =  pagingApi.getPlainContent(1, 15,  $scope.currentCategory, 'product', $scope.currentCategory).success(function (response) {
        //            if($sortBy) {
        //                response.sort(function (a, b) {
        //                    return parseFloat(a[$sortBy]) - parseFloat(b[$sortBy]);
        //                });
        //                $scope.sortBy = $sortBy;
        //                $scope.content = response;
        //                contentBlock.fadeIn();
        //            }else{
        //                $scope.content = response;
        //                contentBlock.fadeIn();
        //            }
        //            $scope.sortBy = $sortBy;
        //
        //        });
        //    });
        //}

        $scope.filterPlainContent = function($filterBy, $sortBy) {

            //if($filterBy === $scope.currentCategory){
            //    return true;
            //}

            if($filterBy){
                if($('a[data-filterby="'+$filterBy+'"]').hasClass('active')){
                    return true;
                }

                $scope.currentCategory = $filterBy;
                $('a[data-filterby]').removeClass('active');
                $('a[data-filterby="'+$filterBy+'"]').addClass('active');

            }

            if($sortBy && $sortBy != 'undefined' && $sortBy != $scope.sortBy){

                if($('a[data-sotyby="'+$sortBy+'"]').hasClass('active')){
                    return true;
                }

                $('a[data-sortby]').removeClass('active');
                $('a[data-sortby="'+$sortBy+'"]').addClass('active');
            }

            var contentBlock =  $('.grid-box-3');

            contentBlock.fadeOut(500, function(){

                $scope.nextLoad =  pagingApi.getPlainContent(1, 15,   $scope.currentCategory, 'product',  $scope.currentCategory).success(function (response) {
                    if($sortBy != false){
                        $scope.sortBy = $sortBy;
                    }

                    if($scope.sortBy && $scope.sortBy != 'default' ){
                        response['content'].sort(function (a, b) {
                            return parseFloat(a[$scope.sortBy]) - parseFloat(b[$scope.sortBy]);
                        });
                    }

                    $scope.content = response['content'];
                    $scope.hasMore = response['hasMore'];

                    contentBlock.fadeIn();
                });
            });
        }
    })
    .directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
    };
  })
    .factory('pagingApi', function($http, $window, $q) {
        var pagingApi = {};
        pagingApi.openProductPopup = function ($scope, $uibModal, $timeout, productId) {
            var body = angular.element(document).find('body');
            if(body[0].offsetWidth < 880){
                return;
            }
            
            document.getElementsByTagName('html')[0].className += " hide-overflow ";
            var templateUrl = "product-popup.html";
            $http({
                url: '/api/product/get-product/' + productId,
                method: "get",
            }).success(function (data) {  
                $scope.productData = data;
            var modalInstance = $uibModal.open({
              templateUrl: templateUrl,
              size: 'lg',
              windowClass : 'product-popup-modal',
                    controller: 'ProductModalInstanceCtrl',
                    resolve: {
                        productData: function(){
                            return $scope.productData;
                        }
                    }
            });
            modalInstance.opened.then(function(){
                $timeout(function() {
                        var data = $scope.productData;
                        if (data.status_code == 200) {
                            console.log(data.data);
                            var data = data.data;
                            var imageHTML = "";
                            for(var key in data.selfImages.picture){
                                var picture = data.selfImages.picture[key];
                                imageHTML += '\
                                    <div>\
                                        <img class="rsImg " \
                                             src="'+ picture['link'] +'"\
                                             class="attachment-large wp-post-image"\
                                             alt=""/>\
                                    </div>\
                                '
                            }
                            $('.product-popup-modal #product-slider').html(imageHTML);
                            $('.product-popup-modal .base-url-holder').attr('data-base-url', '/product/' + data.product_permalink);
                            $('.product-popup-modal .p-title').html("<a target='_blank' href='/product/"+ data.productInformation['Permalink'] +"'>"+ data.productInformation['ProductName'] +"</a>");

                            var html = '\
                                <a class="get-round" href="/open/' + productId + '/product" target="_blank">Get it</a>\
                                <img class="vendor-logo" width="107" src="'+ data.storeInformation['ImagePath'] +'" alt="'+ data.storeInformation['StoreName'] +'">\
                            ';
                            $('.product-popup-modal .p-get-it-amazon .p-body').html(html);
                            

//                            $('.product-popup-modal .get-round').attr('href', data.productInformation['AffiliateLink']);
                            
                            if(data.productInformation['Review']){
                                var pScore = parseInt(((( Number(data.productInformation['Review'][0].value) > 0 ? Number(data.productInformation['Review'][0].value) : Number(data.productInformation['Review'][1].value)) + Number(data.productInformation['Review'][1].value))/2)*20) + "%";
                                $('.product-popup-modal .p-score').html(pScore);

                            }else{
                                //$('.p-average-ideaing-score').css('visibility', 'hidden');
                                $('.p-average-ideaing-score, .reviews-medium-container').hide();

                            }

                            var price;
                            if(data.productInformation['SellPrice']){
                                price = data.productInformation['SellPrice'];
                            }else{
                                price = 0;
                            }
                            $('.product-popup-modal .aws-price').html(price);
                            
                            var features;
                            if(data.productInformation['Description']){
                                features = data.productInformation['Description'];
                            }else{
                                features = "";
                            }
                            $('#features').html(features);
                            
                            var starRatingHtml = "";
                                $stars = data.productInformation['Review'][0].value;
                                $fStar = Math.floor($stars);
                                $cStar = Math.ceil($stars);
                                $halfStar = -1;
                                if ($fStar == $cStar)
                                    $halfStar = $cStar;

                                for($i=1; $i<=5; $i++){
                                    if($i <= $fStar){
                                        starRatingHtml += '\
                                        <span class="star active">\
                                            <i class="m-icon--star-blue-full"></i>\
                                        </span>\
                                        ';
                                    }else if($cStar == $i){
                                        starRatingHtml += '\
                                        <span class="star half">\
                                            <i class=" m-icon--star-blue-half2"></i>\
                                        </span>\
                                        ';
                                    }else{
                                        starRatingHtml += '\
                                        <span class="star">\
                                            <i class=" m-icon--star-blue-full-lines"></i>\
                                        </span>\
                                        ';
                                    }
                                }
                                $(".product-popup-modal .critic .star-rating").html(starRatingHtml);
                                var counter = data.productInformation['Review'][0].counter == '' ? 0 : data.productInformation['Review'][0].counter;
                                if(counter>1){
                                    var starRatingLabelHtml =  counter + '\
                                        <span class="light-black">\
                                            Reviews\
                                        </span>\
                                    ';
                                }else{
                                    var starRatingLabelHtml =  counter + '\
                                        <span class="light-black">\
                                            Review\
                                        </span>\
                                    ';
                                }
                                $(".product-popup-modal .critic .star-rating-label").html(starRatingLabelHtml);

                            var criticOuterRatingHtml = "";
                                if(data.productInformation['Review']){
                                    var outrReviews = data.productInformation['Review'].slice(2);
                                    for( reviewKey in outrReviews ){
                                        var review = outrReviews[reviewKey];
                                        //console.log("reviewKey", reviewKey)
                                        //console.log("review", review)
                                        criticOuterRatingHtml += '\
                                            <div class="critic-outer-rating">\
                                                <div class="line-label ">\
                                                    <a\
                                                        href="' + review.link + '"\
                                                        target="_blank">'+ review.key + '\
                                                    </a></div>\
                                                <div class="star-rating" style="text-align: center">';
                                                
                                                    $stars = review.value ? review.value : 0;
                                                    $fStar = Math.floor($stars);
                                                    $cStar = Math.ceil($stars);
                                                    $halfStar = -1;
                                                    if ($fStar == $cStar)
                                                        $halfStar = $cStar;
                                                    // TODO - move to model or Angular

                                                    for($i=1; $i<=5; $i++){
                                                        if($i <= $fStar){
                                                            criticOuterRatingHtml += '\
                                                                <span class="star active">\
                                                                    <i class="m-icon--star-blue-full"></i>\
                                                                </span>\
                                                            ';
                                                        }
                                                        else if($cStar == $i){
                                                            criticOuterRatingHtml += '\
                                                                <span class="star half">\
                                                                    <i class=" m-icon--star-blue-half2"></i>\
                                                                </span>\
                                                            ';
                                                        }
                                                        else{
                                                            criticOuterRatingHtml += '\
                                                                <span class="star">\
                                                                    <i class=" m-icon--star-blue-full-lines"></i>\
                                                                </span>\
                                                            ';
                                                        }
                                                    }
                                        criticOuterRatingHtml += '\
                                                </div>\
                                            </div>\
                                        ';
                                    }
                                }
                            jQuery(".product-popup-modal .critic #critic-outer-rating-holder").html(criticOuterRatingHtml);

                            var starRatingHtml = "";
                                $stars = data.productInformation['Review'][1].value;
                                $fStar = Math.floor($stars);
                                $cStar = Math.ceil($stars);
                                $halfStar = -1;
                                if ($fStar == $cStar)
                                    $halfStar = $cStar;

                                for($i=1; $i<=5; $i++){
                                    if($i <= $fStar){
                                        starRatingHtml += '\
                                        <span class="star active">\
                                            <i class="m-icon--star-blue-full"></i>\
                                        </span>\
                                        ';
                                    }else if($cStar == $i){
                                        starRatingHtml += '\
                                        <span class="star half">\
                                            <i class=" m-icon--star-blue-half2"></i>\
                                        </span>\
                                        ';
                                    }else{
                                        starRatingHtml += '\
                                        <span class="star">\
                                            <i class=" m-icon--star-blue-full-lines"></i>\
                                        </span>\
                                        ';
                                    }
                                }
                                
                                $(".product-popup-modal .amazon .star-rating").html(starRatingHtml);
                                var counter = data.productInformation['Review'][1].counter == '' ? 0 : data.productInformation['Review'][1].counter;
                                var starRatingLabelHtml = '<a href="' + (data.productInformation['Review'][1].link ? data.productInformation['Review'][1].link : "#") + '" target="_blank">'; 
                                if(counter>1){
                                    starRatingLabelHtml +=  counter + '\
                                        <span class="light-black">\
                                            Reviews\
                                        </span>\
                                    ';
                                }else{
                                    starRatingLabelHtml +=  counter + '\
                                        <span class="light-black">\
                                            Review\
                                        </span>\
                                    ';
                                }
                                starRatingLabelHtml += "</a>";
                                $(".product-popup-modal .amazon .star-rating-label").html(starRatingLabelHtml);
                            
                            var criticQuoteHtml = '\
                                <div>' + (data.productInformation['ReviewExtLink'] ? data.productInformation['ReviewExtLink'] : "") + '</div>';
                            $('.product-popup-modal .critic-quote').html(criticQuoteHtml);

                            $http({
                                url: '/api/comment/get-product-comment/'+productId,
                                method: "GET"
                            }).success(function (result) {
                                var comments = result.data;
                                var commentsCount = comments.length;
                                var commentsCountView = commentsCount < 2 ? commentsCount +" "+"Comment" : commentsCount +" "+"Comments";
                                var commentsHtml = "";
                                for(var i=0; i<comments.length; i++){
                                    var comment = comments[i];
                                    commentsHtml += '\
                                        <div class="p-comment-row">\
                                            <div class="pull-left text-center p-comment-user">\
                                                <img src="'+ comment.Picture + '" width="50px" class="p-photo"><br>' + comment.UserName + '</div>\
                                            <div class="p-comment">'
                                                + comment.Comment +
                                                '<div class="p-footer">\
                                                    <time class="p-time pull-left">'+comment.PostTime+'</time>\
                                                    <div class="clearfix"></div>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    ';
                                }
                                
                                
                                $('.p-comment-content-holder').html(commentsHtml);
                                $('.p-comment-responses').html(commentsCountView);
                              //  console.log($scope.comments.length);
                            });

                            
                    jQuery('#product-slider').royalSlider({
                        loop: false,
                        keyboardNavEnabled: true,
                        controlsInside: false,
                                imageScaleMode: 'fit',
                        arrowsNavAutoHide: false,
                        controlNavigation: 'thumbnails',
                        thumbsFitInViewport: false,
                        navigateByClick: true,
                        startSlideId: 0,
                        autoPlay: false,
                        transitionType: 'move',
                        globalCaption: false,
                        autoScaleSlider: false,
                                imgHeight: "100%",
//                                imgWidth: "100%",
//                                imgWidth: "100%",
//                                autoHeight: true,  
                        deeplinking: {
                          enabled: true,
                          change: false
                        },
                        
                        autoHeight: true,
                    });
                    document.getElementById( 'product-slider' ).style.visibility = 'visible';
                        }
                    }, 100)
                })
                    

            modalInstance.result.finally(function(){
                var className = document.getElementsByTagName('html')[0].className;
                className = className.replace('hide-overflow', '');
                document.getElementsByTagName('html')[0].className = className;

            });
                pagingApi.countSocialShares('product/' + data.data.product_permalink);
            });


        };

        pagingApi.fakeUpdateCounts = function ($service) {
            var currentCounters =  $('.share-buttons a[data-service="' + $service + '"]').children('.share-count');
            var totalCounters = $('b.share-count.all');
			
			var currentCount = Number(currentCounters.html());
			currentCounters.html(currentCount + 1);

			var totalCount = Number(totalCounters.html());
			totalCounters.html(totalCount + 1);
		}

		pagingApi.openSharingModal = function ($service, $scope) {

            if($('.base-url-holder').length && $('.base-url-holder').data('base-url')){
                var baseUrl = 'https://' + window.location.host + $('.base-url-holder').data('base-url');
            }else{
                var baseUrl = 'https://' + window.location.host + window.location.pathname;
            }

            var shareUrl = false;

            var $pitnerestShare = function(){
                    var e=document.createElement('script');
                    e.setAttribute('type','text/javascript');
                    e.setAttribute('charset','UTF-8');
                    e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);
                    document.body.appendChild(e);

                setTimeout(function(){
					pagingApi.fakeUpdateCounts('pinterest');
                }, 10000);
            }
 
            switch($service){ 
                case 'facebook':
                    shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl;
                    break;
                case 'twitter':
                    var title = $('h1').first().text().trim();
                    shareUrl = 'https://twitter.com/share?url=' + baseUrl + '&counturl=' + baseUrl + '&hashtags=smarthome&text=' + title.replace('%', '%25');
                    break;
                case 'googleplus':
                    shareUrl = 'https://plus.google.com/share?url=' + baseUrl;
                    break;
                case 'pinterest':
                    $pitnerestShare();
                    return true
            }

            if(!shareUrl){
                return false;
            }

            //$scope.openWindow = function() {
            var $modal = $window.open(shareUrl, 'share-box' + Math.random(), 'width=500,height=400');
            //};

            // TODO -- fire counter updates for shares, only on pages where they are used (CMS)

            var timer = setInterval(function() {
                if($modal.closed) {
                    clearInterval(timer);

                    if($service == 'twitter'){
                        $http({
                            url: '/api/social/update-twi-count',
                            method: "POST",
                            params: {'url': baseUrl}
                        });
                    }

                    setTimeout(function(){
			pagingApi.fakeUpdateCounts($service);
                    }, 2000);
                    console.log('share counters updated')
                }
            }, 1000);

        };

        pagingApi.countSocialShares = function ($url) {
            if(typeof $url !== "undefined"){
                var thisUrl =  window.location.host + $url;
            }else{
                var thisUrl = window.location.host + window.location.pathname;
            }

            $http({
                url: '/api/social/get-social-counts',
                method: "GET",
                params: {'url': thisUrl}
            }).success(function (response) {
                $('.share-count.all').html(response.all);

                if(response.all > 0){
                    $('.share-count.all.passive').hide();
                    $('.share-count.all.active').show();
                }

                $('.share-count.twi').html(response.twitter);
                $('.share-count.fb').html(response.facebook);
                $('.share-count.gp').html(response.gplus);
                $('.share-count.pint').html(response.pinterest);
                $('.share-count.inst').html(response.instagram);
            });
        }

        pagingApi.getPlainContent = function(page, limit, tag, type, productCategoryID, sortBy) {
            return $http({
                method: 'GET',
                url: '/api/paging/get-content/' + page + '/' + limit + '/' + tag + '/' + type + '/' + productCategoryID + '/' + sortBy,
            });
        }


        pagingApi.getReadContent = function(category) {
            return $http({
                method: 'GET',
                url: '/api/paging/get-read-content/' + category
            });
        }

        pagingApi.getGridContent = function(page, limit, tag, type, category, daysBack) {
            return $http({
                method: 'GET',
                url: '/api/paging/get-grid-content/' + page + '/' + limit + '/' + tag + '/' + type + '/' + category + '/' + daysBack,
            });
        }

        pagingApi.getSearchContent = function(query, limit, offset, type, sortBy) {
            return $http({
                method: "get",
                url: '/api/find/' + query + '/' + limit + '/' + offset + '/' + type + '/' + sortBy,
            });
        }

        pagingApi.getFilteredContent = function(currentPage, $tag, $type, $sliceFunction) {
            var promiseArray = [];

            for(var $page = 1; $page < currentPage + 1; $page++) {

                promiseArray.push(
                    $http.get('/api/paging/get-grid-content/' + $page + '/' + 9 + '/' + $tag+ '/' + $type)
                );
            }

            var $return = $q.all(promiseArray).then(function successCallback(response) {
                var $i = 0;
                var $filtered = [];

                response.forEach(function(batch) {

                    var endContent = [];

                    endContent['ideas'] = batch.data['content']['ideas'];
                    endContent['products'] = batch.data['content']['products'];

                    if($type != null && $type != 'idea'){
                        endContent['featured'] = [];
                    }else{
                        endContent['featured'] =  batch.data['content']['featured']; // we don't filter
                    }

                    $hasMore = batch.data['hasMore'];

                    $filtered[$i] = $sliceFunction(endContent['regular'], endContent['featured'], endContent['products'] );
                    $i++;
                });

                var $return = [];

                $return['content'] = $filtered;
                $return['hasMore'] = $hasMore;

                return $return;
            });
            return $return;
        }





        return pagingApi;
    })


//
//angular.module('pagingApp.services', []).
//    factory('pagingApi', function($http, $q) {
//
//        var pagingApi = {};
//
//        pagingApi.getGridContent = function(page, limit, tag, category) {
//            return $http({
//                method: 'GET',
//                url: '/api/paging/get-content/' + page + '/' + limit + '/' + tag + '/' + category,
//            });
//        }
//
//        pagingApi.getFilteredContent = function(currentPage, $tag, $category, $sliceFunction) {
//            var promiseArray = [];
//
//            for(var $page = 1; $page < currentPage + 2; $page++) {
//
//                promiseArray.push(
//                    $http.get('/api/paging/get-content/' + $page + '/' + 9 + '/' + $tag+ '/' + $category)
//                );
//            }
//
//            var $return = $q.all(promiseArray).then(function successCallback(response) {
//                var $i = 0;
//                var $filtered = [];
//
//                response.forEach(function(batch) {
//
//                    var endContent = [];
//
//                    endContent['regular'] = batch.data['regular'];
//
//                    if($category != null && $category != 'idea'){
//                        endContent['featured'] = [];
//                    }else{
//                        endContent['featured'] =  batch.data['featured']; // we don't filter
//                    }
//
//                    $filtered[$i] = $sliceFunction(endContent['regular'], endContent['featured'] );
//                    $i++;
//                });
//
//                var $return = $filtered;
//
//                return $return;
//            });
//            return $return;
//        }
//
//        return pagingApi;
//    });

/*.factory('layoutApi', function($http) {

        var layoutApi = {};

        layoutApi.getProductsForShopMenu = function() {
            return $http({
                method: 'GET',
                url: '/api/layout/get-shop-menu/',
            });
        }


        return layoutApi;
    })
    .directive('a', function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                    elem.on('click', function(e){
                        e.preventDefault();
                    });
                }
            }
        };
    });*/
;

angular.module('pagingApp').value('cgBusyDefaults',{
    message:'',
    backdrop: false,
    templateUrl: '/assets/svg/spinner.html',
    delay: 300,
    minDuration: 700,
    wrapperClass: ''
});

angular.module('pagingApp.filters', [])
    .filter('getURISegment', function() {
        // we cannot use Angular $location, bacause it conflicts with vanila history.state
        return function(index) {
            var segments = $(location).attr('href').split("/");
            cutoff = segments.splice(0, 3); // cut off base

            if(segments[index - 1]){
                return segments[index - 1];
            }else{
                return false;
            }
        }
    });



// bootstrap for modularization ( add id="pagingApp" with initializing ng-app='pagingApp')
//angular.bootstrap(document.getElementById('pagingApp'),['pagingApp']);



;
/*** Created by sanzeeb on 1/7/2016.*/

var productApp = angular.module('productApp', ['ui.bootstrap', 'autocomplete', 'ngSanitize', 'angular-confirm', 'textAngular']);

// directive for heart action for grid items
productApp.directive('heartCounterProduct', ['$http', function($http) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope:{
            uid:'=',
            iid:'=',
            plink:'=',
            sec:'=',
        },
        controller:function($scope, $element, $attrs){

           // console.log(window.location.host);
            // Heart Section

            $scope.unHeart = false;
            $scope.heartCounter = 0;

            $scope.heartCounterAction = function(){

                $http({
                    url: '/api/heart/count-heart',
                    method: "POST",
                    data:{
                        section: $attrs.sec,
                        uid: $scope.uid,
                        iid: $scope.iid,
                        plink: $scope.cleanUrl($scope.plink),
                    }
                }).success(function (data) {
                    $attrs.ustatus = data.UserStatus;

                    $scope.unHeart = data.UserStatus;
                    $scope.heartCounter = data.Count;

                });
            };

            // clean url for ideaing URL (take only permalink)
            $scope.cleanUrl = function(urlString){
                urlString = urlString.toString();
                var domainBuilder = "https://"+window.location.host+"/ideas/";
                var cleanString = urlString.replace(domainBuilder,'');
                return cleanString;
            };

            $scope.heartAction = function(){

                // an anonymous will be returned without performing any action.
                if($attrs.uid==0)
                    return;

                $http({
                    url: '/api/heart/add-heart',
                    method: "POST",
                    data:{
                        section: $attrs.sec,
                        uid: $scope.uid,
                        iid: $scope.iid,
                        plink: $scope.cleanUrl($scope.plink),
                        uht: $scope.unHeart
                    }
                }).success(function (data) {
                    $scope.heartCounterAction();
                    $scope.unHeart = ! $scope.unHeart;
                });
            };
            $scope.heartCounterAction();
        },

        template: '      <div class="">'+
        '                    <a class="likes"'+
        '                       ng-click="heartAction()"'+
        '                    >'+
        '                        <i ng-class="unHeart != false ? \'m-icon m-icon--heart-solid\' : \'m-icon m-icon--ScrollingHeaderHeart\'">'+
        '                                <span class="m-hover">'+
        '                                    <span class="path1"></span><span class="path2"></span>'+
        '                                </span>'+
        '                        </i>'+
        '                        <span class="social-stats__text" ng-bind="heartCounter">&nbsp; </span>'+
        '                    </a>'+
        '                </div>'

    }
}]);


// Setting values of Angular Text Editor
productApp.config(['$provide', function ($provide) {
    // this demonstrates how to register a new tool and add it to the default toolbar
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
        // $delegate is the taOptions we are decorating
        // here we override the default toolbars and classes specified in taOptions.
        taOptions.forceTextAngularSanitize = true; // set false to allow the textAngular-sanitize provider to be replaced
        taOptions.keyMappings = []; // allow customizable keyMappings for specialized key boards or languages

        /*taOptions.toolbar = [
         ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'quote',
         'bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear',
         'justifyLeft','justifyCenter','justifyRight', 'justifyFull',
         'insertImage', 'insertLink']
         ];*/

        taRegisterTool('insertCustomImage', {
            iconclass: "fa fa-picture-o",
            action: function () {
                this.$editor().$parent.insertCustomImagePopup();

            }
        });

        taOptions.toolbar = [
            ['bold', 'insertImage']
        ];

        taOptions.classes = {
            focussed: 'focussed',
            toolbar: 'btn-toolbar',
            toolbarGroup: 'btn-group',
            toolbarButton: 'btn btn-default',
            toolbarButtonActive: 'active',
            disabled: 'disabled',
            textEditor: 'form-control',
            htmlEditor: 'form-control'
        };
        return taOptions; // whatever you return will be the taOptions
    }]);
    // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
    /*$provide.decorator('taTools', ['$delegate', function(taTools){
     taTools.bold.iconclass = 'icon-bold';
     taTools.italics.iconclass = 'icon-italic';
     taTools.underline.iconclass = 'icon-underline';
     taTools.ul.iconclass = 'icon-list-ul';
     taTools.ol.iconclass = 'icon-list-ol';
     taTools.undo.iconclass = 'icon-undo';
     taTools.redo.iconclass = 'icon-repeat';
     taTools.justifyLeft.iconclass = 'icon-align-left';
     taTools.justifyRight.iconclass = 'icon-align-right';
     taTools.justifyCenter.iconclass = 'icon-align-center';
     taTools.clear.iconclass = 'icon-ban-circle';
     taTools.insertLink.iconclass = 'icon-link';
     taTools.insertImage.iconclass = 'icon-picture';
     // there is no quote icon in old font-awesome so we change to text as follows
     delete taTools.quote.iconclass;
     taTools.quote.buttontext = 'quote';
     return taTools;
     }]);*/
}]);


productApp.controller('forumController', ['$scope', '$http', '$window', '$interval', '$timeout'
    , function ($scope, $http, $window, $interval, $timeout){
        $scope.focusEditor = function () {
            $timeout(function () {
                angular.element('div[contenteditable=true]').trigger('focus');
            })
        }
        $scope.activeCategoryId = 1;
        $scope.activeSubCategoryId;
        $scope.thread = {category_id: "1"};
        $scope.categoryThreads = [];

        $scope.init = function(){
            $http({
                url: '/advice/api/categories/' + $scope.activeCategoryId,
                method: "get",
                data: {
                }
            }).success(function (result) {
                $scope.subCategories = result.data;
//                $scope.activeSubCategoryId = result.data.length ? result.data[0].id : "";
                $scope.getThreads($scope.activeCategoryId);
            });
        }
        $scope.init();
        
        $scope.addThread = function(){
            $http({
                url: '/advice/api/add-thread',
                method: "POST",
                data: {
                    category_id: $scope.thread.category_id,
                    content: $scope.thread.content,
                    title: $scope.thread.title,
                }
            }).success(function (data) {
                $scope.erros = false;
                $scope.init();
                $scope.success_message = "Your post has been successfully posted!";
            }).error(function(data){
                $scope.erros = data;
                $scope.success_message = false;
            })
            
            ;
        }
        
        $scope.getThreads = function(categoryId){
            $http({
                url: '/advice/api/threads/' + categoryId, 
                method: "get", 
                data: {
                }
            }).success(function (result) {
                $scope.categoryThreads = result.data;
                
            });
        }
        
        $scope.selectCategory = function(categoryID){
            $scope.activeCategoryId = categoryID;
            $scope.init();
        }
        $scope.selectSubCategory = function(subCategoryID){
            $scope.activeSubCategoryId = subCategoryID;
            $scope.getThreads(subCategoryID);
        }
    }
]);
publicApp.controller('CommentModalCtrl',['$scope', '$timeout', '$uibModalInstance', '$http', 'commentData', function ($scope, $timeout, $uibModalInstance, $http, commentData) {
    $scope.focusEditor = function () {
        $timeout(function () {
            angular.element('div[contenteditable=true]').trigger('focus');
        })
    }
    $scope.commentData = {
        thread_id: commentData.thread_id,
        post_id: commentData.post_id,
        content: "",
    };
    
    $scope.hideAndForget = function () {
        $http({
            url: '/hide-signup',
            method: "GET",

        }).success(function (data) {
            $uibModalInstance.close();
        });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveComment = function(){
        if(!$scope.commentData.content){
            return;
        }
        $http({
            url: '/advice/api/comment',
            method: "post",
            data: {
                thread_id: $scope.commentData.thread_id,
                post_id: $scope.commentData.post_id,
                content: $scope.commentData.content,
            }
        }).success(function (result) {
            $uibModalInstance.dismiss('cancel');
//            items.scope.init();
        });
    }
}
]);

productApp.directive( 'compileData', function ( $compile ) {
  return {
    scope: true,
    link: function ( scope, element, attrs ) {

      var elmnt;

      attrs.$observe( 'template', function ( myTemplate ) {
        if ( angular.isDefined( myTemplate ) ) {
          // compile the provided template against the current scope
          elmnt = $compile( myTemplate )( scope );

            element.html(""); // dummy "clear"

          element.append( elmnt );
        }
      });
    }
  };
});

productApp.controller('forumThreadController', ['$scope', '$uibModal', '$http', '$window', '$interval', '$timeout'
    , function ($scope, $uibModal, $http, $window, $interval, $timeout){
        $scope.thread = {};
        $scope.commentHTML = "";
        $scope.init = function(){
            $http({
                url: '/advice/api/posts/' + $scope.thread_id,
                method: "get",
                data: {
                }
            }).success(function (result) {
                $scope.thread = result.data;
                $scope.commentHTML = "";
                var posts = angular.copy($scope.thread.posts);
                $scope.makeCommentHTML(posts)
                
                $timeout(function () {
                    $scope.init();
                }, 3000)
                
            });
        }
        
        angular.element(document).ready(function () {
            $scope.init();
        });

        $scope.commentPopup = function(thread_id, post_id){
            var templateUrl = "forum-comment.html";
            var modalInstance = $uibModal.open({
                templateUrl: templateUrl,
                size: 'lg',
                windowClass: 'forum-comment-modal',
                controller: 'CommentModalCtrl',
                resolve: {
                    commentData: function(){
                        return {
                            thread_id: thread_id,
                            post_id: post_id,
                            scope: $scope
                        };
                    }
                }
            });

        };

        $scope.makeCommentHTML = function(posts){
            for(var key in posts){
                var post = posts[key];
                if(!post.post_id){
                    $scope.commentHTML += '\
                <div class="comment-row " >\
                    <div class="comment-profile-holder text-center">\
                        <img class="profile-photo" src="'+post.authorPicture+'"><br>\
                        <span class="name">'+ post.authorName +'</span><br>\
                    </div>\
                    <div class="comment-content-container">\
                        <div class="comment-content-holder">\
                            <div class="comment-content-inner-holder">\
                                <div class="comment-conent">\
                                    <div class="content" >'+post.content+'</div>\
                                </div>\
                                <div class="comment-bottom">\
                                    <div class="pull-left">\
                                        <i class="m-icon m-icon--star-blue-full"></i> &nbsp; <span>207</span> found this helpful\
                                    </div>\
                                    <div class="pull-right reply" data-ng-click="commentPopup('+post.thread_id+','+post.id+')"><i class="m-icon m-icon--comments-products"></i> &nbsp; Reply</div>\
                                    <div class="pull-right link-to-this-post"><i class="m-icon m-icon--attachment"></i> &nbsp; Link to this post</div>\
                                    <div class="clearfix"></div>\
                                </div>\
                            </div>\
                    ';
                }else{
                    if(key == 0){
                        $scope.commentHTML += '\
                            <div class="sub" >\
                            ';
                    }
                    $scope.commentHTML += '\
                            <div  class="comment-content-holder">\
                                <div class="comment-content-inner-holder">\
                                    <div class="comment-conent">\
                                        <div class="pull-left">\
                                            <img class="profile-photo" src="'+post.authorPicture+'">\
                                        </div>\
                                        <div class="pull-left">\
                                            <div class="fullname">\
                                                '+post.authorName+'\
                                            </div>\
                                        </div>\
                                        <div class="clearfix"></div>\
                                        <div class="content" >'+post.content+'</div>\
                                    </div>\
                                    <div class="comment-bottom">\
                                        <div class="pull-left">\
                                            <i class="m-icon m-icon--star-blue-full-lines"></i> &nbsp; <span>208</span> found this helpful\
                                        </div>\
                                        <div class="pull-right reply" data-ng-click="commentPopup('+post.thread_id+','+post.id+')"><i class="m-icon m-icon--comments-products"></i> &nbsp; Reply</div>\
                                        <div class="pull-right link-to-this-post"><i class="m-icon m-icon--attachment"></i> &nbsp; Link to this post</div>\
                                        <div class="clearfix"></div>\
                                    </div>\
                                </div>\
                    ';

                }

                $scope.makeCommentHTML(post.child_posts);
                if(!post.post_id){
                    $scope.commentHTML += '</div></div>\
                            <div class="clearfix"></div>\
                        </div>\
                    ';
                }else{
                    $scope.commentHTML += "</div>";
                    if(key == (posts.length-1)){
                        $scope.commentHTML += "</div>";
                    }
                }
            }
        }
    }
]);
productApp.controller('productController', ['$scope', '$http', '$window', '$interval', '$timeout'
    , function ($scope, $http, $window, $interval, $timeout) {

        $scope.focusEditor = function () {
            $timeout(function () {
                angular.element('div[contenteditable=true]').trigger('focus');
            })
        }
        $scope.insertCustomImagePopup = function () {
            alert("Please add the code for photo uploading here");
        }
        $scope.textAreaSetup = function ($element) {
            $element.attr('focus-me', 'focus_editor');
        };
        // initialize variables
        $scope.initPage = function () {

            $scope.productInformation = [];
            $scope.relatedProducts = [];
            $scope.selfImages = [];

            $scope.permalink = $window.permalink;

            $scope.ProductName = '';
            $scope.Description = '';

            $scope.tmp = "/assets/images/dummies/slider/PC220020-1024x683.jpg";

            //product compare
            $scope.selectedProduct = '';
            $scope.comparableProductList = [];
            $scope.suggestedItems = [];
            $scope.suggestedItemsWithId = [];
            $scope.specList = [];

            $scope.compareIndex = 0;
            $scope.dataLength = 0;//$scope.comparableProductList.length;
            $scope.temporaryViewList = [];

            $scope.showCompareButton = true;

            // Comment section
            $scope.html = "";
            $scope.comments = [];
            $scope.commentsCount = 0;
            $scope.commentsCountView = "";//$scope.commentsCount < 2? $scope.commentsCount +" "+"Comment" : $scope.commentsCount +" "+"Comments";

            $scope.productId = 0;
            $scope.userId = 0;
            $scope.isAdmin = false;
            $scope.isEdit = false;
            $scope.commentId = null;

            // Heart Section

            $scope.unHeart = false;
            $scope.heartCounter = 0;


        };

        // Heart //

        $scope.heartAction = function (userId, ItemId, permalink, section) {

            // an anonymous will be returned withough performing any action.
            if (userId == 0)
                return;

            $http({
                url: '/api/heart/add-heart',
                method: "POST",
                data: {
                    uid: userId,
                    iid: ItemId,
                    plink: permalink,
                    section: section,
                    uht: $scope.unHeart
                }
            }).success(function (data) {
                $scope.heartCounterAction(userId, ItemId, section);
                $scope.unHeart = !$scope.unHeart;
            });
        };

        $scope.heartCounterAction = function (userId, ItemId, section) {
            $http({
                url: '/api/heart/count-heart',
                method: "POST",
                data: {
                    uid: userId,
                    iid: ItemId,
                    section: section
                }
            }).success(function (data) {
                $scope.unHeart = data.UserStatus;
                $scope.heartCounter = data.Count;
            });

        };

        // Comment for product section
        $scope.addCommentForProduct = function (userId, productId, permalink, comment) {
            //console.log(userId,productId,permalink,comment);

            $http({
                url: '/api/comment/add-product-comment',
                method: "POST",
                data: {
                    uid: userId,
                    pid: productId,
                    plink: permalink,
                    comment: comment,
                    img: $window.img
                }
            }).success(function (data) {
                $scope.html = "";
                $scope.getCommentsForProduct($scope.productId);


            });
        };

        $scope.getCommentsForProduct = function (pid) {

            $http({
                url: '/api/comment/get-product-comment/' + pid,
                method: "GET"
            }).success(function (data) {
                $scope.productId = pid;
                $scope.comments = data.data;
                $scope.commentsCount = $scope.comments.length;
                $scope.commentsCountView = $scope.commentsCount < 2 ? $scope.commentsCount + " " + "Comment" : $scope.commentsCount + " " + "Comments";

                //  console.log($scope.comments.length);
            });

        };

        // update comment in the comment view through AJAX call.
        var commnetTimer = $interval(function () {
            //  console.log("in");
            if ($scope.productId != 0) {
                $scope.getCommentsForProduct($scope.productId);
            }
        }, 15000);//10000


        $scope.editComment = function (comment) {
            //  console.log(comment);

            $scope.isEdit = true;

            $scope.commentId = comment.CommentId;

            $scope.html = comment.Comment;


        };

        $scope.updateCommentForProduct = function (id, comment) {
            $http({
                url: '/api/comment/update-comment',
                method: "POST",
                data: {
                    cid: $scope.commentId,
                    comment: $scope.html
                }
            }).success(function (data) {
                $scope.html = "";
                $scope.isEdit = false;
                // console.log("pid :"+ $scope.productId);
                $scope.getCommentsForProduct($scope.productId);
            });

        };


        $scope.deleteCommentForProduct = function (id) {
            $http({
                url: '/api/comment/delete-comment',
                method: "POST",
                data: {
                    cid: id
                }
            }).success(function (data) {
                $scope.getCommentsForProduct($scope.productId);
            });

        };


        // toggle compare button
        $scope.toggleCompareButton = function () {
            $scope.showCompareButton = !$scope.showCompareButton;

        };

        // search comparable it by name
        $scope.searchProductByName = function (query) {

            //min string length to call ajax
            if (query.length < 3)
                return;

            $scope.suggestedItems = [];
            $scope.suggestedItemsWithId = [];

            $http({
                url: '/api/product/product-find/' + query,
                method: "GET",

            }).success(function (data) {
                for (var i = 0; i < data.length; i++) {
                    $scope.suggestedItems.push(data[i]['name']);
                    $scope.suggestedItemsWithId.push(data);

                }
            });

        };

        $scope.selectedIdem = function (query) {
            //  console.log($scope.comparableProductList);
            $http({
                url: '/api/product/get-by-name/' + query,
                method: "GET",

            }).success(function (data) {
                $scope.comparableProductList.push(data);

                $scope.temporaryViewList = $scope.comparableProductList.slice($scope.compareIndex, $scope.compareIndex + 3);
                $scope.dataLength = $scope.comparableProductList.length;
                $scope.selectedProduct = '';

                $scope.toggleCompareButton();

            });

        };

        $scope.deleteSelectedItem = function (index) {
            $scope.comparableProductList.splice(index, 1);

            $scope.dataLength = $scope.comparableProductList.length;
            $scope.temporaryViewList = $scope.comparableProductList.slice($scope.compareIndex, $scope.compareIndex + 3);

        };

        $scope.traverseForward = function () {

            if ($scope.compareIndex <= $scope.dataLength - 1)
                $scope.compareIndex++;

            $scope.temporaryViewList = $scope.comparableProductList.slice($scope.compareIndex, $scope.compareIndex + 3);

        };

        $scope.traverseBackward = function () {

            if ($scope.compareIndex >= 1)
                $scope.compareIndex--;


            $scope.temporaryViewList = $scope.comparableProductList.slice($scope.compareIndex, $scope.compareIndex + 3);

        };


        $scope.loadProductDetails = function () {
            // console.log(permalink);
            $http({
                url: '/api/pro-details/' + $scope.permalink,
                method: "GET",
            }).success(function (data) {

                if (data.status_code == 200) {
                    $scope.comparableProductList.push(data);


                    $scope.temporaryViewList = $scope.comparableProductList.slice($scope.compareIndex, $scope.compareIndex + 3);
                    $scope.dataLength = $scope.comparableProductList.length;

                    // set spec list for product compare
                    var item = data.data.productInformation.Specifications;

                    for (var i = 0; i < item.length; i++) {
                        var specName = item[i].key;

                        // set the key as view-able order ("ProductSize" = "Product Size")
                        specName = specName.split(/(?=[A-Z])/).join(" ");
                        $scope.specList.push(specName);
                    }

                }
            });

        };

        $scope.initPage();


    }]);

/* bootstrap for modularization
//angular.bootstrap(document.getElementById('productApp'),['productApp']);*/

