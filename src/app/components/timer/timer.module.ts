import { NgModule } from '@angular/core';
import { NgxPermissionModule } from 'ngx-role-permissions';
import { TimerComponent } from './timer.component';


@NgModule({
  imports: [NgxPermissionModule],
  declarations: [TimerComponent],
  exports: [TimerComponent],
})
export class TimerModule {}