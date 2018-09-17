module.exports = { contents: "var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _a, _b, _c;\r\nconst aurelia_framework_1 = require(\"aurelia-framework\");\r\nconst v_grid_1 = require(\"./v-grid\");\r\nconst interfaces_1 = require(\"../interfaces\");\r\nlet VGridContextmenu = class VGridContextmenu {\r\n    constructor(element, vGrid, targetInstruction) {\r\n        this.element = element;\r\n        this.vGrid = vGrid;\r\n        this.customMenuTemplates = targetInstruction.elementInstruction.menuTemplates;\r\n    }\r\n    bind() {\r\n        this.vGrid.customMenuTemplates = this.customMenuTemplates;\r\n    }\r\n};\r\nVGridContextmenu = __decorate([\r\n    aurelia_framework_1.noView(),\r\n    aurelia_framework_1.customElement('v-grid-contextmenu'),\r\n    aurelia_framework_1.processContent((compiler, resources, element, instruction) => {\r\n        compiler = compiler;\r\n        resources = resources;\r\n        instruction.menuTemplates = {};\r\n        let template;\r\n        let templateHTML;\r\n        template = element.getElementsByTagName('V-MENU-CLOSE')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.close = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-PINNED')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.pinned = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-GROUPBY')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.groupby = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-HIDE')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.hide = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-COPYPASTE')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.copypaste = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-CHOOSER')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.chooser = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-CHOOSER-OPTIONS')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.chooserOptions = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-SORT')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.sort = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-FILTER')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.filter = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-FILTER-OPTIONS')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.filterOptions = templateHTML;\r\n        }\r\n        template = element.getElementsByTagName('V-MENU-ALL')[0];\r\n        templateHTML = template ? template.innerHTML : null;\r\n        if (templateHTML !== '') {\r\n            instruction.menuTemplates.all = templateHTML;\r\n        }\r\n        element.innerHTML = '';\r\n    }),\r\n    aurelia_framework_1.inject(Element, v_grid_1.VGrid, aurelia_framework_1.TargetInstruction),\r\n    __metadata(\"design:paramtypes\", [typeof (_a = typeof Element !== \"undefined\" && Element) === \"function\" ? _a : Object, typeof (_b = typeof v_grid_1.VGrid !== \"undefined\" && v_grid_1.VGrid) === \"function\" ? _b : Object, typeof (_c = typeof interfaces_1.CustomTargetInstruction !== \"undefined\" && interfaces_1.CustomTargetInstruction) === \"function\" ? _c : Object])\r\n], VGridContextmenu);\r\nexports.VGridContextmenu = VGridContextmenu;\r\n//# sourceMappingURL=v-grid-contextmenu.js.map",
dependencies: ["aurelia-framework","./v-grid","../interfaces"],
sourceMap: {},
headerContent: undefined,
mtime: 1535657860162,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
