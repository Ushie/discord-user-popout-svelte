function keepSpaces(text: string) {
    return text.replace(/ +/g, function (match) {
        return "\u00a0".repeat(match.length - 1) + " ";
    });
}

export default keepSpaces;
