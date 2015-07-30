# NG2-Accounts-Ui
 
Accounts Ui Component for use with Angular 2 & Meteor.js.

** Work in Progress. **

## Features

* Login
    - username, email, password
* Sign up
    - username, email, password
* Forgot Password
  - send password reset email
* User Profile
  - update profile
  - change password
* Sign out

## Meteor Package Setup

**Note: this is not a Blaze package, but rather an Angular 2 component**

* Angular 2 setup

    meteor add shmck:angular2
    meteor add netanelgilad:angular2-typescript

* Password setup:

    meteor add accounts-password
    
* Current OAuth setups:

    meteor add accounts-facebook
    meteor add accounts-twitter
    meteor add accounts-google
    
* Styles
    
    meteor add fourseven:scss
    meteor add reywood:bootstrap3-sass
    meteor add fortawesome:fontawesome

## Customization

* Edit form templates in `/client/components/*.ng.html`
* Edit Sass styles in `/client/styles`
* Edit Account settings in `client/lib/accounts.settings.ts`    
 
    
