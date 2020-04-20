import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationComponent } from './organization.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';

/* istanbul ignore file */

const routes: Routes = [
  {
    path: 'create',
    component: CreateOrganizationComponent,
  },
  {
    path: '',
    component: OrganizationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationComponentRoutingModule {}
