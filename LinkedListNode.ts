export class LinkedListNode<T> {
  private next: LinkedListNode<T> | null;
  private back: LinkedListNode<T> | null;
  private value: T;
  constructor(value: T) {
    this.setValue(value);
  }
  setValue = (value: T) => {
    this.value = value;
  };

  getValue = () => {
    return this.value;
  };

  setNext = (next: LinkedListNode<T>) => {
    this.next = next;
  };
  getNext = () => {
    return this.next;
  };

  setBack = (back: LinkedListNode<T>) => {
    this.back = back;
  };

  getBack = () => {
    return this.back;
  };
}
