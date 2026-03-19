class Solution {
  /**
   * accounts — 2D массив
   *
   * каждый элемент:
   * accounts[i] = счета одного клиента
   *
   * задача:
   * найти клиента с максимальной суммой денег
   *
   * пример:
   * [[1,2,3],[3,2,1]]
   *
   * клиент 1 → 1+2+3 = 6
   * клиент 2 → 3+2+1 = 6
   *
   * ответ → 6
   *
   * используем простой обход массива → O(n * m)
   */
  maximumWealth(accounts) {
    // храним максимальное богатство
    let maximumWealthValue = 0;

    // проходим по каждому клиенту
    for (
      let customerIndex = 0;
      customerIndex < accounts.length;
      customerIndex++
    ) {
      // текущий клиент (массив счетов)
      const currentCustomerAccounts = accounts[customerIndex];

      // сумма денег текущего клиента
      let currentCustomerWealth = 0;

      // считаем сумму всех счетов клиента
      for (
        let accountIndex = 0;
        accountIndex < currentCustomerAccounts.length;
        accountIndex++
      ) {
        currentCustomerWealth =
          currentCustomerWealth + currentCustomerAccounts[accountIndex];
      }

      /**
       * обновляем максимум
       *
       * сравниваем:
       * текущий максимум vs текущий клиент
       */
      maximumWealthValue = Math.max(maximumWealthValue, currentCustomerWealth);
    }

    // возвращаем максимальное значение
    return maximumWealthValue;
  }
}
