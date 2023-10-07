import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { PreviewComponent } from './preview/preview.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  { path: '', component: SearchFormComponent },
  {
    path: 'result',
    component: PreviewComponent,
    children: [
      { path: 'test', component: TestComponent },
      { path: 'test2', component: Test2Component },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
