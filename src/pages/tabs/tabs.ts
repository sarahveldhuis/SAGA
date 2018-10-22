import { LocalizationPage } from './../localization/localization';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritePage;
  tab3Root = LocalizationPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
