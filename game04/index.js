System.register("bundle://game01/_virtual/game001.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,n,o,i,a,l,c,u;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Node,c=e.Prefab,u=e.Component}],execute:function(){var p,s,f,g,b,d,m;i._RF.push({},"181fc3FhhVIhIS1TaGCIRJ9","game001",void 0);var y=a.ccclass,h=a.property;e("game001",(p=y("game001"),s=h(l),f=h(c),p((d=r((b=function(e){function r(){for(var r,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i))||this,n(r,"Node",d,o(r)),n(r,"Prefab",m,o(r)),r}t(r,e);var i=r.prototype;return i.start=function(){console.log("game001")},i.update=function(e){},r}(u)).prototype,"Node",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=r(b.prototype,"Prefab",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=b))||g));i._RF.pop()}}}));

System.register("bundle://game01/_virtual/game01",["./game001.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("bundle://game01/_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){function i(t,r){return(i=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,i){return e.__proto__=i,e}))(t,r)}e({applyDecoratedDescriptor:function(e,i,t,r,n){var o={};Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,r){return r(e,i,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,i,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},inheritsLoose:function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)},initializerDefineProperty:function(e,i,t,r){if(!t)return;Object.defineProperty(e,i,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})},setPrototypeOf:i})}}}));

(function(r) {
  r('virtual:///prerequisite-imports/game01', 'bundle://game01/_virtual/game01'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});