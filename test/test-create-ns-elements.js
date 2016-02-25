var jsdom = require('jsdom').jsdom;
var document = jsdom('<html><body></body></html>');

global.document = document;
global.window = document.defaultView;

var Backbone = require('..');
var assert = require('assert');

describe('backbone-namespaced-view', function() {
  it('should create svg elements', function() {
    var SVGView = Backbone.NSView.extend({
      tagName: 'svg'
    });
    var svg = new SVGView().el;

    assert.notEqual(svg, null);
    assert.equal(svg.namespaceURI, 'http://www.w3.org/2000/svg');
  });

  it('should create svg sub-elements', function() {
    var RectView = Backbone.NSView.extend({
      tagName: 'svg:rect'
    });

    var rect = new RectView().el;

    assert.notEqual(rect, null);
    assert.equal(rect.namespaceURI, 'http://www.w3.org/2000/svg');
  });
});
