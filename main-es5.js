(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/s1f":
    /*!**********************************************!*\
      !*** ./src/app/pages/main/main.component.ts ***!
      \**********************************************/

    /*! exports provided: MainComponent */

    /***/
    function s1f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./main.component.html */
      "bBbC");
      /* harmony import */


      var _main_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main.component.less */
      "RiUH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MainComponent = function MainComponent() {
        _classCallCheck(this, MainComponent);
      };

      MainComponent.ctorParameters = function () {
        return [];
      };

      MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MainComponent);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/rokasjankunas/Documents/GitHub/rokas.dev/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0et/":
    /*!*********************************************************!*\
      !*** ./src/app/modals/projects/projects.component.less ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function et(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#pinned-projects-title {\n  display: inline;\n}\n.card-img-top {\n  width: 180px;\n  height: 180px;\n  overflow: hidden;\n  margin: 0 auto;\n}\na > .card-img-top {\n  text-align: center;\n  margin: 0 auto;\n}\n.card {\n  min-width: 200px;\n  border-radius: 0.625rem;\n}\n@media screen and (min-width: 768px) {\n  .card-deck .card {\n    max-width: calc(33% - 30px);\n  }\n}\n@media screen and (min-width: 992px) {\n  .card-deck .card {\n    max-width: calc(25% - 30px);\n  }\n}\n.card-background {\n  background-color: #e6eaee;\n}\n.card-body {\n  background-color: #ffffff;\n  border-radius: 0.625rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQUZGO0FBS0E7RUFDRTtJQUNFLDJCQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0U7SUFDRSwyQkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFLHlCQUFBO0FBTEY7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUFORiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaW5uZWQtcHJvamVjdHMtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5jYXJkLWltZy10b3Age1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5hID4gLmNhcmQtaW1nLXRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkLWRlY2sgLmNhcmQge1xuICAgIG1heC13aWR0aDogY2FsYygzMyUgLSAzMHB4KTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2FyZC1kZWNrIC5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMjUlIC0gMzBweCk7XG4gIH1cbn1cblxuLmNhcmQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmVhZWU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "1hQo":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/intro/intro.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function hQo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"jumbotron-main position-relative p-0\" title=\"Rokas Jankunas\">\n  <div class=\"jumbotron mb-0 pt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"d-none col-md-3 d-md-flex align-items-center\">\n          <a role=\"button\" (click)=\"routingService.routeTo(Urls.ABOUT)\" class=\"stretched-link\">\n            <img src=\"../../../assets/profile.jpg\" class=\"rounded-circle profile\" alt=\"Profile picture\">\n          </a>\n        </div>\n        <div class=\"col-4 offset-4 d-md-none\">\n          <a role=\"button\" (click)=\"routingService.routeTo(Urls.ABOUT)\" class=\"stretched-link\">\n            <img src=\"../../../assets/profile.jpg\" class=\"rounded-circle mw-100 mh-100 mb-3\" alt=\"Profile picture\">\n          </a>\n        </div>\n        <div class=\"col-12 col-md-9\">\n          <h1 class=\"display-4\" [class.animated-title]=\"!(routingService.loading | async)\">Rokas Jankunas</h1>\n          <p class=\"lead\">Hello, my name is Rokas Jankunas and I'm a tech enthusiast and a Software Engineer,\n            specialising\n            in Java tech stack. My personal projects have been featured on major tech news websites such as Gizmodo,\n            Lifehacker, Android Authority, and XDA-Developers. In addition to that, I have an Oracle Certified\n            Professional\n            Java certification.</p>\n          <a class=\"btn btn-primary btn-lg btn-raised stretched-link d-print-none\" role=\"button\"\n             (click)=\"routingService.routeTo(Urls.ABOUT)\">About me</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-0 p-0 corner-helper\"></div>\n</div>\n";
      /***/
    },

    /***/
    "449w":
    /*!*****************************************************!*\
      !*** ./src/app/modals/contact/contact.component.ts ***!
      \*****************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "wp7z");
      /* harmony import */


      var _contact_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.component.less */
      "nNRj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var ContactComponent = function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.faMapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMapMarkerAlt"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"];
      };

      ContactComponent.ctorParameters = function () {
        return [];
      };

      ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactComponent);
      /***/
    },

    /***/
    "7yUH":
    /*!*********************************************************!*\
      !*** ./src/app/pages/project/project-view.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProjectViewComponent */

    /***/
    function yUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function () {
        return ProjectViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_project_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./project-view.component.html */
      "VRSB");
      /* harmony import */


      var _project_view_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project-view.component.less */
      "ghg2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _data_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../data/projects.service */
      "j53p");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../objects/url-type.enum */
      "LvEl");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");

      var ProjectViewComponent = /*#__PURE__*/function () {
        function ProjectViewComponent(projectsService, activatedRoute, router) {
          _classCallCheck(this, ProjectViewComponent);

          this.projectsService = projectsService;
          this.activatedRoute = activatedRoute;
          this.router = router;
        }

        _createClass(ProjectViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.data = _this.projectsService.getProjectByCodename(params.codename);

              if (!_this.data) {
                _this.router.navigateByUrl('404');
              }
            });
          }
        }, {
          key: "getIconByUrlType",
          value: function getIconByUrlType(type) {
            switch (type) {
              case _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__["UrlType"].GITHUB:
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"];

              case _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__["UrlType"].GOOGLE_PLAY:
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGooglePlay"];

              case _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__["UrlType"].DOCKER_HUB:
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faDocker"];

              default:
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faInternetExplorer"];
            }
          }
        }, {
          key: "getNameByUrlType",
          value: function getNameByUrlType(type) {
            switch (type) {
              case _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__["UrlType"].GITHUB:
                return 'Source Code (GitHub)';

              case _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__["UrlType"].GOOGLE_PLAY:
                return 'Google Play';

              case _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_6__["UrlType"].DOCKER_HUB:
                return 'Docker Hub';

              default:
                return 'External Website';
            }
          }
        }]);

        return ProjectViewComponent;
      }();

      ProjectViewComponent.ctorParameters = function () {
        return [{
          type: _data_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ProjectViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project',
        template: _raw_loader_project_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_view_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjectViewComponent);
      /***/
    },

    /***/
    "8ikP":
    /*!****************************************!*\
      !*** ./src/app/objects/publication.ts ***!
      \****************************************/

    /*! exports provided: Publication */

    /***/
    function ikP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Publication", function () {
        return Publication;
      });

      var Publication = function Publication() {
        _classCallCheck(this, Publication);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DLnH":
    /*!***************************************************!*\
      !*** ./src/app/modals/intro/intro.component.less ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function DLnH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".jumbotron-main {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('background_mountains_low.jpg');\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('background_mountains_low.jpg');\n  background-position: center;\n  background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  color: #ffffff;\n  border-radius: 0;\n  padding-top: 3rem;\n}\n.jumbotron {\n  background-color: transparent;\n}\n@media screen and (min-width: 768px) {\n  .animated-title {\n    overflow: hidden;\n    border-right: 0.15em solid transparent;\n    white-space: nowrap;\n    margin: 0 auto;\n    -webkit-animation: typing 3.5s steps(40, end), blinking 0.75s step-end 7;\n            animation: typing 3.5s steps(40, end), blinking 0.75s step-end 7;\n  }\n  .jumbotron-main {\n    background-attachment: fixed;\n  }\n}\n@-webkit-keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n@-webkit-keyframes blinking {\n  from,\n  to {\n    border-color: #ffffff;\n  }\n  50% {\n    border-color: transparent;\n  }\n}\n@keyframes blinking {\n  from,\n  to {\n    border-color: #ffffff;\n  }\n  50% {\n    border-color: transparent;\n  }\n}\n.corner-helper {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  background-color: #ffffff;\n  height: 1rem;\n}\n.profile {\n  max-width: 75%;\n  max-height: 75%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEdBQUE7RUFHQSxpSEFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSw2QkFBQTtBQUFGO0FBR0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esc0NBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSx3RUFBQTtZQUFBLGdFQUFBO0VBREY7RUFJQTtJQUNFLDRCQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxRQUFBO0VBSEY7RUFLQTtJQUNFLFdBQUE7RUFIRjtBQUNGO0FBSEE7RUFDRTtJQUNFLFFBQUE7RUFIRjtFQUtBO0lBQ0UsV0FBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFOztJQUNFLHFCQUFBO0VBSEY7RUFLQTtJQUNFLHlCQUFBO0VBSEY7QUFDRjtBQUhBO0VBQ0U7O0lBQ0UscUJBQUE7RUFIRjtFQUtBO0lBQ0UseUJBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSkY7QUFPQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTEYiLCJmaWxlIjoiaW50cm8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uLW1haW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9iYWNrZ3JvdW5kX21vdW50YWluc19sb3cuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC4zKSksIHVybChcIn5zcmMvYXNzZXRzL2JhY2tncm91bmRfbW91bnRhaW5zX2xvdy5qcGdcIik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKFwifnNyYy9hc3NldHMvYmFja2dyb3VuZF9tb3VudGFpbnNfbG93LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKFwifnNyYy9hc3NldHMvYmFja2dyb3VuZF9tb3VudGFpbnNfbG93LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuXG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hbmltYXRlZC10aXRsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYW5pbWF0aW9uOiB0eXBpbmcgMy41cyBzdGVwcyg0MCwgZW5kKSwgYmxpbmtpbmcgLjc1cyBzdGVwLWVuZCA3O1xuICB9XG5cbiAgLmp1bWJvdHJvbi1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtpbmcge1xuICBmcm9tLCB0byB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4uY29ybmVyLWhlbHBlciB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbi5wcm9maWxlIHtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIG1heC1oZWlnaHQ6IDc1JTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "LvEl":
    /*!******************************************!*\
      !*** ./src/app/objects/url-type.enum.ts ***!
      \******************************************/

    /*! exports provided: UrlType */

    /***/
    function LvEl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlType", function () {
        return UrlType;
      });

      var UrlType;

      (function (UrlType) {
        UrlType[UrlType["GITHUB"] = 0] = "GITHUB";
        UrlType[UrlType["GOOGLE_PLAY"] = 1] = "GOOGLE_PLAY";
        UrlType[UrlType["DOCKER_HUB"] = 2] = "DOCKER_HUB";
        UrlType[UrlType["OTHER"] = 3] = "OTHER";
      })(UrlType || (UrlType = {}));
      /***/

    },

    /***/
    "N3E0":
    /*!**************************************!*\
      !*** ./src/app/objects/urls.enum.ts ***!
      \**************************************/

    /*! exports provided: Urls */

    /***/
    function N3E0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Urls", function () {
        return Urls;
      });

      var Urls;

      (function (Urls) {
        Urls["HOME"] = "/";
        Urls["PROJECTS"] = "/projects";
        Urls["ABOUT"] = "/about";
        Urls["CONTACTS"] = "/contacts";
      })(Urls || (Urls = {}));
      /***/

    },

    /***/
    "QIl6":
    /*!*************************************************!*\
      !*** ./src/app/modals/about/about.component.ts ***!
      \*************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function QIl6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./about.component.html */
      "zVnQ");
      /* harmony import */


      var _about_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about.component.less */
      "e6wG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      };

      AboutComponent.ctorParameters = function () {
        return [];
      };

      AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AboutComponent);
      /***/
    },

    /***/
    "RiUH":
    /*!************************************************!*\
      !*** ./src/app/pages/main/main.component.less ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function RiUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5sZXNzIn0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.less */
      "uBPG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/routing.service */
      "sFxA");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _objects_urls_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./objects/urls.enum */
      "N3E0");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(routingService, spinner) {
          _classCallCheck(this, AppComponent);

          this.routingService = routingService;
          this.spinner = spinner;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.routingService.loading.subscribe(function (value) {
              if (value) {
                _this2.spinner.show();
              } else {
                _this2.spinner.hide();
              }
            });
          }
        }, {
          key: "onComponentChange",
          value: function onComponentChange(event) {
            this.routingService.isHomePage = event instanceof _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"];
          }
        }, {
          key: "onElementScroll",
          value: function onElementScroll(event) {
            var _this3 = this;

            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(function () {
              _this3.handleScroll();
            }, 300);
          }
        }, {
          key: "handleScroll",
          value: function handleScroll() {
            if (!this.routingService.isHomePage) {
              return;
            }

            this.scrollTimer = null;
            var scrollPosition = document.documentElement.scrollTop;
            var screenHeight = window.innerHeight;
            var scrollHeight = document.body.offsetHeight;
            var homeElement = document.getElementById('home');
            var projectsElement = document.getElementById('projects');
            var aboutElement = document.getElementById('about');
            var contactsElement = document.getElementById('contacts');

            if (scrollPosition === 0 || _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"].compareHeights(scrollPosition, 0, homeElement.offsetTop + homeElement.offsetHeight)) {
              window.history.replaceState(null, null, '');
              this.routingService.activeUrl.next(_objects_urls_enum__WEBPACK_IMPORTED_MODULE_7__["Urls"].HOME);
            } else if (_services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"].compareHeights(scrollPosition, projectsElement.offsetTop, projectsElement.offsetHeight)) {
              window.history.replaceState(null, null, 'projects');
              this.routingService.activeUrl.next(_objects_urls_enum__WEBPACK_IMPORTED_MODULE_7__["Urls"].PROJECTS);
            } else if (scrollPosition + screenHeight < scrollHeight - _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"].extraHeight && _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"].compareHeights(scrollPosition, aboutElement.offsetTop, aboutElement.offsetHeight)) {
              window.history.replaceState(null, null, 'about');
              this.routingService.activeUrl.next(_objects_urls_enum__WEBPACK_IMPORTED_MODULE_7__["Urls"].ABOUT);
            } else if (scrollPosition + screenHeight >= scrollHeight - _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"].extraHeight || _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"].compareHeights(scrollPosition, contactsElement.offsetTop, contactsElement.offsetHeight)) {
              window.history.replaceState(null, null, 'contacts');
              this.routingService.activeUrl.next(_objects_urls_enum__WEBPACK_IMPORTED_MODULE_7__["Urls"].CONTACTS);
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      AppComponent.propDecorators = {
        onElementScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "Tp7E":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/projects/projects.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tp7E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Card title and button -->\n<div class=\"container\">\n  <h2 class=\"mt-3\">Personal Projects</h2>\n\n  <div class=\"card-deck d-flex flex-wrap mt-3\">\n    <ng-container *ngFor=\"let project of projectsService.getAllProjects(); let i = index\">\n      <div class=\"card card-background\" [class.mb-4]=\"isProjectDisplayed(i)\" *ngIf=\"isProjectDisplayed(i)\">\n        <a routerLink=\"/projects/{{project.codename}}\" class=\"text-center\"><img class=\"card-img-top mt-3 mb-3\" src=\"assets/projects/logos/{{project.codename}}.png\" alt=\"Rokas Jankunas | {{project.title}}\"></a>\n        <div class=\"card-body d-flex flex-column\">\n          <h5 class=\"card-title mb-1\">{{project.title}}</h5>\n          <p class=\"font-italic\">{{project.type}}</p>\n          <p class=\"card-text\" [class.mb-4]=\"project.publications.length > 0\" [class.mb-5]=\"project.publications.length === 0\">{{project.summary}}</p>\n          <div class=\"mt-auto d-print-none\">\n            <p class=\"card-text mb-2 font-weight-bold d-print-none\" *ngIf=\"project.publications.length > 0\">As featured in:</p>\n            <div class=\"container mb-3 d-print-none\" *ngIf=\"project.publications.length > 0\">\n              <div class=\"row\">\n                <div *ngFor=\"let publication of project.publications\" class=\"col text-center align-items-end d-flex flex-wrap justify-content-center\">\n                  <a routerLink=\"/projects/{{project.codename}}\"><img src=\"assets/badges/{{publication.codename}}.png\" alt=\"{{publication.title}}\" class=\"featured-badge mb-3\"></a>\n                </div>\n              </div>\n            </div>\n            <a href=\"{{project.externalUrl}}\" class=\"btn btn-primary mt-auto mr-auto mb-0 stretched-link d-print-none\" *ngIf=\"project.externalUrl\">Read more</a>\n            <a routerLink=\"{{'/projects/' + project.codename}}\" class=\"btn btn-primary mt-auto mr-auto mb-0 stretched-link d-print-none\" *ngIf=\"!project.externalUrl\">Read more</a>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"btn btn-link d-print-none\" role=\"button\" (click)=\"this.isExpanded = !this.isExpanded\">{{isExpanded ? 'Show less' : 'Show more'}}\n    <fa-icon [icon]=\"isExpanded ? upIcon : downIcon\" class=\"ml-1 pt-1\"></fa-icon>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "VNsl":
    /*!*************************************************!*\
      !*** ./src/app/modals/intro/intro.component.ts ***!
      \*************************************************/

    /*! exports provided: IntroComponent */

    /***/
    function VNsl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
        return IntroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./intro.component.html */
      "1hQo");
      /* harmony import */


      var _intro_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./intro.component.less */
      "DLnH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/routing.service */
      "sFxA");
      /* harmony import */


      var _objects_urls_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../objects/urls.enum */
      "N3E0");

      var IntroComponent = function IntroComponent(routingService) {
        _classCallCheck(this, IntroComponent);

        this.routingService = routingService;
        this.Urls = _objects_urls_enum__WEBPACK_IMPORTED_MODULE_5__["Urls"];
      };

      IntroComponent.ctorParameters = function () {
        return [{
          type: _services_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"]
        }];
      };

      IntroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intro',
        template: _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intro_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IntroComponent);
      /***/
    },

    /***/
    "VRSB":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/project/project-view.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VRSB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mt-4\">\n  <h1 class=\"mb-3\">{{data.title}}</h1>\n\n  <div class=\"row mt-3 mb-3\">\n\n    <div class=\"col-12 col-md-8 mb-3\">\n      <div class=\"card\">\n        <h5 class=\"card-header\">Description</h5>\n        <div class=\"card-body p-4\" [innerHTML]=\"data.description\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 col-md-4\">\n      <div class=\"card mb-3\" *ngIf=\"data.links.length > 0\">\n        <h5 class=\"card-header\">Links</h5>\n        <div class=\"card-body\">\n          <ng-container *ngFor=\"let link of data.links\">\n            <p>\n              <a href=\"{{link.url}}\">\n                <fa-icon [icon]=\"getIconByUrlType(link.type)\" class=\"mr-2\"></fa-icon>\n                {{getNameByUrlType(link.type)}}\n              </a>\n            </p>\n          </ng-container>\n\n          <ng-container *ngIf=\"data.googlePlayBannerUrl\">\n            <a href='{{data.googlePlayBannerUrl}}'>\n              <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' class=\"mw-100\">\n            </a>\n            <p class=\"play-store-legal\">Google Play and the Google Play logo are trademarks of Google LLC.</p>\n          </ng-container>\n        </div>\n      </div>\n\n      <div class=\"card mb-3\" *ngIf=\"data.publications.length > 0\">\n        <h5 class=\"card-header\">Featured in</h5>\n        <div class=\"card-body\">\n          <div class=\"container mb-3\">\n            <div class=\"row\">\n              <div *ngFor=\"let publication of data.publications\" class=\"col text-center align-items-end d-flex flex-wrap justify-content-center\">\n                <a href=\"{{publication.url}}\">\n                  <img src=\"/assets/badges/{{publication.codename}}.png\" alt=\"{{publication.title}}\" class=\"featured-badge mb-3\">\n                </a>\n              </div>\n            </div>\n          </div>\n          <p *ngFor=\"let publication of data.publications\" class=\"card-text font-weight-bold\">\n            <a href=\"{{publication.url}}\">{{publication.title + ': \"' + publication.articleName + '\"'}}</a>\n            <span *ngIf=\"publication.archiveUrl\"> (<a href=\"{{publication.archiveUrl}}\">Archive</a>)</span>\n          </p>\n        </div>\n\n    </div>\n\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngx-spinner type=\"ball-8bits\"></ngx-spinner>\n<app-navbar></app-navbar>\n<div class=\"pt-5 content\">\n  <router-outlet (activate)=\"onComponentChange($event)\"></router-outlet>\n</div>\n<app-footer></app-footer>\n";
      /***/
    },

    /***/
    "W+Ua":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function WUa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-print-none\">\n  <a class=\"navbar-brand\" (click)=\"routeTo(Urls.HOME)\">Rokas Jankunas</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n          aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"isMenuCollapsed = !isMenuCollapsed\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isMenuCollapsed\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link\" [class.active]=\"(routingService.activeUrl | async) === Urls.HOME\" (click)=\"routeTo(Urls.HOME)\">Home</a>\n      <a class=\"nav-item nav-link\" [class.active]=\"(routingService.activeUrl | async) === Urls.PROJECTS\" (click)=\"routeTo(Urls.PROJECTS)\">Projects</a>\n      <a class=\"nav-item nav-link\" [class.active]=\"(routingService.activeUrl | async) === Urls.ABOUT\" (click)=\"routeTo(Urls.ABOUT)\">About</a>\n      <a class=\"nav-item nav-link\" [class.active]=\"(routingService.activeUrl | async) === Urls.CONTACTS\" (click)=\"routeTo(Urls.CONTACTS)\">Contacts</a>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "Wi13":
    /*!***************************************************!*\
      !*** ./src/app/modals/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function Wi13(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "W+Ua");
      /* harmony import */


      var _navbar_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.less */
      "e9BO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/objects/urls.enum */
      "N3E0");
      /* harmony import */


      var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/routing.service */
      "sFxA");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(routingService) {
          _classCallCheck(this, NavbarComponent);

          this.routingService = routingService;
          this.Urls = src_app_objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"];
          this.isMenuCollapsed = true;
        }

        _createClass(NavbarComponent, [{
          key: "routeTo",
          value: function routeTo(url) {
            this.isMenuCollapsed = true;
            this.routingService.routeTo(url);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"]
        }];
      };

      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_navbar_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "WkuG":
    /*!**********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.less ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function WkuG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50Lmxlc3MifQ== */";
      /***/
    },

    /***/
    "YJMA":
    /*!***************************************************!*\
      !*** ./src/app/modals/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function YJMA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "zIEL");
      /* harmony import */


      var _footer_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.less */
      "xPP5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"];
        this.faGooglePlay = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGooglePlay"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"];
        this.date = new Date();
      };

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _modals_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modals/intro/intro.component */
      "VNsl");
      /* harmony import */


      var _modals_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modals/projects/projects.component */
      "vnJ6");
      /* harmony import */


      var _modals_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modals/about/about.component */
      "QIl6");
      /* harmony import */


      var _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modals/contact/contact.component */
      "449w");
      /* harmony import */


      var _modals_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modals/navbar/navbar.component */
      "Wi13");
      /* harmony import */


      var _modals_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modals/footer/footer.component */
      "YJMA");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_project_project_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/project/project-view.component */
      "7yUH");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modals_intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"], _modals_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _modals_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _modals_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _modals_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _modals_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"], _pages_project_project_view_component__WEBPACK_IMPORTED_MODULE_15__["ProjectViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bBbC":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function bBbC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-intro id=\"home\" class=\"d-block\"></app-intro>\n<app-projects id=\"projects\" class=\"d-block\"></app-projects>\n<app-about id=\"about\" class=\"d-block\"></app-about>\n<app-contact id=\"contacts\" class=\"d-block\"></app-contact>\n";
      /***/
    },

    /***/
    "e6wG":
    /*!***************************************************!*\
      !*** ./src/app/modals/about/about.component.less ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function e6wG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p,\nli {\n  margin: 0;\n  font-weight: 300;\n}\n.float-lg-right {\n  font-weight: 300;\n}\n@media screen and (min-width: 992px) {\n  .float-lg-right {\n    color: #a9a9a9;\n  }\n}\nh2 {\n  border-bottom: 2px solid #888888;\n}\n.border-joiner {\n  border-left: 1px solid #888888;\n}\nh4 > span {\n  font-weight: normal;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRTtJQUNFLGNBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxnQ0FBQTtBQURGO0FBSUE7RUFDRSw4QkFBQTtBQUZGO0FBS0E7RUFDRSxtQkFBQTtBQUhGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsicCwgbGkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5mbG9hdC1sZy1yaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5mbG9hdC1sZy1yaWdodCB7XG4gICAgY29sb3I6ICNhOWE5YTk7XG4gIH1cbn1cblxuaDIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzg4ODg4ODtcbn1cblxuLmJvcmRlci1qb2luZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM4ODg4ODg7XG59XG5cbmg0ID4gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "e9BO":
    /*!*****************************************************!*\
      !*** ./src/app/modals/navbar/navbar.component.less ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function e9BO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".navbar-toggler:focus,\n.navbar-toggler:active {\n  outline: none;\n  box-shadow: none;\n}\na {\n  cursor: pointer;\n}\n.navbar {\n  border-bottom-left-radius: 0.625rem;\n  border-bottom-right-radius: 0.625rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0FBQUYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci10b2dnbGVyOmZvY3VzLCAubmF2YmFyLXRvZ2dsZXI6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC42MjVyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "ghg2":
    /*!***********************************************************!*\
      !*** ./src/app/pages/project/project-view.component.less ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function ghg2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".play-store-legal {\n  color: #9E9E9E;\n  font-weight: 300;\n}\n.card {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Qtdmlldy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0FBQUYiLCJmaWxlIjoicHJvamVjdC12aWV3LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXktc3RvcmUtbGVnYWwge1xuICBjb2xvcjogIzlFOUU5RTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "j/Es":
    /*!************************************!*\
      !*** ./src/app/objects/project.ts ***!
      \************************************/

    /*! exports provided: Project */

    /***/
    function jEs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Project", function () {
        return Project;
      });

      var Project = function Project() {
        _classCallCheck(this, Project);

        this.publications = [];
        this.links = [];
      };
      /***/

    },

    /***/
    "j53p":
    /*!******************************************!*\
      !*** ./src/app/data/projects.service.ts ***!
      \******************************************/

    /*! exports provided: ProjectsService */

    /***/
    function j53p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
        return ProjectsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _objects_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../objects/project */
      "j/Es");
      /* harmony import */


      var _objects_publication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../objects/publication */
      "8ikP");
      /* harmony import */


      var _objects_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../objects/link */
      "kdj2");
      /* harmony import */


      var _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../objects/url-type.enum */
      "LvEl"); // Simulation of a simplified backend server
      // Rationale: Data is stored on the frontend as there is no backend. Website is made to be hosted on GitHub Pages which only supports frontend hosting


      var ProjectsService = /*#__PURE__*/function () {
        function ProjectsService() {
          _classCallCheck(this, ProjectsService);

          this.projects = [this.getAppListManager(), this.getTwelveish(), this.getSabs(), this.getVanillaMinecraftDocker(), this.getRentalStore(), this.getWebsite(), this.getPaperMcDocker(), this.getTickTock(), this.getDontStopMoving(), this.getOther()];
        }

        _createClass(ProjectsService, [{
          key: "getAllProjects",
          value: function getAllProjects() {
            return this.projects;
          }
        }, {
          key: "getProjectByCodename",
          value: function getProjectByCodename(codename) {
            var projectsByName = this.projects.filter(function (project) {
              return project.codename === codename;
            });
            return projectsByName.length > 0 ? projectsByName[0] : null;
          }
        }, {
          key: "getAppListManager",
          value: function getAppListManager() {
            var googlePlay = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            googlePlay.url = 'https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager';
            googlePlay.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GOOGLE_PLAY;
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.url = 'https://github.com/LayoutXML/AppListManager';
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            var appListManager = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            appListManager.title = 'AppListManager';
            appListManager.type = 'Java, Android (library, app)';
            appListManager.codename = appListManager.title.toLowerCase();
            appListManager.summary = 'AppListManager is an easy to use Android library, which minimizes developing time when working with application or activity lists.';
            appListManager.description = '<p>\n' + '              <a href="https://android-arsenal.com/details/1/7143"><img src="https://img.shields.io/badge/Android%20Arsenal-AppListManager-green.svg?style=flat" alt="Android Arsenal" /></a>\n' + '              <a href="https://travis-ci.org/LayoutXML/AppListManager"><img src="https://travis-ci.org/LayoutXML/AppListManager.svg?branch=master" alt="Build Status" /></a>\n' + '              <a href="https://github.com/LayoutXML/AppListManager/blob/master/LICENSE"><img src="https://img.shields.io/github/license/LayoutXML/AppListManager.svg" alt="GitHub" /></a>\n' + '              <a href="https://jitpack.io/#LayoutXML/AppListManager"><img src="https://jitpack.io/v/LayoutXML/AppListManager.svg" alt="Version" /></a>\n' + '              <img src="https://img.shields.io/badge/API-14%2B-brightgreen.svg?style=flat" alt="API" />\n' + '              <a href="https://github.com/LayoutXML/AppListManager#donate"><img src="https://img.shields.io/badge/%24-Donate-blue.svg" alt="Donate" /></a>\n' + '            </p>\n' + '            <p>\n' + '              AppListManager is easy to use Android library, which minimizes developing time when working on application or activity lists. You no longer have to worry about asynchronous tasks, memory leaks and intent receivers. This library\n' + '              provides a simple way to receive application and activity lists as they change.</p>\n' + '            <p>\n' + '              To receive application and activity lists using this library you must implement listeners and invoke methods. Additionally, to receive these lists automatically you must also register a receiver (in the manifest file and code). All\n' + '              listeners must be registered, and all unfinished tasks must be destroyed. Guide below explains exactly how to do all that. You can also inspect the included sample app that uses most of the features.\n' + '            </p>\n' + '            <p>\n' + '              <a href="https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager">Download sample app from the Google Play store</a>.\n' + '            </p>\n' + '            <p>\n' + '              <strong>Step 1: Add the JitPack repository in your root build.gradle at the end of repositories:</strong>\n' + '            </p>\n' + '            <pre><code>allprojects {\n' + '    repositories {\n' + '        ...\n' + '          maven { url \'https://jitpack.io\' }\n' + '    }\n' + '}\n' + '</code></pre>\n' + '            <p>\n' + '              <strong>Step 2. Add the dependency:</strong>\n' + '            </p>\n' + '\n' + '            <pre><code>dependencies {\n' + '    implementation \'com.github.LayoutXML:AppListManager:2.1.0\'\n' + '}\n' + '</code></pre>\n' + '            <p>\n' + '              Follow the steps on the GitHub repository to implement this library in your project.\n' + '            </p>';
            appListManager.links = [googlePlay, github];
            appListManager.googlePlayBannerUrl = 'https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
            return appListManager;
          }
        }, {
          key: "getTwelveish",
          value: function getTwelveish() {
            var googlePlay = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            googlePlay.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GOOGLE_PLAY;
            googlePlay.url = 'https://play.google.com/store/apps/details?id=com.layoutxml.twelveish';
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/Twelveish';
            var androidAuthority = new _objects_publication__WEBPACK_IMPORTED_MODULE_3__["Publication"]();
            androidAuthority.title = 'Android Authority';
            androidAuthority.codename = 'android_authority';
            androidAuthority.url = 'https://www.androidauthority.com/best-android-wear-watch-faces-581582/';
            androidAuthority.archiveUrl = 'https://web.archive.org/web/20190120125903/https://www.androidauthority.com/best-android-wear-watch-faces-581582/';
            androidAuthority.articleName = '10 best Wear OS watch faces';
            var twelveish = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            twelveish.title = 'Twelveish';
            twelveish.type = 'Java, Wear OS/Android Wear (app, watch face)';
            twelveish.codename = twelveish.title.toLowerCase();
            twelveish.summary = 'Unique watch face that displays the approximate time in words in many languages. About 50,000 downloads on the Google Play store.';
            twelveish.description = '<p>\n' + '              Lightweight but feature packed Wear OS Watch Face that displays time in words.\n' + '            </p>\n' + '            <p>\n' + '              "[Twelveish] adds a bit of comedy. Along with the full time, it also gives you estimations in large words in the middle of the display" <strong>--Android Authority, "10 best Wear OS watch faces"</strong>\n' + '            </p>\n' + '            <p>\n' + '              Twelveish is an open-source Wear OS (Android Wear) watch face that displays\n' + '            </p>\n' + '            <ul>\n' + '              <li>exact time and day of the week on the top</li>\n' + '              <li>date and battery percentage slightly below</li>\n' + '              <li>time in words, as well as two complications in the middle</li>\n' + '              <li>complication on the bottom</li>\n' + '              <li>(complications are only available on Wear OS and Android Wear 2.0 or higher)</li>\n' + '            </ul>\n' + '            <p>\n' + '              Other features:\n' + '            </p>\n' + '            <ul>\n' + '              <li>Over 30 background colors to choose from</li>\n' + '              <li>Over 30 main and secondary colors both for active mode and ambient</li>\n' + '              <li>3 complications (2 round, 1 long or round)</li>\n' + '              <li>Option to disable tapping on complications - useful if you constantly open them by accident</li>\n' + '              <li>16 different date format combinations</li>\n' + '              <li>5 capitalization options</li>\n' + '              <li>12 and 24 hour digital and word clock formats</li>\n' + '              <li>show/hide almost any info (digital and word clocks, date, battery percentage, complication) with different combinations both for active and ambient modes</li>\n' + '              <li>11 languages (Dutch, English, Finnish, German, Greek, Hungarian, Italian, Lithuanian, Norwegian, Russian and Spanish)</li>\n' + '              <li>11 fonts that are compatible with all languages</li>\n' + '              <li>Wear OS (Android Wear) 1.5 and above support</li>\n' + '              <li>Chin (flat tire) support</li>\n' + '              <li>Square screen support</li>\n' + '            </ul>\n' + '            <p>\n' + '              Feel free to contribute with translations, bug fixes or additional features. More about it here: <a href="https://github.com/LayoutXML/Twelveish#contributing">https://github.com/LayoutXML/Twelveish#contributing</a>\n' + '            </p>';
            twelveish.publications = [androidAuthority];
            twelveish.links = [googlePlay, github];
            twelveish.googlePlayBannerUrl = 'https://play.google.com/store/apps/details?id=com.layoutxml.twelveish&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
            return twelveish;
          }
        }, {
          key: "getSabs",
          value: function getSabs() {
            var lifehacker = new _objects_publication__WEBPACK_IMPORTED_MODULE_3__["Publication"]();
            lifehacker.title = 'Lifehacker';
            lifehacker.codename = lifehacker.title.toLowerCase();
            lifehacker.url = 'https://lifehacker.com/this-free-ad-blocker-for-samsung-phones-also-kills-bloa-1823927074/';
            lifehacker.archiveUrl = 'https://web.archive.org/web/20190120125748/https://lifehacker.com/this-free-ad-blocker-for-samsung-phones-also-kills-bloa-1823927074';
            lifehacker.articleName = 'This Free Ad Blocker for Samsung Phones Also Kills Bloatware and Manages App Permissions';
            var xda = new _objects_publication__WEBPACK_IMPORTED_MODULE_3__["Publication"]();
            xda.title = 'xda-developers';
            xda.codename = xda.title;
            xda.url = 'https://www.xda-developers.com/sabs-ad-blocker-samsung-galaxy-phones/';
            xda.archiveUrl = 'https://web.archive.org/web/20190120125753/https://www.xda-developers.com/sabs-ad-blocker-samsung-galaxy-phones/';
            xda.articleName = '\'Simple Ad-blocker for Samsung\' blocks ads, manages permissions, and disables packages on Galaxy phones';
            var gizmodo = new _objects_publication__WEBPACK_IMPORTED_MODULE_3__["Publication"]();
            gizmodo.title = 'Gizmodo';
            gizmodo.codename = gizmodo.title.toLowerCase();
            gizmodo.url = 'https://www.gizmodo.com.au/2018/04/this-free-ad-blocker-for-samsung-phones-also-kills-bloatware-and-manages-app-permissions/';
            gizmodo.archiveUrl = 'https://web.archive.org/web/20190120125759/https://www.gizmodo.com.au/2018/04/this-free-ad-blocker-for-samsung-phones-also-kills-bloatware-and-manages-app-permissions/';
            gizmodo.articleName = 'This Free Ad Blocker For Samsung Phones Also Kills Bloatware And Manages App Permissions';
            var sabs = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            sabs.title = 'SABS';
            sabs.type = 'Java, Android (app)';
            sabs.codename = sabs.title.toLowerCase();
            sabs.summary = 'Aesthetically pleasing system-wide rootless adblocker, package disabler, and permission manager with more than 100,000 downloads.';
            sabs.description = 'SABS was a system-wide, rootless AdBlocker, package disabler, permission manager and more. It worked by using Samsung\'s KNOX SDK, therefore only worked on Samsung devices. What made SABS stand out from other adblockers is that it could make reversable system level changes because of the Samsung\'s KNOX tools, and didn\'t run in the background. With it, you could easily block url domains, disable system apps that you can\'t in settings, remove permissions from apps that you can\'t usually control.<br><br>' + 'During a few months of its existence, SABS had been downloaded more than 100,000 times from GitHub repository alone (this number does not include downloads from other sources).';
            sabs.publications = [lifehacker, xda, gizmodo];
            return sabs;
          }
        }, {
          key: "getTickTock",
          value: function getTickTock() {
            var googlePlay = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            googlePlay.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GOOGLE_PLAY;
            googlePlay.url = 'https://play.google.com/store/apps/details?id=com.rokasjankunas.ticktock';
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/TickTock-Wear';
            var ticktock = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            ticktock.title = 'TickTock Wear';
            ticktock.type = 'Java, Wear OS/Android Wear (app)';
            ticktock.codename = 'ticktock';
            ticktock.summary = 'TickTock Wear adds a ticking sound to your smart watch.';
            ticktock.description = '<p>\n' + '              TickTock Wear is a Wear OS (Android Wear) application that adds a ticking sound to your smart watch.\n' + '            </p>\n' + '            <p>\n' + '              Other features:\n' + '            </p>\n' + '            <ul>\n' + '              <li>Restrictions: time, battery percentage and charging status</li>\n' + '              <li>Integrations - other apps and watch faces can integrate with TickTock Wear to add more features</li>\n' + '              <li>Additional sounds</li>\n' + '              <li>Hourly chime with volume and duration settings</li>\n' + '            </ul>';
            ticktock.links = [googlePlay, github];
            ticktock.googlePlayBannerUrl = 'https://play.google.com/store/apps/details?id=com.rokasjankunas.ticktock&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';
            return ticktock;
          }
        }, {
          key: "getVanillaMinecraftDocker",
          value: function getVanillaMinecraftDocker() {
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/vanilla-minecraft-docker';
            var dockerHub = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            dockerHub.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].DOCKER_HUB;
            dockerHub.url = 'https://hub.docker.com/r/layoutxml/vanilla-minecraft-docker';
            var vanillaMinecraftDocker = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            vanillaMinecraftDocker.title = 'vanilla-minecraft-docker';
            vanillaMinecraftDocker.type = 'Docker, Bash';
            vanillaMinecraftDocker.codename = 'vanilla-minecraft-docker';
            vanillaMinecraftDocker.summary = 'A hassle free docker image that allows running a vanilla Minecraft server in no time.';
            vanillaMinecraftDocker.description = 'A hassle free docker image that allows running a vanilla Minecraft server in no time. For Linux.';
            vanillaMinecraftDocker.links = [github, dockerHub];
            return vanillaMinecraftDocker;
          }
        }, {
          key: "getPaperMcDocker",
          value: function getPaperMcDocker() {
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/papermc-docker';
            var dockerHub = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            dockerHub.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].DOCKER_HUB;
            dockerHub.url = 'https://hub.docker.com/r/layoutxml/papermc-docker';
            var papermcDocker = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            papermcDocker.title = 'papermc-docker';
            papermcDocker.type = 'Docker, Bash';
            papermcDocker.codename = 'papermc-docker';
            papermcDocker.summary = 'A hassle free docker image that allows running a PaperMc Minecraft server in no time.';
            papermcDocker.description = 'A hassle free docker image that allows running a PaperMc Minecraft server in no time. For Linux.';
            papermcDocker.links = [github, dockerHub];
            return papermcDocker;
          }
        }, {
          key: "getWebsite",
          value: function getWebsite() {
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/rokas.dev';
            var url1 = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            url1.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].OTHER;
            url1.url = 'https://rokas.dev';
            var url2 = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            url2.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].OTHER;
            url2.url = 'https://rokasjankunas.com';
            var website = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            website.title = 'This website';
            website.type = 'Angular 2+, Bootstrap (website)';
            website.codename = 'website';
            website.summary = 'My personal website made with Angular and Bootstrap. Hosted on GitHub Pages. Custom one-page with dynamic URLs solution.';
            website.description = 'My personal website made with Angular and Bootstrap. Hosted on GitHub Pages. Custom one-page with dynamic URLs solution.';
            website.links = [github, url1, url2];
            return website;
          }
        }, {
          key: "getDontStopMoving",
          value: function getDontStopMoving() {
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/Dont-Stop-Moving.-The-Game';
            var dontStopMoving = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            dontStopMoving.title = 'Don\'t stop moving! The game';
            dontStopMoving.type = 'Java, OpenGL (Windows game)';
            dontStopMoving.codename = 'dont-stop-moving';
            dontStopMoving.summary = 'The village has been turned to ice by an evil witch who has also set up traps along the track to catch her. Avoid the obstacles and reach the end of the level in order to rescue people of the frozen land.';
            dontStopMoving.description = '<p>The village has been turned to ice by an evil witch who has also set up traps along the track to catch her. Avoid the obstacles and reach the end of the level in order to rescue people of the frozen land.\n</p>' + '\n' + '<h5>Controls\n</h5>' + '<p>Can be changed in InputManager.java file. Flying (for debug purposes) can also be enabled in the same file.\n</p>' + '<ul>\n' + '<li>Looking around - Mouse movement\n</li>' + '<li>Move forward - W\n</li>' + '<li>Move backwards - S\n</li>' + '<li>Move left - A\n</li>' + '<li>Move right - D\n</li>' + '<li>Jump - Space\n</li>' + '<li>Restart/respawn - R\n</li>' + '<li>Exit - Escape\n</li>' + '</ul>If flying is enabled:\n</li>' + '<ul>\n</li>' + '<li>Move up - Q\n</li>' + '<li>Move down - Z</li>' + '</ul>';
            dontStopMoving.links = [github];
            return dontStopMoving;
          }
        }, {
          key: "getRentalStore",
          value: function getRentalStore() {
            var github = new _objects_link__WEBPACK_IMPORTED_MODULE_4__["Link"]();
            github.type = _objects_url_type_enum__WEBPACK_IMPORTED_MODULE_5__["UrlType"].GITHUB;
            github.url = 'https://github.com/LayoutXML/Rental-Store-Mock-API';
            var rentalStore = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            rentalStore.title = 'Rental Store Mock API';
            rentalStore.type = 'Java, Spring Boot';
            rentalStore.codename = 'rental-store';
            rentalStore.summary = 'REST API made with Spring Boot (web, JPA, validation, cache, security), H2 database, Flyway migration, Docker, JUnit and Mockito tests, Lombok. Built on Java 11.';
            rentalStore.description = '<p>REST API made with Spring Boot (web, JPA, validation, cache, security), H2 database, Flyway migration, Docker, JUnit and Mockito tests, Lombok. Built on Java 11.</p>\n' + '<h5 id="use-cases">Use cases</h5>\n' + '<ul>\n' + '<li>API users can get a list of available equipment.</li>\n' + '<li>API users can choose a single product and get its details and pricing options.</li>\n' + '<li>API users can delete a product.</li>\n' + '<li>API users can calculate the total price for the chosen product, commitment and rental period.</li>\n' + '</ul>\n' + '<p>Each use case corresponds to an endpoint. Technical details and specifications of each can be found in the Documentation.md file.</p>\n' + '<h5 id="features">Features</h5>\n' + '<ul>\n' + '<li>REST API endpoints for each use case mentioned above.</li>\n' + '<li>Spring Boot Validation for these endpoints.</li>\n' + '<li>Error codes for invalid, unauthorized or incorrect data.</li>\n' + '<li>Persistent H2 database.</li>\n' + '<li>Flyway database migrations for setting up and filling database tables.</li>\n' + '<li>Basic Spring Security with a single user.</li>\n' + '<li>Basic Spring Caching for data retrieval and cache eviction upon product deletion.</li>\n' + '<li>Docker script for running the generated JAR file.</li>\n' + '<li>JUnit unit tests for price calculations mentioned below. Mockito for mocking the database for these tests.</li>\n' + '</ul>\n' + '<h5 id="sample-data">Sample data</h5>\n' + '<table>\n' + '<thead>\n' + '<tr>\n' + '<th style="text-align:right">Product</th>\n' + '<th style="text-align:right">Price/month without commitment</th>\n' + '<th style="text-align:right">Price/month for 3 month commitment</th>\n' + '<th style="text-align:right">Price/month for 6 month commitment</th>\n' + '<th style="text-align:right">Initial charge</th>\n' + '<th>Available for rent</th>\n' + '</tr>\n' + '</thead>\n' + '<tbody>\n' + '<tr>\n' + '<td style="text-align:right">Skis</td>\n' + '<td style="text-align:right">$35</td>\n' + '<td style="text-align:right">$30</td>\n' + '<td style="text-align:right">$25</td>\n' + '<td style="text-align:right">$35</td>\n' + '<td>Yes</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="text-align:right">Snowboard</td>\n' + '<td style="text-align:right">$25</td>\n' + '<td style="text-align:right">$20</td>\n' + '<td style="text-align:right">$17</td>\n' + '<td style="text-align:right">$25</td>\n' + '<td>Yes</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="text-align:right">Bike</td>\n' + '<td style="text-align:right">$35</td>\n' + '<td style="text-align:right">$30</td>\n' + '<td style="text-align:right">$25</td>\n' + '<td style="text-align:right">$35</td>\n' + '<td>No</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="text-align:right">Roller-blades</td>\n' + '<td style="text-align:right">$17</td>\n' + '<td style="text-align:right">$13</td>\n' + '<td style="text-align:right">$10</td>\n' + '<td style="text-align:right">$17</td>\n' + '<td>Yes</td>\n' + '</tr>\n' + '<tr>\n' + '<td style="text-align:right">Skateboard</td>\n' + '<td style="text-align:right">$35</td>\n' + '<td style="text-align:right">$30</td>\n' + '<td style="text-align:right">$25</td>\n' + '<td style="text-align:right">$35</td>\n' + '<td>Yes</td>\n' + '</tr>\n' + '</tbody>\n' + '</table>\n' + '<br><h5 id="pricing-formula">Pricing formula</h5>\n' + '<p>Commitment is a number of months that the customer chooses to rent the equipment for. It can either be 3, 6 months or no commitment. Regardless of commitment, a customer can choose to return the product at a different time in which case they would pay no commitment price.</p>\n' + '<p>Pricing formula is as follows:</p>\n' + '<p><em>total price = initial charge + (return months </em> price per month, based on commitment)*</p>\n' + '<p>For example:</p>\n' + '<ul>\n' + '<li>User chooses a skateboard with a commitment of 6 months and chooses to return it after 2 months: <ul>\n' + '<li>price = $35 initial charge + (2 months * $35 no commitment price) = $105</li>\n' + '</ul>\n' + '</li>\n' + '</ul>\n' + '<ul>\n' + '<li>User chooses roller-blades without a commitment and chooses to return it after 7 months:<ul>\n' + '<li>price = $17 initial charge + (7 months * $17 no commitment price) = $136</li>\n' + '</ul>\n' + '</li>\n' + '</ul>\n';
            rentalStore.links = [github];
            return rentalStore;
          }
        }, {
          key: "getOther",
          value: function getOther() {
            var other = new _objects_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
            other.title = 'Other projects';
            other.codename = 'other';
            other.summary = 'More projects using Java, C, C++, C#, Bash, Docker, SQL, JSON, HTML, CSS etc. at github.com/LayoutXML';
            other.externalUrl = 'https://github.com/LayoutXML';
            return other;
          }
        }]);

        return ProjectsService;
      }();

      ProjectsService.ctorParameters = function () {
        return [];
      };

      ProjectsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ProjectsService);
      /***/
    },

    /***/
    "kdj2":
    /*!*********************************!*\
      !*** ./src/app/objects/link.ts ***!
      \*********************************/

    /*! exports provided: Link */

    /***/
    function kdj2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Link", function () {
        return Link;
      });

      var Link = function Link() {
        _classCallCheck(this, Link);
      };
      /***/

    },

    /***/
    "nNRj":
    /*!*******************************************************!*\
      !*** ./src/app/modals/contact/contact.component.less ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function nNRj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "fa-icon {\n  color: #ffffff;\n}\na {\n  word-break: break-word;\n}\n.contact-wrapper {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('background_mountains_low.jpg');\n  background-image: -o-linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('background_mountains_low.jpg');\n  background-position: center;\n  background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  color: #ffffff;\n}\n.card {\n  background: none;\n  border: none;\n}\n.corner-helper {\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  background-color: #ffffff;\n  height: 1rem;\n}\n@media screen and (min-width: 768px) {\n  .contact-wrapper {\n    background-attachment: fixed;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLDhHQUFBO0VBR0EsaUhBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFGRjtBQUtBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBT0E7RUFDRTtJQUNFLDRCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5hIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLmNvbnRhY3Qtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMC40KSksIHVybChcIn5zcmMvYXNzZXRzL2JhY2tncm91bmRfbW91bnRhaW5zX2xvdy5qcGdcIik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjQpKSwgdXJsKFwifnNyYy9hc3NldHMvYmFja2dyb3VuZF9tb3VudGFpbnNfbG93LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9iYWNrZ3JvdW5kX21vdW50YWluc19sb3cuanBnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuNCkpLCB1cmwoXCJ+c3JjL2Fzc2V0cy9iYWNrZ3JvdW5kX21vdW50YWluc19sb3cuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb3JuZXItaGVscGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMXJlbTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "sFxA":
    /*!*********************************************!*\
      !*** ./src/app/services/routing.service.ts ***!
      \*********************************************/

    /*! exports provided: RoutingService */

    /***/
    function sFxA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingService", function () {
        return RoutingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../objects/urls.enum */
      "N3E0");

      var RoutingService_1;

      var RoutingService = RoutingService_1 = /*#__PURE__*/function () {
        function RoutingService(router) {
          var _this4 = this;

          _classCallCheck(this, RoutingService);

          this.router = router;
          this.isFirstEvent = true;
          this.isHomePage = true;
          this.activeUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.newUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
              if (event.url === _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"].PROJECTS || event.url === _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"].ABOUT || event.url === _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"].CONTACTS) {
                _this4.loading.next(true);
              }

              window.scrollTo(0, 0);
              setTimeout(function () {
                // at least on next tick
                // 1s delay is a reasonable time for page to render (internet speed has no effect)
                // having tested lifecycle and event listeners for page to load, they all fire too early
                _this4.activeUrl.next(event.url);

                _this4.doScroll();

                _this4.loading.next(false);
              }, 1000);
            }
          });
        }

        _createClass(RoutingService, [{
          key: "routeTo",
          value: function routeTo(url) {
            this.newUrl.next(url);

            if (url && this.activeUrl.getValue() !== url) {
              this.activeUrl.next(url);
              window.history.replaceState(null, null, url);
              this.doScroll();

              if (!this.isHomePage) {
                this.router.navigateByUrl(url);
              }
            }
          }
        }, {
          key: "doScroll",
          value: function doScroll() {
            var _this5 = this;

            if (!this.isHomePage) {
              return;
            }

            switch (this.activeUrl.getValue()) {
              case _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"].PROJECTS:
                setTimeout(function () {
                  var projectsElement = document.getElementById('projects');

                  if (projectsElement) {
                    window.scrollTo({
                      top: projectsElement.offsetTop - RoutingService_1.extraHeight,
                      behavior: 'smooth'
                    });
                    _this5.isFirstEvent = false;
                  }
                }, this.isFirstEvent ? 1000 : 1);
                break;

              case _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"].ABOUT:
                setTimeout(function () {
                  var aboutElement = document.getElementById('about');

                  if (aboutElement) {
                    window.scrollTo({
                      top: aboutElement.offsetTop - RoutingService_1.extraHeight,
                      behavior: 'smooth'
                    });
                    _this5.isFirstEvent = false;
                  }
                }, this.isFirstEvent ? 1000 : 1);
                break;

              case _objects_urls_enum__WEBPACK_IMPORTED_MODULE_4__["Urls"].CONTACTS:
                setTimeout(function () {
                  var contactsElement = document.getElementById('contacts');

                  if (contactsElement) {
                    window.scrollTo({
                      top: contactsElement.offsetTop - RoutingService_1.extraHeight,
                      behavior: 'smooth'
                    });
                    _this5.isFirstEvent = false;
                  }
                }, this.isFirstEvent ? 1000 : 1);
                break;

              default:
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
                this.isFirstEvent = false;
                break;
            }
          }
        }], [{
          key: "compareHeights",
          value: function compareHeights(scrollPosition, elementTop, elementHeight) {
            return scrollPosition + RoutingService_1.extraHeight < elementTop + elementHeight && scrollPosition > elementTop;
          }
        }]);

        return RoutingService;
      }();

      RoutingService.extraHeight = 64;

      RoutingService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      RoutingService = RoutingService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RoutingService);
      /***/
    },

    /***/
    "uBPG":
    /*!************************************!*\
      !*** ./src/app/app.component.less ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function uBPG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "v2M4":
    /*!********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.ts ***!
      \********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function v2M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "w0H6");
      /* harmony import */


      var _not_found_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.component.less */
      "WkuG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var NotFoundComponent = function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);

        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
      };

      NotFoundComponent.ctorParameters = function () {
        return [];
      };

      NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotFoundComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_project_project_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/project/project-view.component */
      "7yUH");

      var routes = [{
        path: '',
        runGuardsAndResolvers: 'always',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
      }, {
        path: 'home',
        runGuardsAndResolvers: 'always',
        redirectTo: '/',
        pathMatch: 'full'
      }, {
        path: 'projects',
        runGuardsAndResolvers: 'always',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
      }, {
        path: 'about',
        runGuardsAndResolvers: 'always',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
      }, {
        path: 'contacts',
        runGuardsAndResolvers: 'always',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
      }, {
        path: 'projects/:codename',
        runGuardsAndResolvers: 'always',
        component: _pages_project_project_view_component__WEBPACK_IMPORTED_MODULE_5__["ProjectViewComponent"]
      }, {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: 'reload'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vnJ6":
    /*!*******************************************************!*\
      !*** ./src/app/modals/projects/projects.component.ts ***!
      \*******************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function vnJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./projects.component.html */
      "Tp7E");
      /* harmony import */


      var _projects_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./projects.component.less */
      "0et/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _data_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data/projects.service */
      "j53p");

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent(projectsService) {
          _classCallCheck(this, ProjectsComponent);

          this.projectsService = projectsService;
          this.upIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronUp"];
          this.downIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faChevronDown"];
          this.screenWidth = 640;
          this.isExpanded = false;
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.screenWidth = window.innerWidth;
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.screenWidth = window.innerWidth;
          }
        }, {
          key: "isProjectDisplayed",
          value: function isProjectDisplayed(index) {
            if (this.isExpanded || index < 3) {
              return true;
            }

            if (index === 3) {
              return this.screenWidth >= 992;
            }

            return false;
          }
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ctorParameters = function () {
        return [{
          type: _data_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectsService"]
        }];
      };

      ProjectsComponent.propDecorators = {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      };
      ProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjectsComponent);
      /***/
    },

    /***/
    "w0H6":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w0H6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container mt-4 text-center\">\n  <h2 class=\"mb-3\">\n    <fa-icon [icon]=\"faTimes\" class=\"pr-3\"></fa-icon>\n    Page Not Found\n    <fa-icon [icon]=\"faTimes\" class=\"pl-3\"></fa-icon>\n  </h2>\n</div>\n";
      /***/
    },

    /***/
    "wp7z":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/contact/contact.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function wp7z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"contact-wrapper\">\n  <div class=\"m-0 p-0 corner-helper\"></div>\n\n  <div class=\"container\">\n  <h2 class=\"mt-3 pt-3 mb-1\">Contact me</h2>\n\n  <div class=\"card mt-4 pb-4\">\n    <div class=\"p-4 mb-3\">\n\n      <div class=\"row\">\n        <div class=\"col-1 text-center d-print-none\">\n          <h4><a href=\"mailto:hello@rokas.dev\"><fa-icon [icon]=\"faEnvelope\" class=\"pr-3\"></fa-icon></a></h4>\n        </div>\n        <div class=\"col-10 col-sm-11 mx-auto\">\n          <h4><a href=\"mailto:hello@rokas.dev\">hello@<wbr>rokas.dev</a></h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-3\">\n        <div class=\"col-1 text-center d-print-none\">\n          <h4><a href=\"https://www.linkedin.com/in/jankunasrokas\"><fa-icon [icon]=\"faLinkedin\" class=\"pr-3\"></fa-icon></a></h4>\n        </div>\n        <div class=\"col-10 col-sm-11 mx-auto\">\n          <h4><a href=\"https://www.linkedin.com/in/jankunasrokas\">linkedin<wbr>.com/<wbr>in/<wbr>jankunas<wbr>rokas</a></h4>\n        </div>\n      </div>\n\n      <div class=\"row mt-3\">\n        <div class=\"col-1 text-center d-print-none\">\n          <h4><fa-icon [icon]=\"faMapMarker\" class=\"pr-3\"></fa-icon></h4>\n        </div>\n        <div class=\"col-10 col-sm-11 mx-auto\">\n          <h4>I have the right to live and work in the United Kingdom, Lithuania, the European Union. 🇬🇧 🇱🇹 🇪🇺</h4>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "xPP5":
    /*!*****************************************************!*\
      !*** ./src/app/modals/footer/footer.component.less ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function xPP5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footer-button {\n  color: #ffffff;\n  font-size: 16pt;\n}\nfooter {\n  padding: 0.5rem 1rem;\n  margin-top: -1rem;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n@media screen and (min-width: 768px) {\n  .fbml {\n    margin-left: 1rem !important;\n  }\n  .fbmr {\n    margin-right: 1rem !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .fbml {\n    margin-left: 0.5rem !important;\n  }\n  .fbmr {\n    margin-right: 0.5rem !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQUY7QUFHQTtFQUNFO0lBQ0UsNEJBQUE7RUFERjtFQUlBO0lBQ0UsNkJBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLDhCQUFBO0VBSEY7RUFNQTtJQUNFLCtCQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE2cHQ7XG59XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZibWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmJtciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZibWwge1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZibXIge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "zIEL":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zIEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer bg-dark pt-4 pb-2 d-print-none\">\n  <p class=\"text-light text-left ml-2\">© Rokas Jankunas <span class=\"d-none d-sm-inline\">2018 - {{date | date: 'yyyy'}}</span>\n    <a href=\"https://www.linkedin.com/in/jankunasrokas/\"><fa-icon [icon]=\"faLinkedin\" class=\"footer-button float-right fbml mr-2\"></fa-icon></a>\n    <a href=\"https://play.google.com/store/apps/dev?id=9095680560714446900\"><fa-icon [icon]=\"faGooglePlay\" class=\"footer-button float-right fbml fbmr\"></fa-icon></a>\n    <a href=\"https://github.com/LayoutXML\"><fa-icon [icon]=\"faGithub\" class=\"footer-button float-right fbmr\"></fa-icon></a></p>\n</footer>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! smoothscroll-polyfill */
      "dwco");
      /* harmony import */


      var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();
      /***/
    },

    /***/
    "zVnQ":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/about/about.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function zVnQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <!-- Experience -->\n  <h2 class=\"mt-4 mb-1 pb-1\">Experience</h2>\n  <p class=\"font-weight-light mt-3\">Over the course of my career, I have helped companies achieve their goals on time\n    and with high quality by designing and creating software systems. Working as a full stack software engineer and\n    other IT roles, I have acquired invaluable industry knowledge.</p>\n\n  <h4 class=\"mt-4 d-lg-inline-block\">Software Engineer</h4>\n  <h5 class=\"float-lg-right mt-1 d-lg-inline-block pt-lg-4 text-lg-right\">October 2023 - Present</h5>\n  <h5>Cognizant (Devbridge)</h5>\n  <p>Java, Spring Boot, Azure Service Bus, Harness, Liquibase, Gradle, React, Redux, Typescript, Docker,\n    Git.</p>\n\n  <h4 class=\"mt-1 pt-4 d-lg-inline-block\">Senior Software Engineer</h4>\n  <h5 class=\"float-lg-right mt-1 d-lg-inline-block pt-lg-4 text-lg-right\">June 2019 - October 2023 (4 years 5\n    months)</h5>\n  <h5>Insoft</h5>\n  <p>Promoted from Software Engineer (Jan 2022) and Junior Software Engineer (Feb 2020). Worked as a Senior Software\n    Engineer for approximately 2 years.</p>\n  <p class=\"mt-3\">In this capacity:</p>\n  <ul>\n    <li><b>Building</b> backend-frontend features, database integrations, security, system modules, managing\n      deployments, and\n      integrations with external systems.\n    </li>\n    <li><b>Designing project architecture</b>, contributing to analysis, testing, and documentation.</li>\n    <li><b>Mentoring</b> and advising fellow software engineers, conducting code reviews.</li>\n    <li><b>Communicating</b> with clients and external system teams.</li>\n    <li><b>Self-directing</b> work based on project needs, coordinating cross-functional team collaboration.</li>\n  </ul>\n\n  <p>Technical skills spanned full-stack engineering, showcasing proficiency in:</p>\n  <ul>\n    <li>Backend: Java, Spring Boot, Hibernate, JPA, PostgreSQL, JPQL, SQL, H2, Flyway, Maven.</li>\n    <li>Frontend: Typescript, Angular 2+, HTML, CSS, Bootstrap, npm.</li>\n    <li>Git, Linux, Postman, SoapUI, Docker, Nginx, JSON, XML, XSD, WSDL. REST and SOAP protocols.</li>\n  </ul>\n\n  <h4 class=\"mt-1 pt-4 d-lg-inline-block\">Customer Service Representative</h4>\n  <h5 class=\"float-lg-right mt-1 d-lg-inline-block pt-lg-4 text-lg-right\">May 2018 - June 2019 (1 year 2 months)</h5>\n  <h5>Booster.io</h5>\n  <ul>\n    <li>Provided customer service for customers of Booster for WooCommerce and related products, i.e. WooCommerce and\n      WordPress.\n    </li>\n    <li>Wrote documentation based on PHP code.</li>\n    <li>Tracked and reported bugs.</li>\n    <li>Interacted with over 4,000 customers.</li>\n  </ul>\n\n  <h4 class=\"pt-4 d-lg-inline-block\">Programmer Trainee <span>(Internship)</span></h4>\n  <h5 class=\"float-lg-right mt-1 d-lg-inline-block pt-lg-4 text-lg-right\">Summer of 2017</h5>\n  <h5>ATEA</h5>\n  <p>Acquired proficiency in manual and automated product testing, quality assurance, and various facets of the software\n    development lifecycle.</p>\n\n  <!-- Education -->\n  <h2 class=\"mt-5 mb-1 pb-1\">Education</h2>\n  <h4 class=\"mt-2 d-lg-inline-block\">Bachelor of Science (Honors) in Computer Science</h4>\n  <h5>University of Dundee</h5>\n  <ul>\n    <li>Attained the highest degree classification in the UK - <b>first-class honors</b>.</li>\n    <li>Earned the title of <b>top student</b> in my course three years in a row, receiving a medal and certifications.\n    </li>\n    <li>Completed a four-year degree.</li>\n  </ul>\n\n  <h4 class=\"pt-4 d-lg-inline-block\">High School Diploma</h4>\n  <h5>Vilnius Zirmunai Gymnasium</h5>\n  <ul>\n    <li>Attained a perfect score of 100 in three state exams.</li>\n    <li>Achieved a perfect grade of 10 in the majority of subjects.</li>\n  </ul>\n\n  <!-- Recognition -->\n  <h2 class=\"mt-5 mb-1 pb-1\">Awards & Achievements</h2>\n  <h4 class=\"mt-2 d-lg-inline-block\">Oracle Certified Professional: Java SE 11 Developer <span>(Certificate)</span></h4>\n  <h5>Oracle</h5>\n  <p>Pursued certification at the encouragement of my employer, who values it for government projects. Strengthened my\n    skills as a software engineer during the process and demonstrated proficiency in Java through successful exam\n    completion.</p>\n\n  <h4 class=\"mt-1 pt-4 d-lg-inline-block\">1st Place in Scotland in the Google Hashcode competition</h4>\n  <h5>Google</h5>\n  <p>As part of a three-member team, devised an efficient C++ solution for library and book management, resulting in\n    achieving the top position in Scotland and ranking in the top 4% worldwide.</p>\n\n  <h4 class=\"mt-1 pt-4 d-lg-inline-block\">Hackathon Winning Team</h4>\n  <p>Achieved success in a Steganography challenge as part of a four-member team. Developed a Java application\n    proficient in concealing information within the least significant bits of pixels.</p>\n\n  <h4 class=\"mt-1 pt-4 d-lg-inline-block\">Top 10 Lithuanian Programmer-Students</h4>\n  <p>Took part in the ultimate nationwide stage of a programming competition, emphasizing the creation of swift and\n    optimized solutions to challenges in C++. Invitations to this final round were extended to only the top 10\n    individuals who successfully navigated the preceding three stages. Furthermore, secured the 3rd position in the\n    second, city-wide stage held in Vilnius.</p>\n\n  <div class=\"mb-3\"></div>\n</div>\n";
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map