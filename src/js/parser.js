export default function json(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      reject(new Error('json function error'));
    }, 500);
  });
}
