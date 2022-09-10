import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSymbolComponent } from './search-symbol/search-symbol.component';

const routes: Routes = [
  { path: 'search-symbol', component: SearchSymbolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
