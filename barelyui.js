/**
 * The barely implemented UI you never needed.
 * @author Conjure Technologies <conjuretech@gmail.com>
 * @note Thank You! http://www.virgentech.com/blog/2009/10/building-object-oriented-jquery-plugin.html
 */

(function ($) {
    // Class definition
    var BarelyUI = function (element, options) {
        // Context element
        var elem = $(element);
        
        var settings = $.extend({
            param: 'defaultvalue'
        }, options || {});

        
        //this.foo = function () {}; // Public method
        //var.bar = function () {}; // Private method

        /**
         * Creates a jQuery object of a text box
         * @param {string} id Description
         * @param {string} prompt Description
         * @return {jQuery}
         */
        this.textbox = function (id, prompt) {
            return $('<label for="' + id + '">' + prompt + '</label><input type="text" id="' + id + '">');
        };

        /**
         * Creates a jQuery object of a check box
         * @param {string} id Description
         * @param {string} prompt Description
         * @return {jQuery}
         */
        this.checkbox = function (id, prompt) {
            return $('<input type="checkbox" id="' + id + '"><label for="' + id + '">' + prompt + '</label>');
        };

        /**
         * Creates a jQuery object of a radio button set
         * @param {string} id Description
         * @param {string prompt} Description
         * @param {array of strings} labels Description
         * @param {array of strings} values Description
         * @return {jQuery}
         */
        this.radio = function (id, prompt, labels, values) {
            /*var e = [];
            e[0] = $('<label for="' + id + '">' + prompt + '</label>');
            for (var i = 1; i <= labels.length; i++) { // <= because we pre-pended one
                e[i] = $('<input type="radio" id="' + ('' + id) + i + '" name="' + id + '" value="' + values[i - 1] + '">' +
                    '<label for="' + ('' + id) + i + '">' + labels[i - 1] + '</label>');
            }
            return e;*/
            var e = '<label for="' + id + '">' + prompt;
            for (var i = 1; i <= labels.length; i++) { // <= because we pre-pended one
                e += '<input type="radio" id="' + ('' + id) + i + '" name="' + id + '" value="' + values[i - 1] + '">' +
                    '<label for="' + ('' + id) + i + '">' + labels[i - 1] + '</label>';
            }
            e += '</label>';
            return e;
        };

        /**
         * Creates a jQuery object of a button
         * @param {string} id Description
         * @param {string} prompt Description
         * @return {jQuery}
         */
        this.button = function (id, prompt) {
            return $('<button type="button" id="' + id + '">' + prompt + '</button>')
        };

        /**
         * Creates a jQuery object of a window
         * @param {string} id Description
         * @param {string} title Description
         * @return {jQuery}
         */
        this.view = function (id, title) {
            return $('<article id=' + id + '>' +
                '   <header>' +
                '       <h3><em>' + title + '</em></h3>' +
                '   </header>' +
                '</article>');
        };

        // TODO Document component class
        var Component = function () {
            
            this.data = {};
            
            this.add = function () {
                
            };
            
            this.hide = function () {
            
            };
            
            this.show = function () {
            
            };
            
            this.remove = function () {
            
            };
            
            this.jQuery = function () {
                return this.data;
            };
        };
        
                
        // TODO Document panel class
        var Panel = function (id, title) {
            
            this.id = id;
            this.title = title;
            
            Component.call(this);
        
            this.data = $('<section id="' + this.id + '">' +
                         '   <div><a>' + this.title + '</a></div>' +
                         '	<form></form>' +
                         '</section>');
            
        };
        
        Panel.prototype = new Component();
        
        /**
         * Create a jQuery object of a panel
         * @param {string} id Description
         * @param {string} title Description
         * @return {jQuery}
         */
        this.panel = function (id, title) {
            return new Panel(id, title);
        };
        
    };
    
    // Add class to jQuery
    $.fn.extend({ BarelyUI: function () {
            var element = $(this);
    
            // Make object if this element doesn't already has a plugin instance
            if (!element.data('BarelyUI')) {
                // Store plugin object in this element's data
                element.data('BarelyUI', new BarelyUI(this));
            }
    
            return element.data('BarelyUI');
    
            // Below removed because this BarelyUI does plan to support collections
            /*return this.each(function () {
                var element = $(this);
    
                // Make object if this element doesn't already has a plugin instance
                if (!element.data('BarelyUI')) {
                    // Store plugin object in this element's data
                    element.data('BarelyUI', new BarelyUI(this));
                }
                
                return;
            });*/
        }
    });

})(jQuery);