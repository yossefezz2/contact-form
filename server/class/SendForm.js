const db=require("../config/db")
class SendForm {
    constructor() {
        this.db = db;
    }

    async InsertValueToDatabase(value,res) {
        return new Promise((resolve, reject) => {
            this.db.query(
                'INSERT INTO `contact` (`name`, `email`, `subject`, `massage`)  VALUES (? ,?, ?, ?)',
                [value.name, value.email, value.subject, value.massage ],
                (err, result) => {
                    if (err) {
                    } if(result){
                        res.send({ message: 'done' });
                    }else{
                        res.send({ message: 'ENTER CORRECT ASKED DETAILS!' });
                    }
                }
            );
        })
    }
}

module.exports=SendForm;