/**
 * Problem: 11. Container With Most Water
 * Pattern: Two Pointers (Greedy)
 *
 * Notes:
 * - площадь = min(height[left], height[right]) * ширина
 * - двигаем указатель с меньшей высотой
 * - потому что только так можно потенциально увеличить площадь
 *
 * Time: O(n)
 * Space: O(1)
 */

const maxArea = (height) => {
  let maxArea = 0;

  // левый и правый указатели
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    // текущая площадь:
    // ограничена меньшей высотой
    const currentArea = Math.min(height[l], height[r]) * (r - l);

    // обновляем максимум
    maxArea = Math.max(currentArea, maxArea);

    // двигаем меньшую сторону
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
};

export default maxArea;
