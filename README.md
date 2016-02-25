# Backbone Namespaced View

## Usage

```js
var SVGView = Backbone.NSView.extend({
  tagName: 'svg',

  render: function() {
    this.$el.append(new Rect().render().el);
  }
});

var Rect = Backbone.NSView.extend({
  tagName: 'svg:rect',

  render: function() {
    this.$el
      .attr('x', 100)
      .attr('y', 100)
      .css('fill', 'steelblue');

    return this;
  }
});

$('body').append(new SVGView().render().el);
```
