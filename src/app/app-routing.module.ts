import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGuard } from './auth.guard';

/* istanbul ignore file */
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'auth', component: AuthPageComponent },
  {
    path: 'organization',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./organization/organization.module').then(
        (m) => m.OrganizationModule,
      ),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
