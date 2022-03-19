/* eslint-disable */
import pJSON from "../../package.json";
import { getEnv } from "./getEnv";
import { getServiceWorker } from "./getServiceWorker";
// import { getMdList } from "./getMdList";
import { getRouteList } from "./getRouteList";
import { getStyles } from "./getStyles";


export default function make(req:any, db:any) { 
  const env = getEnv(req);
  const { version } = pJSON;
  let assetsURL, siteURL, rootConfigURL, 
      menuURL, sharedURL, filebrowserURL, articleURL, routeList;
  
  const siteTitle = "Listingslab Software";
  const themeDark = "#126970";
  const themeLight = "#edf6f5";

  routeList = getRouteList(req, env);
  // mdList = getMdList(req, env);

  switch( env ) {

    case "LOCAL":
      siteURL = "http://localhost:5001/listingslab-app/us-central1/SSR";
      assetsURL = "http://localhost:2022/";
      rootConfigURL = "http://localhost:9000/listingslab-root-config.js";
      menuURL = "http://localhost:1975/listingslab-menu.js";
      sharedURL = "http://localhost:1945/listingslab-shared.js";
      filebrowserURL = "http://localhost:1985/listingslab-filebrowser.js";
      articleURL = "http://localhost:1977/listingslab-article.js";
      break;

    default:
      siteURL = "https://listingslab.com";
      assetsURL = "https://listingslab.com/";
      rootConfigURL = "https://listingslab.com/root-config/listingslab-root-config.js";
      menuURL = "https://listingslab.com/menu/listingslab-menu.js";
      sharedURL = "https://listingslab.com/shared/listingslab-shared.js";
      filebrowserURL = "https://listingslab.com/filebrowser/listingslab-filebrowser.js";
      articleURL = "https://listingslab.com/article/listingslab-article.js";
  } 

  const siteIcon = `${assetsURL}png/listingslab512.png`;
  
  const content = {
    title: "Listingslab Software",
    excerpt: "",
    ogImage: `${assetsURL}png/opengraph.png`,
    assetsURL, siteURL, rootConfigURL, 
    themeDark, themeLight, siteTitle, siteIcon,
    menuURL, sharedURL, filebrowserURL, version
  }; 
  const {title, excerpt, ogImage } = content;
  
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="${themeLight}" />
      <meta itemprop="name" content="${siteTitle} ${version}" />
      <meta name="${siteTitle} ${version}" />
      <title>${title}</title>
      
      <meta name="description" content="${excerpt}" />
      <meta name="keywords" content="ssr, node, react, PWA" />
      <meta name="geo.region" content="Mediterranean Islands" />
      <meta name="geo.placename" content="Island Countries" />
      <meta name="geo.position" content="35.88999533; 14.43971116" />
      <meta name="ICBM" content="35.88999533, 14.43971116" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="${siteURL}" />
      <meta property="og:title" content="${title} | ${siteTitle}" />
      <meta property="og:description" content="${excerpt}" />
      <meta property="og:image" content="${ogImage}" />
      
      <meta name="twitter:site" content="https://listingslab.com/twitter" />
      <meta name="twitter:title" content="${title}" />
      <meta name="twitter:description" content="${excerpt}"/>
      <meta name="twitter:creator" content="listigslab" />
      <meta name="twitter:image" content="${ogImage}" />

      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="msapplication-TileColor" content="${themeLight}">
      <meta name="msapplication-TileImage" content="${assetsURL}png/ms-icon-144x144Dark.png">

      <meta name="importmap-type" content="systemjs-importmap" />
      <link rel="manifest" href="${assetsURL}manifest.json">
      <link rel="icon" href="${assetsURL}favicon.ico" />
      <link rel="apple-touch-icon" href="${assetsURL}png/logo512.png" />

      ${ getStyles() }

      <script type="systemjs-importmap">
        {
          "imports": {
            "@listingslab/root-config": "${rootConfigURL}",
            "@listingslab/menu": "${menuURL}",
            "@listingslab/shared": "${sharedURL}",
            "@listingslab/filebrowser": "${filebrowserURL}",
            "@listingslab/article": "${articleURL}",

            "gsap": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.3/gsap.min.js",
            "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
            "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
            "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
            "react-redux": "https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.2.6/react-redux.min.js",
            "@mui/material":"https://unpkg.com/@mui/material@5.4.3/umd/material-ui.production.min.js"
          }
        }
      </script>
      ${ getServiceWorker(req) }
      <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js"></script>  

      <script>var ssr = ${JSON.stringify(content, null, 2)};</script>
      
    </head>
    <body>
      <noscript>You need a LOT of JavaScript 
        <a
          href="https://listingslab.com/pwa"
          target="_self"
          title="${excerpt}">
          ${title}
        </a>
        
        <p>${excerpt}</p>
      </noscript>

      <div id="ssr">

      <div class="logo">
        <a href="?logoclick">
          <img src="${assetsURL}png/listingslab32.png" align="left" width="32" height="32" />
        </a>
      </div>
        
        <h1>${title}</h1>
        <h2>${excerpt}</h2>
        ${ routeList }
        
      </div>

      <script>
        System.import('@listingslab/root-config');
      </script>
    </body>
  </html>`;   
}

/*
<pre>
  ${JSON.stringify(mdList, null, 2)}
</pre>
*/