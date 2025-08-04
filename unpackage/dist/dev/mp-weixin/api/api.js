"use strict";
const api_http = require("./http.js");
const getBannerData = () => {
  return api_http.http("/user/getBanner");
};
exports.getBannerData = getBannerData;
