

function stripSpecialCharacter(str) {
    return str.replace(/[^a-zA-Záéíóñ ]/g, "");
}

class Marker {
    static findDifferences(input, expected, isStrict = false) {
        input = stripSpecialCharacter(input);
        expected = stripSpecialCharacter(expected);
        let diffs = [];
        expected.split(" ").forEach(function (expectedWord, i) {
            let inputWord = input.split(" ")[i];
            if (expectedWord !== inputWord) {
                diffs.push(expectedWord);
            }
        });
        return diffs;
    }
}

export default Marker