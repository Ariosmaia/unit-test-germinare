import {
  Component,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './models/photo.model';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

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

describe(PhotoBoardComponent.name + 'outros', () => {
  let component: PhotoBoardTestComponent;
  let fixture: ComponentFixture<PhotoBoardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotosList();
    fixture.detectChanges();

    expect(component.board.rows.length).withContext('Number of rows').toBe(2);
    expect(component.board.rows[1].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
  });
});

@Component({
  template: `<app-photo-board [photos]="photos"></app-photo-board>`,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) board: PhotoBoardComponent;
  photos: Photo[] = [];
}
