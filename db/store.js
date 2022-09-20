const fs = require('fs');
const notes = require ('./db.json');
const router = express();

// uuid
// const { v4: uuidv4 } = require('uuid');

class Store {
    
    // read file Async
    read () {
        return readFileAsync ('db/db.json', 'utf8');
    }

    // write return db/db.json JSON.stringify(note);

//getNotes
// router.get('/notes', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
// });

//addNotes

//deleteNotes

}

// export module here
module.exports = { addNotes, deleteNotes };