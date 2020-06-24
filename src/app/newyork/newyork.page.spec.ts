import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewyorkPage } from './newyork.page';

describe('NewyorkPage', () => {
  let component: NewyorkPage;
  let fixture: ComponentFixture<NewyorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewyorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewyorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
