import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPsComponent } from './header-ps/header-ps.component';
import { FooterPsComponent } from './footer-ps/footer-ps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderPsComponent, FooterPsComponent],
  exports: [HeaderPsComponent, FooterPsComponent]
})
export class StaticModule { }
