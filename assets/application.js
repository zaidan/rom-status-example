(function() {
  (function($) {
    var showAll, showTag;

    showTag = function(tag, table, reset) {
      $(table).find("a:not(:Contains(" + tag + "))").parent().parent().slideUp();
      $(table).find("a:Contains(" + tag + ")").parent().parent().slideDown();
      return reset.show();
    };
    showAll = function(table, reset) {
      $(table).find("tr").slideDown();
      return reset.hide();
    };
    this.showTag = function(tag) {
      return showTag(tag, $("#projects"), $("#reset"));
    };
    this.show = function() {
      return showAll($("#projects"), $("#reset"));
    };
    return $(function() {
      return show();
    });
  })(jQuery);

}).call(this);
