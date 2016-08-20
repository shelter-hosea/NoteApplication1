     /********************************************************************************************************************/
     /* A Note Appllication thats helps take in notes; Saving the Author's name , notes and includes a search function****/ 
     /********************************************************************************************************************/
     /********************************************************************************************************************/
     /********************************************************************************************************************/


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

	get_note(note_id) {
	
		return this.noteslist[note_id];
	}

	search(search_text) {
		for(let i in this.notes){
				if(search_text === this.notes[i]) {
					console.log('Showing result for search: ' + search_text)
					console.log('Note ID: ' + i)
					console.log(this.notes[i])
					console.log('BY Author ' + this.author)
				}
			}
		

		
	}
	
	delete_note(note_id) {
		
		delete this.note[note_id];
	}
	
	edit(note_id,new_content) {
		
		  this.note[note_id] = new_content;
	}
}
