(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-base-base-module"],{

/***/ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
  \**********************************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */



const _c0 = ["*"];
function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-progress");
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onTreeAction(group_r7); })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r1.onActivate($event, ctx_r15.indexes.first + i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const i_r20 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r1.onActivate($event, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.rowContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onBodyScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
} }
function DataTableBodyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const column_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.columnContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 18, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DatatableComponent_datatable_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onColumnSort($event); })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onColumnResize($event); })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onColumnReorder($event); })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onHeaderSelect($event); })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onColumnContextmenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
} }
function DatatableComponent_datatable_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onFooterPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
} }
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
} }
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.select.emit(!ctx_r5.allRowsSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
} }
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onSort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.page.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
const _c2 = function (a0) { return { "selected-count": a0 }; };
function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const pg_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectPage(pg_r1.number); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
} }
function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ii_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
} }
function DataTableRowWrapperComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
} }
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
const _c3 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.isSelected);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
const _c4 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-body-row", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", 0 - 1);
} }
let ScrollbarHelper = class ScrollbarHelper {
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    getWidth() {
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
};
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScrollbarHelper, factory: ScrollbarHelper.ɵfac });
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
ScrollbarHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], ScrollbarHelper);

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
let DimensionsHelper = class DimensionsHelper {
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
};
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DimensionsHelper, factory: DimensionsHelper.ɵfac });

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
let ColumnChangesService = class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next();
    }
};
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ColumnChangesService, factory: ColumnChangesService.ɵfac });

let DataTableFooterTemplateDirective = class DataTableFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) { return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DataTableFooterTemplateDirective, selectors: [["", "ngx-datatable-footer-template", ""]] });
DataTableFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
let VisibilityDirective = class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
};
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.visible')
], VisibilityDirective.prototype, "isVisible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VisibilityDirective.prototype, "visible", void 0);

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
let DraggableDirective = class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
};
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragX: "dragX", dragY: "dragY", dragEventTarget: "dragEventTarget", dragModel: "dragModel" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DraggableDirective.prototype, "dragEventTarget", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DraggableDirective.prototype, "dragModel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DraggableDirective.prototype, "dragX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DraggableDirective.prototype, "dragY", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DraggableDirective.prototype, "dragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DraggableDirective.prototype, "dragging", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DraggableDirective.prototype, "dragEnd", void 0);

let ResizeableDirective = class ResizeableDirective {
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ngAfterViewInit() {
        const renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    }
    ngOnDestroy() {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    }
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    onMousedown(event) {
        const isHandle = event.target.classList.contains('resize-handle');
        const initialWidth = this.element.clientWidth;
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup());
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup))
                .subscribe((e) => this.move(e, initialWidth, mouseDownScreenX));
            this.subscription.add(mouseMoveSub);
        }
    }
    move(event, initialWidth, mouseDownScreenX) {
        const movementX = event.screenX - mouseDownScreenX;
        const newWidth = initialWidth + movementX;
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
};
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) { return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ResizeableDirective, selectors: [["", "resizeable", ""]], hostVars: 2, hostBindings: function ResizeableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    } }, inputs: { resizeEnabled: "resizeEnabled", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { resize: "resize" } });
ResizeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResizeableDirective.prototype, "resizeEnabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResizeableDirective.prototype, "minWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResizeableDirective.prototype, "maxWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResizeableDirective.prototype, "resize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
], ResizeableDirective.prototype, "onMousedown", null);

let OrderableDirective = class OrderableDirective {
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.differ = differs.find({}).create();
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            const elm = dragger.element;
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    onDragging({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    onDragEnd({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    isTarget(model, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((el) => el === pos.element)) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    createMapDiffs() {
        return this.draggables.toArray().reduce((acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    }
};
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) { return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: OrderableDirective, selectors: [["", "orderable", ""]], contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    } }, outputs: { reorder: "reorder", targetChanged: "targetChanged" } });
OrderableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrderableDirective.prototype, "reorder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrderableDirective.prototype, "targetChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DraggableDirective, { descendants: true })
], OrderableDirective.prototype, "draggables", void 0);
OrderableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], OrderableDirective);

let LongPressDirective = class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
};
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", duration: "duration", pressModel: "pressModel" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LongPressDirective.prototype, "pressEnabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LongPressDirective.prototype, "pressModel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LongPressDirective.prototype, "duration", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LongPressDirective.prototype, "longPressStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LongPressDirective.prototype, "longPressing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LongPressDirective.prototype, "longPressEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.press')
], LongPressDirective.prototype, "press", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.longpress')
], LongPressDirective.prototype, "isLongPress", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
], LongPressDirective.prototype, "onMouseDown", null);

let ScrollerComponent = class ScrollerComponent {
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
};
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
ScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollerComponent.prototype, "scrollbarV", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollerComponent.prototype, "scrollbarH", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollerComponent.prototype, "scrollHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScrollerComponent.prototype, "scrollWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScrollerComponent.prototype, "scroll", void 0);

let DatatableGroupHeaderTemplateDirective = class DatatableGroupHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) { return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderTemplateDirective, selectors: [["", "ngx-datatable-group-header-template", ""]] });
DatatableGroupHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

let DatatableGroupHeaderDirective = class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
};
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) { return new (t || DatatableGroupHeaderDirective)(); };
DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderDirective, selectors: [["ngx-datatable-group-header"]], contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableGroupHeaderDirective.prototype, "rowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')
], DatatableGroupHeaderDirective.prototype, "_templateInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], DatatableGroupHeaderDirective.prototype, "_templateQuery", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableGroupHeaderDirective.prototype, "toggle", void 0);

/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

function optionalGetterForProp(prop) {
    return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        const nodeById = {};
        const l = rows.length;
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        const uniqIDs = rows.reduce((arr, item) => {
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }, []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            let parent = 0;
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        let resolvedRows = [];
        nodeById[0].flatten(function () {
            resolvedRows = [...resolvedRows, this.row];
        }, true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}

var ColumnMode;
(function (ColumnMode) {
    ColumnMode["standard"] = "standard";
    ColumnMode["flex"] = "flex";
    ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));

var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));

var SortType;
(function (SortType) {
    SortType["single"] = "single";
    SortType["multi"] = "multi";
})(SortType || (SortType = {}));

var ContextmenuType;
(function (ContextmenuType) {
    ContextmenuType["header"] = "header";
    ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));

let DataTableColumnHeaderDirective = class DataTableColumnHeaderDirective {
    constructor(template) {
        this.template = template;
    }
};
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) { return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DataTableColumnHeaderDirective, selectors: [["", "ngx-datatable-header-template", ""]] });
DataTableColumnHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

let DataTableColumnCellDirective = class DataTableColumnCellDirective {
    constructor(template) {
        this.template = template;
    }
};
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) { return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DataTableColumnCellDirective, selectors: [["", "ngx-datatable-cell-template", ""]] });
DataTableColumnCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

let DataTableColumnCellTreeToggle = class DataTableColumnCellTreeToggle {
    constructor(template) {
        this.template = template;
    }
};
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) { return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DataTableColumnCellTreeToggle, selectors: [["", "ngx-datatable-tree-toggle", ""]] });
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

let DataTableColumnDirective = class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
};
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService)); };
DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DataTableColumnDirective, selectors: [["ngx-datatable-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    } }, inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "prop", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "frozenLeft", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "frozenRight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "flexGrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "resizeable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "comparator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "pipe", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "sortable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "canAutoResize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "minWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "maxWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "checkboxable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "headerClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "cellClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "isTreeColumn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "treeLevelIndent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "summaryFunc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableColumnDirective.prototype, "summaryTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cellTemplate')
], DataTableColumnDirective.prototype, "_cellTemplateInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], DataTableColumnDirective.prototype, "_cellTemplateQuery", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('headerTemplate')
], DataTableColumnDirective.prototype, "_headerTemplateInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], DataTableColumnDirective.prototype, "_headerTemplateQuery", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('treeToggleTemplate')
], DataTableColumnDirective.prototype, "_treeToggleTemplateInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], DataTableColumnDirective.prototype, "_treeToggleTemplateQuery", void 0);

let DatatableRowDetailTemplateDirective = class DatatableRowDetailTemplateDirective {
    constructor(template) {
        this.template = template;
    }
};
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) { return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableRowDetailTemplateDirective, selectors: [["", "ngx-datatable-row-detail-template", ""]] });
DatatableRowDetailTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];

let DatatableRowDetailDirective = class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
};
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')
], DatatableRowDetailDirective.prototype, "_templateInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
], DatatableRowDetailDirective.prototype, "_templateQuery", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableRowDetailDirective.prototype, "toggle", void 0);

let DatatableFooterDirective = class DatatableFooterDirective {
    get template() {
        return this._templateInput || this._templateQuery;
    }
};
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) { return new (t || DatatableFooterDirective)(); };
DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatatableFooterDirective, selectors: [["ngx-datatable-footer"]], contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { footerHeight: "footerHeight", totalMessage: "totalMessage", selectedMessage: "selectedMessage", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", _templateInput: ["template", "_templateInput"] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "footerHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "totalMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "selectedMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "pagerLeftArrowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "pagerRightArrowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "pagerPreviousIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableFooterDirective.prototype, "pagerNextIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template')
], DatatableFooterDirective.prototype, "_templateInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] })
], DatatableFooterDirective.prototype, "_templateQuery", void 0);

/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            const has = prop && c[prop];
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
    let totalWidth = 0;
    for (const column of columns) {
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
function columnsByPinArr(val) {
    const colsByPinArr = [];
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        const isFn = typeof rowHeight === 'function';
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            const row = rows[i];
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            const expanded = rowExpansions.has(row);
            if (row && expanded) {
                if (isDetailFn) {
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        let pos = -1;
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}

const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
const ɵ0 = function () {
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (ɵ0)();
function getVendorPrefixedName(property) {
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}

let DataTableBodyComponent = class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        this._rows = val;
        this.recalcLayout();
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        this._offset = val;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
            this.recalcLayout();
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
};
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) { return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableBodyComponent, selectors: [["datatable-body"]], viewQuery: function DataTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ScrollerComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    } }, hostAttrs: [1, "datatable-body"], hostVars: 4, hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    } }, inputs: { selected: "selected", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight", offsetX: "offsetX", loadingIndicator: "loadingIndicator", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", externalPaging: "externalPaging", rowHeight: "rowHeight", emptyMessage: "emptyMessage", selectionType: "selectionType", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, decls: 5, vars: 9, consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]], template: function DataTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) { return ctx.select.emit($event); })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) { return ctx.activate.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableSelectionComponent,
        ProgressBarComponent,
        ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], DataTableSummaryRowComponent,
        DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyRowComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "scrollbarV", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "scrollbarH", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "externalPaging", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "rowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "offsetX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "emptyMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "selectionType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "selected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "rowIdentity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "rowDetail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "groupHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "selectCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "displayCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "trackByProp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "rowClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "groupedRows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "groupExpansionDefault", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "innerWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "groupRowsBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "virtualization", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "summaryRow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "summaryPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "summaryHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "pageSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "rows", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "columns", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "offset", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyComponent.prototype, "rowCount", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')
], DataTableBodyComponent.prototype, "bodyWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')
], DataTableBodyComponent.prototype, "bodyHeight", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "scroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "page", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "activate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "select", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "detailToggle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyComponent.prototype, "treeAction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ScrollerComponent)
], DataTableBodyComponent.prototype, "scroller", void 0);

let DataTableHeaderComponent = class DataTableHeaderComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(() => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
};
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableHeaderComponent, selectors: [["datatable-header"]], hostAttrs: [1, "datatable-header"], hostVars: 4, hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    } }, inputs: { innerWidth: "innerWidth", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX", sorts: "sorts", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", select: "select", columnContextmenu: "columnContextmenu" }, decls: 2, vars: 4, consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) { return ctx.onColumnReordered($event); })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) { return ctx.onTargetChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableHeaderCellComponent,
        ResizeableDirective,
        LongPressDirective,
        DraggableDirective]; }, encapsulation: 2, changeDetection: 0 });
DataTableHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "dealsWithGroup", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "targetMarkerTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "innerWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "sorts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "sortType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "selectionType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "reorderable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "headerHeight", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "columns", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderComponent.prototype, "offsetX", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderComponent.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderComponent.prototype, "reorder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderComponent.prototype, "resize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderComponent.prototype, "select", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderComponent.prototype, "columnContextmenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width')
], DataTableHeaderComponent.prototype, "headerWidth", null);

/**
 * Throttle a function
 */
function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = columnsTotalWidth(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
        return c.canAutoResize !== false;
    });
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}

var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));

/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}

