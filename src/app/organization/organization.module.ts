import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationComponentRoutingModule } from './organization-routing.module';

@NgModule({
  declarations: [OrganizationComponent],
  imports: [CommonModule, OrganizationComponentRoutingModule],
})
export class OrganizationModule {}
