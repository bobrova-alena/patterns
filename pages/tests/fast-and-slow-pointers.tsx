import React from "react";
import TestHolder from "../../components/TestHolder/TestHolder";
import TestLayout from "../../components/TestLayout/TestLayout";
import { linkedListCycle, Node } from "../../src/fast-and-slow-pointers";


export default function Page(){
    let head1 = new Node(3);
    let start = head1.add(2);
    let tail = start.add(0).add(-4);
    tail.next = start;
    let case1 = linkedListCycle(head1);

    let head2 = new Node(1);
    let tail2 = head2.add(2);
    tail2.next = head2;
    let case2 = linkedListCycle(head2);

    let head3 = new Node(1);
    head3.add(2).add(3).add(4);
    let case3 = linkedListCycle(head3);
    
    return (
        <TestLayout>
            <TestHolder name='Case 1. [3,2,0,-4], pos = 1' expected={start.value} result={case1.value}></TestHolder>
            <TestHolder name='Case 2. [1,2], pos = 0' expected={head2.value} result={case2.value}></TestHolder>
            <TestHolder name='Case 3. [1,2,3,4], without cycle' expected={'No cycle'} result={case3 == null ? 'No cycle' : case3.value}></TestHolder>
        </TestLayout>
    );
}