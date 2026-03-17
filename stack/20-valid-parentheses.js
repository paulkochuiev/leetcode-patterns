/**
 * ЗАДАЧА:
 * Valid Parentheses (валидные скобки)
 *
 * Дана строка s, содержащая только:
 * '(', ')', '{', '}', '[' и ']'
 *
 * Нужно определить — валидна ли строка
 *
 * УСЛОВИЯ:
 * 1. Каждая открывающая скобка должна закрываться соответствующей
 * 2. Порядок должен быть корректный
 *
 * ПРИМЕРЫ:
 * "()" → true
 * "()[]{}" → true
 * "(]" → false
 * "([)]" → false
 *
 * ПАТТЕРН:
 * Stack (стек, LIFO) + HashMap
 *
 * ИДЕЯ:
 * - Открывающие скобки кладём в стек
 * - Когда встречаем закрывающую:
 *   → достаём из стека последнюю
 *   → проверяем соответствие
 * - Если mismatch или стек пуст → false
 * - В конце стек должен быть пуст
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // стек для хранения открывающих скобок
  const stack = [];

  // мапа: закрывающая → открывающая
  const closeToOpenMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    /**
     * если это закрывающая скобка
     */
    if (closeToOpenMap[currentCharacter]) {
      /**
       * если стек пуст — нет пары
       */
      if (stack.length === 0) {
        return false;
      }

      /**
       * берём последнюю открывающую
       */
      const lastOpenBracket = stack.pop();

      /**
       * какая должна быть ожидаемая
       */
      const expectedOpenBracket = closeToOpenMap[currentCharacter];

      /**
       * если не совпадает — ошибка
       */
      if (lastOpenBracket !== expectedOpenBracket) {
        return false;
      }
    } else {
      /**
       * если открывающая — кладём в стек
       */
      stack.push(currentCharacter);
    }
  }

  /**
   * если стек не пуст — есть незакрытые скобки
   */
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