let DatatableComponent = class DatatableComponent {
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (x) => {
            if (this._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
            }
            else {
                return x;
            }
        };
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     */
    set offset(val) {
        this._offset = val;
    }
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     */
    get isFixedHeader() {
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     */
    get allRowsSelected() {
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            const indexes = this.bodyComponent.indexes;
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(() => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        });
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     */
    translateColumns(val) {
        if (val) {
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        const map = new Map();
        let i = 0;
        originalArray.forEach((item) => {
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        const addGroup = (key, value) => {
            return { key, value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, x => addGroup(x[0], x[1]));
    }
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
    }
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    recalculateDims() {
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            const size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        let idx;
        const cols = this._internalColumns.map((c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     */
    onColumnReorder({ column, newValue, prevValue }) {
        const cols = this._internalColumns.map(c => {
            return Object.assign({}, c);
        });
        if (this.swapColumns) {
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     */
    onHeaderSelect(event) {
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            const first = this.bodyComponent.indexes.first;
            const last = this.bodyComponent.indexes.last;
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     */
    onTreeAction(event) {
        const row = event.row;
        // TODO: For duplicated items this will not work
        const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
        this.treeAction.emit({ row, rowIndex });
    }
    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        }));
    }
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
};
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('configuration', 8)); };
DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["ngx-datatable"]], contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    } }, viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableBodyComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableHeaderComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, hostAttrs: [1, "ngx-datatable"], hostVars: 22, hostBindings: function DatatableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    } }, inputs: { selected: "selected", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", rowHeight: "rowHeight", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", reorderable: "reorderable", swapColumns: "swapColumns", sortType: "sortType", sorts: "sorts", cssClasses: "cssClasses", messages: "messages", groupExpansionDefault: "groupExpansionDefault", selectAllRowsOnPage: "selectAllRowsOnPage", virtualization: "virtualization", summaryRow: "summaryRow", summaryHeight: "summaryHeight", summaryPosition: "summaryPosition", rowIdentity: "rowIdentity", rows: "rows", groupedRows: "groupedRows", groupRowsBy: "groupRowsBy", columns: "columns", limit: "limit", count: "count", offset: "offset", targetMarkerTemplate: "targetMarkerTemplate", selectionType: "selectionType", rowClass: "rowClass", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", treeFromRelation: "treeFromRelation", treeToRelation: "treeToRelation" }, outputs: { scroll: "scroll", activate: "activate", select: "select", sort: "sort", page: "page", reorder: "reorder", resize: "resize", tableContextmenu: "tableContextmenu", treeAction: "treeAction" }, decls: 5, vars: 34, consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() { return ctx.recalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 16, "datatable-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "datatable-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) { return ctx.onBodyPage($event); })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) { return ctx.activate.emit($event); })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) { return ctx.onRowContextmenu($event); })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) { return ctx.onBodySelect($event); })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) { return ctx.onBodyScroll($event); })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    } }, directives: function () { return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyComponent,
        DataTableHeaderComponent,
        DataTableFooterComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]]; }, styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['configuration',] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "targetMarkerTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "rows", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "groupRowsBy", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "groupedRows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "columns", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "selected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "scrollbarV", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "scrollbarH", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "rowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "columnMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "headerHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "footerHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "externalPaging", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "externalSorting", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "limit", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "count", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "offset", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "loadingIndicator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "selectionType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "reorderable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "swapColumns", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "sortType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "sorts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "cssClasses", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "messages", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "rowClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "selectCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "displayCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "groupExpansionDefault", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "trackByProp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "selectAllRowsOnPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "virtualization", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "treeFromRelation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "treeToRelation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "summaryRow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "summaryHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "summaryPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "scroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "activate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "select", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "page", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "reorder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "resize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "tableContextmenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatatableComponent.prototype, "treeAction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed-header')
], DatatableComponent.prototype, "isFixedHeader", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed-row')
], DatatableComponent.prototype, "isFixedRow", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.scroll-vertical')
], DatatableComponent.prototype, "isVertScroll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.virtualized')
], DatatableComponent.prototype, "isVirtualized", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.scroll-horz')
], DatatableComponent.prototype, "isHorScroll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.selectable')
], DatatableComponent.prototype, "isSelectable", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.checkbox-selection')
], DatatableComponent.prototype, "isCheckboxSelection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.cell-selection')
], DatatableComponent.prototype, "isCellSelection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.single-selection')
], DatatableComponent.prototype, "isSingleSelection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.multi-selection')
], DatatableComponent.prototype, "isMultiSelection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.multi-click-selection')
], DatatableComponent.prototype, "isMultiClickSelection", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(DataTableColumnDirective)
], DatatableComponent.prototype, "columnTemplates", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableRowDetailDirective)
], DatatableComponent.prototype, "rowDetail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableGroupHeaderDirective)
], DatatableComponent.prototype, "groupHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(DatatableFooterDirective)
], DatatableComponent.prototype, "footer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DataTableBodyComponent)
], DatatableComponent.prototype, "bodyComponent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DataTableHeaderComponent)
], DatatableComponent.prototype, "headerComponent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatatableComponent.prototype, "rowIdentity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    throttleable(5)
], DatatableComponent.prototype, "onWindowResize", null);
DatatableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('configuration'))
], DatatableComponent);

let DataTableHeaderCellComponent = class DataTableHeaderCellComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find((s) => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    calcSortClass(sortDir) {
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn`;
        }
    }
};
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) { return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableHeaderCellComponent, selectors: [["datatable-header-cell"]], hostAttrs: [1, "datatable-header-cell"], hostVars: 11, hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
    } }, inputs: { allRowsSelected: "allRowsSelected", column: "column", sorts: "sorts", sortType: "sortType", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", isTarget: "isTarget", targetMarkerTemplate: "targetMarkerTemplate", targetMarkerContext: "targetMarkerContext", selectionType: "selectionType", headerHeight: "headerHeight" }, outputs: { sort: "sort", select: "select", columnContextmenu: "columnContextmenu" }, decls: 6, vars: 6, consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]], template: function DataTableHeaderCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() { return ctx.onSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "sortType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "isTarget", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "targetMarkerTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "targetMarkerContext", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "allRowsSelected", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "column", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableHeaderCellComponent.prototype, "sorts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderCellComponent.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderCellComponent.prototype, "select", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableHeaderCellComponent.prototype, "columnContextmenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.title')
], DataTableHeaderCellComponent.prototype, "name", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px')
], DataTableHeaderCellComponent.prototype, "minWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth.px')
], DataTableHeaderCellComponent.prototype, "maxWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')
], DataTableHeaderCellComponent.prototype, "width", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])
], DataTableHeaderCellComponent.prototype, "onContextmenu", null);

let DataTableFooterComponent = class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
};
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) { return new (t || DataTableFooterComponent)(); };
DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableFooterComponent, selectors: [["datatable-footer"]], hostAttrs: [1, "datatable-footer"], inputs: { selectedCount: "selectedCount", footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, decls: 4, vars: 8, consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]], template: function DataTableFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], DataTablePagerComponent]; }, encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "footerHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "rowCount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "pageSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "totalMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "footerTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "selectedCount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableFooterComponent.prototype, "selectedMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableFooterComponent.prototype, "page", void 0);

let DataTablePagerComponent = class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        this.selectPage(this.page - 1);
    }
    nextPage() {
        this.selectPage(this.page + 1);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        const pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        const maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
};
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) { return new (t || DataTablePagerComponent)(); };
DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTablePagerComponent, selectors: [["datatable-pager"]], hostAttrs: [1, "datatable-pager"], inputs: { size: "size", count: "count", page: "page", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon" }, outputs: { change: "change" }, decls: 14, vars: 21, consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]], template: function DataTablePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() { return ctx.selectPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() { return ctx.selectPage(ctx.totalPages); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerPreviousIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerNextIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "size", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "count", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTablePagerComponent.prototype, "page", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTablePagerComponent.prototype, "change", void 0);

let ProgressBarComponent = class ProgressBarComponent {
};
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["datatable-progress"]], decls: 3, vars: 0, consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });

var Keys;
(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));

let DataTableBodyRowComponent = class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        if (this._columns) {
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    get cssClass() {
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    recalculateColumns(val = this.columns) {
        this._columns = val;
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
};
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) { return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableBodyRowComponent, selectors: [["datatable-body-row"]], hostVars: 6, hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
    } }, inputs: { treeStatus: "treeStatus", columns: "columns", innerWidth: "innerWidth", offsetX: "offsetX", expanded: "expanded", rowClass: "rowClass", row: "row", group: "group", isSelected: "isSelected", rowIndex: "rowIndex", displayCheck: "displayCheck", rowHeight: "rowHeight" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 1, vars: 2, consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]], template: function DataTableBodyRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyCellComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "columns", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "innerWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "expanded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "rowClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "row", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "group", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "isSelected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "rowIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "displayCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "treeStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "offsetX", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], DataTableBodyRowComponent.prototype, "cssClass", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height.px'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')
], DataTableBodyRowComponent.prototype, "columnsTotalWidths", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyRowComponent.prototype, "activate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyRowComponent.prototype, "treeAction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], DataTableBodyRowComponent.prototype, "onKeyDown", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter', ['$event'])
], DataTableBodyRowComponent.prototype, "onMouseenter", null);
DataTableBodyRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], DataTableBodyRowComponent);

let DataTableRowWrapperComponent = class DataTableRowWrapperComponent {
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this._expanded = false;
        this.rowDiffer = differs.find({}).create();
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    getGroupHeaderStyle() {
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
};
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) { return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"])); };
DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableRowWrapperComponent, selectors: [["datatable-row-wrapper"]], hostAttrs: [1, "datatable-row-wrapper"], hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } }, inputs: { rowIndex: "rowIndex", expanded: "expanded", innerWidth: "innerWidth", rowDetail: "rowDetail", groupHeader: "groupHeader", offsetX: "offsetX", detailRowHeight: "detailRowHeight", row: "row", groupedRows: "groupedRows" }, outputs: { rowContextmenu: "rowContextmenu" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]], template: function DataTableRowWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "innerWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "rowDetail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "groupHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "offsetX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "row", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "groupedRows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "rowIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableRowWrapperComponent.prototype, "expanded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('contextmenu', ['$event'])
], DataTableRowWrapperComponent.prototype, "onContextmenu", null);

let DataTableBodyCellComponent = class DataTableBodyCellComponent {
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => {
            return s.prop === this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
};
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) { return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableBodyCellComponent, selectors: [["datatable-body-cell"]], viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    } }, hostVars: 10, hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    } }, inputs: { group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus", displayCheck: "displayCheck" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 5, vars: 6, consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]], template: function DataTableBodyCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableBodyCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "displayCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "group", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "rowHeight", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "isSelected", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "expanded", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "rowIndex", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "column", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "row", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "sorts", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableBodyCellComponent.prototype, "treeStatus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyCellComponent.prototype, "activate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableBodyCellComponent.prototype, "treeAction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true })
], DataTableBodyCellComponent.prototype, "cellTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px')
], DataTableBodyCellComponent.prototype, "width", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.minWidth.px')
], DataTableBodyCellComponent.prototype, "minWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.maxWidth.px')
], DataTableBodyCellComponent.prototype, "maxWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height')
], DataTableBodyCellComponent.prototype, "height", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')
], DataTableBodyCellComponent.prototype, "onFocus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')
], DataTableBodyCellComponent.prototype, "onBlur", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])
], DataTableBodyCellComponent.prototype, "onClick", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dblclick', ['$event'])
], DataTableBodyCellComponent.prototype, "onDblClick", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], DataTableBodyCellComponent.prototype, "onKeyDown", null);

function selectRows(selected, row, comparefn) {
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const greater = i >= prevIndex && i <= index;
        const lesser = i <= prevIndex && i >= index;
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

let DataTableSelectionComponent = class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const multi = this.selectionType === SelectionType.multi;
        const multiClick = this.selectionType === SelectionType.multiClick;
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
};
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSelectionComponent.prototype, "rows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSelectionComponent.prototype, "selected", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSelectionComponent.prototype, "selectionType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSelectionComponent.prototype, "selectCheck", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableSelectionComponent.prototype, "activate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DataTableSelectionComponent.prototype, "select", void 0);

function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
let DataTableSummaryRowComponent = class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
};
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyRowComponent], encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSummaryRowComponent.prototype, "rows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSummaryRowComponent.prototype, "columns", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSummaryRowComponent.prototype, "rowHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSummaryRowComponent.prototype, "offsetX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DataTableSummaryRowComponent.prototype, "innerWidth", void 0);

var NgxDatatableModule_1;
let NgxDatatableModule = NgxDatatableModule_1 = class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule_1,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
};
NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxDatatableModule });
NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxDatatableModule_Factory(t) { return new (t || NgxDatatableModule)(); }, providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollbarHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DimensionsHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ColumnChangesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ngx-datatable-footer-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisibilityDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[visibilityObserver]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.visible']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[draggable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { dragX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEventTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dragModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResizeableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { resizeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mousedown', ['$event']]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[orderable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], targetChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], draggables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [DraggableDirective, { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LongPressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[long-press]' }]
    }], function () { return []; }, { pressEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longPressStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], longPressing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], longPressEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.press']
        }], isLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.longpress']
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mousedown', ['$event']]
        }], pressModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-scroller',
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ngx-datatable-group-header-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'ngx-datatable-group-header' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ngx-datatable-header-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ngx-datatable-cell-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ngx-datatable-tree-toggle]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'ngx-datatable-column' }]
    }], function () { return [{ type: ColumnChangesService }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], frozenLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], frozenRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canAutoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], checkboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerCheckboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cellClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isTreeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], treeLevelIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _cellTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cellTemplate']
        }], _cellTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true }]
        }], _headerTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['headerTemplate']
        }], _headerTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true }]
        }], _treeToggleTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['treeToggleTemplate']
        }], _treeToggleTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ngx-datatable-row-detail-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'ngx-datatable-row-detail' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'ngx-datatable-footer' }]
    }], null, { footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-body',
                template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'datatable-body'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], detailToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bodyWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width']
        }], bodyHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [ScrollerComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width']
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dealsWithGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-datatable',
                template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }]
    }], function () { return [{ type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: DimensionsHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }, { type: ColumnChangesService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: ['configuration']
            }] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columnMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], externalSorting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swapColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectAllRowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tableContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isFixedHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.fixed-header']
        }], isFixedRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.fixed-row']
        }], isVertScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.scroll-vertical']
        }], isVirtualized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.virtualized']
        }], isHorScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.scroll-horz']
        }], isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.selectable']
        }], isCheckboxSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.checkbox-selection']
        }], isCellSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.cell-selection']
        }], isSingleSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.single-selection']
        }], isMultiSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.multi-selection']
        }], isMultiClickSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.multi-click-selection']
        }], columnTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [DataTableColumnDirective]
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], treeFromRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], treeToRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableRowDetailDirective]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableGroupHeaderDirective]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [DatatableFooterDirective]
        }], bodyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [DataTableBodyComponent]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [DataTableHeaderComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.title']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.maxWidth.px']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], targetMarkerContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { selectedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-progress',
                template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-body-row',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }, { type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], columnsTotalWidths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], onMouseenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mouseenter', ['$event']]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] }]; }, { rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], detailRowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-body-cell',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.width.px']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.maxWidth.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['style.height']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus']
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }], onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dblclick', ['$event']]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-selection',
                template: ` <ng-content></ng-content> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }]
    }], function () { return []; }, { rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxDatatableModule, { declarations: function () { return [DataTableFooterTemplateDirective,
        VisibilityDirective,
        DraggableDirective,
        ResizeableDirective,
        OrderableDirective,
        LongPressDirective,
        ScrollerComponent,
        DatatableComponent,
        DataTableColumnDirective,
        DataTableHeaderComponent,
        DataTableHeaderCellComponent,
        DataTableBodyComponent,
        DataTableFooterComponent,
        DataTablePagerComponent,
        ProgressBarComponent,
        DataTableBodyRowComponent,
        DataTableRowWrapperComponent,
        DatatableRowDetailDirective,
        DatatableGroupHeaderDirective,
        DatatableRowDetailTemplateDirective,
        DataTableBodyCellComponent,
        DataTableSelectionComponent,
        DataTableColumnHeaderDirective,
        DataTableColumnCellDirective,
        DataTableColumnCellTreeToggle,
        DatatableFooterDirective,
        DatatableGroupHeaderTemplateDirective,
        DataTableSummaryRowComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [DatatableComponent,
        DatatableRowDetailDirective,
        DatatableGroupHeaderDirective,
        DatatableRowDetailTemplateDirective,
        DataTableColumnDirective,
        DataTableColumnHeaderDirective,
        DataTableColumnCellDirective,
        DataTableColumnCellTreeToggle,
        DataTableFooterTemplateDirective,
        DatatableFooterDirective,
        DataTablePagerComponent,
        DatatableGroupHeaderTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            }]
    }], null, null); })();

var ClickType;
(function (ClickType) {
    ClickType["single"] = "single";
    ClickType["double"] = "double";
})(ClickType || (ClickType = {}));

