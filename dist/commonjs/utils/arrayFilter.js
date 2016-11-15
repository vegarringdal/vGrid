"use strict";
var ArrayFilter = (function () {
    function ArrayFilter(filterOperators) {
        this.filterOperators = filterOperators;
        this.lastFilter = [];
    }
    ArrayFilter.prototype.getLastFilter = function () {
        return this.lastFilter;
    };
    ArrayFilter.prototype.runQueryOn = function (objArray, ObjFilter) {
        var filterOperatorTable = this.filterOperators.getFilterNumbers();
        var resultArray = objArray.filter(function (data) {
            var result = true;
            ObjFilter.forEach(function (x) {
                var rowValue;
                var filterValue;
                var filterOperator = filterOperatorTable[x.operator];
                var newFilterOperator;
                var typeBool = {
                    "true": true,
                    "false": false
                };
                var type;
                try {
                    type = typeof (data[x.attribute]);
                }
                catch (e) {
                    type = "string";
                }
                switch (type) {
                    case "number":
                        rowValue = data[x.attribute];
                        filterValue = Number(x.value);
                        filterOperator = filterOperator || 1;
                        if (filterOperator === 6) {
                            filterOperator = 1;
                        }
                        break;
                    case "string":
                        rowValue = data[x.attribute].toLowerCase();
                        filterValue = x.value.toLowerCase();
                        filterOperator = filterOperator || 9;
                        newFilterOperator = filterOperator;
                        if (x.value.charAt(0) === "*" && filterOperator === 9) {
                            newFilterOperator = 6;
                            filterValue = filterValue.substr(1, filterValue.length);
                        }
                        if (x.value.charAt(0) === "*" && filterOperator === 1) {
                            newFilterOperator = 10;
                            filterValue = filterValue.substr(1, filterValue.length);
                        }
                        if (x.value.charAt(x.value.length - 1) === "*" && filterOperator === 1 && newFilterOperator === 10) {
                            newFilterOperator = 6;
                            filterValue = filterValue.substr(0, filterValue.length - 1);
                        }
                        if (x.value.charAt(x.value.length - 1) === "*" && filterOperator === 1 && newFilterOperator !== 10 && newFilterOperator !== 6) {
                            newFilterOperator = 9;
                            filterValue = filterValue.substr(0, filterValue.length - 1);
                        }
                        if (filterOperator !== newFilterOperator) {
                            filterOperator = newFilterOperator;
                        }
                        break;
                    case "boolean":
                        rowValue = data[x.attribute];
                        filterValue = typeBool[x.value];
                        filterOperator = 1;
                        break;
                    case "object":
                        rowValue = data[x.attribute].toISOString();
                        filterValue = new Date(x.value).toISOString();
                        filterOperator = filterOperator || 2;
                        break;
                    default:
                        try {
                            rowValue = data[x.attribute].toLowerCase();
                        }
                        catch (err) {
                            rowValue = data[x.attribute];
                        }
                        try {
                            filterValue = x.value.toLowerCase();
                        }
                        catch (err) {
                            filterValue = x.value;
                        }
                        filterOperator = filterOperator || 1;
                        break;
                }
                switch (filterOperator) {
                    case 1:
                        if (rowValue !== filterValue) {
                            result = false;
                        }
                        break;
                    case 2:
                        if (!(rowValue <= filterValue)) {
                            result = false;
                        }
                        break;
                    case 3:
                        if (!(rowValue >= filterValue)) {
                            result = false;
                        }
                        break;
                    case 4:
                        if (!(rowValue < filterValue)) {
                            result = false;
                        }
                        break;
                    case 5:
                        if (!(rowValue > filterValue)) {
                            result = false;
                        }
                        break;
                    case 6:
                        if (rowValue.indexOf(filterValue) === -1) {
                            result = false;
                        }
                        break;
                    case 7:
                        if (rowValue === filterValue) {
                            result = false;
                        }
                        break;
                    case 8:
                        if (rowValue.indexOf(filterValue) !== -1) {
                            result = false;
                        }
                        break;
                    case 9:
                        if (rowValue.substring(0, filterValue.length) !== filterValue) {
                            result = false;
                        }
                        break;
                    case 10:
                        if (rowValue.substring(rowValue.length - filterValue.length, rowValue.length) !== filterValue) {
                            result = false;
                        }
                        break;
                    default:
                        if (rowValue !== filterValue) {
                            result = false;
                        }
                }
                if (type === "string") {
                    if (x.value.charAt(0) === "*" && x.value.length === 1) {
                        result = true;
                    }
                }
            });
            return result;
        });
        return resultArray;
    };
    return ArrayFilter;
}());
exports.ArrayFilter = ArrayFilter;

//# sourceMappingURL=arrayFilter.js.map