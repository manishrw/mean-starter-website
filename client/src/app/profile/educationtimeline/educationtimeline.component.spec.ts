import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EducationtimelineComponent} from './educationtimeline.component';

describe('EducationtimelineComponent', () => {
  let component: EducationtimelineComponent;
  let fixture: ComponentFixture<EducationtimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationtimelineComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
