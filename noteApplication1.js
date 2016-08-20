     /********************************************************************************************************************/
     /* A Note Appllication thats helps take in notes; Saving the Author's name , notes and includes a search function****/ 
     /********************************************************************************************************************/
     /********************************************************************************************************************/
     /********************************************************************************************************************/


 
	 class Note {
	constructor(note_content, author){
		this.author = author.toUpperCase(author);
		this.note_content = note_content;
	}
 }
 
 
 class NoteApplication {
 	
 	constructor(author) {
		this.author = author;
		this.notes = [];
	}
 	
 	create(note_content) {
 		var note = new Note(note_content, this.author);
 		console.log("");
		this.notes.push(note);
		
 	}
 	
 	listNotes() {
 	
		for(i = 0; i < this.notes.length; i++){
			console.log("Note_ID " + (i+1));
			console.log([this.notes[i].note_content]);
			console.log(" ")
			console.log("By : ", this.notes[i].author);
			console.log("");
			console.log("");
		} 
 	}
 
 get(note_id){
		if (this.notes[note_id])
		 return this.notes[note_id];
		else 
		 return console.log("Epmty page!, Enter a  page lower number");	
 	}
 
 	search(search_text){
		var filtered = this.notes.filter(function (note) {
			//return search_text != -1;
			if (note.note_content.indexOf(search_text) !== -1) {
				return note.note_content.indexOf(search_text) !== -1;
			}
			else return console.log ("character not found in note");
		});
		console.log(filtered);
	}
	
	 delete(note_id){
	 	
	 	console.log("");
		console.log("");
	 	console.log(this.notes[note_id]);
	 	console.log("");
		console.log("");
	 }
	// 	deleted_page = this.note[note_id];
		
	// 	if (this.notes.splice(note_id) ){
	// 	this.notes.splice(note_id);
		
	// 	console.log ([deleted_word] + "was suscessful deleted");
	// 	}
	// 	else console.log("Page was blank");
	// }
 //}
 
 
 }
		
	}
	
	delete_note(note_id) {
		
		delete this.note[note_id];
	}
	
	edit(note_id,new_content) {
		
		this.note[note_id] = new_content;
	}
}
