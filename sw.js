/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-ad0e37f8e9e3a87b663e.js"
  },
  {
    "url": "app-0ddd860b76e232f58eb7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7114e3bee28d724616bf.js"
  },
  {
    "url": "index.html",
    "revision": "bd34d3d3fa0df0064ee796e3cc39177b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1e70c2fb596649f32f2c717f726bb9f8"
  },
  {
    "url": "component---src-pages-index-js.379c605372ca0835f43f.css",
    "revision": "3ef3bd95fce60eb1a8504137a79eeead"
  },
  {
    "url": "component---src-pages-index-js-4876197d3c92c9669fd3.js"
  },
  {
    "url": "0-67258985b3e9175256eb.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js.379c605372ca0835f43f.css",
    "revision": "05ce328c073bff4efd1d2614cc9a08bc"
  },
  {
    "url": "component---src-pages-404-js-c450a18074ee2f113932.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
