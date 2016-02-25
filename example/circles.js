(function(Backbone) {
  var height = window.innerHeight
      width = window.innerWidth,
      circles = 3000;

  var SVGView = Backbone.NSView.extend({
    tagName: 'svg',

    render: function() {
      this.$el.attr('height', height);
      this.$el.attr('width', width);

      while (circles--) {
        this.$el.append(new CircleView().render().el);
      }

      return this;
    }
  });

  var CircleView = Backbone.NSView.extend({
    tagName: 'svg:circle',

    render: function() {
      this.$el.css('fill', 'steelblue');
      this.$el.attr('cx', Math.random() * width | 0);
      this.$el.attr('cy', Math.random() * height | 0);
      this.$el.attr('r', 2);

      return this;
    }
  });

  $('body')
    .css('margin', '0')
    .append(new SVGView().render().el);
})(Backbone);
