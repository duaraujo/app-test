import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  showSpinner: boolean = false;
  userName: string = '';
  isAdmin: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
