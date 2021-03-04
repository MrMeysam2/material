import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


const MatrialComnents = [
  MatButtonModule,
  MatIconModule,
  MatDividerModule
];
@NgModule({
  imports: [MatrialComnents],
  exports: [MatrialComnents]
})
export class MaterialModule { }
