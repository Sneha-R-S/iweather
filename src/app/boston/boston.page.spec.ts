import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BostonPage } from './boston.page';

describe('BostonPage', () => {
  let component: BostonPage;
  let fixture: ComponentFixture<BostonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BostonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BostonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
