/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * 🔹 Pattern: Linked List / Pointers
 * 🔹 Approach: Iterative (3 pointers)
 *
 * 🔹 Что происходит:
 * Было:  1 → 2 → 3 → null
 * Нужно: 3 → 2 → 1 → null
 *
 * Мы не меняем узлы местами!
 * Мы просто разворачиваем направление next
 *
 * 🔹 Алгоритм:
 * 1. Сохраняем следующий узел (temp)
 * 2. Разворачиваем curr.next → prev
 * 3. Двигаем prev вперёд
 * 4. Двигаем curr вперёд
 *
 * 🔹 В конце prev — это новый head
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // prev — начало развернутой части (сначала пусто)
  let previousNode = null;

  // currentNode — начинаем с head
  let currentNode = head;

  // идём пока есть узлы
  while (currentNode) {
    // 🔴 сохраняем следующий узел (иначе потеряем список)
    let nextNode = currentNode.next;

    // 🔴 разворачиваем ссылку назад
    // было: current → next
    // стало: current → previous
    currentNode.next = previousNode;

    // 🔴 двигаем previous вперёд
    previousNode = currentNode;

    // 🔴 двигаем current вперёд
    currentNode = nextNode;
  }

  // previous — новый head
  return previousNode;
};
