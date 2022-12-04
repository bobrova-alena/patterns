//Rita and Gosha are playing a game. Rita has n pieces, each of which has the number of points written on it. The chips lie on the table in non-decreasing order of points on them. First, Gosha names the number k, then Rita must choose two chips, the sum of points on which is equal to the given number.

export default function twoSum(array, targetSum) {
    let result=[];
    array.every((element, index)=>{
     const second = targetSum-element;
     if(second<=element){
       const arr = [...array];
       if(index>0){
        if(arr.slice(0,index).indexOf(second)!=-1){
          result=[element, second];
          return false;     
         }
       }
     } else if (index+1<array.length) {
        const arr = [...array];
       if(arr.slice(index+1,array.length-1).indexOf(second)!=-1){
        result=[element, second];
        return false;     
       }
     }

     return true;
    })
    return result;
}