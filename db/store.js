// You will need to lookup and use this package for the Unique IDs. (utils, fs, and uuid) (make sure you require it!!!) This package will help with generating unique ids in the db.json file

// create variables for readFileAsync and writeFileAsync
// const readFileAsync = (something with util)
// const writeFileAsync = (something with util)

// We need a class of store
class Store {

    // read()
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    // write()
        // return db/db.json JSON.stringify(note)

// getNotes()
    // return read().than(notes) parse notes concat(JSON.parse(notes))

// addNotes()
    // you need to save title, text = notes const (title, text) = note

    // if (!title || !text) throw an error title and notes cannot be blank (throw!!!)

    // add the UNIQUE id to the note using our package

    // create a new variable to hold our new note with the new given id
    // const userNote = {title, text, id: (needs to be equal to something)}

    // grab all notes, and the new note and update notes to return the new note ( ...notes, userNote)

    // 

// deleteNotes()

}

// export module here