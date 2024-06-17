import { createApp } from '@vue-mini/core';
import { proxySetData, setReadyStart } from './proxy';

proxySetData();

setReadyStart();

createApp({});
