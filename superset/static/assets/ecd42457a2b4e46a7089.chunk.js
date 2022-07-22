"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[9189],{

/***/ 79189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SupersetPluginChartBulletV2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67542);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37840);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15078);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14893);
var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) {if (!raw) {raw = strings.slice(0);}strings.raw = raw;return strings;}

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




var sequentialSchemeRegistry = (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(); // The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled
// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

var Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .styled.div */ .iK.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n   background-color: ", ";\n   padding: ", "px;\n   border-radius: ", "px;\n   height: ", "px;\n   width: ", "px;\n \n   h3 {\n     /* You can use your props to control CSS! */\n     margin-top: 0;\n     margin-bottom: ", "px;\n     font-size: ", "px;\n     font-weight: ", ";\n   }\n\n   .legend-cont {\n    display: flex;\n    flex-wrap: nowrap;\n    align-self: end;\n    height: 5vh;\n    width: 100%;\n    margin: 20% 3% 0% 2%;\n  }\n  \n  .colorBox {\n    display: flex;\n    position: relative;\n    // border-left: 3px solid white;\n    // border-top: 3px solid white;\n    // border-bottom: 3px solid white;\n  }\n  \n  .tickNums {\n    font-weight: normal;\n    position: absolute;\n    bottom: -20px;\n    font-size: 13px;\n  }\n  \n  .ticksBottom {\n    bottom: -20px;\n  }\n  \n  .ticksTop {\n    top: -12px;\n  }\n  .tickPointer {\n    text-align: center;\n  }\n  \n \n   pre {\n     height: ", "px;\n   }\n\n   .wrapper {\n    text-transform: uppercase;\n    color: #000;\n    cursor: help;\n    font-size: 20px;\n    margin: 0 auto;\n    position: relative;\n    text-align: center;\n    -webkit-transform: translateZ(0); /* webkit flicker fix */\n    -webkit-font-smoothing: antialiased; /* webkit text rendering fix */\n  }\n  \n  .wrapper .tooltip {\n    background: #fff;\n    // opacity:0.6;\n    bottom: 100%;\n    color: #000;\n    display: block;\n    left: 0;\n    margin-bottom: 15px;\n    opacity: 0;\n    padding: 10px;\n    text-align: center;\n    pointer-events: none;\n    position: absolute;\n    width: 100px;\n    border-radius: 5px;\n    border: solid #000 1px;\n    -webkit-transform: translateY(10px);\n    -moz-transform: translateY(10px);\n    -ms-transform: translateY(10px);\n    -o-transform: translateY(10px);\n    transform: translateY(10px);\n    -webkit-transition: all .25s ease-out;\n    -moz-transition: all .25s ease-out;\n    -ms-transition: all .25s ease-out;\n    -o-transition: all .25s ease-out;\n    transition: all .25s ease-out;\n    -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n  }\n  \n  /* This bridges the gap so you can mouse into the tooltip without it disappearing */\n  .wrapper .tooltip:before {\n    bottom: -20px;\n    content: \" \";\n    display: block;\n    height: 20px;\n    left: 0;\n    position: absolute;\n    width: 100%;\n  }\n  \n  /* CSS Triangles - see Trevor's post */\n  .wrapper .tooltip:after {\n    // border-left: solid transparent 10px;\n    // border-right: solid transparent 10px;\n    // border-top: solid #000 10px;\n    // bottom: -10px;\n    // content: \" \";\n    // height: 0;\n    // left: 50%;\n    // margin-left: -13px;\n    // position: absolute;\n    // width: 0;\n  }\n  \n  .wrapper:hover .tooltip {\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px);\n  }\n  \n  /* IE can just show/hide with no transition */\n  .lte8 .wrapper .tooltip {\n    display: none;\n  }\n  .lte8 .wrapper:hover .tooltip {\n    display: block;\n  }\n  \n "])), (_ref) => {
  var {
    theme } =
  _ref;
  return '#ffffff';
}, (_ref2) => {
  var {
    theme } =
  _ref2;
  return theme.gridUnit * 4;
}, (_ref3) => {
  var {
    theme } =
  _ref3;
  return theme.gridUnit * 2;
}, (_ref4) => {
  var {
    height } =
  _ref4;
  return height;
}, (_ref5) => {
  var {
    width } =
  _ref5;
  return width;
}, (_ref6) => {
  var {
    theme } =
  _ref6;
  return theme.gridUnit * 3;
}, (_ref7) => {
  var {
    theme,
    headerFontSize } =
  _ref7;
  return theme.typography.sizes[headerFontSize];
}, (_ref8) => {
  var {
    theme,
    boldText } =
  _ref8;
  return theme.typography.weights[boldText ? 'bold' : 'normal'];
}, (_ref9) => {
  var {
    theme,
    headerFontSize,
    height } =
  _ref9;
  return height - theme.gridUnit * 12 - theme.typography.sizes[headerFontSize];
});
/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

