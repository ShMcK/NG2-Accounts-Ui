import {Component, View, NgIf} from 'angular2/angular2';
import {formDirectives, ControlGroup, Control} from 'angular2/angular2';
import {AccountsService} from 'client/lib/accounts-service';
import {Inject} from 'angular2/angular2';

@Component({
  selector: 'accounts-profile',
  viewInjector: [AccountsService]
})
@View({
  templateUrl: 'client/components/profile/profile.ng.html',
  directives: [NgIf, formDirectives]
})
export class AccountsProfile {
  profile:IAccountsProfile;
  passwordChangeForm:ControlGroup;
  toggler:boolean;
  accounts:AccountsService;

  constructor(@Inject(AccountsService) accounts) { //
    this.toggler = false;
    this.accounts = accounts;

    this.profile = {
      email: Meteor.user().emails[0].address || '',
      username: Meteor.user().username || ''
    };
    this.passwordChangeForm = new ControlGroup({
      newPassword: new Control(),
      oldPassword: new Control()
    })
  }

  toggle(event) {
    event.preventDefault();
    this.toggler = !this.toggler;
  }

  updatePassword(oldPassword:string, newPassword:string) {
    if(this.passwordChangeForm.valid) {
      this.accounts.changePassword(oldPassword, newPassword);
    }
  }
}