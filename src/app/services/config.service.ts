import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ISymbolSearch } from '../interfaces/symbol-search.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly URL =
    'https://www.alphavantage.co/query?apikey=YTC5APBLGG26YD45&';
  constructor(private http: HttpClient) {}

  searchSymbol(symbol: string): Observable<ISymbolSearch> {
    return this.http.get<ISymbolSearch>(
      `${this.URL}function=SYMBOL_SEARCH&keywords=${symbol}`
    );
  }
}
