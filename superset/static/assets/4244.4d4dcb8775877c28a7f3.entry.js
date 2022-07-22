(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[4244,5042,6439],{

/***/ 82893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ setupPlugins)
});

// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/registries/ChartControlPanelRegistrySingleton.js
var ChartControlPanelRegistrySingleton = __webpack_require__(14299);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/models/Preset.js
var Preset = __webpack_require__(26474);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/utils/featureFlags.js
var featureFlags = __webpack_require__(46415);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumber/index.js + 1 modules
var BigNumber = __webpack_require__(74779);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumberTotal/index.js + 1 modules
var BigNumberTotal = __webpack_require__(48243);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-calendar/esm/index.js + 2 modules
var esm = __webpack_require__(73699);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/index.js + 2 modules
var legacy_plugin_chart_chord_esm = __webpack_require__(40758);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/index.js + 2 modules
var legacy_plugin_chart_country_map_esm = __webpack_require__(90022);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/index.js + 1 modules
var legacy_plugin_chart_event_flow_esm = __webpack_require__(42575);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/index.js + 2 modules
var legacy_plugin_chart_heatmap_esm = __webpack_require__(77512);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/index.js + 2 modules
var legacy_plugin_chart_histogram_esm = __webpack_require__(48143);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/index.js + 2 modules
var legacy_plugin_chart_horizon_esm = __webpack_require__(28801);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-map-box/esm/index.js + 1 modules
var legacy_plugin_chart_map_box_esm = __webpack_require__(93775);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-paired-t-test/esm/index.js + 2 modules
var legacy_plugin_chart_paired_t_test_esm = __webpack_require__(92565);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-parallel-coordinates/esm/index.js + 2 modules
var legacy_plugin_chart_parallel_coordinates_esm = __webpack_require__(8795);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-partition/esm/index.js + 3 modules
var legacy_plugin_chart_partition_esm = __webpack_require__(79909);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-pivot-table/esm/index.js + 2 modules
var legacy_plugin_chart_pivot_table_esm = __webpack_require__(93273);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-rose/esm/index.js + 2 modules
var legacy_plugin_chart_rose_esm = __webpack_require__(79954);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sankey/esm/index.js + 2 modules
var legacy_plugin_chart_sankey_esm = __webpack_require__(16915);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-sunburst/esm/index.js + 2 modules
var legacy_plugin_chart_sunburst_esm = __webpack_require__(65314);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-table/esm/index.js + 6 modules
var plugin_chart_table_esm = __webpack_require__(18917);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/index.js + 2 modules
var legacy_plugin_chart_treemap_esm = __webpack_require__(10773);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-word-cloud/esm/plugin/index.js + 4 modules
var esm_plugin = __webpack_require__(97235);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-world-map/esm/index.js + 2 modules
var legacy_plugin_chart_world_map_esm = __webpack_require__(83009);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartPlugin.js
var ChartPlugin = __webpack_require__(15179);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/models/ChartMetadata.js
var ChartMetadata = __webpack_require__(40702);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js + 1 modules
var TranslatorSingleton = __webpack_require__(60650);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/buildQueryContext.js
var buildQueryContext = __webpack_require__(69205);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-dual-axis-chart/esm/plugin/buildQuery.js
function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}

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

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */

function buildQuery(formData) {
  var {
    cols: groupby } =
  formData;
  var query = (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [_extends({}, baseQueryObject, {
    groupby: [...new Set(groupby)],
    is_timeseries: true })]);

  return query;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/validator/validateNonEmpty.js
var validateNonEmpty = __webpack_require__(42621);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/index.js + 10 modules
var chart_controls_esm = __webpack_require__(88483);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/esm/shared-controls/index.js
var shared_controls = __webpack_require__(28500);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-dual-axis-chart/esm/plugin/controlPanel.js
function controlPanel_extends() {controlPanel_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return controlPanel_extends.apply(this, arguments);}

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


var config = {
  /**
   * The control panel is split into two tabs: "Query" and
   * "Chart Options". The controls that define the inputs to
   * the chart data request, such as columns and metrics, usually
   * reside within "Query", while controls that affect the visual
   * appearance or functionality of the chart are under the
   * "Chart Options" section.
   *
   * There are several predefined controls that can be used.
   * Some examples:
   * - groupby: columns to group by (tranlated to GROUP BY statement)
   * - series: same as groupby, but single selection.
   * - metrics: multiple metrics (translated to aggregate expression)
   * - metric: sane as metrics, but single selection
   * - adhoc_filters: filters (translated to WHERE or HAVING
   *   depending on filter type)
   * - row_limit: maximum number of rows (translated to LIMIT statement)
   *
   * If a control panel has both a `series` and `groupby` control, and
   * the user has chosen `col1` as the value for the `series` control,
   * and `col2` and `col3` as values for the `groupby` control,
   * the resulting query will contain three `groupby` columns. This is because
   * we considered `series` control a `groupby` query field and its value
   * will automatically append the `groupby` field when the query is generated.
   *
   * It is also possible to define custom controls by importing the
   * necessary dependencies and overriding the default parameters, which
   * can then be placed in the `controlSetRows` section
   * of the `Query` section instead of a predefined control.
   *
   * import { validateNonEmpty } from '@superset-ui/core';
   * import {
   *   sharedControls,
   *   ControlConfig,
   *   ControlPanelConfig,
   * } from '@superset-ui/chart-controls';
   *
   * const myControl: ControlConfig<'SelectControl'> = {
   *   name: 'secondary_entity',
   *   config: {
   *     ...sharedControls.entity,
   *     type: 'SelectControl',
   *     label: t('Secondary Entity'),
   *     mapStateToProps: state => ({
   *       sharedControls.columnChoices(state.datasource)
   *       .columns.filter(c => c.groupby)
   *     })
   *     validators: [validateNonEmpty],
   *   },
   * }
   *
   * In addition to the basic drop down control, there are several predefined
   * control types (can be set via the `type` property) that can be used. Some
   * commonly used examples:
   * - SelectControl: Dropdown to select single or multiple values,
       usually columns
   * - MetricsControl: Dropdown to select metrics, triggering a modal
       to define Metric details
   * - AdhocFilterControl: Control to choose filters
   * - CheckboxControl: A checkbox for choosing true/false values
   * - SliderControl: A slider with min/max values
   * - TextControl: Control for text data
   *
   * For more control input types, check out the `incubator-superset` repo
   * and open this file: superset-frontend/src/explore/components/controls/index.js
   *
   * To ensure all controls have been filled out correctly, the following
   * validators are provided
   * by the `@superset-ui/core/lib/validator`:
   * - validateNonEmpty: must have at least one value
   * - validateInteger: must be an integer value
   * - validateNumber: must be an intger or decimal value
   */
  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [chart_controls_esm.sections.legacyTimeseriesTime, {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'cols',
      config: controlPanel_extends({}, shared_controls/* sharedControls.groupby */.Hq.groupby, {
        label: (0,TranslatorSingleton.t)('Columns'),
        description: (0,TranslatorSingleton.t)('Columns to group by') }) }],

    [{
      name: 'metrics',
      config: controlPanel_extends({}, shared_controls/* sharedControls.metrics */.Hq.metrics, {
        // it's possible to add validators to controls if
        // certain selections/types need to be enforced
        validators: [validateNonEmpty/* default */.Z] }) }],


    /*         [
              {
                name: 'equity_select',
                config: {
                  type: 'SelectControl',
                  label: t('Select equity for line chart'),
                  choices: [
                      ['orgname ', 'orgname'],
                      ['equity', 'equity'],
                      ['isactive', 'isactive'],
                      ['calculatedmetricvalue', 'calculatedmetricvalue'],
                      ['matricname', 'matricname']
                  ],
                  renderTrigger: true,
                  description: t('Select equity for line chart name '),
                },
              },
            ], */
    ['adhoc_filters'], [{
      name: 'row_limit',
      config: shared_controls/* sharedControls.row_limit */.Hq.row_limit }]] },

  {
    label: (0,TranslatorSingleton.t)('Hello Controls!'),
    expanded: true,
    controlSetRows: [[{
      name: 'header_text',
      config: {
        type: 'TextControl',
        default: 'Hello, World!',
        renderTrigger: true,
        // ^ this makes it apply instantaneously, without triggering a "run query" button
        label: (0,TranslatorSingleton.t)('Header Text'),
        description: (0,TranslatorSingleton.t)('The text you want to see in the header') } }],

    [{
      name: 'bold_text',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Bold Text'),
        renderTrigger: true,
        default: true,
        description: (0,TranslatorSingleton.t)('A checkbox to make the ') } }],

    [{
      name: 'header_font_size',
      config: {
        type: 'SelectControl',
        label: (0,TranslatorSingleton.t)('Font Size'),
        default: 'xl',
        choices: [// [value, label]
        ['xxs', 'xx-small'], ['xs', 'x-small'], ['s', 'small'], ['m', 'medium'], ['l', 'large'], ['xl', 'x-large'], ['xxl', 'xx-large']],
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('The size of your header font') } }]] }] };




