const db=require("../config/db")
class UpdataForm {
    constructor() {
        this.db = db;
    }

    async UpdateValueToDatabase(value,res,id) {
        return new Promise((resolve, reject) => {
            this.db.query(
                'UPDATE `contact` SET `name` = ?, `email` = ?, `subject` = ?, `massage` = ? WHERE `contact`.`id` = ?;',
                [value.name, value.email, value.subject, value.massage, Number(id)],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } if (result) {
                        res.send({ message: 'done' });
                        resolve();
                    } else {
                        res.send({ message: 'ENTER CORRECT ASKED DETAILS!' });
                        resolve();
                    }
                }
            );
        })
    }
    async checkIfFormExists(id) {
        return new Promise((resolve, reject) => {
            this.db.query("SELECT * FROM contact WHERE id = ?", [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length > 0) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            });
        });
    }
}

module.exports=UpdataForm;