import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommitCardComponent } from './modules/components/commit-card/commit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CommitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
