import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import tripletsWithZeroSum from "../../src/two-pointers";

export default function Page(){
    let case1 = tripletsWithZeroSum([0, -1, 2, -3, 1]);
    let expected1 = [
        [2, -3, 1],
        [0, -1, 1]
    ];
    let case2 = tripletsWithZeroSum([1, -2, 1, 0, 5]);
    let expected2 = [[1, -2,  1]];
    return (
        <TestLayout>
            { case1.map((triplet, index) =>
                <TestHolder key={index} name='Case 1. Array is [0, -1, 2, -3, 1]' expected={expected1[index].join(' ')} result={triplet.join(' ')}></TestHolder>) }
            { case2.map((triplet, index) =>
                <TestHolder key={index} name='Case 2. Array is [1, -2, 1, 0, 5]' expected={expected2[index].join(' ')} result={triplet.join(' ')}></TestHolder>) }
        </TestLayout>
    );
}