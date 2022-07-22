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
import { SyntheticEvent } from 'react';
import { t } from '@superset-ui/core';
import { addWarningToast } from 'src/components/MessageToasts/actions';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import kebabCase from 'lodash/kebabCase';

/**
 * @remark
 * same as https://github.com/apache/superset/blob/c53bc4ddf9808a8bb6916bbe3cb31935d33a2420/superset-frontend/src/assets/stylesheets/less/variables.less#L34
 */

/**
 * generate a consistent file stem from a description and date
 *
 * @param description title or description of content of file
 * @param date date when file was generated
 */
const generateFileStem = (description: string, date = new Date()) =>
  `${kebabCase(description)}-${date.toISOString().replace(/[: ]/g, '-')}`;

/**
 * Create an event handler for turning an element into an image
 *
 * @param selector css selector of the parent element which should be turned into image
 * @param description name or a short description of what is being printed.
 *   Value will be normalized, and a date as well as a file extension will be added.
 * @param domToImageOptions dom-to-image Options object.
 * @param isExactSelector if false, searches for the closest ancestor that matches selector.
 * @returns event handler
 */
export default function downloadAsPdf(
  selector: string,
  description: string,
  isExactSelector = false,
) {
  return (event: SyntheticEvent) => {
    const elementToPrint = isExactSelector
      ? document.querySelector(selector)
      : event.currentTarget.closest(selector);

    if (!elementToPrint) {
      return addWarningToast(
        t('PDF download failed, please refresh and try again.'),
      );
    }

    return html2canvas(
      document.querySelector('.dashboard') as HTMLCanvasElement,
    ).then(canvas => {
      const dashboard = document.querySelector(
        '.dashboard',
      ) as HTMLCanvasElement | null;
      let height = 0;
      let width = 0;
      if (dashboard != null) {
        height = dashboard.offsetHeight;
        width = dashboard.offsetWidth;
      }
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [width / 2, height / 2],
        putOnlyUsedFonts: true,
        compress: true,
      });
      pdf.addImage(canvas, 'PNG', 0, 0, width / 2, height / 2);
      pdf.save(`${generateFileStem(description)}.pdf`);
      window.open(canvas.toDataURL());
    });
  };
}
