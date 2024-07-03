class LinkedListNode {
  next: LinkedListNode;
  back: LinkedListNode;
  value: any;
  constructor(value: any) {
    this.setValue(value);
  }
  setValue(value: any) {
    this.value = value;
  }

  getValue = () => {
    return this.value;
  };

  setNext = (next: LinkedListNode) => {
    this.next = next;
  };
  getNext = () => {
    return this.next;
  };

  setBack = (back: LinkedListNode) => {
    this.back = back;
  };

  getBack = () => {
    return this.back;
  };
}
