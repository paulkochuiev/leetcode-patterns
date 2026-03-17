/**
 * Problem: 238. Product of Array Except Self
 * Pattern: Prefix Product (Prefix + Suffix Arrays)
 *
 * Notes:
 * - для каждого элемента считаем:
 *   prefix = произведение всех элементов слева
 *   suffix = произведение всех элементов справа
 * - результат = prefix[i] * suffix[i]
 * - нельзя использовать деление
 *
 * Time: O(n)
 * Space: O(n)
 */

const productExceptSelf = (nums) => {
  const n = nums.length;

  // итоговый массив
  const res = new Array(n);

  // prefix[i] = произведение всех элементов слева от i
  const pref = new Array(n);

  // suffix[i] = произведение всех элементов справа от i
  const suff = new Array(n);

  // для первого элемента нет левой части → 1 (нейтральный элемент для умножения)
  pref[0] = 1;

  // для последнего элемента нет правой части → 1
  suff[n - 1] = 1;

  // 1️⃣ считаем prefix
  // pref[i] = nums[0] * nums[1] * ... * nums[i-1]
  for (let i = 1; i < n; i++) {
    pref[i] = pref[i - 1] * nums[i - 1];
  }

  // 2️⃣ считаем suffix
  // suff[i] = nums[i+1] * nums[i+2] * ... * nums[n-1]
  for (let i = n - 2; i >= 0; i--) {
    suff[i] = suff[i + 1] * nums[i + 1];
  }

  // 3️⃣ комбинируем
  // результат = prefix * suffix
  for (let i = 0; i < n; i++) {
    res[i] = pref[i] * suff[i];
  }

  return res;
};
