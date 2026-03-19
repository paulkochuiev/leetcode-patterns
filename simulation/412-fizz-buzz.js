class Solution {
  /**
   * n — верхняя граница
   *
   * задача:
   * вернуть массив строк от 1 до n
   * по правилам FizzBuzz
   *
   * используем simulation (простой цикл + условия) → O(n)
   */
  fizzBuzz(n) {
    // результирующий массив
    const result = [];

    // идём от 1 до n включительно
    for (let number = 1; number <= n; number++) {
      /**
       * сначала проверяем делимость на 3 и 5
       * (самый специфичный случай)
       */
      if (number % 3 === 0 && number % 5 === 0) {
        result.push("FizzBuzz");

        continue;
      }

      // делится только на 3
      if (number % 3 === 0) {
        result.push("Fizz");

        continue;
      }

      // делится только на 5
      if (number % 5 === 0) {
        result.push("Buzz");

        continue;
      }

      /**
       * если не подошло ни одно условие
       * добавляем число как строку
       */
      result.push(String(number));
    }

    return result;
  }
}