if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
    const elements = [];
    const previousPointerEvents = [];
    let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
    let i;
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=swimlane-ngx-datatable.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \*********************************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectSlide(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.active === true);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
} }
function CarouselComponent_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.previousSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
} }
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextSlide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
CarouselConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselConfig, factory: CarouselConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CarouselComponent.propDecorators = {
    noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pauseOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsByChunk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemsPerSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    singleSlideOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slideRangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }]
    }], function () { return [{ type: CarouselConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { indicatorsByChunk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsPerSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], singleSlideOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlideChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], slideRangeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startFromIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], noPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pauseOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent)); };
SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
    } }, inputs: { active: "active" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.order',] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-animation',] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
            }]
    }], function () { return [{ type: CarouselComponent }]; }, { itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
        }], addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.item']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-item']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-animation']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, providers: [CarouselConfig], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: function () { return [SlideComponent,
        CarouselComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [SlideComponent,
        CarouselComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-carousel.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \*********************************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */


const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
const expandAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }))
];
/** @type {?} */
const collapseAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _builder
     */
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when expansion is started
         */
        this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.isExpanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        }));
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        }));
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => callback());
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => this._player.onDone(callback));
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"])); };
CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CollapseDirective, selectors: [["", "collapse", ""]], hostVars: 10, hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    } }, inputs: { isAnimated: "isAnimated", display: "display", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }
];
CollapseDirective.propDecorators = {
    collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    collapses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expands: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-expanded',] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-hidden',] }],
    isCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapse',] }],
    isCollapsing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapsing',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    collapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }]; }, { collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], collapses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], expands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.in']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.show']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-expanded']
        }], isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-hidden']
        }], isCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapse']
        }], isCollapsing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapsing']
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CollapseModule });
CollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CollapseModule_Factory(t) { return new (t || CollapseModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CollapseModule, { declarations: [CollapseDirective], exports: [CollapseDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-collapse.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js ***!
  \***************************************************************************************/
/*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["*"];
class BsModalRef {
    constructor() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
}
BsModalRef.ɵfac = function BsModalRef_Factory(t) { return new (t || BsModalRef)(); };
BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsModalRef, factory: BsModalRef.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalBackdropOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.animate = true;
        Object.assign(this, options);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalOptions {
}
ModalOptions.ɵfac = function ModalOptions_Factory(t) { return new (t || ModalOptions)(); };
ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalOptions, factory: ModalOptions.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
if (false) {}
/** @type {?} */
const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
/** @type {?} */
const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
const SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }), this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop(event) {
        /** @type {?} */
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = false;
            if (document &&
                document.body &&
                this.bsModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            this.bsModalService.hide(this.level);
            this.isModalHiding = false;
        }), this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
}
ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalContainerComponent, selectors: [["modal-container"]], hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"], hostVars: 3, hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) { return ctx.onClickStarted($event); })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) { return ctx.onClickStop($event); })("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) { return ctx.onEsc($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
    } }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["role", "document"], [1, "modal-content"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
    } }, encapsulation: 2 });
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ModalContainerComponent.propDecorators = {
    onClickStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    onClickStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modal-container',
                template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    class: 'modal',
                    role: 'dialog',
                    tabindex: '-1',
                    '[attr.aria-modal]': 'true',
                    '[attr.aria-labelledby]': 'config.ariaLabelledBy',
                    '[attr.aria-describedby]': 'config.ariaDescribedby'
                }
            }]
    }], function () { return [{ type: ModalOptions }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.esc', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
class ModalBackdropComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._isAnimated = value;
        // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
                this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) { return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBackdropComponent, selectors: [["bs-modal-backdrop"]], hostAttrs: [1, "modal-backdrop"], decls: 0, vars: 0, template: function ModalBackdropComponent_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bs-modal-backdrop',
                template: ' ',
                host: { class: CLASS_NAME.BACKDROP }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TRANSITION_DURATION = 300;
/** @type {?} */
const BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
class ModalDirective {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    constructor(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this.clickStartedInContent = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    /**
     * allows to set modal configuration via element property
     * @param {?} conf
     * @return {?}
     */
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop(event) {
        /** @type {?} */
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._config = this._config || this.getConfig();
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._config.show) {
                this.show();
            }
        }), 0);
    }
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */
    show() {
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            this.showElement();
        }));
    }
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout((/**
             * @return {?}
             */
            () => this.hideModal()), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    getConfig(config) {
        return Object.assign({}, modalConfigDefaults, config);
    }
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    showElement() {
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        /** @type {?} */
        const transitionComplete = (/**
         * @return {?}
         */
        () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
        });
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            if (!this.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }
                this.resetScrollbar();
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
        }));
    }
    // todo: original show was calling a callback when done, but we can use
    // promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    showBackdrop(callback) {
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            const callbackRemove = (/**
             * @return {?}
             */
            () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            });
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    removeBackdrop() {
        this._backdrop.hide();
    }
    /**
     * Events tricks
     * @protected
     * @return {?}
     */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    focusOtherModal() {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        /** @type {?} */
        const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @protected
     * @return {?}
     */
    setScrollbar() {
        if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    resetScrollbar() {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.ɵfac = function ModalDirective_Factory(t) { return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"])); };
ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ModalDirective, selectors: [["", "bsModal", ""]], hostBindings: function ModalDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) { return ctx.onClickStarted($event); })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) { return ctx.onClickStop($event); })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) { return ctx.onEsc($event); });
    } }, inputs: { config: "config" }, outputs: { onShow: "onShow", onShown: "onShown", onHide: "onHide", onHidden: "onHidden" }, exportAs: ["bs-modal"] });
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
];
ModalDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClickStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    onClickStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bsModal]',
                exportAs: 'bs-modal'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }]; }, { onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.esc', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalService {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     */
    constructor(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    show(content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._hideModal(level);
            this.removeLoaders(level);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        () => this.removeBackdrop()), duration);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers) {
            for (const provider of this.config.providers) {
                modalLoader.provide(provider);
            }
        }
        /** @type {?} */
        const bsModalRef = new BsModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const duration = this.config.animated ? TRANSITION_DURATIONS.MODAL : 0;
            setTimeout((/**
             * @return {?}
             */
            () => modalContainerRef.instance.hide()), duration);
        });
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        });
        return bsModalRef;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    _hideModal(level) {
        /** @type {?} */
        const modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        /** @type {?} */
        const loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        (loader, i) => {
            loader.instance.level = i + 1;
        }));
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe((/**
         * @return {?}
         */
        () => {
            to.emit(this.lastDismissReason);
        }));
    }
}
BsModalService.ɵfac = function BsModalService_Factory(t) { return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"])); };
BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsModalService, factory: BsModalService.ɵfac });
/** @nocollapse */
BsModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [ModalBackdropComponent,
        ModalDirective,
        ModalContainerComponent], exports: [ModalBackdropComponent,
        ModalDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-modal.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
  \*************************************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */



const _c0 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
const _c1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
const _c2 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectPage(1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
} }
const _c3 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const pg_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectPage(pg_r19.number, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
} }
function PaginationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const page_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
} }
function PaginationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
} }
function PaginationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
} }
function PaginationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
} }
function PaginationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
} }
class PaginationConfig {
    constructor() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
PaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginationConfig, factory: PaginationConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PagerComponent)),
    multi: true
};
class PagerComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["pager"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PagerComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PageChangedEvent() { }
if (false) {}
/** @type {?} */
const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PaginationComponent)),
    multi: true
};
class PaginationComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PaginationComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customPageTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customNextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customPreviousTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customFirstTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customLastTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    }
}
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: function () { return [PagerComponent,
        PaginationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [PagerComponent,
        PaginationComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-pagination.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js ***!
  \*******************************************************************************************/
/*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */





function PopoverContainerComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = ["*"];
class PopoverConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
}
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
PopoverConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PopoverConfig, factory: PopoverConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
    }
}
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig)); };
PopoverContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 6, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    } }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]], template: function PopoverContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'popover-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }]
    }], function () { return [{ type: PopoverConfig }]; }, { placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} _positionService
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', (/**
             * @return {?}
             */
            function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            }));
        }
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        /** @type {?} */
        const showPopover = (/**
         * @return {?}
         */
        () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._popover
                .attach(PopoverContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.popover,
                context: this.popoverContext,
                placement: this.placement,
                title: this.popoverTitle,
                containerClass: this.containerClass
            });
            if (!this.adaptivePosition) {
                this._positionService.calcPosition();
                this._positionService.deletePositionElement(this._popover._componentRef.location);
            }
            this.isOpen = true;
        });
        /** @type {?} */
        const cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        () => {
            if (this._popoverCancelShowFn) {
                this._popoverCancelShowFn();
            }
        });
        if (this.delay) {
            /** @type {?} */
            const _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe((/**
             * @return {?}
             */
            () => {
                showPopover();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["parseTriggers"])(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                (trigger) => {
                    this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    () => {
                        _timer.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showPopover();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"])); };
PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PopoverDirective, selectors: [["", "popover", ""]], inputs: { outsideClick: "outsideClick", containerClass: "containerClass", isOpen: "isOpen", adaptivePosition: "adaptivePosition", popover: "popover", popoverContext: "popoverContext", popoverTitle: "popoverTitle", placement: "placement", triggers: "triggers", container: "container", delay: "delay" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-popover"] });
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: PopoverConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }
];
PopoverDirective.propDecorators = {
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popoverContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popoverTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[popover]', exportAs: 'bs-popover' }]
    }], function () { return [{ type: PopoverConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"] }, { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }]; }, { outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopoverModule });
PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: function () { return [PopoverDirective,
        PopoverContainerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [PopoverDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-popover.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js ***!
  \***************************************************************************************************/
/*! exports provided: BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ProgressbarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ProgressbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function ProgressbarComponent_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("value", ctx_r0._value);
} }
function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", item_r3.type)("value", item_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 3, "bar", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1._value);
} }
const _c0 = ["*"];
class ProgressbarConfig {
    constructor() {
        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
}
ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
ProgressbarConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressbarConfig, factory: ProgressbarConfig.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressbarComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    /**
     * if `true` changing value of progress bar will be animated
     * @param {?} value
     * @return {?}
     */
    set animate(value) {
        this._animate = value;
        this.bars.forEach((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            b.animate = value;
        }));
    }
    /**
     * If `true`, striped classes are applied
     * @param {?} value
     * @return {?}
     */
    set striped(value) {
        this._striped = value;
        this.bars.forEach((/**
         * @param {?} b
         * @return {?}
         */
        (b) => {
            b.striped = value;
        }));
    }
    /**
     * current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        this._value = value;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((/**
         * @param {?} bar
         * @return {?}
         */
        (bar) => {
            bar.recalculatePercentage();
        }));
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress", ctx.addClass);
    } }, inputs: { animate: "animate", striped: "striped", value: "value", max: "max", type: "type" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "type", "value", 4, "ngIf"], [3, "ngIf"], [3, "type", "value"], [3, "type", "value", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressbarComponent_bar_0_Template, 2, 2, "bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStacked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStacked);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], BarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]]; }, styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"] });
/** @nocollapse */
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfig }
];
ProgressbarComponent.propDecorators = {
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    striped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.max',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.progress',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'progressbar',
                template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\n  <ng-content></ng-content>\n</bar>\n<ng-template [ngIf]=\"isStacked\">\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\n</ng-template>\n",
                styles: [`
    :host {
      width: 100%;
      display: flex;
    }
  `]
            }]
    }], function () { return [{ type: ProgressbarConfig }]; }, { addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.progress']
        }], animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], striped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.max']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: number pipe
