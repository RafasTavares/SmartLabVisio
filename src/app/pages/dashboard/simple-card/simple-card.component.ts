import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-simple-card',
  styleUrls: ['./simple-card.component.scss'],
  template: `
    <nb-card>
    <div class="details">
        <div class="title">{{ title }} <b>{{value}}</b></div>      
      </div>    
    </nb-card>
  `,
})
export class SimpleCardComponent {

  @Input() title: string;
  @Input() value: string;
  @Input() type: string;
  @Input() on = true;
}
