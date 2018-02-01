import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Http } from '@angular/http';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {

  temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';
  http: Http;

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }
  ngOnInit() {
    this.getTemperatura();
    this.getUmidade();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
  //Obtem a temperatura do sensor de temperatura, caso nao consiga fica com o valor default
  getTemperatura() {
    let retorno;
    try {
      this.http.get("localhost:8732/sensor/temp1/").map(res => res.json() as SensorModel).subscribe(
        values => {
          retorno = values;
          console.log(values);
        });
      this.temperature = retorno.value;
    } catch (err) {
      alert("TMP - host off - get default value");
      console.log(err);
    }
  }
 //Obtem a temperatura do sensor de umidade, caso nao consiga fica com o valor default
  getUmidade() {
    let retorno;
    try {
      this.http.get("localhost:8732/sensor/umi/").map(res => res.json() as SensorModel).subscribe(
        values => {
          retorno = values;
          console.log(values);
        });
      this.humidity = retorno.value;
    } catch (err) {
      alert("UMI - host off - get default value");
      console.log(err);
    }
  }
}

// modelo do retorno do servico
export class SensorModel {

  public id: number;
  public time: number;
  public value: string;
  public sensorType: string;
  public unit: string;
  public idSensor: string;
}

