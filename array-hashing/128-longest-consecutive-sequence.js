/**
 * Problem: 128. Longest Consecutive Sequence
 * Pattern: Hashing (Set + Sequence Detection)
 *
 * Notes:
 * - используем Set для O(1) поиска
 * - начинаем считать только с начала последовательности
 * - итерируемся по Set, чтобы избежать дубликатов
 *
 * Time: O(n)
 * Space: O(n)
 */

const longestConsecutive = (nums) => {
  const numbers = new Set(nums);

  let longest = 0;

  // ✅ итерируемся по уникальным значениям
  for (const number of numbers) {
    // проверяем, что это начало последовательности
    if (!numbers.has(number - 1)) {
      let length = 0;

      // считаем длину последовательности
      while (numbers.has(number + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};
