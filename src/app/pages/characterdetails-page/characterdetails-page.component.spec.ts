import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailsPageComponent } from './characterdetails-page.component';

describe('CharacterdetailsPageComponent', () => {
  let component: CharacterdetailsPageComponent;
  let fixture: ComponentFixture<CharacterdetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterdetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterdetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
