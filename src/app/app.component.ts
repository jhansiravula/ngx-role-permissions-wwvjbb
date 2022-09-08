import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ngx-role-permissions';

  constructor(
    private permissionsService: NgxPermissionsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const perm = ['ADMIN', 'EDITOR'];

    this.permissionsService.loadPermissions(perm);

    this.http.get('url').subscribe((permissions) => {
      //const perm = ["ADMIN", "EDITOR"]; example of permissions
      this.permissionsService.loadPermissions(perm);
    });
  }
}
