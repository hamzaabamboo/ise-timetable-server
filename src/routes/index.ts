import express from "express";
import { Router } from "express";
import subjectRouter from "./subjects";
const router = Router();
/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).send("Hello World 2");
});

router.use("/subjects", subjectRouter);
export default router;
