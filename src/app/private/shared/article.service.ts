import { Injectable } from '@angular/core';
import { UtilsService } from 'src/app/shared/utils.service';
import { articleResponse } from '../model/articleResponse';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  getArticles(): Observable<articleResponse> {
    let url = '/api/Articles?filter[include]=features&filter[include]=category';
    return this.http.get<articleResponse>(url).pipe(
      catchError(this.utilsService.handleError)
    );
  }

  getArticleId(id: number): Observable<articleResponse> {
    let url = '/api/Articles/' + JSON.stringify(id) + '?filter[include]=features&filter[include]=category';
    return this.http.get<articleResponse>(url).pipe(
      catchError(this.utilsService.handleError)
    );
  }

  deleteArticleId(id: number): Observable<articleResponse> {
    let url = '/api/Articles' + JSON.stringify(id);
    return this.http.delete<articleResponse>(url).pipe(
      catchError(this.utilsService.handleError)
    );
  }

  updateArticleId(form: articleResponse, id: number): Observable<articleResponse> {
    let url = '/api/Articles' + JSON.stringify(id);
    return this.http.post<articleResponse>(url, form).pipe(
      catchError(this.utilsService.handleError)
    );
  }

  createArticle(form: articleResponse): Observable<articleResponse> {
    let url = '/api/Articles';
    return this.http.put<articleResponse>(url, form).pipe(
      catchError(this.utilsService.handleError)
    );
  }
}
