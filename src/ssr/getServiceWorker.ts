import {getEnv} from "./getEnv";
export const getServiceWorker = (req:unknown): string => {
  const env = getEnv(req);
  if (env === "LOCAL") return "";
  return `<script>
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js')
                  .then(function(registration) {
                  }, function(err) {
                  });
                });
              }
            </script>`;
};
