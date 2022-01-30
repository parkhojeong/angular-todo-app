import {TestBed} from '@angular/core/testing';

import {TodoService} from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('해야할 것이 없는 상태로 시작한다', function () {
    // then
    expect(service.getItems()).toHaveSize(0)
  });

  it('해야할 것을 추가할 수 있다', function () {
    // given
    const mockData = Object.freeze({
      description: '밥먹기',
    })

    // when
    service.addItem(mockData.description);

    // then
    expect(service.getItems()).toHaveSize(1)
    expect(service.getItems()[0].description).toBe(mockData.description);
  });

  it('해야할 것을 여러 개 추가하면 마지막에 추가한게 제일 앞에 나온다', function () {
    // given
    const mockData = Object.freeze({
      description1: '밥먹기',
      description2: '양치하기',
      description3: '잠자기',
    })

    // when
    service.addItem(mockData.description1);
    service.addItem(mockData.description2);
    service.addItem(mockData.description3);

    // then
    expect(service.getItems()).toHaveSize(3)
    expect(service.getItems()[0].description).toBe(mockData.description3);
  });
});
