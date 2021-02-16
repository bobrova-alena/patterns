//Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

export default function tripletsWithZeroSum(arr: number[]): number[][] {
    let sortedArr =[...arr].sort((a,b) => a - b);
    let triplets = [];
    let secondPointer = sortedArr.length - 1;

    for(let i = 0; i < sortedArr.length - 3; i++) {
        for(; secondPointer > 2; secondPointer--) {
            let sum = sortedArr[i] + sortedArr[secondPointer-1] + sortedArr[secondPointer];
            if(sum == 0) {
                triplets.push(arr.filter(element=>element == sortedArr[i] || element == sortedArr[secondPointer-1] || element == sortedArr[secondPointer]));
                break;
            }
        }
    }

    return triplets;
}