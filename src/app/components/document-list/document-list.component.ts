import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { FileSizePipe } from '../../pipes/file-size.pipe';
import {Document} from "../../models/document";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents$: Observable<Document[]> = of([]);

  constructor(
      private docService: DocumentService
    ) {}

  ngOnInit() {

  }

  load() {
    this.documents$ = this.docService.getDocuments()
  }

}


