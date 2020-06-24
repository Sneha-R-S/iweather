import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiamiPage } from './miami.page';

describe('MiamiPage', () => {
  let component: MiamiPage;
  let fixture: ComponentFixture<MiamiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiamiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiamiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