/* harmony default export */ const controlPanel = (config);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-dual-axis-chart/esm/plugin/transformProps.js
function transformProps_extends() {transformProps_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return transformProps_extends.apply(this, arguments);}

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
function transformProps(chartProps) {
  /**
   * This function is called after a successful response has been
   * received from the chart data endpoint, and is used to transform
   * the incoming data prior to being sent to the Visualization.
   *
   * The transformProps function is also quite useful to return
   * additional/modified props to your data viz component. The formData
   * can also be accessed from your SupersetPluginDualAxisChart.tsx file, but
   * doing supplying custom props here is often handy for integrating third
   * party libraries that rely on specific props.
   *
   * A description of properties in `chartProps`:
   * - `height`, `width`: the height/width of the DOM element in which
   *   the chart is located
   * - `formData`: the chart data request payload that was sent to the
   *   backend.
   * - `queriesData`: the chart data response payload that was received
   *   from the backend. Some notable properties of `queriesData`:
   *   - `data`: an array with data, each row with an object mapping
   *     the column/alias to its value. Example:
   *     `[{ col1: 'abc', metric1: 10 }, { col1: 'xyz', metric1: 20 }]`
   *   - `rowcount`: the number of rows in `data`
   *   - `query`: the query that was issued.
   *
   * Please note: the transformProps function gets cached when the
   * application loads. When making changes to the `transformProps`
   * function during development with hot reloading, changes won't
   * be seen until restarting the development server.
   */
  var {
    width,
    height,
    formData,
    queriesData } =
  chartProps;
  var {
    boldText,
    headerFontSize,
    headerText } =
  formData;
  var data = queriesData[0].data; // console.log('formData via TransformProps.ts', formData);
  // console.log('chartProps', chartProps);

  return {
    width,
    height,
    data: data.map((item) => transformProps_extends({}, item, {
      // convert epoch to native Date
      // eslint-disable-next-line no-underscore-dangle
      __timestamp: new Date(item.__timestamp) })),

    // and now your control data, manipulated as needed, and passed through as props!
    boldText,
    headerFontSize,
    headerText,
    formData };

}
// EXTERNAL MODULE: ./packages/generator-superset/tmp/superset-plugin-dual-axis-chart/esm/images/thumbnail.png
var thumbnail = __webpack_require__(5057);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-dual-axis-chart/esm/plugin/index.js
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





class SupersetPluginDualAxisChart extends ChartPlugin/* default */.Z {
  /**
   * The constructor is used to pass relevant metadata and callbacks that get
   * registered in respective registries that are used throughout the library
   * and application. A more thorough description of each property is given in
   * the respective imported file.
   *
   * It is worth noting that `buildQuery` and is optional, and only needed for
   * advanced visualizations that require either post processing operations
   * (pivoting, rolling aggregations, sorting etc) or submitting multiple queries.
   */
  constructor() {
    var metadata = new ChartMetadata/* default */.Z({
      description: 'Superset Plugin Dual Axis Chart',
      name: (0,TranslatorSingleton.t)('Superset Plugin Dual Axis Chart'),
      thumbnail: thumbnail });

    super({
      buildQuery: buildQuery,
      controlPanel: controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 1960).then(__webpack_require__.bind(__webpack_require__, 71960)),
      metadata,
      transformProps: transformProps });

  }}
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-chart-bullet-v2/esm/plugin/buildQuery.js
function buildQuery_extends() {buildQuery_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return buildQuery_extends.apply(this, arguments);}

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

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */

function buildQuery_buildQuery(formData) {
  var {
    cols: groupby } =
  formData;
  var query = (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [buildQuery_extends({}, baseQueryObject, {
    groupby,
    is_timeseries: false })]);


  if (formData.organization_name) {
    var secondQuery = buildQuery_extends({}, query.queries[0]);

    secondQuery.filters = [{
      col: "orgname",
      op: "IN",
      val: [formData.organization_name] }];

    query.queries.push(secondQuery);
  }

  return query;
}
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js
var SequentialSchemeRegistrySingleton = __webpack_require__(67542);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-chart-bullet-v2/esm/plugin/controlPanel.js
function plugin_controlPanel_extends() {plugin_controlPanel_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return plugin_controlPanel_extends.apply(this, arguments);}

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

 // import {
//   t,
//   getCategoricalSchemeRegistry,
//   getSequentialSchemeRegistry,
//   legacyValidateInteger,
//   validateNonEmpty,
// } from '@superset-ui/core';

