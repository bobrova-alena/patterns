import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import longestCommonPrefix from "../../src/longest-common-prefix";

export default function Page(){
    let case1 = longestCommonPrefix(["flower","flow","flight"]);
    let expected1 = "fl";
    
    return <TestLayout>
        <TestHolder name={'longestCommonPrefix(["flower","flow","flight"])'} expected={expected1} result={case1}/>
    </TestLayout>
}