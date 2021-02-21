// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

export function linkedListCycle(head: Node) {
    let check = (node: Node) => {
        let current = head;

        while (current !== node){
            if(node.next === current && current.next !== node)
                return current;

            current = current.next;
        }

        return null;
    };

    let current = head;
    while(current){
        let start = check(current);
        if(start)
            return start;

        if(current.next === head)
            return head;

        current = current.next;
    }

    return null;
}

export class Node {
    next: Node;

    constructor(public value: any) {
    }

    add(value: any) {
        let node = new Node(value);
        this.next = node;
        return node;
    }
}