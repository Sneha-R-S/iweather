import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TucsonPage } from './tucson.page';

describe('TucsonPage', () => {
  let component: TucsonPage;
  let fixture: ComponentFixture<TucsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TucsonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TucsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
