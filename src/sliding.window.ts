//Given a string, find longest substring in it with no more than n distinct characters.

export function slidingWindow(str: string, n: number) {
    let result = '';
    for(let i = 0; i < str.length; i++ ) {
        let subStr = findSubstr(str, i, n);
        result = result.length > subStr.length ? result: subStr.join('');
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

