import {Component} from "@angular/core";
import {AppConstants} from "./AppConstants";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector:'contact-list',
    templateUrl:'./contacts.component.html'
})

export class ContactsComponent {

   contactList = AppConstants.contacts;
   constructor(private _router: Router,private _activeRoute: ActivatedRoute){
   }

   getInfo(id){
      this._router.navigate(['../contactinfo/'+id],{relativeTo:this._activeRoute});
   }
}
