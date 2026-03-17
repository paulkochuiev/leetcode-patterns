/**
 * Problem: 1. Two Sum
 * Pattern: Hashing (Complement Lookup)
 *
 * Notes:
 * - используем Map для хранения числа и его индекса
 * - сначала заполняем Map (number → index)
 * - затем для каждого числа ищем complement: target - currentNumber
 * - важно: проверяем, что не используем один и тот же индекс дважды
 *
 * Time: O(n)
 * Space: O(n)
 */

const twoSum = (nums, target) => {
  // Map: число → индекс
  const numberToIndexMap = new Map();

  // 1️⃣ Первый проход:
  // сохраняем каждое число и его индекс
  for (let index = 0; index < nums.length; index++) {
    const currentNumber = nums[index];

    numberToIndexMap.set(currentNumber, index);
  }

  // 2️⃣ Второй проход:
  // для каждого числа ищем complement (target - число)
  for (let index = 0; index < nums.length; index++) {
    const currentNumber = nums[index];

    // число, которое нужно для получения target
    const complementNumber = target - currentNumber;

    // проверяем:
    // 1. есть ли complement в Map
    // 2. это не тот же самый индекс
    if (
      numberToIndexMap.has(complementNumber) &&
      index !== numberToIndexMap.get(complementNumber)
    ) {
      return [index, numberToIndexMap.get(complementNumber)];
    }
  }

  // по условию задачи решение всегда есть,
  // но на всякий случай возвращаем пустой массив
  return [];
};
