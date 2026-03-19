/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * 🔹 Pattern: Linked List / Fast & Slow Pointers
 * 🔹 Approach: Two Pointers
 *
 * 🔹 Пример:
 * 1 → 2 → 3 → 4 → 5
 *
 * slow: 1 → 2 → 3
 * fast: 1 → 3 → 5 → null
 *
 * 👉 slow окажется в середине (3)
 *
 * 🔹 Важно:
 * fastPointer должен проверяться на null,
 * иначе будет ошибка при обращении к .next
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // slowPointer двигается на 1 шаг
  let slowPointer = head;

  // fastPointer двигается на 2 шага
  let fastPointer = head;

  // пока fastPointer может двигаться дальше
  while (fastPointer !== null && fastPointer.next !== null) {
    // двигаем slow на 1 шаг
    slowPointer = slowPointer.next;

    // двигаем fast на 2 шага
    fastPointer = fastPointer.next.next;
  }

  // slowPointer указывает на середину
  return slowPointer;
};
