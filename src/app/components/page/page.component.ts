import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarModel } from 'src/models/navbar.model';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  activatedPage: string;
  pageDetail: NavbarModel[];


  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(data => {
      this.activatedPage = data.page;
    });
  }

  ngOnInit(): void {
    console.log(this.activatedPage);
    this.findAll();
  }

  findAll(): void {
    this.pageService.findAll().subscribe(data => {
      this.pageDetail = data;
    });
  }

}
