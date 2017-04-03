import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPsComponent } from './header-ps/header-ps.component';
import { FooterPsComponent } from './footer-ps/footer-ps.component';
import { CollapseDirective } from 'ng2-bootstrap';
import { RouterModule } from "@angular/router";
import { MdMenuModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdMenuModule,
    MdButtonModule
  ],
  declarations: [HeaderPsComponent, FooterPsComponent, CollapseDirective],
  exports: [HeaderPsComponent, FooterPsComponent]
})
export class StaticModule { }
