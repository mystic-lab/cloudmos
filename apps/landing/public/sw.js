if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[c]) return;
    let t = {};
    const r = e => a(e, c),
      l = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(i.map(e => l[e] || r(e))).then(e => (n(...e), t));
  };
}
define(["./workbox-37e58535"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/_next/static/7wUD6xgOCVlTEK7yXH0gl/_buildManifest.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/7wUD6xgOCVlTEK7yXH0gl/_middlewareManifest.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/7wUD6xgOCVlTEK7yXH0gl/_ssgManifest.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/310-a52f4f92d708cc79.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/380-67379f577c546791.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/807-f9feb79084ebd3b7.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/833-84b90cff8fb0dcfd.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/framework-5f4595e5518b5600.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/main-c032502f833870cf.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/404-39393373fd7ee56b.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/500-00e53b3ce8ddd765.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/_app-936d26a39b3a462e.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/_error-6f53b838a77b4111.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/contact-b494823f89ee3818.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/index-d32169c90de3c7f1.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/maintenance-4f20262373ecc5b7.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/privacy-policy-2c0ade1973507403.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/pages/terms-of-service-4bae76230e67a7ce.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerDailyMotion.69fde993a00097c0.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerFacebook.da694c9e48e52ce1.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerFilePlayer.1d308119fabb792c.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerKaltura.d079fc5dfeb5196a.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerMixcloud.dcea3c7c08119620.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerPreview.bc5f6ecf771889d0.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerSoundCloud.7321755a6c09f244.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerStreamable.f6f8247d32e503f1.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerTwitch.52d1298710caec4e.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerVidyard.889501e58dbc52aa.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerVimeo.efbf17c379459ef3.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerWistia.f3c2287fa3b5c2da.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/reactPlayerYouTube.8f6ba180e508c9bc.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/chunks/webpack-d69d96a34671a4f6.js", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/_next/static/css/b4dc2f0e6bc8b0f8.css", revision: "7wUD6xgOCVlTEK7yXH0gl" },
        { url: "/android-chrome-192x192.png", revision: "67aea0e4bc700134b81b51e635a95144" },
        { url: "/android-chrome-256x256.png", revision: "b0dc3017fadbf0f4c323636535f582b7" },
        { url: "/apple-touch-icon.png", revision: "97f107fd40c94f768de409ffb68e2e73" },
        { url: "/browserconfig.xml", revision: "e41ebb6b49206a59d8eafce8220ebeac" },
        { url: "/favicon-16x16.png", revision: "5b31d0a554060dec7c59e86af2c3b47d" },
        { url: "/favicon-32x32.png", revision: "794696d75ba46e490df7a68d1309cb20" },
        { url: "/favicon.ico", revision: "c6fc431554c8de94be347a8180e562aa" },
        { url: "/images/akash-logo-dark.png", revision: "b1623e407dad710a4c0c73461bbb8bb3" },
        { url: "/images/akash-logo-flat-dark.png", revision: "50b4ad6438e791047d97da0af65b96f5" },
        { url: "/images/akash-logo-flat-light.png", revision: "2befec2d17a2b6a32b1a0517ca1baf01" },
        { url: "/images/akash-logo-light.png", revision: "0ea30905c72eda674ad74c65d0c062bf" },
        { url: "/images/akash-logo.svg", revision: "4a5f3eaf31bf0f88ff3baec6281c8de3" },
        { url: "/images/chains/akash.png", revision: "d0b3f8ccaa3b0d18ef4039f86edf4436" },
        { url: "/images/chains/atom.png", revision: "6e4d88ad2c295e811fee29cc89edfcb1" },
        { url: "/images/chains/evmos.png", revision: "487a456e9091dec9ddf18892531401f8" },
        { url: "/images/chains/huahua.png", revision: "f0ba8427522833bba44962e87e982412" },
        { url: "/images/chains/juno.png", revision: "933b7d992dc67fd2f0d0f35e182b3361" },
        { url: "/images/chains/kuji.png", revision: "9c31e679007e5ae16fc28e067d907f79" },
        { url: "/images/chains/osmo.png", revision: "6940c69c28e5d85d99ba498fc7e95a26" },
        { url: "/images/chains/scrt.png", revision: "0dd98be17447cf7c47d27153f534ca60" },
        { url: "/images/chains/stars.png", revision: "56d0bd40e52f010c7267eb78c53138f2" },
        { url: "/images/chains/strd.png", revision: "eebdfb53ba0bc9bba88b0bede7a44f6d" },
        { url: "/images/cloudmos-logo-light.png", revision: "a7423327e4280225e176da92c6176c28" },
        { url: "/images/cloudmos-logo-small.jpg", revision: "4b339b83e7dc396894537b83d794726d" },
        { url: "/images/cloudmos-logo.png", revision: "56d87e0230a0ad5dd745efd486a33a58" },
        { url: "/images/docker.png", revision: "fde0ed6a2add0ffabfbc5a7749fdfff2" },
        { url: "/images/keplr-logo.png", revision: "50397e4902a33a6045c0f23dfe5cb1bd" },
        { url: "/images/stargaze-find-collection-tokenid.png", revision: "604836e81eab30d9ca3566e79a701c55" },
        { url: "/images/wallet-connect-logo.png", revision: "8379e4d4e7267b47a0b5b89807a4d8f8" },
        { url: "/manifest.json", revision: "bf50133643178f43b4d102ab106819d9" },
        { url: "/mstile-150x150.png", revision: "4639e24da644e14af4e4daba3dd7af08" },
        { url: "/robots.txt", revision: "c2bb774b8071c957d2b835beaa28a58b" },
        { url: "/safari-pinned-tab.svg", revision: "a0fde4130c84e0d723dde3ece4a14fa8" }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: i }) =>
              s && "opaqueredirect" === s.type ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers }) : s
          }
        ]
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })]
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({ cacheName: "cross-origin", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }),
      "GET"
    );
});
