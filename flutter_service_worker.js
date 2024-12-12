'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d05959ec88685ded57c84459d56acb06",
"assets/AssetManifest.bin.json": "d41e15113bb63afe1eabb385689ba5f3",
"assets/AssetManifest.json": "80d8a42ce683ed9cbc25e5c321363ae7",
"assets/assets/documents/c++.jpg": "0c500b8c4d80daca168a2c0187b0240d",
"assets/assets/documents/c.jpg": "840e9702bae1d18b0cb9fe54b84e92a7",
"assets/assets/documents/degree.jpg": "0f5d363ad9a6dbf8a6da3a3169940534",
"assets/assets/documents/java.jpg": "9fe056d9534d7763fcb3b97b1aad16b8",
"assets/assets/documents/ncc.jpg": "bbb65fd55517262d1563dcfb5caf6254",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/about-harsh.png": "da6c3a2547a024344430a202ca1f65ee",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/logo.png": "fd78238c2f36d897490c6bf2badb7e40",
"assets/assets/images/profile.png": "cadedbd37b4e85cdb12f122cc3bec573",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "d4302739a34cb5e0890051af8551b828",
"assets/assets/images/small-down-arrow.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/projects/booking.png": "9504242364c8053053ff08ceaa1a64e9",
"assets/assets/projects/chat.png": "24a74a1ca330a86bd184d8a57d4fb6aa",
"assets/assets/projects/favorite.png": "d397d07bb967e0097c9b4045e55e5f65",
"assets/assets/projects/home.png": "a3486ffcb42462877633741849c3ad34",
"assets/assets/projects/label.png": "5acef9941a64e0c816905d8178bfe9af",
"assets/assets/projects/login.png": "c960e8be7cd1203eb24076700969623f",
"assets/assets/projects/offer.png": "0e70cd1ec5552b68cf9594a2a8a7b9a8",
"assets/assets/projects/register.png": "a3d16f46accf31f17384b7b32b1834ee",
"assets/assets/projects/search.png": "d67ae7d686570479c5612a1b3b1c0b8b",
"assets/assets/projects/setting.png": "02f9b68b8583280401d751edf19b2e8e",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "b1654b0dbb0ad1d5e3569acb985ef4aa",
"assets/NOTICES": "18643ff5eeea252d8c6f4ccfe94715cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eb3f8ecc9f5ab11fc9c88a7ed67773c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f9e67278086a4962bab5b5958c7f25a0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a9489af5aecb407f7c1e80e6376b7c43",
"icons/logo.png": "fd78238c2f36d897490c6bf2badb7e40",
"index.html": "f07ff0b5948afe751fa32c4cf47a38e3",
"/": "f07ff0b5948afe751fa32c4cf47a38e3",
"main.dart.js": "135dc96ab93f1b5b232fc0acbf4ee5f8",
"manifest.json": "bc60fd857891ce26bb3a7b2a4890094b",
"version.json": "88231b857fefba57b41a166ed4d250b3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
