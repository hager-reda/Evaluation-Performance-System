(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/EvaluationCycle.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/EvaluationCycle.service.ts ***!
  \*****************************************************/
/*! exports provided: EvaluationCycleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationCycleService", function() { return EvaluationCycleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class EvaluationCycleService {
    constructor(http) {
        this.http = http;
        this.URL = 'http://localhost:8000/api/evaluation_cycles';
    }
    getEvaluationCycle() {
        //debugger
        return this.http.get(`${this.URL}`);
    }
    saveEvaluationCycle(value) {
        return this.http.post('http://localhost:8000/api/evaluation_cycle', value);
    }
    editEvaluationCycle(value, id) {
        console.log("value", value);
        console.log("id", id);
        return this.http.put('http://localhost:8000/api/evaluation_cycle/' + id, value);
    }
    deleteEvaluationCycle(id) {
        return this.http.delete('http://localhost:8000/api/evaluation_cycle/' + id);
    }
    getEvaluationCycleById(id) {
        return this.http.get('http://localhost:8000/api/evaluation_cycle/' + id);
    }
}
EvaluationCycleService.ɵfac = function EvaluationCycleService_Factory(t) { return new (t || EvaluationCycleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EvaluationCycleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EvaluationCycleService, factory: EvaluationCycleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationCycleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/criterias.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/criterias.service.ts ***!
  \***********************************************/
/*! exports provided: CriteriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriasService", function() { return CriteriasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CriteriasService {
    constructor(_http) {
        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/criteria';
    }
    getCriteria() {
        return this._http.get(`${this._apiUrl}s`);
    }
    getCriteriaTypes() {
        return this._http.get('http://localhost:8000/api/criteriatypes');
    }
    deleteCriteria(id) {
        return this._http.delete(`${this._apiUrl}/${id}`);
    }
    addCriteria(criteria) {
        return this._http.post(this._apiUrl, criteria);
    }
    editCriteria(value, id) {
        return this._http.put(`http://localhost:8000/api/criteria/${id}`, value);
    }
    getTrash() {
        return this._http.get(`${this._apiUrl}s/trash`);
    }
    restoreTrash(id) {
        return this._http.get(`${this._apiUrl}/trash/${id}`);
    }
    getByRole(id, uid) {
        return this._http.get(`${this._apiUrl}/role/${id}/${uid}`);
    }
}
CriteriasService.ɵfac = function CriteriasService_Factory(t) { return new (t || CriteriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CriteriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CriteriasService, factory: CriteriasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UsersService {
    constructor(_http) {
        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/user';
    }
    getUsers() {
        return this._http.get(`${this._apiUrl}s`);
    }
    getUserById(id) {
        return this._http.get(`${this._apiUrl}/${id}`);
    }
    deleteUser(id) {
        return this._http.delete(`${this._apiUrl}/${id}`);
    }
    addUser(user) {
        return this._http.post(this._apiUrl, user);
    }
    editUser(id, user) {
        return this._http.put(`${this._apiUrl}/${id}`, user);
    }
    getUserByRole(role, uid) {
        return this._http.get(`${this._apiUrl}s/${role}/${uid}`);
    }
    getTrash() {
        return this._http.get(`${this._apiUrl}s/trash`);
    }
    restoreTrash(id) {
        return this._http.get(`${this._apiUrl}/trash/${id}`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map