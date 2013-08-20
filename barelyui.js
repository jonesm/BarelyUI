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

        // TODO Document component class
        var Component = function () {
            
            var id;
            var prompt;
            var data = {};
            var ctx;
            
            this.add = function (component, newRow) {
                this.ctx.append(component.jQuery());
                if (typeof newRow == 'undefined') { this.ctx.append('<br>') };
                return this;
            };
            
            this.hide = function () {
                console.log(this.data);
                this.data.hide();
                return this;
            };
            
            this.show = function () {
                this.data.show();
                return this;
            };
            
            this.remove = function () {
                this.data.remove();
                this.data = null;
                return null;
            };
            
            this.addAction = function (name, event) {
                this.ctx.on(name, event);
                return this;
            }

            this.disableAction = function (name, event) {
                if (typeof event != 'undefined') {
                    this.ctx.off(name, event);
                } else {
                    this.ctx.off(name);
                }
                return this;
            }
            
            this.value = function () {};
            
            this.jQuery = function () {
                return this.data;
            };
        };
        
        var settings = $.extend({
            param: 'defaultvalue'
        }, options || {});

        this.add = function (component) {
            elem.append(component.jQuery());
            return this;            
        };
        
        //this.foo = function () {}; // Public method
        //var.bar = function () {}; // Private method

        /**
         * Creates a jQuery object of a text box
         * @param {string} id Description
         * @param {string} prompt Description
         * @return {jQuery}
         */
        this.textbox = function (id, prompt) {

            // TODO Document panel class
            var Textbox = function (id, prompt) {
                
                this.id = id;
                this.prompt = prompt;
                
                Component.call(this);
            
                this.data = $('<label for="' + id + '">' + prompt + '</label><input type="text" id="' + id + '">');
                this.ctx = $(this.data[1]);
                
                this.value = function (val) {
                    if (val) {
                        $(this.data[1]).val(val);
                    }
                    return $(this.data[1]).val();
                }
                
                // Prevent adding
                var add = function () {};
                
            };
            
            Textbox.prototype = new Component();
            
            return new Textbox(id, prompt);
        };

        /**
         * Creates a jQuery object of a check box
         * @param {string} id Description
         * @param {string} prompt Description
         * @return {jQuery}
         */
        this.checkbox = function (id, prompt) {
            
            // TODO Document panel class
            var Checkbox = function (id, prompt) {
                
                this.id = id;
                this.prompt = prompt;
                
                Component.call(this);
            
                this.data = $('<input type="checkbox" id="' + id + '"><label for="' + id + '">' + prompt + '</label>');
                this.ctx = $(this.data[0]);
                
                this.value = function (toggle) {
                    if (toggle) {
                        $(this.data[0]).trigger('click');
                    }
                    return $(this.data[0]).prop('checked');
                };
                
                this.show = function () {
                    this.data.show();
                    $(this.data[0]).hide();
                    return this;
                }
                
                // Prevent adding
                var add = function () {};
                
            };
            
            Checkbox.prototype = new Component();            
            
            return new Checkbox(id, prompt);
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
            
            // TODO Document panel class
            var Radio = function (id, prompt) {
                
                this.id = id;
                this.prompt = prompt;
                
                Component.call(this);

                var e = '<label for="' + id + '">' + prompt;
                for (var i = 1; i <= labels.length; i++) { // <= because we pre-pended one
                    e += '<input type="radio" id="' + ('' + id) + i + '" name="' + id + '" value="' + values[i - 1] + '">' +
                        '<label for="' + ('' + id) + i + '">' + labels[i - 1] + '</label>';
                }
                e += '</label>';
                
                this.data = $(e);
                this.ctx = this.data;
                
                this.value = function (val) {
                  if (val) {
                    $(this.data).find('[value="' + val + '"]').trigger('click');
                  }
                  return this.data.find("input:radio:checked").val();
                };
                
                // Prevent adding
                var add = function () {};
                
            };
            
            Radio.prototype = new Component();            
            
            return new Radio(id, prompt);
        };

        /**
         * Creates a jQuery object of a button
         * @param {string} id Description
         * @param {string} prompt Description
         * @return {jQuery}
         */
        this.button = function (id, prompt) {
            
            // TODO Document panel class
            var Button = function (id, prompt) {
                
                this.id = id;
                this.prompt = prompt;
                
                Component.call(this);
            
                this.data = $('<button type="button" id="' + id + '">' + prompt + '</button>');
                this.ctx = this.data;
                
                
                
                // Prevent adding
                var add = function () {};
                
            };
            
            Button.prototype = new Component();
            
            return new Button(id, prompt);
        };

        /**
         * Creates a jQuery object of a window
         * @param {string} id Description
         * @param {string} title Description
         * @return {jQuery}
         */
        this.view = function (id, title) {

            // TODO Document view class
            var View = function (id, title) {
                
                this.id = id;
                this.title = title;
                
                Component.call(this);
            
                this.data = $('<article id=' + id + '>' +
                    '   <header>' +
                    '       <h3><em>' + title + '</em></h3>' +
                    '   </header>' +
                    '</article>');
                this.ctx = this.data;
                
            };
            
            View.prototype = new Component();
            
            return new View(id, title);
        };
        
        /**
         * Create a jQuery object of a panel
         * @param {string} id Description
         * @param {string} title Description
         * @return {jQuery}
         */
        this.panel = function (id, title) {
            
            // TODO Document panel class
            var Panel = function (id, title) {
                
                this.id = id;
                this.title = title;
                
                Component.call(this);
            
                this.data = $('<section id="' + this.id + '">' +
                             '   <div><a>' + this.title + '</a></div>' +
                             '	<form></form>' +
                             '</section>');
                this.ctx = $(this.data).find('form');
                
                this.top = function (px) {
                    if (typeof px != 'undefined') {
                        this.data.offset({ top: px });
                    }
                    return this.data.offset().top;
                };
                
                this.left = function (px) {
                    if (typeof px != 'undefined') {
                        this.data.offset({ left: px });
                    }
                    return this.data.offset().left;
                };
                
                this.width = function (px) {
                    if (typeof px != 'undefined') {
                        this.data.width(px);
                    }
                    return this.data.width();
                };
                
                this.height = function (px) {
                    if (typeof px != 'undefined') {
                        this.data.height(px);
                    }
                    return this.data.height();
                };
                
                this.focus = function () {
                    var max = 0;
                    $(this.data).parent().find('section').each(function () {
                        // Find the current z-index value
                        var z = parseInt($(this).css('z-index'), 10);
                        if (isNaN(z)) { z = 0; }
                        // Keep either the current max, or the current z-index, whichever is higher
                        max = Math.max(max, z);
                    });
                    $(this.data).css('z-index', max + 1);
                    return this;
                };
                
            };
            
            Panel.prototype = new Component();
            
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
