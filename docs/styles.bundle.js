webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --violet-00: #f2eff8;\n  --violet-0: #ccc7db;\n  --violet-1: #7668a6;\n  --violet-2: #484065;\n  --violet-3: #3b3551;\n  --violet-4: #342e46;\n  --gray-1: #eeeff3;\n  --gray-2: #ecedf1;\n  --btn-violet: #7667a8;\n  --btn-red: #de2850;\n  --btn-rose: #f1b8be;\n  --line-gray: 1px solid #cccccc;\n  --bg-largest: 75em;\n  --bg-large: 56.25em;\n  --bg-medium: 43.75em;\n  --bg-small: 25.88em; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n  @media screen and (min-width: 75em) {\n    html {\n      font-size: 75%; } }\n  @media screen and (max-width: 56.25em) {\n    html {\n      font-size: 56.25%; } }\n  @media screen and (max-width: 50em) {\n    html {\n      font-size: 50%; } }\n  @media screen and (max-width: 37.5em) {\n    html {\n      font-size: 37.5%; } }\n\n/*\r\n@include respond(phone){//1rem = 6px, 10px/16px = 62.5%\r\n  font-size: 37.5%;\r\n}\r\n\r\n@include respond(tab-land){//1rem = 9px, 10px/16px = 62.5%\r\n  font-size: 62.5%;\r\n}\r\n\r\n@include respond(tab-port){//1rem = 8px, 10px/16px = 62.5%\r\n  font-size: 56.25%;\r\n}\r\n\r\n@include respond(big-screen){//1rem = 12px, 10px/16px = 62.5%\r\n  font-size: 75%;\r\n}\r\n*/\nbody {\n  background-color: #ecedf1;\n  background-color: var(--gray-2);\n  background-size: cover;\n  font-family: 'Lato', sans-serif;\n  font-weight: 400;\n  line-height: 1.6; }\n\n.footer {\n  width: 50px;\n  height: 50px;\n  margin: 10rem auto;\n  padding: 5rem;\n  background-color: #7668a6;\n  background-color: var(--violet-1);\n  border-radius: 15px; }\n\n.header {\n  width: 50px;\n  height: 50px;\n  margin: 10rem auto;\n  padding: 5rem;\n  background-color: #484065;\n  background-color: var(--violet-2);\n  border-radius: 15px; }\n\n.u-c-text {\n  text-align: center; }\n\n.u-l-text {\n  text-align: left; }\n\n.u-r-text {\n  text-align: right; }\n\n.u-text-to-upper {\n  text-transform: uppercase; }\n\n.u-margin-t-small {\n  margin-top: 2rem; }\n\n.u-margin-t-medium {\n  margin-top: 4rem; }\n\n.u-margin-b-small {\n  margin-bottom: 2rem; }\n\n.u-margin-b-medium {\n  margin-bottom: 4rem; }\n\n.u-padding-t-small {\n  padding-top: 2rem; }\n\n.u-bottom-0 {\n  bottom: 0; }\n\n.u-top-0 {\n  top: 0; }\n\n.u-w {\n  color: white; }\n\n.u-b {\n  color: black; }\n\n.u-shadow {\n  box-shadow: 0 0 2rem #aaaaaa; }\n\n.u-remove-uline {\n  text-decoration: none; }\n\n.active {\n  opacity: 1;\n  color: green; }\n\n.header-1 {\n  font-size: 1.8rem;\n  letter-spacing: .5rem;\n  text-align: center;\n  padding: 1.7rem; }\n  @media screen and (max-width: 415px) {\n    .header-1 {\n      font-size: .6rem;\n      letter-spacing: .2rem; } }\n\n.header-2 {\n  font-size: 1.4rem;\n  letter-spacing: .3rem;\n  text-align: center;\n  padding: 1.7rem; }\n  @media screen and (max-width: 415px) {\n    .header-2 {\n      font-size: .4rem;\n      letter-spacing: .2rem; } }\n\n.logo {\n  width: 5rem;\n  height: 5rem;\n  background-color: #de2850;\n  background-color: var(--btn-red); }\n\n.btn {\n  background-color: transparent;\n  border: none; }\n  .btn__red {\n    background-color: #de2850;\n    background-color: var(--btn-red);\n    color: white;\n    padding: 1rem 1.8rem;\n    font-size: 1rem;\n    border-radius: .3rem; }\n  .btn__purple {\n    background-color: #7668a6;\n    background-color: var(--violet-1);\n    color: white;\n    padding: 1rem 1.8rem;\n    font-size: 1rem;\n    border-radius: .3rem; }\n\n.grid-on {\n  max-width: 100%;\n  margin: 5rem; }\n\n.row {\n  max-width: inherit;\n  margin: 0 auto; }\n  .row:not(:last-child) {\n    margin-bottom: 2.5rem; }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left;\n    padding: 1px; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 2.5rem; }\n  .row .col-1-of-1 {\n    width: 100%; }\n  .row .col-1-of-2 {\n    width: calc((100% - 2.5rem) / 2); }\n    @media screen and (max-width: 37.5em) {\n      .row .col-1-of-2 {\n        width: 100%; }\n        .row .col-1-of-2:not(:last-child) {\n          margin-bottom: 2.5rem; }\n        .row .col-1-of-2::after {\n          content: \"\";\n          display: table;\n          clear: both; }\n        .row .col-1-of-2 [class^=\"col-\"] {\n          float: left;\n          padding: 1px; }\n          .row .col-1-of-2 [class^=\"col-\"]:not(:last-child) {\n            margin-right: 2.5rem; } }\n  .row .col-1-of-2-2nd {\n    width: calc((100% - 2.5rem) / 2); }\n    @media screen and (max-width: 50em) {\n      .row .col-1-of-2-2nd {\n        width: 100%; }\n        .row .col-1-of-2-2nd:nth-child(odd) {\n          display: none; }\n        .row .col-1-of-2-2nd:not(:last-child) {\n          margin-bottom: 2.5rem; } }\n  .row .col-1-of-3 {\n    width: calc((100% - 2*2.5rem) / 3); }\n  .row .col-2-of-3 {\n    width: calc(2 * ((100% - 5rem) / 3) + 2.5rem); }\n  .row .col-1-of-4 {\n    width: calc((100% - 3*2.5rem) / 4); }\n  .row .col-2-of-4 {\n    width: calc(2 * ((100% - 7.5rem) / 4) + 2.5rem); }\n  .row .col-3-of-4 {\n    width: calc(3 * ((100% - 7.5rem) / 4) + 5rem); }\n  .row .col-1-of-5 {\n    width: calc((100% - 4*2.5rem) / 5); }\n  .row .col-2-of-5 {\n    width: calc(2 * ((100% - 10rem) / 5) + 2.5rem); }\n  .row .col-3-of-5 {\n    width: calc(3 * ((100% - 10rem) / 5) + 5rem); }\n  .row .col-4-of-5 {\n    width: calc(4 * ((100% - 10rem) / 5) + 7.5rem); }\n\n.homeview {\n  -ms-flex: 1;\n      flex: 1;\n  color: white; }\n  .homeview__img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 10rem; }\n  .homeview__svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 10rem;\n    fill: rgba(0, 0, 0, 0.4);\n    width: 1em;\n    height: 1em; }\n\n.items {\n  position: relative;\n  margin: 0 auto;\n  background-color: white;\n  padding: 1rem;\n  height: 20rem; }\n  .items--main {\n    background-color: white;\n    color: white;\n    height: 43rem; }\n  .items--footer {\n    height: 10rem;\n    background-color: white; }\n\n.home {\n  -ms-flex: 0 0 20rem;\n      flex: 0 0 20rem;\n  color: white; }\n  @media screen and (max-width: 600px) {\n    .home {\n      height: 20rem; } }\n  .home__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(to top, #484065, #342e46);\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4)); }\n    @media screen and (max-width: 600px) {\n      .home__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        padding-top: 2rem; } }\n  .home__1st {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .home__1st__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center; }\n    @media screen and (max-width: 600px) {\n      .home__1st {\n        -ms-flex: 1;\n            flex: 1;\n        border-left: 1px solid rgba(255, 255, 255, 0.2); } }\n  .home__2nd {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .home__2nd__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .home__2nd {\n        -ms-flex: 1;\n            flex: 1; } }\n  .home__btn {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 20% 0; }\n    @media screen and (max-width: 600px) {\n      .home__btn {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin: 0;\n        margin-bottom: 5%; } }\n  .home__h1 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center;\n    font-size: 1rem;\n    letter-spacing: .5rem;\n    text-transform: uppercase; }\n  .home__icon {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem;\n    cursor: pointer; }\n    .home__icon a {\n      text-decoration: none;\n      color: white;\n      transition: all .5s;\n      opacity: .3; }\n    .home__icon span {\n      font-size: 1.2rem;\n      padding-left: 2rem;\n      margin-bottom: 1rem; }\n      @media screen and (max-width: 600px) {\n        .home__icon span {\n          font-size: .8rem;\n          padding-left: 1rem;\n          margin-bottom: 0 1rem; } }\n    .home__icon:hover a {\n      opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .home__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        padding: .5rem; } }\n  .home__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .home__svg {\n        font-size: 1rem; } }\n  .home__end {\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .home__end:hover {\n      border: none;\n      background-color: #3b3551;\n      background-color: var(--violet-3); }\n\n.close {\n  position: absolute;\n  left: 20.7rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  padding: 1rem;\n  cursor: pointer; }\n  @media screen and (max-width: 600px) {\n    .close {\n      left: 0; } }\n  .close__btn {\n    color: white; }\n  .close a {\n    color: white;\n    opacity: .3; }\n  .close__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .close__svg {\n        font-size: 1rem; } }\n\n.user {\n  -ms-flex: 0 0 20rem;\n      flex: 0 0 20rem;\n  color: white; }\n  @media screen and (max-width: 600px) {\n    .user {\n      height: 20rem; } }\n  .user__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(to top, #484065, #342e46);\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4)); }\n    @media screen and (max-width: 600px) {\n      .user__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        padding-top: 2rem; } }\n  .user__1st {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .user__1st__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center; }\n    @media screen and (max-width: 600px) {\n      .user__1st {\n        -ms-flex: 1;\n            flex: 1;\n        border-left: 1px solid rgba(255, 255, 255, 0.2); } }\n  .user__2nd {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .user__2nd__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .user__2nd {\n        -ms-flex: 1;\n            flex: 1; } }\n  .user__btn {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 20% 0; }\n    @media screen and (max-width: 600px) {\n      .user__btn {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin: 0;\n        margin-bottom: 5%; } }\n  .user__h1 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center;\n    font-size: 1rem;\n    letter-spacing: .5rem;\n    text-transform: uppercase; }\n  .user__icon {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem;\n    cursor: pointer; }\n    .user__icon a {\n      text-decoration: none;\n      color: white;\n      transition: all .5s;\n      opacity: .3; }\n    .user__icon span {\n      font-size: 1.2rem;\n      padding-left: 2rem;\n      margin-bottom: 1rem; }\n      @media screen and (max-width: 600px) {\n        .user__icon span {\n          font-size: .8rem;\n          padding-left: 1rem;\n          margin-bottom: 0 1rem; } }\n    .user__icon:hover a {\n      opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .user__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        padding: .5rem; } }\n  .user__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .user__svg {\n        font-size: 1rem; } }\n  .user__end {\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .user__end:hover {\n      border: none;\n      background-color: #3b3551;\n      background-color: var(--violet-3); }\n\n.close {\n  position: absolute;\n  left: 20.7rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  padding: 1rem;\n  cursor: pointer; }\n  @media screen and (max-width: 600px) {\n    .close {\n      left: 0; } }\n  .close__btn {\n    color: white; }\n  .close a {\n    color: white;\n    opacity: .3; }\n  .close__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .close__svg {\n        font-size: 1rem; } }\n\n.product {\n  -ms-flex: 0 0 20rem;\n      flex: 0 0 20rem;\n  color: white; }\n  @media screen and (max-width: 600px) {\n    .product {\n      height: 20rem; } }\n  .product__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(to top, #484065, #342e46);\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4)); }\n    @media screen and (max-width: 600px) {\n      .product__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        padding-top: 2rem; } }\n  .product__1st {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .product__1st__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center; }\n    @media screen and (max-width: 600px) {\n      .product__1st {\n        -ms-flex: 1;\n            flex: 1;\n        border-left: 1px solid rgba(255, 255, 255, 0.2); } }\n  .product__2nd {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .product__2nd__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .product__2nd {\n        -ms-flex: 1;\n            flex: 1; } }\n  .product__btn {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 20% 0; }\n    @media screen and (max-width: 600px) {\n      .product__btn {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin: 0;\n        margin-bottom: 5%; } }\n  .product__h1 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center;\n    font-size: 1rem;\n    letter-spacing: .5rem;\n    text-transform: uppercase; }\n  .product__icon {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem;\n    cursor: pointer; }\n    .product__icon a {\n      text-decoration: none;\n      color: white;\n      transition: all .5s;\n      opacity: .3; }\n    .product__icon span {\n      font-size: 1.2rem;\n      padding-left: 2rem;\n      margin-bottom: 1rem; }\n      @media screen and (max-width: 600px) {\n        .product__icon span {\n          font-size: .8rem;\n          padding-left: 1rem;\n          margin-bottom: 0 1rem; } }\n    .product__icon:hover a {\n      opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .product__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        padding: .5rem; } }\n  .product__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .product__svg {\n        font-size: 1rem; } }\n  .product__end {\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .product__end:hover {\n      border: none;\n      background-color: #3b3551;\n      background-color: var(--violet-3); }\n\n.close {\n  position: absolute;\n  left: 20.7rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  padding: 1rem;\n  cursor: pointer; }\n  @media screen and (max-width: 600px) {\n    .close {\n      left: 0; } }\n  .close__btn {\n    color: white; }\n  .close a {\n    color: white;\n    opacity: .3; }\n  .close__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .close__svg {\n        font-size: 1rem; } }\n\n.chart {\n  -ms-flex: 0 0 20rem;\n      flex: 0 0 20rem;\n  color: white; }\n  @media screen and (max-width: 600px) {\n    .chart {\n      height: 20rem; } }\n  .chart__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    -ms-flex-align: center;\n        align-items: center;\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(to top, #484065, #342e46);\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4)); }\n    @media screen and (max-width: 600px) {\n      .chart__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        padding-top: 2rem; } }\n  .chart__1st {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .chart__1st__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center; }\n    @media screen and (max-width: 600px) {\n      .chart__1st {\n        -ms-flex: 1;\n            flex: 1;\n        border-left: 1px solid rgba(255, 255, 255, 0.2); } }\n  .chart__2nd {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .chart__2nd__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .chart__2nd {\n        -ms-flex: 1;\n            flex: 1; } }\n  .chart__btn {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 20% 0; }\n    @media screen and (max-width: 600px) {\n      .chart__btn {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin: 0;\n        margin-bottom: 5%; } }\n  .chart__h1 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center;\n    font-size: 1rem;\n    letter-spacing: .5rem;\n    text-transform: uppercase; }\n  .chart__icon {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem;\n    cursor: pointer; }\n    .chart__icon a {\n      text-decoration: none;\n      color: white;\n      transition: all .5s;\n      opacity: .3; }\n    .chart__icon span {\n      font-size: 1.2rem;\n      padding-left: 2rem;\n      margin-bottom: 1rem; }\n      @media screen and (max-width: 600px) {\n        .chart__icon span {\n          font-size: .8rem;\n          padding-left: 1rem;\n          margin-bottom: 0 1rem; } }\n    .chart__icon:hover a {\n      opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .chart__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        padding: .5rem; } }\n  .chart__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .chart__svg {\n        font-size: 1rem; } }\n  .chart__end {\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .chart__end:hover {\n      border: none;\n      background-color: #3b3551;\n      background-color: var(--violet-3); }\n\n.close {\n  position: absolute;\n  left: 20.7rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  padding: 1rem;\n  cursor: pointer; }\n  @media screen and (max-width: 600px) {\n    .close {\n      left: 0; } }\n  .close__btn {\n    color: white; }\n  .close a {\n    color: white;\n    opacity: .3; }\n  .close__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .close__svg {\n        font-size: 1rem; } }\n\n.mainnav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  height: 5rem;\n  background-color: white;\n  -ms-grid-column-align: flex-start;\n      justify-items: flex-start;\n  -ms-flex-align: center;\n      align-items: center; }\n  .mainnav__logo {\n    -ms-flex: 0 0 5rem;\n        flex: 0 0 5rem; }\n  .mainnav__header {\n    -ms-flex: 0 0 20rem;\n        flex: 0 0 20rem;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    height: 5rem;\n    background-color: #3b3551;\n    background-color: var(--violet-3); }\n    @media screen and (max-width: 550px) {\n      .mainnav__header {\n        display: none; } }\n  .mainnav__items {\n    -ms-flex: 1;\n        flex: 1; }\n  .mainnav__btn {\n    -ms-flex: 0 0 10rem;\n        flex: 0 0 10rem;\n    margin-left: 1.2rem; }\n    @media screen and (max-width: 550px) {\n      .mainnav__btn {\n        margin-left: 2.6rem; } }\n    @media screen and (max-width: 415px) {\n      .mainnav__btn {\n        margin-left: 1.2rem; } }\n  .mainnav__profile {\n    -ms-flex: 0 0 3.5rem;\n        flex: 0 0 3.5rem;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    height: 3.5rem;\n    margin-right: .8rem;\n    border-radius: 100px;\n    background-color: #eeeff3;\n    background-color: var(--gray-1); }\n  .mainnav__h1 {\n    font-size: 1rem;\n    margin-right: .5rem;\n    letter-spacing: 1rem;\n    text-align: right; }\n    @media screen and (max-width: 550px) {\n      .mainnav__h1 {\n        font-size: .5rem;\n        letter-spacing: .5rem; } }\n\n.main {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: inherit;\n  background-color: #eeeff3;\n  background-color: var(--gray-1); }\n  @media screen and (max-width: 600px) {\n    .main {\n      -ms-flex-direction: column;\n          flex-direction: column; } }\n\n.nav {\n  -ms-flex: 0 1 5rem;\n      flex: 0 1 5rem;\n  background-color: #ecedf1;\n  background-color: var(--gray-2); }\n  @media screen and (max-width: 400px) {\n    .nav {\n      display: none; } }\n  .nav__container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-align: center;\n        align-items: center; }\n  .nav__items {\n    -ms-flex: 0 0 1;\n        flex: 0 0 1; }\n  .nav__btn {\n    -ms-flex: 0 0 10rem;\n        flex: 0 0 10rem;\n    margin-right: 10rem;\n    margin-left: 2rem; }\n  .nav__profile {\n    height: 3.5rem;\n    width: 3.5rem;\n    margin-right: .8rem;\n    border-radius: 100px;\n    background-color: #eeeff3;\n    background-color: var(--gray-1); }\n  .nav__h1 {\n    -ms-flex-order: -1;\n        order: -1;\n    font-size: 1rem;\n    margin-right: .5rem;\n    letter-spacing: 1rem; }\n\n.appearance {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  background-color: #eeeff3;\n  background-color: var(--gray-1); }\n\n.content {\n  -ms-flex: 1;\n      flex: 1;\n  background-color: #ecedf1;\n  background-color: var(--gray-2); }\n  .content__flex {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n\n.sidebar {\n  -ms-flex: 0 0 5rem;\n      flex: 0 0 5rem;\n  text-align: center;\n  color: white;\n  background-color: #3b3551;\n  background-color: var(--violet-3); }\n  @media screen and (max-width: 600px) {\n    .sidebar {\n      height: 5rem; } }\n  .sidebar__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-grid-column-align: center;\n        justify-items: center; }\n    @media screen and (max-width: 600px) {\n      .sidebar__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        height: 5rem; } }\n  .sidebar a {\n    color: white; }\n  .sidebar__icon {\n    -ms-flex: 0 0 1;\n        flex: 0 0 1;\n    justify-self: flex-start;\n    padding: 1rem;\n    cursor: pointer;\n    transition: all .3s; }\n    .sidebar__icon svg {\n      opacity: .3; }\n    .sidebar__icon:hover {\n      background-color: #342e46;\n      background-color: var(--violet-4);\n      border-left: 0.2rem solid #de2850;\n      border-left: 0.2rem solid var(--btn-red);\n      transform: scaleX(1.05) translateX(2px); }\n      .sidebar__icon:hover svg {\n        opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .sidebar__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center; }\n        .sidebar__icon:hover {\n          border: none;\n          border-top: 0.2rem solid #de2850;\n          border-top: 0.2rem solid var(--btn-red);\n          transform: scaleX(1.1); } }\n  .sidebar__svg {\n    font-size: 2.5rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n  .sidebar__end {\n    -ms-flex: 1;\n        flex: 1;\n    height: 30.7rem;\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .sidebar__end:hover {\n      border: none;\n      background-color: #3b3551;\n      background-color: var(--violet-3); }\n\n.sidebar2nd {\n  -ms-flex: 0 0 20rem;\n      flex: 0 0 20rem;\n  color: white; }\n  @media screen and (max-width: 600px) {\n    .sidebar2nd {\n      height: 20rem; } }\n  .sidebar2nd__container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    background-image: linear-gradient(to top, #484065, #342e46);\n    background-image: linear-gradient(to top, var(--violet-2), var(--violet-4)); }\n    @media screen and (max-width: 600px) {\n      .sidebar2nd__container {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        padding-top: 2rem; } }\n  .sidebar2nd__1st {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .sidebar2nd__1st__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .sidebar2nd__1st {\n        -ms-flex: 1;\n            flex: 1; } }\n  .sidebar2nd__2nd {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem; }\n    .sidebar2nd__2nd__con {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n    @media screen and (max-width: 600px) {\n      .sidebar2nd__2nd {\n        -ms-flex: 1;\n            flex: 1;\n        border-left: 1px solid rgba(255, 255, 255, 0.2); } }\n  .sidebar2nd__btn {\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin: 30% 0; }\n    @media screen and (max-width: 600px) {\n      .sidebar2nd__btn {\n        -ms-flex: 1;\n            flex: 1;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin: 0;\n        margin-bottom: 5%; } }\n  .sidebar2nd__h1 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center;\n    font-size: 1rem;\n    letter-spacing: .5rem;\n    text-transform: uppercase; }\n  .sidebar2nd__icon {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 1rem;\n    cursor: pointer; }\n    .sidebar2nd__icon a {\n      text-decoration: none;\n      color: white;\n      transition: all .5s;\n      opacity: .3; }\n    .sidebar2nd__icon span {\n      font-size: 1.2rem;\n      padding-left: 2rem;\n      margin-bottom: 1rem; }\n      @media screen and (max-width: 600px) {\n        .sidebar2nd__icon span {\n          font-size: .8rem;\n          padding-left: 1rem;\n          margin-bottom: 0 1rem; } }\n    .sidebar2nd__icon:hover a {\n      opacity: .8; }\n    @media screen and (max-width: 600px) {\n      .sidebar2nd__icon {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        padding: .5rem; } }\n  .sidebar2nd__svg {\n    font-size: 2rem;\n    fill: currentColor;\n    width: 1em;\n    height: 1em; }\n    @media screen and (max-width: 600px) {\n      .sidebar2nd__svg {\n        font-size: 1rem; } }\n  .sidebar2nd__end {\n    text-align: left;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n    .sidebar2nd__end:hover {\n      border: none;\n      background-color: #3b3551;\n      background-color: var(--violet-3); }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map