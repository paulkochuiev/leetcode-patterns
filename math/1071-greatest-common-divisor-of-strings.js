/**
 * LeetCode #1071 — Greatest Common Divisor of Strings
 *
 * Задача:
 * Найти наибольшую строку X, такую что:
 * - X повторяется и образует str1
 * - X повторяется и образует str2
 *
 * Паттерн:
 * Math + Euclidean Algorithm (НОД)
 *
 * Сложность:
 * Time: O(n + m)
 * Space: O(1)
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  /**
   * ШАГ 1
   * Проверяем, существует ли общий паттерн
   *
   * Если строки можно собрать из одного и того же блока,
   * то их конкатенации в разном порядке будут одинаковыми
   *
   * Если не равны → общего делителя нет
   */
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  /**
   * ШАГ 2
   * Находим НОД длин строк
   *
   * Это даст длину максимального повторяющегося паттерна
   */
  const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
    /**
     * Алгоритм Евклида:
     * уменьшаем задачу, заменяя (a, b) на (b, a % b)
     */
    while (secondNumber !== 0) {
      const remainder = firstNumber % secondNumber;

      firstNumber = secondNumber;
      secondNumber = remainder;
    }

    return firstNumber;
  };

  const greatestCommonDivisorLength = getGreatestCommonDivisor(
    str1.length,
    str2.length,
  );

  /**
   * ШАГ 3
   * Берём префикс найденной длины
   *
   * Почему:
   * если есть общий паттерн, он всегда начинается с начала строки
   */
  return str1.slice(0, greatestCommonDivisorLength);
};
