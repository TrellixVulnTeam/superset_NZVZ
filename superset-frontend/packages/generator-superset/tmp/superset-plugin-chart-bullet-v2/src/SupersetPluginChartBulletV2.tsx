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
import React, { useEffect, createRef } from 'react';
import { getSequentialSchemeRegistry, styled } from '@superset-ui/core';
import * as d3 from "d3";
import * as d3Scale from "d3-scale";
import { SupersetPluginChartBulletV2Props, SupersetPluginChartBulletV2StylesProps } from './types';
const sequentialSchemeRegistry = getSequentialSchemeRegistry();
// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

const Styles = styled.div<SupersetPluginChartBulletV2StylesProps>`
   background-color: ${({ theme }) => '#ffffff'};
   padding: ${({ theme }) => theme.gridUnit * 4}px;
   border-radius: ${({ theme }) => theme.gridUnit * 2}px;
   height: ${({ height }) => height}px;
   width: ${({ width }) => width}px;
 
   h3 {
     /* You can use your props to control CSS! */
     margin-top: 0;
     margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
     font-size: ${({ theme, headerFontSize }) => theme.typography.sizes[headerFontSize]}px;
     font-weight: ${({ theme, boldText }) => theme.typography.weights[boldText ? 'bold' : 'normal']};
   }

   .legend-cont {
    display: flex;
    flex-wrap: nowrap;
    align-self: end;
    height: 5vh;
    width: 100%;
    margin: 20% 3% 0% 2%;
  }
  
  .colorBox {
    display: flex;
    position: relative;
    // border-left: 3px solid white;
    // border-top: 3px solid white;
    // border-bottom: 3px solid white;
  }
  
  .tickNums {
    font-weight: normal;
    position: absolute;
    bottom: -20px;
    font-size: 13px;
  }
  
  .ticksBottom {
    bottom: -20px;
  }
  
  .ticksTop {
    top: -12px;
  }
  .tickPointer {
    text-align: center;
  }
  
 
   pre {
     height: ${({ theme, headerFontSize, height }) => (
    height - theme.gridUnit * 12 - theme.typography.sizes[headerFontSize]
  )}px;
   }

   .wrapper {
    text-transform: uppercase;
    color: #000;
    cursor: help;
    font-size: 20px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    -webkit-transform: translateZ(0); /* webkit flicker fix */
    -webkit-font-smoothing: antialiased; /* webkit text rendering fix */
  }
  
  .wrapper .tooltip {
    background: #fff;
    // opacity:0.6;
    bottom: 100%;
    color: #000;
    display: block;
    left: 0;
    margin-bottom: 15px;
    opacity: 0;
    padding: 10px;
    text-align: center;
    pointer-events: none;
    position: absolute;
    width: 100px;
    border-radius: 5px;
    border: solid #000 1px;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
    -webkit-transition: all .25s ease-out;
    -moz-transition: all .25s ease-out;
    -ms-transition: all .25s ease-out;
    -o-transition: all .25s ease-out;
    transition: all .25s ease-out;
    -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
    -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
    -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
    -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  }
  
  /* This bridges the gap so you can mouse into the tooltip without it disappearing */
  .wrapper .tooltip:before {
    bottom: -20px;
    content: " ";
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    width: 100%;
  }
  
  /* CSS Triangles - see Trevor's post */
  .wrapper .tooltip:after {
    // border-left: solid transparent 10px;
    // border-right: solid transparent 10px;
    // border-top: solid #000 10px;
    // bottom: -10px;
    // content: " ";
    // height: 0;
    // left: 50%;
    // margin-left: -13px;
    // position: absolute;
    // width: 0;
  }
  
  .wrapper:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
  }
  
  /* IE can just show/hide with no transition */
  .lte8 .wrapper .tooltip {
    display: none;
  }
  .lte8 .wrapper:hover .tooltip {
    display: block;
  }
  
 `;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

