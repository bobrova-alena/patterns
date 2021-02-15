import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import { slidingWindow } from "../../src/sliding.window";

export default function Page(){
    return (
        <TestLayout>
            <TestHolder name='Case 1. String is araaci' expected='araa' result={slidingWindow('araaci', 2)}></TestHolder>
            <TestHolder name='Case 2. String is araaci' expected='aa' result={slidingWindow('araaci', 1)}></TestHolder>
            <TestHolder name='Case 3. String is cbbebi' expected='bbebi' result={slidingWindow('cbbebi', 3)}></TestHolder>
        </TestLayout>
    );
}