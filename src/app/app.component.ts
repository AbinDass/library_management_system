import { Component, OnInit } from '@angular/core';
import { StorageService } from './modules/auth/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'library_mngmnt_client';
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    const data = this.storageService.userSession;
    if (data.user?.isLogin || data.admin?.isLogin) {
      if (data.user?.isLogin ) {
        this.router.navigate(['home']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
