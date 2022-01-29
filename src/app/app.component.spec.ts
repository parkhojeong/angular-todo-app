import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {fireEvent, render, screen} from "@testing-library/angular";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-todo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-todo-app');
  });
});


describe('todo list 테스트', () => {
  it('해야할 아이템을 입력한 후 저장할 수 있다.', async () => {
    // when
    await render(AppComponent,)

    // then
    const input = screen.getByPlaceholderText('add an item')
    fireEvent.change(input, {'target': {value: 'clean'}})

    const addButton = screen.getByRole('button', {name: 'Add'})
    fireEvent.click(addButton);

    await screen.findByText('clean')
  });
})
