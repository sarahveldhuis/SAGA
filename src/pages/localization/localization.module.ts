import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalizationPage } from './localization';

@NgModule({
  declarations: [
    LocalizationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalizationPage),
  ],
})
export class LocalizationPageModule {}
