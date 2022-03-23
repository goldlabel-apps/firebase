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
            h1, h2 {
              font-weight: lighter;
            }
            h3 {
              font-weight: normal;
            }
            ul, li {
              list-style: none;
            }
            a {
              text-decoration: none;
            }
            .ssr-wrapper {
              display: flex;
              align-items: center;
              justify-content: left;
              flex-direction: column;
            }
            .ssr-content{
              flex-grow: 1;
              min-width: 320px;
              max-width: 600px;
            }
            #ssr{
              margin-top: 32px;
              padding: 16px;
              
            }
            #ssr h1 {
              margin: 0;
              font-size: 1.5rem;
            }
            #ssr .logo {
              width: 50px;
              height: 50px;
              margin-right: 16px;
            }
            #ssr a {
              color: #164346;
            }
            #ssr a:hover {
              color:#15868f;
            }
            #ssr ul, #ssr li{
              margin: 0; padding: 0;
              margin-right: 4px;
              display:inline;
              list-style: none;
              font-size: 1.1rem;
            }
          </style>`;
};
