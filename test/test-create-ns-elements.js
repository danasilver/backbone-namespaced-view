var jsdom = require('jsdom').jsdom;
var document = jsdom('<html><body></body></html>');

global.document = document;
global.window = document.defaultView;

var Backbone = require('..');
var assert = require('assert');

describe('backbone-namespaced-view', function() {
  it('should use createElementNS when given an unqualified matching namespace', function() {
    var SVGView = Backbone.NSView.extend({
      tagName: 'svg'
    });

    var svg = new SVGView().el;

    assert.equal(svg.tagName, 'svg');
    assert.equal(svg.namespaceURI, 'http://www.w3.org/2000/svg');
  });

  it('should use createElementNS when given an qualified matching namespace', function() {
    var RectView = Backbone.NSView.extend({
      tagName: 'svg:rect'
    });

    var rect = new RectView().el;

    assert.equal(rect.tagName, 'rect');
    assert.equal(rect.namespaceURI, 'http://www.w3.org/2000/svg');
  });

  it('should use createElement when a namespace does not match', function() {
    var SpanView = Backbone.NSView.extend({
      tagName: 'span'
    });

    var span = new SpanView().el;

    assert.equal(span.tagName, 'SPAN');
    assert.equal(span.namespaceURI, 'http://www.w3.org/1999/xhtml');
  });
});
