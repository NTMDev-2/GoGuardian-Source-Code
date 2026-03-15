function(A,e,t){"use strict";e.__esModule=!0,e.getFetch=function(){var A;return(null===(A=window.GG_WINDOW)||void 0===A?void 0:A.fetch)||window.fetch}},

function(A,e,t){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;
function r(A,e){return Object.prototype.hasOwnProperty.call(A,e)}
e.assign=function(A){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var t=e.shift();if(t){if("object"!=typeof t)throw new TypeError(t+"must be non-object");for(var n in t)r(t,n)&&(A[n]=t[n])}}return A},
e.shrinkBuf=function(A,e){return A.length===e?A:A.subarray?A.subarray(0,e):(A.length=e,A)};
var i={arraySet:function(A,e,t,n,r){if(e.subarray&&A.subarray)A.set(e.subarray(t,t+n),r);else for(var i=0;i<n;i++)A[r+i]=e[t+i]},
flattenChunks:function(A){var e,t,n,r,i,s;for(n=0,e=0,t=A.length;e<t;e++)n+=A[e].length;for(s=new Uint8Array(n),r=0,e=0,t=A.length;e<t;e++)i=A[e],s.set(i,r),r+=i.length;return s}},
s={arraySet:function(A,e,t,n,r){for(var i=0;i<n;i++)A[r+i]=e[t+i]},flattenChunks:function(A){return[].concat.apply([],A)}};
e.setTyped=function(A){A?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,s))},
e.setTyped(n)},

function(A,e,t){"use strict";e.__esModule=!0,
e.randomInt32=function(){return Math.floor(2147483647*Math.random()+1)},
e.arrContainsUniqueElem=function(A,e){return A.some((function(A){return-1===e.indexOf(A)}))},
e.invertObject=function(A){var e={};return Object.keys(A).forEach((function(t){e[A[t]]=t})),e},
e.arraysEqual=function(A,e){if(A.length!==e.length)return!1;for(var t=0;t<A.length;t++)if(A[t]!==e[t])return!1;return!0},
e.fixJSONStringify=function(){if(void 0!==window.Prototype&&parseFloat(window.Prototype.Version.substr(0,3))<1.7&&void 0!==Array.prototype.toJSON){var A=JSON.stringify;JSON.stringify=function(e){var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var n=A(e);return Array.prototype.toJSON=t,n}}}},

function(A,e,t){"use strict";(function(A){
