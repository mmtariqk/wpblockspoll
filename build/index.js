/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


function Edit(_ref) {
  let {
    attributes: {
      title,
      options = [["Work", 11], ["Eat", 2], ["Commute", 2], ["Watch TV", 2], ["Sleep", 7]]
    },
    setAttributes,
    context: {
      postType,
      postId
    }
  } = _ref;
  // const postType = useSelect((select) => {
  // 	return select('core/editor').getCurrentPostType();
  // });

  const [meta, updateMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', postType, 'meta', postId);
  const updatePollData = () => {
    updateMeta({
      ...meta,
      tariq_poll_data: JSON.stringify(options)
    });
    updateMeta({
      ...meta,
      tariq_poll_title: title
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_google_charts__WEBPACK_IMPORTED_MODULE_7__.Chart, {
    chartType: "PieChart",
    data: [["Item", "Votes"], ...options],
    options: {
      title: title
    },
    width: "100%",
    height: "400px"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    header: "Poll Options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Poll Options",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Title",
    value: title,
    onChange: newTitle => setAttributes({
      title: newTitle
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), options.map((option, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      key: i
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      width: "100%",
      border: "0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      width: "50%"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Item",
      value: option[0],
      onChange: newValue => {
        let removeIdx = false;
        let updatedOptions = options.map((entry, ei) => {
          if (option[0] == entry[0]) {
            return [newValue, entry[1]];
          }
          return entry;
        });
        setAttributes({
          options: updatedOptions
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      width: "50%"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Votes",
      value: option[1],
      onChange: newValue => {
        const updatedOptions = options.map(entry => {
          if (option[0] == entry[0]) {
            return [entry[0], newValue * 1];
          }
          return entry;
        });
        console.log(updatedOptions);
        setAttributes({
          options: updatedOptions
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => {
        let updatedOptions = [];
        updatedOptions = options.filter((entry, ei) => ei !== i);
        setAttributes({
          options: updatedOptions
        });
      }
    }, "x")))));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    width: "100%",
    border: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    style: {
      width: '100%',
      textAlign: 'center'
    },
    onClick: () => {
      const updatedOptions = [...options, ['', 0]];
      setAttributes({
        options: updatedOptions
      });
    }
  }, "Add New")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    style: {
      width: '100%',
      textAlign: 'center'
    },
    isPrimary: true,
    onClick: () => {
      updatePollData();
    }
  }, "Save")))))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/react-google-charts/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-google-charts/dist/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chart": function() { return /* binding */ Chart$1; },
/* harmony export */   "GoogleDataTableColumnRoleType": function() { return /* binding */ GoogleDataTableColumnRoleType; },
/* harmony export */   "default": function() { return /* binding */ Chart; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");



/**
 * Hook to load external script.
 * @param src - Source url to load.
 * @param onLoad - Success callback.
 * @param onError - Error callback.
 */ function useLoadScript(src, onLoad, onError) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!document) {
            return;
        }
        // Find script tag with same src in DOM.
        const foundScript = document.querySelector("script[src=\"".concat(src, "\"]"));
        // Call onLoad if script marked as loaded.
        if (foundScript === null || foundScript === void 0 ? void 0 : foundScript.dataset.loaded) {
            onLoad === null || onLoad === void 0 ? void 0 : onLoad();
            return;
        }
        // Create or get existed tag.
        const script = foundScript || document.createElement("script");
        // Set src if no script was found.
        if (!foundScript) {
            script.src = src;
        }
        // Mark script as loaded on load event.
        const onLoadWithMarker = ()=>{
            script.dataset.loaded = "1";
            onLoad === null || onLoad === void 0 ? void 0 : onLoad();
        };
        script.addEventListener("load", onLoadWithMarker);
        if (onError) {
            script.addEventListener("error", onError);
        }
        // Add to DOM if not yet added.
        if (!foundScript) {
            document.head.append(script);
        }
        return ()=>{
            script.removeEventListener("load", onLoadWithMarker);
            if (onError) {
                script.removeEventListener("error", onError);
            }
        };
    }, []);
}

