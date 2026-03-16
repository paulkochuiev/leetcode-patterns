/**
 * Задача:
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Паттерн:
 * Two Pointers / Sliding Window
 *
 * Цель:
 * Дан массив цен, где prices[i] — цена акции в день i.
 * Нужно найти максимальную прибыль, которую можно получить,
 * совершив ОДНУ сделку (одна покупка и одна продажа).
 *
 * Ограничения:
 * - Купить нужно раньше, чем продать.
 * - Если прибыль получить нельзя, вернуть 0.
 *
 * Основная идея алгоритма:
 *
 * Мы один раз проходим по массиву и храним:
 *
 * buyPointer  → день покупки (самая дешёвая цена, найденная ранее)
 * sellPointer → текущий день, когда мы пытаемся продать
 *
 * На каждом шаге считаем прибыль:
 *
 * profit = prices[sellPointer] - prices[buyPointer]
 *
 * Если находим более дешёвую цену,
 * переносим buyPointer на этот день.
 *
 * Это логично, потому что купить дешевле всегда выгоднее
 * для любой будущей продажи.
 *
 *
 * Пример:
 *
 * prices = [7,1,5,3,6,4]
 *
 * Шаги:
 *
 * buy=7 sell=1 → цена упала → переносим buyPointer
 *
 * buy=1 sell=5 → прибыль = 4
 *
 * buy=1 sell=3 → прибыль = 2
 *
 * buy=1 sell=6 → прибыль = 5 ← максимальная
 *
 * buy=1 sell=4 → прибыль = 3
 *
 * Ответ = 5
 *
 *
 * Почему алгоритм работает:
 *
 * Для каждого дня продажи j мы фактически считаем:
 *
 * prices[j] - min(prices[0..j-1])
 *
 * то есть прибыль, если продать в этот день
 * и купить по самой дешёвой цене ранее.
 *
 * Это гарантирует, что мы проверим
 * все возможные лучшие комбинации.
 *
 *
 * Сложность:
 *
 * Time  O(n)
 * Space O(1)
 */

class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // максимальная найденная прибыль
    let maxProfit = 0;

    // указатель на день покупки
    let buyPointer = 0;

    // указатель на день продажи
    let sellPointer = 1;

    // проходим по массиву
    while (sellPointer < prices.length) {
      // если цена продажи выше цены покупки
      if (prices[buyPointer] < prices[sellPointer]) {
        const currentProfit = prices[sellPointer] - prices[buyPointer];

        // обновляем максимальную прибыль
        maxProfit = Math.max(maxProfit, currentProfit);
      } else {
        // нашли более дешёвую цену покупки
        buyPointer = sellPointer;
      }

      // двигаем указатель продажи
      sellPointer++;
    }

    return maxProfit;
  }
}
