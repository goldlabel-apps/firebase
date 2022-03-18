import pJSON from "../package.json";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import make from "./ssr/make";

console.log(pJSON.name + " vs " + pJSON.version);

const SSR = express();
SSR.use(cors({origin: true}));
SSR.get("*", (req:any, res:any) => {
  res.status(200).send(make(req));
});

exports.SSR = functions.https.onRequest(SSR);
