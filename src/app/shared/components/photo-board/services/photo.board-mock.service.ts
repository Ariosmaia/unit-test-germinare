import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo.board.service';
import { buildPhotosList } from 'src/app/shared/components/photo-board/test/build-photo-list';

import { Photo } from '../models/photo.model';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  getPhotos(): Observable<Photo[]> {
    return of(buildPhotosList());
  }
}
