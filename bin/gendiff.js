#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.version('0.8.0', '-v, --version', 'output the version number')
.arguments('<filepath1> <filepath2>')
.option('-f, --format <type>', 'output format')
.action((file1, file2, options) => {
    const { format } = options;
    console.log(gendiff(file1, file2));
  });

program.parse();