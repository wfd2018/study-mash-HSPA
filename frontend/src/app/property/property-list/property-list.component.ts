import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Property: Array<any> = [
    {
      id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 23000,
    },

    {
      id: 2,
      Name: 'Fisher House',
      Type: 'House',
      Price: 25000,
    },

    {
      id: 3,
      Name: 'Whittle House',
      Type: 'House',
      Price: 35000,
    },

    {
      id: 4,
      Name: 'Fonda House',
      Type: 'House',
      Price: 38000,
    },

    {
      id: 5,
      Name: 'Tupec House',
      Type: 'House',
      Price: 28000,
    },

    {
      id: 6,
      Name: 'Typic House',
      Type: 'House',
      Price: 20000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
