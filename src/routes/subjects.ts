import express from 'express'
import { Router } from 'express'
import { SubjectModel } from '../models/subject.models'
export const router = Router()
/* GET users listing. */
router.get('/', async (req, res, next) => {
    const subjects = await SubjectModel.find()
    res.send(subjects)
})

router.post('/', async (req, res, next) => {
    let arrayOfSubject: object[] = []
    await Promise.all(
        req.body.map(element =>
            (async () => {
                const subject = await SubjectModel.findOne({
                    id: element.subject
                })
                console.log('subject', subject)
                if (subject !== null) {
                    let sec = subject.sections[element.section]
                    console.log('section', sec)
                    if (sec === undefined)
                        res.status(404).send('error section not found')
                    let { id, name, credit } = subject
                    sec = {
                        id,
                        name,
                        credit,
                        section: element.section,
                        ...sec
                    }
                    arrayOfSubject.push(sec)
                } else res.status(404).send('error subject not found')
            })()
        )
    )

    res.send(arrayOfSubject)
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    const subject = await SubjectModel.findOne({ id: id })
    console.log(subject)
    if (subject) res.send(subject)
    else res.status(404).send('error subject not found')
})

router.get('/:id/:section', async (req, res, next) => {
    const { id, section } = req.params
    const subject = await SubjectModel.findOne({ id: id })
    console.log(subject)
    if (subject === null) res.status(404).send('error subject not found')
    else {
        const result = subject.sections[section]
        if (result) res.send(subject.sections[section])
        else res.send('error section not found')
    }
})
