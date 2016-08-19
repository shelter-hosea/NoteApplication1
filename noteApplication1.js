
class NoteApplicaiton {

	constructor(author) {	

	this.author = author ;
	this.noteList = [] ;
	
}
create (note_content) {

	this.noteList.push(note_content)
}


listNotes() {

	for (var note_id = 0; note_id< note_id.length; ++note_id) {
		
		console.log("Note ID: ",+ [note_id] );
		console.log("By Author" + this.author);
	}
	
}

get(note_id) {
	return this.noteslist[note_id];
}

search(search_text)
}