/**
 * Hook to load Google Charts JS API.
 * @param params - Load parameters.
 * @param [params.chartVersion] - Chart version to load.
 * @param [params.chartPackages] - Packages to load.
 * @param [params.chartLanguage] - Languages to load.
 * @param [params.mapsApiKey] - Google Maps api key.
 * @returns
 */ function useLoadGoogleCharts(param) {
    let { chartVersion ="current" , chartPackages =[
        "corechart",
        "controls"
    ] , chartLanguage ="en" , mapsApiKey  } = param;
    const [googleCharts, setGoogleCharts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    useLoadScript("https://www.gstatic.com/charts/loader.js", ()=>{
        // @ts-expect-error Getting object from global namespace.
        const google = window === null || window === void 0 ? void 0 : window.google;
        if (!google) {
            return;
        }
        google.charts.load(chartVersion, {
            packages: chartPackages,
            language: chartLanguage,
            mapsApiKey
        });
        google.charts.setOnLoadCallback(()=>{
            setGoogleCharts(google);
        });
    }, ()=>{
        setFailed(true);
    });
    return [
        googleCharts,
        failed
    ];
}
/**
 * Wrapper around useLoadGoogleCharts to use in legacy components.
 */ function LoadGoogleCharts(param) {
    let { onLoad , onError , ...params } = param;
    const [googleCharts, failed] = useLoadGoogleCharts(params);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (googleCharts && onLoad) {
            onLoad(googleCharts);
        }
    }, [
        googleCharts
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (failed && onError) {
            onError();
        }
    }, [
        failed
    ]);
    return null;
}

const chartDefaultProps = {
    // <DEPRECATED_PROPS>
    legend_toggle: false,
    // </DEPRECATED_PROPS>
    options: {},
    legendToggle: false,
    getChartWrapper: ()=>{},
    spreadSheetQueryParameters: {
        headers: 1,
        gid: 1
    },
    rootProps: {},
    chartWrapperParams: {}
};

let uniqueID = 0;
const generateUniqueID = ()=>{
    uniqueID += 1;
    return "reactgooglegraph-".concat(uniqueID);
};

const DEFAULT_CHART_COLORS = [
    "#3366CC",
    "#DC3912",
    "#FF9900",
    "#109618",
    "#990099",
    "#3B3EAC",
    "#0099C6",
    "#DD4477",
    "#66AA00",
    "#B82E2E",
    "#316395",
    "#994499",
    "#22AA99",
    "#AAAA11",
    "#6633CC",
    "#E67300",
    "#8B0707",
    "#329262",
    "#5574A6",
    "#3B3EAC"
];

const loadDataTableFromSpreadSheet = async function(googleViz, spreadSheetUrl) {
    let urlParams = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new Promise((resolve, reject)=>{
        const headers = "".concat(urlParams.headers ? "headers=".concat(urlParams.headers) : "headers=0");
        const queryString = "".concat(urlParams.query ? "&tq=".concat(encodeURIComponent(urlParams.query)) : "");
        const gid = "".concat(urlParams.gid ? "&gid=".concat(urlParams.gid) : "");
        const sheet = "".concat(urlParams.sheet ? "&sheet=".concat(urlParams.sheet) : "");
        const access_token = "".concat(urlParams.access_token ? "&access_token=".concat(urlParams.access_token) : "");
        const urlQueryString = "".concat(headers).concat(gid).concat(sheet).concat(queryString).concat(access_token);
        const urlToSpreadSheet = "".concat(spreadSheetUrl, "/gviz/tq?").concat(urlQueryString); //&tq=${queryString}`;
        const query = new googleViz.visualization.Query(urlToSpreadSheet);
        query.send((response)=>{
            if (response.isError()) {
                reject("Error in query:  ".concat(response.getMessage(), " ").concat(response.getDetailedMessage()));
            } else {
                resolve(response.getDataTable());
            }
        });
    });
};

const { Provider , Consumer  } = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(chartDefaultProps);
const ContextProvider = (param)=>{
    let { children , value  } = param;
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Provider, {
        value: value
    }, children));
};
const ContextConsumer = (param)=>{
    let { render  } = param;
    return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Consumer, null, (context)=>{
        return render(context);
    }));
};

