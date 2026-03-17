/**
 * Problem: 347. Top K Frequent Elements
 * Pattern: Hashing + Sorting (Top K Elements)
 *
 * Status: B
 * Last Reviewed: 2026-03-17
 *
 * Notes:
 * - сначала считаем частоту каждого числа через Map
 * - затем сортируем пары [number, frequency] по убыванию частоты
 * - берём первые k элементов
 * - возвращаем только числа (без частоты)
 *
 * Time: O(n log n) // из-за сортировки
 * Space: O(n)
 */

const topKFrequent = (nums, k) => {
  // Map: число → количество вхождений
  const freqObj = new Map();

  // 1️⃣ считаем частоту каждого числа
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    // увеличиваем счётчик (если нет → начинаем с 0)
    freqObj.set(number, (freqObj.get(number) || 0) + 1);
  }

  // 2️⃣ превращаем Map в массив пар:
  // [number, frequency]
  const sortedArray = Array.from(freqObj.entries())

    // сортируем по убыванию частоты
    .sort((a, b) => b[1] - a[1]);

  // 3️⃣ берём первые k элементов
  // и возвращаем только числа (индекс 0 в паре)
  return sortedArray.slice(0, k).map((elemOfArray) => elemOfArray[0]);
};

export default topKFrequent;
