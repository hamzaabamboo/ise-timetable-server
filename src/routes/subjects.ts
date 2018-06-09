import express from "express";
import { Router } from "express";
import { SubjectModel } from "../models/subject.models";
export const router = Router();
/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const subject = await SubjectModel.findOne({ id: id });
  console.log(subject);
  res.send(subject);
});

router.get("/:id/:section", async (req, res, next) => {
  const { id, section } = req.params;
  const subject = await SubjectModel.findOne({ id: id });
  if (subject === null) res.send("error");
  else res.send(subject.sections[section]);
});