const GRAY_COLOR = "#CCCCCC";
class GoogleChartDataTableInner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    componentDidMount() {
        this.draw(this.props);
        window.addEventListener("resize", this.onResize);
        if (this.props.legend_toggle || this.props.legendToggle) {
            this.listenToLegendToggle();
        }
    }
    componentWillUnmount() {
        const { google , googleChartWrapper  } = this.props;
        window.removeEventListener("resize", this.onResize);
        google.visualization.events.removeAllListeners(googleChartWrapper);
        if (googleChartWrapper.getChartType() === "Timeline") {
            googleChartWrapper.getChart() && googleChartWrapper.getChart().clearChart();
        }
    }
    componentDidUpdate() {
        this.draw(this.props);
    }
    render() {
        return null;
    }
    constructor(...args){
        super(...args);
        this.state = {
            hiddenColumns: []
        };
        this.listenToLegendToggle = ()=>{
            const { google , googleChartWrapper  } = this.props;
            google.visualization.events.addListener(googleChartWrapper, "select", ()=>{
                const chart = googleChartWrapper.getChart();
                const selection = chart.getSelection();
                const dataTable = googleChartWrapper.getDataTable();
                if (selection.length === 0 || // We want to listen to when a whole row is selected. This is the case only when row === null
                selection[0].row || !dataTable) {
                    return;
                }
                const columnIndex = selection[0].column;
                const columnID = this.getColumnID(dataTable, columnIndex);
                if (this.state.hiddenColumns.includes(columnID)) {
                    this.setState((state)=>({
                            ...state,
                            hiddenColumns: [
                                ...state.hiddenColumns.filter((colID)=>colID !== columnID
                                ), 
                            ]
                        })
                    );
                } else {
                    this.setState((state)=>({
                            ...state,
                            hiddenColumns: [
                                ...state.hiddenColumns,
                                columnID
                            ]
                        })
                    );
                }
            });
        };
        this.applyFormatters = (dataTable, formatters)=>{
            const { google  } = this.props;
            for (let formatter of formatters){
                switch(formatter.type){
                    case "ArrowFormat":
                        {
                            const vizFormatter = new google.visualization.ArrowFormat(formatter.options);
                            vizFormatter.format(dataTable, formatter.column);
                            break;
                        }
                    case "BarFormat":
                        {
                            const vizFormatter = new google.visualization.BarFormat(formatter.options);
                            vizFormatter.format(dataTable, formatter.column);
                            break;
                        }
                    case "ColorFormat":
                        {
                            const vizFormatter = new google.visualization.ColorFormat(formatter.options);
                            const { ranges  } = formatter;
                            for (let range of ranges){
                                vizFormatter.addRange(...range);
                            }
                            vizFormatter.format(dataTable, formatter.column);
                            break;
                        }
                    case "DateFormat":
                        {
                            const vizFormatter = new google.visualization.DateFormat(formatter.options);
                            vizFormatter.format(dataTable, formatter.column);
                            break;
                        }
                    case "NumberFormat":
                        {
                            const vizFormatter = new google.visualization.NumberFormat(formatter.options);
                            vizFormatter.format(dataTable, formatter.column);
                            break;
                        }
                    case "PatternFormat":
                        {
                            const vizFormatter = new google.visualization.PatternFormat(formatter.options);
                            vizFormatter.format(dataTable, formatter.column);
                            break;
                        }
                }
            }
        };
        this.getColumnID = (dataTable, columnIndex)=>{
            return dataTable.getColumnId(columnIndex) || dataTable.getColumnLabel(columnIndex);
        };
        this.draw = async (param)=>{
            let { data , diffdata , rows , columns , options , legend_toggle , legendToggle , chartType , formatters , spreadSheetUrl , spreadSheetQueryParameters  } = param;
            const { google , googleChartWrapper  } = this.props;
            let dataTable;
            let chartDiff = null;
            if (diffdata) {
                const oldData = google.visualization.arrayToDataTable(diffdata.old);
                const newData = google.visualization.arrayToDataTable(diffdata.new);
                chartDiff = google.visualization[chartType].prototype.computeDiff(oldData, newData);
            }
            if (data !== null) {
                if (Array.isArray(data)) {
                    dataTable = google.visualization.arrayToDataTable(data);
                } else {
                    dataTable = new google.visualization.DataTable(data);
                }
            } else if (rows && columns) {
                dataTable = google.visualization.arrayToDataTable([
                    columns,
                    ...rows
                ]);
            } else if (spreadSheetUrl) {
                dataTable = await loadDataTableFromSpreadSheet(google, spreadSheetUrl, spreadSheetQueryParameters);
            } else {
                dataTable = google.visualization.arrayToDataTable([]);
            }
            const columnCount = dataTable.getNumberOfColumns();
            for(let i = 0; i < columnCount; i += 1){
                const columnID = this.getColumnID(dataTable, i);
                if (this.state.hiddenColumns.includes(columnID)) {
                    const previousColumnLabel = dataTable.getColumnLabel(i);
                    const previousColumnID = dataTable.getColumnId(i);
                    const previousColumnType = dataTable.getColumnType(i);
                    dataTable.removeColumn(i);
                    dataTable.addColumn({
                        label: previousColumnLabel,
                        id: previousColumnID,
                        type: previousColumnType
                    });
                }
            }
            const chart = googleChartWrapper.getChart();
            if (googleChartWrapper.getChartType() === "Timeline") {
                chart && chart.clearChart();
            }
            googleChartWrapper.setChartType(chartType);
            googleChartWrapper.setOptions(options || {});
            googleChartWrapper.setDataTable(dataTable);
            googleChartWrapper.draw();
            if (this.props.googleChartDashboard !== null) {
                this.props.googleChartDashboard.draw(dataTable);
            }
            if (chartDiff) {
                googleChartWrapper.setDataTable(chartDiff);
                googleChartWrapper.draw();
            }
            if (formatters) {
                this.applyFormatters(dataTable, formatters);
                googleChartWrapper.setDataTable(dataTable);
                googleChartWrapper.draw();
            }
            if (legendToggle === true || legend_toggle === true) {
                this.grayOutHiddenColumns({
                    options
                });
            }
            return;
        };
        this.grayOutHiddenColumns = (param)=>{
            let { options  } = param;
            const { googleChartWrapper  } = this.props;
            const dataTable = googleChartWrapper.getDataTable();
            if (!dataTable) return;
            const columnCount = dataTable.getNumberOfColumns();
            const hasAHiddenColumn = this.state.hiddenColumns.length > 0;
            if (hasAHiddenColumn === false) return;
            const colors = Array.from({
                length: columnCount - 1
            }).map((dontcare, i)=>{
                const columnID = this.getColumnID(dataTable, i + 1);
                if (this.state.hiddenColumns.includes(columnID)) {
                    return GRAY_COLOR;
                } else if (options && options.colors) {
                    return options.colors[i];
                } else {
                    return DEFAULT_CHART_COLORS[i];
                }
            });
            googleChartWrapper.setOptions({
                ...options,
                colors
            });
            googleChartWrapper.draw();
        };
        this.onResize = ()=>{
            const { googleChartWrapper  } = this.props;
            googleChartWrapper.draw();
        };
    }
}
class GoogleChartDataTable extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    componentDidMount() {}
    componentWillUnmount() {}
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { google , googleChartWrapper , googleChartDashboard  } = this.props;
        return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContextConsumer, {
            render: (props)=>{
                return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GoogleChartDataTableInner, Object.assign({}, props, {
                    google: google,
                    googleChartWrapper: googleChartWrapper,
                    googleChartDashboard: googleChartDashboard
                })));
            }
        }));
    }
}

