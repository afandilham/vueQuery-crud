import express, { Express } from "express";
import Biodata from "../controllers/biodata.js";

const router: Express = express();
const bio = new Biodata();

router.route('/bio')
  .get(bio.getBio)
  .post(bio.createBio);

router.route('/bio/:id')
  .get(bio.getBioById)
  .put(bio.updateBio)
  .delete(bio.deleteBio);

export {
  router
}