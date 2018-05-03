import { Component } from '@angular/core'
import { RouterModule ,Routes } from '@angular/router'

import { TempComponent } from '../components/temp/temp.component'

export const routes :Routes = [
    {
        path: '',
        redirectTo: '/temp',
        pathMatch: 'full'
    },
    {
        path: 'temp',
        component: TempComponent
    }
];

@Component({
    selector: 'main-router',
    templateUrl: './main.router.html'
})

export class MainRouterModule{

}