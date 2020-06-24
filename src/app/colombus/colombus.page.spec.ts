import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColombusPage } from './colombus.page';

describe('ColombusPage', () => {
  let component: ColombusPage;
  let fixture: ComponentFixture<ColombusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColombusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
