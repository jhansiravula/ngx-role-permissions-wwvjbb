import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CustomGuard } from './guards/custom-permission.guard';
import { UnauthComponent } from './unauthCom/unauth.comp';

const routes: Routes = [
  { path: 'unauthorized-permission', component: UnauthComponent },
  {
    path: 'child1',
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'EDITOR'],
        redirectTo: {
          navigationCommands: ['unauthorized-permission'],
          navigationExtras: {
            skipLocationChange: true,
          },
        },
      },
    },
    loadChildren: './pages/child/child.module#ChildModule',
  },
  {
    path: 'child2',
    loadChildren: './pages/child-two/child-two.module#ChildTwoModule',
    canLoad: [CustomGuard],
    data: {
      permissionElement: 'childTwo',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
