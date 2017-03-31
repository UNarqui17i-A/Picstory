import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPsComponent } from './header-ps/header-ps.component';
import { FooterPsComponent } from './footer-ps/footer-ps.component';
import { CollapseDirective } from 'ng2-bootstrap';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderPsComponent, FooterPsComponent, CollapseDirective],
  exports: [HeaderPsComponent, FooterPsComponent]
})
export class StaticModule { }
