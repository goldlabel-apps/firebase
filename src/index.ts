import pJSON from "../package.json";
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

import {routes} from "./api/routes";
import makeHTML from "./ssr/makeHTML";

console.log(pJSON.name + " vs " + pJSON.version);

const SSR = express();
SSR.use(cors({origin: true}));
SSR.get("*", (req:any, res:any) => {
  res.status(200).send(makeHTML(req));
});

const API = express();
API.use(cors({origin: true}));
API.get("/", (req:any, res:any) => {
  sendResponse(res, req, {
    status: 200,
    message: "Help you with something, brah?",
    routes: `${getServiceURL(req)}/routes`,
  });
});
API.get("/routes", (req:any, res:any) => {
  sendResponse(res, req, {
    status: 200,
    message: "Array of route objects",
    dataType: "array",
    data: routes,
  });
});

API.get("**", (req: any, res: any) => {
  sendResponse(res, req, {
    status: 404,
    message: "Sorry, endpoint not found",
  });
});

const sendResponse = (res:any, req:any, responseObj:any) => {
  const serviceResponse = {
    service: "API",
    version: pJSON.name + "_" + pJSON.version,
    baseurl: getServiceURL(req) + "/",
    time: Date.now(),
    request: {
      method: req.method,
      endoint: getServiceURL(req) + req.path,
    },
    response: {
      ...responseObj,
    },
  };
  res.status(200).send(JSON.stringify(serviceResponse));
};

const getServiceURL = (req:any) => {
  let serviceURL = "https://us-central1-listingslab-pingpong.cloudfunctions.net/API";
  if ( req.hostname === "localhost" ) {
    serviceURL = "http://localhost:5001/listingslab-pingpong/us-central1/API";
  }
  return serviceURL;
};

exports.API = functions.https.onRequest(API);
exports.SSR = functions.https.onRequest(SSR);
