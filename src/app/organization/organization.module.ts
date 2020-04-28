import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationComponentRoutingModule } from './organization-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

/* istanbul ignore file */

@NgModule({
  declarations: [OrganizationComponent, CreateOrganizationComponent],
  imports: [
    CommonModule,
    OrganizationComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    PanelModule,
    TableModule,
  ],
})
export class OrganizationModule {}
