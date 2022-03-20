/* eslint max-len: "off" */

export const getStyles = (): string => {
  return `<style>
            html {
              height: 100%;
            }
            body {
                background-image: linear-gradient(#fff, #edf6f5);
                border: 0;
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: lighter;
            }
            ul, li {
              list-style: none;
            }
            a {
              text-decoration: none;
            }
            #ssr{
              display:flex;
              width: 355px;
              margin: auto;
              padding-top: 8px;
            }
            #ssr h1 {
              font-size: 0.90rem;
              font-weight: normal;
            }
            #ssr .logo {
              width: 24px;
              height: 24px;
              margin: 8px;
            }
            #ssr a {
              color: #18a2ad;
            }
            #ssr ul, #ssr li{
              font-size: 0.70rem;
              margin: 0;
              display:inline;
              list-style: none;
            }
            
            #ssr .routeList {
              padding-top: 8px;
            }
          </style>`;
};
