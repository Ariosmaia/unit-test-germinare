import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from './models/photo.model';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  @Input() photos: Photo[];
  rows: any[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  groupColumns(photos: Photo[]): any[][] {
    const newRowns = [];
    const step = 4;

    for (let index = 0; index < photos.length; index += 4) {
      newRowns.push(photos.slice(index, index + step));
    }

    return newRowns;
  }
}
