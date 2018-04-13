import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongByArtistComponent } from './song-by-artist.component';

describe('SongByArtistComponent', () => {
  let component: SongByArtistComponent;
  let fixture: ComponentFixture<SongByArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongByArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongByArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
