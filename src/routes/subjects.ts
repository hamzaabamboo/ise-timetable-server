import express from "express";
import { Router } from "express";
import { SubjectModel } from "../models/subject.models";
<<<<<<< HEAD
export const router = Router();
/* GET users listing. */
router.get('/', (req, res, next) => {
	res.send('respond with a resource');
});

router.get('/:id', async (req,res,next) => {
	const {id} = req.params;
	console.log(id);
	const subject = await SubjectModel.findOne({id: id});
	res.json(subject);
})

=======
const router = Router();
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const subject = await SubjectModel.findOne({ id: id });
  res.json(subject);
});

export default router;
>>>>>>> 54be240d163413e2ed86e0046160336c155e4d56
