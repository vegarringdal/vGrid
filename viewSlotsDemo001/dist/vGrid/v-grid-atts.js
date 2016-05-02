'use strict';

System.register(['aurelia-framework', './v-grid'], function (_export, _context) {
  var inject, customAttribute, Optional, VGrid, _dec, _dec2, _class, _dec3, _dec4, _class3, _dec5, _dec6, _class5, _dec7, _dec8, _class7, _dec9, _dec10, _class9, _dec11, _dec12, _class11, _dec13, _dec14, _class13, _dec15, _dec16, _class15, _dec17, _dec18, _class17, _dec19, _dec20, _class19, _dec21, _dec22, _class21, _dec23, _dec24, _class23, _dec25, _dec26, _class25, _dec27, _dec28, _class27, _dec29, _dec30, _class29, _dec31, _dec32, _class31, _dec33, _dec34, _class33, _dec35, _dec36, _class35, VGridAttibutes, rowHeight, headerHeight, footerHeight, isResizableHeaders, isMultiSelect, isSortableHeader, requestAnimationFrame, resizableHeadersAndRows, renderOnScrollbarScroll, addFilter, filterOnAtTop, sortOnHeaderClick, largeBuffer, activeSorting, eventOnRowDraw, attributeArray, doNotAddFilterTo, sortNotOnHeader;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      Optional = _aureliaFramework.Optional;
    }, function (_vGrid) {
      VGrid = _vGrid.VGrid;
    }],
    execute: function () {
      VGridAttibutes = function () {
        function VGridAttibutes(element, vGrid) {
          _classCallCheck(this, VGridAttibutes);

          this.vGrid = vGrid;
          this.element = element;
          this.checkIfVgrid(vGrid);
        }

        VGridAttibutes.prototype.checkIfVgrid = function checkIfVgrid(vGrid) {
          if (this.vGrid === null || this.vGrid === undefined) {
            throw new Error('Invalid Element. Must use v-grid.');
          }
        };

        VGridAttibutes.prototype.setValue = function setValue(htmlAttributeValue, defaultValue) {
          var value = defaultValue;
          if (htmlAttributeValue !== undefined && htmlAttributeValue !== null && !isNaN(htmlAttributeValue)) {
            value = htmlAttributeValue;
          }
          return value;
        };

        VGridAttibutes.prototype.setBindValueInt = function setBindValueInt() {
          var ctxValue = this.vGrid.vGridContextObj[this.attribute];
          if (this.vGrid.vGridContextObj[this.attribute]) {
            this.vGrid.vGridConfig[this.attribute] = this.setValue(this.vGrid.vGridContextObj[this.attribute], this.attDefault);
          } else {
            this.vGrid.vGridConfig[this.attribute] = this.setValue(parseInt(this.value), this.attDefault);
          }
        };

        VGridAttibutes.prototype.setBindValueBool = function setBindValueBool() {
          var type = {
            "true": true,
            "false": false
          };

          if (this.vGrid.vGridContextObj[this.attribute]) {
            this.vGrid.vGridConfig[this.attribute] = this.setValue(this.vGrid.vGridContextObj[this.attribute], this.attDefault);
          } else {
            this.vGrid.vGridConfig[this.attribute] = this.setValue(type[this.value], this.attDefault);
          }
        };

        VGridAttibutes.prototype.setBindValueFn = function setBindValueFn() {
          if (this.vGrid.vGridContextObj[this.attribute]) {
            if (typeof this.vGrid.$parent[this.value] === "function") {
              this.vGrid.vGridConfig[this.attribute] = this.vGrid.$parent[this.value].bind(this.vGrid.$parent);
            }
          } else {
            if (typeof this.vGrid.$parent[this.value] === "function") {
              this.vGrid.vGridConfig[this.attribute] = this.vGrid.$parent[this.value].bind(this.vGrid.$parent);
            }
          }
        };

        VGridAttibutes.prototype.setBindValueArray = function setBindValueArray() {
          if (this.value !== undefined && this.value !== null) {
            var tempArray = this.value.split(",");
            this.vGrid.vGridConfig[this.attribute] = tempArray;
          }
        };

        VGridAttibutes.prototype.setBindValue = function setBindValue() {
          switch (this.type) {
            case "bool":
              this.setBindValueBool();
              break;
            case "int":
              this.setBindValueInt();
              break;
            case "fn":
              this.setBindValueFn();
              break;
            case "array":
              this.setBindValueArray();
              break;
            default:
              throw new Error('Attribute missing type.');
          }
        };

        VGridAttibutes.prototype.getDefaultvalue = function getDefaultvalue() {
          this.attDefault = this.vGrid.vGridConfig[this.attribute];
        };

        VGridAttibutes.prototype.setNewvalue = function setNewvalue(newValue, oldValue) {};

        VGridAttibutes.prototype.bind = function bind(bindingContext, overrideContext) {
          this.getDefaultvalue();
          this.setBindValue();
        };

        VGridAttibutes.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          this.setNewvalue(newValue, oldValue);
        };

        return VGridAttibutes;
      }();

      _export('rowHeight', rowHeight = (_dec = customAttribute('v-row-height'), _dec2 = inject(Element, Optional.of(VGrid)), _dec(_class = _dec2(_class = function (_VGridAttibutes) {
        _inherits(rowHeight, _VGridAttibutes);

        function rowHeight() {
          var _temp, _this, _ret;

          _classCallCheck(this, rowHeight);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _VGridAttibutes.call.apply(_VGridAttibutes, [this].concat(args))), _this), _this.attribute = "rowHeight", _this.type = "int", _temp), _possibleConstructorReturn(_this, _ret);
        }

        return rowHeight;
      }(VGridAttibutes)) || _class) || _class));

      _export('rowHeight', rowHeight);

      _export('headerHeight', headerHeight = (_dec3 = customAttribute('v-header-height'), _dec4 = inject(Element, Optional.of(VGrid)), _dec3(_class3 = _dec4(_class3 = function (_VGridAttibutes2) {
        _inherits(headerHeight, _VGridAttibutes2);

        function headerHeight() {
          var _temp2, _this2, _ret2;

          _classCallCheck(this, headerHeight);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _VGridAttibutes2.call.apply(_VGridAttibutes2, [this].concat(args))), _this2), _this2.attribute = "headerHeight", _this2.type = "int", _temp2), _possibleConstructorReturn(_this2, _ret2);
        }

        return headerHeight;
      }(VGridAttibutes)) || _class3) || _class3));

      _export('headerHeight', headerHeight);

      _export('footerHeight', footerHeight = (_dec5 = customAttribute('v-footer-height'), _dec6 = inject(Element, Optional.of(VGrid)), _dec5(_class5 = _dec6(_class5 = function (_VGridAttibutes3) {
        _inherits(footerHeight, _VGridAttibutes3);

        function footerHeight() {
          var _temp3, _this3, _ret3;

          _classCallCheck(this, footerHeight);

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, _VGridAttibutes3.call.apply(_VGridAttibutes3, [this].concat(args))), _this3), _this3.attribute = "footerHeight", _this3.type = "int", _temp3), _possibleConstructorReturn(_this3, _ret3);
        }

        return footerHeight;
      }(VGridAttibutes)) || _class5) || _class5));

      _export('footerHeight', footerHeight);

      _export('isResizableHeaders', isResizableHeaders = (_dec7 = customAttribute('v-resizable-headers'), _dec8 = inject(Element, Optional.of(VGrid)), _dec7(_class7 = _dec8(_class7 = function (_VGridAttibutes4) {
        _inherits(isResizableHeaders, _VGridAttibutes4);

        function isResizableHeaders() {
          var _temp4, _this4, _ret4;

          _classCallCheck(this, isResizableHeaders);

          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return _ret4 = (_temp4 = (_this4 = _possibleConstructorReturn(this, _VGridAttibutes4.call.apply(_VGridAttibutes4, [this].concat(args))), _this4), _this4.attribute = "isResizableHeaders", _this4.type = "bool", _temp4), _possibleConstructorReturn(_this4, _ret4);
        }

        return isResizableHeaders;
      }(VGridAttibutes)) || _class7) || _class7));

      _export('isResizableHeaders', isResizableHeaders);

      _export('isMultiSelect', isMultiSelect = (_dec9 = customAttribute('v-multi-select'), _dec10 = inject(Element, Optional.of(VGrid)), _dec9(_class9 = _dec10(_class9 = function (_VGridAttibutes5) {
        _inherits(isMultiSelect, _VGridAttibutes5);

        function isMultiSelect() {
          var _temp5, _this5, _ret5;

          _classCallCheck(this, isMultiSelect);

          for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return _ret5 = (_temp5 = (_this5 = _possibleConstructorReturn(this, _VGridAttibutes5.call.apply(_VGridAttibutes5, [this].concat(args))), _this5), _this5.attribute = "isMultiSelect", _this5.type = "bool", _temp5), _possibleConstructorReturn(_this5, _ret5);
        }

        return isMultiSelect;
      }(VGridAttibutes)) || _class9) || _class9));

      _export('isMultiSelect', isMultiSelect);

      _export('isSortableHeader', isSortableHeader = (_dec11 = customAttribute('v-sortable-headers'), _dec12 = inject(Element, Optional.of(VGrid)), _dec11(_class11 = _dec12(_class11 = function (_VGridAttibutes6) {
        _inherits(isSortableHeader, _VGridAttibutes6);

        function isSortableHeader() {
          var _temp6, _this6, _ret6;

          _classCallCheck(this, isSortableHeader);

          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return _ret6 = (_temp6 = (_this6 = _possibleConstructorReturn(this, _VGridAttibutes6.call.apply(_VGridAttibutes6, [this].concat(args))), _this6), _this6.attribute = "isSortableHeader", _this6.type = "bool", _temp6), _possibleConstructorReturn(_this6, _ret6);
        }

        return isSortableHeader;
      }(VGridAttibutes)) || _class11) || _class11));

      _export('isSortableHeader', isSortableHeader);

      _export('requestAnimationFrame', requestAnimationFrame = (_dec13 = customAttribute('v-request-animation-frame'), _dec14 = inject(Element, Optional.of(VGrid)), _dec13(_class13 = _dec14(_class13 = function (_VGridAttibutes7) {
        _inherits(requestAnimationFrame, _VGridAttibutes7);

        function requestAnimationFrame() {
          var _temp7, _this7, _ret7;

          _classCallCheck(this, requestAnimationFrame);

          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return _ret7 = (_temp7 = (_this7 = _possibleConstructorReturn(this, _VGridAttibutes7.call.apply(_VGridAttibutes7, [this].concat(args))), _this7), _this7.attribute = "requestAnimationFrame", _this7.type = "bool", _temp7), _possibleConstructorReturn(_this7, _ret7);
        }

        return requestAnimationFrame;
      }(VGridAttibutes)) || _class13) || _class13));

      _export('requestAnimationFrame', requestAnimationFrame);

      _export('resizableHeadersAndRows', resizableHeadersAndRows = (_dec15 = customAttribute('v-resize-also-rows'), _dec16 = inject(Element, Optional.of(VGrid)), _dec15(_class15 = _dec16(_class15 = function (_VGridAttibutes8) {
        _inherits(resizableHeadersAndRows, _VGridAttibutes8);

        function resizableHeadersAndRows() {
          var _temp8, _this8, _ret8;

          _classCallCheck(this, resizableHeadersAndRows);

          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          return _ret8 = (_temp8 = (_this8 = _possibleConstructorReturn(this, _VGridAttibutes8.call.apply(_VGridAttibutes8, [this].concat(args))), _this8), _this8.attribute = "resizableHeadersAndRows", _this8.type = "bool", _temp8), _possibleConstructorReturn(_this8, _ret8);
        }

        return resizableHeadersAndRows;
      }(VGridAttibutes)) || _class15) || _class15));

      _export('resizableHeadersAndRows', resizableHeadersAndRows);

      _export('renderOnScrollbarScroll', renderOnScrollbarScroll = (_dec17 = customAttribute('v-render-on-scrollbar-scroll'), _dec18 = inject(Element, Optional.of(VGrid)), _dec17(_class17 = _dec18(_class17 = function (_VGridAttibutes9) {
        _inherits(renderOnScrollbarScroll, _VGridAttibutes9);

        function renderOnScrollbarScroll() {
          var _temp9, _this9, _ret9;

          _classCallCheck(this, renderOnScrollbarScroll);

          for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          return _ret9 = (_temp9 = (_this9 = _possibleConstructorReturn(this, _VGridAttibutes9.call.apply(_VGridAttibutes9, [this].concat(args))), _this9), _this9.attribute = "renderOnScrollbarScroll", _this9.type = "bool", _temp9), _possibleConstructorReturn(_this9, _ret9);
        }

        return renderOnScrollbarScroll;
      }(VGridAttibutes)) || _class17) || _class17));

      _export('renderOnScrollbarScroll', renderOnScrollbarScroll);

      _export('addFilter', addFilter = (_dec19 = customAttribute('v-header-filter'), _dec20 = inject(Element, Optional.of(VGrid)), _dec19(_class19 = _dec20(_class19 = function (_VGridAttibutes10) {
        _inherits(addFilter, _VGridAttibutes10);

        function addFilter() {
          var _temp10, _this10, _ret10;

          _classCallCheck(this, addFilter);

          for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }

          return _ret10 = (_temp10 = (_this10 = _possibleConstructorReturn(this, _VGridAttibutes10.call.apply(_VGridAttibutes10, [this].concat(args))), _this10), _this10.attribute = "addFilter", _this10.type = "bool", _temp10), _possibleConstructorReturn(_this10, _ret10);
        }

        return addFilter;
      }(VGridAttibutes)) || _class19) || _class19));

      _export('addFilter', addFilter);

      _export('filterOnAtTop', filterOnAtTop = (_dec21 = customAttribute('v-header-filter-top'), _dec22 = inject(Element, Optional.of(VGrid)), _dec21(_class21 = _dec22(_class21 = function (_VGridAttibutes11) {
        _inherits(filterOnAtTop, _VGridAttibutes11);

        function filterOnAtTop() {
          var _temp11, _this11, _ret11;

          _classCallCheck(this, filterOnAtTop);

          for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }

          return _ret11 = (_temp11 = (_this11 = _possibleConstructorReturn(this, _VGridAttibutes11.call.apply(_VGridAttibutes11, [this].concat(args))), _this11), _this11.attribute = "filterOnAtTop", _this11.type = "bool", _temp11), _possibleConstructorReturn(_this11, _ret11);
        }

        return filterOnAtTop;
      }(VGridAttibutes)) || _class21) || _class21));

      _export('filterOnAtTop', filterOnAtTop);

      _export('sortOnHeaderClick', sortOnHeaderClick = (_dec23 = customAttribute('v-sort-on-header-click'), _dec24 = inject(Element, Optional.of(VGrid)), _dec23(_class23 = _dec24(_class23 = function (_VGridAttibutes12) {
        _inherits(sortOnHeaderClick, _VGridAttibutes12);

        function sortOnHeaderClick() {
          var _temp12, _this12, _ret12;

          _classCallCheck(this, sortOnHeaderClick);

          for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
          }

          return _ret12 = (_temp12 = (_this12 = _possibleConstructorReturn(this, _VGridAttibutes12.call.apply(_VGridAttibutes12, [this].concat(args))), _this12), _this12.attribute = "sortOnHeaderClick", _this12.type = "bool", _temp12), _possibleConstructorReturn(_this12, _ret12);
        }

        return sortOnHeaderClick;
      }(VGridAttibutes)) || _class23) || _class23));

      _export('sortOnHeaderClick', sortOnHeaderClick);

      _export('largeBuffer', largeBuffer = (_dec25 = customAttribute('v-large-buffer'), _dec26 = inject(Element, Optional.of(VGrid)), _dec25(_class25 = _dec26(_class25 = function (_VGridAttibutes13) {
        _inherits(largeBuffer, _VGridAttibutes13);

        function largeBuffer() {
          var _temp13, _this13, _ret13;

          _classCallCheck(this, largeBuffer);

          for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
          }

          return _ret13 = (_temp13 = (_this13 = _possibleConstructorReturn(this, _VGridAttibutes13.call.apply(_VGridAttibutes13, [this].concat(args))), _this13), _this13.attribute = "largeBuffer", _this13.type = "bool", _temp13), _possibleConstructorReturn(_this13, _ret13);
        }

        return largeBuffer;
      }(VGridAttibutes)) || _class25) || _class25));

      _export('largeBuffer', largeBuffer);

      _export('activeSorting', activeSorting = (_dec27 = customAttribute('v-active-sorting'), _dec28 = inject(Element, Optional.of(VGrid)), _dec27(_class27 = _dec28(_class27 = function (_VGridAttibutes14) {
        _inherits(activeSorting, _VGridAttibutes14);

        function activeSorting() {
          var _temp14, _this14, _ret14;

          _classCallCheck(this, activeSorting);

          for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
          }

          return _ret14 = (_temp14 = (_this14 = _possibleConstructorReturn(this, _VGridAttibutes14.call.apply(_VGridAttibutes14, [this].concat(args))), _this14), _this14.attribute = "activeSorting", _this14.type = "bool", _temp14), _possibleConstructorReturn(_this14, _ret14);
        }

        return activeSorting;
      }(VGridAttibutes)) || _class27) || _class27));

      _export('activeSorting', activeSorting);

      _export('eventOnRowDraw', eventOnRowDraw = (_dec29 = customAttribute('v-row-on-draw'), _dec30 = inject(Element, Optional.of(VGrid)), _dec29(_class29 = _dec30(_class29 = function (_VGridAttibutes15) {
        _inherits(eventOnRowDraw, _VGridAttibutes15);

        function eventOnRowDraw() {
          var _temp15, _this15, _ret15;

          _classCallCheck(this, eventOnRowDraw);

          for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
            args[_key15] = arguments[_key15];
          }

          return _ret15 = (_temp15 = (_this15 = _possibleConstructorReturn(this, _VGridAttibutes15.call.apply(_VGridAttibutes15, [this].concat(args))), _this15), _this15.attribute = "eventOnRowDraw", _this15.type = "fn", _temp15), _possibleConstructorReturn(_this15, _ret15);
        }

        return eventOnRowDraw;
      }(VGridAttibutes)) || _class29) || _class29));

      _export('eventOnRowDraw', eventOnRowDraw);

      _export('attributeArray', attributeArray = (_dec31 = customAttribute('v-attibutes-used'), _dec32 = inject(Element, Optional.of(VGrid)), _dec31(_class31 = _dec32(_class31 = function (_VGridAttibutes16) {
        _inherits(attributeArray, _VGridAttibutes16);

        function attributeArray() {
          var _temp16, _this16, _ret16;

          _classCallCheck(this, attributeArray);

          for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
            args[_key16] = arguments[_key16];
          }

          return _ret16 = (_temp16 = (_this16 = _possibleConstructorReturn(this, _VGridAttibutes16.call.apply(_VGridAttibutes16, [this].concat(args))), _this16), _this16.attribute = "attributeArray", _this16.type = "array", _temp16), _possibleConstructorReturn(_this16, _ret16);
        }

        return attributeArray;
      }(VGridAttibutes)) || _class31) || _class31));

      _export('attributeArray', attributeArray);

      _export('doNotAddFilterTo', doNotAddFilterTo = (_dec33 = customAttribute('v-header-filter-not-to'), _dec34 = inject(Element, Optional.of(VGrid)), _dec33(_class33 = _dec34(_class33 = function (_VGridAttibutes17) {
        _inherits(doNotAddFilterTo, _VGridAttibutes17);

        function doNotAddFilterTo() {
          var _temp17, _this17, _ret17;

          _classCallCheck(this, doNotAddFilterTo);

          for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
            args[_key17] = arguments[_key17];
          }

          return _ret17 = (_temp17 = (_this17 = _possibleConstructorReturn(this, _VGridAttibutes17.call.apply(_VGridAttibutes17, [this].concat(args))), _this17), _this17.attribute = "doNotAddFilterTo", _this17.type = "array", _temp17), _possibleConstructorReturn(_this17, _ret17);
        }

        return doNotAddFilterTo;
      }(VGridAttibutes)) || _class33) || _class33));

      _export('doNotAddFilterTo', doNotAddFilterTo);

      _export('sortNotOnHeader', sortNotOnHeader = (_dec35 = customAttribute('v-sort-not-on-header'), _dec36 = inject(Element, Optional.of(VGrid)), _dec35(_class35 = _dec36(_class35 = function (_VGridAttibutes18) {
        _inherits(sortNotOnHeader, _VGridAttibutes18);

        function sortNotOnHeader() {
          var _temp18, _this18, _ret18;

          _classCallCheck(this, sortNotOnHeader);

          for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            args[_key18] = arguments[_key18];
          }

          return _ret18 = (_temp18 = (_this18 = _possibleConstructorReturn(this, _VGridAttibutes18.call.apply(_VGridAttibutes18, [this].concat(args))), _this18), _this18.attribute = "sortNotOnHeader", _this18.type = "array", _temp18), _possibleConstructorReturn(_this18, _ret18);
        }

        return sortNotOnHeader;
      }(VGridAttibutes)) || _class35) || _class35));

      _export('sortNotOnHeader', sortNotOnHeader);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZHcmlkL3YtZ3JpZC1hdHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPUTtBQUFRO0FBQWlCOztBQUN6Qjs7O0FBR0o7QUFFRixpQkFGRSxjQUVGLENBQVksT0FBWixFQUFxQixLQUFyQixFQUE0QjtnQ0FGMUIsZ0JBRTBCOztBQUMxQixlQUFLLEtBQUwsR0FBYSxLQUFiLENBRDBCO0FBRTFCLGVBQUssT0FBTCxHQUFlLE9BQWYsQ0FGMEI7QUFHMUIsZUFBSyxZQUFMLENBQWtCLEtBQWxCLEVBSDBCO1NBQTVCOztBQUZFLGlDQVNGLHFDQUFhLE9BQU87QUFDbEIsY0FBSSxLQUFLLEtBQUwsS0FBZSxJQUFmLElBQXVCLEtBQUssS0FBTCxLQUFlLFNBQWYsRUFBMEI7QUFDbkQsa0JBQU0sSUFBSSxLQUFKLENBQVUsbUNBQVYsQ0FBTixDQURtRDtXQUFyRDs7O0FBVkEsaUNBZ0JGLDZCQUFTLG9CQUFvQixjQUFjO0FBQ3pDLGNBQUksUUFBUSxZQUFSLENBRHFDO0FBRXpDLGNBQUksdUJBQXVCLFNBQXZCLElBQW9DLHVCQUF1QixJQUF2QixJQUErQixDQUFDLE1BQU0sa0JBQU4sQ0FBRCxFQUE0QjtBQUNqRyxvQkFBUSxrQkFBUixDQURpRztXQUFuRztBQUdBLGlCQUFPLEtBQVAsQ0FMeUM7OztBQWhCekMsaUNBeUJGLDZDQUFrQjtBQUNoQixjQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUFLLFNBQUwsQ0FBdEMsQ0FEWTtBQUVoQixjQUFJLEtBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBSyxTQUFMLENBQS9CLEVBQWdEO0FBQzlDLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssU0FBTCxDQUF2QixHQUF5QyxLQUFLLFFBQUwsQ0FBYyxLQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQUssU0FBTCxDQUF6QyxFQUEwRCxLQUFLLFVBQUwsQ0FBbkcsQ0FEOEM7V0FBaEQsTUFFTztBQUNMLGlCQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssU0FBTCxDQUF2QixHQUF5QyxLQUFLLFFBQUwsQ0FBYyxTQUFTLEtBQUssS0FBTCxDQUF2QixFQUFvQyxLQUFLLFVBQUwsQ0FBN0UsQ0FESztXQUZQOzs7QUEzQkEsaUNBbUNGLCtDQUFtQjtBQUNqQixjQUFJLE9BQU87QUFDVCxvQkFBUSxJQUFSO0FBQ0EscUJBQVMsS0FBVDtXQUZFLENBRGE7O0FBTWpCLGNBQUksS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUFLLFNBQUwsQ0FBL0IsRUFBZ0Q7QUFDOUMsaUJBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBSyxTQUFMLENBQXZCLEdBQXlDLEtBQUssUUFBTCxDQUFjLEtBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBSyxTQUFMLENBQXpDLEVBQTBELEtBQUssVUFBTCxDQUFuRyxDQUQ4QztXQUFoRCxNQUVPO0FBQ0wsaUJBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBSyxTQUFMLENBQXZCLEdBQXlDLEtBQUssUUFBTCxDQUFjLEtBQUssS0FBSyxLQUFMLENBQW5CLEVBQWdDLEtBQUssVUFBTCxDQUF6RSxDQURLO1dBRlA7OztBQXpDQSxpQ0FpREYsMkNBQWlCO0FBQ2YsY0FBSSxLQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLEtBQUssU0FBTCxDQUEvQixFQUFnRDtBQUM5QyxnQkFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsS0FBSyxLQUFMLENBQTFCLEtBQTJDLFVBQTNDLEVBQXVEO0FBQ3pELG1CQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssU0FBTCxDQUF2QixHQUF5QyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEtBQUssS0FBTCxDQUFuQixDQUErQixJQUEvQixDQUFvQyxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQTdFLENBRHlEO2FBQTNEO1dBREYsTUFJTztBQUNMLGdCQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixLQUFLLEtBQUwsQ0FBMUIsS0FBMkMsVUFBM0MsRUFBdUQ7QUFDekQsbUJBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBSyxTQUFMLENBQXZCLEdBQXlDLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsS0FBSyxLQUFMLENBQW5CLENBQStCLElBQS9CLENBQW9DLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBN0UsQ0FEeUQ7YUFBM0Q7V0FMRjs7O0FBbERBLGlDQThERixpREFBb0I7QUFDbEIsY0FBSSxLQUFLLEtBQUwsS0FBZSxTQUFmLElBQTRCLEtBQUssS0FBTCxLQUFlLElBQWYsRUFBcUI7QUFDbkQsZ0JBQUksWUFBWSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQVosQ0FEK0M7QUFFbkQsaUJBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBSyxTQUFMLENBQXZCLEdBQXlDLFNBQXpDLENBRm1EO1dBQXJEOzs7QUEvREEsaUNBMEVGLHVDQUFlO0FBQ2Isa0JBQVEsS0FBSyxJQUFMO0FBQ04saUJBQUssTUFBTDtBQUNFLG1CQUFLLGdCQUFMLEdBREY7QUFFRSxvQkFGRjtBQURGLGlCQUlPLEtBQUw7QUFDRSxtQkFBSyxlQUFMLEdBREY7QUFFRSxvQkFGRjtBQUpGLGlCQU9PLElBQUw7QUFDRSxtQkFBSyxjQUFMLEdBREY7QUFFRSxvQkFGRjtBQVBGLGlCQVVPLE9BQUw7QUFDRSxtQkFBSyxpQkFBTCxHQURGO0FBRUUsb0JBRkY7QUFWRjtBQWNJLG9CQUFNLElBQUksS0FBSixDQUFVLHlCQUFWLENBQU4sQ0FERjtBQWJGLFdBRGE7OztBQTFFYixpQ0FrR0YsNkNBQWtCO0FBQ2hCLGVBQUssVUFBTCxHQUFrQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssU0FBTCxDQUF6QyxDQURnQjs7O0FBbEdoQixpQ0EwR0YsbUNBQVksVUFBVSxVQUFVOztBQTFHOUIsaUNBa0hGLHFCQUFLLGdCQUFnQixpQkFBaUI7QUFDcEMsZUFBSyxlQUFMLEdBRG9DO0FBRXBDLGVBQUssWUFBTCxHQUZvQzs7O0FBbEhwQyxpQ0EySEYscUNBQWEsVUFBVSxVQUFVO0FBQy9CLGVBQUssV0FBTCxDQUFpQixRQUFqQixFQUEyQixRQUEzQixFQUQrQjs7O2VBM0gvQjs7OzJCQW9JUyxvQkFGWixnQkFBZ0IsY0FBaEIsV0FDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7NEpBQ1gsWUFBWSxtQkFDWixPQUFPOzs7ZUFGSTtRQUFrQjs7Ozs4QkFRbEIsd0JBRlosZ0JBQWdCLGlCQUFoQixXQUNBLE9BQU8sT0FBUCxFQUFnQixTQUFTLEVBQVQsQ0FBWSxLQUFaLENBQWhCO2tCQUNZOzs7Ozs7Ozs7OzttS0FDWCxZQUFZLHVCQUNaLE9BQU87OztlQUZJO1FBQXFCOzs7OzhCQVFyQix3QkFGWixnQkFBZ0IsaUJBQWhCLFdBQ0EsT0FBTyxPQUFQLEVBQWdCLFNBQVMsRUFBVCxDQUFZLEtBQVosQ0FBaEI7a0JBQ1k7Ozs7Ozs7Ozs7O21LQUNYLFlBQVksdUJBQ1osT0FBTzs7O2VBRkk7UUFBcUI7Ozs7b0NBUXJCLDhCQUZaLGdCQUFnQixxQkFBaEIsV0FDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7bUtBQ1gsWUFBWSw2QkFDWixPQUFPOzs7ZUFGSTtRQUEyQjs7OzsrQkFRM0IseUJBRlosZ0JBQWdCLGdCQUFoQixZQUNBLE9BQU8sT0FBUCxFQUFnQixTQUFTLEVBQVQsQ0FBWSxLQUFaLENBQWhCO2tCQUNZOzs7Ozs7Ozs7OzttS0FDWCxZQUFZLHdCQUNaLE9BQU87OztlQUZJO1FBQXNCOzs7O2tDQVF0Qiw2QkFGWixnQkFBZ0Isb0JBQWhCLFlBQ0EsT0FBTyxPQUFQLEVBQWdCLFNBQVMsRUFBVCxDQUFZLEtBQVosQ0FBaEI7a0JBQ1k7Ozs7Ozs7Ozs7O21LQUNYLFlBQVksMkJBQ1osT0FBTzs7O2VBRkk7UUFBeUI7Ozs7dUNBUXpCLGtDQUZaLGdCQUFnQiwyQkFBaEIsWUFDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7bUtBQ1gsWUFBWSxnQ0FDWixPQUFPOzs7ZUFGSTtRQUE4Qjs7Ozt5Q0FROUIsb0NBRlosZ0JBQWdCLG9CQUFoQixZQUNBLE9BQU8sT0FBUCxFQUFnQixTQUFTLEVBQVQsQ0FBWSxLQUFaLENBQWhCO2tCQUNZOzs7Ozs7Ozs7OzttS0FDWCxZQUFZLGtDQUNaLE9BQU87OztlQUZJO1FBQWdDOzs7O3lDQU9oQyxvQ0FGWixnQkFBZ0IsOEJBQWhCLFlBQ0EsT0FBTyxPQUFQLEVBQWdCLFNBQVMsRUFBVCxDQUFZLEtBQVosQ0FBaEI7a0JBQ1k7Ozs7Ozs7Ozs7O21LQUNYLFlBQVksa0NBQ1osT0FBTzs7O2VBRkk7UUFBZ0M7Ozs7MkJBUWhDLHNCQUZaLGdCQUFnQixpQkFBaEIsWUFDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7MEtBQ1gsWUFBWSxxQkFDWixPQUFPOzs7ZUFGSTtRQUFrQjs7OzsrQkFRbEIsMEJBRlosZ0JBQWdCLHFCQUFoQixZQUNBLE9BQU8sT0FBUCxFQUFnQixTQUFTLEVBQVQsQ0FBWSxLQUFaLENBQWhCO2tCQUNZOzs7Ozs7Ozs7OzswS0FDWCxZQUFZLHlCQUNaLE9BQU87OztlQUZJO1FBQXNCOzs7O21DQVN0Qiw4QkFGWixnQkFBZ0Isd0JBQWhCLFlBQ0EsT0FBTyxPQUFQLEVBQWdCLFNBQVMsRUFBVCxDQUFZLEtBQVosQ0FBaEI7a0JBQ1k7Ozs7Ozs7Ozs7OzBLQUNYLFlBQVksNkJBQ1osT0FBTzs7O2VBRkk7UUFBMEI7Ozs7NkJBUTFCLHdCQUZaLGdCQUFnQixnQkFBaEIsWUFDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7MEtBQ1gsWUFBWSx1QkFDWixPQUFPOzs7ZUFGSTtRQUFvQjs7OzsrQkFPcEIsMEJBRlosZ0JBQWdCLGtCQUFoQixZQUNBLE9BQU8sT0FBUCxFQUFnQixTQUFTLEVBQVQsQ0FBWSxLQUFaLENBQWhCO2tCQUNZOzs7Ozs7Ozs7OzswS0FDWCxZQUFZLHlCQUNaLE9BQU87OztlQUZJO1FBQXNCOzs7O2dDQVF0QiwyQkFGWixnQkFBZ0IsZUFBaEIsWUFDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7MEtBQ1gsWUFBWSwwQkFDWixPQUFPOzs7ZUFGSTtRQUF1Qjs7OztnQ0FTdkIsMkJBRlosZ0JBQWdCLGtCQUFoQixZQUNBLE9BQU8sT0FBUCxFQUFnQixTQUFTLEVBQVQsQ0FBWSxLQUFaLENBQWhCO2tCQUNZOzs7Ozs7Ozs7OzswS0FDWCxZQUFZLDBCQUNaLE9BQU87OztlQUZJO1FBQXVCOzs7O2tDQU92Qiw2QkFGWixnQkFBZ0Isd0JBQWhCLFlBQ0EsT0FBTyxPQUFQLEVBQWdCLFNBQVMsRUFBVCxDQUFZLEtBQVosQ0FBaEI7a0JBQ1k7Ozs7Ozs7Ozs7OzBLQUNYLFlBQVksNEJBQ1osT0FBTzs7O2VBRkk7UUFBeUI7Ozs7aUNBT3pCLDRCQUZaLGdCQUFnQixzQkFBaEIsWUFDQSxPQUFPLE9BQVAsRUFBZ0IsU0FBUyxFQUFULENBQVksS0FBWixDQUFoQjtrQkFDWTs7Ozs7Ozs7Ozs7MEtBQ1gsWUFBWSwyQkFDWixPQUFPOzs7ZUFGSTtRQUF3QiIsImZpbGUiOiJ2R3JpZC92LWdyaWQtYXR0cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