class GoogleChartEvents extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    shouldComponentUpdate() {
        return false;
    }
    listenToEvents(param) {
        let { chartEvents , google , googleChartWrapper  } = param;
        if (!chartEvents) {
            return;
        }
        google.visualization.events.removeAllListeners(googleChartWrapper);
        for (let event of chartEvents){
            var _this = this;
            const { eventName , callback  } = event;
            google.visualization.events.addListener(googleChartWrapper, eventName, function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                callback({
                    chartWrapper: googleChartWrapper,
                    props: _this.props,
                    google: google,
                    eventArgs: args
                });
            });
        }
    }
    render() {
        const { google , googleChartWrapper  } = this.props;
        return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContextConsumer, {
            render: (propsFromContext)=>{
                this.listenToEvents({
                    chartEvents: propsFromContext.chartEvents || null,
                    google,
                    googleChartWrapper
                });
                return null;
            }
        }));
    }
}

let controlCounter = 0;
class GoogleChart extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    componentDidMount() {
        const { options , google , chartType , chartWrapperParams , toolbarItems , getChartEditor , getChartWrapper ,  } = this.props;
        const chartConfig = {
            chartType,
            options,
            containerId: this.getGraphID(),
            ...chartWrapperParams
        };
        const googleChartWrapper = new google.visualization.ChartWrapper(chartConfig);
        googleChartWrapper.setOptions(options || {});
        if (getChartWrapper) {
            getChartWrapper(googleChartWrapper, google);
        }
        const googleChartDashboard = new google.visualization.Dashboard(this.dashboard_ref);
        const googleChartControls = this.addControls(googleChartWrapper, googleChartDashboard);
        if (toolbarItems) {
            google.visualization.drawToolbar(this.toolbar_ref.current, toolbarItems);
        }
        let googleChartEditor = null;
        if (getChartEditor) {
            googleChartEditor = new google.visualization.ChartEditor();
            getChartEditor({
                chartEditor: googleChartEditor,
                chartWrapper: googleChartWrapper,
                google
            });
        }
        this.setState({
            googleChartEditor,
            googleChartControls: googleChartControls,
            googleChartDashboard: googleChartDashboard,
            googleChartWrapper,
            isReady: true
        });
    }
    componentDidUpdate() {
        if (!this.state.googleChartWrapper) return;
        if (!this.state.googleChartDashboard) return;
        if (!this.state.googleChartControls) return;
        const { controls  } = this.props;
        if (controls) {
            for(let i = 0; i < controls.length; i += 1){
                const { controlType , options , controlWrapperParams  } = controls[i];
                if (controlWrapperParams && "state" in controlWrapperParams) {
                    this.state.googleChartControls[i].control.setState(controlWrapperParams["state"]);
                }
                this.state.googleChartControls[i].control.setOptions(options);
                this.state.googleChartControls[i].control.setControlType(controlType);
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isReady !== nextState.isReady || nextProps.controls !== this.props.controls;
    }
    render() {
        const { width , height , options , style  } = this.props;
        const divStyle = {
            height: height || options && options.height,
            width: width || options && options.width,
            ...style
        };
        if (this.props.render) {
            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                ref: this.dashboard_ref,
                style: divStyle
            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                ref: this.toolbar_ref,
                id: "toolbar"
            }), this.props.render({
                renderChart: this.renderChart,
                renderControl: this.renderControl,
                renderToolbar: this.renderToolBar
            })));
        } else {
            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                ref: this.dashboard_ref,
                style: divStyle
            }, this.renderControl((param)=>{
                let { controlProp  } = param;
                return controlProp.controlPosition !== "bottom";
            }), this.renderChart(), this.renderControl((param)=>{
                let { controlProp  } = param;
                return controlProp.controlPosition === "bottom";
            }), this.renderToolBar()));
        }
    }
    constructor(...args1){
        var _this1;
        super(), _this1 = this;
        this.state = {
            googleChartWrapper: null,
            googleChartDashboard: null,
            googleChartControls: null,
            googleChartEditor: null,
            isReady: false
        };
        this.graphID = null;
        this.dashboard_ref = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        this.toolbar_ref = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        this.getGraphID = ()=>{
            const { graphID , graph_id  } = this.props;
            let instanceGraphID;
            if (!graphID && !graph_id) {
                if (!this.graphID) {
                    instanceGraphID = generateUniqueID();
                } else {
                    instanceGraphID = this.graphID;
                }
            } else if (graphID && !graph_id) {
                instanceGraphID = graphID;
            } else if (graph_id && !graphID) {
                instanceGraphID = graph_id;
            } else {
                instanceGraphID = graphID;
            }
            this.graphID = instanceGraphID;
            return this.graphID;
        };
        this.getControlID = (id, index)=>{
            controlCounter += 1;
            let controlID;
            if (typeof id === "undefined") {
                controlID = "googlechart-control-".concat(index, "-").concat(controlCounter);
            } else {
                controlID = id;
            }
            return controlID;
        };
        this.addControls = (googleChartWrapper, googleChartDashboard)=>{
            const { google , controls  } = this.props;
            const googleChartControls = !controls ? null : controls.map((control, i)=>{
                const { controlID: controlIDMaybe , controlType , options: controlOptions , controlWrapperParams ,  } = control;
                const controlID = this.getControlID(controlIDMaybe, i);
                return {
                    controlProp: control,
                    control: new google.visualization.ControlWrapper({
                        containerId: controlID,
                        controlType,
                        options: controlOptions,
                        ...controlWrapperParams
                    })
                };
            });
            if (!googleChartControls) {
                return null;
            }
            googleChartDashboard.bind(googleChartControls.map((param)=>{
                let { control  } = param;
                return control;
            }), googleChartWrapper);
            for (let chartControl of googleChartControls){
                const { control , controlProp  } = chartControl;
                const { controlEvents =[]  } = controlProp;
                for (let event of controlEvents){
                    var _this = this;
                    const { callback , eventName  } = event;
                    google.visualization.events.removeListener(control, eventName, callback);
                    google.visualization.events.addListener(control, eventName, function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        callback({
                            chartWrapper: googleChartWrapper,
                            controlWrapper: control,
                            props: _this.props,
                            google: google,
                            eventArgs: args
                        });
                    });
                }
            }
            return googleChartControls;
        };
        this.renderChart = ()=>{
            const { width , height , options , style , className , rootProps , google  } = this.props;
            const divStyle = {
                height: height || options && options.height,
                width: width || options && options.width,
                ...style
            };
            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({
                id: this.getGraphID(),
                style: divStyle,
                className: className
            }, rootProps), this.state.isReady && this.state.googleChartWrapper !== null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GoogleChartDataTable, {
                googleChartWrapper: this.state.googleChartWrapper,
                google: google,
                googleChartDashboard: this.state.googleChartDashboard
            }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GoogleChartEvents, {
                googleChartWrapper: this.state.googleChartWrapper,
                google: google
            })) : null));
        };
        this.renderControl = function() {
            let filter = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (param)=>{
                return true;
            };
            return _this1.state.isReady && _this1.state.googleChartControls !== null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _this1.state.googleChartControls.filter((param)=>{
                let { controlProp , control  } = param;
                return filter({
                    control,
                    controlProp
                });
            }).map((param)=>{
                let { control , controlProp  } = param;
                return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    key: control.getContainerId(),
                    id: control.getContainerId()
                }));
            })) : null;
        };
        this.renderToolBar = ()=>{
            if (!this.props.toolbarItems) return null;
            return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                ref: this.toolbar_ref
            }));
        };
    }
}

