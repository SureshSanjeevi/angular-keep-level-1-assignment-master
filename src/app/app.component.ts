import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  noteList: Array<Note>;
  note: Note;
  errorMessage:string;
  constructor(private noteService: NotesService) {
    this.noteList = [];
    this.note = new Note();
  }
  ngOnInit() {
    this.noteService.getNotes().subscribe(res => {
      this.noteList = res;
    },
      error => {
          
          }
    );
 }
 takeNote() {
      this.noteService.addNote(this.note).subscribe(addedNote =>{
      this.noteList.push(addedNote);
      this.note = new Note();
    },
    error=>{
         
    
  }
    );
  }
}