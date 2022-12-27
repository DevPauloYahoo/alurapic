import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();
  @Output() customEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() value: string = '';

  ngOnInit() {
    this.debounce.pipe(debounceTime(300)).subscribe({
      next: (filter) => this.customEvent.emit(filter),
    });
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