// todo: use query from progress?
class BarComponent {
    /**
     * @param {?} el
     * @param {?} progress
     * @param {?} renderer
     */
    constructor(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set type(v) {
        this._type = v;
        this.applyTypeClasses();
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        /** @type {?} */
        const totalPercentage = this.progress.bars
            .reduce((/**
         * @param {?} total
         * @param {?} bar
         * @return {?}
         */
        function (total, bar) {
            return total + bar.percent;
        }), 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
    /**
     * @private
     * @return {?}
     */
    applyTypeClasses() {
        if (this._prevType) {
            /** @type {?} */
            const barTypeClass = `progress-bar-${this._prevType}`;
            /** @type {?} */
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
        }
        if (this._type) {
            /** @type {?} */
            const barTypeClass = `progress-bar-${this._type}`;
            /** @type {?} */
            const bgClass = `bg-${this._type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this._type;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ProgressbarComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100", "%")("width", ctx.setBarWidth, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
    } }, inputs: { type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: ProgressbarComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
BarComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    setBarWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.%',] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.progress-bar',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: ProgressbarComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.progress-bar']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setBarWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.%']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressbarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    }
}
ProgressbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgressbarModule });
ProgressbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressbarModule, { declarations: function () { return [BarComponent,
        ProgressbarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [BarComponent,
        ProgressbarComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-progressbar.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
  \*******************************************************************************************/
/*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */




const _c0 = ["*"];
class TooltipConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
}
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
TooltipConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TooltipConfig, factory: TooltipConfig.ɵfac });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) { return new (t || TooltipContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig)); };
TooltipContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipContainerComponent, selectors: [["bs-tooltip-container"]], hostAttrs: ["role", "tooltip"], hostVars: 7, hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
    } }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]], template: function TooltipContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let id = 0;
class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _positionService
     */
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */
    set htmlContent(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */
    set _placement(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */
    set _isOpen(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    /**
     * @return {?}
     */
    get _isOpen() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */
    set _enable(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    get _enable() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */
    set _appendToBody(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    get _appendToBody() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */
    set _popupClass(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */
    set _tooltipContext(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set _tooltipPopupDelay(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */
    get _tooltipTrigger() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _tooltipTrigger(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!value) {
                this._tooltip.hide();
            }
        }));
        this.onShown.subscribe((/**
         * @return {?}
         */
        () => {
            this.setAriaDescribedBy();
        }));
        this.onHidden.subscribe((/**
         * @return {?}
         */
        () => {
            this.setAriaDescribedBy();
        }));
    }
    /**
     * @return {?}
     */
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : null;
        if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        /** @type {?} */
        const showTooltip = (/**
         * @return {?}
         */
        () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: `tooltip-${this.tooltipId}`
            });
        });
        /** @type {?} */
        const cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        });
        if (this.delay) {
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this._delaySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe((/**
             * @return {?}
             */
            () => {
                showTooltip();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                (trigger) => {
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    () => {
                        this._delaySubscription.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._tooltip.hide();
        }), this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
        this.tooltipChange.unsubscribe();
        if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
        }
        this.onShown.unsubscribe();
        this.onHidden.unsubscribe();
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TooltipConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]], inputs: { containerClass: "containerClass", tooltipAnimation: "tooltipAnimation", tooltipFadeDuration: "tooltipFadeDuration", isOpen: "isOpen", htmlContent: ["tooltipHtml", "htmlContent"], tooltip: "tooltip", _placement: ["tooltipPlacement", "_placement"], placement: "placement", _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], isDisabled: "isDisabled", _appendToBody: ["tooltipAppendToBody", "_appendToBody"], container: "container", _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], delay: "delay", _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"], triggers: "triggers", adaptivePosition: "adaptivePosition" }, outputs: { tooltipChange: "tooltipChange", tooltipStateChanged: "tooltipStateChanged", onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-tooltip"] });
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"] },
    { type: TooltipConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"] }
];
TooltipDirective.propDecorators = {
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltipChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    htmlContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipHtml',] }],
    _placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] }],
    _isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipIsOpen',] }],
    _enable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEnable',] }],
    _appendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] }],
    tooltipAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _popupClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipClass',] }],
    _tooltipContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipContext',] }],
    _tooltipPopupDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPopupDelay',] }],
    tooltipFadeDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _tooltipTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTrigger',] }],
    tooltipStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bs-tooltip-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `]
            }]
    }], function () { return [{ type: TooltipConfig }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"] }, { type: TooltipConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"] }]; }, { tooltipChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipFadeDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tooltipStateChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], htmlContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipHtml']
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPlacement']
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipIsOpen']
        }], _enable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipEnable']
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipAppendToBody']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _popupClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipClass']
        }], _tooltipContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipContext']
        }], _tooltipPopupDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipPopupDelay']
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _tooltipTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltipTrigger']
        }], triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]
        };
    }
}
TooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TooltipModule });
TooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TooltipModule, { declarations: function () { return [TooltipDirective,
        TooltipContainerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]; }, exports: function () { return [TooltipDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-tooltip.js.map

/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GroupService {
    constructor(_http) {
        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/group';
    }
    getGroups() {
        return this._http.get(`${this._apiUrl}s`);
    }
    addGroup(group) {
        return this._http.post(this._apiUrl, group);
    }
}
GroupService.ɵfac = function GroupService_Factory(t) { return new (t || GroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GroupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupService, factory: GroupService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/indicators.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/indicators.service.ts ***!
  \************************************************/
/*! exports provided: IndicatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsService", function() { return IndicatorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class IndicatorsService {
    constructor(_http) {
        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/indicator';
    }
    getIndicators() {
        return this._http.get(`${this._apiUrl}s`);
    }
    getIndicatorsById(id) {
        return this._http.get(`${this._apiUrl}/${id}`);
    }
    deleteIndicator(id) {
        return this._http.delete(`${this._apiUrl}/${id}`);
    }
    addIndicator(indicator) {
        return this._http.post(this._apiUrl, indicator);
    }
    editCriteria(value, id) {
        console.log("value", value);
        console.log("id", id);
        return this._http.put('http://localhost:8000/api/indicator/' + id, value);
    }
    getTrash() {
        return this._http.get(`${this._apiUrl}s/trash`);
    }
    restoreTrash(id) {
        return this._http.get(`${this._apiUrl}/trash/${id}`);
    }
}
IndicatorsService.ɵfac = function IndicatorsService_Factory(t) { return new (t || IndicatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IndicatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndicatorsService, factory: IndicatorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/roles.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class RolesService {
    constructor(_http) {
        this._http = _http;
        this._apiUrl = 'http://localhost:8000/api/role';
    }
    getRoles() {
        return this._http.get(`${this._apiUrl}s`);
    }
    getRoleById(id) {
        return this._http.get(`${this._apiUrl}/${id}`);
    }
    addRole(position) {
        return this._http.post(this._apiUrl, position);
    }
    editRole(position, id) {
        return this._http.put(`${this._apiUrl}/${id}`, position);
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RolesService, factory: RolesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/validators/CustomValidator.ts":
/*!***********************************************!*\
  !*** ./src/app/validators/CustomValidator.ts ***!
  \***********************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
class CustomValidator {
    // Number only validation
    static numeric(control) {
        let val = control.value;
        if (val === null || val === '')
            return null;
        if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/))
            return { 'invalidNumber': true };
        return null;
    }
}


/***/ }),

/***/ "./src/app/views/base/EvaluationCycle/EvaluationCycle.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/base/EvaluationCycle/EvaluationCycle.component.ts ***!
  \*************************************************************************/
/*! exports provided: EvaluationCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationCycleComponent", function() { return EvaluationCycleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validators_CustomValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validators/CustomValidator */ "./src/app/validators/CustomValidator.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _services_EvaluationCycle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/EvaluationCycle.service */ "./src/app/services/EvaluationCycle.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/fire-alert.service */ "./src/app/services/fire-alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function EvaluationCycleComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r10.start, "yyyy-MM-dd"), " ");
} }
function EvaluationCycleComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, row_r11.end, "yyyy-MM-dd"), " ");
} }
function EvaluationCycleComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.is_current, " ");
} }
function EvaluationCycleComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.cycle, " ");
} }
function EvaluationCycleComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationCycleComponent_ng_template_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.row; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx_r15.openEditModal(row_r14, _r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationCycleComponent_ng_template_26_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.delete(row_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", row_r14.is_current != 1 ? true : false);
} }
function EvaluationCycleComponent_ng_template_27_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must enter start date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluationCycleComponent_ng_template_27_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must enter cycle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluationCycleComponent_ng_template_27_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluationCycleComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Evaluation Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EvaluationCycleComponent_ng_template_27_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.save(ctx_r21.newEvaluationCycle.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EvaluationCycleComponent_ng_template_27_small_9_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EvaluationCycleComponent_ng_template_27_small_17_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EvaluationCycleComponent_ng_template_27_p_18_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationCycleComponent_ng_template_27_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r7.newEvaluationCycle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r7.myDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.start.valid && (ctx_r7.start.dirty || ctx_r7.start.touched) && ctx_r7.start.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.cycle.valid && (ctx_r7.cycle.dirty || ctx_r7.cycle.touched) && ctx_r7.cycle.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.cycle.valid && (ctx_r7.cycle.dirty || ctx_r7.cycle.touched) && ctx_r7.cycle.errors.invalidNumber);
} }
function EvaluationCycleComponent_ng_template_29_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must enter start date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluationCycleComponent_ng_template_29_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must enter cycle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluationCycleComponent_ng_template_29_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluationCycleComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add New Evaluation Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EvaluationCycleComponent_ng_template_29_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.edit(ctx_r27.editEvaluationCycle.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EvaluationCycleComponent_ng_template_29_small_9_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cycle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EvaluationCycleComponent_ng_template_29_small_17_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EvaluationCycleComponent_ng_template_29_p_18_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationCycleComponent_ng_template_29_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.closeEditModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.editEvaluationCycle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r9.myDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.startedit.valid && (ctx_r9.startedit.dirty || ctx_r9.startedit.touched) && ctx_r9.startedit.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.cycleedit.valid && (ctx_r9.cycleedit.dirty || ctx_r9.cycleedit.touched) && ctx_r9.cycleedit.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.cycle.valid && (ctx_r9.cycle.dirty || ctx_r9.cycle.touched) && ctx_r9.cycle.errors.invalidNumber);
} }
const _c0 = function () { return { prop: "name", dir: "desc" }; };
const _c1 = function (a0) { return [a0]; };
class EvaluationCycleComponent {
    constructor(evaluationCycleService, modalService, alert, datePipe) {
        this.evaluationCycleService = evaluationCycleService;
        this.modalService = modalService;
        this.alert = alert;
        this.datePipe = datePipe;
        this.title = 'angulardatatables';
        this.dtOptions = {};
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth();
        this.day = this.now.getDay();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
        this.myDate = new Date();
    }
    ngOnInit() {
        this.getEvaluationCycleList();
        this.initForm();
    }
    initForm() {
        this.newEvaluationCycle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.minDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            //Validators.min(moment(new Date()).millisecond()),Validators.max(moment(new Date()).millisecond())]),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            cycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_CustomValidator__WEBPACK_IMPORTED_MODULE_3__["CustomValidator"].numeric])
        });
    }
    initEditForm() {
        let date = this.datePipe.transform(new Date(this.editableObj.start), 'yyyy-MM-dd');
        this.editEvaluationCycle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.id),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](date),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.end),
            cycle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.cycle),
            is_current: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.is_current)
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    save(value) {
        if (this.newEvaluationCycle.valid) {
            this.evaluationCycleService.saveEvaluationCycle(value)
                .subscribe(result => {
                console.log(result);
                this.modalRef.hide();
                if (!result["error_message"]) {
                    this.alert.fireAlert("success", "Data inserted successfully", "");
                    this.getEvaluationCycleList();
                    this.initForm();
                }
                else {
                    this.alert.fireAlert("error", result["error_message"], "");
                    this.getEvaluationCycleList();
                    this.initForm();
                }
            });
        }
        else {
            this.alert.fireAlert("error", "Please Complete all data in form", "");
        }
    }
    edit(value) {
        console.log("value", value);
        console.log("id", this.editableObj.id);
        this.evaluationCycleService.editEvaluationCycle(value, this.editableObj.id)
            .subscribe(result => {
            console.log(result);
            this.modalEditRef.hide();
            if (result) {
                this.alert.fireAlert("success", "Data Updated successfully", "");
                this.getEvaluationCycleList();
                this.initEditForm();
            }
            else {
                this.alert.fireAlert("error", "There is an error when update this data", "");
                this.getEvaluationCycleList();
                this.initEditForm();
            }
        });
    }
    delete(id) {
        this.evaluationCycleService.deleteEvaluationCycle(id)
            .subscribe(result => {
            console.log(result);
            if (result) {
                this.alert.fireAlert("success", "Data deleted successfully", "");
                this.getEvaluationCycleList();
            }
            else {
                this.alert.fireAlert("error", "There is an error when delete this data", "");
                this.getEvaluationCycleList();
            }
        });
    }
    getEvaluationCycleList() {
        this.evaluationCycleService.getEvaluationCycle().subscribe(data => {
            console.log(data);
            this.temp = data;
            this.evaluationCycleList = data;
        });
    }
    closeModal() {
        this.modalRef.hide();
        this.initForm();
    }
    closeEditModal() {
        this.modalEditRef.hide();
        this.initForm();
    }
    openEditModal(selected, template) {
        console.log("testing");
        this.editableObj = selected;
        this.initEditForm();
        this.modalEditRef = this.modalService.show(template);
    }
    updateFilter(event) {
        const val = event.target.value.toString().toLowerCase().trim();
        // filter our data
        const temp = this.temp.filter(function (d) {
            console.log("d", d);
            return (d.cycle.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.is_current.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.start.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.end.toString().toLowerCase().indexOf(val) !== -1)
                || !val;
        });
        // update the rows
        this.evaluationCycleList = temp;
        // Whenever the filter changes, always go back to the first page
        this.myFilterTable.offset = 0;
    }
    get start() { return this.newEvaluationCycle.get('start'); }
    get cycle() { return this.newEvaluationCycle.get('cycle'); }
    get startedit() { return this.editEvaluationCycle.get('start'); }
    get cycleedit() { return this.editEvaluationCycle.get('cycle'); }
}
EvaluationCycleComponent.ɵfac = function EvaluationCycleComponent_Factory(t) { return new (t || EvaluationCycleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_EvaluationCycle_service__WEBPACK_IMPORTED_MODULE_5__["EvaluationCycleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_7__["FireAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"])); };
EvaluationCycleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluationCycleComponent, selectors: [["app-EvaluationCycle"]], viewQuery: function EvaluationCycleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myFilterTable = _t.first);
    } }, decls: 31, vars: 10, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "btn-group", "btn-group-md", "ml-2", 2, "float", "left", "margin-bottom", "5px"], ["type", "text", "placeholder", "Search...", 3, "keyup"], [1, "btn-group", "btn-group-md", "ml-2", 2, "float", "right", "margin-bottom", "5px"], ["type", "button", 1, "btn", "btn-block", "btn-primary", 3, "click"], [1, "table", "table-striped", "table-bordered", "table-sm", "row-border", "hover", "test", "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "sorts", "limit"], ["myFilterTable", ""], ["name", "Start", "prop", "start"], ["ngx-datatable-cell-template", ""], ["name", "End", "prop", "end"], ["name", "Current", "prop", "is_current"], ["name", "Cycle Period", "prop", "cycle"], ["AddScreen", ""], ["EditScreen", ""], [1, "btn-group", "btn-group-md", "ml-2", 2, "margin-top", "-5px !important"], ["type", "button", 1, "btn", "btn-block", "btn-primary", 3, "disabled", "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "text-left", 3, "formGroup", "ngSubmit"], [1, "my-2"], ["id", "date-input", "type", "date", "formControlName", "start", "placeholder", "date", 1, "form-control", 3, "min"], ["class", "danger", "style", "color: red;font-size: 14px;", 4, "ngIf"], [1, "input-group", "flex-nowrap"], ["formControlName", "cycle", 1, "py-2", "w-100", "ui-inputtext", "ui-corner-all", 2, "width", "80%"], [1, "input-group-append"], ["id", "addon-wrapping", 1, "ui-inputtext", "ui-corner-all", "input-group-text"], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer", "border-0"], ["type", "submit", 1, "btn", "btn-primary", "ml-3"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "danger", 2, "color", "red", "font-size", "14px"], [1, "text-danger"]], template: function EvaluationCycleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " evaluation_Cycle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function EvaluationCycleComponent_Template_input_keyup_10_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationCycleComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.openModal(_r6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EvaluationCycleComponent_ng_template_18_Template, 2, 4, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EvaluationCycleComponent_ng_template_20_Template, 2, 4, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EvaluationCycleComponent_ng_template_22_Template, 1, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EvaluationCycleComponent_ng_template_24_Template, 1, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngx-datatable-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EvaluationCycleComponent_ng_template_26_Template, 6, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EvaluationCycleComponent_ng_template_27_Template, 24, 8, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EvaluationCycleComponent_ng_template_29_Template, 24, 8, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.evaluationCycleList)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("sorts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)))("limit", 4);
    } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".test[_ngcontent-%COMP%]   td.dataTables_empty[_ngcontent-%COMP%] {\n    display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYmFzZS9FdmFsdWF0aW9uQ3ljbGUvRXZhbHVhdGlvbkN5Y2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9iYXNlL0V2YWx1YXRpb25DeWNsZS9FdmFsdWF0aW9uQ3ljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0IHRkLmRhdGFUYWJsZXNfZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationCycleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-EvaluationCycle',
                templateUrl: './EvaluationCycle.component.html',
                styleUrls: ['./EvaluationCycle.component.css']
            }]
    }], function () { return [{ type: _services_EvaluationCycle_service__WEBPACK_IMPORTED_MODULE_5__["EvaluationCycleService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }, { type: src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_7__["FireAlertService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }]; }, { myFilterTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/views/base/base-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/base/base-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbars/navbars.component */ "./src/app/views/base/navbars/navbars.component.ts");
/* harmony import */ var _criterias_criterias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criterias/criterias.component */ "./src/app/views/base/criterias/criterias.component.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/views/base/indicators/indicators.component.ts");
/* harmony import */ var _criteria_forms_criteria_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criteria-forms/criteria-forms.component */ "./src/app/views/base/criteria-forms/criteria-forms.component.ts");
/* harmony import */ var _indicator_forms_indicator_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indicator-forms/indicator-forms.component */ "./src/app/views/base/indicator-forms/indicator-forms.component.ts");
/* harmony import */ var _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role-form/role-form.component */ "./src/app/views/base/role-form/role-form.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/views/base/roles/roles.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/views/base/users/users.component.ts");
/* harmony import */ var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-form/users-form.component */ "./src/app/views/base/users-form/users-form.component.ts");
/* harmony import */ var _user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-edit-form/user-edit-form.component */ "./src/app/views/base/user-edit-form/user-edit-form.component.ts");
/* harmony import */ var _EvaluationCycle_EvaluationCycle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EvaluationCycle/EvaluationCycle.component */ "./src/app/views/base/EvaluationCycle/EvaluationCycle.component.ts");
/* harmony import */ var _trashed_criterias_trashed_criterias_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trashed-criterias/trashed-criterias.component */ "./src/app/views/base/trashed-criterias/trashed-criterias.component.ts");
/* harmony import */ var _trash_users_trash_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trash-users/trash-users.component */ "./src/app/views/base/trash-users/trash-users.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/views/base/groups/groups.component.ts");
/* harmony import */ var _edit_position_form_edit_position_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-position-form/edit-position-form.component */ "./src/app/views/base/edit-position-form/edit-position-form.component.ts");



