export default function SupersetPluginChartBulletV2(props: SupersetPluginChartBulletV2Props) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const { data, height, width, colorScheme, selectedMatrics, indicatorData } = props;
  // console.log("indicatorData", indicatorData);
  
  function getIndicator(selectedMatric:any) {
    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
      for (let indicatorIndex = 0; indicatorIndex < indicatorData.length; indicatorIndex++) {
        if(data[dataIndex][selectedMatric] === indicatorData[indicatorIndex][selectedMatric]) {
          return indicatorData[indicatorIndex][selectedMatric];
        }
      }
    }
  }
  const indicatorPosition  = getIndicator(selectedMatrics);
  // console.log("indicatorPosition", getIndicator(selectedMatrics));
  // console.log("PROPS", props);
  const colorsValues = sequentialSchemeRegistry.values();
  const filterColors: any = colorsValues.filter((c: any) => c.id === colorScheme);
  // console.log('filterColors scheme', filterColors);
  const colorsArray = filterColors.length === 1 ? filterColors[0].colors : filterColors[1].colors;
  // console.log('colorsArray', colorsArray);

  const totalCount = data.reduce((initialValue, b: any) => initialValue + (b.count ? b.count : b.sum__num), 0);
  const devidedWidth = totalCount <= 100 ? ((100 - totalCount) / data.length) : 0;
  // console.log("devidedWidth", devidedWidth);

  var colors = colorsArray.slice(Math.max(colorsArray.length - data.length, 0));
  // console.log("COLORS BEFORE", colors);
  if (colors.length < data.length) {
    var newColors: any = colors.length < 5 ? d3Scale.scaleLinear<String>().domain([1,10]).range([colors[0], colors[colors.length-2]]) : d3Scale.scaleLinear<String>().domain([1,10]).range(colors);
    var new_colors_array = [];
    var const_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = 0; i < data.length; i++) {
      const col = newColors(const_data[i]);
      new_colors_array.push(col);
    }
    
    if(colors.length > 5) {
      for(let i = 0; i < data.length - colors.length; i++) {
        colors.unshift(new_colors_array[(new_colors_array.length -1)-i]);
      }
    } else {
      colors = new_colors_array.reverse();
    }
    // if(colors.length === 7) colors.unshift(new_colors_array[(new_colors_array.length/2)-1]);
    // if(colors.length === 8) colors.unshift(new_colors_array[(new_colors_array.length/2)-1]);
    // if(colors.length === 9) colors.unshift(new_colors_array[(new_colors_array.length/2)-1]);
    colors = new_colors_array;
    // console.log("COLOR FILTERED AGAIN", colors);
  }
  // console.log("DATA", data);
  // console.log("PROCCESSED COLORS", colors);
  const colorScaleEQ = d3Scale
    .scaleQuantize()
    .domain(d3.extent(data, (d: any) => d.count ? d.count : d.sum__num))
    .range(data);

  const bins = colorScaleEQ.range().map((d) => colorScaleEQ.invertExtent(d));
  const rootElem = createRef<HTMLDivElement>();

  data.reduce((acc: any, d: any) => {
    const color: any = colorScaleEQ(d.count ? d.count : d.sum__num);
    if (acc[color]) {
      acc[color]++;
    } else {
      acc[color] = {};
      acc[color] = 1;
    }
    return acc;
  }, {});
  // console.log("count:", count);

  bins.reduce((acc: string[], d: any, i: number, arr: any) => {
    return i === arr.length - 1 ? [...acc, d[0], d[1]] : [...acc, d[0]];
  }, []);

  const formatNum = (num: any) => {
    if (num) {
      const round: any = Number.parseFloat(num.count ? num.count : num.sum__num).toFixed(0); //round decimal
      //const comma = new Intl.NumberFormat("en-US"); //comma format
      // return comma.format(round)
      return round;
    } else {
      return 0;
    }
  };

  // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    // const root = rootElem.current as HTMLElement;
    //  console.log('Plugin element', root);
  });

  //  console.log('Plugin props', props);
  const legend = colors.map((d: any, i: any) => {
    return (
      <div key={"legend-pt-" + i} className="colorBox wrapper" style={{ backgroundColor: d, flexBasis: (parseFloat(formatNum(data[i])) + devidedWidth) + "%"}}>
          
          <div className="tooltip">{data[i]['count'] ? data[i]['count'] : data[i]['sum__num']}</div>
          <div className={"tickNums ticksTop tickPointer"} style={{ width: "100%", textAlign: "center" }} >
            {data[i][selectedMatrics] === indicatorPosition ? ( <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Black_triangle.svg" style={{ width: "15px", height: "15px", margin: "-10px 50%"}} alt="pointer" /> ) : ( "" )}
          </div>
          <div className={"tickNums tickBottom"} style={{ width: "100%", textAlign: "center", bottom: data[i][selectedMatrics].length > 20 ? '-100px' : '-20px',  fontSize: data[i][selectedMatrics].length > 20 ? '9px' : '9px' }} >
            <div>{data[i][selectedMatrics]}</div>
          </div>

      </div>
    );
  });

  return (
    <Styles
      ref={rootElem}
      boldText={props.boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
    >
      <div className="legend-cont">{legend}</div>
    </Styles>
  );
}
