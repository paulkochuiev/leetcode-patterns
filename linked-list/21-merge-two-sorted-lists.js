/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * Объединяет два отсортированных связных списка в один отсортированный список.
 *
 * Идея:
 * - Мы НЕ создаём новые узлы
 * - Мы переиспользуем существующие, переподключая ссылки (next)
 *
 * Паттерн:
 * - Dummy head (фиктивная голова), чтобы не обрабатывать отдельно первый элемент
 * - Указатель на хвост, чтобы последовательно строить результат
 *
 * Сложность:
 * - Время: O(n + m)
 * - Память: O(1)
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoSortedLists = (list1, list2) => {
  /**
   * Фиктивный узел (dummy)
   * Нужен только как точка старта
   * Его значение не имеет значения
   */
  const dummyHeadNode = { val: null, next: null };

  /**
   * Указатель на последний элемент результирующего списка
   * Изначально указывает на dummy
   */
  let currentTailNode = dummyHeadNode;

  /**
   * Пока оба списка не закончились
   */
  while (list1 && list2) {
    /**
     * Сравниваем значения текущих узлов
     */
    if (list1.val < list2.val) {
      /**
       * Подключаем текущий узел из list1 к результату
       *
       * ВАЖНО:
       * Мы НЕ создаём новый узел
       * Мы просто перенаправляем ссылку
       */
      currentTailNode.next = list1;

      /**
       * Сдвигаем указатель list1 вперёд
       */
      list1 = list1.next;
    } else {
      /**
       * Подключаем узел из list2
       */
      currentTailNode.next = list2;

      /**
       * Сдвигаем указатель list2 вперёд
       */
      list2 = list2.next;
    }

    /**
     * Сдвигаем хвост результата
     *
     * КРИТИЧНО:
     * Если этого не сделать — мы будем перезаписывать один и тот же next
     */
    currentTailNode = currentTailNode.next;
  }

  /**
   * Один из списков закончился
   * Второй уже отсортирован → просто "прицепляем" остаток
   */
  if (list1) {
    currentTailNode.next = list1;
  } else {
    currentTailNode.next = list2;
  }

  /**
   * Возвращаем начало списка
   * Пропускаем dummy
   */
  return dummyHeadNode.next;
};
