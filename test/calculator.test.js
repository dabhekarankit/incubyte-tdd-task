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

    // Sum of comma separated values
    it("should return the sum of comma separated numbers", () => {
        expect(Add("1,2")).to.equal(3);
        expect(Add("10,20")).to.equal(30);
    });

    // Sum of comma and \n separated values
    it("should return the sum of comma and slash n separated numbers", () => {
        expect(Add("1\n2,3")).to.equal(6);
    });

    // Custom delimiters
    it("should support custom single-character delimiters", () => {
        expect(Add("//;\n1;2")).to.equal(3);
        expect(Add("//;\n2;2")).to.equal(4);
        expect(Add("//;\n2;2;1")).to.equal(5);
    });

    // Negative number exception for single negative number
    it("should throw an exception for a single negative number", () => {
        expect(() => Add("1,-2")).to.throw("Negatives not allowed: -2");
    });

    // Negative number exception for multiple negative number
    it("should throw an exception for multiple negative numbers", () => {
        expect(() => Add("-1,-2,3,-4")).to.throw("Negatives not allowed: -1, -2, -4");
    });

    // ignore number grater than 1000
    it("should ignore numbers greater than 1000", () => {
        expect(Add("2,1001")).to.equal(2);
        expect(Add("1000,1001,999")).to.equal(1999);
        expect(Add("//;\n1000;1001;1")).to.equal(1001);
    });
});
