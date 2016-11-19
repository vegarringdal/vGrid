System.register(["aurelia-framework"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, GroupContext, GroupingElements;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            GroupContext = (function () {
                function GroupContext(name, field, groupingElements) {
                    this.name = name;
                    this.field = field;
                    this.groupingElements = groupingElements;
                }
                GroupContext.prototype.remove = function () {
                    this.groupingElements.removeGroup(this.name);
                    this.groupingElements.removeFromGrouping(this.field);
                };
                return GroupContext;
            }());
            GroupingElements = (function () {
                function GroupingElements(element, viewCompiler, container, viewResources, htmlCache, viewSlots, columnBindingContext) {
                    this.element = element;
                    this.htmlCache = htmlCache;
                    this.viewSlots = viewSlots;
                    this.viewCompiler = viewCompiler;
                    this.container = container;
                    this.viewResources = viewResources;
                    this.columnBindingContext = columnBindingContext;
                    this.groupContext = {};
                    this.lastAdded = null;
                }
                GroupingElements.prototype.init = function (controller, colGroupElement) {
                    this.controller = controller;
                    this.avgTopPanel = this.htmlCache.avg_top_panel;
                    this.colGroupElement = colGroupElement;
                };
                GroupingElements.prototype.addGroup = function (name, field) {
                    if (!this.groupContext[name]) {
                        this.lastAdded = name;
                        this.groupContext[name] = new GroupContext(name, field, this);
                        var viewMarkup = this.colGroupElement ||
                            "<div class=\"avg-grouping\">\n                    <p v-sort=\"field:" + field + "\">" + name + "</p>\n                    <p>&nbsp;&nbsp;\n                        <i click.delegate=\"remove()\" class=\"avg-fa avg-fa-times-circle-o\" aria-hidden=\"true\"></i>\n                    </p>\n                </div>";
                        var viewFactory = this.viewCompiler.compile("<template>" + viewMarkup + "</template>", this.viewResources);
                        var view = viewFactory.create(this.container);
                        var viewSlot = new aurelia_framework_1.ViewSlot(this.avgTopPanel, true);
                        viewSlot.add(view);
                        this.groupContext[name].viewSlot = viewSlot;
                        this.viewSlots.groupingViewSlots.push(this.groupContext[name]);
                    }
                    this.groupContext[name].viewSlot.bind(this.groupContext[name]);
                    this.groupContext[name].viewSlot.attached();
                };
                GroupingElements.prototype.removeGroup = function (name) {
                    if (name) {
                        this.groupContext[name].viewSlot.unbind();
                        this.groupContext[name].viewSlot.detached();
                        this.groupContext[name].viewSlot.removeAll();
                        this.groupContext[name] = null;
                    }
                    else {
                        if (this.lastAdded) {
                            this.groupContext[this.lastAdded].viewSlot.unbind();
                            this.groupContext[this.lastAdded].viewSlot.detached();
                            this.groupContext[this.lastAdded].viewSlot.removeAll();
                            this.groupContext[this.lastAdded] = null;
                            this.lastAdded = null;
                        }
                    }
                };
                GroupingElements.prototype.addToGrouping = function () {
                    if (this.lastAdded) {
                        var toAdd = this.groupContext[this.lastAdded].field;
                        this.controller.addToGrouping(toAdd);
                        this.lastAdded = null;
                    }
                };
                GroupingElements.prototype.removeFromGrouping = function (field) {
                    this.controller.removeFromGrouping(field);
                };
                return GroupingElements;
            }());
            exports_1("GroupingElements", GroupingElements);
        }
    };
});

//# sourceMappingURL=groupingElements.js.map
