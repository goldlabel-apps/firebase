/* eslint-disable */

const getEnv = (req:any) => {
  let env = "PROD";
  if ( req.hostname === "localhost" ) {
    env = "LOCAL";
  }
  return env;
};

export default function makeHTML(req:any) { 
  const env = getEnv(req);
  let assetsURL, siteURL, rootConfigURL, appshellURL;
  const siteTitle = "listingslab";
  const themeColor = "#006c72";
  switch( env ) {

    case "LOCAL":
      siteURL = "http://localhost:5001/listingslab-pingpong/us-central1/SSR";
      assetsURL = "http://localhost:3000/";
      rootConfigURL = "http://localhost:9000/listingslab-root-config.js";
      appshellURL = "http://localhost:8080/listingslab-appshell.js";
      break;

    default:
      siteURL = "https://listingslab.com";
      assetsURL = "https://listingslab.com/";
      rootConfigURL = "https://listingslab.com/main/listingslab-root-config.js";
      appshellURL = "https://listingslab.com/appshell/listingslab-appshell.js";
  } 
  const siteIcon = `${assetsURL}png/logo192.png`;
  
  const content = {
    title: "Listingslab Software",
    excerpt: "Software",
    body: "body",
    ogImage: `${assetsURL}png/opengraph.png`,
    assetsURL, siteURL, rootConfigURL, appshellURL, themeColor, siteTitle, siteIcon
  }; 
  const {title, excerpt, ogImage } = content;
  
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="${themeColor}" />
      <meta name="description" content="${excerpt}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="${siteURL}" />
      <meta property="og:title" content="${title} | ${siteTitle}" />
      <meta property="og:description" content="${excerpt}" />
      <meta property="og:image" content="${ogImage}" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="msapplication-TileColor" content="${themeColor}">
      <meta name="msapplication-TileImage" content="${assetsURL}png/ms-icon-144x144.png">
      <meta name="importmap-type" content="systemjs-importmap" />
      <script type="systemjs-importmap">
        {
          "imports": {
            "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
          }
        }
      </script>
      <script type="systemjs-importmap">
        {
          "imports": {
            "@listingslab/root-config": "${rootConfigURL}",
            "@listingslab/appshell": "${appshellURL}",
            "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
            "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
            "@mui/material":"https://unpkg.com/@mui/material@5.4.3/umd/material-ui.production.min.js"
          }
        }
      </script>

      <link rel="manifest" href="${assetsURL}manifest.json">
      <link rel="icon" href="${assetsURL}favicon.ico" />
      <link rel="apple-touch-icon" href="${assetsURL}png/logo512.png" />
      <link type="text/css" href="${assetsURL}css/listingslab.css" rel="stylesheet" />

      <title>${title}</title>

      <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js"></script>  

      <script>
        var ssr = ${JSON.stringify(content, null, 2)};
      </script>
      
    </head>
    <body>
      <noscript>You need a LOT of JavaScript to use  <a
        href="https://listingslab.com/pwa"
        target="_self"
        title="PWAs are mobile apps that took all the right vitamins">
        Progressive Web Apps
      </a>(PWA)</noscript>
      
      <div id="ssr">
        <div class="landing-element">
          <img
            alt="${title}" 
            src="https://listingslab.com/png/logo192Dark.png" />
        </div>
        <div class="um">
          <h1>${title}</h1>
        </div>
      </div>
      
      <script>
        System.import('@listingslab/root-config');
      </script>

    </body>
  </html>`;

  return html;
}
