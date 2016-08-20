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
		console.log("");
 	}
 	
 	listNotes() {
 	console.log("************************************************")
		for(i = 0; i < this.notes.length; i++){
			console.log("");
			console.log("Note_ID " + (i+1));
			console.log([this.notes[i].note_content]);
			console.log(" ");
			console.log("By : ", this.notes[i].author);
			console.log("");
		} 
 	}
 
 get(note_id){
		if (this.notes[note_id])
		 return this.notes[note_id];
		else 
		 return console.log("Epmty page!, Please check listNotes");	
 	}
 
 	search(search_text){
		var filtered = this.notes.filter(function (note) {
			
			if (note.note_content.indexOf(search_text) !== -1) {
		
		 //return note.note_content.indexOf(search_text) !== -1 ;
			
			}
			
			else if (([note.note_content.indexOf(search_text) !==-1]) && (search_text.length ==1)){
			
			console.log ("character not found! ");
			
			
			}
			else if (([note.note_content.indexOf(search_text) !== -1]) && (search_text.length >=1)){
			console.log("word not found!");
				
			}
		//	console.log([search_text.length])	
		
			});
//console.log(filtered);
	}
	
	 delete(note_id){
	 	
	 	if (note_id<=[this.notes.length])
	 	this.notes.splice((note_id),1);
	 	else{
	 	console.log("this  page is empty");
	 	console.log("Use listNotes to check list note");
	 
	}
 
	 }
 
 }
