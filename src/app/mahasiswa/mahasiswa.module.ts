import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MahasiswaRoutingModule } from './mahasiswa-routing.module';
import { MahasiswaComponent } from './mahasiswa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    MahasiswaComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MahasiswaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MahasiswaModule { }
