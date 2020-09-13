function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/EvaluationCycle.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/EvaluationCycle.service.ts ***!
    \*****************************************************/

  /*! exports provided: EvaluationCycleService */

  /***/
  function srcAppServicesEvaluationCycleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvaluationCycleService", function () {
      return EvaluationCycleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EvaluationCycleService = /*#__PURE__*/function () {
      function EvaluationCycleService(http) {
        _classCallCheck(this, EvaluationCycleService);

        this.http = http;
        this.URL = 'http://localhost:8000/api/evaluation_cycles';
      }

      _createClass(EvaluationCycleService, [{
        key: "getEvaluationCycle",
        value: function getEvaluationCycle() {
          //debugger
          return this.http.get("".concat(this.URL));
        }
      }, {
        key: "saveEvaluationCycle",
        value: function saveEvaluationCycle(value) {
          return this.http.post('http://localhost:8000/api/evaluation_cycle', value);
        }
      }, {
        key: "editEvaluationCycle",
        value: function editEvaluationCycle(value, id) {
          console.log("value", value);
          console.log("id", id);
          return this.http.put('http://localhost:8000/api/evaluation_cycle/' + id, value);
        }
      }, {
        key: "deleteEvaluationCycle",
        value: function deleteEvaluationCycle(id) {
          return this.http["delete"]('http://localhost:8000/api/evaluation_cycle/' + id);
        }
      }, {
        key: "getEvaluationCycleById",
        value: function getEvaluationCycleById(id) {
          return this.http.get('http://localhost:8000/api/evaluation_cycle/' + id);
        }
      }]);

      return EvaluationCycleService;
    }();

    EvaluationCycleService.ɵfac = function EvaluationCycleService_Factory(t) {
      return new (t || EvaluationCycleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    EvaluationCycleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EvaluationCycleService,
      factory: EvaluationCycleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationCycleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/criterias.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/criterias.service.ts ***!
    \***********************************************/

  /*! exports provided: CriteriasService */

  /***/
  function srcAppServicesCriteriasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriteriasService", function () {
      return CriteriasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CriteriasService = /*#__PURE__*/function () {
      function CriteriasService(_http) {
        _classCallCheck(this, CriteriasService);

        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/criteria';
      }

      _createClass(CriteriasService, [{
        key: "getCriteria",
        value: function getCriteria() {
          return this._http.get("".concat(this._apiUrl, "s"));
        }
      }, {
        key: "getCriteriaTypes",
        value: function getCriteriaTypes() {
          return this._http.get('http://localhost:8000/api/criteriatypes');
        }
      }, {
        key: "deleteCriteria",
        value: function deleteCriteria(id) {
          return this._http["delete"]("".concat(this._apiUrl, "/").concat(id));
        }
      }, {
        key: "addCriteria",
        value: function addCriteria(criteria) {
          return this._http.post(this._apiUrl, criteria);
        }
      }, {
        key: "editCriteria",
        value: function editCriteria(value, id) {
          return this._http.put("http://localhost:8000/api/criteria/".concat(id), value);
        }
      }, {
        key: "getTrash",
        value: function getTrash() {
          return this._http.get("".concat(this._apiUrl, "s/trash"));
        }
      }, {
        key: "restoreTrash",
        value: function restoreTrash(id) {
          return this._http.get("".concat(this._apiUrl, "/trash/").concat(id));
        }
      }, {
        key: "getByRole",
        value: function getByRole(id, uid) {
          return this._http.get("".concat(this._apiUrl, "/role/").concat(id, "/").concat(uid));
        }
      }]);

      return CriteriasService;
    }();

    CriteriasService.ɵfac = function CriteriasService_Factory(t) {
      return new (t || CriteriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CriteriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CriteriasService,
      factory: CriteriasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(_http) {
        _classCallCheck(this, UsersService);

        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/user';
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers() {
          return this._http.get("".concat(this._apiUrl, "s"));
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this._http.get("".concat(this._apiUrl, "/").concat(id));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this._http["delete"]("".concat(this._apiUrl, "/").concat(id));
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          return this._http.post(this._apiUrl, user);
        }
      }, {
        key: "editUser",
        value: function editUser(id, user) {
          return this._http.put("".concat(this._apiUrl, "/").concat(id), user);
        }
      }, {
        key: "getUserByRole",
        value: function getUserByRole(role, uid) {
          return this._http.get("".concat(this._apiUrl, "s/").concat(role, "/").concat(uid));
        }
      }, {
        key: "getTrash",
        value: function getTrash() {
          return this._http.get("".concat(this._apiUrl, "s/trash"));
        }
      }, {
        key: "restoreTrash",
        value: function restoreTrash(id) {
          return this._http.get("".concat(this._apiUrl, "/trash/").concat(id));
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map