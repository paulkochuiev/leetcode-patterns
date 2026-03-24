/**
 * Задача: Reorder Linked List
 *
 * Дан список:
 * L0 → L1 → L2 → ... → Ln
 *
 * Нужно преобразовать в:
 * L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
 *
 * Ограничения:
 * - Нельзя создавать новый список
 * - Нужно менять указатели in-place
 *
 * Основная идея:
 * 1. Найти середину списка (fast/slow pointers)
 * 2. Развернуть вторую половину
 * 3. Слить (merge) две половины
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

const reorderLinkedList = (head) => {
  // Edge case: если список пустой или из 1 элемента — ничего делать не нужно
  if (!head || !head.next) {
    return;
  }

  // ==============================
  // 1. Найти середину списка
  // ==============================
  // slow двигается на 1 шаг
  // fast двигается на 2 шага
  // когда fast доходит до конца — slow будет в середине

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // После цикла:
  // slowPointer указывает на середину списка

  // ==============================
  // 2. Разделить список на две части
  // ==============================
  // Первая половина: head → ... → slowPointer
  // Вторая половина: slowPointer.next → ...

  let secondHalfHead = slowPointer.next;

  // Разрываем список, чтобы первая половина заканчивалась на slowPointer
  slowPointer.next = null;

  // ==============================
  // 3. Развернуть вторую половину
  // ==============================
  // Классический reverse linked list

  let previousNode = null;
  let currentNode = secondHalfHead;

  while (currentNode) {
    // Сохраняем следующий элемент,
    // иначе потеряем ссылку после изменения currentNode.next
    const nextNode = currentNode.next;

    // Меняем направление указателя
    currentNode.next = previousNode;

    // Сдвигаем указатели вперед
    previousNode = currentNode;
    currentNode = nextNode;
  }

  // После реверса:
  // previousNode — это новая голова второй половины
  secondHalfHead = previousNode;

  // ==============================
  // 4. Слить (merge) две половины
  // ==============================
  // Первая: head → ...
  // Вторая (развернутая): secondHalfHead → ...

  let firstHalfCurrentNode = head;
  let secondHalfCurrentNode = secondHalfHead;

  while (secondHalfCurrentNode) {
    // Сохраняем следующие элементы,
    // чтобы не потерять их при перепривязке
    const firstHalfNextNode = firstHalfCurrentNode.next;
    const secondHalfNextNode = secondHalfCurrentNode.next;

    // Вставляем элемент из второй половины после элемента из первой
    firstHalfCurrentNode.next = secondHalfCurrentNode;

    // Соединяем обратно с первой половиной
    secondHalfCurrentNode.next = firstHalfNextNode;

    // Сдвигаем оба указателя
    firstHalfCurrentNode = firstHalfNextNode;
    secondHalfCurrentNode = secondHalfNextNode;
  }
};
