//Given a string, find longest substrings in it with no more than n distinct characters.

export function subsctingsWithNDistinctCharacters(str: string, n: number) : string[] {
    let result = [];
    let maxSubstr = '';
    for(let i = 0; i < str.length; i++ ) {
        let subStr = findSubstr(str, i, n).join('');
        if(subStr.length > maxSubstr.length) {
            result = [subStr];
            maxSubstr = subStr;
        } else if(subStr.length == maxSubstr.length) {
            result.push(subStr);
            maxSubstr = subStr;
        }
    }

    return result;
}

function findSubstr(str: string, startIndex: number, n: number) {
    let subStr = [];
    let set = new Set();
    for(let i = startIndex; i < str.length; i++) {
        let letter = str[i];
        if(set.size < n) {
            subStr.push(letter);
            set.add(letter);
        } else {
            if(set.has(letter)) {
                subStr.push(letter);
            } else {
                break;
            }
        }
    }
    return subStr;
}

