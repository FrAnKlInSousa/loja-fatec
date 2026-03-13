import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogo } from './catalogo';

describe('Catalogo', () => {
  let component: Catalogo;
  let fixture: ComponentFixture<Catalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catalogo],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render all books', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const livrosDOM = compiled.querySelectorAll('[data-test="livros"]');
    expect(livrosDOM.length).toBe(component.livros.length);

  });
});
