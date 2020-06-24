import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DenverPage } from './denver.page';

describe('DenverPage', () => {
  let component: DenverPage;
  let fixture: ComponentFixture<DenverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DenverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
