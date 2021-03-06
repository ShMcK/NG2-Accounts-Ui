import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {SubmitButton} from 'client/components/submit-button';
import {AccountsService} from 'client/lib/accounts-service';
import {Inject} from 'angular2/angular2';

@Component({
  selector: 'accounts-register',
  viewInjector: [AccountsService]
})
@View({
  templateUrl: 'client/components/register/register.ng.html',
  directives: [formDirectives, NgFor, NgIf, SubmitButton]
})
export class AccountsRegister {
  accountsForm:ControlGroup;
  message:IAccountsMessage;
  accounts:AccountsService;

  constructor(@Inject(AccountsService) accounts) { //
    this.accounts = accounts;
    this.message = accounts.message;
    this.accountsForm = new ControlGroup({
      username: new Control(''),
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  /**
   * Social Login
   * @params social {'facebook', 'twitter', 'google'}
   */
  socialLogin(social:string) {
    this.accounts.loginWith(social);
  }

  /**
   * Submit: Login
   * @param event: browser $event
   */
  submit(event) {
    // prevent page reload on enter
    event.preventDefault();
    this.message = null;

    var user = this.accountsForm.value;

    // Form is valid ?
    if (this.accountsForm.valid) {
      // submit using accounts.service
      this.accounts.register(this.accountsForm.value);

      // reset fields to empty strings
      this.accountsForm.controls.username.updateValue('');
      this.accountsForm.controls.email.updateValue('');
      this.accountsForm.controls.password.updateValue('');
    }
  }
}