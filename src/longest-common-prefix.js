export default function longestCommonPrefix(strs){
    if(strs.length>0){
        let prefix='';
        let endOfLowestStringIsRiched = false;
        let j=0;
        let areEqual=true;
    
    while(!endOfLowestStringIsRiched){
        if(j<strs[0].length){
            const current = strs[0][j];
            strs.every(item=>{
                if(j<item.length){
                    areEqual = item[j]==current;
                    return areEqual;
                }else{
                    areEqual = false;
                    endOfLowestStringIsRiched = true;
                    return false;
                }
            });
            if(areEqual){
                prefix+=current;
            }else{
                endOfLowestStringIsRiched = true;
            }
        }else{
            endOfLowestStringIsRiched = true;
        }
        
        j++;
    }  
    return prefix;
    }else {
      return '';
    }
}