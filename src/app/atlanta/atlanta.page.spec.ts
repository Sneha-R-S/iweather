import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtlantaPage } from './atlanta.page';

describe('AtlantaPage', () => {
  let component: AtlantaPage;
  let fixture: ComponentFixture<AtlantaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlantaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtlantaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
