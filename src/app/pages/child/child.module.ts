import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionModule, doorlock } from 'ngx-role-permissions';

import { ChildRoutingModule } from './child-routing.module';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule,
    NgxPermissionModule.withElements([
      doorlock('myChildElement').unlockWith(['admin']),
    ])
  ],
  declarations: [ChildViewComponent],
})
export class ChildModule { }