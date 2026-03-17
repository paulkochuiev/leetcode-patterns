/**
 * Problem: 125. Valid Palindrome
 * Pattern: String Processing (Normalization + Reverse)
 *
 * Notes:
 * - сначала очищаем строку от неалфанумерических символов
 * - приводим к нижнему регистру
 * - сравниваем строку с её перевёрнутой версией
 *
 * Time: O(n)
 * Space: O(n)
 */

const isPalindrome = (s) => {
  // удаляем всё, кроме букв и цифр, и приводим к нижнему регистру
  const stableString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // переворачиваем строку
  const reversedString = stableString.split("").reverse().join("");

  // сравниваем
  return stableString === reversedString;
};
