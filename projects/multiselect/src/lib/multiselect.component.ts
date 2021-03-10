import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

export class dropdownModel {
  label: string;
  value: any;
  selected: boolean;
}
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  animations: [
    trigger('fadeInOut-1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(`0.1s ease-in-out`)
      ]),
      transition(':leave', [animate(`0.1s ease-in-out`, style({ opacity: 0 }))])
    ])
  ]
})
export class MultiselectComponent implements OnInit {
  @Input() public options = [];
  @Input() public filter = false;
  @Input() public optionLabel: string = 'label';
  @Input() public optionValue: string = 'value';

  @Output() onChange = new EventEmitter<any>();

  public searchValue = '';
  public expandPanel: boolean = false;
  public dropdownOptions: dropdownModel[] = [];
  public value: string[] = [];
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    this.dropdownOptions = this.options.map(i => ({ label: i[this.optionLabel], value: i[this.optionValue], selected: this.value.includes(i.value) ? true : false }));
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target) && this.expandPanel) {
      this.expandPanel = false;
      this.saveChanges();
    }
  }

  saveChanges() {
    this.value = this.dropdownOptions.filter(item => item.selected == true).map(item => item.value);
    this.onChange.emit(this.value);
  }
}

