function intToRgb(integer: number): [number, number, number] {
    const red = (integer >> (8 * 2)) & 0xff;
    const green = (integer >> 8) & 0xff;
    const blue = integer & 0xff;

    return [red, green, blue];
}

function getThemeColors(theme_colors: [number, number]) {
    const [primaryInt, secondaryInt] = theme_colors ?? [0, 0];
    const [primaryRed, primaryGreen, primaryBlue] = intToRgb(primaryInt);
    const [secondaryRed, secondaryGreen, secondaryBlue] =
        intToRgb(secondaryInt);
    return {
        primaryInt: primaryInt,
        secondaryInt: secondaryInt,
        primaryRed: primaryRed,
        primaryGreen: primaryGreen,
        primaryBlue: primaryBlue,
        secondaryRed: secondaryRed,
        secondaryGreen: secondaryGreen,
        secondaryBlue: secondaryBlue,
    };
}

export default getThemeColors;
