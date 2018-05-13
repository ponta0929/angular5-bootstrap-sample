import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router'
import { AlertModule,TabsModule, CarouselModule  } from 'ngx-bootstrap'

//import { AppComponent } from './app.component';
import { MainRouterModule } from './router/main.router'

import { TempComponent } from './components/temp/temp.component'
import { Temp2Component } from './components/temp2/temp2.component'

const routes :Routes = [
  {
      path: '',
      redirectTo: '/temp',
      pathMatch: 'full'
  },
  {
      path: 'temp',
      component: TempComponent
  },
  {
      path: 'temp2',
      component: Temp2Component
  }
];

@NgModule({
  declarations: [
//    AppComponent
    MainRouterModule,
    TempComponent,
    Temp2Component
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes),
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [MainRouterModule]
})
export class AppModule { }
