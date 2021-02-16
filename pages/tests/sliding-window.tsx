import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import { subsctingsWithNDistinctCharacters as substringsWithNDistinctCharacters } from "../../src/sliding-window";

export default function Page(){
    let case1 = substringsWithNDistinctCharacters('araaci', 2);
    let expected1 = ['araa'];
    let case2 = substringsWithNDistinctCharacters('araaci', 1);
    let expected2 = ['aa'];
    let case3 = substringsWithNDistinctCharacters('cbbebi', 3);
    let expected3 = ['cbbeb', 'bbebi'];


    return (
        <TestLayout>
            {case1.map((str, index)=>
                <TestHolder key={index} name='Case 1. String is araaci' expected={expected1[index]} result={str}></TestHolder>)}
            {case2.map((str, index)=>
                <TestHolder key={index} name='Case 2. String is araaci' expected={expected2[index]} result={str}></TestHolder>)}
            {case3.map((str, index)=>
                <TestHolder key={index} name='Case 3. String is cbbebi' expected={expected3[index]} result={str}></TestHolder>)}
        </TestLayout>
    );
}