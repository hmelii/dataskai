webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/carousel/Carousel.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/carousel/Carousel.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Carousel_carousel__1aGUl {\\n  margin-bottom: 60px;\\n}\\n\\n.Carousel_carouselTabs__1Rbpl {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  margin: 0 -7px 44px;\\n  padding: 0;\\n  list-style: none;\\n}\\n@media (min-width: 768px) {\\n  .Carousel_carouselTabs__1Rbpl {\\n    grid-template-columns: repeat(6, 1fr);\\n    grid-gap: 0 15px;\\n  }\\n}\\n\\n.Carousel_carouselTabsItem__-Dr8y {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 1.6rem;\\n  color: #f2f2f2;\\n  line-height: 1.25;\\n}\\n\\n.Carousel_carouselTabsLink__2QawW {\\n  display: block;\\n  padding: 7px;\\n  color: inherit;\\n}\\n\\n.Carousel_carouselTabsLinkActive__1dLA2 {\\n  color: #ABC537;\\n}\\n\\n.Carousel_carouselItem__ylH8d {\\n  width: calc(100vw - 36px);\\n  max-width: 924px;\\n}\\n@media (min-width: 768px) {\\n  .Carousel_carouselItem__ylH8d {\\n    width: auto;\\n    display: grid;\\n    grid-template-columns: 296px 1fr;\\n    max-width: none;\\n  }\\n}\\n\\n.Carousel_carouselFig__QVkKi {\\n  margin-bottom: 35px;\\n}\\n@media (min-width: 768px) {\\n  .Carousel_carouselFig__QVkKi {\\n    order: 2;\\n    margin-left: 17px;\\n  }\\n}\\n\\n.Carousel_carouselTitle__HZDpb {\\n  margin-bottom: 15px;\\n  font-size: 2rem;\\n  line-height: 1.4;\\n}\\n\\n.Carousel_carouselSummary__2hGZB {\\n  font-size: 1.4rem;\\n  line-height: 1.4;\\n}\\n\\n@media (min-width: 768px) {\\n  .Carousel_carouselContext__2nTPD {\\n    order: 1;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Carousel.module.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,mBAAA;AAFF;;AAMA;EACE,aAAA;EACA,qCAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AAHF;AAKE;EAPF;IAQI,qCAAA;IACA,gBAAA;EAFF;AACF;;AAKA;EACE,SAAA;EACA,UAAA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;AAFF;;AAKA;EACE,cAAA;EACA,YAAA;EACA,cAAA;AAFF;;AAKA;EACE,cAAA;AAFF;;AAKA;EACE,yBAAA;EACA,gBAAA;AAFF;AAIE;EAJF;IAKI,WAAA;IACA,aAAA;IACA,gCAAA;IACA,eAAA;EADF;AACF;;AAIA;EACE,mBAAA;AADF;AAGE;EAHF;IAII,QAAA;IACA,iBAAA;EAAF;AACF;;AAGA;EACE,mBAAA;EACA,eAAA;EACA,gBAAA;AAAF;;AAGA;EACE,iBAAA;EACA,gBAAA;AAAF;;AAIE;EADF;IAEI,QAAA;EAAF;AACF\",\"sourcesContent\":[\"@import '../../styles/utils/vars';\\n\\n\\n.carousel {\\n  margin-bottom: 60px;\\n}\\n\\n\\n.carouselTabs {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  margin: 0 -7px 44px;\\n  padding: 0;\\n  list-style: none;\\n\\n  @media (min-width: $tableWidth) {\\n    grid-template-columns: repeat(6, 1fr);\\n    grid-gap: 0 15px;\\n  }\\n}\\n\\n.carouselTabsItem {\\n  margin: 0;\\n  padding: 0;\\n  font-size: 1.6rem;\\n  color: #f2f2f2;\\n  line-height: 1.25;\\n}\\n\\n.carouselTabsLink {\\n  display: block;\\n  padding: 7px;\\n  color: inherit;\\n}\\n\\n.carouselTabsLinkActive {\\n  color: #ABC537;\\n}\\n\\n.carouselItem {\\n  width: calc(100vw - 36px);\\n  max-width: 924px;\\n\\n  @media (min-width: $tableWidth) {\\n    width: auto;\\n    display: grid;\\n    grid-template-columns: 296px 1fr;\\n    max-width: none;\\n  }\\n}\\n\\n.carouselFig {\\n  margin-bottom: 35px;\\n\\n  @media (min-width: $tableWidth) {\\n    order: 2;\\n    margin-left: 17px;\\n  }\\n}\\n\\n.carouselTitle {\\n  margin-bottom: 15px;\\n  font-size: 2rem;\\n  line-height: 1.4;\\n}\\n\\n.carouselSummary {\\n  font-size: 1.4rem;\\n  line-height: 1.4;\\n}\\n\\n.carouselContext {\\n  @media (min-width: $tableWidth) {\\n    order: 1;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"carousel\": \"Carousel_carousel__1aGUl\",\n\t\"carouselTabs\": \"Carousel_carouselTabs__1Rbpl\",\n\t\"carouselTabsItem\": \"Carousel_carouselTabsItem__-Dr8y\",\n\t\"carouselTabsLink\": \"Carousel_carouselTabsLink__2QawW\",\n\t\"carouselTabsLinkActive\": \"Carousel_carouselTabsLinkActive__1dLA2\",\n\t\"carouselItem\": \"Carousel_carouselItem__ylH8d\",\n\t\"carouselFig\": \"Carousel_carouselFig__QVkKi\",\n\t\"carouselTitle\": \"Carousel_carouselTitle__HZDpb\",\n\t\"carouselSummary\": \"Carousel_carouselSummary__2hGZB\",\n\t\"carouselContext\": \"Carousel_carouselContext__2nTPD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5tb2R1bGUuc2Nzcz8zNzFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4QkFBOEIsd0JBQXdCLEdBQUcsbUNBQW1DLGtCQUFrQiwwQ0FBMEMsd0JBQXdCLGVBQWUscUJBQXFCLEdBQUcsNkJBQTZCLG1DQUFtQyw0Q0FBNEMsdUJBQXVCLEtBQUssR0FBRyx1Q0FBdUMsY0FBYyxlQUFlLHNCQUFzQixtQkFBbUIsc0JBQXNCLEdBQUcsdUNBQXVDLG1CQUFtQixpQkFBaUIsbUJBQW1CLEdBQUcsNkNBQTZDLG1CQUFtQixHQUFHLG1DQUFtQyw4QkFBOEIscUJBQXFCLEdBQUcsNkJBQTZCLG1DQUFtQyxrQkFBa0Isb0JBQW9CLHVDQUF1QyxzQkFBc0IsS0FBSyxHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRyw2QkFBNkIsa0NBQWtDLGVBQWUsd0JBQXdCLEtBQUssR0FBRyxvQ0FBb0Msd0JBQXdCLG9CQUFvQixxQkFBcUIsR0FBRyxzQ0FBc0Msc0JBQXNCLHFCQUFxQixHQUFHLCtCQUErQixzQ0FBc0MsZUFBZSxLQUFLLEdBQUcsT0FBTyxxRkFBcUYsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSywyREFBMkQsaUJBQWlCLHdCQUF3QixHQUFHLHFCQUFxQixrQkFBa0IsMENBQTBDLHdCQUF3QixlQUFlLHFCQUFxQix1Q0FBdUMsNENBQTRDLHVCQUF1QixLQUFLLEdBQUcsdUJBQXVCLGNBQWMsZUFBZSxzQkFBc0IsbUJBQW1CLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsaUJBQWlCLG1CQUFtQixHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyxtQkFBbUIsOEJBQThCLHFCQUFxQix1Q0FBdUMsa0JBQWtCLG9CQUFvQix1Q0FBdUMsc0JBQXNCLEtBQUssR0FBRyxrQkFBa0Isd0JBQXdCLHVDQUF1QyxlQUFlLHdCQUF3QixLQUFLLEdBQUcsb0JBQW9CLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcsc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IscUNBQXFDLGVBQWUsS0FBSyxHQUFHLHFCQUFxQjtBQUMzb0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvY2Fyb3VzZWwvQ2Fyb3VzZWwubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ2Fyb3VzZWxfY2Fyb3VzZWxfXzFhR1VsIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5DYXJvdXNlbF9jYXJvdXNlbFRhYnNfXzFSYnBsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgbWFyZ2luOiAwIC03cHggNDRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5DYXJvdXNlbF9jYXJvdXNlbFRhYnNfXzFSYnBsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgZ3JpZC1nYXA6IDAgMTVweDtcXG4gIH1cXG59XFxuXFxuLkNhcm91c2VsX2Nhcm91c2VsVGFic0l0ZW1fXy1Ecjh5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiAjZjJmMmYyO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcblxcbi5DYXJvdXNlbF9jYXJvdXNlbFRhYnNMaW5rX18yUWF3VyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uQ2Fyb3VzZWxfY2Fyb3VzZWxUYWJzTGlua0FjdGl2ZV9fMWRMQTIge1xcbiAgY29sb3I6ICNBQkM1Mzc7XFxufVxcblxcbi5DYXJvdXNlbF9jYXJvdXNlbEl0ZW1fX3lsSDhkIHtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzZweCk7XFxuICBtYXgtd2lkdGg6IDkyNHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5DYXJvdXNlbF9jYXJvdXNlbEl0ZW1fX3lsSDhkIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjk2cHggMWZyO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxufVxcblxcbi5DYXJvdXNlbF9jYXJvdXNlbEZpZ19fUVZrS2kge1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuQ2Fyb3VzZWxfY2Fyb3VzZWxGaWdfX1FWa0tpIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xcbiAgfVxcbn1cXG5cXG4uQ2Fyb3VzZWxfY2Fyb3VzZWxUaXRsZV9fSFpEcGIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbi5DYXJvdXNlbF9jYXJvdXNlbFN1bW1hcnlfXzJoR1pCIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuQ2Fyb3VzZWxfY2Fyb3VzZWxDb250ZXh0X18yblRQRCB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ2Fyb3VzZWwubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxtQkFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUtFO0VBUEY7SUFRSSxxQ0FBQTtJQUNBLGdCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFKRjtJQUtJLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZ0NBQUE7SUFDQSxlQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7QUFHRTtFQUhGO0lBSUksUUFBQTtJQUNBLGlCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUU7RUFERjtJQUVJLFFBQUE7RUFBRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy91dGlscy92YXJzJztcXG5cXG5cXG4uY2Fyb3VzZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuXFxuLmNhcm91c2VsVGFicyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIG1hcmdpbjogMCAtN3B4IDQ0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGVXaWR0aCkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBncmlkLWdhcDogMCAxNXB4O1xcbiAgfVxcbn1cXG5cXG4uY2Fyb3VzZWxUYWJzSXRlbSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogI2YyZjJmMjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbn1cXG5cXG4uY2Fyb3VzZWxUYWJzTGluayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uY2Fyb3VzZWxUYWJzTGlua0FjdGl2ZSB7XFxuICBjb2xvcjogI0FCQzUzNztcXG59XFxuXFxuLmNhcm91c2VsSXRlbSB7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDM2cHgpO1xcbiAgbWF4LXdpZHRoOiA5MjRweDtcXG5cXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGVXaWR0aCkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTZweCAxZnI7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmNhcm91c2VsRmlnIHtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxlV2lkdGgpIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xcbiAgfVxcbn1cXG5cXG4uY2Fyb3VzZWxUaXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuLmNhcm91c2VsU3VtbWFyeSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbi5jYXJvdXNlbENvbnRleHQge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZVdpZHRoKSB7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjYXJvdXNlbFwiOiBcIkNhcm91c2VsX2Nhcm91c2VsX18xYUdVbFwiLFxuXHRcImNhcm91c2VsVGFic1wiOiBcIkNhcm91c2VsX2Nhcm91c2VsVGFic19fMVJicGxcIixcblx0XCJjYXJvdXNlbFRhYnNJdGVtXCI6IFwiQ2Fyb3VzZWxfY2Fyb3VzZWxUYWJzSXRlbV9fLURyOHlcIixcblx0XCJjYXJvdXNlbFRhYnNMaW5rXCI6IFwiQ2Fyb3VzZWxfY2Fyb3VzZWxUYWJzTGlua19fMlFhd1dcIixcblx0XCJjYXJvdXNlbFRhYnNMaW5rQWN0aXZlXCI6IFwiQ2Fyb3VzZWxfY2Fyb3VzZWxUYWJzTGlua0FjdGl2ZV9fMWRMQTJcIixcblx0XCJjYXJvdXNlbEl0ZW1cIjogXCJDYXJvdXNlbF9jYXJvdXNlbEl0ZW1fX3lsSDhkXCIsXG5cdFwiY2Fyb3VzZWxGaWdcIjogXCJDYXJvdXNlbF9jYXJvdXNlbEZpZ19fUVZrS2lcIixcblx0XCJjYXJvdXNlbFRpdGxlXCI6IFwiQ2Fyb3VzZWxfY2Fyb3VzZWxUaXRsZV9fSFpEcGJcIixcblx0XCJjYXJvdXNlbFN1bW1hcnlcIjogXCJDYXJvdXNlbF9jYXJvdXNlbFN1bW1hcnlfXzJoR1pCXCIsXG5cdFwiY2Fyb3VzZWxDb250ZXh0XCI6IFwiQ2Fyb3VzZWxfY2Fyb3VzZWxDb250ZXh0X18yblRQRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/carousel/Carousel.module.scss\n");

/***/ })

})