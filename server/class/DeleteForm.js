const db=require("../config/db")
class DeleteForm {
    constructor() {
        this.db = db;
    }

    async DeletedValueToDatabase(id) {
        return new Promise((resolve, reject) => {
            this.db.query(`delete from contact where id = ${Number(id)} `, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
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

module.exports=DeleteForm;