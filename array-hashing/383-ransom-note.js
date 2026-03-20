/**
 * LeetCode 383 — Ransom Note
 *
 * Категория: Array / Hashing
 * Паттерн: Frequency Counter (Hash Map)
 * Под-паттерн: "Потребление ресурсов" (Resource Consumption)
 *
 * Идея:
 * 1. Считаем, сколько раз каждая буква встречается в magazine
 * 2. Проходим по ransomNote и "тратим" буквы из magazine
 * 3. Если в какой-то момент буквы не хватает — сразу возвращаем false
 * 4. Если все буквы успешно использованы — возвращаем true
 *
 * Временная сложность: O(n + m)
 * Пространственная сложность: O(1) — если алфавит фиксированный (a-z)
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Ранний выход: если magazine короче, чем ransomNote — невозможно собрать
  if (magazine.length < ransomNote.length) {
    return false;
  }

  // Хеш-таблица для подсчета доступных символов
  const characterCountMap = {};

  // Шаг 1: считаем частоту символов в magazine
  for (let i = 0; i < magazine.length; i++) {
    const currentCharacter = magazine[i];

    characterCountMap[currentCharacter] =
      (characterCountMap[currentCharacter] || 0) + 1;
  }

  // Шаг 2: пробуем собрать ransomNote
  for (let i = 0; i < ransomNote.length; i++) {
    const currentCharacter = ransomNote[i];

    // Если символа нет или он уже закончился — сразу false
    if (!characterCountMap[currentCharacter]) {
      return false;
    }

    // "Тратим" один символ
    characterCountMap[currentCharacter]--;
  }

  // Если дошли сюда — все символы успешно использованы
  return true;
};
