#!/usr/bin/env node

import { convertToAAYaruo } from './yaruo';

const inputText = process.argv[2] || 'Hello';
const aaArt = convertToAAYaruo(inputText);
console.log(aaArt);
