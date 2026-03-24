/**
 * LeetCode #1768 — Merge Strings Alternately
 *
 * Задача:
 * Даны две строки. Нужно объединить их, чередуя символы.
 * Если одна строка закончилась раньше — добавляем остаток второй.
 *
 * Пример:
 * word1 = "abc"
 * word2 = "pq"
 * результат = "apbqc"
 *
 * Паттерн:
 * Two Pointers (два указателя)
 *
 * Сложность:
 * Time: O(n + m)
 * Space: O(n + m)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  // Указатель для первой строки
  let pointerWord1 = 0;

  // Указатель для второй строки
  let pointerWord2 = 0;

  // Массив для накопления результата (эффективнее, чем строка)
  const mergedCharacters = [];

  /**
   * Цикл работает, ПОКА хотя бы одна строка не закончилась
   *
   * || означает:
   * "продолжаем, пока есть символы хотя бы в одной строке"
   */
  while (pointerWord1 < word1.length || pointerWord2 < word2.length) {
    /**
     * Если в первой строке ещё есть символы —
     * добавляем текущий символ и двигаем указатель
     */
    if (pointerWord1 < word1.length) {
      mergedCharacters.push(word1[pointerWord1]);
      pointerWord1++;
    }

    /**
     * Если во второй строке ещё есть символы —
     * добавляем текущий символ и двигаем указатель
     */
    if (pointerWord2 < word2.length) {
      mergedCharacters.push(word2[pointerWord2]);
      pointerWord2++;
    }
  }

  // Преобразуем массив символов в строку
  return mergedCharacters.join("");
};
