module.exports = { contents: "Object.defineProperty(exports, \"__esModule\", { value: true });\r\nclass RowScrollEvents {\r\n    constructor(element, htmlCache, controller) {\r\n        this.htmlCache = htmlCache;\r\n        this.element = element;\r\n        this.controller = controller;\r\n        this.timer = null;\r\n        this.largeScroll = false;\r\n        this.collectionLength = 0;\r\n        this.largeScrollUpdateDelay = 0;\r\n    }\r\n    init(rowHeight, attDataDelay, attVariableRowHeight) {\r\n        this.rowCache = this.htmlCache.rowCache;\r\n        this.largeScrollUpdateDelay = attDataDelay;\r\n        this.rowHeight = rowHeight;\r\n        this.updateInternalHtmlCache();\r\n        this.createRowCache();\r\n        if (attVariableRowHeight) {\r\n            this.scrollNormal = this.scrollNormalVariableRowHeight.bind(this);\r\n            this.scrollScrollBar = this.scrollScrollBarVariableRowHeight.bind(this);\r\n        }\r\n        this.addEventListener();\r\n    }\r\n    setCollectionLength(length) {\r\n        this.collectionLength = length;\r\n    }\r\n    createRowCache() {\r\n        for (let i = 0; i < this.cacheLength; i++) {\r\n            this.rowCache.push({\r\n                left: this.leftRows[i],\r\n                main: this.mainRows[i],\r\n                right: this.rightRows[i],\r\n                group: this.groupRows[i],\r\n                top: this.rowHeight * i,\r\n                row: i\r\n            });\r\n        }\r\n    }\r\n    updateInternalHtmlCache() {\r\n        this.left = this.htmlCache.avg_content_left_scroll;\r\n        this.main = this.htmlCache.avg_content_main_scroll;\r\n        this.right = this.htmlCache.avg_content_right_scroll;\r\n        this.scroller = this.htmlCache.avg_content_right_scroll;\r\n        this.leftRows = this.htmlCache.avg_left_rows;\r\n        this.mainRows = this.htmlCache.avg_main_rows;\r\n        this.rightRows = this.htmlCache.avg_right_rows;\r\n        this.groupRows = this.htmlCache.avg_group_rows;\r\n        this.cacheLength = this.leftRows.length;\r\n    }\r\n    get contentHeight() {\r\n        return this.htmlCache.avg_content_main.offsetHeight;\r\n    }\r\n    onScroll(event) {\r\n        let isDown = event.detail.isDown;\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n        let isScrollBarScrolling = event.detail.isScrollBarScrolling;\r\n        let newTopPosition = event.detail.newTopPosition;\r\n        if (this.largeScroll || isScrollBarScrolling) {\r\n            if (this.largeScrollUpdateDelay) {\r\n                clearTimeout(this.timer);\r\n                this.largeScroll = true;\r\n                this.timer = setTimeout(() => {\r\n                    this.largeScroll = false;\r\n                    this.scrollScrollBar(newTopPosition, isDown);\r\n                }, this.largeScrollUpdateDelay);\r\n            }\r\n            else {\r\n                this.scrollScrollBar(newTopPosition, isDown);\r\n            }\r\n        }\r\n        else {\r\n            switch (true) {\r\n                case isDown && !isScrollBarScrolling:\r\n                    this.scrollNormal(newTopPosition, true);\r\n                    break;\r\n                case !isDown && !isScrollBarScrolling:\r\n                    this.scrollNormal(newTopPosition, false);\r\n                    break;\r\n                default:\r\n            }\r\n        }\r\n    }\r\n    setRowTopValue(cache, top) {\r\n        cache.left.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.main.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.right.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.group.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.top = top;\r\n        cache.row = Math.floor(top / this.rowHeight);\r\n    }\r\n    setRowTopValueVariableRowHeight(cache, top) {\r\n        cache.left.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.main.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.right.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.group.style.transform = `translate3d(0px,${top}px, 0px)`;\r\n        cache.top = top;\r\n        let rowHeightState = this.controller.getRowHeightState();\r\n        cache.row = rowHeightState.top.indexOf(top);\r\n    }\r\n    scrollNormal(newTopPosition, downScroll) {\r\n        let rowHeight = this.rowHeight;\r\n        let currentRow = Math.floor(newTopPosition / rowHeight);\r\n        let cacheHeight = rowHeight * this.cacheLength;\r\n        for (let i = 0; i < this.cacheLength; i++) {\r\n            let cache = this.rowCache[i];\r\n            let top = this.rowCache[i].top;\r\n            let update = false;\r\n            let newTop;\r\n            if (!downScroll) {\r\n                if (top > (newTopPosition + this.contentHeight)) {\r\n                    update = true;\r\n                    newTop = top - cacheHeight;\r\n                    currentRow = (top - cacheHeight) / rowHeight;\r\n                }\r\n            }\r\n            else {\r\n                if (top < (newTopPosition - rowHeight)) {\r\n                    update = true;\r\n                    newTop = top + cacheHeight;\r\n                    currentRow = (top + cacheHeight) / rowHeight;\r\n                }\r\n            }\r\n            if (update === true && currentRow >= 0 && currentRow <= this.collectionLength - 1) {\r\n                this.setRowTopValue(cache, newTop);\r\n                this.triggerRebindRowEvent(currentRow, cache, downScroll);\r\n            }\r\n        }\r\n        this.rowCache.sort((a, b) => {\r\n            return a.row - b.row;\r\n        });\r\n    }\r\n    scrollScrollBar(newTopPosition, downScroll) {\r\n        if (this.collectionLength <= this.cacheLength) {\r\n            newTopPosition = 0;\r\n        }\r\n        let rowHeight = this.rowHeight;\r\n        let bodyHeight = this.contentHeight;\r\n        let currentRow = Math.floor(newTopPosition / rowHeight);\r\n        let firstRow = Math.floor(newTopPosition / rowHeight);\r\n        let currentRowTop = rowHeight * currentRow;\r\n        let firstRowTop = rowHeight * firstRow;\r\n        let collectionLength = this.collectionLength;\r\n        let setAfter = (no) => {\r\n            let row = this.rowCache[no];\r\n            this.setRowTopValue(row, currentRowTop);\r\n            currentRowTop = currentRowTop + rowHeight;\r\n        };\r\n        let setBefore = (no) => {\r\n            let row = this.rowCache[no];\r\n            firstRowTop = firstRowTop - rowHeight;\r\n            this.setRowTopValue(row, firstRowTop);\r\n        };\r\n        let setHiddenFromView = (no) => {\r\n            let row = this.rowCache[no];\r\n            this.setRowTopValue(row, -(currentRowTop + (rowHeight * 50)));\r\n        };\r\n        for (let i = 0; i < this.cacheLength; i++) {\r\n            let moved = false;\r\n            switch (true) {\r\n                case currentRow >= 0 && currentRow <= collectionLength - 1:\r\n                    setAfter(i);\r\n                    moved = true;\r\n                    break;\r\n                case currentRow >= collectionLength && (collectionLength * rowHeight) >= bodyHeight:\r\n                    setBefore(i);\r\n                    moved = true;\r\n                    break;\r\n                default:\r\n            }\r\n            if (!moved) {\r\n                if (currentRow >= collectionLength && (currentRowTop - rowHeight) >= bodyHeight) {\r\n                    setHiddenFromView(i);\r\n                }\r\n                else {\r\n                    if (currentRow >= collectionLength) {\r\n                        setHiddenFromView(i);\r\n                    }\r\n                }\r\n            }\r\n            currentRow++;\r\n        }\r\n        this.rowCache.sort((a, b) => {\r\n            return a.row - b.row;\r\n        });\r\n        this.triggerRebindAllRowsEvent(downScroll, this.rowCache);\r\n    }\r\n    setRowHeight(rowElement, rowNo) {\r\n        let rowHeightState = this.controller.getRowHeightState();\r\n        rowElement.left.style.height = rowHeightState.rows[rowNo] + 'px';\r\n        rowElement.main.style.height = rowHeightState.rows[rowNo] + 'px';\r\n        rowElement.right.style.height = rowHeightState.rows[rowNo] + 'px';\r\n        rowElement.group.style.height = rowHeightState.rows[rowNo] + 'px';\r\n    }\r\n    scrollNormalVariableRowHeight(newTopPosition, downScroll) {\r\n        let rowHeightState = this.controller.getRowHeightState();\r\n        for (let i = 0; i < this.cacheLength; i++) {\r\n            let cache = this.rowCache[i];\r\n            let top = this.rowCache[i].top;\r\n            let currentRow = rowHeightState.top.indexOf(top);\r\n            this.setRowHeight(this.rowCache[i], currentRow);\r\n            let update = false;\r\n            let newTop;\r\n            if (!downScroll) {\r\n                if (top > (newTopPosition + this.contentHeight)) {\r\n                    currentRow = currentRow - this.cacheLength;\r\n                    if (currentRow > -1) {\r\n                        update = true;\r\n                        newTop = rowHeightState.top[currentRow];\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                if (top < (newTopPosition - rowHeightState.rows[currentRow])) {\r\n                    update = true;\r\n                    newTop = rowHeightState.top[currentRow + this.cacheLength];\r\n                    currentRow = currentRow + this.cacheLength;\r\n                }\r\n            }\r\n            if (update === true && currentRow >= 0 && currentRow <= this.collectionLength - 1) {\r\n                this.setRowTopValueVariableRowHeight(cache, newTop);\r\n                this.triggerRebindRowEvent(currentRow, cache, downScroll);\r\n            }\r\n        }\r\n        this.rowCache.sort((a, b) => {\r\n            return a.row - b.row;\r\n        });\r\n    }\r\n    scrollScrollBarVariableRowHeight(newTopPosition, downScroll) {\r\n        if (this.collectionLength <= this.cacheLength) {\r\n            newTopPosition = 0;\r\n        }\r\n        let rowHeightState = this.controller.getRowHeightState();\r\n        let x = 1000;\r\n        let currentRow = 0;\r\n        let currentRowTop = 0;\r\n        let firstRow = 0;\r\n        let i = 0;\r\n        let run = true;\r\n        if (newTopPosition !== 0) {\r\n            while (i < rowHeightState.top.length) {\r\n                let checkValue = Math.abs(newTopPosition - (rowHeightState.top[i]));\r\n                if (checkValue === x) {\r\n                    currentRow = i - 1;\r\n                    firstRow = i - 1;\r\n                    run = false;\r\n                }\r\n                else {\r\n                    if (checkValue < x) {\r\n                        currentRow = i - 1;\r\n                        firstRow = i - 1;\r\n                        x = checkValue;\r\n                    }\r\n                }\r\n                i++;\r\n            }\r\n        }\r\n        let bodyHeight = this.contentHeight;\r\n        currentRowTop = rowHeightState.top[currentRow];\r\n        let firstRowTop = currentRowTop * 1;\r\n        let collectionLength = this.collectionLength;\r\n        let setAfter = (no) => {\r\n            let row = this.rowCache[no];\r\n            this.setRowHeight(row, currentRow);\r\n            this.setRowTopValueVariableRowHeight(row, currentRowTop);\r\n            row.row = currentRow;\r\n            currentRowTop = currentRowTop + rowHeightState.rows[currentRow];\r\n        };\r\n        let setBefore = (no) => {\r\n            let row = this.rowCache[no];\r\n            firstRow--;\r\n            firstRowTop = firstRowTop - rowHeightState.rows[firstRow];\r\n            this.setRowHeight(row, rowHeightState.top[firstRow]);\r\n            this.setRowTopValueVariableRowHeight(row, firstRowTop);\r\n        };\r\n        let setHiddenFromView = (no) => {\r\n            let row = this.rowCache[no];\r\n            this.setRowTopValueVariableRowHeight(row, -(currentRowTop + (rowHeightState.rows[currentRow] * 50)));\r\n        };\r\n        for (let i = 0; i < this.cacheLength; i++) {\r\n            let moved = false;\r\n            switch (true) {\r\n                case currentRow >= 0 && currentRow <= collectionLength - 1:\r\n                    setAfter(i);\r\n                    moved = true;\r\n                    break;\r\n                case currentRow >= collectionLength && (rowHeightState.total) >= bodyHeight:\r\n                    setBefore(i);\r\n                    moved = true;\r\n                    break;\r\n                default:\r\n            }\r\n            if (!moved) {\r\n                if (currentRow >= collectionLength && (currentRowTop - rowHeightState.rows[currentRow]) >= bodyHeight) {\r\n                    setHiddenFromView(i);\r\n                }\r\n                else {\r\n                    if (currentRow >= collectionLength) {\r\n                        setHiddenFromView(i);\r\n                    }\r\n                }\r\n            }\r\n            currentRow++;\r\n        }\r\n        this.rowCache.sort((a, b) => {\r\n            return a.row - b.row;\r\n        });\r\n        this.triggerRebindAllRowsEvent(downScroll, this.rowCache);\r\n    }\r\n    addEventListener() {\r\n        this.onScrollBinded = this.onScroll.bind(this);\r\n        this.element.addEventListener('avg-scroll', this.onScrollBinded);\r\n    }\r\n    triggerRebindRowEvent(curRow, curRowCache, isDownScroll) {\r\n        let event = new CustomEvent('avg-rebind-row', {\r\n            detail: {\r\n                currentRow: curRow,\r\n                rowCache: curRowCache,\r\n                downScroll: isDownScroll\r\n            },\r\n            bubbles: false\r\n        });\r\n        this.element.dispatchEvent(event);\r\n    }\r\n    triggerRebindAllRowsEvent(isDownScroll, curRowCache) {\r\n        let event = new CustomEvent('avg-rebind-all-rows', {\r\n            detail: {\r\n                downScroll: isDownScroll,\r\n                rowCache: curRowCache\r\n            },\r\n            bubbles: false\r\n        });\r\n        this.element.dispatchEvent(event);\r\n    }\r\n}\r\nexports.RowScrollEvents = RowScrollEvents;\r\n//# sourceMappingURL=rowScrollEvents.js.map",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1535657860158,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
