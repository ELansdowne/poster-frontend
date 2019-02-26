import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { PostersComponent } from './dashboard/dashboard/posters/posters.component';
import { PosterComponent } from './dashboard/dashboard/posters/poster/poster.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PosterComponent,
    PostersComponent,
    CarouselComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
