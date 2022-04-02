/* eslint max-len: "off" */

export const getStyles = (): string => {
  return `<style>
            html {
              height: 100%;
            }
            body {
                background-image: linear-gradient(#fff, #edf6f5);
                color: #808080;
                border: 0;
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            }
            h1, h2, h3, h4 {
              font-weight: lighter;
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
              width: 345px;
            }
            #ssr{
              margin-top: 100px;
              padding: 16px;
            }
            #ssr h1 {
              margin: 0;
              font-size: 1.5rem;
            }
            #ssr .logo {
              width: 42px;
              height: 42px;
              margin-right: 32px;
              margin-top: 4px;
            }
            #ssr a {
              color: #164346;
            }
            #ssr a:hover {
              color:#15868f;
            }
            #ssr .excerpt {
              // color:#ccc;
              // font-size: 1.1rem;
            }
            #ssr nav ul, #ssr nav li{
              margin: 0; padding: 0;
              margin-right: 4px;
              display:inline;
              list-style: none;
              font-size: 1.1rem;
            }

            #ssr .btn {
              background: white;
              padding: 6px;
              border-radius: 4px;
              border: 1px solid #808080;
              font-size: 1rem;
            }

            #ssr .btn:hover {
              background: #eee;
            }

            #ssr .flex {
              display: flex;
            }


          </style>`;
};