var sequentialSchemeRegistry = (0,SequentialSchemeRegistrySingleton/* default */.Z)();
var arrayUniqueByKey = [...new Map(sequentialSchemeRegistry.values().map((item) => [item['id'], item])).values()];
var controlPanel_config = {
  /**
   * The control panel is split into two tabs: "Query" and
   * "Chart Options". The controls that define the inputs to
   * the chart data request, such as columns and metrics, usually
   * reside within "Query", while controls that affect the visual
   * appearance or functionality of the chart are under the
   * "Chart Options" section.
   *
   * There are several predefined controls that can be used.
   * Some examples:
   * - groupby: columns to group by (tranlated to GROUP BY statement)
   * - series: same as groupby, but single selection.
   * - metrics: multiple metrics (translated to aggregate expression)
   * - metric: sane as metrics, but single selection
   * - adhoc_filters: filters (translated to WHERE or HAVING
   *   depending on filter type)
   * - row_limit: maximum number of rows (translated to LIMIT statement)
   *
   * If a control panel has both a `series` and `groupby` control, and
   * the user has chosen `col1` as the value for the `series` control,
   * and `col2` and `col3` as values for the `groupby` control,
   * the resulting query will contain three `groupby` columns. This is because
   * we considered `series` control a `groupby` query field and its value
   * will automatically append the `groupby` field when the query is generated.
   *
   * It is also possible to define custom controls by importing the
   * necessary dependencies and overriding the default parameters, which
   * can then be placed in the `controlSetRows` section
   * of the `Query` section instead of a predefined control.
   *
   * import { validateNonEmpty } from '@superset-ui/core';
   * import {
   *   sharedControls,
   *   ControlConfig,
   *   ControlPanelConfig,
   * } from '@superset-ui/chart-controls';
   *
   * const myControl: ControlConfig<'SelectControl'> = {
   *   name: 'secondary_entity',
   *   config: {
   *     ...sharedControls.entity,
   *     type: 'SelectControl',
   *     label: t('Secondary Entity'),
   *     mapStateToProps: state => ({
   *       sharedControls.columnChoices(state.datasource)
   *       .columns.filter(c => c.groupby)
   *     })
   *     validators: [validateNonEmpty],
   *   },
   * }
   *
   * In addition to the basic drop down control, there are several predefined
   * control types (can be set via the `type` property) that can be used. Some
   * commonly used examples:
   * - SelectControl: Dropdown to select single or multiple values,
       usually columns
   * - MetricsControl: Dropdown to select metrics, triggering a modal
       to define Metric details
   * - AdhocFilterControl: Control to choose filters
   * - CheckboxControl: A checkbox for choosing true/false values
   * - SliderControl: A slider with min/max values
   * - TextControl: Control for text data
   *
   * For more control input types, check out the `incubator-superset` repo
   * and open this file: superset-frontend/src/explore/components/controls/index.js
   *
   * To ensure all controls have been filled out correctly, the following
   * validators are provided
   * by the `@superset-ui/core/lib/validator`:
   * - validateNonEmpty: must have at least one value
   * - validateInteger: must be an integer value
   * - validateNumber: must be an intger or decimal value
   */
  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [chart_controls_esm.sections.legacyTimeseriesTime, {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'cols',
      config: plugin_controlPanel_extends({}, shared_controls/* sharedControls.groupby */.Hq.groupby, {
        label: (0,TranslatorSingleton.t)('Columns'),
        description: (0,TranslatorSingleton.t)('Columns to group by') }) }],

    [{
      name: 'metrics',
      config: plugin_controlPanel_extends({}, shared_controls/* sharedControls.metrics */.Hq.metrics) }],

    /* [
      {
        name: 'organization',
        config: {
          ...sharedControls.columns,
          label: t('Columns'),
          description: t('Select orgnisation'),
          
        },
      },
    ], */
    ['adhoc_filters'], [{
      name: 'organization_name',
      config: {
        type: 'SelectControl',
        label: (0,TranslatorSingleton.t)('Organization Name'),
        // default: 'a',
        choices: [['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'], ['f', 'f'], ['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['o', 'o'], ['p', 'p'], ['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'], ['u', 'u'], ['v', 'v'], ['w', 'w'], ['x', 'x'], ['y', 'y'], ['z', 'z'], ['aa', 'aa'], ['ab', 'ab'], ['ac', 'ac'], ['ad', 'ad'], ['ae', 'ae']],
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('List of organizations') } }],

    [{
      name: 'row_limit',
      config: plugin_controlPanel_extends({}, shared_controls/* sharedControls.row_limit */.Hq.row_limit) }]] },

  {
    label: (0,TranslatorSingleton.t)('Hello Controls!'),
    expanded: true,
    controlSetRows: [[{
      name: 'header_text',
      config: {
        type: 'TextControl',
        default: 'Hello, World!',
        renderTrigger: true,
        // ^ this makes it apply instantaneously, without triggering a "run query" button
        label: (0,TranslatorSingleton.t)('Header Text'),
        description: (0,TranslatorSingleton.t)('The text you want to see in the header') } }],

    [{
      name: 'bold_text',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Bold Text'),
        renderTrigger: true,
        default: true,
        description: (0,TranslatorSingleton.t)('A checkbox to make the ') } }],

    [{
      name: 'header_font_size',
      config: {
        type: 'SelectControl',
        label: (0,TranslatorSingleton.t)('Font Size'),
        default: 'xl',
        choices: [// [value, label]
        ['xxs', 'xx-small'], ['xs', 'x-small'], ['s', 'small'], ['m', 'medium'], ['l', 'large'], ['xl', 'x-large'], ['xxl', 'xx-large']],
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('The size of your header font') } }],

    [{
      name: 'color_scheme',
      config: {
        type: 'ColorSchemeControl',
        label: (0,TranslatorSingleton.t)('Linear color scheme'),
        choices: () => arrayUniqueByKey.map((value) => [value.id, value.label]),
        default: sequentialSchemeRegistry.getDefaultKey(),
        clearable: false,
        description: '',
        renderTrigger: true,
        schemes: () => sequentialSchemeRegistry.getMap(),
        isLinear: false } }]] }] };




/* harmony default export */ const plugin_controlPanel = (controlPanel_config);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-chart-bullet-v2/esm/plugin/transformProps.js
function plugin_transformProps_extends() {plugin_transformProps_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return plugin_transformProps_extends.apply(this, arguments);}

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
function transformProps_transformProps(chartProps) {
  /**
   * This function is called after a successful response has been
   * received from the chart data endpoint, and is used to transform
   * the incoming data prior to being sent to the Visualization.
   *
   * The transformProps function is also quite useful to return
   * additional/modified props to your data viz component. The formData
   * can also be accessed from your SupersetPluginChartBulletV2.tsx file, but
   * doing supplying custom props here is often handy for integrating third
   * party libraries that rely on specific props.
   *
   * A description of properties in `chartProps`:
   * - `height`, `width`: the height/width of the DOM element in which
   *   the chart is located
   * - `formData`: the chart data request payload that was sent to the
   *   backend.
   * - `queriesData`: the chart data response payload that was received
   *   from the backend. Some notable properties of `queriesData`:
   *   - `data`: an array with data, each row with an object mapping
   *     the column/alias to its value. Example:
   *     `[{ col1: 'abc', metric1: 10 }, { col1: 'xyz', metric1: 20 }]`
   *   - `rowcount`: the number of rows in `data`
   *   - `query`: the query that was issued.
   *
   * Please note: the transformProps function gets cached when the
   * application loads. When making changes to the `transformProps`
   * function during development with hot reloading, changes won't
   * be seen until restarting the development server.
   */
  console.log("chartProps", chartProps);
  var {
    width,
    height,
    formData,
    queriesData } =
  chartProps;
  var {
    boldText,
    headerFontSize,
    headerText,
    colorScheme,
    cols: column } =
  formData;
  var data = queriesData[0].data;
  var indicatorData = queriesData.length > 1 ? queriesData[1].data : [];
  var selectedMatrics = column[0]; // console.log('formData via TransformProps.ts', formData);

  return {
    width,
    height,
    data: data.map((item) => plugin_transformProps_extends({}, item, {
      // convert epoch to native Date
      // eslint-disable-next-line no-underscore-dangle
      __timestamp: new Date(item.__timestamp) })),

    // and now your control data, manipulated as needed, and passed through as props!
    colorScheme,
    selectedMatrics,
    boldText,
    headerFontSize,
    headerText,
    indicatorData };

}
// EXTERNAL MODULE: ./packages/generator-superset/tmp/superset-plugin-chart-bullet-v2/esm/images/thumbnail.png
var images_thumbnail = __webpack_require__(76375);
;// CONCATENATED MODULE: ./packages/generator-superset/tmp/superset-plugin-chart-bullet-v2/esm/plugin/index.js
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





