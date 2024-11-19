import { expect } from "chai";
import { Add } from "../calculator.js";

describe("String Calculator", () => {
    // Blank string test case
    it("should return 0 for an empty string", () => {
        expect(Add("")).to.equal(0);
    });

    // If there is a single number
    it("should return the number itself for a single number", () => {
        expect(Add("1")).to.equal(1);
        expect(Add(2)).to.equal(2);
        expect(Add("5")).to.equal(5);
    });
});
