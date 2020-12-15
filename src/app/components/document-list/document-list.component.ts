import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { FileSizePipe } from '../../pipes/file-size.pipe';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[];

  constructor(
      private docService: DocumentService
    ) {}

  ngOnInit() {
  
  }

}


