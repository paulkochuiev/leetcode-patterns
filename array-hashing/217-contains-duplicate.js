/**
 * Problem: 217. Contains Duplicate
 * Pattern: Hashing (Set)
 *
 * Notes:
 * - используем Set для проверки уникальности
 * - если размер Set меньше массива → есть дубликаты
 * - альтернатива: проверять через has() в цикле
 *
 * Time: O(n)
 * Space: O(n)
 */

const containsDuplicate = (nums) => {
  const uniqueNumbersSet = new Set(nums);

  return uniqueNumbersSet.size !== nums.length;
};
