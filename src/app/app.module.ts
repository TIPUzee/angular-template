import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { RemoveSpacesPipe } from './pipes/remove-spaces.pipe';
import { SubMenuListComponent } from './components/sub-menu-list/sub-menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    CapitalizePipe,
    MenuButtonComponent,
    RemoveSpacesPipe,
    SubMenuListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
