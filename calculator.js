function Add(numbers) {
    // check if variable empty or blank string return 0
    if (!numbers) return 0;

    if (typeof numbers === "number") {
        return numbers;
    }

    // check if variable have only number value
    if (typeof numbers === "string" && /^[0-9]+$/.test(numbers)) {
        return Number(numbers);
    }

    let delimiter = /,|\n/; // Default delimiters: comma and newline

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);

        if (delimiterMatch) {
            delimiter = delimiterMatch[1];

            numbers = numbers.slice(delimiterMatch[0].length);
            delimiter = new RegExp(`[${delimiter.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}]`);
        }
    }

    // Split the numbers string using the delimiters
    const numArray = numbers.split(delimiter).map(Number);

    return numArray.reduce((sum, num) => sum + num, 0); // Sum the numbers
}

export { Add };
