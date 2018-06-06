import express from "express";
import { Router } from "express";
<<<<<<< HEAD
import {router as subjectRouter} from "./subjects";
=======
import subjectRouter from "./subjects";
>>>>>>> 54be240d163413e2ed86e0046160336c155e4d56
const router = Router();
/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).send("Hello World 2");
});

router.use("/subjects", subjectRouter);
export default router;
