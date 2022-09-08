import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionModule, doorlock } from 'ngx-role-permissions';

import { ChildTwoRoutingModule } from './child-two-routing.module';
import { ChildViewTwoComponent } from './child-view-two/child-view-two.component';
import { ChildViewThreeComponent } from './child-view-three/child-view-three.component';

@NgModule({
  imports: [
    CommonModule,
    ChildTwoRoutingModule,
    NgxPermissionModule.withElements([
      doorlock('childInnerOne').lockWith(['user']),
      doorlock('childInnerTwo').unlockWith(['admin', 'user']),
      doorlock('elementOne').unlockWith(['admin', 'user']),
      doorlock('elementTwo').unlockWith(['admin']),
    ]),
  ],
  declarations: [ChildViewTwoComponent, ChildViewThreeComponent]
})
export class ChildTwoModule { }