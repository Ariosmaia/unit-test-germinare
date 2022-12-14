import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo.board.service';
import { buildPhotosList } from 'src/app/shared/components/photo-board/test/build-photo-list';

import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) Should display board when data arrived', () => {
    const photos = buildPhotosList();

    spyOn(service, 'getPhotos').and.returnValue(of(photos));

    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('should display board').not.toBeNull();
    expect(loader).withContext('should not display loader').toBeNull();
  });

  it('(D) Should display loader while waiting for data', () => {
    spyOn(service, 'getPhotos').and.returnValue(of(null));

    fixture.detectChanges();

    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('should not display board').toBeNull();
    expect(loader).withContext('should display loader').not.toBeNull();
  });
});
