const Ext = {
  css: /^((?!min).)*\.css$/,
  html: /.*\.d*html*$/,
  js: /^((?!test|spec|min|config).)*\.js$/,
  jsConfig: /.*\.config\.js$/,
  jsTest: /^.*(test|spec)\.js$/,
  jsx: /^((?!test|spec|min).)*\.jsx$/,
  jsxTest: /^.*(test|spec)\.jsx$/,
  less: /\.less$/,
  rc: /^\..*rc$/,
  sass: /\.sass$/,
  scss: /\.scss$/,
  stylus: /\.styl$/,
  ts: /^((?!test|spec|config).)*\.ts$/,
  tsTest: /^.*(test|spec)\.ts$/,
  tsx: /^((?!test|spec).)*\.tsx$/,
  tsxTest: /^.*(test|spec)\.tsx$/,
};

const UnitTestType = {
  jsTest: Ext.jsTest,
  jsxTest: Ext.jsxTest,
  tsTest: Ext.tsTest,
  tsxTest: Ext.tsxTest,
};

const JSType = {
  js: Ext.js,
};

const JSLangType = {
  ...JSType,
  ts: Ext.ts,
};

const ReactType = {
  ...JSLangType,
  jsx: Ext.jsx,
  tsx: Ext.tsx,
};

const StyleType = {
  css: Ext.css,
};

const StyleProcType = {
  ...StyleType,
  less: Ext.less,
  sass: Ext.sass,
  scss: Ext.scss,
  stylus: Ext.stylus,
};

const ConfigType = {
  jsConfig: Ext.jsConfig,
  rc: Ext.rc,
};

const HTMLType = {
  html: Ext.html,
};

const ExtByType = {
  config: ConfigType,
  html: HTMLType,
  jslang: JSLangType,
  js: JSType,
  react: ReactType,
  styleproc: StyleProcType,
  style: StyleType,
  test: UnitTestType,
};

const IgnoreType = /((build|dist|node_modules)\/|jquery)/;

module.exports.ConfigType = ConfigType;
module.exports.Ext = Ext;
module.exports.HTMLType = HTMLType;
module.exports.IgnoreType = IgnoreType;
module.exports.JSLangType = JSLangType;
module.exports.JSType = JSType;
module.exports.ReactType = ReactType;
module.exports.StyleProcType = StyleProcType;
module.exports.StyleType = StyleType;
module.exports.UnitTestType = UnitTestType;

module.exports.ExtByType = ExtByType;
