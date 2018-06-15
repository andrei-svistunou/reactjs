const byVote = (prev, next) => next.vote_average - prev.vote_average;
const byDate = (prev, next) =>
  new Date(prev.release_date).getTime() - new Date(next.release_date).getTime();

export { byDate, byVote };