const routes = [
    {
        path: '',
        data: {
            title: 'Base'
        },
        children: [
            {
                path: '',
                redirectTo: 'criteria'
            },
            {
                path: 'criteria',
                component: _criterias_criterias_component__WEBPACK_IMPORTED_MODULE_3__["CriteriasComponent"],
                data: {
                    title: 'criteria'
                }
            },
            {
                path: 'indicator',
                component: _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_4__["IndicatorsComponent"],
                data: {
                    title: 'indicators'
                }
            },
            {
                path: 'trashed-criterias',
                component: _trashed_criterias_trashed_criterias_component__WEBPACK_IMPORTED_MODULE_13__["TrashedCriteriasComponent"],
                data: {
                    title: 'trashed criterias'
                }
            },
            {
                path: 'trashed-users',
                component: _trash_users_trash_users_component__WEBPACK_IMPORTED_MODULE_14__["TrashUsersComponent"],
                data: {
                    title: 'trashed users'
                }
            },
            {
                path: 'edit_user/:id',
                component: _user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_11__["UserEditFormComponent"],
                data: {
                    title: 'edit_user'
                }
            },
            {
                path: 'Users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                data: {
                    title: 'Users'
                }
            },
            {
                path: 'groups',
                component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_15__["GroupsComponent"],
                data: {
                    title: 'Group'
                }
            },
            {
                path: 'criteria-forms',
                component: _criteria_forms_criteria_forms_component__WEBPACK_IMPORTED_MODULE_5__["CriteriaFormsComponent"],
                data: {
                    title: 'criteria-forms'
                }
            },
            {
                path: 'user-form',
                component: _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_10__["UsersFormComponent"],
                data: {
                    title: 'user-form'
                }
            },
            {
                path: 'position-forms',
                component: _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_7__["RoleFormComponent"],
                data: {
                    title: 'position-forms'
                }
            },
            {
                path: 'edit-position/:id',
                component: _edit_position_form_edit_position_form_component__WEBPACK_IMPORTED_MODULE_16__["EditPositionFormComponent"],
                data: {
                    title: 'edit-position'
                }
            },
            {
                path: 'indicator-forms',
                component: _indicator_forms_indicator_forms_component__WEBPACK_IMPORTED_MODULE_6__["IndicatorFormsComponent"],
                data: {
                    title: 'indicator-forms',
                }
            },
            {
                path: 'EvaluationCycle',
                component: _EvaluationCycle_EvaluationCycle_component__WEBPACK_IMPORTED_MODULE_12__["EvaluationCycleComponent"],
                data: {
                    title: 'EvaluationCycle'
                }
            },
            {
                path: 'positions',
                component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_8__["RolesComponent"],
                data: {
                    title: 'Positions'
                }
            },
            {
                path: 'navbars',
                component: _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_2__["NavbarsComponent"],
                data: {
                    title: 'Navbars'
                }
            }
        ]
    }
];
class BaseRoutingModule {
}
BaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BaseRoutingModule });
BaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BaseRoutingModule_Factory(t) { return new (t || BaseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/base/base.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/base/base.module.ts ***!
  \*******************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbars/navbars.component */ "./src/app/views/base/navbars/navbars.component.ts");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./base-routing.module */ "./src/app/views/base/base-routing.module.ts");
/* harmony import */ var _criterias_criterias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./criterias/criterias.component */ "./src/app/views/base/criterias/criterias.component.ts");
/* harmony import */ var _services_criterias_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/criterias.service */ "./src/app/services/criterias.service.ts");
/* harmony import */ var _criteria_forms_criteria_forms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./criteria-forms/criteria-forms.component */ "./src/app/views/base/criteria-forms/criteria-forms.component.ts");
/* harmony import */ var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./indicators/indicators.component */ "./src/app/views/base/indicators/indicators.component.ts");
/* harmony import */ var _services_indicators_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/indicators.service */ "./src/app/services/indicators.service.ts");
/* harmony import */ var _indicator_forms_indicator_forms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./indicator-forms/indicator-forms.component */ "./src/app/views/base/indicator-forms/indicator-forms.component.ts");
/* harmony import */ var _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./role-form/role-form.component */ "./src/app/views/base/role-form/role-form.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./users/users.component */ "./src/app/views/base/users/users.component.ts");
/* harmony import */ var _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./users-form/users-form.component */ "./src/app/views/base/users-form/users-form.component.ts");
/* harmony import */ var _services_EvaluationCycle_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/EvaluationCycle.service */ "./src/app/services/EvaluationCycle.service.ts");
/* harmony import */ var _EvaluationCycle_EvaluationCycle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./EvaluationCycle/EvaluationCycle.component */ "./src/app/views/base/EvaluationCycle/EvaluationCycle.component.ts");
/* harmony import */ var _user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user-edit-form/user-edit-form.component */ "./src/app/views/base/user-edit-form/user-edit-form.component.ts");
/* harmony import */ var _trashed_criterias_trashed_criterias_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./trashed-criterias/trashed-criterias.component */ "./src/app/views/base/trashed-criterias/trashed-criterias.component.ts");
/* harmony import */ var _trash_users_trash_users_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./trash-users/trash-users.component */ "./src/app/views/base/trash-users/trash-users.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/views/base/roles/roles.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/views/base/groups/groups.component.ts");
/* harmony import */ var _edit_position_form_edit_position_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./edit-position-form/edit-position-form.component */ "./src/app/views/base/edit-position-form/edit-position-form.component.ts");
// Angular






// Tabs Component

// Carousel Component

// Collapse Component

// Dropdowns Component

// Pagination Component

// Popover Component

// Progress Component

// Tooltip Component



// navbars

// Components Routing




























