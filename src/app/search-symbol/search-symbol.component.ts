import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISymbolSearch } from '../interfaces/symbol-search.interface';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-search-symbol',
  templateUrl: './search-symbol.component.html',
  styleUrls: ['./search-symbol.component.css'],
})
export class SearchSymbolComponent implements OnInit {
  searchResponse$ = new Observable<ISymbolSearch>();
  value = '';

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {}

  searchSymbol() {
    this.searchResponse$ = this.configService.searchSymbol(this.value);
  }
}
