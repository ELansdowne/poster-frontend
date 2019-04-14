import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PosterComponent } from './dashboard/posters/poster/poster.component';
import { PostersComponent } from './dashboard/posters/posters.component';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { PosterPreviewComponent } from './shared/component/poster-preview/poster-preview.component';

@NgModule({
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    PosterComponent,
    PostersComponent,
    CarouselComponent,
    PosterPreviewComponent
  ],
  exports: [],
  providers: [],
  entryComponents: [PosterPreviewComponent]
})
export class DashboardModule {}
