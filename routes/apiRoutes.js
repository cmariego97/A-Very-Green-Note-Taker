// require router and store
const router = require("./htmlRoutes")

// 1. get route to get all notes from DB
router.get('/notes', (req, res) => {
    store
    .getNotes()
    .than((notes) => res.json(notes)) 
    // res.json returns as a json obj coming from the db file
})

// 2. post route to add the notes
router.post('/notes', (req, res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
})

// 3. delete route to delete my notes


// export my module