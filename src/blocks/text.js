/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Load fasta file
const load_fasta = {
    "type": "load_fasta",
    "message0": "load FASTA file %1",
    "args0": [
      {
        "type": "field_input",
        "name": "FILE",
        "text": "BRCA1_sequence.fasta"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  };

const plot =   {
  "type": "plot_bar_chart",
  "message0": "plot nucleotide frequency bar chart",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  load_fasta, plot,
]);




