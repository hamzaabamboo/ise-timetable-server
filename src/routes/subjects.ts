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
  if (subject) res.send(subject);
  else res.send("error");
});

router.get("/:id/:section", async (req, res, next) => {
  const { id, section } = req.params;
  const subject = await SubjectModel.findOne({ id: id });
  console.log(subject);
  if (subject === null) res.send("error");
  else {
    const result = subject.sections[section];
    if (result) res.send(subject.sections[section]);
    else res.send("error");
  }
});
