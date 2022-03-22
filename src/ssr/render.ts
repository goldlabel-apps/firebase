/* eslint-disable */
import pJSON from "../../package.json";
import { getEnv } from "./get/getEnv";
import { getServiceWorker } from "./get/getServiceWorker";
import { getRouteList } from "./get/getRouteList";
import { getStyles } from "./get/getStyles";

export default function render(req:any) { 
  
  const env = getEnv(req);
  const { version } = pJSON;
  let assetsURL, routeList, siteURL, rootConfigURL, sharedURL, articleURL, personaURL;

  switch( env ) {
    case "LOCAL":
      siteURL = "http://localhost:5001/listingslab-app/us-central1/SSR";
      assetsURL = "http://localhost:2022/";
      rootConfigURL = "http://localhost:9000/listingslab-root-config.js";
      sharedURL = "http://localhost:1945/listingslab-shared.js";
      articleURL = "http://localhost:1977/listingslab-article.js";
      personaURL = "http://localhost:1975/listingslab-persona.js";
      break;
    default:
      siteURL = "https://listingslab.com";
      assetsURL = "https://listingslab.com/";
      rootConfigURL = "https://listingslab.com/microfrontends/root-config/listingslab-root-config.js";
      sharedURL = "https://listingslab.com/microfrontends/shared/listingslab-shared.js";
      articleURL = "https://listingslab.com/microfrontends/article/listingslab-article.js";
      personaURL = "https://listingslab.com/microfrontends/persona/listingslab-persona.js";
  } 
  const siteTitle = "Listingslab Software";
  const siteIcon = `${assetsURL}png/listingslab512.png`;
  const themeLight = "#FFF";
  const content = {
    title: "Listingslab Software",
    excerpt: "All your base are belong to us was a popular Internet meme based on a badly translated phrase from the opening cutscene of the video game Zero Wing",
    ogImage: `${assetsURL}png/opengraph.png`,
    image: `${assetsURL}png/allyourbase.png`,
    assetsURL, siteURL, rootConfigURL, sharedURL,personaURL,
    themeLight, siteTitle, siteIcon, version,
  }; 

  routeList = getRouteList(req, env);
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
      <meta name="keywords" content="single-spa, microfrontends, node, react, PWA" />

      <meta name="geo.region" content="MT" />
      <meta name="geo.placename" content="Attard" />
      <meta name="geo.position" content="35.891377;14.443941" />
      <meta name="ICBM" content="35.891377, 14.443941" />

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
      <link rel="apple-touch-icon" href="${assetsURL}png/listingslab512.png" />

      ${ getStyles() }

      <script type="systemjs-importmap">
        {
          "imports": {
            "@listingslab/root-config": "${rootConfigURL}",
            "@listingslab/shared": "${sharedURL}",
            "@listingslab/article": "${articleURL}",
            "@listingslab/persona": "${personaURL}",
            "@mui/material":"https://unpkg.com/@mui/material@5.4.3/umd/material-ui.production.min.js",
            "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
            "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
            "react-redux": "https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.2.6/react-redux.min.js",
            "react-draggable": "https://cdn.jsdelivr.net/npm/react-draggable@4.4.4/build/cjs/cjs.min.js",
            "gsap": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.3/gsap.min.js",
            "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
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
    
      <noscript>You need a LOT of JavaScript to use this App
        <a href="https://listingslab.com/javascript"
          target="_self"
          title="${excerpt}">
          ${title}
        </a>
      </noscript>
      
      <div class="ssr-wrapper">
        <div id="ssr" class="ssr-content">
          <a href="?logoClick">
            <img 
            align="left"
            class="logo" 
            src="${assetsURL}png/listingslab32.png"  />
          </a>
          
          <h1>${siteTitle}</h1>

          <p>
            ${ excerpt }
          </p>
          
          <div class="routeList">
            ${ routeList }
          </div>
        </div>
      </div>

      <script>
        // github.com/listingslab-software/root-config
        System.import('@listingslab/root-config');
      </script>

    </body>
  </html>`;   
}
