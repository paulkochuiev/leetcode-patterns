/**
 * Problem: 121. Best Time to Buy and Sell Stock
 * Pattern: Two Pointers (Sliding Window)
 *
 * Idea:
 * - нужно найти максимальную разницу prices[j] - prices[i], где j > i
 * - это значит:
 *   покупаем по минимальной цене слева
 *   продаём по текущей цене справа
 *
 * Ключевая мысль:
 * - всегда держим минимальную цену (l) как "лучший день для покупки"
 * - двигаем r и проверяем прибыль
 *
 * Когда обновляем l:
 * - если нашли цену меньше → это новый лучший день покупки
 *
 * Time: O(n)
 * Space: O(1)
 */

const maxProfit = (prices) => {
  let maxProfit = 0;

  // l — индекс минимальной цены (день покупки)
  let l = 0;

  // r — текущий день (день продажи)
  let r = 1;

  while (r < prices.length) {
    // если текущая цена меньше,
    // значит нашли более выгодный день для покупки
    if (prices[r] < prices[l]) {
      l = r;
    } else {
      // считаем прибыль:
      // продаём сегодня (r), купили раньше (l)
      const currentProfit = prices[r] - prices[l];

      // обновляем максимум
      maxProfit = Math.max(maxProfit, currentProfit);
    }

    // двигаем "день продажи"
    r++;
  }

  return maxProfit;
};
