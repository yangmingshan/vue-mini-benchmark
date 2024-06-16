import { definePage, onReady } from '@vue-mini/core';
import { setReadyStart, getReadyTimeWithModal } from '../../proxy';

definePage(() => {
  const reLaunch = () => {
    setReadyStart();
    wx.reLaunch({
      url: '/pages/static/index',
    });
  };

  const reLaunch2 = () => {
    setReadyStart();
    wx.reLaunch({
      url: '/pages/index/index',
    });
  };

  onReady(() => {
    getReadyTimeWithModal();
  });

  return {
    reLaunch,
    reLaunch2,
  };
});
