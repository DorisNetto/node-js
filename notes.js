const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'your notes...';
}

const addNote = function (title, body){
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    
    if (!duplicateNote) {
        notes.push({
            title, 
            body
        });
        saveNotes(notes);
        console.log(chalk.green.bold.inverse('note added'));
    } else {
        console.log(chalk.red.bold.inverse('note title taken'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold.inverse('note removed'));
    } else {
        console.log(chalk.red.bold.inverse('note not found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    console.log(chalk.bold.inverse('your notes:'));
    
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.bold.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.bold.inverse('note not found'));
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        return [];
    }  
}

module.exports = {
    getNotes, 
    addNote,
    removeNote,
    listNotes, 
    readNote
};