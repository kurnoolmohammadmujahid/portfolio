import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAchivementsComponent } from './awards-achivements.component';

describe('AwardsAchivementsComponent', () => {
  let component: AwardsAchivementsComponent;
  let fixture: ComponentFixture<AwardsAchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsAchivementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
