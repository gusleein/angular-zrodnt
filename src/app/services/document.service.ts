import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Document } from '../models/document';
import

@Injectable({ providedIn: 'root' })
export class DocumentService {

  constructor(private httpClient: HttpClient) {
  }

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get('/assets/documents.json');
  }

  getDocument(id: number): Observable<Document> {
    return this.httpClient.get('/assets/documents.json').pipe();
  }

}