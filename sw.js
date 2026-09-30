// Draftline service worker (generated at build time — see vite.config.ts).
// 1. Makes the app installable and usable offline (precaches the app shell).
// 2. Adds cross-origin isolation headers, which static hosts like GitHub Pages
//    can't set, so offline speech (Whisper) can use several CPU threads.
const VERSION = '15eee8df79'
const PRECACHE = ["./",".git/COMMIT_EDITMSG",".git/HEAD",".git/config",".git/description",".git/hooks/applypatch-msg.sample",".git/hooks/commit-msg.sample",".git/hooks/fsmonitor-watchman.sample",".git/hooks/post-update.sample",".git/hooks/pre-applypatch.sample",".git/hooks/pre-commit.sample",".git/hooks/pre-merge-commit.sample",".git/hooks/pre-push.sample",".git/hooks/pre-rebase.sample",".git/hooks/pre-receive.sample",".git/hooks/prepare-commit-msg.sample",".git/hooks/push-to-checkout.sample",".git/hooks/sendemail-validate.sample",".git/hooks/update.sample",".git/index",".git/info/exclude",".git/logs/HEAD",".git/logs/refs/heads/main",".git/objects/00/e284e79bdd5aa68a653f6d99bb70cf45b96e5c",".git/objects/01/42e5738211e87522780c0e6c1839853dff280f",".git/objects/03/4d25d310b19c66b35edc6b24ecd7ed778f8f03",".git/objects/0c/9770d5183ba60dc4350d3e011b782a320761ae",".git/objects/0f/3d0f837d24834b9b5b0a6b735459c56f5e75c3",".git/objects/13/9964bb6b0dcf6e97208dabe295b4313e08a74e",".git/objects/17/b406d221e7f27179344707bd543fb8470728ac",".git/objects/19/5e4a9d7d98cee890fb4e7c2bb2a366e063a6b6",".git/objects/1b/6e617e0bcdf7d27c196870d448ba338d91016e",".git/objects/1d/23c7066e095b5bff2c373d4064dc4f33659783",".git/objects/2a/0f8bde9778bb8c7b3a0ca5d4b4fb041737ef1a",".git/objects/3a/c2401be2568bc00db1d146cacdd0796f4cdbfd",".git/objects/3e/b35678a299c62cc280c3be862c7f9ae2c46d91",".git/objects/4f/57dee895ac0e3a95bca83f73c136d7dee6a454",".git/objects/53/43fee960de4b490eb650424202981d29d5d12b",".git/objects/57/fc3c7ff325e78bf24d8c517720038d6803fdc3",".git/objects/58/fc6aa086be1012a7c38908a2a044661e70f530",".git/objects/60/4c212ade9689c1f242dcdd17839ba7a5467fba",".git/objects/6b/474728a9a499233959959fb7d370df97733450",".git/objects/6e/ea0a75e0bf4f39f882fe2f8e0947f42bcd10f1",".git/objects/70/a870f40ad0be24f2409f3875c8126b55aa41aa",".git/objects/75/e17f18019f1dbd210c030f1bdd0ed7fe46b9ca",".git/objects/7c/dc333cb7318c5ce83e53f1b86f23604dafa72c",".git/objects/80/351824cd31bb58169aac6043d7f89939745fa7",".git/objects/80/986f408b744a6b7ebaa5af3f980208164c081f",".git/objects/84/98ba17eeed3609927cb9dbd8705d36627601b3",".git/objects/84/999a13b43a815fe6830a752f49350b65a5f6aa",".git/objects/8f/4ff56ea9a64ccf480d5ec56bf8564e5adb8f20",".git/objects/98/383e3d835a5c5aea988a74b569193a30dcbcec",".git/objects/9f/8dc6ca39f4f68c59c8517d04bbeb7c6b6218ee",".git/objects/a3/b8e33229be7db3b6cf59da16226b5c4d834373",".git/objects/a8/4441ee8981630040d63832f8746f4bc16b59a7",".git/objects/a8/b9afbcd37c780b80f917d47fa4edd7378d8d84",".git/objects/a9/a02a3619264b6f27f4f9fad4637305dab98e9b",".git/objects/aa/47f9f429b1187b90f8679f800e0cccc8f552d5",".git/objects/ae/3b781818cc31598afb4a6273e54f057d72e6af",".git/objects/af/2d07f68b6dfbfc761895886db3c2041520192f",".git/objects/c1/05c0230ca6bc209c931b86a2006fb5d44c880f",".git/objects/c3/28c6e08b20a20a1de47d823e007ee73812a438",".git/objects/c3/5c4c618fab33da8695177b3a6cefe0810b7b28",".git/objects/c3/beabbda3f1601d293e5cd9587ed3ac3689f103",".git/objects/d2/7ce71916d55b584c51854e9d57a303de6af9f0",".git/objects/d7/f69134614ebdcaa10ebd36b0be1a44a035e157",".git/objects/da/9571488f44176ef90d7f10c0f402c8be74db67",".git/objects/db/24b9639c1427b829e269f98381ffe850d3dce6",".git/objects/e0/1c9d111704521cd553cc23538038396feea825",".git/objects/e0/410dd391374af7cfddb2bc38e994369f20fa53",".git/objects/e2/ab766163750e2b58f3ce59d0bff925c387664c",".git/objects/e5/188ea466a3ecbba72209872a5ad96bb5ca8b45",".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391",".git/objects/e9/7ef73b278631a1e30df9eaa3b2459ac2ae7d1a",".git/objects/ec/f5305ed04bbd1c81a590f0b1968e0b8f7d71c9",".git/objects/ef/d2cfe81347b57cd4913f2ba0f846744802b07b",".git/objects/f0/291778c969fca0c255fe7e06c90eb97b34770d",".git/objects/fa/7fd483f1503d298af2cfda8666667c5f8be13a",".git/objects/fd/d58c52576b262be260478d9422f60c36a342cc",".git/objects/fe/b6a3bddd5b7f8e9f358353150187ffb184c93f",".git/refs/heads/main","assets/__vite-browser-external-CKnVkMRn.js","assets/dist-GLSJf35g.js","assets/esm-BtXDF20H.js","assets/esm-C52_UXq9.js","assets/esm-W3jg6p2w.js","assets/esm-XF0S_RUh.js","assets/export-DVe30f6r.js","assets/fontkit.es-Bi28-d8h.js","assets/index-5VvvAjas.css","assets/index-B8cGb2MP.js","assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm","assets/rolldown-runtime-Dd_uD5pT.js","assets/web-CDqHJt_M.js","assets/web-D8JoFjkQ.js","assets/web-HyeU8Dae.js","assets/web-WR8JDJBR.js","assets/whisper.worker-Clc5n5pC.js","favicon.png","favicon.svg","fonts/BebasNeue-Regular.ttf","fonts/CourierPrime-Bold.ttf","fonts/CourierPrime-BoldItalic.ttf","fonts/CourierPrime-Italic.ttf","fonts/CourierPrime-Regular.ttf","fonts/CrimsonText-Bold.ttf","fonts/CrimsonText-BoldItalic.ttf","fonts/CrimsonText-Italic.ttf","fonts/CrimsonText-Regular.ttf","fonts/IBMPlexMono-Bold.ttf","fonts/IBMPlexMono-BoldItalic.ttf","fonts/IBMPlexMono-Italic.ttf","fonts/IBMPlexMono-Regular.ttf","fonts/Lato-Bold.ttf","fonts/Lato-BoldItalic.ttf","fonts/Lato-Italic.ttf","fonts/Lato-Regular.ttf","fonts/licenses/BebasNeue-OFL.txt","fonts/licenses/CourierPrime-OFL.txt","fonts/licenses/CrimsonText-OFL.txt","fonts/licenses/IBMPlexMono-OFL.txt","fonts/licenses/Lato-OFL.txt","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","index.html","manifest.webmanifest"]
const CACHE = `draftline-${VERSION}`
const RUNTIME = 'draftline-runtime'

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)))
  self.skipWaiting()
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      for (const k of await caches.keys()) if (k.startsWith('draftline-') && k !== CACHE && k !== RUNTIME) await caches.delete(k)
      await self.clients.claim()
    })(),
  )
})

function isolate(res) {
  if (!res || res.status === 0 || res.type === 'opaque' || res.type === 'opaqueredirect') return res
  const h = new Headers(res.headers)
  h.set('Cross-Origin-Opener-Policy', 'same-origin')
  h.set('Cross-Origin-Embedder-Policy', 'credentialless')
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h })
}

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  if (url.origin !== self.location.origin) return // model downloads are cached by the speech engine itself

  // Pages: network first (to pick up new versions), cached copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put('index.html', copy))
          return isolate(res)
        })
        .catch(async () => isolate((await caches.match(req)) || (await caches.match('index.html')))),
    )
    return
  }

  // Everything else is content-hashed or static: cache first.
  e.respondWith(
    caches.match(req).then(
      (hit) =>
        (hit && isolate(hit)) ||
        fetch(req).then((res) => {
          // Keep the speech runtime for offline use once it has been downloaded.
          if (res.ok && /\/(ort|models)\//.test(url.pathname)) {
            const copy = res.clone()
            caches.open(RUNTIME).then((c) => c.put(req, copy))
          }
          return isolate(res)
        }),
    ),
  )
})
