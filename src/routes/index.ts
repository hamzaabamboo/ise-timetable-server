import express from "express";
import { Router } from "express";
const router = Router();
/* GET home page. */
router.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

export default router;
