webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/yoyo/buildcloud/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/yoyo/buildcloud/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultilinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultilinePage = (function () {
    function MultilinePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MultilinePage;
}());
MultilinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-multiline',template:/*ion-inline-start:"/Users/yoyo/buildcloud/src/pages/multiline/multiline.html"*/'<ion-header>\n  <ion-navbar>\n  <button ion-button secondary menuToggle>Toggle</button>\n    <ion-buttons start>\n       <img src="assets/icon/photo1.png" width="30px">\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Recent Conversations\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/icon/photo.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n     \n      <p>Listen, I\'ve had a pretty messed up day...</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/icon/photo.png">\n      </ion-avatar>\n      <h2>Luke</h2>\n      \n      <p>I feel the good in you, the conflict...</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Online\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/icon/photo.png">\n      </ion-avatar>\n      <h2>Poe</h2>\n      \n      <p>I just upgraded my X-Wing. Next time...</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/icon/photo.png">\n      </ion-avatar>\n      <h2>Yoda</h2>\n      \n      <p>Do or do not. There is no try...</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n\n\n<ion-list>\n\n  <ion-item>\n   <h4>Start new chat</h4>\n      <ion-icon class="addbtn" name="add-circle"></ion-icon>\n      <img class="addnew" src="assets/icon/photo1.png" width="40px">\n      <img class="addnew" src="assets/icon/photo2.png" width="40px">\n      <img class="addnew" src="assets/icon/photo3.png" width="40px">\n      <img class="addnew" src="assets/icon/photo4.png" width="40px">\n  </ion-item>\n</ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yoyo/buildcloud/src/pages/multiline/multiline.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], MultilinePage);

//# sourceMappingURL=multiline.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardPage = (function () {
    function CardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CardPage;
}());
CardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card',template:/*ion-inline-start:"/Users/yoyo/buildcloud/src/pages/card/card.html"*/'<ion-header>\n  <ion-navbar>\n   \n <button ion-button secondary menuToggle>Menu</button>\n<ion-row>\n<ion-col text-right>\n <button ion-button clear large color="defalut" icon-end>\n  <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n  </button>\n</ion-col>\n</ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n<ion-row nowrap>\n<!--1-->      \n      <ion-card>\n            \n            \n            <div>\n              <img src="assets/icon/1.jpg"/>\n            </div>\n\n            <ion-card-content>\n              <ion-card-title>\n                <h3>Adidas</h3>\n               <h2><b>NMD _R2</b></h2>\n              </ion-card-title>\n              <p>\n               $160　<del>$210</del>\n              </p>\n            </ion-card-content>\n\n             <ion-row no-padding>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                  Favorite\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                      <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n                 Add to cart\n                </button>\n              </ion-col>\n             \n            </ion-row>\n\n      </ion-card>\n<!--2-->  \n      <ion-card>\n\n            <div>\n              <img src="assets/icon/2.jpg"/>\n            </div>\n\n            <ion-card-content>\n              <ion-card-title>\n              <h3>Adidas</h3>\n               <h2><b> Supershoes</b></h2>\n              </ion-card-title>\n              <p>\n               $160　<del>$210</del>\n              </p>\n            </ion-card-content>\n\n            <ion-row no-padding>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                  Favorite\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                      <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n                 Add to cart\n                </button>\n              </ion-col>\n            \n            </ion-row>\n\n        </ion-card>\n\n</ion-row>\n\n <ion-row nowrap> \n <!--3-->  \n      <ion-card>\n\n            <div>\n              <img src="assets/icon/3.jpg"/>\n            </div>\n\n            <ion-card-content>\n              <ion-card-title>\n               <h3>Adidas</h3>\n               <h2><b> Womenshoes</b></h2>\n              </ion-card-title>\n              <p>\n               $220\n              </p>\n            </ion-card-content>\n\n            <ion-row no-padding>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                  Favorite\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                     <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n                 Add to cart\n                </button>\n              </ion-col>\n             \n            </ion-row>\n\n      </ion-card>\n<!--4-->  \n      <ion-card>\n\n          <div>\n            <img src="assets/icon/4.jpg"/>\n          </div>\n\n          <ion-card-content>\n            <ion-card-title>\n             <h3>Adidas</h3>\n               <h2><b> Supershoes</b></h2>\n              </ion-card-title>\n              <p>\n               $180　<del>$280</del>\n            </p>\n          </ion-card-content>\n\n          <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                    <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n               Add to cart\n              </button>\n            </ion-col>\n            \n          </ion-row>\n\n      </ion-card>\n</ion-row>\n\n\n</ion-content>'/*ion-inline-end:"/Users/yoyo/buildcloud/src/pages/card/card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], CardPage);

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_multiline_multiline__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { woocon } from './wpAPI.js';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_multiline_multiline__["a" /* MultilinePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_multiline_multiline__["a" /* MultilinePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_multiline_multiline__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_card_card__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { woocon } from './wpAPI.js';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Card', component: __WEBPACK_IMPORTED_MODULE_6__pages_card_card__["a" /* CardPage */] },
            { title: 'Multiline', component: __WEBPACK_IMPORTED_MODULE_5__pages_multiline_multiline__["a" /* MultilinePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yoyo/buildcloud/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/yoyo/buildcloud/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map