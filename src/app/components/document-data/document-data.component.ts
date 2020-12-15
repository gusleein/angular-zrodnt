import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DocumentService } from '../../services/document.service';
import { FileSizePipe } from '../../pipes/file-size.pipe';
import {Document} from "../../models/document";

@Component({
  selector: 'app-document-data',
  templateUrl: './document-data.component.html',
  styleUrls: [ './document-data.component.css' ]
})
export class DocumentDataComponent implements OnInit {
  document: Document;

  constructor(
    private route: ActivatedRoute,
    private docService: DocumentService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.docService.getDocument(p.id).then((d) => this.document = d)
    })
  }

  goBack(): void {
    this.location.back()
  }

}
