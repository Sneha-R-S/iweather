import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RayleighPage } from './rayleigh.page';

describe('RayleighPage', () => {
  let component: RayleighPage;
  let fixture: ComponentFixture<RayleighPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayleighPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RayleighPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
