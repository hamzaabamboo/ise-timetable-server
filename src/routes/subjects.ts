import express from "express";
import { Router } from "express";
import { SubjectModel } from "../models/subject.models";
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

