import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AppConstants} from "./AppConstants";

@Component ({
  selector:'contact-info',
  templateUrl:'./contact.info.component.html'
})

export class ContactInfoComponent {
contactList = AppConstants.contacts;
contact;
id;
  constructor(private _router: Router,private _activeRoute: ActivatedRoute){
    let that = this;
     that.id = parseInt(this._activeRoute.snapshot.params['id']);
   this.contact = this.contactList.filter(function (contact) {
       return contact.Id == that.id;
    })

  }
 ngOnInit(){

 }
  send (){
   let that = this;
    this._router.navigate(['newmessage/'+that.id], {relativeTo:this._activeRoute})
  }
}
