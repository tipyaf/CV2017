/**
 * Created by yannickbenchimol on 19/12/2016.
 */
import {style, animate, transition, state, trigger} from '@angular/core';


export class Animations {
  static page = [
    trigger('routeAnimation', [
      state('void', style({position:'fixed', width:'100%', height:'100vh'}) ),
      state('*', style({position:'fixed', width:'100%', height:'100vh'}) ),
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('envelopeAnimation', [
      state('true', style({transform: 'translateY(0) rotate(-5deg)'}) ),
      state('false', style({transform: 'translateY(200%) rotate(45deg)', display: 'none'}) ),
      transition('1 => 0', animate('0.6s ease-in-out')),
      transition('0 => 1', animate('0.6s ease-in-out'))
    ]),
    trigger('fadeIn', [
      state('true', style({opacity: 1}) ),
      state('false', style({opacity: 0}) ),
      transition('1 => 0', animate('1s ease-in')),
      transition('0 => 1', animate('2s ease-in'))
    ]),
    trigger('fadeInFast', [
      state('true', style({opacity: 1}) ),
      state('false', style({opacity: 0}) ),
      transition('1 => 0', animate('0.8s ease-in')),
      transition('0 => 1', animate('0.8s ease-in'))
    ]),
    trigger('comeToRight', [
      state('true', style({transform: 'translateX(0)'}) ),
      state('false', style({transform: 'translateX(100%)'}) ),
      transition('1 => 0', animate('2s 3s ease-in-out')),
      transition('0 => 1', animate('2s 3s ease-in-out'))
    ]),

  ];

}
