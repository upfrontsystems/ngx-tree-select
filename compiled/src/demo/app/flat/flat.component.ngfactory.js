/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@angular/forms';
import * as i3 from '../../../../../src/demo/app/flat/flat.component';
import * as i4 from '../../../ngx-tree-select/src/components/tree-select.component.ngfactory';
import * as i5 from '../../../../../src/ngx-tree-select/src/services/select.service';
import * as i6 from '../../../../../src/ngx-tree-select/src/components/tree-select.component';
import * as i7 from '../../../../../src/ngx-tree-select/src/models/tree-select-default-options';
var styles_FlatComponent = [];
export var RenderType_FlatComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_FlatComponent, data: {} });
function View_FlatComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, 'div', [['class',
                'alert alert-danger']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(),
            i0.ɵeld(2, 0, null, null, 1, 'div', [], [[8, 'hidden', 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['Simple select is required'])), (_l()(), i0.ɵted(-1, null, ['\n        ']))], null, function (_ck, _v) {
        var currVal_0 = !i0.ɵnov(_v.parent, 27).errors.required;
        _ck(_v, 2, 0, currVal_0);
    });
}
function View_FlatComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, 'div', [['class',
                'alert alert-danger']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(),
            i0.ɵeld(2, 0, null, null, 1, 'div', [], [[8, 'hidden', 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['Multiple select is required'])), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(), i0.ɵeld(5, 0, null, null, 1, 'div', [], [[8, 'hidden', 0]], null, null, null, null)), (_l()(),
            i0.ɵted(-1, null, ['You must choose at least 2 items on Multiple select'])),
        (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(), i0.ɵeld(8, 0, null, null, 1, 'div', [], [[8, 'hidden', 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['You must choose maximum 4 items on Multiple select'])),
        (_l()(), i0.ɵted(-1, null, ['\n        ']))], null, function (_ck, _v) {
        var currVal_0 = !i0.ɵnov(_v.parent, 62).errors.required;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = !i0.ɵnov(_v.parent, 62).errors.minlength;
        _ck(_v, 5, 0, currVal_1);
        var currVal_2 = !i0.ɵnov(_v.parent, 62).errors.maxlength;
        _ck(_v, 8, 0, currVal_2);
    });
}
function View_FlatComponent_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, 'li', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(1, null, ['', ''])), i0.ɵpid(0, i1.JsonPipe, [])], null, function (_ck, _v) {
        var currVal_0 = i0.ɵunv(_v, 1, 0, i0.ɵnov(_v, 2).transform(_v.context.$implicit));
        _ck(_v, 1, 0, currVal_0);
    });
}
export function View_FlatComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 137, 'div', [['class',
                'container']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵeld(2, 0, null, null, 4, 'div', [['class', 'page-header']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(4, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['Exemple ngx-tree-select with flat datas'])),
        (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵeld(8, 0, null, null, 31, 'div', [['class',
                'panel panel-default']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(10, 0, null, null, 1, 'div', [['class', 'panel-heading']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['Simple select'])), (_l()(), i0.ɵted(-1, null, ['\n    '])),
        (_l()(), i0.ɵeld(13, 0, null, null, 25, 'div', [['class', 'panel-body']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵeld(15, 0, null, null, 18, 'form', [['novalidate', '']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'submit'], [null,
                'reset']], function (_v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (i0.ɵnov(_v, 17).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i0.ɵnov(_v, 17).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16, 16384, null, 0, i2.ɵbf, [], null, null), i0.ɵdid(17, 16384, null, 0, i2.NgForm, [[8, null], [8, null]], null, null),
        i0.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i0.ɵdid(19, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(),
            i0.ɵeld(21, 0, null, null, 8, 'tree-select', [['childrenField',
                    'children'], ['name', 'simpleSelect'], ['required', 'true']], [[1, 'required',
                    0], [2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                    'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                    null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('ngModelChange' === en)) {
                    var pd_0 = ((_co.simpleSelected = $event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, i4.View_TreeSelectComponent_0, i4.RenderType_TreeSelectComponent)),
        i0.ɵdid(22, 16384, null, 0, i2.RequiredValidator, [], { required: [0,
                'required'] }, null), i0.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) {
            return [p0_0];
        }, [i2.RequiredValidator]), i0.ɵprd(512, null, i5.SelectService, i5.SelectService, []), i0.ɵdid(25, 49152, null, 0, i6.TreeSelectComponent, [i5.SelectService,
            i7.TreeSelectDefaultOptions], { disabled: [0, 'disabled'], filterPlaceholder: [1,
                'filterPlaceholder'], allowFilter: [2, 'allowFilter'], items: [3, 'items'], childrenField: [4,
                'childrenField'] }, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i6.TreeSelectComponent]), i0.ɵdid(27, 671744, [['simpleSelect', 4]], 0, i2.NgModel, [[2, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'], isDisabled: [1, 'isDisabled'], model: [2, 'model'] }, { update: 'ngModelChange' }),
        i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(29, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FlatComponent_1)), i0.ɵdid(32, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵeld(35, 0, null, null, 2, 'div', [['class', 'col-md-12']], null, null, null, null, null)), (_l()(), i0.ɵted(36, null, ['\n        ', '\n      '])),
        i0.ɵpid(0, i1.JsonPipe, []), (_l()(), i0.ɵted(-1, null, ['\n    '])),
        (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵeld(41, 0, null, null, 36, 'div', [['class',
                'panel panel-default']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(43, 0, null, null, 1, 'div', [['class', 'panel-heading']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['Multiple select'])), (_l()(), i0.ɵted(-1, null, ['\n    '])),
        (_l()(), i0.ɵeld(46, 0, null, null, 30, 'div', [['class', 'panel-body']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵeld(48, 0, null, null, 21, 'form', [['novalidate', '']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'submit'], [null,
                'reset']], function (_v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (i0.ɵnov(_v, 50).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i0.ɵnov(_v, 50).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(49, 16384, null, 0, i2.ɵbf, [], null, null), i0.ɵdid(50, 16384, null, 0, i2.NgForm, [[8, null], [8, null]], null, null),
        i0.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i0.ɵdid(52, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(),
            i0.ɵeld(54, 0, null, null, 11, 'tree-select', [['childrenField',
                    'children'], ['filterPlaceholder', 'Type item filter...'], ['maxlength',
                    '4'], ['minlength', '2'], ['name', 'multipleSelect'], ['required', 'true']], [[1, 'required', 0], [1, 'minlength', 0], [1, 'maxlength', 0], [2, 'ng-untouched',
                    null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
                [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                    null], [2, 'ng-pending', null]], [[null,
                    'ngModelChange']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('ngModelChange' === en)) {
                    var pd_0 = ((_co.multipleSelected = $event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, i4.View_TreeSelectComponent_0, i4.RenderType_TreeSelectComponent)),
        i0.ɵdid(55, 16384, null, 0, i2.RequiredValidator, [], { required: [0,
                'required'] }, null), i0.ɵdid(56, 540672, null, 0, i2.MinLengthValidator, [], { minlength: [0, 'minlength'] }, null), i0.ɵdid(57, 540672, null, 0, i2.MaxLengthValidator, [], { maxlength: [0, 'maxlength'] }, null), i0.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0, p1_0, p2_0) {
            return [p0_0, p1_0, p2_0];
        }, [i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator]), i0.ɵprd(512, null, i5.SelectService, i5.SelectService, []), i0.ɵdid(60, 49152, null, 0, i6.TreeSelectComponent, [i5.SelectService, i7.TreeSelectDefaultOptions], { disabled: [0, 'disabled'], filterPlaceholder: [1, 'filterPlaceholder'], allowFilter: [2,
                'allowFilter'], items: [3, 'items'], childrenField: [4, 'childrenField'], multiple: [5,
                'multiple'], maxVisibleItemCount: [6, 'maxVisibleItemCount'] }, null),
        i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i6.TreeSelectComponent]), i0.ɵdid(62, 671744, [['multipleSelect', 4]], 0, i2.NgModel, [[2, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'], isDisabled: [1, 'isDisabled'], model: [2, 'model'] }, { update: 'ngModelChange' }),
        i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(64, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FlatComponent_2)), i0.ɵdid(68, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵeld(71, 0, null, null, 4, 'div', [['class', 'col-md-12']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_FlatComponent_3)),
        i0.ɵdid(74, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵted(-1, null, ['\n    '])),
        (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵeld(79, 0, null, null, 57, 'div', [['class',
                'panel panel-default']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(81, 0, null, null, 1, 'div', [['class', 'panel-heading']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['Options'])), (_l()(), i0.ɵted(-1, null, ['\n    '])),
        (_l()(), i0.ɵeld(84, 0, null, null, 51, 'div', [['class', 'panel-body']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵeld(86, 0, null, null, 48, 'form', [['class', 'form-horizontal'], ['novalidate', ''], ['style',
                'margin:15px']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (i0.ɵnov(_v, 88).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i0.ɵnov(_v, 88).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(87, 16384, null, 0, i2.ɵbf, [], null, null), i0.ɵdid(88, 16384, null, 0, i2.NgForm, [[8, null], [8, null]], null, null),
        i0.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i0.ɵdid(90, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(),
            i0.ɵeld(92, 0, null, null, 12, 'div', [['class', 'form-group']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(), i0.ɵeld(94, 0, null, null, 1, 'label', [['for', 'MaxDisplayed']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['Max elements displayed'])), (_l()(), i0.ɵted(-1, null, ['\n          '])),
        (_l()(), i0.ɵeld(97, 0, null, null, 6, 'input', [['class', 'form-control'],
            ['id', 'MaxDisplayed'], ['name', 'MaxDisplayed'], ['type', 'number']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngModelChange'],
            [null, 'input'], [null, 'blur'], [null, 'compositionstart'],
            [null, 'compositionend'], [null, 'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 98)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 98).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 98)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 98)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('change' === en)) {
                var pd_4 = (i0.ɵnov(_v, 99).onChange($event.target.value) !== false);
                ad = (pd_4 && ad);
            }
            if (('input' === en)) {
                var pd_5 = (i0.ɵnov(_v, 99).onChange($event.target.value) !== false);
                ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
                var pd_6 = (i0.ɵnov(_v, 99).onTouched() !== false);
                ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_7 = ((_co.MaxDisplayed = $event) !== false);
                ad = (pd_7 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(98, 16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵdid(99, 16384, null, 0, i2.ɵbc, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) {
            return [p0_0, p1_0];
        }, [i2.DefaultValueAccessor, i2.ɵbc]), i0.ɵdid(101, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'], model: [1, 'model'] }, { update: 'ngModelChange' }), i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(103, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(106, 0, null, null, 11, 'div', [['class', 'form-group']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(),
            i0.ɵeld(108, 0, null, null, 1, 'label', [['for', 'FilterPlaceholder']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['Filter'])), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(), i0.ɵeld(111, 0, null, null, 5, 'input', [['class', 'form-control'], ['id', 'FilterPlaceholder'], ['name', 'FilterPlaceholder'],
            ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (i0.ɵnov(_v, 112)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 112).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i0.ɵnov(_v, 112)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i0.ɵnov(_v, 112)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((_co.FilterPlaceholder = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(112, 16384, null, 0, i2.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i0.ɵdid(114, 671744, null, 0, i2.NgModel, [[2,
                i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'], isDisabled: [1, 'isDisabled'], model: [2, 'model'] }, { update: 'ngModelChange' }),
        i0.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i0.ɵdid(116, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(119, 0, null, null, 6, 'div', [['class', 'checkbox']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(),
            i0.ɵeld(121, 0, null, null, 3, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n              '])), (_l()(), i0.ɵeld(123, 0, null, null, 0, 'input', [['type', 'checkbox']], [[8, 'checked', 0]], [[null,
                'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('change' === en)) {
                var pd_0 = ((_co.ShowFilter = $event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, [' Show filter\n            '])),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(127, 0, null, null, 6, 'div', [['class', 'checkbox']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n          '])), (_l()(),
            i0.ɵeld(129, 0, null, null, 3, 'label', [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n              '])), (_l()(), i0.ɵeld(131, 0, null, null, 0, 'input', [['type', 'checkbox']], [[8, 'checked', 0]], [[null,
                'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('change' === en)) {
                var pd_0 = ((_co.Disabled = $event.target.checked) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, [' Disabled\n            '])),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵted(-1, null, ['\n      '])), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵted(-1, null, ['\n  '])), (_l()(), i0.ɵted(-1, null, ['\n'])), (_l()(),
            i0.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_15 = 'true';
        _ck(_v, 22, 0, currVal_15);
        var currVal_16 = _co.Disabled;
        var currVal_17 = _co.FilterPlaceholder;
        var currVal_18 = _co.ShowFilter;
        var currVal_19 = _co.items;
        var currVal_20 = 'children';
        _ck(_v, 25, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);
        var currVal_21 = 'simpleSelect';
        var currVal_22 = _co.Disabled;
        var currVal_23 = _co.simpleSelected;
        _ck(_v, 27, 0, currVal_21, currVal_22, currVal_23);
        var currVal_24 = (i0.ɵnov(_v, 27).errors && (i0.ɵnov(_v, 27).dirty || i0.ɵnov(_v, 27).touched));
        _ck(_v, 32, 0, currVal_24);
        var currVal_43 = 'true';
        _ck(_v, 55, 0, currVal_43);
        var currVal_44 = '2';
        _ck(_v, 56, 0, currVal_44);
        var currVal_45 = '4';
        _ck(_v, 57, 0, currVal_45);
        var currVal_46 = _co.Disabled;
        var currVal_47 = _co.FilterPlaceholder;
        var currVal_48 = _co.ShowFilter;
        var currVal_49 = _co.items;
        var currVal_50 = 'children';
        var currVal_51 = true;
        var currVal_52 = _co.MaxDisplayed;
        _ck(_v, 60, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52);
        var currVal_53 = 'multipleSelect';
        var currVal_54 = _co.Disabled;
        var currVal_55 = _co.multipleSelected;
        _ck(_v, 62, 0, currVal_53, currVal_54, currVal_55);
        var currVal_56 = (i0.ɵnov(_v, 62).errors && (i0.ɵnov(_v, 62).dirty || i0.ɵnov(_v, 62).touched));
        _ck(_v, 68, 0, currVal_56);
        var currVal_57 = _co.multipleSelected;
        _ck(_v, 74, 0, currVal_57);
        var currVal_72 = 'MaxDisplayed';
        var currVal_73 = _co.MaxDisplayed;
        _ck(_v, 101, 0, currVal_72, currVal_73);
        var currVal_81 = 'FilterPlaceholder';
        var currVal_82 = !_co.ShowFilter;
        var currVal_83 = _co.FilterPlaceholder;
        _ck(_v, 114, 0, currVal_81, currVal_82, currVal_83);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i0.ɵnov(_v, 19).ngClassUntouched;
        var currVal_1 = i0.ɵnov(_v, 19).ngClassTouched;
        var currVal_2 = i0.ɵnov(_v, 19).ngClassPristine;
        var currVal_3 = i0.ɵnov(_v, 19).ngClassDirty;
        var currVal_4 = i0.ɵnov(_v, 19).ngClassValid;
        var currVal_5 = i0.ɵnov(_v, 19).ngClassInvalid;
        var currVal_6 = i0.ɵnov(_v, 19).ngClassPending;
        _ck(_v, 15, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = (i0.ɵnov(_v, 22).required ? '' : null);
        var currVal_8 = i0.ɵnov(_v, 29).ngClassUntouched;
        var currVal_9 = i0.ɵnov(_v, 29).ngClassTouched;
        var currVal_10 = i0.ɵnov(_v, 29).ngClassPristine;
        var currVal_11 = i0.ɵnov(_v, 29).ngClassDirty;
        var currVal_12 = i0.ɵnov(_v, 29).ngClassValid;
        var currVal_13 = i0.ɵnov(_v, 29).ngClassInvalid;
        var currVal_14 = i0.ɵnov(_v, 29).ngClassPending;
        _ck(_v, 21, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_25 = i0.ɵunv(_v, 36, 0, i0.ɵnov(_v, 37).transform(_co.simpleSelected));
        _ck(_v, 36, 0, currVal_25);
        var currVal_26 = i0.ɵnov(_v, 52).ngClassUntouched;
        var currVal_27 = i0.ɵnov(_v, 52).ngClassTouched;
        var currVal_28 = i0.ɵnov(_v, 52).ngClassPristine;
        var currVal_29 = i0.ɵnov(_v, 52).ngClassDirty;
        var currVal_30 = i0.ɵnov(_v, 52).ngClassValid;
        var currVal_31 = i0.ɵnov(_v, 52).ngClassInvalid;
        var currVal_32 = i0.ɵnov(_v, 52).ngClassPending;
        _ck(_v, 48, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);
        var currVal_33 = (i0.ɵnov(_v, 55).required ? '' : null);
        var currVal_34 = (i0.ɵnov(_v, 56).minlength ? i0.ɵnov(_v, 56).minlength : null);
        var currVal_35 = (i0.ɵnov(_v, 57).maxlength ? i0.ɵnov(_v, 57).maxlength : null);
        var currVal_36 = i0.ɵnov(_v, 64).ngClassUntouched;
        var currVal_37 = i0.ɵnov(_v, 64).ngClassTouched;
        var currVal_38 = i0.ɵnov(_v, 64).ngClassPristine;
        var currVal_39 = i0.ɵnov(_v, 64).ngClassDirty;
        var currVal_40 = i0.ɵnov(_v, 64).ngClassValid;
        var currVal_41 = i0.ɵnov(_v, 64).ngClassInvalid;
        var currVal_42 = i0.ɵnov(_v, 64).ngClassPending;
        _ck(_v, 54, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42);
        var currVal_58 = i0.ɵnov(_v, 90).ngClassUntouched;
        var currVal_59 = i0.ɵnov(_v, 90).ngClassTouched;
        var currVal_60 = i0.ɵnov(_v, 90).ngClassPristine;
        var currVal_61 = i0.ɵnov(_v, 90).ngClassDirty;
        var currVal_62 = i0.ɵnov(_v, 90).ngClassValid;
        var currVal_63 = i0.ɵnov(_v, 90).ngClassInvalid;
        var currVal_64 = i0.ɵnov(_v, 90).ngClassPending;
        _ck(_v, 86, 0, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64);
        var currVal_65 = i0.ɵnov(_v, 103).ngClassUntouched;
        var currVal_66 = i0.ɵnov(_v, 103).ngClassTouched;
        var currVal_67 = i0.ɵnov(_v, 103).ngClassPristine;
        var currVal_68 = i0.ɵnov(_v, 103).ngClassDirty;
        var currVal_69 = i0.ɵnov(_v, 103).ngClassValid;
        var currVal_70 = i0.ɵnov(_v, 103).ngClassInvalid;
        var currVal_71 = i0.ɵnov(_v, 103).ngClassPending;
        _ck(_v, 97, 0, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71);
        var currVal_74 = i0.ɵnov(_v, 116).ngClassUntouched;
        var currVal_75 = i0.ɵnov(_v, 116).ngClassTouched;
        var currVal_76 = i0.ɵnov(_v, 116).ngClassPristine;
        var currVal_77 = i0.ɵnov(_v, 116).ngClassDirty;
        var currVal_78 = i0.ɵnov(_v, 116).ngClassValid;
        var currVal_79 = i0.ɵnov(_v, 116).ngClassInvalid;
        var currVal_80 = i0.ɵnov(_v, 116).ngClassPending;
        _ck(_v, 111, 0, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80);
        var currVal_84 = _co.ShowFilter;
        _ck(_v, 123, 0, currVal_84);
        var currVal_85 = _co.Disabled;
        _ck(_v, 131, 0, currVal_85);
    });
}
export function View_FlatComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'flat-sample', [], null, null, null, View_FlatComponent_0, RenderType_FlatComponent)), i0.ɵdid(1, 49152, null, 0, i3.FlatComponent, [], null, null)], null, null);
}
export var FlatComponentNgFactory = i0.ɵccf('flat-sample', i3.FlatComponent, View_FlatComponent_Host_0, {}, {}, []);
//# sourceMappingURL=flat.component.ngfactory.js.map