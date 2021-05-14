import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbdModalComponent, NgbdModalContent} from './modal.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  declarations: [NgbdModalComponent, NgbdModalContent],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent]
})
export class NgbdModalComponentModule {
}
