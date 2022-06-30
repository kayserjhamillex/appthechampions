import { navItems } from './_nav';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bandera = true;
  public sidebarMinimized = false;
  public navItems = navItems;
  client;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  url = 'https://soporte.crthechampions.com/';
  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }
  direccionamiebto() {
    window.open(this.url, "Mesa de Ayuda");
  }
  cambio() {
    this.bandera = !this.bandera;
  }
  loggout() {
    this.adminService.loggout();
  }
  ngOnInit(): void {
    this.adminService.client$.subscribe(res => {
      if (res) {
        this.client = res;
      } else {
        this.client = null;
        this.router.navigate(
          [
            'auth',
            'login'
          ]
          );
      }
    });
    if (this.adminService.isLoggedIn()) {
      const client = JSON.parse(localStorage.getItem('admin'));
      console.log(client);
      this.adminService.loggin(client);
      this.router.navigate(
        [
          'admin',
          'home'
        ]
      );
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
  }

}
