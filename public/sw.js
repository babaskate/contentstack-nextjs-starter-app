if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/19frA-QMEuB3R6TZCkipt/_buildManifest.js",revision:"2b5b891558084bcd808ae5fceea0b3cd"},{url:"/_next/static/19frA-QMEuB3R6TZCkipt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/75fc9c18-c0cb841eaf75495d.js",revision:"c0cb841eaf75495d"},{url:"/_next/static/chunks/889.da4d11a6b5916b50.js",revision:"da4d11a6b5916b50"},{url:"/_next/static/chunks/954-e04598800f60ba99.js",revision:"e04598800f60ba99"},{url:"/_next/static/chunks/framework-7a7e500878b44665.js",revision:"7a7e500878b44665"},{url:"/_next/static/chunks/main-a4b676d4e7182e84.js",revision:"a4b676d4e7182e84"},{url:"/_next/static/chunks/pages/%5Bpage%5D-769d608a58f4abe4.js",revision:"769d608a58f4abe4"},{url:"/_next/static/chunks/pages/404-ef5dab8c2d34be41.js",revision:"ef5dab8c2d34be41"},{url:"/_next/static/chunks/pages/_app-4132088c3e5b2267.js",revision:"4132088c3e5b2267"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/blog-a72d9c37fb0011ed.js",revision:"a72d9c37fb0011ed"},{url:"/_next/static/chunks/pages/blog/%5Bpost%5D-1bf4ad6635fde624.js",revision:"1bf4ad6635fde624"},{url:"/_next/static/chunks/pages/index-50442c238bd0c675.js",revision:"50442c238bd0c675"},{url:"/_next/static/chunks/pages/scooter-c1ec374e29ad6614.js",revision:"c1ec374e29ad6614"},{url:"/_next/static/chunks/pages/sitemap.xml-28bbc66c2454a350.js",revision:"28bbc66c2454a350"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8b8b59e1720917ef.js",revision:"8b8b59e1720917ef"},{url:"/_next/static/css/1143615cc50d29a4.css",revision:"1143615cc50d29a4"},{url:"/contentstack-readme-logo.png",revision:"b876b33d59cbf5ce3ec7d9242745a7de"},{url:"/copy.svg",revision:"b6ed71ceabe5e24a1ae9d3b964c92404"},{url:"/favicon.ico",revision:"9a6e4aaa6e90b763a122b06b12417091"},{url:"/icon/icon-192x192.png",revision:"ca9d675a868e5e2ef3389bf8e9e41ef6"},{url:"/icon/icon-256x256.png",revision:"4f4eed8bd6c5ce7c92ab25bc0f6d6319"},{url:"/icon/icon-384x384.png",revision:"d20f17d829aa3f2a136a2e20c3cd566f"},{url:"/icon/icon-512x512.png",revision:"9e5e8e7e2f879b75d304f2214fd46ac1"},{url:"/json.svg",revision:"7b433b4965ec8546087482b1d0cc21c1"},{url:"/manifest.json",revision:"46cbd3b8d736e5caa98d8c92129b1d87"},{url:"/starter-app.png",revision:"b0383c57ab01d0be2aee3ed14771e519"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
