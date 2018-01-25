import { Injectable } from '@angular/core';

@Injectable()
export class ElectricityService {

  private data = [
    {
      title: '24/01/2018',
      months: [
        { month: 'Rafael', delta: '3', down: true, kWatts: '20' },
        { month: 'João', delta: '5', down: true, kWatts: '19'},
        { month: 'Maria', delta: '7', down: true, kWatts: '17' },
        { month: 'Pedro', delta: '6', down: true, kWatts: '18'},
        { month: 'Juliana', delta: '1', down: false, kWatts: '25' },
        { month: 'Paula', delta: '0', down: false, kWatts: '24' },
        { month: 'Leonardo', delta: '2', down: false, kWatts: '26' },
        { month: 'Junior', delta: '1', down: true, kWatts: '25' },
        { month: 'Carla', delta: '5', down: true, kWatts: '19' },
        { month: 'Gabriel', delta: '5', down: true, kWatts: '19' },
        { month: 'Daniele', delta: '3', down: true, kWatts: '21' },
        { month: 'Jonas', delta: '0', down: false, kWatts: '22' },
      ],
    },
    // {
    //   title: '2016',
    //   active: true,
    //   months: [
    //     { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
    //     { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
    //     { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
    //     { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
    //     { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
    //     { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
    //     { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
    //     { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
    //     { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
    //     { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
    //     { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
    //     { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
    //   ],
    // },
    // {
    //   title: '2017',
    //   months: [
    //     { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
    //     { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
    //     { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
    //     { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
    //     { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
    //     { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
    //     { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
    //     { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
    //     { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
    //     { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
    //     { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
    //     { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
    //   ],
    // },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
