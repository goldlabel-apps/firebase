import {getEnv} from "./getEnv";
export const getServiceWorker = (req:unknown): string => {
  const env = getEnv(req);
  if (env === "LOCAL") return "";
  // const silence = true;
  // if (silence) return "LLserviceWorker";
  return `<script>
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.unregister('/service-worker.js')
                  .then(function(registration) {
                  }, function(err) {
                  });
                });
              }
            </script>`;
};
