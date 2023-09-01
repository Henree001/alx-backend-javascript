export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const intbuf = new Int8Array(buffer, 0, length);
  intbuf[position] = value;
  return intbuf;
}
