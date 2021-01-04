/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/bigBg/index.js":
/*!***********************************!*\
  !*** ./src/blocks/bigBg/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/bigBg/index.js",
    _this = undefined;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("lilo-blocks/full-bg", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Full Background", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add a full background group", "lilo-blocks"),
  category: "lilo-category",
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      "data-align": "full"
    };
  },
  supports: {
    align: ["full"]
  },
  attributes: {
    topSpacing: {
      type: "number",
      default: 50
    },
    bottomSpacing: {
      type: "number",
      default: 50
    },
    backgroundColor: {
      type: "string",
      default: "bg"
    },
    customBackgroundColor: {
      type: "string"
    },
    desktopUrl: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img"
    },
    desktopAlt: {
      type: "string",
      source: "attribute",
      attribute: "alt",
      selector: "img"
    },
    desktopId: {
      type: "number"
    },
    mobileUrl: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img"
    },
    mobileAlt: {
      type: "string",
      source: "attribute",
      attribute: "alt",
      selector: "img"
    },
    mobileId: {
      type: "number"
    }
  },
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)({
    backgroundColor: "backgroundColor"
  })(function (_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        backgroundColor = _ref.backgroundColor,
        customBackgroundColor = _ref.customBackgroundColor,
        setBackgroundColor = _ref.setBackgroundColor;
    var topSpacing = attributes.topSpacing,
        bottomSpacing = attributes.bottomSpacing,
        desktopUrl = attributes.desktopUrl,
        desktopAlt = attributes.desktopAlt,
        desktopId = attributes.desktopId,
        mobileUrl = attributes.mobileUrl,
        mobileAlt = attributes.mobileAlt,
        mobileId = attributes.mobileId;

    var handleDesktopImageSelect = function handleDesktopImageSelect(_ref2) {
      var url = _ref2.url,
          alt = _ref2.alt,
          id = _ref2.id;
      setAttributes({
        desktopUrl: url,
        desktopAlt: alt,
        desktopId: id
      });
    };

    var handleRemoveDesktop = function handleRemoveDesktop() {
      setAttributes({
        desktopUrl: null,
        desktopAlt: null,
        desktopId: null
      });
    };

    var handleMobileImageSelect = function handleMobileImageSelect(_ref3) {
      var url = _ref3.url,
          alt = _ref3.alt,
          id = _ref3.id;
      setAttributes({
        mobileUrl: url,
        mobileAlt: alt,
        mobileId: id
      });
    };

    var handleRemoveMobile = function handleRemoveMobile() {
      setAttributes({
        mobileUrl: null,
        mobileAlt: null,
        mobileId: null
      });
    };

    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 5
      }
    }, wp.element.createElement("section", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, _defineProperty({}, backgroundColor.class, !!backgroundColor.class)),
      style: {
        paddingTop: topSpacing,
        paddingBottom: bottomSpacing,
        backgroundColor: backgroundColor.class ? undefined : customBackgroundColor
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 6
      }
    }, wp.element.createElement("div", {
      className: "".concat(className, "__inner alignwide"),
      "data-align": "wide",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
      template: [["core/columns", {
        align: "wide"
      }]],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 8
      }
    }), wp.element.createElement("div", {
      className: "".concat(className, "__image"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 8
      }
    }, wp.element.createElement("img", {
      src: desktopUrl,
      alt: desktopAlt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    })), wp.element.createElement("div", {
      className: "".concat(className, "__image ").concat(className, "__image--mobile"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 8
      }
    }, wp.element.createElement("img", {
      src: mobileUrl,
      alt: mobileAlt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    })))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 6
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Spacing",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 7
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Top spacing",
      value: topSpacing,
      onChange: function onChange(val) {
        return setAttributes({
          topSpacing: val
        });
      },
      min: 0,
      max: 100,
      step: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 8
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: "Bottom spacing",
      value: bottomSpacing,
      onChange: function onChange(val) {
        return setAttributes({
          bottomSpacing: val
        });
      },
      min: 0,
      max: 100,
      step: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 8
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Color settings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 7
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      colorSettings: [{
        label: "Background Color",
        value: backgroundColor.color,
        onChange: setBackgroundColor
      }],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 8
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Desktop Background Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }
    }, !desktopUrl ? wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
      accept: "image/*",
      allowedTypes: ["image"],
      onSelect: handleDesktopImageSelect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }) : wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, wp.element.createElement("img", {
      src: desktopUrl,
      alt: desktopAlt,
      width: "100%",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 10
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 10
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: handleDesktopImageSelect,
      allowedTypes: ["image"],
      value: desktopId,
      render: function render(_ref4) {
        var open = _ref4.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: open,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }
        }, "Edit");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      style: {
        color: "red"
      },
      onClick: handleRemoveDesktop,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 10
      }
    }, "Delete"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Alt Text",
      value: desktopAlt,
      onChange: function onChange(val) {
        return setAttributes({
          desktopAlt: val
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 10
      }
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Mobile Background Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }
    }, !mobileUrl ? wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
      accept: "image/*",
      allowedTypes: ["image"],
      onSelect: handleMobileImageSelect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }
    }) : wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }
    }, wp.element.createElement("img", {
      src: mobileUrl,
      alt: mobileAlt,
      width: "100%",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 10
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 10
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: handleMobileImageSelect,
      allowedTypes: ["image"],
      value: mobileId,
      render: function render(_ref5) {
        var open = _ref5.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          onClick: open,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }
        }, "Edit");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      style: {
        color: "red"
      },
      onClick: handleRemoveMobile,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 10
      }
    }, "Delete"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Alt Text",
      value: mobileAlt,
      onChange: function onChange(val) {
        return setAttributes({
          mobileAlt: val
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 10
      }
    })))));
  }),
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    var topSpacing = attributes.topSpacing,
        bottomSpacing = attributes.bottomSpacing,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        desktopUrl = attributes.desktopUrl,
        desktopAlt = attributes.desktopAlt,
        mobileUrl = attributes.mobileUrl,
        mobileAlt = attributes.mobileAlt;
    var className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockDefaultClassName)("lilo-blocks/full-bg");
    var colorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)("backgroundColor", backgroundColor);
    return wp.element.createElement("section", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, _defineProperty({}, colorClass, !!colorClass)),
      style: {
        paddingTop: topSpacing,
        paddingBottom: bottomSpacing,
        backgroundColor: backgroundColor.class ? undefined : customBackgroundColor
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 4
      }
    }, wp.element.createElement("div", {
      className: "".concat(className, "__inner alignwide"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 5
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 6
      }
    }), wp.element.createElement("div", {
      className: "".concat(className, "__image"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 6
      }
    }, wp.element.createElement("img", {
      src: desktopUrl,
      alt: desktopAlt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 7
      }
    })), wp.element.createElement("div", {
      className: "".concat(className, "__image ").concat(className, "__image--mobile"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 6
      }
    }, wp.element.createElement("img", {
      src: mobileUrl,
      alt: mobileAlt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 7
      }
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/cta/index.js":
/*!*********************************!*\
  !*** ./src/blocks/cta/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ "./src/blocks/cta/link.js");
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/cta/index.js";




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("lilo-blocks/cta", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("CTA", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add call to action links", "lilo-blocks"),
  category: "lilo-category",
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("cta", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("call to action", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("call to action", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("button", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("link", "lilo-blocks")],
  attributes: {},
  edit: function edit(_ref) {
    var className = _ref.className;
    console.log({
      className: className
    });
    return wp.element.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      allowedBlocks: ["lilo-blocks/cta-button"],
      template: [["lilo-blocks/cta-button", {
        label: "Our services"
      }], ["lilo-blocks/cta-button", {
        label: "Contact us"
      }]],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }));
  },
  save: function save() {
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/cta/link.js":
/*!********************************!*\
  !*** ./src/blocks/cta/link.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/cta/link.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("lilo-blocks/cta-button", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("CTA Button", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Add a call to action button", "lilo-blocks"),
  category: "lilo-category",
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("cta", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("call to action", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("call to action", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("button", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("link", "lilo-blocks")],
  parent: ["lilo-blocks/cta"],
  styles: [{
    name: "primary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Primary", "lilo-blocks"),
    isDefault: true
  }, {
    name: "secondary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Secondary", "lilo-blocks"),
    isDefault: false
  }],
  attributes: {
    label: {
      type: "string",
      default: "label"
    },
    url: {
      type: "string",
      default: ""
    },
    opensInNewTab: {
      type: "boolean",
      default: false
    },
    noFollow: {
      type: "boolean",
      default: false
    }
  },
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isUrlPickerOpen = _useState2[0],
        setIsUrlPickerOpen = _useState2[1];

    var url = attributes.url,
        opensInNewTab = attributes.opensInNewTab,
        noFollow = attributes.noFollow,
        label = attributes.label;
    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 4
      }
    }, wp.element.createElement("a", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: label,
      onChange: function onChange(val) {
        return setAttributes({
          label: val
        });
      },
      allowedFormats: [],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Link settings", "lilo-blocks"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 6
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Pick a link", "lilo-blocks"),
      icon: "admin-links",
      onClick: setIsUrlPickerOpen.bind(this, true),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }), isUrlPickerOpen && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
      onClose: setIsUrlPickerOpen.bind(this, false),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 8
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
      value: {
        url: url,
        opensInNewTab: opensInNewTab
      },
      onChange: setAttributes,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    })), url && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Unlink", "lilo-blocks"),
      icon: "editor-unlink",
      onClick: setAttributes.bind(this, {
        url: "",
        opensInNewTab: false,
        noFollow: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 8
      }
    }))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Extra link settings", "lilo-blocks"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 6
      }
    }, url && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Hide this link from search engines?", "lilo-blocks"),
      onChange: function onChange(val) {
        return setAttributes({
          noFollow: val
        });
      },
      checked: noFollow,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 8
      }
    }))));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var url = attributes.url,
        opensInNewTab = attributes.opensInNewTab,
        noFollow = attributes.noFollow,
        label = attributes.label;
    return wp.element.createElement("a", {
      href: url,
      target: classnames__WEBPACK_IMPORTED_MODULE_5___default()("", {
        _blank: opensInNewTab
      }),
      rel: classnames__WEBPACK_IMPORTED_MODULE_5___default()("noopener", {
        noreferrer: opensInNewTab,
        nofollow: noFollow
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      value: label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/homeBanner/index.js":
/*!****************************************!*\
  !*** ./src/blocks/homeBanner/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/homeBanner/index.js";



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("lilo-blocks/home-banner", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Home Banner", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add a home banner", "lilo-blocks"),
  category: "lilo-category",
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("home", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("banner", "lilo-blocks")],
  attributes: {},
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      "data-align": "full"
    };
  },
  supports: {
    align: ["full"]
  },
  edit: function edit(_ref) {
    var className = _ref.className;
    return wp.element.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      allowedBlocks: ["core/group"],
      template: [["core/group", {
        backgroundColor: "bg",
        align: "full"
      }, [["core/spacer", {
        height: 50
      }], ["core/columns", {
        className: "home_banner",
        align: "wide"
      }, [["core/column", {
        className: "home_banner__left gsap gsap-parent gsap-parent-animate-stagger-up"
      }, [["core/group", {}, [["core/spacer", {
        height: 50
      }], ["core/heading", {
        content: "Your Full-Funnel Growth Agency",
        className: "gsap-child-animate-stagger-up"
      }], ["core/spacer", {
        height: 30
      }], ["core/paragraph", {
        content: "We help eCommerce companies scale by bringing data-driven decisions and creativity together for a cohesive approach to paid media.",
        className: "gsap-child-animate-stagger-up"
      }], ["core/spacer", {
        height: 30
      }], ["lilo-blocks/cta", {
        className: "gsap-child-animate-stagger-up"
      }]]]]], ["core/column", {
        className: "home_banner__right gsap gsap-animate-fade-in-right"
      }, [["lilo-blocks/intro-video"]]]]], ["core/spacer", {
        height: 50
      }]]]],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }));
  },
  save: function save() {
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/introVideo/index.js":
/*!****************************************!*\
  !*** ./src/blocks/introVideo/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/introVideo/index.js";




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("lilo-blocks/intro-video", {
  title: "Intro Video",
  description: "Add an intro video",
  category: "lilo-category",
  parent: ["lilo-blocks/home-banner"],
  attributes: {
    imgUrl: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "img",
      default: null
    },
    imgAlt: {
      type: "string",
      source: "attribute",
      attribute: "alt",
      selector: "img",
      default: null
    },
    imgId: {
      type: "number"
    },
    vidUrl: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: "video",
      default: null
    },
    vidId: {
      type: "number"
    }
  },
  edit: function edit(_ref) {
    var _this = this;

    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var imgUrl = attributes.imgUrl,
        imgAlt = attributes.imgAlt,
        imgId = attributes.imgId,
        vidUrl = attributes.vidUrl,
        vidId = attributes.vidId;

    var handleSelectImage = function handleSelectImage(_ref2) {
      var url = _ref2.url,
          alt = _ref2.alt,
          id = _ref2.id;
      setAttributes({
        imgUrl: url,
        imgAlt: alt,
        imgId: id
      });
    };

    var handleSelectVideo = function handleSelectVideo(_ref3) {
      var url = _ref3.url,
          id = _ref3.id;
      setAttributes({
        vidUrl: url,
        vidId: id
      });
    };

    var handleRemoveImage = function handleRemoveImage() {
      setAttributes({
        imgUrl: null,
        imgAlt: null,
        imgId: null
      });
    };

    var handleRemoveVideo = function handleRemoveVideo() {
      setAttributes({
        vidUrl: null,
        vidAlt: null,
        vidId: null
      });
    };

    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 4
      }
    }, wp.element.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }
    }, imgUrl ? wp.element.createElement("img", {
      src: imgUrl,
      alt: imgAlt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }) : wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
      labels: {
        title: "Intro Image",
        instructions: "Add an intro image"
      },
      allowedTypes: ["image"],
      accept: "image/*",
      onSelect: handleSelectImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }), vidUrl ? wp.element.createElement("video", {
      src: vidUrl,
      muted: true,
      autoPlay: true,
      loop: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }) : wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
      labels: {
        title: "Intro Video",
        instructions: "Add an intro video"
      },
      allowedTypes: ["video"],
      accept: "video/*",
      onSelect: handleSelectVideo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 5
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Banner Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 6
      }
    }, imgUrl && wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 8
      }
    }, wp.element.createElement("img", {
      width: "100%",
      src: imgUrl,
      alt: imgAlt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: handleSelectImage,
      allowedTypes: ["image"],
      value: imgId,
      render: function render(_ref4) {
        var open = _ref4.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: open,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 33
          }
        }, "Edit");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 10
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: handleRemoveImage,
      style: {
        color: "red"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, "Delete"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Alt Text",
      value: imgAlt,
      onChange: function onChange(val) {
        return setAttributes({
          imgAlt: val
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Banner Video",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 6
      }
    }, vidUrl && wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 8
      }
    }, wp.element.createElement("video", {
      width: "100%",
      src: vidUrl,
      muted: true,
      autoPlay: true,
      loop: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: handleSelectVideo,
      allowedTypes: ["video"],
      value: vidId,
      render: function render(_ref5) {
        var open = _ref5.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: open,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 33
          }
        }, "Edit");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 10
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: handleRemoveVideo,
      style: {
        color: "red"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }, "Delete")))));
  },
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    var imgUrl = attributes.imgUrl,
        imgAlt = attributes.imgAlt,
        vidUrl = attributes.vidUrl;
    return wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 4
      }
    }, wp.element.createElement("img", {
      src: imgUrl,
      alt: imgAlt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 5
      }
    }), wp.element.createElement("video", {
      className: "banner__phone-video",
      src: vidUrl,
      muted: true,
      autoPlay: true,
      loop: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/partners/index.js":
/*!**************************************!*\
  !*** ./src/blocks/partners/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/partners/index.js";



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("lilo-blocks/partners", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Partners", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add a partners block", "lilo-blocks"),
  category: "lilo-category",
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      "data-align": "full"
    };
  },
  supports: {
    align: ["full"]
  },
  attributes: {},
  edit: function edit(_ref) {
    var className = _ref.className;
    return wp.element.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      template: [["core/group", {
        backgroundColor: "bg-light",
        align: "full"
      }, [["core/spacer", {
        height: 50
      }], ["core/columns", {
        align: "wide",
        className: "gsap gsap-parent gsap-parent-animate-stagger-up"
      }, [["core/column", {}, [["core/image", {
        className: "".concat(className, "__image gsap-child-animate-stagger-up")
      }]]], ["core/column", {}, [["core/image", {
        className: "".concat(className, "__image gsap-child-animate-stagger-up")
      }]]], ["core/column", {}, [["core/image", {
        className: "".concat(className, "__image gsap-child-animate-stagger-up")
      }]]], ["core/column", {}, [["core/image", {
        className: "".concat(className, "__image gsap-child-animate-stagger-up")
      }]]], ["core/column", {}, [["core/image", {
        className: "".concat(className, "__image gsap-child-animate-stagger-up")
      }]]], ["core/column", {}, [["core/image", {
        className: "".concat(className, "__image gsap-child-animate-stagger-up")
      }]]]]], ["core/spacer", {
        height: 50
      }]]]],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }));
  },
  save: function save() {
    var className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockDefaultClassName)("lilo-blocks/partners");
    return wp.element.createElement("div", {
      className: className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/sectionHeader/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/sectionHeader/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/sectionHeader/index.js";



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("lilo-blocks/section-header", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Section Header", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add a section header", "lilo-blocks"),
  category: "lilo-category",
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("section", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("header", "lilo-blocks")],
  attributes: {},
  edit: function edit(_ref) {
    var className = _ref.className;
    return wp.element.createElement("div", {
      className: "".concat(className, " gsap gsap-parent gsap-parent-animate-stagger-up"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      allowedBlocks: ["core/paragraph", "core/spacer", "core/heading", "lilo-blocks/cta"],
      template: [["core/paragraph", {
        content: "Services",
        className: "gsap-child-animate-stagger-up"
      }], ["core/spacer", {
        height: 10
      }], ["core/heading", {
        content: "We scale brands",
        className: "gsap-child-animate-stagger-up"
      }], ["core/spacer", {
        height: 25
      }], ["core/paragraph", {
        content: "We work alongside your team and brand to be your external growth team, with an in-house feel. We create high-performing content to pair with our paid media strategies to scale your brand, profitably.",
        className: "gsap-child-animate-stagger-up"
      }], ["core/spacer", {
        height: 25
      }], ["lilo-blocks/cta", {
        className: "gsap-child-animate-stagger-up"
      }]],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }
    }));
  },
  save: function save() {
    var className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockDefaultClassName)("lilo-blocks/section-header");
    return wp.element.createElement("div", {
      className: "".concat(className, " gsap gsap-parent gsap-parent-animate-stagger-up"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/statsCard/index.js":
/*!***************************************!*\
  !*** ./src/blocks/statsCard/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/haiyanghong/Local Sites/lilo/app/public/wp-content/plugins/lilo-blocks/src/blocks/statsCard/index.js",
    _this = undefined;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("lilo-blocks/stats-card", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Stats Card", "lilo-blocks"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add a stats card", "lilo-blocks"),
  category: "lilo-category",
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("stats", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("card", "lilo-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("statistics", "lilo-blocks")],
  attributes: {
    cardTitle: {
      type: "string",
      default: "$33M"
    },
    cardDescription: {
      type: "string",
      default: "Trackable revenue generated across our portfolio"
    },
    backgroundColor: {
      type: "string",
      default: "bg"
    },
    color: {
      type: "string",
      default: "orange"
    },
    customBackgroundColor: {
      type: "string"
    }
  },
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.withColors)({
    backgroundColor: "backgroundColor",
    color: "color"
  })(function (_ref) {
    var className = _ref.className,
        color = _ref.color,
        setColor = _ref.setColor,
        customColor = _ref.customColor,
        backgroundColor = _ref.backgroundColor,
        customBackgroundColor = _ref.customBackgroundColor,
        setBackgroundColor = _ref.setBackgroundColor,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var cardTitle = attributes.cardTitle,
        cardDescription = attributes.cardDescription;
    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, wp.element.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, _defineProperty({}, backgroundColor.class, !!backgroundColor.class)),
      style: {
        backgroundColor: backgroundColor.class ? undefined : customBackgroundColor
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "h4",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(className, "__title"), _defineProperty({}, color.class, !!color.class)),
      style: {
        color: color.class ? undefined : customColor
      },
      value: cardTitle,
      onChange: function onChange(val) {
        return setAttributes({
          cardTitle: val
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      tagName: "p",
      className: "".concat(className, "__description"),
      value: cardDescription,
      onChange: function onChange(val) {
        return setAttributes({
          cardDescription: val
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
      allowedBlocks: ["core/image"],
      template: [["core/image", {
        className: "".concat(className, "__image")
      }]],
      templateLock: "all",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 6
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color Settings", "lilo-blocks"),
      colorSettings: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color", "lilo-blocks"),
        onChange: setColor,
        value: color.color
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Background Color", "lilo-blocks"),
        onChange: setBackgroundColor,
        value: backgroundColor.color
      }],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }
    })));
  }),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var className = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.getBlockDefaultClassName)("lilo-blocks/stats-card");
    var color = attributes.color,
        customColor = attributes.customColor,
        backgroundColor = attributes.backgroundColor,
        customBackgroundColor = attributes.customBackgroundColor,
        cardTitle = attributes.cardTitle,
        cardDescription = attributes.cardDescription;
    var backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.getColorClassName)("backgroundColor", backgroundColor);
    var colorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.getColorClassName)("color", color);
    return wp.element.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(className, " gsap-child-animate-stagger-up"), _defineProperty({}, backgroundClass, !!backgroundClass)),
      style: {
        backgroundColor: backgroundClass ? undefined : customBackgroundColor
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 4
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "h4",
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(className, "__title"), _defineProperty({}, colorClass, !!colorClass)),
      style: {
        color: colorClass ? undefined : customColor
      },
      value: cardTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 5
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "p",
      className: "".concat(className, "__description"),
      value: cardDescription,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 5
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 5
      }
    }));
  }
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _blocks_sectionHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/sectionHeader */ "./src/blocks/sectionHeader/index.js");
/* harmony import */ var _blocks_cta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/cta */ "./src/blocks/cta/index.js");
/* harmony import */ var _blocks_introVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/introVideo */ "./src/blocks/introVideo/index.js");
/* harmony import */ var _blocks_homeBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/homeBanner */ "./src/blocks/homeBanner/index.js");
/* harmony import */ var _blocks_statsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/statsCard */ "./src/blocks/statsCard/index.js");
/* harmony import */ var _blocks_partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/partners */ "./src/blocks/partners/index.js");
/* harmony import */ var _blocks_bigBg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/bigBg */ "./src/blocks/bigBg/index.js");







 // import "./blockStyles";

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = wp.blockEditor;

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = wp.components;

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = wp.i18n;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/editor.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=editor.js.map