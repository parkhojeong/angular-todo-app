import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoComponent} from './todo.component';
import {fireEvent, render, screen} from "@testing-library/angular";
import {TodoListComponent} from "./todo-list/todo-list.component";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('todo app 테스트', () => {
  it('해야할 아이템을 입력한 후 저장할 수 있다.', async () => {
    // when
    await render(TodoComponent, {
      declarations: [TodoListComponent]
    })

    // then
    const input = screen.getByPlaceholderText('add an item')
    fireEvent.change(input, {'target': {value: 'clean'}})

    const addButton = screen.getByRole('button', {name: 'Add'})
    fireEvent.click(addButton);

    await screen.findByText('clean')
  });
})
