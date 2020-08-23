import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PageComponent } from './components/page/page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';

let routerList = [{}];

const routes: Routes = [
  { path: '', redirectTo: 'sayfa/AnaSayfa', pathMatch: 'full' },
  { path: 'sayfa/Blog', component: BlogComponent },
  { path: 'sayfa/Iletisim', component: ContactUsComponent },
  { path: 'sayfa/:page', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('http://localhost:3000/navbars')
      .subscribe((data) => {
        data.forEach((nav) => {
          console.log(nav);
          console.log(routes);
        });
      });
  }
}
