/**
 * Majority Element — Boyer–Moore Voting Algorithm
 *
 * Pattern:
 *   Array / Greedy / Voting Algorithm
 *
 * Time Complexity:
 *   O(n)
 *
 * Space Complexity:
 *   O(1)
 *
 * Idea:
 *   Мы "уничтожаем" пары разных элементов.
 *   Majority элемент (> n/2) не может быть полностью уничтожен,
 *   поэтому он останется в конце как candidate.
 *
 * @param {number[]} numbers
 * @return {number}
 */
const findMajorityElementUsingVotingAlgorithm = (numbers) => {
  let currentCandidate = null;
  let currentCount = 0;

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];

    // Если счетчик обнулился — выбираем нового кандидата
    if (currentCount === 0) {
      currentCandidate = currentNumber;
    }

    // Если текущее число совпадает с кандидатом → усиливаем его
    if (currentNumber === currentCandidate) {
      currentCount++;
    } else {
      // Если не совпадает → "гасим" кандидата
      currentCount--;
    }
  }

  // По условию majority элемент всегда существует,
  // поэтому currentCandidate — гарантированно ответ
  return currentCandidate;
};
