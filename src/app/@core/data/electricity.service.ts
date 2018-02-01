import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VotosService {

  http: Http;
  data: any;

  getPreferenciasdoUsuario() {

    let retorno;
    try {
      this.http.get("localhost:8732/sensor/umi/").map(res => res.json()).subscribe(
        values => {
          retorno = values;
          console.log(values);
        });
      this.data = retorno.value;
    } catch (err) {
      alert("localhost off - get default value");
      console.log(err);

      this.getDataDefault();
    }
  }

  getDataDefault() {
    return this.data = [
      {
        title: '24/01/2018',
        months: [
          { month: 'User 1', delta: '3', down: true, kWatts: '20 °C' },
          { month: 'User 2', delta: '5', down: true, kWatts: '19 °C' },
          { month: 'User 3', delta: '7', down: true, kWatts: '17 °C' },
          { month: 'User 4', delta: '6', down: true, kWatts: '18 °C' },
          { month: 'User 5', delta: '1', down: false, kWatts: '25 °C' },
          { month: 'User 6', delta: '0', down: false, kWatts: '24 °C' },
          { month: 'User 7', delta: '2', down: false, kWatts: '26 °C' },
          { month: 'User 8', delta: '1', down: true, kWatts: '25 °C' },
          { month: 'User 9', delta: '5', down: true, kWatts: '19 °C' },
          { month: 'User 10', delta: '5', down: true, kWatts: '19 °C' },
          { month: 'User 11', delta: '3', down: true, kWatts: '21 °C' },
          { month: 'User 12', delta: '0', down: false, kWatts: '22 °C' },
        ],
      },
    ];
  }


  constructor() {
  }

  // TODO: observables
  getData() {
    this.getPreferenciasdoUsuario();
    return this.data;
  }
}
