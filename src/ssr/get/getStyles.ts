/* eslint max-len: "off" */

const gradientLight = "#DAEFF3";
const gradientDark = "#6EC1D4";
// const primary = "#18a3ad";
// const secondary = "#126a71";
const mid = "#158891";

export const getStyles = (): string => {
  return `<style>
            html {
              height: 100%;
            }
            body {
                background-image: linear-gradient(${gradientLight}, ${gradientDark});
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
            #ssr{
              margin-top: 0px;
              padding: 16px;
            }
            
            .fallback-off {
              display: none;
            }

            .fallback-on {
              display: flex;
              align-items: center;
              justify-content: left;
              flex-direction: column;
            }

            .ssr-content{
              
              flex-grow: 1;
              width: 690px;
            }
            
            #ssr h1 {
              margin: 0;
              font-size: 1.5rem;
            }
            #ssr .logo {
              width: 42px;
              height: 42px;
              margin-right: 16px;
              margin-top: 4px;
            }
            #ssr a {
              color: ${mid};
            }
            #ssr a:hover {
              color:#15868f;
            }
            #ssr nav ul, #ssr nav li{
              margin: 0; padding: 0;
              margin-right: 4px;
              display:inline;
              list-style: none;
              font-size: 0.8rem;
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
            #ssr .box {
              border: 1px solid white;
              background: rgba(255,255,255,0.25);
              margin-top: 16px;
            }
            
          </style>`;
};
