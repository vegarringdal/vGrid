"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var RowMarkup;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("RowMarkup", RowMarkup = function () {
                function RowMarkup(element, htmlCache) {
                    _classCallCheck(this, RowMarkup);

                    this.element = element;
                    this.htmlCache = htmlCache;
                }

                RowMarkup.prototype.updateInternalHtmlCache = function updateInternalHtmlCache() {
                    this.left = this.htmlCache.avg_content_left_scroll;
                    this.main = this.htmlCache.avg_content_main_scroll;
                    this.right = this.htmlCache.avg_content_right_scroll;
                    this.full = this.htmlCache.avg_content_group_scroll;
                };

                RowMarkup.prototype.init = function init(rowHeight) {
                    this.rowHeight = rowHeight;
                    this.updateInternalHtmlCache();
                    this.generateRows();
                };

                RowMarkup.prototype.generateRows = function generateRows() {

                    var markupLeft = "";
                    var markupMain = "";
                    var markupRight = "";
                    var markupGroup = "";

                    for (var i = 0; i < 40; i++) {

                        var translateY = this.rowHeight * i;

                        var avgRowMarkup = "<avg-row class=\"avg-row\" style=\"height:" + this.rowHeight + "px; transform:translate3d(0px, " + translateY + "px, 0px);z-index:5;\" row=\"" + i + "\"></avg-row>";
                        var avgRowMarkupGroup = "<avg-row class=\"avg-row-helper\" style=\"height:" + this.rowHeight + "px; transform:translate3d(0px, " + translateY + "px, 0px);z-index:5;\" row=\"" + i + "\"></avg-row>";

                        markupLeft = markupLeft + avgRowMarkup;
                        markupMain = markupMain + avgRowMarkup;
                        markupRight = markupRight + avgRowMarkup;
                        markupGroup = markupGroup + avgRowMarkupGroup;
                    }

                    this.left.innerHTML = markupLeft;
                    this.main.innerHTML = markupLeft;
                    this.right.innerHTML = markupLeft;
                    this.full.innerHTML = markupGroup;
                };

                return RowMarkup;
            }());

            _export("RowMarkup", RowMarkup);
        }
    };
});
//# sourceMappingURL=rowMarkup.js.map