function SupersetPluginChartBulletV2(props) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  var {
    data,
    height,
    width,
    colorScheme,
    selectedMatrics,
    indicatorData } =
  props; // console.log("indicatorData", indicatorData);

  function getIndicator(selectedMatric) {
    for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
      for (var indicatorIndex = 0; indicatorIndex < indicatorData.length; indicatorIndex++) {
        if (data[dataIndex][selectedMatric] === indicatorData[indicatorIndex][selectedMatric]) {
          return indicatorData[indicatorIndex][selectedMatric];
        }
      }
    }
  }

  var indicatorPosition = getIndicator(selectedMatrics); // console.log("indicatorPosition", getIndicator(selectedMatrics));
  // console.log("PROPS", props);

  var colorsValues = sequentialSchemeRegistry.values();
  var filterColors = colorsValues.filter((c) => c.id === colorScheme); // console.log('filterColors scheme', filterColors);

  var colorsArray = filterColors.length === 1 ? filterColors[0].colors : filterColors[1].colors; // console.log('colorsArray', colorsArray);

  var totalCount = data.reduce((initialValue, b) => initialValue + (b.count ? b.count : b.sum__num), 0);
  var devidedWidth = totalCount <= 100 ? (100 - totalCount) / data.length : 0; // console.log("devidedWidth", devidedWidth);

  var colors = colorsArray.slice(Math.max(colorsArray.length - data.length, 0)); // console.log("COLORS BEFORE", colors);

  if (colors.length < data.length) {
    var newColors = colors.length < 5 ? d3_scale__WEBPACK_IMPORTED_MODULE_2__.scaleLinear().domain([1, 10]).range([colors[0], colors[colors.length - 2]]) : d3_scale__WEBPACK_IMPORTED_MODULE_2__.scaleLinear().domain([1, 10]).range(colors);
    var new_colors_array = [];
    var const_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (var i = 0; i < data.length; i++) {
      var col = newColors(const_data[i]);
      new_colors_array.push(col);
    }

    if (colors.length > 5) {
      for (var _i = 0; _i < data.length - colors.length; _i++) {
        colors.unshift(new_colors_array[new_colors_array.length - 1 - _i]);
      }
    } else {
      colors = new_colors_array.reverse();
    } // if(colors.length === 7) colors.unshift(new_colors_array[(new_colors_array.length/2)-1]);
    // if(colors.length === 8) colors.unshift(new_colors_array[(new_colors_array.length/2)-1]);
    // if(colors.length === 9) colors.unshift(new_colors_array[(new_colors_array.length/2)-1]);


    colors = new_colors_array; // console.log("COLOR FILTERED AGAIN", colors);
  } // console.log("DATA", data);
  // console.log("PROCCESSED COLORS", colors);


  var colorScaleEQ = d3_scale__WEBPACK_IMPORTED_MODULE_2__.scaleQuantize().domain(d3__WEBPACK_IMPORTED_MODULE_1__.extent(data, (d) => d.count ? d.count : d.sum__num)).range(data);
  var bins = colorScaleEQ.range().map((d) => colorScaleEQ.invertExtent(d));
  var rootElem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  data.reduce((acc, d) => {
    var color = colorScaleEQ(d.count ? d.count : d.sum__num);

    if (acc[color]) {
      acc[color]++;
    } else {
      acc[color] = {};
      acc[color] = 1;
    }

    return acc;
  }, {}); // console.log("count:", count);

  bins.reduce((acc, d, i, arr) => {
    return i === arr.length - 1 ? [...acc, d[0], d[1]] : [...acc, d[0]];
  }, []);

  var formatNum = (num) => {
    if (num) {
      var round = Number.parseFloat(num.count ? num.count : num.sum__num).toFixed(0); //round decimal
      //const comma = new Intl.NumberFormat("en-US"); //comma format
      // return comma.format(round)

      return round;
    } else {
      return 0;
    }
  }; // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and the useEffect hook.


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {// const root = rootElem.current as HTMLElement;
    //  console.log('Plugin element', root);
  }); //  console.log('Plugin props', props);

  var legend = colors.map((d, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: "legend-pt-" + i,
      className: "colorBox wrapper",
      style: {
        backgroundColor: d,
        flexBasis: parseFloat(formatNum(data[i])) + devidedWidth + "%" } },

    /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tooltip" },
    data[i]['count'] ? data[i]['count'] : data[i]['sum__num']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tickNums ticksTop tickPointer",
      style: {
        width: "100%",
        textAlign: "center" } },

    data[i][selectedMatrics] === indicatorPosition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Black_triangle.svg",
      style: {
        width: "15px",
        height: "15px",
        margin: "-10px 50%" },

      alt: "pointer" }) :
    ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tickNums tickBottom",
      style: {
        width: "100%",
        textAlign: "center",
        bottom: data[i][selectedMatrics].length > 20 ? '-100px' : '-20px',
        fontSize: data[i][selectedMatrics].length > 20 ? '9px' : '9px' } },

    /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data[i][selectedMatrics])));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Styles, {
    ref: rootElem,
    boldText: props.boldText,
    headerFontSize: props.headerFontSize,
    height: height,
    width: width },
  /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "legend-cont" },
  legend));
}

/***/ })

}]);