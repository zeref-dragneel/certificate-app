import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitted = false;
  fontTypeArray = [
    {id: 0, name: 'Times New Roman'},
    {id: 1, name: 'Tamil Font'},
  ];
  fontSizeArray = this.rangeCreator(60, 150, 10);
  emailArray = [
    {id: 0, name: 'webminar@shasuncollege.edu.in'},
    {id: 1, name: 'ecertificate@shasuncollege.edu.in'}
  ];
  rowPositionArray = this.rangeCreator(1300, 1500, 25);
  columnPositionArray = this.rangeCreator(2400, 2800, 25);
  institutionRowPositionArray = this.rangeCreator(700, 1000, 25);
  institutionColumnPositionArray = this.rangeCreator(1400, 1700, 25);
  dataForm = new FormGroup({
    fontType: new FormControl(null, Validators.required),
    fontSize: new FormControl(null, [Validators.required, Validators.min(1300), Validators.max(1500)]),
    email: new FormControl(null, Validators.required),
    rowPosition: new FormControl(null, [Validators.required, Validators.min(2400), Validators.max(2800)]),
    columnPosition: new FormControl(null, [Validators.required, Validators.min(1300), Validators.max(1500)]),
    institutionRowPosition: new FormControl(null, [Validators.required, Validators.min(700), Validators.max(1000)]),
    institutionColumnPosition: new FormControl(null, [Validators.required, Validators.min(1400), Validators.max(1700)])
  });

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.fontSizeArray);
  }
// tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    console.log(this.dataForm.value);
  }

  // tslint:disable-next-line:typedef
  rangeCreator(startingValue: number, endingValue: number, increment: number) {
    const data = [];
    for (let i = startingValue; i <= endingValue; i += increment) {
      data.push({value: i});
    }
    return data;
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.dataForm.controls;
  }
}
