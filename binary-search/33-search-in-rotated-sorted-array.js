/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // границы бинарного поиска
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    // находим середину текущего диапазона
    const middleIndex =
      leftPointer + Math.floor((rightPointer - leftPointer) / 2);

    // если нашли target — возвращаем индекс
    if (nums[middleIndex] === target) {
      return middleIndex;
    }

    /**
     * определяем какая половина массива отсортирована
     *
     * если nums[left] <= nums[mid]
     * значит левая половина отсортирована
     */
    if (nums[leftPointer] <= nums[middleIndex]) {
      /**
       * проверяем находится ли target
       * внутри отсортированной левой половины
       *
       * диапазон:
       * nums[left] <= target < nums[mid]
       */
      if (nums[leftPointer] <= target && target < nums[middleIndex]) {
        // target находится слева
        rightPointer = middleIndex - 1;
      } else {
        // target находится справа
        leftPointer = middleIndex + 1;
      }
    } else {
      /**
       * иначе отсортирована правая половина
       *
       * проверяем находится ли target внутри неё
       *
       * диапазон:
       * nums[mid] < target <= nums[right]
       */
      if (nums[middleIndex] < target && target <= nums[rightPointer]) {
        // target находится справа
        leftPointer = middleIndex + 1;
      } else {
        // target находится слева
        rightPointer = middleIndex - 1;
      }
    }
  }

  // если элемент не найден
  return -1;
};