class Chart$1 extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        const { chartLanguage , chartPackages , chartVersion , mapsApiKey , loader , errorElement ,  } = this.props;
        return(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ContextProvider, {
            value: this.props
        }, this.state.loadingStatus === "ready" && this.state.google !== null ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(GoogleChart, Object.assign({}, this.props, {
            google: this.state.google
        })) : this.state.loadingStatus === "errored" && errorElement ? errorElement : loader, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadGoogleCharts, {
            chartLanguage: chartLanguage,
            chartPackages: chartPackages,
            chartVersion: chartVersion,
            mapsApiKey: mapsApiKey,
            onLoad: this.onLoad,
            onError: this.onError
        })));
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    isFullyLoaded(google) {
        const { controls , toolbarItems , getChartEditor  } = this.props;
        return google && google.visualization && google.visualization.ChartWrapper && google.visualization.Dashboard && (!controls || google.visualization.ChartWrapper) && (!getChartEditor || google.visualization.ChartEditor) && (!toolbarItems || google.visualization.drawToolbar);
    }
    constructor(...args){
        super(...args);
        this._isMounted = false;
        this.state = {
            loadingStatus: "loading",
            google: null
        };
        this.onLoad = (google1)=>{
            if (this.props.onLoad) {
                this.props.onLoad(google1);
            }
            if (this.isFullyLoaded(google1)) {
                this.onSuccess(google1);
            } else {
                // IE11: window.google is not fully set, we have to wait
                const id = setInterval(()=>{
                    const google = window.google;
                    if (this._isMounted) {
                        if (google && this.isFullyLoaded(google)) {
                            clearInterval(id);
                            this.onSuccess(google);
                        }
                    } else {
                        clearInterval(id);
                    }
                }, 1000);
            }
        };
        this.onSuccess = (google)=>{
            this.setState({
                loadingStatus: "ready",
                google
            });
        };
        this.onError = ()=>{
            this.setState({
                loadingStatus: "errored"
            });
        };
    }
}
Chart$1.defaultProps = chartDefaultProps;

