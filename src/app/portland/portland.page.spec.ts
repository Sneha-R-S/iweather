import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortlandPage } from './portland.page';

describe('PortlandPage', () => {
  let component: PortlandPage;
  let fixture: ComponentFixture<PortlandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortlandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortlandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
