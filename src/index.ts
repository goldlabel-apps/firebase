import pJSON from "../package.json";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import render from "./ssr/render";
// import {endpointRouter} from "./api/endpointRouter";

console.warn(pJSON.name + " vs " + pJSON.version);

const SSR = express();
SSR.use(cors({origin: true}));
SSR.get("*", (req:any, res:any) => {
  res.status(200).send(render(req));
});

const API = express();
API.use(cors({origin: true}));
API.get("*", (req:any, res:any) => {
  res.status(200).send("API");
});

exports.SSR = functions.https.onRequest(SSR);
exports.API = functions.https.onRequest(API);
