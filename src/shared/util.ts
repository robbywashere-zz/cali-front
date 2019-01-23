export function combine<T extends any[]>(...args: ((...fnArgs: T) => void)[]) {
  return (...a: T) => args.forEach(fn => fn(...a));
}

export function edgeDelay(fn?: () => any) {
  return () => (fn ? setImmediate(fn) : null);
}
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
