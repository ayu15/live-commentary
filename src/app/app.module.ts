import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app-component/app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserStreamComponent } from './components/user-stream/user-stream.component';
import { MaterialModule } from '@angular/material';
import { BroadcasterComponent } from './components/broadcaster/broadcaster.component';
import { ListenerComponent } from './components/listener/listener.component';
@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserStreamComponent,
    BroadcasterComponent,
    ListenerComponent
  ],
  imports: [
	  MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
