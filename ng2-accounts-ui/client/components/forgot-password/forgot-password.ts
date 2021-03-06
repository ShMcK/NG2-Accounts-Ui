import {Component, View, NgFor} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {SubmitButton} from 'client/components/submit-button';
import {AccountsService} from 'client/lib/accounts-service';
import {Inject} from 'angular2/angular2';

@Component({
  selector: 'accounts-forgot-password',
  viewInjector: [AccountsService]
})
@View({
  templateUrl: 'client/components/forgot-password/forgot-password.ng.html',
  directives: [formDirectives, NgFor, SubmitButton]
})
export class AccountsForgotPassword {
  accountsForm:ControlGroup;
  accounts:AccountsService;

  constructor(@Inject(AccountsService) accounts) {
    this.accounts = accounts;
    this.accountsForm = new ControlGroup({
      email: new Control('', Validators.required)
    });
  }

  /**
   * Submit: send password reset email
   * @param event {browser $event}
   * @param form {username, email, password}
   */
  submit(event) {
    // prevent page reload on enter
    event.preventDefault();

    // Form is valid ?
    if (this.accountsForm.valid) {
      // Submit using Accounts-service.ts
      this.accounts.forgotPassword(this.accountsForm.value);

      // reset fields to empty strings
      this.accountsForm.controls.email.updateValue('');
    }
  }
}