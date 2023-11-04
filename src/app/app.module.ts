import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { SearchModule } from './search/search.module';
import { ResultModule } from './result/result.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { FooterComponent } from './footer/footer.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "black",
  fgsColor: "#050033",
  logoUrl: "assets/loader.svg",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.wanderingCubes, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  logoSize: 300,
  bgsOpacity: 1.0,
  pbColor: "#050033",
  overlayColor: "rgba(225, 240, 240, 1)"
};

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SearchModule,
    ResultModule,
    RouterModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
