import { PipeModule } from './../../core/pipes/pipe.module';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule.forRoot()
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
