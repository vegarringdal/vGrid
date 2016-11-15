"use strict";
var RowClickHandler = (function () {
    function RowClickHandler(element, htmlCache) {
        this.element = element;
        this.htmlCache = htmlCache;
        this.selectionMode = "none";
        this.lastRowSelected = -1;
        this.lastKeyKodeUsed = "none";
        this.selectedRows = 0;
    }
    RowClickHandler.prototype.init = function (mode, manualSelection, controller) {
        this.controller = controller;
        this.selection = controller.getSelectionContext();
        this.manualSelection = manualSelection;
        if (mode === false) {
            this.selectionMode = "single";
        }
        if (mode === true) {
            this.selectionMode = "multiple";
        }
        this.addEventlistener();
    };
    RowClickHandler.prototype.addEventlistener = function () {
        var avg_left_rows = this.htmlCache.avg_left_rows;
        var avg_main_rows = this.htmlCache.avg_main_rows;
        var avg_right_rows = this.htmlCache.avg_right_rows;
        for (var i = 0; i < avg_left_rows.length; i++) {
            avg_left_rows[i].onclick = this.singleClick.bind(this);
            avg_left_rows[i].ondblclick = this.doubleClick.bind(this);
            avg_main_rows[i].onclick = this.singleClick.bind(this);
            avg_main_rows[i].ondblclick = this.doubleClick.bind(this);
            avg_right_rows[i].onclick = this.singleClick.bind(this);
            avg_right_rows[i].ondblclick = this.doubleClick.bind(this);
        }
    };
    RowClickHandler.prototype.removeEventlistener = function () {
        var avg_left_rows = this.htmlCache.avg_left_rows;
        var avg_main_rows = this.htmlCache.avg_main_rows;
        var avg_right_rows = this.htmlCache.avg_right_rows;
        for (var i = 0; i < avg_left_rows.length; i++) {
            avg_left_rows[i].onclick = null;
            avg_left_rows[i].ondblclick = null;
            avg_main_rows[i].onclick = null;
            avg_main_rows[i].ondblclick = null;
            avg_right_rows[i].onclick = null;
            avg_right_rows[i].ondblclick = null;
        }
    };
    RowClickHandler.prototype.singleClick = function (event) {
        if (!event.currentTarget.avgGroup) {
            this.highlightRow(event, event.currentTarget.avgRow);
            this.controller.select(event.currentTarget.avgRow);
        }
        if (!this.manualSelection) {
            this.controller.raiseEvent("v-row-onclick", {
                evt: event,
                data: null,
                row: event.currentTarget.avgRow
            });
        }
    };
    RowClickHandler.prototype.isNormalRow = function () {
    };
    RowClickHandler.prototype.doubleClick = function (event) {
        this.controller.raiseEvent("v-row-ondblclick", {
            evt: event,
            data: null,
            row: event.currentTarget.avgRow
        });
    };
    RowClickHandler.prototype.isSelected = function (row) {
        return this.selection.isSelected(row);
    };
    RowClickHandler.prototype.deSelect = function (row) {
        this.selection.deSelect(row);
    };
    RowClickHandler.prototype.select = function (row, addToSelection) {
        this.selection.select(row, addToSelection);
    };
    RowClickHandler.prototype.selectRange = function (start, end) {
        this.selection.selectRange(start, end);
    };
    RowClickHandler.prototype.getSelectedRows = function () {
        return this.selection.getSelectedRows();
    };
    RowClickHandler.prototype.setSelectedRows = function (newRows) {
        this.selection.setSelectedRows(newRows);
    };
    RowClickHandler.prototype.getSelectionMode = function () {
        return this.selection.getMode();
    };
    RowClickHandler.prototype.updateSelectionOnAllRows = function () {
        var rowCache = this.htmlCache.rowCache;
        for (var i = 0; i < rowCache.length; i++) {
            var isSelected = this.selection.isSelected(rowCache[i].row);
            rowCache[i].mainRowViewSlot.bindingContext.selected = isSelected;
            rowCache[i].leftRowViewSlot.bindingContext.selected = isSelected;
            rowCache[i].rightRowViewSlot.bindingContext.selected = isSelected;
            if (isSelected) {
                if (!rowCache[i].main.avgSelected) {
                    rowCache[i].main.avgSelected = true;
                    rowCache[i].left.classList.add("avg-selected-row");
                    rowCache[i].main.classList.add("avg-selected-row");
                    rowCache[i].right.classList.add("avg-selected-row");
                }
            }
            else {
                if (rowCache[i].main.avgSelected) {
                    rowCache[i].main.avgSelected = false;
                    rowCache[i].left.classList.remove("avg-selected-row");
                    rowCache[i].main.classList.remove("avg-selected-row");
                    rowCache[i].right.classList.remove("avg-selected-row");
                }
            }
        }
    };
    RowClickHandler.prototype.highlightRow = function (e, currentRow) {
        var isSel;
        var manualSel = this.manualSelection;
        if (!manualSel) {
            var currentselectedRows = this.getSelectedRows();
            var currentKeyKode = "";
            if (currentRow !== this.lastRowSelected || currentselectedRows[0] !== currentRow) {
                if (currentRow <= (this.controller.collectionLength() - 1)) {
                    if (this.selectionMode === "multiple") {
                        if (e.shiftKey) {
                            currentKeyKode = "shift";
                            currentselectedRows = this.getSelectedRows();
                            if (currentselectedRows.length > 0 && this.lastKeyKodeUsed === "none") {
                                this.lastRowSelected = currentselectedRows[0];
                                this.lastKeyKodeUsed = "shift";
                            }
                        }
                        if (e.ctrlKey) {
                            currentKeyKode = "ctrl";
                        }
                        if (!e.ctrlKey && !e.shiftKey) {
                            currentKeyKode = "none";
                        }
                        switch (true) {
                            case currentKeyKode === "none":
                                this.select(currentRow, false);
                                break;
                            case this.lastKeyKodeUsed === "shift" && currentKeyKode === "ctrl":
                                isSel = this.isSelected(currentRow);
                                if (isSel === true) {
                                    this.deSelect(currentRow);
                                }
                                else {
                                    this.select(currentRow, true);
                                }
                                this.lastRowSelected = currentRow;
                                break;
                            case this.lastKeyKodeUsed === "ctrl" && currentKeyKode === "shift":
                                var oldSel = this.getSelectedRows();
                                this.selectRange(this.lastRowSelected, currentRow);
                                var newSel = this.getSelectedRows();
                                this.setSelectedRows(oldSel.concat(newSel));
                                break;
                            case this.lastKeyKodeUsed === "ctrl" && currentKeyKode === "ctrl":
                                isSel = this.isSelected(currentRow);
                                if (isSel === true) {
                                    this.deSelect(currentRow);
                                }
                                else {
                                    this.select(currentRow, true);
                                }
                                this.lastRowSelected = currentRow;
                                break;
                            case this.lastKeyKodeUsed === "none" && currentKeyKode === "ctrl":
                                isSel = this.isSelected(currentRow);
                                if (isSel === true) {
                                    this.deSelect(currentRow);
                                }
                                else {
                                    this.select(currentRow, true);
                                }
                                this.lastRowSelected = currentRow;
                                break;
                            case this.lastKeyKodeUsed === "shift" && currentKeyKode === "shift":
                                if (this.lastRowSelected > currentRow) {
                                    this.selectRange(currentRow, this.lastRowSelected);
                                }
                                else {
                                    this.selectRange(this.lastRowSelected, currentRow);
                                }
                                break;
                            case this.lastKeyKodeUsed === "none" && currentKeyKode === "shift":
                                if (this.lastRowSelected !== -1) {
                                    if (this.lastRowSelected > currentRow) {
                                        this.selectRange(currentRow, this.lastRowSelected);
                                    }
                                    else {
                                        this.selectRange(this.lastRowSelected, currentRow);
                                    }
                                }
                                else {
                                    this.lastRowSelected = currentRow;
                                    this.select(currentRow, false);
                                }
                                break;
                            default:
                                console.error("error, this should not happen, debug selection");
                        }
                    }
                    else {
                        this.select(currentRow, false);
                    }
                    this.lastKeyKodeUsed = currentKeyKode;
                    this.updateSelectionOnAllRows();
                }
            }
            else {
                if (e.ctrlKey) {
                    currentKeyKode = "ctrl";
                }
                if (currentKeyKode === "ctrl") {
                    this.lastKeyKodeUsed = currentKeyKode;
                    isSel = this.isSelected(currentRow);
                    if (isSel === true) {
                        this.deSelect(currentRow);
                    }
                    this.lastRowSelected = currentRow;
                }
                else {
                    this.select(currentRow, false);
                }
                this.updateSelectionOnAllRows();
            }
        }
    };
    return RowClickHandler;
}());
exports.RowClickHandler = RowClickHandler;

//# sourceMappingURL=rowClickHandler.js.map