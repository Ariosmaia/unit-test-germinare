import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './models/photo.model';

import { PhotoBoardComponent } from './photo-board.component';

function buildPhotosList(): Photo[] {
  const photos: Photo[] = [];
  for (let index = 0; index < 8; index++) {
    photos.push({
      id: index + 1,
      url: '',
      description: '',
    });
  }

  return photos;
}

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display rows and columns when (@Input phots) has value', () => {
    component.photos = buildPhotosList();
    fixture.detectChanges();

    expect(component.rows.length).withContext('Number of rows').toBe(2);
    expect(component.rows[1].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
  });
});
