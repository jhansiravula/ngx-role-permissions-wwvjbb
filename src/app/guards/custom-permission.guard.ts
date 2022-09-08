import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanLoad, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { PermissionService } from 'ngx-role-permissions';

import { MatSnackBar } from '@angular/material';

import { SnackbarExampleComponent } from '../components/snackbar/snackbar.component';

@Injectable()
export class CustomGuard implements CanActivate, CanLoad {
  constructor(
    private permissionService: PermissionService,
    public snackBar: MatSnackBar,
  ) {}

  public canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    if (!(next.data.permissionElement)) {
      console.error('No permissionElement defined for current guard');

      return of(false);
    }

    const permissionElementName = next.data.permissionElement;

    return this.permissionService.canAccess(permissionElementName).pipe(
      first(),
      tap((res: boolean) => {
        if (res) {
          this.openSnackBar('Permission granted');
        } else {
          this.openSnackBar('Sorry, you have no permissions');
        }
      }),
    );
  }

  public canLoad(route: Route): Observable<boolean> {
    if (!(route.data.permissionElement)) {
      console.error('No permissionElement defined for current guard');

      return of(false);
    }

    const permissionElementName = route.data.permissionElement;
    return this.permissionService.canAccess(permissionElementName).pipe(
      first(),
      tap((res: boolean) => {
        if (res) {
          this.openSnackBar('Permission granted');
        } else {
          this.openSnackBar('Sorry, you have no permissions');
        }
      }),
    );
  }

  private openSnackBar(val: string): void {
    this.snackBar.open(val, val, {duration: 1000});
  }
}