var GoogleDataTableColumnRoleType;
(function(GoogleDataTableColumnRoleType) {
    GoogleDataTableColumnRoleType["annotation"] = "annotation";
    GoogleDataTableColumnRoleType["annotationText"] = "annotationText";
    GoogleDataTableColumnRoleType["certainty"] = "certainty";
    GoogleDataTableColumnRoleType["emphasis"] = "emphasis";
    GoogleDataTableColumnRoleType["interval"] = "interval";
    GoogleDataTableColumnRoleType["scope"] = "scope";
    GoogleDataTableColumnRoleType["style"] = "style";
    GoogleDataTableColumnRoleType["tooltip"] = "tooltip";
    GoogleDataTableColumnRoleType["domain"] = "domain";
})(GoogleDataTableColumnRoleType || (GoogleDataTableColumnRoleType = {}));

var Chart = Chart$1;


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"tariq-poll/tariq-poll","version":"0.1.0","title":"Tariq Block Poll","category":"widgets","icon":"smiley","description":"WP Poll block created by Tariq","supports":{"html":false,"customClassName":false,"multiple":false},"attributes":{"title":{"type":"string","default":"Tariq Poll"},"options":{"type":"array"}},"usesContext":["postId","postType"],"textdomain":"tariq-poll","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktariq_poll"] = self["webpackChunktariq_poll"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map