import { threads } from 'wasm-feature-detect';
import * as Comlink from 'comlink';

function wrapExports({ search }) {
  return (end) => {
    const start = performance.now();
    const result = search(end);
    const time = performance.now() - start;
    return {
      result,
      time
    };
  };
}

async function initHandlers() {
  let [singleThread, multiThread] = await Promise.all([
    (async () => {
      const singleThread = await import('../pkg/fifth.js');
      await singleThread.default();
      return wrapExports(singleThread);
    })(),
    (async () => {
      if (!(await threads())) return;
      const multiThread = await import('../pkg-parallel/fifth.js');
      await multiThread.default();
      await multiThread.initThreadPool(navigator.hardwareConcurrency);
      return wrapExports(multiThread);
    })()
  ]);

  return Comlink.proxy({
    singleThread,
    supportThreads: !!multiThread,
    multiThread
  });
}

Comlink.expose({
  handlers: initHandlers()
});
