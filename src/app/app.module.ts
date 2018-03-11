import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { AppService } from "./app.service";
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/content/nav/nav.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { Sidebar2ndComponent } from './main/sidebar2nd/sidebar2nd.component';
import { AppearanceComponent } from './main/content/appearance/appearance.component';
import { ContentComponent } from './main/content/content.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { HomemenuComponent } from './home/homemenu/homemenu.component';


const appRoutes: Routes = [
  {path:'appearance', component: AppearanceComponent},
  {path:'home', component: NavComponent},
  {path:'sidebar', component: Sidebar2ndComponent, outlet:'expandmenu'},
  {path:'homemenu', component: HomemenuComponent, outlet:'expandmenu'},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    SidebarComponent,
    Sidebar2ndComponent,
    AppearanceComponent,
    ContentComponent,
    MainnavComponent,
    HomeComponent,
    HomemenuComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
