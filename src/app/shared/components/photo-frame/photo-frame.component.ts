import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss'],
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() liked: EventEmitter<void>;
  @Input() src: string;
  @Input() description: string;
  @Input() likes: number;

  debounceSubject: Subject<void>;
  unsubscribe: Subject<void>;

  constructor() {
    this.liked = new EventEmitter();
    this.src = '';
    this.description = '';
    this.likes = 0;

    this.debounceSubject = new Subject();
    this.unsubscribe = new Subject();
  }

  ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  like(): void {
    this.debounceSubject.next();
  }
}
