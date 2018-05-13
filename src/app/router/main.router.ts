import { Component, ElementRef } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'main-router',
    templateUrl: './main.router.html'
})

export class MainRouterModule{
    private el : HTMLElement;
    private router : Router;
    constructor(elref : ElementRef, router : Router){
        this.el = elref.nativeElement;
        this.router = router;
    }

    onSelect( name : string ){
        this.router.navigateByUrl("/" + name);
    }
}