class BaseModule {
}
BaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BaseModule_Factory(t) { return new (t || BaseModule)(); }, providers: [
        _services_criterias_service__WEBPACK_IMPORTED_MODULE_17__["CriteriasService"],
        _services_indicators_service__WEBPACK_IMPORTED_MODULE_20__["IndicatorsService"],
        _services_EvaluationCycle_service__WEBPACK_IMPORTED_MODULE_25__["EvaluationCycleService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            _base_routing_module__WEBPACK_IMPORTED_MODULE_15__["BaseRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [_navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__["NavbarsComponent"],
        _criterias_criterias_component__WEBPACK_IMPORTED_MODULE_16__["CriteriasComponent"],
        _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_19__["IndicatorsComponent"],
        _criteria_forms_criteria_forms_component__WEBPACK_IMPORTED_MODULE_18__["CriteriaFormsComponent"],
        _indicator_forms_indicator_forms_component__WEBPACK_IMPORTED_MODULE_21__["IndicatorFormsComponent"],
        _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_22__["RoleFormComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
        _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_24__["UsersFormComponent"],
        _EvaluationCycle_EvaluationCycle_component__WEBPACK_IMPORTED_MODULE_26__["EvaluationCycleComponent"],
        _user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_27__["UserEditFormComponent"],
        _trashed_criterias_trashed_criterias_component__WEBPACK_IMPORTED_MODULE_28__["TrashedCriteriasComponent"],
        _trash_users_trash_users_component__WEBPACK_IMPORTED_MODULE_29__["TrashUsersComponent"],
        _roles_roles_component__WEBPACK_IMPORTED_MODULE_30__["RolesComponent"],
        _groups_groups_component__WEBPACK_IMPORTED_MODULE_31__["GroupsComponent"],
        _edit_position_form_edit_position_form_component__WEBPACK_IMPORTED_MODULE_32__["EditPositionFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
        _base_routing_module__WEBPACK_IMPORTED_MODULE_15__["BaseRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                    _base_routing_module__WEBPACK_IMPORTED_MODULE_15__["BaseRoutingModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                    angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"].forRoot(),
                ],
                declarations: [
                    _navbars_navbars_component__WEBPACK_IMPORTED_MODULE_14__["NavbarsComponent"],
                    _criterias_criterias_component__WEBPACK_IMPORTED_MODULE_16__["CriteriasComponent"],
                    _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_19__["IndicatorsComponent"],
                    _criteria_forms_criteria_forms_component__WEBPACK_IMPORTED_MODULE_18__["CriteriaFormsComponent"],
                    _indicator_forms_indicator_forms_component__WEBPACK_IMPORTED_MODULE_21__["IndicatorFormsComponent"],
                    _role_form_role_form_component__WEBPACK_IMPORTED_MODULE_22__["RoleFormComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
                    _users_form_users_form_component__WEBPACK_IMPORTED_MODULE_24__["UsersFormComponent"],
                    _EvaluationCycle_EvaluationCycle_component__WEBPACK_IMPORTED_MODULE_26__["EvaluationCycleComponent"],
                    _user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_27__["UserEditFormComponent"],
                    _trashed_criterias_trashed_criterias_component__WEBPACK_IMPORTED_MODULE_28__["TrashedCriteriasComponent"],
                    _trash_users_trash_users_component__WEBPACK_IMPORTED_MODULE_29__["TrashUsersComponent"],
                    _roles_roles_component__WEBPACK_IMPORTED_MODULE_30__["RolesComponent"],
                    _groups_groups_component__WEBPACK_IMPORTED_MODULE_31__["GroupsComponent"],
                    _edit_position_form_edit_position_form_component__WEBPACK_IMPORTED_MODULE_32__["EditPositionFormComponent"],
                ],
                providers: [
                    _services_criterias_service__WEBPACK_IMPORTED_MODULE_17__["CriteriasService"],
                    _services_indicators_service__WEBPACK_IMPORTED_MODULE_20__["IndicatorsService"],
                    _services_EvaluationCycle_service__WEBPACK_IMPORTED_MODULE_25__["EvaluationCycleService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/base/criteria-forms/criteria-forms.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/base/criteria-forms/criteria-forms.component.ts ***!
  \***********************************************************************/
/*! exports provided: CriteriaFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriaFormsComponent", function() { return CriteriaFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_criterias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/criterias.service */ "./src/app/services/criterias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fire-alert.service */ "./src/app/services/fire-alert.service.ts");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function CriteriaFormsComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriaFormsComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriaFormsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CriteriaFormsComponent_div_15_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CriteriaFormsComponent_div_15_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
} }
function CriteriaFormsComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", type_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r14 == null ? null : type_r14.type);
} }
function CriteriaFormsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriaFormsComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", role_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r15 == null ? null : role_r15.name);
} }
function CriteriaFormsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " role/s required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriaFormsComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grp_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", grp_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grp_r16 == null ? null : grp_r16.name);
} }
function CriteriaFormsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " group/s required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CriteriaFormsComponent {
    constructor(_criteriasService, route, router, alert, roleservice, _grpService) {
        this._criteriasService = _criteriasService;
        this.route = route;
        this.router = router;
        this.alert = alert;
        this.roleservice = roleservice;
        this._grpService = _grpService;
    }
    ngOnInit() {
        this._criteriasService.getCriteriaTypes().subscribe(dataType => {
            this.types = dataType;
        });
        this._grpService.getGroups().subscribe(data => {
            this.groups = data;
        });
        this.roleservice.getRoles().subscribe(roles => {
            this.positions = roles;
            console.log(roles);
        });
    }
    onSubmit(form) {
        if (form.valid) {
            console.log(form.value);
            this._criteriasService.addCriteria(form.value).subscribe((res) => {
                console.log(res);
                if (res["errors"] && res["errors"]["name"]) {
                    this.alert.fireAlert("error", res["errors"]["name"][0], "");
                }
            });
            form.reset();
            this.router.navigate(['/base/criteria']);
        }
    }
}
CriteriaFormsComponent.ɵfac = function CriteriaFormsComponent_Factory(t) { return new (t || CriteriaFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_criterias_service__WEBPACK_IMPORTED_MODULE_1__["CriteriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_3__["FireAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"])); };
CriteriaFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CriteriaFormsComponent, selectors: [["app-criteria-forms"]], decls: 43, vars: 8, consts: [[1, "col-md-11"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-horizontal", 3, "ngSubmit"], ["newCriteriaForm", "ngForm"], [1, "form-group", "row"], ["for", "Criteria", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "ngModel", "", "id", "criteriaName", "name", "name", "placeholder", "Criteria Name", "required", "", "minlength", "3", 1, "form-control"], ["nameRef", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "criteriatype", 1, "col-md-3", "col-form-label"], ["id", "criteriaType", "ngModel", "", "name", "type_id", "required", "", 1, "form-control"], ["typeIdRef", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "roles", 1, "col-md-3", "col-form-label"], ["id", "roles", "ngModel", "", "name", "role", "multiple", "", "size", "3", 1, "form-control"], ["roleRef", "ngModel"], ["id", "roles", "ngModel", "", "name", "group_id", "required", "", "multiple", "", "size", "2", 1, "form-control"], ["grpRef", "ngModel"], ["type", "submit", 1, "btn", "btn-md", "btn-primary", 3, "disabled"], [1, "fa", "fa-dot-circle-o"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function CriteriaFormsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CriteriaFormsComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Criteria Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CriteriaFormsComponent_div_15_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CriteriaFormsComponent_option_22_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CriteriaFormsComponent_div_23_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CriteriaFormsComponent_option_30_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CriteriaFormsComponent_div_31_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CriteriaFormsComponent_option_38_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CriteriaFormsComponent_div_39_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.touched && _r6.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && _r9.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvY3JpdGVyaWEtZm9ybXMvY3JpdGVyaWEtZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriaFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-criteria-forms',
                templateUrl: './criteria-forms.component.html',
                styleUrls: ['./criteria-forms.component.css']
            }]
    }], function () { return [{ type: _services_criterias_service__WEBPACK_IMPORTED_MODULE_1__["CriteriasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_3__["FireAlertService"] }, { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_4__["RolesService"] }, { type: _services_group_service__WEBPACK_IMPORTED_MODULE_5__["GroupService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/criterias/criterias.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/base/criterias/criterias.component.ts ***!
  \*************************************************************/
/*! exports provided: CriteriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriteriasComponent", function() { return CriteriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _services_criterias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/criterias.service */ "./src/app/services/criterias.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fire-alert.service */ "./src/app/services/fire-alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function CriteriasComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r6 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r6.name, " ");
} }
function CriteriasComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r7.type, " ");
} }
function CriteriasComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CriteriasComponent_ng_template_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const row_r8 = ctx.row; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r9.openEditModal(row_r8, _r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CriteriasComponent_ng_template_24_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const row_r8 = ctx.row; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteFunction(row_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriasComponent_ng_template_25_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must enter name . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriasComponent_ng_template_25_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", type_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r17 == null ? null : type_r17.type);
} }
function CriteriasComponent_ng_template_25_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grp_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", grp_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grp_r18 == null ? null : grp_r18.name);
} }
function CriteriasComponent_ng_template_25_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", role_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r19 == null ? null : role_r19.name);
} }
function CriteriasComponent_ng_template_25_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must enter criteria_type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CriteriasComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Criteria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CriteriasComponent_ng_template_25_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.edit(ctx_r20.editCriteria.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Criteria Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CriteriasComponent_ng_template_25_small_8_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CriteriasComponent_ng_template_25_option_12_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CriteriasComponent_ng_template_25_option_16_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CriteriasComponent_ng_template_25_option_20_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CriteriasComponent_ng_template_25_small_22_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CriteriasComponent_ng_template_25_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.closeEditModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.editCriteria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.name.valid && (ctx_r5.name.dirty || ctx_r5.name.touched) && ctx_r5.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.grps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.type_id.valid && (ctx_r5.type_id.dirty || ctx_r5.type_id.touched) && ctx_r5.type_id.errors.required);
} }
const _c0 = function () { return ["/base/criteria-forms"]; };
const _c1 = function () { return ["/base/trashed-criterias"]; };
const _c2 = function () { return { prop: "name", dir: "desc" }; };
const _c3 = function (a0) { return [a0]; };
class CriteriasComponent {
    constructor(_criteriasService, modalService, alert, route, router, _grpService, _rolesService) {
        this._criteriasService = _criteriasService;
        this.modalService = modalService;
        this.alert = alert;
        this.route = route;
        this.router = router;
        this._grpService = _grpService;
        this._rolesService = _rolesService;
        this.dtOptions = {};
        this.roles = [];
        this.title = 'angulardatatables';
    }
    ngOnInit() {
        this.getCriteriaTypeList();
        this.getGroups();
        this.getRoles();
        this.getCriteriaList();
    }
    refreshCriteria() {
        console.log('cc', this.criterias);
        if (this.criterias) {
            this.criterias.forEach(element => {
                let data = this.types.filter(elem => elem['id'] == element['type_id']);
                element['type'] = data[0]['type'];
            });
        }
    }
    getCriteriaTypeList() {
        this._criteriasService.getCriteriaTypes().subscribe(dataType => {
            console.log(dataType);
            this.types = dataType;
        });
    }
    getGroups() {
        this._grpService.getGroups().subscribe(data => {
            this.grps = data;
        });
    }
    getRoles() {
        this._rolesService.getRoles().subscribe(data => {
            for (let ele in data) {
                if (data[ele].name !== 'superadmin') {
                    this.roles.push(data[ele]);
                }
            }
        });
    }
    deleteFunction(id) {
        this._criteriasService.deleteCriteria(id).subscribe(() => {
            console.log('deleted');
        });
        console.log(id);
        this.getCriteriaList();
    }
    getCriteriaList() {
        this._criteriasService.getCriteria().subscribe((res) => {
            console.log(res.data);
            this.criterias = res.data;
            this.temp = res.data;
            this.refreshCriteria();
        });
    }
    initEditForm() {
        this.editCriteria = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableCriteriaObj.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableCriteriaObj.name),
            type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableCriteriaObj.type_id),
            group_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableCriteriaObj.group_id),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableCriteriaObj.roles),
        });
    }
    openEditModal(selected, template) {
        console.log("testing", selected);
        this.editableCriteriaObj = selected;
        this.initEditForm();
        this.modalEditRef = this.modalService.show(template);
    }
    closeEditModal() {
        this.modalEditRef.hide();
    }
    edit(value) {
        console.log("value", value);
        this._criteriasService.editCriteria(value, this.editableCriteriaObj.id)
            .subscribe(result => {
            console.log(result);
            this.modalEditRef.hide();
            if (result) {
                this.alert.fireAlert("success", "Data Updated successfully", "");
                this.getCriteriaList();
                //this.initEditForm();
            }
            else {
                this.alert.fireAlert("error", "There is an error when update this data", "");
                this.getCriteriaList();
                //this.initEditForm();
            }
        });
    }
    updateFilter(event) {
        const val = event.target.value.toString().toLowerCase().trim();
        // filter our data
        const temp = this.temp.filter(function (d) {
            console.log("d", d);
            return (d.name.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.type.toString().toLowerCase().indexOf(val) !== -1) ||
                !val;
        });
        // update the rows
        this.criterias = temp;
        // Whenever the filter changes, always go back to the first page
        this.myFilterTable.offset = 0;
    }
    get name() { return this.editCriteria.get('name'); }
    get type_id() { return this.editCriteria.get('type_id'); }
}
CriteriasComponent.ɵfac = function CriteriasComponent_Factory(t) { return new (t || CriteriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_criterias_service__WEBPACK_IMPORTED_MODULE_3__["CriteriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_5__["FireAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"])); };
CriteriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CriteriasComponent, selectors: [["app-criterias"]], viewQuery: function CriteriasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myFilterTable = _t.first);
    } }, decls: 27, vars: 14, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "btn-group", "btn-group-md", "ml-2", 2, "float", "left", "margin-bottom", "5px"], ["type", "text", "placeholder", "Search...", 3, "keyup"], [1, "btn-group", "btn-group-md", "ml-2", "mb-3", 2, "float", "right"], ["type", "button", 1, "btn", "btn-block", "btn-success", "mb-lg-3", "mr-3", 3, "routerLink"], ["type", "button", 1, "btn", "btn-block", "btn-danger", "mb-lg-3", "mr-3", 3, "routerLink"], [1, "table", "table-striped", "table-bordered", "table-sm", "row-border", "hover", "test", "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "sorts", "limit"], ["myFilterTable", ""], ["name", "Criteria Name", "prop", "name"], ["ngx-datatable-cell-template", ""], ["name", "Type", "prop", "type"], ["name", "Actions"], ["EditScreen", ""], [1, "btn-group", "btn-group-md", "ml-2", 2, "margin-top", "-5px !important"], ["type", "button", 1, "btn", "btn-block", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-danger", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "text-left", 3, "formGroup", "ngSubmit"], [1, "my-2"], ["formControlName", "name", 1, "py-2", "w-100", "ui-inputtext", "ui-corner-all"], ["class", "danger", "style", "color: red;font-size: 14px;", 4, "ngIf"], ["formControlName", "type_id", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "groups", "formControlName", "group_id", "required", "", "multiple", "", "size", "2", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "roles", "formControlName", "roles", "multiple", "", "size", "3", 1, "form-control"], [1, "modal-footer", "border-0"], ["class", "danger", "style", "color: red;font-size: 14px;", "class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "ml-3"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "danger", 2, "color", "red", "font-size", "14px"], [3, "value"], [3, "ngValue"], [1, "alert", "alert-danger", 2, "color", "red", "font-size", "14px"]], template: function CriteriasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Criterias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CriteriasComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Criteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "See Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-datatable", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CriteriasComponent_ng_template_20_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CriteriasComponent_ng_template_22_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CriteriasComponent_ng_template_24_Template, 6, 0, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CriteriasComponent_ng_template_25_Template, 27, 6, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.criterias)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("sorts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2)))("limit", 4);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CriteriasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-criterias',
                templateUrl: './criterias.component.html'
            }]
    }], function () { return [{ type: _services_criterias_service__WEBPACK_IMPORTED_MODULE_3__["CriteriasService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }, { type: src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_5__["FireAlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"] }, { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_8__["RolesService"] }]; }, { myFilterTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/views/base/edit-position-form/edit-position-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/base/edit-position-form/edit-position-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditPositionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPositionFormComponent", function() { return EditPositionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function EditPositionFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPositionFormComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", role_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r4 == null ? null : role_r4.name);
} }
class EditPositionFormComponent {
    constructor(_rolesService, route, router) {
        this._rolesService = _rolesService;
        this.route = route;
        this.router = router;
        this.roles = [];
        this.permissions = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.role_id = +params['id'];
        });
        this._rolesService.getRoles().subscribe(data => {
            console.log(data);
            for (let ele in data) {
                if (data[ele].name !== 'superadmin') {
                    this.roles.push(data[ele]);
                }
            }
            console.log(this.roles);
        });
        this._rolesService.getRoleById(this.role_id).subscribe(data => {
            this.role = data;
            this.role['permissions'].forEach(ele => {
                this.permissions.push(ele.toString());
            });
            console.log(this.permissions);
        });
    }
    onSubmit(form) {
        if (form.valid) {
            this._rolesService.editRole(form.value, this.role_id).subscribe((res) => {
                console.log(res);
            });
        }
        form.reset;
        this.router.navigate(['/base/positions']);
    }
}
EditPositionFormComponent.ɵfac = function EditPositionFormComponent_Factory(t) { return new (t || EditPositionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_1__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditPositionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPositionFormComponent, selectors: [["app-edit-position-form"]], decls: 25, vars: 5, consts: [[1, "col-md-9"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-horizontal", 3, "ngSubmit"], ["editPositionForm", "ngForm"], [1, "form-group", "row"], ["for", "Position", 1, "col-md-3", "col-form-label"], ["type", "text", "ngModel", "", "id", "Position", "name", "name", "required", "", 1, "form-control", 3, "ngModel"], ["nameRef", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "permission", 1, "col-md-3", "col-form-label"], ["id", "permission", "ngModel", "", "name", "permissions", "required", "", "multiple", "", "size", "3", 1, "form-control", 3, "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-md", "btn-info", 3, "disabled"], [1, "fa", "fa-dot-circle-o"], [1, "alert", "alert-danger"], [3, "value"]], template: function EditPositionFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditPositionFormComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Position Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditPositionFormComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evaluated Postions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditPositionFormComponent_option_21_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role == null ? null : ctx.role.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvZWRpdC1wb3NpdGlvbi1mb3JtL2VkaXQtcG9zaXRpb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPositionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-position-form',
                templateUrl: './edit-position-form.component.html',
                styleUrls: ['./edit-position-form.component.css']
            }]
    }], function () { return [{ type: _services_roles_service__WEBPACK_IMPORTED_MODULE_1__["RolesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/groups/groups.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/base/groups/groups.component.ts ***!
  \*******************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GroupsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GroupsComponent {
    constructor(_groupService, route, router) {
        this._groupService = _groupService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (form.valid) {
            console.log(form.value);
            this._groupService.addGroup(form.value).subscribe((res) => {
                console.log(res);
            });
            form.reset();
            this.router.navigate(['/base/Users']);
        }
    }
}
GroupsComponent.ɵfac = function GroupsComponent_Factory(t) { return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupsComponent, selectors: [["app-groups"]], decls: 18, vars: 2, consts: [[1, "col-md-10"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-horizontal", 3, "ngSubmit"], ["newGroupForm", "ngForm"], [1, "form-group", "row"], ["for", "Group", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "ngModel", "", "id", "groupName", "name", "name", "placeholder", "Group Name", "required", "", 1, "form-control"], ["nameRef", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-md", "btn-primary", 3, "disabled"], [1, "fa", "fa-dot-circle-o"], [1, "alert", "alert-danger"]], template: function GroupsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Group Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GroupsComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Group Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GroupsComponent_div_14_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-groups',
                templateUrl: './groups.component.html',
                styleUrls: ['./groups.component.css']
            }]
    }], function () { return [{ type: _services_group_service__WEBPACK_IMPORTED_MODULE_1__["GroupService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/indicator-forms/indicator-forms.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/base/indicator-forms/indicator-forms.component.ts ***!
  \*************************************************************************/
/*! exports provided: IndicatorFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorFormsComponent", function() { return IndicatorFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_indicators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/indicators.service */ "./src/app/services/indicators.service.ts");
/* harmony import */ var _services_criterias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/criterias.service */ "./src/app/services/criterias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function IndicatorFormsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorFormsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must be at least 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorFormsComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", criteria_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](criteria_r7 == null ? null : criteria_r7.name);
} }
function IndicatorFormsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Criteria is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IndicatorFormsComponent {
    constructor(_indicatorsService, _criteriasService, route, router) {
        this._indicatorsService = _indicatorsService;
        this._criteriasService = _criteriasService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this._criteriasService.getCriteria().subscribe(dataType => {
            console.log(dataType);
            this.criterias = dataType;
        });
    }
    onSubmit(form) {
        if (form.valid) {
            console.log(form.value);
            this._indicatorsService.addIndicator(form.value).subscribe((res) => {
                console.log(res);
            });
            form.reset();
            this.router.navigate(['/base/indicator']);
        }
    }
}
IndicatorFormsComponent.ɵfac = function IndicatorFormsComponent_Factory(t) { return new (t || IndicatorFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_indicators_service__WEBPACK_IMPORTED_MODULE_1__["IndicatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_criterias_service__WEBPACK_IMPORTED_MODULE_2__["CriteriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
IndicatorFormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorFormsComponent, selectors: [["app-indicator-forms"]], decls: 31, vars: 5, consts: [[1, "col-md-10"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-horizontal", 3, "ngSubmit"], ["newIndicatorForm", "ngForm"], [1, "form-group", "row"], ["for", "Indicator", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "ngModel", "", "id", "indicatorName", "name", "name", "placeholder", "Indicator Name", "required", "", "minlength", "3", 1, "form-control"], ["nameRef", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "criteria", 1, "col-md-3", "col-form-label"], ["id", "criteria", "ngModel", "", "name", "criteria_id", "required", "", 1, "form-control"], ["criteriaIdRef", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "ngModel", "", "name", "is_positive", "id", "isPositive", 1, "form-check-input"], ["for", "isPositive", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-md", "btn-primary", 3, "disabled"], [1, "fa", "fa-dot-circle-o"], [1, "alert", "alert-danger"], [3, "value"]], template: function IndicatorFormsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Indicator Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IndicatorFormsComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Indicator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IndicatorFormsComponent_div_14_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IndicatorFormsComponent_div_15_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, IndicatorFormsComponent_option_22_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IndicatorFormsComponent_div_23_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Is positive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.criterias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.touched && _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvaW5kaWNhdG9yLWZvcm1zL2luZGljYXRvci1mb3Jtcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indicator-forms',
                templateUrl: './indicator-forms.component.html',
                styleUrls: ['./indicator-forms.component.css']
            }]
    }], function () { return [{ type: _services_indicators_service__WEBPACK_IMPORTED_MODULE_1__["IndicatorsService"] }, { type: _services_criterias_service__WEBPACK_IMPORTED_MODULE_2__["CriteriasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/indicators/indicators.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/base/indicators/indicators.component.ts ***!
  \***************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_indicators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/indicators.service */ "./src/app/services/indicators.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fire-alert.service */ "./src/app/services/fire-alert.service.ts");
/* harmony import */ var _services_criterias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/criterias.service */ "./src/app/services/criterias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function IndicatorsComponent_tr_23_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", criteria_r8 == null ? null : criteria_r8.name, " ");
} }
function IndicatorsComponent_tr_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorsComponent_tr_23_div_4_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r8 = ctx.$implicit;
    const indicator_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", criteria_r8.id == indicator_r4.criteria_id);
} }
function IndicatorsComponent_tr_23_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_tr_23_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Negative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndicatorsComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndicatorsComponent_tr_23_div_4_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndicatorsComponent_tr_23_div_6_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndicatorsComponent_tr_23_div_7_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_tr_23_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const indicator_r4 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38); return ctx_r12.openEditModal(indicator_r4, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_tr_23_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const indicator_r4 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteIndicator(indicator_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indicator_r4 == null ? null : indicator_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.criterias);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", indicator_r4.is_positive == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", indicator_r4.is_positive != 1);
} }
function IndicatorsComponent_tr_36_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", criteria_r17 == null ? null : criteria_r17.name, " ");
} }
function IndicatorsComponent_tr_36_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndicatorsComponent_tr_36_div_4_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r17 = ctx.$implicit;
    const trash_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", criteria_r17.id == trash_r15.criteria_id);
} }
function IndicatorsComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndicatorsComponent_tr_36_div_4_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_tr_36_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const trash_r15 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.restoreFunction(trash_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trash_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trash_r15 == null ? null : trash_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.criterias);
} }
function IndicatorsComponent_ng_template_37_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const criteria_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", criteria_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](criteria_r24 == null ? null : criteria_r24.name);
} }
function IndicatorsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IndicatorsComponent_ng_template_37_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.edit(ctx_r25.editIndicator.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Indicator Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IndicatorsComponent_ng_template_37_option_11_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Is positive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_ng_template_37_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.closeEditModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.editIndicator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.criterias);
} }
const _c0 = function () { return ["/base/indicator-forms"]; };
class IndicatorsComponent {
    constructor(_indicatorService, modalService, alert, _criteriasService) {
        this._indicatorService = _indicatorService;
        this.modalService = modalService;
        this.alert = alert;
        this._criteriasService = _criteriasService;
    }
    ngOnInit() {
        this.getIndicatorList();
        this.getCriteriaList();
        this.getTrashedIndicatorList();
    }
    deleteIndicator(id) {
        this._indicatorService.deleteIndicator(id).subscribe(() => { location.reload(); });
        console.log(id);
    }
    getIndicatorList() {
        this._indicatorService.getIndicators().subscribe(data => {
            console.log(data);
            this.indicators = data;
        });
    }
    getCriteriaList() {
        this._criteriasService.getCriteria().subscribe(dataType => {
            console.log("cccc", dataType);
            this.criterias = dataType;
        });
    }
    getTrashedIndicatorList() {
        this._indicatorService.getTrash().subscribe(data => {
            console.log("trash", data);
            this.trashIndicators = data;
        });
    }
    restoreFunction(id) {
        this._indicatorService.restoreTrash(id).subscribe(data => {
            console.log(data);
            location.reload();
        });
    }
    initEditForm() {
        this.editIndicator = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.name),
            criteria_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.criteria_id),
            is_positive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.editableObj.is_positive == 1 ? true : false)
        });
    }
    openEditModal(selected, template) {
        console.log("testing", selected);
        this.editableObj = selected;
        this.initEditForm();
        this.modalEditRef = this.modalService.show(template);
    }
    closeEditModal() {
        this.modalEditRef.hide();
        //this.initForm();
    }
    edit(value) {
        console.log("value", value);
        if (value.is_positive === true) {
            value.is_positive = 1;
        }
        else {
            value.is_positive = 0;
        }
        this._indicatorService.editCriteria(value, this.editableObj.id)
            .subscribe(result => {
            console.log(result);
            this.modalEditRef.hide();
            if (result) {
                this.alert.fireAlert("success", "Data Updated successfully", "");
                this.getIndicatorList();
                //this.initEditForm();
            }
            else {
                this.alert.fireAlert("error", "There is an error when update this data", "");
                this.getIndicatorList();
                //this.initEditForm();
            }
        });
    }
}
IndicatorsComponent.ɵfac = function IndicatorsComponent_Factory(t) { return new (t || IndicatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_indicators_service__WEBPACK_IMPORTED_MODULE_2__["IndicatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_4__["FireAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_criterias_service__WEBPACK_IMPORTED_MODULE_5__["CriteriasService"])); };
IndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndicatorsComponent, selectors: [["app-indicators"]], decls: 39, vars: 4, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "btn-group", "btn-group-md", "ml-2"], ["type", "button", 1, "btn", "btn-success", "mb-lg-3", "mr-3", 3, "routerLink"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["EditScreen", ""], [4, "ngIf"], ["type", "button", 1, "btn", "btn-block", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-danger", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "text-left", 3, "formGroup", "ngSubmit"], [1, "my-2"], ["formControlName", "name", 1, "py-2", "w-100", "ui-inputtext", "ui-corner-all"], ["formControlName", "criteria_id", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", "formControlName", "is_positive", 1, "form-check-input"], [1, "form-check-label"], [1, "modal-footer", "border-0"], ["type", "submit", 1, "btn", "btn-primary", "ml-3"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [3, "value"]], template: function IndicatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Indicators ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Indicator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Indicator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Criteria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IndicatorsComponent_tr_23_Template, 15, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Trashed Indicators ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Indicator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "critera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, IndicatorsComponent_tr_36_Template, 9, 2, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, IndicatorsComponent_ng_template_37_Template, 21, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trashIndicators);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvaW5kaWNhdG9ycy9pbmRpY2F0b3JzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indicators',
                templateUrl: './indicators.component.html',
                styleUrls: ['./indicators.component.css']
            }]
    }], function () { return [{ type: _services_indicators_service__WEBPACK_IMPORTED_MODULE_2__["IndicatorsService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }, { type: src_app_services_fire_alert_service__WEBPACK_IMPORTED_MODULE_4__["FireAlertService"] }, { type: _services_criterias_service__WEBPACK_IMPORTED_MODULE_5__["CriteriasService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/navbars/navbars.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/base/navbars/navbars.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarsComponent", function() { return NavbarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarsComponent {
    constructor(renderer, route) {
        this.renderer = renderer;
        this.route = route;
        this._isCollapsed = true;
    }
    set isCollapsed(value) {
        this._isCollapsed = value;
    }
    get isCollapsed() {
        if (this.collapseRef) {
            // temp fix for "overflow: hidden"
            if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
                this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
            }
        }
        return this._isCollapsed;
    }
    ngOnInit() { }
    ngAfterViewChecked() {
        this.collapseRef = this.collapse;
    }
}
NavbarsComponent.ɵfac = function NavbarsComponent_Factory(t) { return new (t || NavbarsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarsComponent, selectors: [["app-navbars"]], viewQuery: function NavbarsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collapse = _t.first);
    } }, decls: 0, vars: 0, template: function NavbarsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvbmF2YmFycy9uYXZiYXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbars',
                templateUrl: './navbars.component.html',
                styleUrls: ['./navbars.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/views/base/role-form/role-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/base/role-form/role-form.component.ts ***!
  \*************************************************************/
/*! exports provided: RoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function() { return RoleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function RoleFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoleFormComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", role_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r5 == null ? null : role_r5.name);
} }
class RoleFormComponent {
    constructor(_rolesService, route, router) {
        this._rolesService = _rolesService;
        this.route = route;
        this.router = router;
        this.roles = [];
    }
    ngOnInit() {
        this._rolesService.getRoles().subscribe(data => {
            for (let ele in data) {
                if (data[ele].name !== 'superadmin') {
                    this.roles.push(data[ele]);
                }
            }
        });
    }
    addPosition(form) {
        console.log(form.value);
        if (form.valid) {
            this._rolesService.addRole(form.value).subscribe((res) => {
                console.log(res);
            });
        }
        form.reset;
        this.router.navigate(['/base/positions']);
    }
}
RoleFormComponent.ɵfac = function RoleFormComponent_Factory(t) { return new (t || RoleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_1__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleFormComponent, selectors: [["app-role-form"]], decls: 26, vars: 3, consts: [[1, "col-md-9"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-horizontal", 3, "ngSubmit"], ["newPositionForm", "ngForm"], [1, "form-group", "row"], ["for", "Position", 1, "col-md-3", "col-form-label"], ["type", "text", "ngModel", "", "id", "Position", "name", "name", "placeholder", "Enter the position here ....", "required", "", 1, "form-control"], ["nameRef", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "roles", 1, "col-md-3", "col-form-label"], ["id", "roles", "ngModel", "", "name", "permissions", "multiple", "", "size", "3", 1, "form-control"], ["roleRef", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-md", "btn-info", 3, "disabled"], [1, "fa", "fa-dot-circle-o"], [1, "alert", "alert-danger"], [3, "value"]], template: function RoleFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RoleFormComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.addPosition(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Position Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoleFormComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evaluated Postions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoleFormComponent_option_22_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2Uvcm9sZS1mb3JtL3JvbGUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-form',
                templateUrl: './role-form.component.html',
                styleUrls: ['./role-form.component.css']
            }]
    }], function () { return [{ type: _services_roles_service__WEBPACK_IMPORTED_MODULE_1__["RolesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/base/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function RolesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r3 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r3.name, " ");
} }
const _c0 = function (a1) { return ["/base/edit-position", a1]; };
function RolesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r4.id));
} }
const _c1 = function () { return ["/base/position-forms"]; };
const _c2 = function () { return { prop: "name", dir: "desc" }; };
const _c3 = function (a0) { return [a0]; };
class RolesComponent {
    constructor(_rolesService) {
        this._rolesService = _rolesService;
        this.dtOptions = {};
        this.title = 'angulardatatables';
    }
    ngOnInit() {
        this.getRolesList();
    }
    getRolesList() {
        this._rolesService.getRoles().subscribe(data => {
            this.temp = data;
            this.roles = data;
            console.log(data);
        });
    }
    updateFilter(event) {
        const val = event.target.value.toString().toLowerCase().trim();
        // filter our data
        const temp = this.temp.filter(function (d) {
            console.log("d", d);
            return (d.name.toString().toLowerCase().indexOf(val) !== -1)
                || !val;
        });
        // update the rows
        this.roles = temp;
        // Whenever the filter changes, always go back to the first page
        this.myFilterTable.offset = 0;
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"])); };
RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["app-roles"]], viewQuery: function RolesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myFilterTable = _t.first);
    } }, decls: 19, vars: 12, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "btn-group", "btn-group-md", "ml-2", 2, "float", "left", "margin-bottom", "5px"], ["type", "text", "placeholder", "Search...", 3, "keyup"], [1, "btn-group", "btn-group-md", "ml-2"], ["type", "button", 1, "btn", "btn-success", "mb-lg-3", "mr-3", 3, "routerLink"], [1, "table", "table-striped", "table-bordered", "table-sm", "row-border", "hover", "test", "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "sorts", "limit"], ["myFilterTable", ""], ["name", " Role name", "prop", "name"], ["ngx-datatable-cell-template", ""], [1, "btn-group", "btn-group-md", "ml-2", 2, "margin-top", "-5px !important"], ["type", "button", 1, "btn", "btn-block", "btn-warning", 3, "routerLink"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Positions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RolesComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RolesComponent_ng_template_16_Template, 1, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-datatable-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RolesComponent_ng_template_18_Template, 3, 3, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.roles)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("sorts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2)))("limit", 4);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2Uvcm9sZXMvcm9sZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roles',
                templateUrl: './roles.component.html',
                styleUrls: ['./roles.component.css']
            }]
    }], function () { return [{ type: _services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"] }]; }, { myFilterTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/views/base/trash-users/trash-users.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/base/trash-users/trash-users.component.ts ***!
  \*****************************************************************/
/*! exports provided: TrashUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashUsersComponent", function() { return TrashUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TrashUsersComponent_tr_25_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrashUsersComponent_tr_25_ng_template_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.restoreFunction(user_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000", user_r1.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, user_r1 == null ? null : user_r1.hiring_at, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, user_r1 == null ? null : user_r1.deleted_at, "MM/dd/yyyy"));
} }
function TrashUsersComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrashUsersComponent_tr_25_ng_template_1_Template, 18, 12, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.name !== "Superadmin");
} }
class TrashUsersComponent {
    constructor(_userservice, route, router) {
        this._userservice = _userservice;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this._userservice.getTrash().subscribe((res) => {
            console.log('trash', res.data);
            this.trashedUsers = res.data;
        });
    }
    restoreFunction(id) {
        this._userservice.restoreTrash(id).subscribe(data => {
            console.log(data);
            // location.reload();
            this.router.navigate(['/base/Users']);
        });
    }
}
TrashUsersComponent.ɵfac = function TrashUsersComponent_Factory(t) { return new (t || TrashUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TrashUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrashUsersComponent, selectors: [["app-trash-users"]], decls: 26, vars: 1, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "ngIf"], ["alt", "No User Avatar", 1, "img-circle", "elevation-2", "mx-3", 2, "width", "100px", "height", "100px", 3, "src"], [1, "btn-group", "btn-group-md", "ml-2"], ["type", "button", 1, "btn", "btn-block", "btn-warning", 3, "click"]], template: function TrashUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Deleted Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hire Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Leaving Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TrashUsersComponent_tr_25_Template, 2, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trashedUsers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvdHJhc2gtdXNlcnMvdHJhc2gtdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrashUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trash-users',
                templateUrl: './trash-users.component.html',
                styleUrls: ['./trash-users.component.css']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/trashed-criterias/trashed-criterias.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/base/trashed-criterias/trashed-criterias.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrashedCriteriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashedCriteriasComponent", function() { return TrashedCriteriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_criterias_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/criterias.service */ "./src/app/services/criterias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TrashedCriteriasComponent_tr_19_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r3 == null ? null : type_r3.type, " ");
} }
function TrashedCriteriasComponent_tr_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrashedCriteriasComponent_tr_19_div_4_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const trash_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", type_r3.id == trash_r1.type_id);
} }
function TrashedCriteriasComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TrashedCriteriasComponent_tr_19_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrashedCriteriasComponent_tr_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const trash_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.restoreFunction(trash_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trash_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trash_r1 == null ? null : trash_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.types);
} }
class TrashedCriteriasComponent {
    constructor(_criteriasService, route, router) {
        this._criteriasService = _criteriasService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.getTrashedCriteriaList();
        this.getCriteriaTypeList();
    }
    getCriteriaTypeList() {
        this._criteriasService.getCriteriaTypes().subscribe(dataType => {
            console.log(dataType);
            this.types = dataType;
        });
    }
    getTrashedCriteriaList() {
        this._criteriasService.getTrash().subscribe(data => {
            console.log("trash", data);
            this.trashCriterias = data;
        });
    }
    restoreFunction(id) {
        this._criteriasService.restoreTrash(id).subscribe(data => {
            console.log(data);
            // location.reload();
            this.router.navigate(['/base/criteria']);
        });
    }
}
TrashedCriteriasComponent.ɵfac = function TrashedCriteriasComponent_Factory(t) { return new (t || TrashedCriteriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_criterias_service__WEBPACK_IMPORTED_MODULE_1__["CriteriasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TrashedCriteriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrashedCriteriasComponent, selectors: [["app-trashed-criterias"]], decls: 20, vars: 1, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "btn-group", "btn-group-md", "ml-2"], ["type", "button", 1, "btn", "btn-block", "btn-warning", 3, "click"], [4, "ngIf"]], template: function TrashedCriteriasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Trash Indicators ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Criteria Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TrashedCriteriasComponent_tr_19_Template, 9, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trashCriterias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvdHJhc2hlZC1jcml0ZXJpYXMvdHJhc2hlZC1jcml0ZXJpYXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrashedCriteriasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trashed-criterias',
                templateUrl: './trashed-criterias.component.html',
                styleUrls: ['./trashed-criterias.component.css']
            }]
    }], function () { return [{ type: _services_criterias_service__WEBPACK_IMPORTED_MODULE_1__["CriteriasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/user-edit-form/user-edit-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/base/user-edit-form/user-edit-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditFormComponent", function() { return UserEditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function UserEditFormComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", position_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](position_r4 == null ? null : position_r4.name);
} }
function UserEditFormComponent_option_23_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r5 == null ? null : user_r5.name, " ");
} }
function UserEditFormComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserEditFormComponent_option_23_ng_template_1_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5.name !== "Superadmin");
} }
function UserEditFormComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grp_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", grp_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grp_r8 == null ? null : grp_r8.name);
} }
class UserEditFormComponent {
    constructor(_userservice, route, _rolesService, router, _grpService) {
        this._userservice = _userservice;
        this.route = route;
        this._rolesService = _rolesService;
        this.router = router;
        this._grpService = _grpService;
        this.group = [];
    }
    fileEvent(e) {
        this.filedata = e.target.files[0];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this._userservice.getUserById(this.id).subscribe(data => {
            this.user = data;
            data['groups'].forEach(ele => {
                this.group.push(ele.toString());
            });
            console.log(this.group);
        });
        this._userservice.getUsers().subscribe((res) => {
            this.users = res.data;
        });
        this._rolesService.getRoles().subscribe(roleData => {
            this.roles = roleData;
        });
        this._grpService.getGroups().subscribe(data => {
            this.grps = data;
        });
    }
    editUser(form) {
        if (form.valid) {
            console.log(form.value);
            this._userservice.editUser(this.id, form.value).subscribe((res) => {
                console.log(res);
            }, (error) => { console.error(error); }, () => { form.reset(); });
        }
        this.router.navigate(['/base/Users']);
    }
}
UserEditFormComponent.ɵfac = function UserEditFormComponent_Factory(t) { return new (t || UserEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_3__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"])); };
UserEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEditFormComponent, selectors: [["app-user-edit-form"]], decls: 33, vars: 7, consts: [[1, "col-md-9"], [1, "card"], [1, "card-header"], [1, "card-body"], ["enctype", "multipart/form-data", 1, "form-horizontal", 3, "ngSubmit"], ["EditUserForm", "ngForm"], [1, "row"], [1, "pl-3"], [1, "form-group", "row"], ["for", "Position", 1, "col-md-3", "col-form-label"], ["id", "Position", "ngModel", "", "name", "role_id", "required", "", 1, "form-control", 3, "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "supervisor", 1, "col-md-3", "col-form-label"], ["id", "supervisor", "ngModel", "", "name", "supervisor", 1, "form-control", 3, "ngModel"], ["for", "roles", 1, "col-md-3", "col-form-label"], ["id", "roles", "ngModel", "", "name", "group_id", "required", "", "multiple", "", "size", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-md", "btn-primary"], [1, "fa", "fa-dot-circle-o"], [3, "value"], [3, "ngIf"]], template: function UserEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserEditFormComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.editUser(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserEditFormComponent_option_17_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserEditFormComponent_option_23_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditFormComponent_Template_select_ngModelChange_28_listener($event) { return ctx.group = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserEditFormComponent_option_29_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user == null ? null : ctx.user.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user == null ? null : ctx.user.supervisor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grps);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvdXNlci1lZGl0LWZvcm0vdXNlci1lZGl0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-edit-form',
                templateUrl: './user-edit-form.component.html',
                styleUrls: ['./user-edit-form.component.css']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_3__["RolesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/users-form/users-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/base/users-form/users-form.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormComponent", function() { return UsersFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/roles.service */ "./src/app/services/roles.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function UsersFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersFormComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", position_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](position_r17 == null ? null : position_r17.name);
} }
function UsersFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Position is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersFormComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hiring Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersFormComponent_option_50_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const user_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r18 == null ? null : user_r18.name, " ");
} }
function UsersFormComponent_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersFormComponent_option_50_ng_template_1_Template, 1, 1, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r18.name !== "Superadmin");
} }
function UsersFormComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grp_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", grp_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grp_r21 == null ? null : grp_r21.name);
} }
function UsersFormComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Group/s required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UsersFormComponent {
    constructor(_userservice, _rolesService, route, _grpService) {
        this._userservice = _userservice;
        this._rolesService = _rolesService;
        this.route = route;
        this._grpService = _grpService;
        this.is_added = false;
    }
    fileEvent(e) {
        this.filedata = e.target.files[0];
    }
    ngOnInit() {
        this._rolesService.getRoles().subscribe(roleData => {
            this.roles = roleData;
        });
        this._grpService.getGroups().subscribe(data => {
            this.grps = data;
        });
        this._userservice.getUsers().subscribe((res) => {
            this.users = res.data;
        });
    }
    addUser(form) {
        if (form.valid) {
            let myFormData = new FormData();
            myFormData.append('avatar', this.filedata, this.filedata.name);
            Object.entries(form.value).map(value => {
                myFormData.append(`${value[0]}`, `${value[1]}`);
            });
            this._userservice.addUser(myFormData).subscribe((res) => {
                // console.log(res);
                this.is_added = true;
                form.reset;
                this.route.navigate(['/base/Users']);
            });
        }
    }
}
UsersFormComponent.ɵfac = function UsersFormComponent_Factory(t) { return new (t || UsersFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"])); };
UsersFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersFormComponent, selectors: [["app-users-form"]], decls: 68, vars: 10, consts: [[1, "col-md-9"], [1, "card"], [1, "card-header"], [1, "card-body"], ["enctype", "multipart/form-data", 1, "form-horizontal", 3, "ngSubmit"], ["newUserForm", "ngForm"], [1, "form-group", "row"], ["for", "user", 1, "col-md-3", "col-form-label"], ["type", "text", "ngModel", "", "id", "user", "name", "name", "placeholder", "Enter employee name here.....", "required", "", 1, "form-control"], ["nameRef", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "Pass", 1, "col-md-3", "col-form-label"], ["type", "password", "ngModel", "", "id", "pass", "name", "password", "placeholder", "Enter password here.....", "required", "", 1, "form-control"], ["passwordRef", "ngModel"], ["for", "email", 1, "col-md-3", "col-form-label"], ["type", "email", "ngModel", "", "id", "email", "name", "email", "placeholder", "Enter email here.....", "required", "", 1, "form-control"], ["emailRef", "ngModel"], ["for", "Position", 1, "col-md-3", "col-form-label"], ["id", "Position", "ngModel", "", "name", "role_id", "required", "", 1, "form-control"], ["roleRef", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "hiring_at", 1, "col-md-3", "col-form-label"], ["id", "hiring-date", "ngModel", "", "type", "date", "name", "hiring_at", "placeholder", "Enter hiring date.....", "required", "", 1, "form-control"], ["hiringAtRef", "ngModel"], ["for", "supervisor", 1, "col-md-3", "col-form-label"], ["id", "supervisor", "ngModel", "", "name", "supervisor", 1, "form-control"], ["for", "roles", 1, "col-md-3", "col-form-label"], ["id", "roles", "ngModel", "", "name", "group_id", "required", "", "multiple", "", "size", "2", 1, "form-control"], ["grpRef", "ngModel"], ["for", "file-input", 1, "col-md-3", "col-form-label"], ["type", "file", "id", "file-input", "ngModel", "", "name", "avatar", "required", "", 3, "change"], ["fileupload", ""], ["type", "submit", 1, "btn", "btn-md", "btn-primary", 3, "disabled"], [1, "fa", "fa-dot-circle-o"], [1, "alert", "alert-danger"], [3, "value"], [3, "ngIf"]], template: function UsersFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UsersFormComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.addUser(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersFormComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UsersFormComponent_div_22_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UsersFormComponent_div_29_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UsersFormComponent_option_36_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UsersFormComponent_div_37_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hiring Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UsersFormComponent_div_44_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UsersFormComponent_option_50_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, UsersFormComponent_option_57_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, UsersFormComponent_div_58_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Avatar input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersFormComponent_Template_input_change_63_listener($event) { return ctx.fileEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && _r1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && _r7.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.touched && _r10.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.touched && _r13.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvdXNlcnMtZm9ybS91c2Vycy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-form',
                templateUrl: './users-form.component.html',
                styleUrls: ['./users-form.component.css']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _services_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_group_service__WEBPACK_IMPORTED_MODULE_4__["GroupService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/base/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/base/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function UsersComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000", row_r9.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UsersComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r10.name);
} }
function UsersComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11.email);
} }
function UsersComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r12.role);
} }
function UsersComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, row_r13.hiring_at, "yyyy-MM-dd"));
} }
function UsersComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r14.groups);
} }
function UsersComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.supervisorname);
} }
const _c0 = function (a1) { return ["/base/edit_user", a1]; };
function UsersComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_36_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const row_r16 = ctx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleteUser(row_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r16.id));
} }
const _c1 = function () { return ["/base/user-form"]; };
const _c2 = function () { return ["/base/groups"]; };
const _c3 = function () { return ["/base/trashed-users"]; };
const _c4 = function () { return { prop: "name", dir: "desc" }; };
const _c5 = function (a0) { return [a0]; };
class UsersComponent {
    constructor(_userservice) {
        this._userservice = _userservice;
        this.dtOptions = {};
        this.title = 'angulardatatables';
    }
    ngOnInit() {
        this.getUsersList();
    }
    deleteUser(id) {
        this._userservice.deleteUser(id).subscribe(deleted => {
            console.log("deleted user");
            this.getUsersList();
        });
    }
    getUsersList() {
        this._userservice.getUsers().subscribe((res) => {
            this.users = res.data;
            this.filteredUsers = this.users.filter(elem => elem['name'] !== 'Superadmin');
            this.refreshUsers();
            console.log("filteredUsers", this.filteredUsers);
            this.temp = this.filteredUsers;
        });
    }
    refreshUsers() {
        console.log('cc', this.users);
        if (this.users) {
            this.filteredUsers.forEach(element => {
                let data = this.users.filter(elem => elem['id'] == element['supervisor']);
                console.log("data[0]", data);
                if (data[0]) {
                    element.supervisorname = data[0]['name'];
                }
                else {
                    element.supervisorname = null;
                }
            });
        }
    }
    updateFilter(event) {
        const val = event.target.value.toString().toLowerCase().trim();
        // filter our data
        const temp = this.temp.filter(function (d) {
            console.log("d", d);
            return (d.name.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.email.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.role.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.hiring_at.toString().toLowerCase().indexOf(val) !== -1) ||
                (d.groups.toString().toLowerCase().indexOf(val) !== -1) ||
                !val;
        });
        // update the rows
        this.filteredUsers = temp;
        // Whenever the filter changes, always go back to the first page
        this.myFilterTable.offset = 0;
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myFilterTable = _t.first);
    } }, decls: 37, vars: 16, consts: [[1, "animated", "fadeIn"], [1, "row"], [1, "col-lg"], [1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "btn-group", "btn-group-md", "ml-2", 2, "float", "left", "margin-bottom", "5px"], ["type", "text", "placeholder", "Search...", 3, "keyup"], [1, "btn-group", "btn-group-md", "ml-2"], ["type", "button", 1, "btn", "btn-success", "mb-lg-3", "mr-3", 3, "routerLink"], ["type", "button", 1, "btn", "btn-danger", "mb-lg-3", "mr-3", 3, "routerLink"], [1, "table", "table-striped", "table-bordered", "table-sm", "row-border", "hover", "test", "material", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "sorts", "limit"], ["myFilterTable", ""], ["name", "Image", "prop", "avatar"], ["ngx-datatable-cell-template", ""], ["name", "Employee name", "prop", "name"], ["name", "Email", "prop", "email"], ["name", "Position", "prop", "role"], ["name", "Hire Date", "prop", "hiring_at"], ["name", "Groups", "prop", "groups"], ["name", "Supervisor", "prop", "supervisorname"], ["name", "Actions"], ["alt", "No User Avatar", 1, "img-circle", "elevation-2", "mx-3", 2, "width", "100px", "height", "100px", 3, "src"], [2, "margin-top", "40px"], [1, "btn-group", "btn-group-md", "ml-2", 2, "margin-top", "40px !important", "margin-right", "-7px"], ["type", "button", 1, "btn", "btn-block", "btn-warning", 3, "routerLink"], [1, "btn-group", "btn-group-md", "ml-2", 2, "margin-top", "40px !important", "width", "55px"], ["type", "button", 1, "btn", "btn-block", "btn-danger", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UsersComponent_Template_input_keyup_9_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "See Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngx-datatable", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UsersComponent_ng_template_22_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UsersComponent_ng_template_24_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UsersComponent_ng_template_26_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UsersComponent_ng_template_28_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UsersComponent_ng_template_30_Template, 3, 4, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UsersComponent_ng_template_32_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UsersComponent_ng_template_34_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UsersComponent_ng_template_36_Template, 6, 3, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.filteredUsers)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 150)("sorts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4)))("limit", 3);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jhc2UvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }]; }, { myFilterTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=views-base-base-module-es2015.js.map