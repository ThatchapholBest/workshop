import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [{path: '', redirectTo: 'search-box',pathMatch: 'full'},
                         {path: 'search-box',component:SearchBoxComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
