/* Pure functions shared by the browser game and dependency-free Node tests. */
(function (root, factory) {
  const core = factory();
  if (typeof module === 'object' && module.exports) module.exports = core;
  else root.StoryBuilderCore = core;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function same(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((id, i) => id === b[i]);
  }
  function validate(ids) {
    if (!Array.isArray(ids) || ids.length < 2 || new Set(ids).size !== ids.length || ids.some(id => typeof id !== 'string' || !id)) {
      throw new TypeError('Expected at least two unique, non-empty scene IDs.');
    }
  }
  function shuffle(solution, previous, rng = Math.random) {
    validate(solution);
    if (typeof rng !== 'function') throw new TypeError('Expected a random-number function.');
    const order = solution.slice();
    for (let i = order.length - 1; i > 0; i -= 1) {
      const value = rng();
      if (!Number.isFinite(value) || value < 0 || value >= 1) throw new RangeError('Random value must be in [0, 1).');
      const j = Math.floor(value * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    // Never start solved; avoid repeating a previous shuffle where possible.
    if (same(order, solution) || (solution.length > 2 && same(order, previous))) {
      for (let offset = 1; offset < solution.length; offset += 1) {
        const candidate = solution.slice(offset).concat(solution.slice(0, offset));
        if (!same(candidate, previous) || solution.length === 2) return candidate;
      }
    }
    return order;
  }
  function move(order, from, to) {
    if (!Array.isArray(order)) throw new TypeError('Expected an order array.');
    if (![from, to].every(i => Number.isInteger(i) && i >= 0 && i < order.length)) throw new RangeError('Invalid scene position.');
    const result = order.slice();
    const [item] = result.splice(from, 1);
    result.splice(to, 0, item);
    return result;
  }
  function evaluate(order, solution) {
    validate(solution);
    if (!Array.isArray(order) || order.length !== solution.length || new Set(order).size !== order.length || order.some(id => !solution.includes(id))) {
      throw new TypeError('Order must contain exactly the scenes in this story.');
    }
    const matches = order.map((id, i) => id === solution[i]);
    return { matches, correct: matches.filter(Boolean).length, solved: matches.every(Boolean) };
  }
  function nextHint(order, solution) {
    const result = evaluate(order, solution);
    if (result.solved) return null;
    const position = result.matches.findIndex(match => !match);
    return { id: solution[position], position };
  }
  return Object.freeze({ same, shuffle, move, evaluate, nextHint });
});
