module.exports = { contents: "Object.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Controller {\r\n    constructor(vGrid) {\r\n        this.vGrid = vGrid;\r\n        this.element = vGrid.element;\r\n    }\r\n    getContext() {\r\n        const c = this.vGrid;\r\n        this.colConfig = c.colConfig;\r\n        this.backupColConfig = c.backupColConfig;\r\n        this.colRepeater = c.colRepeater;\r\n        this.colGroupRow = c.colGroupRow;\r\n        this.colGroupElement = c.colGroupElement;\r\n        this.colRepeatRowTemplate = c.colRepeatRowTemplate;\r\n        this.colRepeatRowHeaderTemplate = c.colRepeatRowHeaderTemplate;\r\n        this.customMenuTemplates = c.customMenuTemplates;\r\n        this.loadingScreenTemplate = c.loadingScreenTemplate;\r\n        this.footerTemplate = c.footerTemplate;\r\n        this.viewCompiler = c.viewCompiler;\r\n        this.container = c.container;\r\n        this.viewResources = c.viewResources;\r\n        this.taskQueue = c.taskQueue;\r\n        this.htmlCache = c.htmlCache;\r\n        this.htmlHeightWidth = c.htmlHeightWidth;\r\n        this.viewSlots = c.viewSlots;\r\n        this.columnBindingContext = c.columnBindingContext;\r\n        this.rowDataBinder = c.rowDataBinder;\r\n        this.mainMarkup = c.mainMarkup;\r\n        this.mainScrollEvents = c.mainScrollEvents;\r\n        this.rowMarkup = c.rowMarkup;\r\n        this.rowScrollEvents = c.rowScrollEvents;\r\n        this.rowClickHandler = c.rowClickHandler;\r\n        this.htmlcolumnMarkupCache = c.columnMarkup;\r\n        this.columnMarkup = c.columnMarkup;\r\n        this.groupingElements = c.groupingElements;\r\n        this.loadingScreen = c.loadingScreen;\r\n        this.contextMenu = c.contextMenu;\r\n        this.footer = c.footer;\r\n        this.bindingContext = c.bindingContext;\r\n        this.overrideContext = c.overrideContext;\r\n        this.attRowHeight = c.attRowHeight;\r\n        this.attHeaderHeight = c.attHeaderHeight;\r\n        this.attFooterHeight = c.attFooterHeight;\r\n        this.attPanelHeight = c.attPanelHeight;\r\n        this.attMultiSelect = c.attMultiSelect;\r\n        this.attManualSelection = c.attManualSelection;\r\n        this.attGridConnector = c.attGridConnector;\r\n        this.attOnRowDraw = c.attOnRowDraw;\r\n        this.attI18N = c.attI18N;\r\n        this.attDataDelay = c.attDataDelay;\r\n        this.attVariableRowHeight = c.attVariableRowHeight;\r\n        this.attSkipPassive = c.attSkipPassive;\r\n    }\r\n    triggerI18N() {\r\n        const keys = Object.keys({\r\n            close: 'Close',\r\n            pinLeft: 'Pin left',\r\n            pinRight: 'Pin Right',\r\n            groupBy: 'Group By',\r\n            sortAscending: 'Sort Ascending',\r\n            sortDescending: 'Sort Descending',\r\n            showAll: 'Show All',\r\n            clearCurrent: 'Clear Current',\r\n            clearAll: 'Clear All',\r\n            chooseOperator: 'Choose Operator',\r\n            back: 'Back',\r\n            equals: 'Equals',\r\n            lessThanOrEqual: 'Less than or equal',\r\n            greaterThanOrEqual: 'Greater than or equal',\r\n            lessThan: 'Less than',\r\n            greaterThan: 'Greater than',\r\n            contains: 'Contains',\r\n            notEqualTo: 'Not equal to',\r\n            doesNotContain: 'Does not contain',\r\n            beginsWith: 'Begins with',\r\n            endsWith: 'Ends with',\r\n            loading: 'loading'\r\n        });\r\n        if (this.attI18N) {\r\n            keys.forEach((key) => {\r\n                if (this.vGrid.filterOperatorTranslationKeys[key]) {\r\n                    this.vGrid.filterOperatorNames[this.vGrid.filterOperatorTranslationKeys[key]] =\r\n                        this.attI18N(key) || this.vGrid.filterOperatorNames[this.vGrid.filterOperatorTranslationKeys[key]];\r\n                }\r\n                this.contextMenu.updateMenuStrings(key, this.attI18N(key));\r\n            });\r\n            this.raiseEvent('filterTranslation', {});\r\n            const loading = this.attI18N('loading') || keys.loading;\r\n            this.loadingScreen.updateLoadingDefaultLoadingMessage(loading);\r\n        }\r\n    }\r\n    getRowHeightState() {\r\n        return this.attGridConnector.getRowHeightState();\r\n    }\r\n    createGrid() {\r\n        if (this.attI18N) {\r\n            this.triggerI18N();\r\n        }\r\n        this.htmlHeightWidth.addDefaultsAttributes(this.attHeaderHeight, this.attRowHeight, this.attFooterHeight, this.attPanelHeight);\r\n        this.htmlHeightWidth.setWidthFromColumnConfig(this.colConfig);\r\n        this.mainMarkup.generateMainMarkup();\r\n        this.htmlCache.updateMainMarkup();\r\n        this.rowDataBinder.init();\r\n        this.mainScrollEvents.init();\r\n        this.rowMarkup.init(this.attRowHeight);\r\n        this.htmlCache.updateRowsMarkup();\r\n        this.rowScrollEvents.init(this.attRowHeight, this.attDataDelay, this.attVariableRowHeight);\r\n        this.columnMarkup.init(this.colConfig, this.overrideContext, this.colRepeater, this.colRepeatRowTemplate, this.colRepeatRowHeaderTemplate, this.colGroupRow);\r\n        this.rowClickHandler.init(this.attMultiSelect, this.attManualSelection, this);\r\n        this.groupingElements.init(this, this.colGroupElement);\r\n        this.loadingScreen.init(this.overrideContext, this.loadingScreenTemplate);\r\n        this.footer.init(this.overrideContext, this.footerTemplate);\r\n        this.contextMenu.init(this.customMenuTemplates, this.overrideContext);\r\n    }\r\n    getElement(rowNumber, isDownScroll, callbackFN) {\r\n        this.attGridConnector.getElement({\r\n            row: rowNumber,\r\n            isDown: isDownScroll,\r\n            callback: (rowContext) => {\r\n                if (this.attOnRowDraw) {\r\n                    this.attOnRowDraw(rowContext);\r\n                }\r\n                callbackFN(rowContext);\r\n            }\r\n        });\r\n    }\r\n    expandGroup(id) {\r\n        this.attGridConnector.expandGroup(id);\r\n    }\r\n    collapseGroup(id) {\r\n        this.attGridConnector.collapseGroup(id);\r\n    }\r\n    select(row) {\r\n        this.attGridConnector.select(row);\r\n    }\r\n    updateRowData(attribute, data, rows) {\r\n        this.attGridConnector.updateRowData(attribute, data, rows);\r\n    }\r\n    addToGrouping(groupObj) {\r\n        const currentGrouping = this.attGridConnector.getGrouping();\r\n        let exist = false;\r\n        currentGrouping.forEach((group) => {\r\n            if (group.field === groupObj.field) {\r\n                exist = true;\r\n            }\r\n        });\r\n        if (!exist) {\r\n            currentGrouping.push(groupObj);\r\n            this.attGridConnector.group(currentGrouping, true);\r\n        }\r\n    }\r\n    removeFromGrouping(field) {\r\n        const currentGrouping = this.attGridConnector.getGrouping();\r\n        let index = -1;\r\n        currentGrouping.forEach((group, i) => {\r\n            if (field === group.field) {\r\n                index = i;\r\n            }\r\n        });\r\n        if (index !== -1) {\r\n            currentGrouping.splice(index, 1);\r\n            this.attGridConnector.group(currentGrouping, true);\r\n        }\r\n    }\r\n    getSelectionContext() {\r\n        const sel = this.attGridConnector.getSelection();\r\n        return sel;\r\n    }\r\n    raiseEvent(name, data = {}) {\r\n        const event = new CustomEvent(name, {\r\n            detail: data,\r\n            bubbles: true\r\n        });\r\n        this.element.dispatchEvent(event);\r\n    }\r\n    setLoadingScreen(value, msg, collectionLength) {\r\n        if (value) {\r\n            return this.loadingScreen.enable(msg, collectionLength);\r\n        }\r\n        else {\r\n            return this.loadingScreen.disable();\r\n        }\r\n    }\r\n    updateHeights() {\r\n        const totalRowHeight = this.htmlHeightWidth.getNewHeight(this.attGridConnector.getDatasourceLength());\r\n        const bodyHeight = this.htmlCache.avg_content_main.clientHeight;\r\n        if (bodyHeight < totalRowHeight) {\r\n            this.htmlCache.avg_content_vhandle.style.display = 'block';\r\n        }\r\n        else {\r\n            this.htmlCache.avg_content_vhandle.style.display = 'none';\r\n        }\r\n        this.rowScrollEvents.setCollectionLength(this.attGridConnector.getDatasourceLength());\r\n        this.htmlHeightWidth.setCollectionLength(this.attGridConnector.getDatasourceLength(), bodyHeight < totalRowHeight);\r\n    }\r\n    udateHorizontalScroller() {\r\n        const bodyWidth = this.htmlCache.avg_content_main.clientWidth;\r\n        const scrollWidth = this.htmlHeightWidth.avgContentMainScroll_Width;\r\n        if (bodyWidth < scrollWidth) {\r\n            this.htmlCache.avg_content_hhandle.style.display = 'block';\r\n            this.htmlHeightWidth.setCollectionLength(this.collectionLength(), true);\r\n        }\r\n        else {\r\n            this.htmlCache.avg_content_hhandle.style.display = 'none';\r\n            this.htmlHeightWidth.setCollectionLength(this.collectionLength(), false);\r\n        }\r\n    }\r\n    updateHeaderGrouping(groups) {\r\n        const length = groups.length;\r\n        this.columnBindingContext.setupgrouping = length;\r\n        if (length === 0) {\r\n            const groupings = this.groupingElements.getGroups();\r\n            groupings.forEach((group) => {\r\n                this.groupingElements.removeGroup(group.field);\r\n            });\r\n        }\r\n        else {\r\n            let check = true;\r\n            groups.forEach((group) => {\r\n                if (!this.groupingElements[group.field]) {\r\n                    check = false;\r\n                }\r\n            });\r\n            if (!check) {\r\n                const groupings = this.groupingElements.getGroups();\r\n                groupings.forEach((group) => {\r\n                    this.groupingElements.removeGroup(group);\r\n                });\r\n                groups.forEach((group) => {\r\n                    this.groupingElements.addGroup(group.title, group.field);\r\n                });\r\n            }\r\n        }\r\n        this.htmlHeightWidth.adjustWidthsColumns(this.columnBindingContext, length);\r\n    }\r\n    collectionLength() {\r\n        return this.attGridConnector.getDatasourceLength();\r\n    }\r\n    triggerScroll(position) {\r\n        if (position === null || position === undefined) {\r\n            position = this.htmlCache.avg_content_vhandle.scrollTop;\r\n        }\r\n        else {\r\n            this.htmlCache.avg_content_vhandle.scrollTop = position;\r\n            this.htmlCache.avg_content_left.scrollTop = position;\r\n            this.htmlCache.avg_content_main.scrollTop = position;\r\n            this.htmlCache.avg_content_right.scrollTop = position;\r\n        }\r\n        this.raiseEvent('avg-scroll', {\r\n            isScrollBarScrolling: true,\r\n            isDown: true,\r\n            newTopPosition: position\r\n        });\r\n    }\r\n    getTopRow() {\r\n        const position = this.htmlCache.avg_content_vhandle.scrollTop;\r\n        return Math.floor(position / this.attRowHeight);\r\n    }\r\n    rebindAllRows() {\r\n        this.raiseEvent('avg-rebind-all-rows', {\r\n            rowCache: this.htmlCache.rowCache,\r\n            downScroll: true\r\n        });\r\n    }\r\n    getColumnConfig() {\r\n        const colContext = this.columnBindingContext;\r\n        const tempArray = [];\r\n        for (let i = 0; i < this.colConfig.length; i++) {\r\n            switch (true) {\r\n                case colContext.setupleft[i].show:\r\n                    tempArray.push({\r\n                        no: i,\r\n                        set: 1,\r\n                        colPinLeft: true,\r\n                        colPinRight: false,\r\n                        left: colContext.setupleft[i].left - 10000,\r\n                        width: colContext.setupleft[i].width\r\n                    });\r\n                    break;\r\n                case colContext.setupmain[i].show:\r\n                    tempArray.push({\r\n                        no: i,\r\n                        set: 2,\r\n                        colPinLeft: false,\r\n                        colPinRight: false,\r\n                        left: colContext.setupmain[i].left,\r\n                        width: colContext.setupmain[i].width\r\n                    });\r\n                    break;\r\n                case colContext.setupright[i].show:\r\n                    tempArray.push({\r\n                        no: i,\r\n                        set: 3,\r\n                        colPinLeft: false,\r\n                        colPinRight: true,\r\n                        left: colContext.setupright[i].left + 10000,\r\n                        width: colContext.setupright[i].width\r\n                    });\r\n                    break;\r\n                default:\r\n                    tempArray.push({\r\n                        no: i,\r\n                        set: 2,\r\n                        colHidden: true,\r\n                        colPinLeft: false,\r\n                        colPinRight: false,\r\n                        left: colContext.setupmain[i].left,\r\n                        width: colContext.setupmain[i].width\r\n                    });\r\n            }\r\n        }\r\n        const newColConfig = [];\r\n        this.colConfig.forEach((col, i) => {\r\n            const temp = {\r\n                colWidth: tempArray[i].width,\r\n                colRowTemplate: col.colRowTemplate,\r\n                colHeaderTemplate: col.colHeaderTemplate,\r\n                colField: col.colField ? col.colField.replace('rowRef.', '') : col.colField,\r\n                colPinLeft: tempArray[i].colPinLeft,\r\n                colPinRight: tempArray[i].colPinRight,\r\n                colHeaderName: col.colHeaderName,\r\n                colAddLabelAttributes: col.colAddLabelAttributes,\r\n                colAddFilterAttributes: col.colAddFilterAttributes,\r\n                colAddRowAttributes: col.colAddRowAttributes,\r\n                colFilterMenu: col.colFilterMenu,\r\n                colLabelMenu: col.colLabelMenu,\r\n                colRowMenu: col.colRowMenu,\r\n                colHidden: tempArray[i].colHidden ? true : false,\r\n                colDragDrop: col.colDragDrop,\r\n                colResizeable: col.colResizeable,\r\n                colSort: col.colSort,\r\n                colDisplayEdit: col.colDisplayEdit,\r\n                colFilter: col.colFilter,\r\n                colFilterTop: col.colFilterTop,\r\n                colCss: col.colCss,\r\n                colType: col.colType,\r\n                __colSortHelper: tempArray[i].left\r\n            };\r\n            newColConfig.push(temp);\r\n        });\r\n        newColConfig.sort((a, b) => {\r\n            return a.__colSortHelper - b.__colSortHelper;\r\n        });\r\n        return newColConfig;\r\n    }\r\n    setColumnConfig(colConfig) {\r\n        const length = this.columnBindingContext.setupgrouping;\r\n        this.viewSlots.unbindAndDetachColumns();\r\n        this.columnBindingContext.clear();\r\n        this.viewSlots.clear();\r\n        this.colConfig = colConfig || this.backupColConfig;\r\n        this.columnMarkup.init(this.colConfig, this.overrideContext, this.colRepeater, this.colRepeatRowTemplate, this.colRepeatRowHeaderTemplate, this.colGroupRow);\r\n        this.viewSlots.bindAndAttachColumns(this.overrideContext, this.columnBindingContext, this.attGridConnector.getSelection());\r\n        this.htmlHeightWidth.setWidthFromColumnConfig(this.colConfig);\r\n        this.columnBindingContext.setupgrouping = length;\r\n        this.htmlHeightWidth.adjustWidthsColumns(this.columnBindingContext, length);\r\n        this.udateHorizontalScroller();\r\n        this.rebindAllRows();\r\n    }\r\n}\r\nexports.Controller = Controller;\r\n//# sourceMappingURL=controller.js.map",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1535657860153,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
