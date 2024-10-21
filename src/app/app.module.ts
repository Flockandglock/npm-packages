import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageListComponent } from './requests/components/package-list/package-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TransformCountPipe } from './pipes/transform-count/transform-count.pipe';
import { ChangeColorDirective } from './directives/change-color/change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    TransformCountPipe,
    ChangeColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
