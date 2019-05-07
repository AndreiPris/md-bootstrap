export function getReviewClasses(reviewScore) {
  const reviewScores = Array(5).fill('selected');
  const actualIndex = Math.floor(reviewScore);

  for (let i = actualIndex; i < 5; i++) {
    if (actualIndex === i) {
      const actualScore = (reviewScore - actualIndex).toFixed(1);

      /* eslint-disable no-nested-ternary */
      reviewScores[i] = actualScore < 0.3 ? 'empty' : actualScore >= 0.6 ? 'selected' : 'half';
      /* eslint-enable no-nested-ternary */
    } else {
      reviewScores[i] = 'empty';
    }
  }

  return reviewScores;
}

export function prepareProducts(products) {
  return products.map(el => ({
    ...el,
    reviewClasses: getReviewClasses(el.review),
  }));
}
