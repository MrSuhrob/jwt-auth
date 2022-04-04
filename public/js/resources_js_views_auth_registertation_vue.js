"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_registertation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/registertation.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/registertation.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FormComponent: (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(function () {
      return __webpack_require__.e(/*! import() */ "resources_js_components_FormComponent_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./../../components/FormComponent.vue */ "./resources/js/components/FormComponent.vue"));
    })
  },
  setup: function setup() {
    var user = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      console.log(user);
    });
    return {
      user: user
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/registertation.vue?vue&type=template&id=457e3bfc":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/registertation.vue?vue&type=template&id=457e3bfc ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-5"
};
var _hoisted_2 = {
  "class": "form-row"
};
var _hoisted_3 = {
  "class": "form-group col-12 mb-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationServer03",
  "class": "mb-1"
}, "Name", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "form-group col-12 mb-4"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationServer03",
  "class": "mb-1"
}, "Login", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "form-group col-12 mb-4"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationServer03",
  "class": "mb-1"
}, "Password", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "form-group col-12 mb-4"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "validationServer03",
  "class": "mb-1"
}, "Password Confirm", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "invalid-feedback"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group d-flex justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-danger px-5 py-3"
}, " Registertation ")], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "loading", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FormComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormComponent");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormComponent, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control p-3",
            id: "validationServer03",
            placeholder: "username",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $setup.user.name = $event;
            }),
            required: ""
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.name]]), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control p-3",
            id: "validationServer03",
            placeholder: "username@email.com",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $setup.user.email = $event;
            }),
            required: ""
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.email]]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "password",
            "class": "form-control p-3",
            id: "validationServer03",
            placeholder: "********",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $setup.user.password = $event;
            }),
            required: ""
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.password]]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "password",
            "class": "form-control p-3",
            id: "validationServer03",
            placeholder: "********",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $setup.user.password_confirmation = $event;
            }),
            required: ""
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.user.password_confirmation]]), _hoisted_14])]), _hoisted_15])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    fallback: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/views/auth/registertation.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/registertation.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _registertation_vue_vue_type_template_id_457e3bfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registertation.vue?vue&type=template&id=457e3bfc */ "./resources/js/views/auth/registertation.vue?vue&type=template&id=457e3bfc");
/* harmony import */ var _registertation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registertation.vue?vue&type=script&lang=js */ "./resources/js/views/auth/registertation.vue?vue&type=script&lang=js");
/* harmony import */ var C_projects_jwt_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_projects_jwt_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_registertation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_registertation_vue_vue_type_template_id_457e3bfc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/auth/registertation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/auth/registertation.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/auth/registertation.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registertation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registertation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./registertation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/registertation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/auth/registertation.vue?vue&type=template&id=457e3bfc":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/auth/registertation.vue?vue&type=template&id=457e3bfc ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registertation_vue_vue_type_template_id_457e3bfc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_registertation_vue_vue_type_template_id_457e3bfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./registertation.vue?vue&type=template&id=457e3bfc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/auth/registertation.vue?vue&type=template&id=457e3bfc");


/***/ })

}]);