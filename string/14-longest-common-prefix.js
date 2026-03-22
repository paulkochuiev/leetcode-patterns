/**
 * Задача: найти самый длинный общий префикс среди всех строк
 *
 * Паттерн: Horizontal Scanning (посимвольная проверка)
 *
 * Идея:
 * 1. Берём первую строку как эталон
 * 2. Идём по каждому символу этой строки
 * 3. Для каждого символа проверяем, совпадает ли он во всех остальных строках
 * 4. Если нет — сразу возвращаем результат
 * 5. Если да — добавляем символ в результат
 *
 * Сложность:
 * Time: O(n * m)
 * Space: O(1)
 *
 * @param {string[]} stringsArray
 * @return {string}
 */
const findLongestCommonPrefix = (stringsArray) => {
  // Edge case: если массив пустой — возвращаем пустую строку
  if (!stringsArray.length) {
    return "";
  }

  // Берём первую строку как эталон
  const baseWord = stringsArray[0];

  // Здесь будем накапливать результат
  let longestPrefix = "";

  // Проходим по каждому символу эталонной строки
  for (
    let characterIndex = 0;
    characterIndex < baseWord.length;
    characterIndex++
  ) {
    const currentCharacter = baseWord[characterIndex];

    // Проверяем текущий символ во всех строках
    for (let wordIndex = 0; wordIndex < stringsArray.length; wordIndex++) {
      const currentWord = stringsArray[wordIndex];

      // Если:
      // 1. строка закончилась (undefined)
      // 2. символ не совпадает
      // → значит общий префикс закончился
      if (currentWord[characterIndex] !== currentCharacter) {
        return longestPrefix;
      }
    }

    // Если все строки прошли проверку — добавляем символ в результат
    longestPrefix += currentCharacter;
  }

  // Если дошли до конца эталонной строки — возвращаем весь накопленный префикс
  return longestPrefix;
};