class SupersetPluginChartBulletV2 extends ChartPlugin/* default */.Z {
  /**
   * The constructor is used to pass relevant metadata and callbacks that get
   * registered in respective registries that are used throughout the library
   * and application. A more thorough description of each property is given in
   * the respective imported file.
   *
   * It is worth noting that `buildQuery` and is optional, and only needed for
   * advanced visualizations that require either post processing operations
   * (pivoting, rolling aggregations, sorting etc) or submitting multiple queries.
   */
  constructor() {
    var metadata = new ChartMetadata/* default */.Z({
      description: 'Superset Plugin Chart Bullet Chart v2',
      name: (0,TranslatorSingleton.t)('Bullet Chart v2'),
      thumbnail: images_thumbnail });

    super({
      buildQuery: buildQuery_buildQuery,
      controlPanel: plugin_controlPanel,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(9189)]).then(__webpack_require__.bind(__webpack_require__, 79189)),
      metadata,
      transformProps: transformProps_transformProps });

  }}
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Area/index.js + 1 modules
var Area = __webpack_require__(90081);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Bar/index.js + 1 modules
var Bar = __webpack_require__(93661);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Bubble/index.js + 1 modules
var Bubble = __webpack_require__(96082);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Bullet/index.js + 1 modules
var Bullet = __webpack_require__(82622);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Compare/index.js + 1 modules
var Compare = __webpack_require__(40676);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/DistBar/index.js + 1 modules
var DistBar = __webpack_require__(66121);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/DualLine/index.js + 1 modules
var DualLine = __webpack_require__(63955);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/Line/index.js + 1 modules
var Line = __webpack_require__(99483);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/LineMulti/index.js + 1 modules
var LineMulti = __webpack_require__(80772);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-nvd3/esm/TimePivot/index.js + 1 modules
var TimePivot = __webpack_require__(28733);
// EXTERNAL MODULE: ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/index.js + 24 modules
var legacy_preset_chart_deckgl_esm = __webpack_require__(66306);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/BoxPlot/index.js + 3 modules
var BoxPlot = __webpack_require__(55778);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Funnel/index.js + 4 modules
var Funnel = __webpack_require__(47285);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Treemap/index.js + 4 modules
var Treemap = __webpack_require__(95990);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Gauge/index.js + 5 modules
var Gauge = __webpack_require__(26425);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Graph/index.js + 5 modules
var Graph = __webpack_require__(62110);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Radar/index.js + 4 modules
var Radar = __webpack_require__(51873);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/MixedTimeseries/index.js + 4 modules
var MixedTimeseries = __webpack_require__(84946);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Pie/index.js + 4 modules
var Pie = __webpack_require__(36325);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Area/index.js + 1 modules
var Timeseries_Area = __webpack_require__(13223);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/index.js + 1 modules
var Timeseries = __webpack_require__(54915);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/Bar/index.js
var Regular_Bar = __webpack_require__(58662);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/Line/index.js
var Regular_Line = __webpack_require__(64405);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/SmoothLine/index.js
var SmoothLine = __webpack_require__(79917);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Regular/Scatter/index.js + 1 modules
var Scatter = __webpack_require__(72812);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Timeseries/Step/index.js + 1 modules
var Step = __webpack_require__(66116);
// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-echarts/esm/Tree/index.js + 5 modules
var Tree = __webpack_require__(52595);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/chart/types/Base.js
var Base = __webpack_require__(52686);
// EXTERNAL MODULE: ./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js
var QueryResponse = __webpack_require__(23274);
;// CONCATENATED MODULE: ./src/filters/components/Select/types.ts
const DEFAULT_FORM_DATA = {
  defaultValue: null,
  enableEmptyFilter: false,
  inverseSelection: false,
  defaultToFirstItem: false,
  multiSelect: true,
  searchAllOptions: false,
  sortAscending: true };
;// CONCATENATED MODULE: ./src/filters/components/Select/buildQuery.ts
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


const Select_buildQuery_buildQuery = (formData, options) => {
  const { search, coltypeMap } = (options == null ? void 0 : options.ownState) || {};
  const { sortAscending, sortMetric } = { ...DEFAULT_FORM_DATA, ...formData };
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => {
    const { columns = [], filters = [] } = baseQueryObject;
    const extraFilters = [];
    if (search) {
      columns.forEach((column) => {
        if (coltypeMap[column] === QueryResponse/* GenericDataType.STRING */.Z.STRING) {
          extraFilters.push({
            col: column,
            op: 'ILIKE',
            val: `%${search}%` });

        } else
        if (coltypeMap[column] === QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC &&
        !Number.isNaN(Number(search))) {
          // for numeric columns we apply a >= where clause
          extraFilters.push({
            col: column,
            op: '>=',
            val: Number(search) });

        }
      });
    }
    const sortColumns = sortMetric ? [sortMetric] : columns;
    const query = [
    {
      ...baseQueryObject,
      groupby: columns,
      metrics: sortMetric ? [sortMetric] : [],
      filters: filters.concat(extraFilters),
      orderby: sortMetric || sortAscending !== undefined ?
      sortColumns.map((column) => [column, !!sortAscending]) :
      [] }];


    return query;
  });
};
/* harmony default export */ const Select_buildQuery = (Select_buildQuery_buildQuery);
// EXTERNAL MODULE: ./node_modules/@superset-ui/chart-controls/lib/index.js
var lib = __webpack_require__(27524);
;// CONCATENATED MODULE: ./src/filters/components/Select/controlPanel.ts
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




const { enableEmptyFilter, inverseSelection, multiSelect, defaultToFirstItem, searchAllOptions, sortAscending } = DEFAULT_FORM_DATA;
const Select_controlPanel_config = {
  controlPanelSections: [
  // @ts-ignore
  chart_controls_esm.sections.legacyRegularTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...lib.sharedControls.groupby,
        label: 'Column',
        required: true } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'sortAscending',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        label: (0,TranslatorSingleton.t)('Sort ascending'),
        default: sortAscending,
        description: (0,TranslatorSingleton.t)('Check for sorting ascending') } }],



    [
    {
      name: 'multiSelect',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Multiple select'),
        default: multiSelect,
        resetConfig: true,
        affectsDataMask: true,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('Allow selecting multiple values') } }],



    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: enableEmptyFilter,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value before applying the filter') } }],



    [
    {
      name: 'defaultToFirstItem',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Default to first item'),
        default: defaultToFirstItem,
        resetConfig: true,
        affectsDataMask: true,
        renderTrigger: true,
        requiredFirst: true,
        description: (0,TranslatorSingleton.t)('Select first item by default (when using this option, default value can’t be set)') } }],



    [
    {
      name: 'inverseSelection',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        affectsDataMask: true,
        label: (0,TranslatorSingleton.t)('Inverse selection'),
        default: inverseSelection,
        description: (0,TranslatorSingleton.t)('Exclude selected values') } }],



    [
    {
      name: 'searchAllOptions',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        affectsDataMask: true,
        label: (0,TranslatorSingleton.t)('Search all filter options'),
        default: searchAllOptions,
        description: (0,TranslatorSingleton.t)('By default, each filter loads at most 1000 choices at the initial page load. ' +
        'Check this box if you have more than 1000 filter values and want to enable dynamically ' +
        'searching that loads filter values as users type (may add stress to your database).') } }]] }],






  controlOverrides: {
    groupby: {
      multi: false,
      validators: [validateNonEmpty/* default */.Z] } } };



