/**
 * LeetCode 58 — Length of Last Word
 *
 * Категория: String
 * Паттерн: String Manipulation
 *
 * Идея:
 * 1. Удаляем пробелы в начале и конце (trim)
 * 2. Делим строку на слова
 * 3. Берем последнее слово и возвращаем его длину
 *
 * Время: O(n)
 * Память: O(n)
 *
 * @param {string} inputString
 * @return {number}
 */
const lengthOfLastWord = (inputString) => {
  const words = inputString.trim().split(/\s+/);

  const lastWord = words[words.length - 1];

  return lastWord.length;
};
