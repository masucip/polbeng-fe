import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahasiswaComponent } from './mahasiswa.component';

const routes: Routes = [{ path: '', component: MahasiswaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MahasiswaRoutingModule { }
