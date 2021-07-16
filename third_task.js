const formatText = (rawWordsArrays, alignments, charsLimit = 16) => {
    let preparedStrings = [];

    for(let i = 0; i < rawWordsArrays.length; i += 1) {
        const dividedStrings = divideStrings(rawWordsArrays[i], charsLimit);
        const alignedStrings = alignStrings(dividedStrings, alignments[i], charsLimit);
        preparedStrings = [...preparedStrings, ...alignedStrings];
    }

    return putTextInBorder(preparedStrings);
}

const alignStrings = (strings, alignment, charsLimit) => {
    const alignedStrs = [];
    const marginGaps = { LEFT: "", RIGHT: "" };
    
    for (let i = 0; i < strings.length; i += 1) {
        marginGaps[alignment] = " ".repeat(charsLimit - strings[i].length);
        alignedStrs[i] = marginGaps.RIGHT + strings[i] + marginGaps.LEFT;
    }

    return alignedStrs;
}

const divideStrings = (rawWordsArray, charsLimit) => {
    const dividedStrs = [];
    let accumStr = rawWordsArray[0];

    for(let i = 1; i < rawWordsArray.length; i += 1) {
        if ((accumStr.length + 1 + rawWordsArray[i].length) < charsLimit) {
            accumStr = accumStr + " " + rawWordsArray[i];
        } else {
            dividedStrs.push(accumStr);
            accumStr = rawWordsArray[i];
        }
    }

    dividedStrs.push(accumStr);
    return dividedStrs;
}

const putTextInBorder = (strings, borderElem = "*") => {
    const horizontalLine = borderElem.repeat(strings[0].length);
    const borderedText = [horizontalLine, ...strings, horizontalLine];
    
    for (let i = 0; i < borderedText.length; i += 1) {
        borderedText[i] = borderElem + borderedText[i] + borderElem;
    }

    return borderedText;
}

export default formatText;
