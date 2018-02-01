import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { VotosService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  data: Array<any>;

  type = 'Ontem';
  types = ['Ontem'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: VotosService, private themeService: NbThemeService) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