/* harmony default export */ const Select_controlPanel = (Select_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/Select/transformProps.ts

function Select_transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, behaviors, appSection, filterState, isRefreshing } = chartProps;
  const newFormData = { ...DEFAULT_FORM_DATA, ...formData };
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const [queryData] = queriesData;
  const { colnames = [], coltypes = [], data = [] } = queryData || {};
  const coltypeMap = colnames.reduce((accumulator, item, index) => ({ ...accumulator, [item]: coltypes[index] }), {});
  return {
    filterState,
    coltypeMap,
    appSection,
    width,
    behaviors,
    height,
    data,
    formData: newFormData,
    isRefreshing,
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/Select/images/thumbnail.png
var Select_images_thumbnail = __webpack_require__(80757);
;// CONCATENATED MODULE: ./src/filters/components/Select/index.ts
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





class FilterSelectPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Select filter'),
      description: (0,TranslatorSingleton.t)('Select filter plugin using AntD'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      enableNoResults: false,
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: Select_images_thumbnail });

    super({
      buildQuery: Select_buildQuery,
      controlPanel: Select_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 5181).then(__webpack_require__.bind(__webpack_require__, 45181)),
      metadata,
      transformProps: Select_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/Range/buildQuery.ts
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

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function Range_buildQuery_buildQuery(formData) {
  const { groupby } = formData;
  const [column = ''] = groupby || [];
  // @ts-ignore (need update interface Column )
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [
  {
    ...baseQueryObject,
    columns: [],
    groupby: [],
    metrics: [
    {
      aggregate: 'MIN',
      column: {
        column_name: column,
        id: 1,
        type_generic: QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC },

      expressionType: 'SIMPLE',
      hasCustomLabel: true,
      label: 'min' },

    {
      aggregate: 'MAX',
      column: {
        column_name: column,
        id: 2,
        type_generic: QueryResponse/* GenericDataType.NUMERIC */.Z.NUMERIC },

      expressionType: 'SIMPLE',
      hasCustomLabel: true,
      label: 'max' }] }]);




}
;// CONCATENATED MODULE: ./src/filters/components/Range/controlPanel.ts
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


const Range_controlPanel_config = {
  controlPanelSections: [
  chart_controls_esm.sections.legacyRegularTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...shared_controls/* sharedControls.groupby */.Hq.groupby,
        label: 'Column',
        required: true } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const Range_controlPanel = (Range_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/Range/transformProps.ts
function Range_transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, behaviors, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    data,
    formData,
    behaviors,
    height,
    setDataMask,
    filterState,
    width,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/Range/images/thumbnail.png
var Range_images_thumbnail = __webpack_require__(29872);
;// CONCATENATED MODULE: ./src/filters/components/Range/index.ts
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





class RangeFilterPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Range filter'),
      description: (0,TranslatorSingleton.t)('Range filter plugin using AntD'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: Range_images_thumbnail });

    super({
      buildQuery: Range_buildQuery_buildQuery,
      controlPanel: Range_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 326).then(__webpack_require__.bind(__webpack_require__, 30326)),
      metadata,
      transformProps: Range_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/Time/controlPanel.ts


const Time_controlPanel_config = {
  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...lib.sharedControls.groupby,
        label: 'Column',
        required: true } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const Time_controlPanel = (Time_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/Time/types.ts
const types_DEFAULT_FORM_DATA = {
  defaultValue: null };
;// CONCATENATED MODULE: ./src/filters/components/Time/transformProps.ts

function Time_transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, behaviors, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    data,
    filterState,
    formData: {
      ...types_DEFAULT_FORM_DATA,
      ...formData },

    height,
    behaviors,
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter,
    width };

}
// EXTERNAL MODULE: ./src/filters/components/Time/images/thumbnail.png
var Time_images_thumbnail = __webpack_require__(29884);
;// CONCATENATED MODULE: ./src/filters/components/Time/index.ts
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




class TimeFilterPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Time filter'),
      description: (0,TranslatorSingleton.t)('Custom time filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      thumbnail: Time_images_thumbnail,
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      datasourceCount: 0 });

    super({
      controlPanel: Time_controlPanel,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(4998), __webpack_require__.e(968), __webpack_require__.e(3375), __webpack_require__.e(9483)]).then(__webpack_require__.bind(__webpack_require__, 89483)),
      metadata,
      transformProps: Time_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/buildQuery.ts
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

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function TimeColumn_buildQuery_buildQuery(formData) {
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [
  {
    result_type: 'columns',
    columns: [],
    metrics: [],
    orderby: [] }]);


}
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/controlPanel.ts

