import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  template:'<app-header><router-outlet></router-outlet></app-header>', 
})
export class NavComponent {

  constructor() { }

  ngOnInit() {
  }

}
