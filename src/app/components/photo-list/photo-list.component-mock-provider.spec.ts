import { Photo } from './../../shared/components/photo-board/models/photo.model';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo.board.service';
import { buildPhotosList } from 'src/app/shared/components/photo-board/test/build-photo-list';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/services/photo.board-mock.service';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          // provide: PhotoBoardService,
          // useValue: {
          //   getPhotos(): Observable<Photo[]> {
          //     return of(buildPhotosList());
          //   },
          // },
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrived', () => {
    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('should display board').not.toBeNull();
    expect(loader).withContext('should not display loader').toBeNull();
  });
});
