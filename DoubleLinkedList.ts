import { LinkedListNode } from "./LinkedListNode";
export class DoublyLinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  current: LinkedListNode<T>;
  length: number;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push = (item: T) => {
    if (this.head === null) {
      this.head = new LinkedListNode<T>(item);
      this.tail = this.head;
    } else {
      this.tail?.setNext(new LinkedListNode<T>(item));
      this.tail = this.tail ? this.tail.getNext() : null;
    }
    this.length++;
  };

  pop = () => {
    if (this.tail === null) return;
    this.tail = this.tail.getBack();
    this.tail ? this.tail.setBack(null) : (this.tail = null);
    this.length--;
  };

  get = (index: number) => {
    return this.GetNodeAtIndex(index).getValue();
  };

  set = (index: number, value: T) => {
    this.GetNodeAtIndex(index).setValue(value);
  };

  insert = (index: number, value: T) => {
    if (index === 0) {
      let node = new LinkedListNode(value);
      node.setNext(this.head);
      this.head = node;
      return true;
    }

    let node = this.GetNodeAtIndex(index - 1);

    if (node === null) return false;

    let insertedNode = new LinkedListNode(value);
    insertedNode.setNext(node.getNext());
    node.setNext(insertedNode);

    if (this.tail === node) this.tail = insertedNode;
    return true;
  };

  remove = (index: number) => {
    let node = this.GetNodeAtIndex(index);
    if (node === this.head) {
      this.head = this.head.getNext();
    } else if (node === this.tail) {
      this.tail = this.tail.getBack();
    } else {
      let prev = node.getBack();
      let next = node.getNext();
      prev.setNext(next);
      next.setBack(prev);
    }
  };

  private GetNodeAtIndex = (index: number) => {
    let node: LinkedListNode<T>;
    node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.getNext();
    }
    return node;
  };
}
