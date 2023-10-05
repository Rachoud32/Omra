import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [{ path: '', component: SearchFormComponent },{ path: 'result', component: PreviewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
