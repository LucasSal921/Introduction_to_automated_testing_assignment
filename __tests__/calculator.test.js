import { divide } from "../src/calculator";
import { describe, it, expect } from "@jest/globals";

describe("divide", () => {
    it("divides two valid numbers", () => {
        expect(divide(2,1)).toBe(2);
    });

    it("throws TypeError when first argument is not a number", () => {
        expect(() => divide("2", 1)).toThrow(TypeError);
        expect(() => divide("2", 1)).toThrow("Both arguments must be numbers");
    });

    it("throws TypeError when second argument is not a number", () => {
        expect(() => divide(2, "1")).toThrow(TypeError);
        expect(() => divide(2, "1")).toThrow("Both arguments must be numbers");
    });

    it("throws TypeError when first argument is NaN", () => {
        expect(() => divide(NaN, 1)).toThrow(TypeError);
        expect(() => divide(NaN, 1)).toThrow("Arguments can't be NaN");
    });

    it("throws TypeError when second argument is NaN", () => {
        expect(() => divide(2, NaN)).toThrow(TypeError);
        expect(() => divide(2, NaN)).toThrow("Arguments can't be NaN");
    });

    it("throws RangeError when dividing by zero", () => {
        expect(() => divide(2, 0)).toThrow(RangeError);
        expect(() => divide(2, 0)).toThrow("Division by zero is not allowed");
    });


    it("throws TypeError when arguments are missing", () => {
        expect(() => divide()).toThrow(TypeError);
    });
}); 