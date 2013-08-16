/**
 * The barely implemented UI you never needed.
 * @author Conjure Technologies <conjuretech@gmail.com>
 * @note Thank You! http://www.virgentech.com/blog/2009/10/building-object-oriented-jquery-plugin.html
 */

(function ($) {
    // Class definition
    var BarelyUI = function (element) {
        // Contexture element
        var elem = $(element);
        var obj = this;

        this.test = function () {
            console.log('barelyUI!');
        };
    };

    // Add class to jQuery
    $.fn.barelyUI = function () {
        return this.each(function () {
            var element = $(this);
            
            // Return early if this element already has a plugin instance
            if (element.data('barelyUI')) { return; }
            
            var barelyUI = new BarelyUI(this);
            
            // Store plugin object in this element's data
            element.data('barelyUI', barelyUI);
        });
    };

})(jQuery);