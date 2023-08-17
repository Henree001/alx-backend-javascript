export default function (callback) {
  const queue = [];
  try {
    queue.push(callback());
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
