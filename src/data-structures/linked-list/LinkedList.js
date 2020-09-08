// 1->2->3->4->5
const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

// 1->2->3->4->5->1->2...
const last = {
  val: 5,
  next: null,
};
const linkedListWithLoop = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: last,
      },
    },
  },
};
last.next = linkedListWithLoop;

module.exports = {
  linkedList,
  linkedListWithLoop,
};
