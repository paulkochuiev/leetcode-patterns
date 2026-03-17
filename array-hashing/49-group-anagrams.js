/**
 * Problem: 49. Group Anagrams
 * Pattern: Hashing (Group Anagrams / Sorted Signature)
 *
 * Notes:
 * - сортируем строку → получаем "ключ" (signature)
 * - все анаграммы имеют одинаковый отсортированный вид
 * - используем Map: key → массив слов
 *
 * Time: O(n * k log k)
 * - n = количество слов
 * - k = длина слова (из-за сортировки)
 *
 * Space: O(n * k)
 */

const groupAnagrams = (strs) => {
  // Map: signature → список слов (анаграмм)
  const anagramGroupsMap = new Map();

  for (let index = 0; index < strs.length; index++) {
    const currentWord = strs[index];

    // создаём ключ:
    // сортируем символы → одинаковые слова дадут одинаковый ключ
    const sortedSignature = currentWord.split("").sort().join("");

    // если такой группы ещё нет → создаём
    if (!anagramGroupsMap.has(sortedSignature)) {
      anagramGroupsMap.set(sortedSignature, [currentWord]);
    } else {
      // иначе добавляем в существующую группу
      anagramGroupsMap.get(sortedSignature).push(currentWord);
    }
  }

  // возвращаем только значения Map (массив групп)
  return Array.from(anagramGroupsMap.values());
};

export default groupAnagrams;
