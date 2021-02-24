import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUnitComponent } from './catalog-unit.component';

describe('CatalogUnitComponent', () => {
  let component: CatalogUnitComponent;
  let fixture: ComponentFixture<CatalogUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
