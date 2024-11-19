import { expect } from "chai";
import { Add } from "../calculator.js";

describe("String Calculator", () => {
    // Blank string test case
    it("should return 0 for an empty string", () => {
        expect(Add("")).to.equal(0);
    });
});
