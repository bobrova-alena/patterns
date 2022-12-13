import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import romanToInteger from "../../src/roman-to-integer";

export default function Page(){
    const case1=romanToInteger('MCMXCIV');
    const expected1=1994;

    return <TestLayout>
        <TestHolder name={`romanToInteger('MCMXCIV')`} expected={expected1} result={case1}/>
    </TestLayout>
}