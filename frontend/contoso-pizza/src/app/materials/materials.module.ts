
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,    
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatSidenavModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule  
  ]
})
export class MaterialsModule { }
