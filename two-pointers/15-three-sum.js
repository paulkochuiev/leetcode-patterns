/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const resultTriplets = [];

  // сначала сортируем массив
  // это позволяет использовать two pointers
  nums.sort((a, b) => a - b);

  // фиксируем первый элемент тройки
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    // если число стало положительным
    // дальше все числа тоже положительные (массив отсортирован)
    // поэтому сумма уже никогда не будет 0
    if (nums[firstIndex] > 0) {
      break;
    }

    // пропускаем дубликаты первого элемента
    // иначе будем получать одинаковые тройки
    if (firstIndex > 0 && nums[firstIndex] === nums[firstIndex - 1]) {
      continue;
    }

    /**
     * начинаем поиск двух других чисел
     *
     * почему leftPointer = firstIndex + 1 ?
     *
     * потому что:
     * 1) мы уже используем nums[firstIndex]
     * 2) нельзя использовать тот же элемент второй раз
     * 3) все комбинации слева уже были проверены
     */
    let leftPointer = firstIndex + 1;

    // правый указатель всегда ставим в конец массива
    let rightPointer = nums.length - 1;

    /**
     * почему условие leftPointer < rightPointer ?
     *
     * когда leftPointer === rightPointer
     * это означает, что мы указываем на один и тот же элемент
     *
     * а нам нужны ТРИ разных индекса
     */
    while (leftPointer < rightPointer) {
      const currentSum =
        nums[firstIndex] + nums[leftPointer] + nums[rightPointer];

      if (currentSum > 0) {
        // сумма слишком большая
        // уменьшаем правый указатель
        rightPointer--;
      } else if (currentSum < 0) {
        // сумма слишком маленькая
        // увеличиваем левый указатель
        leftPointer++;
      } else {
        // нашли тройку с суммой 0
        resultTriplets.push([
          nums[firstIndex],
          nums[leftPointer],
          nums[rightPointer],
        ]);

        // двигаем оба указателя
        leftPointer++;
        rightPointer--;

        /**
         * пропускаем дубликаты второго числа
         * иначе получим одинаковые комбинации
         */
        while (
          leftPointer < rightPointer &&
          nums[leftPointer] === nums[leftPointer - 1]
        ) {
          leftPointer++;
        }
      }
    }
  }

  return resultTriplets;
};
