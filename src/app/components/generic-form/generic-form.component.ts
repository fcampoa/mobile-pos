import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {

  @Input() title: string;
  @Input() showBack: boolean;

  constructor() { }

  ngOnInit() {
  }

}
