import defaultPhrases from '../data/defaultPhrases';
import defaultColors from '../data/defaultColors';

const MIN_LIST_SIZE = 200;

const parseSpreadsheetData = (result) => {
    var phrasesData = [];
    var colorsData = [];

    const resultData = result != null
            && result.data != null
            && result.data.values != null
        ? result.data.values
    : [];

    resultData.forEach((item) => {
        if (item && item.length > 0) {
            phrasesData.push(item[0]);
        }

        if (item && item.length > 1) {
            colorsData.push(item[1]);
        }
    });

    return validatePhrasesAndColors(phrasesData, colorsData);
};

const validatePhrasesAndColors = (phrasesData, colorsData) => {

    if (phrasesData == null || phrasesData.length <= 0) {
        phrasesData = defaultPhrases.slice();
    }

    if (colorsData == null || colorsData.length <= 0) {
        colorsData = defaultColors.slice();
    }

    if (phrasesData.length < MIN_LIST_SIZE) {
        phrasesData = duplicateList(phrasesData);
    }

    if (colorsData.length < MIN_LIST_SIZE) {
        colorsData = duplicateList(colorsData);
    }

    return [phrasesData, colorsData];
}

const duplicateList = (list) => {
    if (list == null || list.length < 1
            || list.length >= MIN_LIST_SIZE) {
        return list;
    }

    return duplicateList(list.concat(list));
}

export {
    parseSpreadsheetData,
    duplicateList,
    validatePhrasesAndColors
}
