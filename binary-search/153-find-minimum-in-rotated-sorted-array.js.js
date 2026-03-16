class Solution {
  /**
   * nums — отсортированный массив, который затем был "повёрнут"
   * пример:
   * [4,5,6,7,0,1,2]
   *
   * задача — найти минимальный элемент
   *
   * используем binary search → O(log n)
   */
  findMin(nums) {
    // храним минимальный найденный элемент
    // начинаем с первого элемента массива
    let resultMinimum = nums[0];

    // левый указатель бинарного поиска
    let leftPointer = 0;

    // правый указатель бинарного поиска
    let rightPointer = nums.length - 1;

    // продолжаем поиск пока границы не пересеклись
    while (leftPointer <= rightPointer) {
      /**
       * проверяем: отсортирован ли текущий участок массива
       *
       * если левый элемент <= правого
       * значит массив уже полностью отсортирован
       *
       * пример:
       * [0,1,2,4,5]
       *
       * тогда минимальный элемент = nums[leftPointer]
       */
      if (nums[leftPointer] <= nums[rightPointer]) {
        // обновляем минимум
        resultMinimum = Math.min(resultMinimum, nums[leftPointer]);

        // дальше искать смысла нет
        break;
      }

      /**
       * находим середину текущего диапазона
       *
       * используем безопасную формулу бинарного поиска
       */
      const middleIndex =
        leftPointer + Math.floor((rightPointer - leftPointer) / 2);

      /**
       * обновляем минимальный элемент
       * потому что mid может оказаться минимумом
       */
      resultMinimum = Math.min(resultMinimum, nums[middleIndex]);

      /**
       * теперь нужно понять в какой половине находится поворот
       *
       * если nums[mid] >= nums[left]
       *
       * значит левая часть отсортирована
       *
       * пример:
       * [4,5,6,7 | 0,1,2]
       *  L   M
       *
       * значит минимум находится справа
       */
      if (nums[middleIndex] >= nums[leftPointer]) {
        // двигаем левую границу вправо
        leftPointer = middleIndex + 1;
      } else {
        /**
         * иначе правая часть отсортирована
         * а поворот находится слева
         *
         * пример:
         * [6,7,0,1,2,4,5]
         *      M
         */

        // двигаем правую границу влево
        rightPointer = middleIndex - 1;
      }
    }

    // возвращаем найденный минимум
    return resultMinimum;
  }
}
