const db = require("../config/db")
class GEtForms {
    constructor() {
        this.db = db;
    }

    async getAllForms(res) {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM contact ', (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result.length > 0) {
                    res.status(200).json({ result });
                    resolve();
                } else {
                    res.status(200).json({ msg: "no result found" });
                    resolve();
                }
            });

        })
    }
}

module.exports = GEtForms;