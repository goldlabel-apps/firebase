import pJSON from "../package.json";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import render from "./ssr/render";

console.warn(pJSON.name + " vs " + pJSON.version);

// SSR
const SSR = express();
SSR.use(cors({origin: true}));
SSR.get("*", (req:any, res:any) => {
  res.status(200).send(render(req));
});
exports.SSR = functions.https.onRequest(SSR);

// ASSETS
const ASSETS = express();
ASSETS.use(cors({origin: true}));
const assetsOptions = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  maxAge: "1d",
  redirect: false,
  setHeaders: function(res) {
    res.set("x-timestamp", Date.now());
  },
};
ASSETS.use(express.static("dist", assetsOptions));
ASSETS.get("*", (req:any, res:any) => {
  res.end();
});
exports.ASSETS = functions.https.onRequest(ASSETS);
