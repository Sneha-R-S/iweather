import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LosangelesPage } from './losangeles.page';

describe('LosangelesPage', () => {
  let component: LosangelesPage;
  let fixture: ComponentFixture<LosangelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosangelesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LosangelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
