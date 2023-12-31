import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
const path: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('overview/Component').then((m) => m.OverviewModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(path)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
