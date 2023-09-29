const db = require('../config/db');
const app = require('express').Router();


const sendForm = require("../class/SendForm")
const getForm = require("../class/GetForms")
const updataForm = require("../class/UpdataForm")
const deleteForm = require("../class/DeleteForm")


const SendForm = new sendForm();
const GetForms = new getForm();
const UpdataForm = new updataForm();
const DeleteForm = new deleteForm();

function getDate(req) {
    const body = req.body;
    return body;
}

app.post('/sendForm', async (req, res) => {
    const value = getDate(req);
    try {
        await SendForm.InsertValueToDatabase(value, res);
    } catch (err) {
        res.status(404).json({ error: "Error in send Form " + err });
    }
})


app.get('/getForms', async (req, res) => {
    const value = getDate(req);
    try {
        await GetForms.getAllForms(res);

    } catch (err) {
        res.status(404).json({ error: "Error in get Form " + err });
    }
})


app.put('/UpdataForm/:id', async (req, res) => {
    const value = getDate(req);
    const id = req.params.id;

    try {
        const FormExists = await UpdataForm.checkIfFormExists(id);
        if (!FormExists) {
            return res.status(500).json({ error: "form does not exist" });
        }

        await UpdataForm.UpdateValueToDatabase(value,res,id);

    } catch (err) {
        res.status(404).json({ error: "Error in Updata Form " + err });
    }
})


app.delete('/DeleteForm/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const FormExists = await DeleteForm.checkIfFormExists(id);
        if (!FormExists) {
            return res.status(500).json({ error: "form does not exist" });
        }

        await DeleteForm.UpdateValueToDatabase(id);

        res.status(200).json({ massage: 'deleted the trip',msg: "your trip are Deleted" });
    } catch (err) {
        res.status(404).json({ error: "Error in Delete Form " + err });
    }
})

module.exports =app;