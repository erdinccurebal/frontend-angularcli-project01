import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { NavbarModel } from '../../../models/navbar.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleShow = false;
  toogleClass = 'collapse navbar-collapse';
  navbars: NavbarModel[];

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.pageService.findAll().subscribe(data => this.navbars = data);
  }

  onClick(): void {
    if (!this.toggleShow) {
      this.toogleClass = 'collapse navbar-collapse show';
      this.toggleShow = true;
    }else if (this.toggleShow) {
      this.toogleClass = 'collapse navbar-collapse';
      this.toggleShow = false;
    }

  }

}
