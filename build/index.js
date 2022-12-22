"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorFactory = exports.types = exports.emailCredentialSchema = void 0;
const schemas_1 = require("./schemas");
Object.defineProperty(exports, "emailCredentialSchema", { enumerable: true, get: function () { return schemas_1.emailCredentialSchema; } });
// import { EmailCredentialSchemaType } from './types';
const types_1 = __importDefault(require("./types"));
exports.types = types_1.default;
const validatorFactory_1 = require("./validatorFactory");
Object.defineProperty(exports, "validatorFactory", { enumerable: true, get: function () { return validatorFactory_1.validatorFactory; } });
//# sourceMappingURL=index.js.map