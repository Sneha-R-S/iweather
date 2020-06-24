import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoustonPage } from './houston.page';

describe('HoustonPage', () => {
  let component: HoustonPage;
  let fixture: ComponentFixture<HoustonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoustonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoustonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
