
module.exports = function (...numbers) {
  function reduce(stack) {
    if(typeof stack === 'number') return stack;
    switch(stack[0]) {
      case '+': return reduce(stack[1]) + reduce(stack[2]);
      case '-': return reduce(stack[1]) - reduce(stack[2]);
      case '*': return reduce(stack[1]) * reduce(stack[2]);
      case '/': return reduce(stack[1]) / reduce(stack[2]);
    }
  }

  function map(stack) {
    if(stack == null) return {text: null};
    if(typeof stack === 'number') return {text: stack, priority: 2};
    const [op, a, b] = stack;
    let priority = 0;
    if(op === '*' || op === '/') priority = 1;

    const ma = map(a),
          mb = map(b);
    let ta = ma.text,
        tb = mb.text;

    if(ma.priority < priority) {
      ta = `(${ma.text})`;
    }
    if(mb.priority < priority || 
      (mb.priority < 2 && (op === '-' || op === '/'))) {
      tb = `(${mb.text})`;
    }

    const text = `${ta} ${op} ${tb}`;
    return {priority, text};
  }

  function solve(...numbers) {
    if(numbers.length === 1) {
      const result = Math.abs(reduce(numbers[0]) - 24);
      if(result < Number.EPSILON) return numbers[0];
      return null;
    }
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers.length; j++) {
        if(i !== j) {
          const a = numbers[i],
                b = numbers[j];
          const rest = numbers.filter((n, k) => k !== i && k !== j);

          let isSolved = solve(['+', a, b], ...rest);
          if(!isSolved) {
            isSolved = solve(['-', a, b], ...rest);
          }
          if(!isSolved) {
            isSolved = solve(['*', a, b], ...rest);
          }
          if(!isSolved) {
            isSolved = solve(['/', a, b], ...rest);
          }
          if(isSolved) return isSolved;
        }
      }
    }
    return null;
  }
  return map(solve(...numbers)).text;
}