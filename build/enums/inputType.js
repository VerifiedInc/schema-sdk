"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputType = void 0;
/**
 * Enumerates the types of inputs that we use to collect data from users.
 * Used to determine the type of input to render in the UI for a given credential type.
 */
var InputType;
(function (InputType) {
    InputType["Text"] = "Text";
    InputType["Number"] = "Number";
    InputType["Date"] = "Date";
    InputType["DateTime"] = "DateTime";
    InputType["Select"] = "Select";
    InputType["Email"] = "Email";
    InputType["Phone"] = "Phone";
    InputType["SSN"] = "SSN";
    InputType["Image"] = "Image";
    InputType["File"] = "File"; // file input
})(InputType = exports.InputType || (exports.InputType = {}));
//# sourceMappingURL=inputType.js.map