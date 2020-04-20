import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationComponentRoutingModule } from './organization-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';

/* istanbul ignore file */

@NgModule({
  declarations: [OrganizationComponent, CreateOrganizationComponent],
  imports: [
    CommonModule,
    OrganizationComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OrganizationModule {}
