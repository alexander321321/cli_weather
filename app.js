const { performance } = require('perf_hooks');

function slow() {
  performance.mark('start');
  const arr = [];
  for (let i = 0; i < 100000; i++) {
    arr.push(i * i)
  }
  performance.mark('end');
  performance.measure('slow', 'start', 'end');
  console.log(performance.getEntriesByName('slow'));
}

slow()