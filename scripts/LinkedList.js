import Node from './Node';

export default class LinkedList {
  constructor (length, head) {
    this.length = 0;
    this.head = null;
  }

  unshift(item) {
    let newNode = new Node(item);
    let temp = this.head

    if (this.head === null) {
      this.head = newNode;
      this.length++;

      return newNode;
    }

    this.head = newNode;
    this.head.next = temp;
    this.length++;
    return newNode;
  }

  shift() {
    if (this.length === 0) {
      return null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      return temp;
    }
  }

  push(item) {
    let newNode = new Node(item);
    let currentNode = this.head;

    if (this.head === null) {
      this.head = newNode;
      this.length++
      return newNode;
    }

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    this.length++
  }

  pop() {
    let currentNode = this.head;
    let previous = null;
    
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      let last = this.head;
      this.head = null;
      this.length--
      return last;
    }

    while(currentNode.next !== null) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    previous.next = null;

    this.length--;
    return currentNode;
  }

}
