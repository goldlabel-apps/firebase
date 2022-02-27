/*
        <aside>
          <h4>Persona</h4>
          <p>pathname & hostname?</p>
        </aside>
*/

/* eslint-disable */

// const importsProd = `"imports": {
//         "@listingslab/root-config": "https://listingslab.com/root-config/listingslab-root-config.js",
//         "@listingslab/appshell": "https://listingslab.com/appshell/listingslab-appshell.js",
//         "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
//         "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
//       }`;

// const importsDev = `"imports": {
//         "@listingslab/root-config": "http://localhost:9000/listingslab-root-config.js",
//         "@listingslab/appshell": "http://localhost:8080/listingslab-appshell.js"
//       }`;


/*

<link rel="preload" href="https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js" as="script">
    
    <script type="systemjs-importmap">
      {
        "imports": {
          "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
        }
      }
    </script>

<script>
  System.import('@listingslab/root-config');
</script>

<script type="systemjs-importmap">
      
    </script>

{
  ${ importsProd }
}

<import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>

${ mode === "DEV" ? importsDev : importsProd }


<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: localhost:*; script-src 'unsafe-inline' 'unsafe-eval' https: localhost:*; connect-src https: localhost:* ws://localhost:*; style-src 'unsafe-inline' https:; object-src 'none';">
    

*/