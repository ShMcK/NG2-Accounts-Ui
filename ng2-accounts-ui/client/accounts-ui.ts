import {Component, View, bootstrap} from 'angular2/angular2';
import {NgSwitch, NgSwitchDefault, NgSwitchWhen, NgIf} from 'angular2/angular2';

// Components
import {AccountsLogin} from 'client/components/login/login';
import {AccountsRegister} from 'client/components/register/register';
import {AccountsForgotPassword} from 'client/components/forgot-password/forgot-password';
import {AccountsProfile} from 'client/components/profile/profile';

@Component({
  selector: 'accounts-ui'
})
@View({
  templateUrl: 'client/accounts-ui.ng.html',
  directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf,
    AccountsLogin, AccountsRegister, AccountsForgotPassword, AccountsProfile]
})
class AccountsUi {
  page:string;

  constructor() {
    this.page = null;
  }

  /**
   * Open form
   * @param target {'login', 'register'}
   */
  open(target:string) {
    this.page = target;

    // open modal

  }

  /**
   * Redirect form page
   * @param destination {'login', 'register', 'forgotPassword'}
   */
  redirect(destination:string) {
    this.page = destination;
  }
}

bootstrap(AccountsUi);