export default function canIterate(obj) {
  if (obj === null || obj === undefined || typeof obj === 'number') {
    return false;
  }

  if (typeof obj === 'string') {
    return true;
  }

  return Boolean(obj[Symbol.iterator]);
}
