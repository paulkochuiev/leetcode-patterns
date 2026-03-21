/**
 * LeetCode 392 — Is Subsequence
 *
 * Категория: String
 * Паттерн: Two Pointers
 *
 * Идея:
 * - У нас есть две строки: source (s) и target (t)
 * - Нужно проверить, можно ли получить s, проходя по t слева направо
 * - Мы используем два указателя:
 *   - targetIndex → по строке s (что мы ищем)
 *   - sourceIndex → по строке t (где ищем)
 *
 * Алгоритм:
 * 1. Проходим по t (sourceIndex всегда двигается вперед)
 * 2. Если символы совпадают → двигаем targetIndex
 * 3. Если не совпадают → просто идем дальше по t
 * 4. В конце проверяем, дошли ли до конца s
 *
 * Важно:
 * - sourceIndex ВСЕГДА увеличивается на каждой итерации
 * - targetIndex увеличивается ТОЛЬКО при совпадении
 *
 * Время: O(n)
 * Память: O(1)
 *
 * @param {string} sourceString
 * @param {string} targetString
 * @return {boolean}
 */
const isSubsequence = (sourceString, targetString) => {
  let sourceIndex = 0; // указатель по s
  let targetIndex = 0; // указатель по t

  while (targetIndex < targetString.length) {
    const currentSourceChar = sourceString[sourceIndex];
    const currentTargetChar = targetString[targetIndex];

    // Если символы совпали — двигаем указатель по s
    if (currentTargetChar === currentSourceChar) {
      sourceIndex++;
    }

    // Всегда двигаем указатель по t
    targetIndex++;
  }

  // Если мы прошли всю строку s → это subsequence
  return sourceIndex === sourceString.length;
};
