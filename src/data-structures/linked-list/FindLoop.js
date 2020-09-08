function findLoop(head) {
  let slow = head;
  let fast = head;

  while (slow && fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = findLoop;
