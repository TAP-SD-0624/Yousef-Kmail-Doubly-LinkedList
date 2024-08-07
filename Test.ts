import { DoublyLinkedList } from "./DoubleLinkedList";

let list = new DoublyLinkedList<number>();

list.push(123987);
list.push(12398);
list.push(123891);
list.push(89123798);
list.pop();
// console.log(list.length);
// console.log(list.head?.getValue());
// console.log(list.tail?.getValue());

// let list = new LinkedListNode("hey");
// console.log(list.getValue());
list.insert(1, 12);
list.insert(2, 198);
console.log(list.get(1));
