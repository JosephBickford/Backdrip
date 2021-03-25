import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, AboutRoutingModule, MatCardModule, MatDividerModule],
})
export class AboutModule {}
