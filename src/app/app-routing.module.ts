import { NgModule } from '@angular/core';
import { ProgramsComponent } from './components/programs/programs.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { component:ProgramsComponent,path:'progs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
