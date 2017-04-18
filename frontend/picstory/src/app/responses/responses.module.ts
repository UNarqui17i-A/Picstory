import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [UnauthorizedComponent, NotFoundComponent, ServerErrorComponent],
  exports: [UnauthorizedComponent, NotFoundComponent, ServerErrorComponent]
})

export class ResponsesModule { }
