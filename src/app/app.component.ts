import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { PhotoBoardService } from './shared/components/photo-board/services/photo.board.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Photo } from './shared/components/photo-board/models/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular testing';

  photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