const TimeColumn_controlPanel_config = {
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const TimeColumn_controlPanel = (TimeColumn_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/types.ts
const TimeColumn_types_DEFAULT_FORM_DATA = {
  defaultValue: null };
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/transformProps.ts

function TimeColumn_transformProps_transformProps(chartProps) {
  const { behaviors, formData, height, hooks, queriesData, width, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    filterState,
    behaviors,
    width,
    height,
    data,
    formData: { ...TimeColumn_types_DEFAULT_FORM_DATA, ...formData },
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/TimeColumn/images/thumbnail.png
var TimeColumn_images_thumbnail = __webpack_require__(53041);
;// CONCATENATED MODULE: ./src/filters/components/TimeColumn/index.ts
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





class FilterTimeColumnPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Time column'),
      description: (0,TranslatorSingleton.t)('Time column filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: TimeColumn_images_thumbnail });

    super({
      buildQuery: TimeColumn_buildQuery_buildQuery,
      controlPanel: TimeColumn_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 4572).then(__webpack_require__.bind(__webpack_require__, 24572)),
      metadata,
      transformProps: TimeColumn_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/buildQuery.ts
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

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function GroupBy_buildQuery_buildQuery(formData) {
  return (0,buildQueryContext/* default */.Z)(formData, (baseQueryObject) => [
  {
    ...baseQueryObject,
    result_type: 'columns',
    columns: [],
    metrics: [],
    orderby: [] }]);


}
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/types.ts
const GroupBy_types_DEFAULT_FORM_DATA = {
  defaultValue: null,
  multiSelect: false };
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/controlPanel.ts
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




const { multiSelect: controlPanel_multiSelect } = GroupBy_types_DEFAULT_FORM_DATA;
const GroupBy_controlPanel_config = {
  controlPanelSections: [
  // @ts-ignore
  chart_controls_esm.sections.legacyRegularTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'groupby',
      config: {
        ...lib.sharedControls.groupby,
        label: 'Columns to show',
        multiple: true,
        required: false } }]] },





  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'multiSelect',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Multiple select'),
        default: controlPanel_multiSelect,
        affectsDataMask: true,
        resetConfig: true,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('Allow selecting multiple values') } }],



    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const GroupBy_controlPanel = (GroupBy_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/transformProps.ts

function GroupBy_transformProps_transformProps(chartProps) {
  const { behaviors, formData, height, hooks, queriesData, width, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    filterState,
    behaviors,
    width,
    height,
    data,
    formData: { ...GroupBy_types_DEFAULT_FORM_DATA, ...formData },
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/GroupBy/images/thumbnail.png
var GroupBy_images_thumbnail = __webpack_require__(43225);
;// CONCATENATED MODULE: ./src/filters/components/GroupBy/index.ts
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





class FilterGroupByPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Group By'),
      description: (0,TranslatorSingleton.t)('Group By filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: GroupBy_images_thumbnail });

    super({
      buildQuery: GroupBy_buildQuery_buildQuery,
      controlPanel: GroupBy_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 8464).then(__webpack_require__.bind(__webpack_require__, 8464)),
      metadata,
      transformProps: GroupBy_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/buildQuery.ts
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

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
function TimeGrain_buildQuery_buildQuery(formData) {
  return (0,buildQueryContext/* default */.Z)(formData, () => [
  {
    result_type: 'timegrains',
    columns: [],
    metrics: [],
    orderby: [] }]);


}
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/controlPanel.ts

const TimeGrain_controlPanel_config = {
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('UI Configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'enableEmptyFilter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Required'),
        default: false,
        renderTrigger: true,
        description: (0,TranslatorSingleton.t)('User must select a value for this filter.') } }]] }] };







/* harmony default export */ const TimeGrain_controlPanel = (TimeGrain_controlPanel_config);
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/types.ts
const TimeGrain_types_DEFAULT_FORM_DATA = {
  defaultValue: null };
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/transformProps.ts

function TimeGrain_transformProps_transformProps(chartProps) {
  const { formData, height, hooks, queriesData, width, filterState } = chartProps;
  const { setDataMask = () => {}, setFocusedFilter = () => {}, unsetFocusedFilter = () => {} } = hooks;
  const { data } = queriesData[0];
  return {
    filterState,
    width,
    height,
    data,
    formData: { ...TimeGrain_types_DEFAULT_FORM_DATA, ...formData },
    setDataMask,
    setFocusedFilter,
    unsetFocusedFilter };

}
// EXTERNAL MODULE: ./src/filters/components/TimeGrain/images/thumbnail.png
var TimeGrain_images_thumbnail = __webpack_require__(78292);
;// CONCATENATED MODULE: ./src/filters/components/TimeGrain/index.ts
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





class FilterTimeGrainPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    const metadata = new ChartMetadata/* default */.Z({
      name: (0,TranslatorSingleton.t)('Time grain'),
      description: (0,TranslatorSingleton.t)('Time grain filter plugin'),
      behaviors: [Base/* Behavior.INTERACTIVE_CHART */.cg.INTERACTIVE_CHART, Base/* Behavior.NATIVE_FILTER */.cg.NATIVE_FILTER],
      tags: [(0,TranslatorSingleton.t)('Experimental')],
      thumbnail: TimeGrain_images_thumbnail });

    super({
      buildQuery: TimeGrain_buildQuery_buildQuery,
      controlPanel: TimeGrain_controlPanel,
      loadChart: () => __webpack_require__.e(/* import() */ 1948).then(__webpack_require__.bind(__webpack_require__, 81948)),
      metadata,
      transformProps: TimeGrain_transformProps_transformProps });

  }}
;// CONCATENATED MODULE: ./src/filters/components/index.ts
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






// EXTERNAL MODULE: ./node_modules/@superset-ui/plugin-chart-pivot-table/esm/plugin/index.js + 3 modules
var plugin_chart_pivot_table_esm_plugin = __webpack_require__(89253);
;// CONCATENATED MODULE: ./src/visualizations/FilterBox/transformProps.ts
const NOOP = () => {};
function FilterBox_transformProps_transformProps(chartProps) {
  const { datasource, formData, hooks, initialValues, queriesData, rawDatasource = {}, rawFormData, width, height } = chartProps;
  const { onAddFilter = NOOP, onFilterMenuOpen = NOOP, onFilterMenuClose = NOOP } = hooks;
  const { sliceId, dateFilter, instantFiltering, showDruidTimeGranularity, showDruidTimeOrigin, showSqlaTimeColumn, showSqlaTimeGranularity } = formData;
  const { verboseMap = {} } = datasource;
  const filterConfigs = formData.filterConfigs || [];
  const filtersFields = filterConfigs.map((flt) => ({
    ...flt,
    key: flt.column,
    label: flt.label || verboseMap[flt.column] || flt.column }));

  return {
    chartId: sliceId,
    width,
    height,
    datasource: rawDatasource,
    filtersChoices: queriesData[0].data,
    filtersFields,
    instantFiltering,
    onChange: onAddFilter,
    onFilterMenuOpen,
    onFilterMenuClose,
    origSelectedValues: initialValues || {},
    showDateFilter: dateFilter,
    showDruidTimeGrain: showDruidTimeGranularity,
    showDruidTimeOrigin,
    showSqlaTimeColumn,
    showSqlaTimeGrain: showSqlaTimeGranularity,
    // the original form data, needed for async select options
    rawFormData };

}
// EXTERNAL MODULE: ./src/visualizations/FilterBox/images/thumbnail.png
var FilterBox_images_thumbnail = __webpack_require__(34168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./src/visualizations/FilterBox/controlPanel.jsx
var _bootstrapData$common, _bootstrapData$common2; /**
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




const appContainer = document.getElementById('app');
const bootstrapData = JSON.parse(appContainer.getAttribute('data-bootstrap'));
const druidIsActive = !!(bootstrapData != null && (_bootstrapData$common = bootstrapData.common) != null && (_bootstrapData$common2 = _bootstrapData$common.conf) != null && _bootstrapData$common2.DRUID_IS_ACTIVE);
const druidSection = druidIsActive ?
[
[
{
  name: 'show_druid_time_granularity',
  config: {
    type: 'CheckboxControl',
    label: (0,TranslatorSingleton.t)('Show Druid granularity dropdown'),
    default: false,
    description: (0,TranslatorSingleton.t)('Check to include Druid granularity dropdown') } }],



[
{
  name: 'show_druid_time_origin',
  config: {
    type: 'CheckboxControl',
    label: (0,TranslatorSingleton.t)('Show Druid time origin'),
    default: false,
    description: (0,TranslatorSingleton.t)('Check to include time origin dropdown') } }]] :




[];

/* harmony default export */ const FilterBox_controlPanel = ({
  controlPanelSections: [
  chart_controls_esm.sections.legacyTimeseriesTime,
  {
    label: (0,TranslatorSingleton.t)('Filters configuration'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'filter_configs',
      config: {
        type: 'CollectionControl',
        label: 'Filters',
        description: (0,TranslatorSingleton.t)('Filter configuration for the filter box'),
        validators: [],
        controlName: 'FilterBoxItemControl',
        mapStateToProps: ({ datasource }) => ({ datasource }) } }],



    [(0,emotion_react_browser_esm.jsx)("hr", null)],
    [
    {
      name: 'date_filter',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Date filter'),
        default: true,
        description: (0,TranslatorSingleton.t)('Whether to include a time filter') } }],



    [
    {
      name: 'instant_filtering',
      config: {
        type: 'CheckboxControl',
        label: (0,TranslatorSingleton.t)('Instant filtering'),
        renderTrigger: true,
        default: false,
        description: (0,TranslatorSingleton.t)(
        'Check to apply filters instantly as they change instead of displaying [Apply] button') } }],




    [
    {
      name: 'show_sqla_time_granularity',
      config: {
        type: 'CheckboxControl',
        label: druidIsActive ?
        (0,TranslatorSingleton.t)('Show SQL time grain dropdown') :
        (0,TranslatorSingleton.t)('Show time grain dropdown'),
        default: false,
        description: druidIsActive ?
        (0,TranslatorSingleton.t)('Check to include SQL time grain dropdown') :
        (0,TranslatorSingleton.t)('Check to include time grain dropdown') } }],



    [
    {
      name: 'show_sqla_time_column',
      config: {
        type: 'CheckboxControl',
        label: druidIsActive ?
        (0,TranslatorSingleton.t)('Show SQL time column') :
        (0,TranslatorSingleton.t)('Show time column'),
        default: false,
        description: (0,TranslatorSingleton.t)('Check to include time column dropdown') } }],



    ...druidSection,
    ['adhoc_filters']] }],



  controlOverrides: {
    adhoc_filters: {
      label: (0,TranslatorSingleton.t)('Limit selector values'),
      description: (0,TranslatorSingleton.t)(
      'These filters apply to the values available in the dropdowns') } } });
