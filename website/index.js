import * as Comlink from 'comlink';

(async function init() {
  console.log("INIT");
  let handlers = await Comlink.wrap(
    new Worker(new URL('./wasm-worker.js', import.meta.url), {
      type: 'module'
    })
  ).handlers;
  window.handlers = handlers;
  document.getElementById('yield-single').disabled = false;
  if (await handlers.supportThreads)
    document.getElementById('yield-multi').disabled = false;
})();

async function fifths(id) {
  document.getElementById(id).disabled = true;
  let {result, time: delta} = await window.handlers[id == "yield-multi" ? 'multiThread' : 'singleThread'](200);
  document.getElementById('result').innerHTML = result + "<p><em>elapsed time: " + (delta / 1000.0).toFixed(2) + " seconds</em></p>";
  document.getElementById(id).disabled = false;
}

document.getElementById('yield-multi').addEventListener('click', () => fifths('yield-multi'));
document.getElementById('yield-single').addEventListener('click', () => fifths('yield-single'));
