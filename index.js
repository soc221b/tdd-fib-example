const fib = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return exports.fib(n - 1) + exports.fib(n - 2)
}

exports.fib = fib
