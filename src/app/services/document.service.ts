import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Document } from '../models/document';

@Injectable({ providedIn: 'root' })
export class DocumentService {

  constructor(private httpClient: HttpClient) {
  }

  getDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>('/assets/documents.json');
  }

  async getDocument(id: number): Promise<Document> {
    console.log(id)
    return (await this.getDocuments().toPromise()).find(d => d.id === id)
  }

}