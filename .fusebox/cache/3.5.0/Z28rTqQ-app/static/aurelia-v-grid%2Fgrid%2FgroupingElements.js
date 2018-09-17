module.exports = { contents: "Object.defineProperty(exports, \"__esModule\", { value: true });\r\nconst aurelia_framework_1 = require(\"aurelia-framework\");\r\nclass GroupContext {\r\n    constructor(name, field, groupingElements) {\r\n        this.name = name;\r\n        this.field = field;\r\n        this.groupingElements = groupingElements;\r\n    }\r\n    remove() {\r\n        this.groupingElements.removeGroup(this.field);\r\n        this.groupingElements.removeFromGrouping(this.field);\r\n    }\r\n}\r\nclass GroupingElements {\r\n    constructor(element, viewCompiler, container, viewResources, htmlCache, viewSlots, columnBindingContext) {\r\n        this.element = element;\r\n        this.htmlCache = htmlCache;\r\n        this.viewSlots = viewSlots;\r\n        this.viewCompiler = viewCompiler;\r\n        this.container = container;\r\n        this.viewResources = viewResources;\r\n        this.columnBindingContext = columnBindingContext;\r\n        this.groupContext = {};\r\n        this.lastAdded = null;\r\n    }\r\n    getGroups() {\r\n        const x = [];\r\n        for (const i in this.groupContext) {\r\n            if (i) {\r\n                x.push(i);\r\n            }\r\n        }\r\n        return x;\r\n    }\r\n    init(controller, colGroupElement) {\r\n        this.controller = controller;\r\n        this.avgTopPanel = this.htmlCache.avg_top_panel;\r\n        this.colGroupElement = colGroupElement;\r\n    }\r\n    addGroup(name, field) {\r\n        if (!this.groupContext[field]) {\r\n            this.lastAdded = field;\r\n            this.groupContext[field] = new GroupContext(name, field, this);\r\n            const viewMarkup = this.colGroupElement ||\r\n                `<div class=\"avg-grouping\">\r\n          <p class=\"avg-grouping-element\" v-sort=\"field.bind:field\">${name}\r\n            <i><svg click.delegate=\"remove()\" class=\"icon iconhidden\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\r\n              <path d=\"M3 4l4.3 4L3 12h1.4L8 8.7l3.5 3.3H13L8.6 8 13 4h-1.5L8 7.3 4.4 4H3z\"/>\r\n            </svg></i>\r\n          </p>\r\n         </div>`;\r\n            const viewFactory = this.viewCompiler.compile(`<template>${viewMarkup}</template>`, this.viewResources);\r\n            const view = viewFactory.create(this.container);\r\n            const viewSlot = new aurelia_framework_1.ViewSlot(this.avgTopPanel, true);\r\n            viewSlot.add(view);\r\n            this.groupContext[field].viewSlot = viewSlot;\r\n            this.viewSlots.groupingViewSlots.push(this.groupContext[field]);\r\n        }\r\n        this.groupContext[field].viewSlot.bind(this.groupContext[field]);\r\n        this.groupContext[field].viewSlot.attached();\r\n    }\r\n    removeGroup(field) {\r\n        if (field) {\r\n            if (this.groupContext[field] !== null) {\r\n                this.groupContext[field].viewSlot.unbind();\r\n                this.groupContext[field].viewSlot.detached();\r\n                this.groupContext[field].viewSlot.removeAll();\r\n                this.groupContext[field] = null;\r\n            }\r\n        }\r\n        else {\r\n            if (this.lastAdded) {\r\n                if (this.groupContext[this.lastAdded] !== null) {\r\n                    this.groupContext[this.lastAdded].viewSlot.unbind();\r\n                    this.groupContext[this.lastAdded].viewSlot.detached();\r\n                    this.groupContext[this.lastAdded].viewSlot.removeAll();\r\n                    this.groupContext[this.lastAdded] = null;\r\n                    this.lastAdded = null;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    addToGrouping() {\r\n        if (this.lastAdded) {\r\n            const toAddField = this.groupContext[this.lastAdded].field;\r\n            const toAddTitle = this.groupContext[this.lastAdded].name;\r\n            this.controller.addToGrouping({ field: toAddField, title: toAddTitle });\r\n            this.lastAdded = null;\r\n        }\r\n    }\r\n    removeFromGrouping(field) {\r\n        this.controller.removeFromGrouping(field);\r\n    }\r\n}\r\nexports.GroupingElements = GroupingElements;\r\n//# sourceMappingURL=groupingElements.js.map",
dependencies: ["aurelia-framework"],
sourceMap: {},
headerContent: undefined,
mtime: 1535657860154,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
