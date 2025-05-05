import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageListComponent } from './requests/components/package-list/package-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TransformCountPipe } from './pipes/transform-count/transform-count.pipe';
import { TransformHeaderPipe } from './pipes/transform-header/transform-header.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    TransformCountPipe,
    TransformHeaderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
