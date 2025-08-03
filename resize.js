(function($) {
var jQueryaffectedElements = jQuery(".entry-content p, .entry-content div, .entry-content span");

jQueryaffectedElements.each( function(){
  var jQuerythis = jQuery(this);
  jQuerythis.data("orig-size",jQuerythis.css("font-size") );
});

jQuery("#btn-increase_wp_font_rp").click(function(){
  changeFontSize(1);
})

jQuery("#btn-decrease_wp_font_rp").click(function(){
  changeFontSize(-1);
})

jQuery("#btn-orig_wp_font_rp").click(function(){
  jQueryaffectedElements.each( function(){
        var jQuerythis = jQuery(this);
        jQuerythis.css( "font-size" , jQuerythis.data("orig-size") );
   });
})
function changeFontSize(direction){
    jQueryaffectedElements.each( function(){
        var jQuerythis = jQuery(this);
        jQuerythis.css( "font-size" , parseInt(jQuerythis.css("font-size"))+direction );
    });
}

})(jQuery);