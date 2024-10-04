System.register("bundle://game01/_virtual/game001.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,o,r;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,r=e.Component}],execute:function(){var c;n._RF.push({},"181fc3FhhVIhIS1TaGCIRJ9","game001",void 0);var a=o.ccclass;o.property,e("game001",a("game001")(c=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var o=n.prototype;return o.start=function(){console.log("game001")},o.update=function(e){},n}(r))||c);n._RF.pop()}}}));

System.register("bundle://game01/_virtual/game01",["./game001.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("bundle://game01/_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(o,r){return(e=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(o,r)}t({inheritsLoose:function(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,e(t,o)},setPrototypeOf:e})}}}));

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