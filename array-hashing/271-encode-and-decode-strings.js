/**
 * Problem: 271. Encode and Decode Strings
 * Pattern: String Encoding / Decoding (Length Prefix)
 *
 * Notes:
 * - кодируем строку как: "length#word"
 * - это позволяет безопасно декодировать даже если внутри есть '#'
 * - при декодировании:
 *   1. читаем длину до '#'
 *   2. берём нужное количество символов после '#'
 *
 * Time: O(n)
 * Space: O(n)
 */

/**
 * Encodes a list of strings to a single string.
 */
const encode = (strs) => {
  const encodedArray = [];

  // проходим по каждому слову
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];

    // создаём формат: "длина#слово"
    // пример: "5#hello"
    encodedArray.push("".concat(word.length, "#", word));
  }

  // объединяем всё в одну строку
  const encodedString = encodedArray.join("");

  return encodedString;
};

/**
 * Decodes a single string back to list of strings.
 */
const decode = (s) => {
  const res = [];

  // i — текущая позиция в строке
  for (let i = 0; i < s.length; i++) {
    // находим позицию '#', который отделяет длину
    const hashIndex = s.indexOf("#", i);

    // длина слова (преобразуем из строки в число)
    const length = Number(s.substring(i, hashIndex));

    // извлекаем слово нужной длины
    const word = s.substring(hashIndex + 1, hashIndex + 1 + length);

    res.push(word);

    // двигаем указатель i:
    // перескакиваем через "length#word"
    i = hashIndex + length;
  }

  return res;
};
