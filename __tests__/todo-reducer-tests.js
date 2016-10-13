import {todos} from '../src/reducers';
import deepFreeze from 'deep-freeze';

describe('reducer', () => {
  it('adds todo', () => {
    const stateBefore = [];

    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Foo Bar'
    }

    const expectedStateAfter = [
      {
          id: 0,
          text:  'Foo Bar',
          completed: false
        }
      ];

      const stateAfter = todos(stateBefore, action);

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(stateAfter).toEqual(expectedStateAfter);
  });

  it('toggles todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Foo Bar',
        completed: false
      },
      {
        id: 1,
        text: 'Bar Foo',
        completed: false
      }
    ];

    const expectedStateAfter = [
      {
        id: 0,
        text: 'Foo Bar',
        completed: false
      },
      {
        id: 1,
        text: 'Bar Foo',
        completed: true
      }
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = todos(stateBefore, action);
    expect(stateAfter).toEqual(expectedStateAfter);
  });
});
