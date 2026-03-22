/**
 * Задача: проверить, является ли число палиндромом
 *
 * Паттерн: Two Pointers
 *
 * Идея:
 * 1. Преобразуем число в строку
 * 2. Используем два указателя:
 *    - один с начала
 *    - второй с конца
 * 3. Сравниваем символы
 * 4. Если хоть один не совпал — это не палиндром
 * 5. Если все совпали — это палиндром
 *
 * Сложность:
 * Time: O(n)
 * Space: O(1) (если не считать строку)
 *
 * @param {number} inputNumber
 * @return {boolean}
 */
const isPalindromeNumber = (inputNumber) => {
  // Отрицательные числа не могут быть палиндромами
  // пример: -121 → "121-" ≠ "121"
  if (inputNumber < 0) {
    return false;
  }

  // Преобразуем число в строку
  const numberAsString = String(inputNumber);

  // Указатель на начало строки
  let leftIndex = 0;

  // Указатель на конец строки
  let rightIndex = numberAsString.length - 1;

  // Двигаемся навстречу друг другу
  while (leftIndex < rightIndex) {
    const leftCharacter = numberAsString[leftIndex];
    const rightCharacter = numberAsString[rightIndex];

    // Если символы не равны — это не палиндром
    if (leftCharacter !== rightCharacter) {
      return false;
    }

    // Сдвигаем указатели к центру
    leftIndex++;
    rightIndex--;
  }

  // Если все символы совпали — это палиндром
  return true;
};
