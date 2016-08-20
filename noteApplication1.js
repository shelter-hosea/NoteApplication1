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
 	console.log("***************************************************************");
		for(i = 0; i < this.notes.length; i++){
			console.log("");
			console.log("Note_ID " + (i+1));
			console.log([this.notes[i].note_content]);
			console.log(" ");
			console.log("By : ", this.notes[i].author);
			console.log("");
			// if ( ([this.notes[i].note_content] === undefined))
			// return null ;
		} 
	console.log("***************************************************************")
	;console.log(                                                            );	
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
	 	
	//  if ( ([this.notes[note_id].note_content] === undefined) && (note_id <= [this.note.lenght]))
	//  console.log("am in the server")
	// //  {
	// // 	 for (i= note_id ;i < [this.notes.length]; ++i)	{
	// //  temp = this.notes[note_id+1].note_content ;
	// //  //this.notes.insert(note_id,temp) ;
	// //  //console.log([temp] );
	// //  ////at the end if splice
	 
 //}
	//  }
	 
 
	 	 if (note_id<=[this.notes.length]){
	 	 	
	 	for (i = note_id;i< [this.notes.length];++i ){
	 	temp = this.notes[note_id +1].note_content;
	 	delete this.notes[note_id].note_content;
	 ////this.notes.splice((note_id),1);
	   console.log([temp] );
	 	this.notes[note_id].note_content = temp; //.insert(note_id, temp);
	 	console.log("                                                              ");
	 	console.log("The above notes by  " + [this.notes[note_id].author]+ " has been deleted sucessfully from your Note");
	 	}
	 	this.notes.splice([this.notes.length-1],1) ;
	 	 }
	 	 //else console.log ("You can't delete that page because it's empty")
	 	 
   else if ( note_id>this.notes.length)  {
	 	console.log("this  page is empty");
	 	console.log("Use listNotes() to check list note");
	 
	}
 
	 }
 
 }
 
 var na =  new NoteApplication ("shelter") ;
 na.create("gfjgjhgjhgjgjhgjhg");
na.create("i am getting old");
///na.listNotes();
na.delete(0);
//na.listNotes();
//na.delete(0);
na.listNotes();
na.delete(0);
// na.create("i am getting old");







