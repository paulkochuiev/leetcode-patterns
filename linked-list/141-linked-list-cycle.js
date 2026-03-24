/**
 * LeetCode #141 — Linked List Cycle
 *
 * Задача:
 * Определить, есть ли цикл в односвязном списке.
 *
 * Подход:
 * Используем алгоритм "черепаха и заяц" (два указателя).
 *
 * - Медленный указатель двигается на 1 шаг
 * - Быстрый указатель двигается на 2 шага
 *
 * Если есть цикл:
 * - быстрый указатель рано или поздно "догонит" медленный
 *
 * Если цикла нет:
 * - быстрый указатель дойдёт до null
 *
 * Сложность:
 * Time: O(n)
 * Space: O(1)
 */

/**
 * Определение узла связного списка
 */
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  // Если список пуст — цикла быть не может
  if (!head) {
    return false;
  }

  // Инициализируем два указателя
  // Оба стартуют с головы списка
  let slowPointer = head;
  let fastPointer = head;

  // Двигаемся пока быстрый указатель не упрётся в конец
  while (fastPointer && fastPointer.next) {
    // Медленный — на 1 шаг
    slowPointer = slowPointer.next;

    // Быстрый — на 2 шага
    fastPointer = fastPointer.next.next;

    // КЛЮЧЕВОЙ МОМЕНТ:
    // Мы сравниваем НЕ значения, а ССЫЛКИ (объекты)
    // Если они указывают на один и тот же узел → есть цикл
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  // Если вышли из цикла — fastPointer дошёл до null
  // Значит цикла нет
  return false;
};
