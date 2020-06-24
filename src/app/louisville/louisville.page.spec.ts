import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LouisvillePage } from './louisville.page';

describe('LouisvillePage', () => {
  let component: LouisvillePage;
  let fixture: ComponentFixture<LouisvillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouisvillePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LouisvillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
