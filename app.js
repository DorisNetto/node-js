const validator = require('validator');
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// customize yargs version
yargs.version('1.1.0');

// add
yargs.command({
    command: 'add', 
    describe: 'add a new note', 
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// remove
yargs.command({
    command: 'remove', 
    describe: 'remove a note', 
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// list
yargs.command({
    command: 'list', 
    describe: 'list the notes', 
    handler() {
        notes.listNotes();
    }
});

// read
yargs.command({
    command: 'read', 
    describe: 'read a note', 
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();



//console.log(getNotes());
//console.log(validator.isEmail('doris.netto@rethink.dev'));
//console.log(chalk.green.bold.inverse('Success!'));
