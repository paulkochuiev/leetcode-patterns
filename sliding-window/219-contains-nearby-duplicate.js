/**
 * LeetCode 219 — Contains Duplicate II
 *
 * Категория: Array / Hashing
 * Паттерн: Sliding Window + HashSet
 *
 * Идея:
 * - Нужно найти два одинаковых элемента, расстояние между индексами которых ≤ k
 * - Мы поддерживаем "скользящее окно" из последних k элементов
 * - Set хранит только элементы внутри этого окна
 *
 * Алгоритм:
 * 1. Проходим по массиву
 * 2. Если текущий элемент уже есть в Set → значит дубликат в пределах k → return true
 * 3. Добавляем текущий элемент в Set
 * 4. Если размер Set стал больше k → удаляем элемент, который вышел за пределы окна
 *
 * Важно:
 * - Set всегда содержит только последние k элементов
 * - Это гарантирует, что расстояние между одинаковыми элементами ≤ k
 *
 * Время: O(n)
 * Память: O(k)
 *
 * @param {number[]} numbers
 * @param {number} maxDistance
 * @return {boolean}
 */
const containsNearbyDuplicate = (numbers, maxDistance) => {
  const windowSet = new Set();

  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
    const currentNumber = numbers[currentIndex];

    // 🔴 Если элемент уже есть в окне → нашли дубликат в пределах k
    if (windowSet.has(currentNumber)) {
      return true;
    }

    // 🟢 Добавляем текущий элемент в окно
    windowSet.add(currentNumber);

    // 🟡 Поддерживаем размер окна ≤ k
    if (windowSet.size > maxDistance) {
      // Удаляем элемент, который вышел за пределы окна
      // currentIndex - maxDistance → индекс элемента, который стал "слишком далеко"
      windowSet.delete(numbers[currentIndex - maxDistance]);
    }
  }

  // Если ни одного подходящего дубликата не нашли
  return false;
};