;// CONCATENATED MODULE: ./src/visualizations/FilterBox/FilterBoxChartPlugin.js
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





const metadata = new ChartMetadata/* default */.Z({
  category: (0,TranslatorSingleton.t)('Tools'),
  name: (0,TranslatorSingleton.t)('Filter box'),
  description: (0,TranslatorSingleton.t)(`Chart component that lets you add a custom filter UI in your dashboard. When added to dashboard, a filter box lets users specify specific values or ranges to filter charts by. The charts that each filter box is applied to can be fine tuned as well in the dashboard view.

    Note that this plugin is being replaced with the new Filters feature that lives in the dashboard view itself. It's easier to use and has more capabilities!`),
  thumbnail: FilterBox_images_thumbnail,
  useLegacyApi: true });


class FilterBoxChartPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    super({
      controlPanel: FilterBox_controlPanel,
      metadata,
      transformProps: FilterBox_transformProps_transformProps,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(4998), __webpack_require__.e(4654), __webpack_require__.e(741), __webpack_require__.e(6962), __webpack_require__.e(968), __webpack_require__.e(9797), __webpack_require__.e(3375), __webpack_require__.e(9819), __webpack_require__.e(3)]).then(__webpack_require__.bind(__webpack_require__, 51777)) });

  }}
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/transformProps.js
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
function TimeTable_transformProps_transformProps(chartProps) {
  const { height, datasource, formData, queriesData } = chartProps;
  const { columnCollection = [], groupby, metrics, url } = formData;
  const { records, columns } = queriesData[0].data;
  const isGroupBy = (groupby == null ? void 0 : groupby.length) > 0;

  // When there is a "group by",
  // each row in the table is a database column
  // Otherwise,
  // each row in the table is a metric
  let rows;
  if (isGroupBy) {
    rows = columns.map((column) =>
    typeof column === 'object' ? column : { label: column });

  } else {
    const metricMap = datasource.metrics.reduce((acc, current) => {
      const map = acc;
      map[current.metric_name] = current;
      return map;
    }, {});

    rows = metrics.map((metric) =>
    typeof metric === 'object' ? metric : metricMap[metric]);

  }

  // TODO: Better parse this from controls instead of mutative value here.
  columnCollection.forEach((column) => {
    const c = column;
    if (c.timeLag !== undefined && c.timeLag !== null && c.timeLag !== '') {
      c.timeLag = parseInt(c.timeLag, 10);
    }
  });

  return {
    height,
    data: records,
    columnConfigs: columnCollection,
    rows,
    rowType: isGroupBy ? 'column' : 'metric',
    url };

}
// EXTERNAL MODULE: ./src/visualizations/TimeTable/images/thumbnail.png
var TimeTable_images_thumbnail = __webpack_require__(24432);
;// CONCATENATED MODULE: ./src/visualizations/TimeTable/TimeTableChartPlugin.js
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




const TimeTableChartPlugin_metadata = new ChartMetadata/* default */.Z({
  category: (0,TranslatorSingleton.t)('Table'),
  name: (0,TranslatorSingleton.t)('Time-series Table'),
  description: (0,TranslatorSingleton.t)(
  'Compare multiple time series charts (as sparklines) and related metrics quickly.'),

  tags: [
  (0,TranslatorSingleton.t)('Multi-Variables'),
  (0,TranslatorSingleton.t)('Comparison'),
  (0,TranslatorSingleton.t)('Legacy'),
  (0,TranslatorSingleton.t)('Percentages'),
  (0,TranslatorSingleton.t)('Tabular'),
  (0,TranslatorSingleton.t)('Text'),
  (0,TranslatorSingleton.t)('Trend')],

  thumbnail: TimeTable_images_thumbnail,
  useLegacyApi: true });


class TimeTableChartPlugin extends ChartPlugin/* default */.Z {
  constructor() {
    super({
      metadata: TimeTableChartPlugin_metadata,
      transformProps: TimeTable_transformProps_transformProps,
      loadChart: () => Promise.all(/* import() */[__webpack_require__.e(1216), __webpack_require__.e(1095), __webpack_require__.e(6962), __webpack_require__.e(423)]).then(__webpack_require__.bind(__webpack_require__, 55938)) });

  }}
;// CONCATENATED MODULE: ./src/visualizations/presets/MainPreset.js
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































