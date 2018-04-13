import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsSongsComponent } from './artists-songs.component';

describe('ArtistsSongsComponent', () => {
  let component: ArtistsSongsComponent;
  let fixture: ComponentFixture<ArtistsSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
