import { createApp } from '@vue-mini/core';
import { proxySetData, setReadyStart } from './proxy';

proxySetData({
  console: true,
  ready: true,
});

setReadyStart();

createApp({});
