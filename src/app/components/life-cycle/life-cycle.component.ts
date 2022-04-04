import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy  {

  @Input() number = 10;

  constructor() { 
    console.log('Chamou o construtor!');
  }

  
  ngOnChanges(): void {
    console.log('Chamou o OnChanges!');

  }

  ngOnInit(): void {
    console.log('Chamou o OnInit!');

  }

  ngDoCheck(): void {
    console.log('Chamou o DoCheck!');

  }

  ngAfterContentInit(): void {
    console.log('Chamou o AfterContentInit!');

  }

  ngAfterContentChecked(): void {
    console.log('Chamou o AfterContentChecked!');

  }

  ngAfterViewChecked(): void {
    console.log('Chamou o AfterViewChecked!');

  }

  ngAfterViewInit(): void {
    console.log('Chamou o ngAfterViewInit!');

  }

  ngOnDestroy(): void {
    console.log('Chamou o OnDestroy!');

  }

}
