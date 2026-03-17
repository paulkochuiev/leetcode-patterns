/**
 * Problem: 242. Valid Anagram
 * Pattern: Hashing (Frequency Counter)
 *
 * Notes:
 * - считаем частоту символов в первой строке
 * - затем уменьшаем счётчик при проходе по второй строке
 * - если символа нет или счётчик уходит в 0 раньше времени → не анаграмма
 *
 * Time: O(n)
 * Space: O(1) // т.к. алфавит ограничен (например, lowercase letters)
 */

const isAnagram = (s, t) => {
  // если длины разные → строки точно не могут быть анаграммами
  if (s.length !== t.length) {
    return false;
  }

  // объект для хранения частоты символов строки s
  const characterFrequencyMap = {};

  // считаем, сколько раз встречается каждый символ в s
  for (const character of s) {
    // если символ уже есть → увеличиваем счётчик
    // если нет → инициализируем с 1
    characterFrequencyMap[character] =
      (characterFrequencyMap[character] || 0) + 1;
  }

  // проходим по строке t и "вычитаем" символы
  for (let index = 0; index < t.length; index++) {
    const currentCharacter = t[index];

    // если символ есть в map и его количество > 0
    if (characterFrequencyMap[currentCharacter]) {
      // уменьшаем счётчик
      characterFrequencyMap[currentCharacter]--;
    } else {
      // либо символа вообще нет
      // либо он уже "закончился"
      return false;
    }
  }

  // если мы дошли сюда → все символы совпали
  return true;
};

export default isAnagram;
