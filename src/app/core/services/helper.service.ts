import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs/internal/Observable';
import IHelper from '../interfaces/helper.interface';

export interface HelperState {
  helpers: IHelper[];
  selectedHelper: IHelper | null;
}

@Injectable({
  providedIn: 'root',
})
export class HelperService extends ComponentStore<HelperState> {
  readonly helpers$: Observable<IHelper[]>;
  readonly selectedHelper$: Observable<IHelper | null>;
  readonly setSelectedHelper: (helper: IHelper) => void;
  constructor() {
    const helpers = [
      {
        username: 'ahsanayaz',
        avatar: 'https://avatars.githubusercontent.com/u/9844254?v=4',
        name: 'Ahsan Ayaz',
        helped: [
          {
            name: 'Obaid Nadeem',
            avatar: 'https://avatars.githubusercontent.com/u/57326940?v=4',
          },
          {
            name: 'Muhammad Salman Hassan',
            avatar: 'https://avatars.githubusercontent.com/u/85054404?v=4',
          },
        ],
      },
    ];

    for (let i = 0; i < 120; i++) {
      helpers[0].helped.push(helpers[0].helped[0]);
    }

    helpers.push(helpers[0]);
    helpers.push(helpers[0]);
    helpers.push(helpers[0]);
    helpers.push(helpers[0]);
    // initializng helpers
    super({ helpers, selectedHelper: null });
    this.helpers$ = this.select((state) => state.helpers);
    this.selectedHelper$ = this.select((state) => state.selectedHelper);

    this.setSelectedHelper = this.updater(
      (state: HelperState, helper: IHelper) => ({
        selectedHelper: helper,
        helpers: state.helpers,
      })
    );
  }
}
