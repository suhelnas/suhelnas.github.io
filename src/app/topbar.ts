import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.html',
  styleUrls:['./topbar.css']
})

export class Topbar {
constructor( private _router: Router){
  this._router.navigate(['app/contacts']);
}

  goToContacts(){
    this._router.navigate(['app/contacts']);
  }
  messageHistory() {
    this._router.navigate(['app/history']);
  }
}
