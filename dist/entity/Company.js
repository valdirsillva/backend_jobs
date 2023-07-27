"use strict";
/* eslint-disable prettier/prettier */
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description_text ? "[".concat(name.description_text, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const typeorm_1 = require("typeorm");
let Company = exports.Company = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _cnpj_decorators;
    let _cnpj_initializers = [];
    let _quantityEmployee_decorators;
    let _quantityEmployee_initializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _cep_decorators;
    let _cep_initializers = [];
    let _phone_decorators;
    let _phone_initializers = [];
    let _road_decorators;
    let _road_initializers = [];
    let _city_decorators;
    let _city_initializers = [];
    let _state_decorators;
    let _state_initializers = [];
    var Company = _classThis = class {
        constructor() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.cnpj = __runInitializers(this, _cnpj_initializers, void 0);
            this.quantityEmployee = __runInitializers(this, _quantityEmployee_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.cep = __runInitializers(this, _cep_initializers, void 0);
            this.phone = __runInitializers(this, _phone_initializers, void 0);
            this.road = __runInitializers(this, _road_initializers, void 0);
            this.city = __runInitializers(this, _city_initializers, void 0);
            this.state = __runInitializers(this, _state_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Company");
    (() => {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _cnpj_decorators = [(0, typeorm_1.Column)()];
        _quantityEmployee_decorators = [(0, typeorm_1.Column)()];
        _email_decorators = [(0, typeorm_1.Column)()];
        _cep_decorators = [(0, typeorm_1.Column)()];
        _phone_decorators = [(0, typeorm_1.Column)()];
        _road_decorators = [(0, typeorm_1.Column)()];
        _city_decorators = [(0, typeorm_1.Column)()];
        _state_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cnpj_decorators, { kind: "field", name: "cnpj", static: false, private: false, access: { has: obj => "cnpj" in obj, get: obj => obj.cnpj, set: (obj, value) => { obj.cnpj = value; } } }, _cnpj_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _quantityEmployee_decorators, { kind: "field", name: "quantityEmployee", static: false, private: false, access: { has: obj => "quantityEmployee" in obj, get: obj => obj.quantityEmployee, set: (obj, value) => { obj.quantityEmployee = value; } } }, _quantityEmployee_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _cep_decorators, { kind: "field", name: "cep", static: false, private: false, access: { has: obj => "cep" in obj, get: obj => obj.cep, set: (obj, value) => { obj.cep = value; } } }, _cep_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: obj => "phone" in obj, get: obj => obj.phone, set: (obj, value) => { obj.phone = value; } } }, _phone_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _road_decorators, { kind: "field", name: "road", static: false, private: false, access: { has: obj => "road" in obj, get: obj => obj.road, set: (obj, value) => { obj.road = value; } } }, _road_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _city_decorators, { kind: "field", name: "city", static: false, private: false, access: { has: obj => "city" in obj, get: obj => obj.city, set: (obj, value) => { obj.city = value; } } }, _city_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: obj => "state" in obj, get: obj => obj.state, set: (obj, value) => { obj.state = value; } } }, _state_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Company = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Company = _classThis;
})();
