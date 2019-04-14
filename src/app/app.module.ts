import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { PostersComponent } from './dashboard/dashboard/posters/posters.component';
import { PosterComponent } from './dashboard/dashboard/posters/poster/poster.component';
import { LoginModule } from './login/login.module';
import { PosterPreviewComponent } from './dashboard/shared/component/poster-preview/poster-preview.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
