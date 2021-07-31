const mongoose = require('mongoose');


const connection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGOO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
        console.log(`db connected to ${con.connection.host}`);
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}


module.exports = connection;