class MainPreset extends Preset/* default */.Z {
  constructor() {
    const experimentalplugins = (0,featureFlags/* isFeatureEnabled */.c)(
    featureFlags/* FeatureFlag.DASHBOARD_FILTERS_EXPERIMENTAL */.T.DASHBOARD_FILTERS_EXPERIMENTAL) ?

    [new FilterGroupByPlugin().configure({ key: 'filter_groupby' })] :
    [];

    super({
      name: 'Legacy charts',
      presets: [new legacy_preset_chart_deckgl_esm/* DeckGLChartPreset */.kA()],
      plugins: [
      new Area/* default */.Z().configure({ key: 'area' }),
      new Bar/* default */.Z().configure({ key: 'bar' }),
      new BigNumber/* default */.Z().configure({ key: 'big_number' }),
      new BigNumberTotal/* default */.Z().configure({ key: 'big_number_total' }),
      new BoxPlot/* default */.Z().configure({ key: 'box_plot' }),
      new Bubble/* default */.Z().configure({ key: 'bubble' }),
      new Bullet/* default */.Z().configure({ key: 'bullet' }),
      new esm/* default */.Z().configure({ key: 'cal_heatmap' }),
      new legacy_plugin_chart_chord_esm/* default */.Z().configure({ key: 'chord' }),
      new Compare/* default */.Z().configure({ key: 'compare' }),
      new legacy_plugin_chart_country_map_esm/* default */.Z().configure({ key: 'country_map' }),
      new DistBar/* default */.Z().configure({ key: 'dist_bar' }),
      new DualLine/* default */.Z().configure({ key: 'dual_line' }),
      new legacy_plugin_chart_event_flow_esm/* default */.Z().configure({ key: 'event_flow' }),
      new FilterBoxChartPlugin().configure({ key: 'filter_box' }),
      new Funnel/* default */.Z().configure({ key: 'funnel' }),
      new Treemap/* default */.Z().configure({ key: 'treemap_v2' }),
      new Gauge/* default */.Z().configure({ key: 'gauge_chart' }),
      new Graph/* default */.Z().configure({ key: 'graph_chart' }),
      new Radar/* default */.Z().configure({ key: 'radar' }),
      new MixedTimeseries/* default */.Z().configure({
        key: 'mixed_timeseries' }),

      new legacy_plugin_chart_heatmap_esm/* default */.Z().configure({ key: 'heatmap' }),
      new legacy_plugin_chart_histogram_esm/* default */.Z().configure({ key: 'histogram' }),
      new legacy_plugin_chart_horizon_esm/* default */.Z().configure({ key: 'horizon' }),
      new Line/* default */.Z().configure({ key: 'line' }),
      new LineMulti/* default */.Z().configure({ key: 'line_multi' }),
      new legacy_plugin_chart_map_box_esm/* default */.Z().configure({ key: 'mapbox' }),
      new legacy_plugin_chart_paired_t_test_esm/* default */.Z().configure({ key: 'paired_ttest' }),
      new legacy_plugin_chart_parallel_coordinates_esm/* default */.Z().configure({ key: 'para' }),
      new legacy_plugin_chart_partition_esm/* default */.Z().configure({ key: 'partition' }),
      new Pie/* default */.Z().configure({ key: 'pie' }),
      new legacy_plugin_chart_pivot_table_esm/* default */.Z().configure({ key: 'pivot_table' }),
      new plugin_chart_pivot_table_esm_plugin/* default */.Z().configure({ key: 'pivot_table_v2' }),
      new legacy_plugin_chart_rose_esm/* default */.Z().configure({ key: 'rose' }),
      new legacy_plugin_chart_sankey_esm/* default */.Z().configure({ key: 'sankey' }),
      new legacy_plugin_chart_sunburst_esm/* default */.Z().configure({ key: 'sunburst' }),
      new plugin_chart_table_esm/* default */.Z().configure({ key: 'table' }),
      new TimePivot/* default */.Z().configure({ key: 'time_pivot' }),
      new TimeTableChartPlugin().configure({ key: 'time_table' }),
      new legacy_plugin_chart_treemap_esm/* default */.Z().configure({ key: 'treemap' }),
      new esm_plugin/* default */.Z().configure({ key: 'word_cloud' }),
      new legacy_plugin_chart_world_map_esm/* default */.Z().configure({ key: 'world_map' }),
      new Timeseries_Area/* default */.Z().configure({
        key: 'echarts_area' }),

      new Timeseries/* default */.Z().configure({
        key: 'echarts_timeseries' }),

      new Regular_Bar/* default */.Z().configure({
        key: 'echarts_timeseries_bar' }),

      new Regular_Line/* default */.Z().configure({
        key: 'echarts_timeseries_line' }),

      new SmoothLine/* default */.Z().configure({
        key: 'echarts_timeseries_smooth' }),

      new Scatter/* default */.Z().configure({
        key: 'echarts_timeseries_scatter' }),

      new Step/* default */.Z().configure({
        key: 'echarts_timeseries_step' }),

      new FilterSelectPlugin().configure({ key: 'filter_select' }),
      new RangeFilterPlugin().configure({ key: 'filter_range' }),
      new TimeFilterPlugin().configure({ key: 'filter_time' }),
      new FilterTimeColumnPlugin().configure({ key: 'filter_timecolumn' }),
      new FilterTimeGrainPlugin().configure({ key: 'filter_timegrain' }),
      new Tree/* default */.Z().configure({ key: 'tree_chart' }),
      new SupersetPluginChartBulletV2().configure({ key: 'bullet_v2' }),
      new SupersetPluginDualAxisChart().configure({ key: 'dual_axis_chart' }),
      ...experimentalplugins] });


  }}
;// CONCATENATED MODULE: ./src/setup/setupPluginsExtra.ts
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
// For individual deployments to add custom overrides
function setupPluginsExtra() {}
// EXTERNAL MODULE: ./src/modules/utils.js
var utils = __webpack_require__(91107);
;// CONCATENATED MODULE: ./src/explore/controlPanels/Separator.js
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



/* harmony default export */ const Separator = ({
  controlPanelSections: [
  {
    label: (0,TranslatorSingleton.t)('Code'),
    controlSetRows: [
    [
    {
      name: 'markup_type',
      config: {
        type: 'SelectControl',
        label: (0,TranslatorSingleton.t)('Markup type'),
        clearable: false,
        choices: (0,utils/* formatSelectOptions */.mG)(['markdown', 'html']),
        default: 'markdown',
        validators: [validateNonEmpty/* default */.Z],
        description: (0,TranslatorSingleton.t)('Pick your favorite markup language') } }],



    [
    {
      name: 'code',
      config: {
        type: 'TextAreaControl',
        label: (0,TranslatorSingleton.t)('Code'),
        description: (0,TranslatorSingleton.t)('Put your code here'),
        mapStateToProps: (state) => ({
          language:
          state.controls && state.controls.markup_type ?
          state.controls.markup_type.value :
          'markdown' }),

        default: '' } }]] }],






  controlOverrides: {
    code: {
      default:
      '####Section Title\n' +
      'A paragraph describing the section ' +
      'of the dashboard, right before the separator line ' +
      '\n\n' +
      '---------------' } },


  sectionOverrides: {
    druidTimeSeries: {
      controlSetRows: [] },

    sqlaTimeSeries: {
      controlSetRows: [] } } });
;// CONCATENATED MODULE: ./src/explore/controlPanels/TimeTable.js
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



/* harmony default export */ const TimeTable = ({
  controlPanelSections: [
  chart_controls_esm.sections.legacyTimeseriesTime,
  {
    label: (0,TranslatorSingleton.t)('Query'),
    expanded: true,
    controlSetRows: [
    ['metrics'],
    ['adhoc_filters'],
    ['groupby'],
    ['limit'],
    [
    {
      name: 'column_collection',
      config: {
        type: 'CollectionControl',
        label: (0,TranslatorSingleton.t)('Time series columns'),
        renderTrigger: true,
        validators: [validateNonEmpty/* default */.Z],
        controlName: 'TimeSeriesColumnControl' } }],



    ['row_limit'],
    [
    {
      name: 'url',
      config: {
        type: 'TextControl',
        label: (0,TranslatorSingleton.t)('URL'),
        description: (0,TranslatorSingleton.t)(
        "Templated link, it's possible to include {{ metric }} " +
        'or other values coming from the controls.'),

        default: '' } }]] }],






  controlOverrides: {
    groupby: {
      multiple: false } } });
;// CONCATENATED MODULE: ./src/setup/setupPlugins.ts
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





function setupPlugins() {
  new MainPreset().register();
  // TODO: Remove these shims once the control panel configs are moved into the plugin package.
  (0,ChartControlPanelRegistrySingleton/* default */.Z)().
  registerValue('separator', Separator).
  registerValue('time_table', TimeTable);
  setupPluginsExtra();
}

/***/ }),

/***/ 75042:
/***/ (() => {

/* (ignored) */

/***/ })

}]);