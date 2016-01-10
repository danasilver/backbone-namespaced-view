// backbone.nsview

(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['underscore', 'backbone', 'exports'], factory);

  else if (typeof exports === 'object')
    factory(require('underscore'), require('backbone'));

  else
    factory(_, Backbone);

}(function (_, Backbone) {
  
  // Namespace qualification from d3.ns
  var namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns'
  };

  var qualify = function (name) {
    var i = name.indexOf(':'), prefix = name;
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
  };

  Backbone.NSView = Backbone.View.extend({
    _createElement: function (tagName) {
      var qualified = qualify(tagName);

      return qualified.space
        ? document.createElementNS(qualified.space, qualified.local)
        : document.createElement(qualified);
    }
  });

  return Backbone;
}));
