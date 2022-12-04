import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import twoSum from '../../src/two-sum';

export default function Page(){
    let case1 = twoSum([-96, -93, -39, -30, -11, 11, 22, 40, 67, 84], -186);
    let expected1 = [];
    
    return <TestLayout>
        <TestHolder name={'twoSum([-96, -93, -39, -30, -11, 11, 22, 40, 67, 84], -186)'} expected={expected1.join(' ')} result={case1.join(' ')}/>
    </TestLayout>
}