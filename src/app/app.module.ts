import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModule } from 'mdb-angular-ui-kit';
import { QuickAppProMaterialModule } from './core/material.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomePage } from './home/home.page';
import { TestComponent } from './components/test/test.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';

@NgModule({
  declarations: [AppComponent,
     SideMenuComponent,
     HomePage, TestComponent,
     GenericFormComponent],
  entryComponents: [],
  exports: [SideMenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MdbModule,
    QuickAppProMaterialModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
