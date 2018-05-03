import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AlertModule } from 'ngx-bootstrap'

//import { AppComponent } from './app.component';
import { MainRouterModule ,routes} from './router/main.router'

import { TempComponent } from './components/temp/temp.component'


@NgModule({
  declarations: [
//    AppComponent
    MainRouterModule,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [MainRouterModule]
})
export class AppModule { }
