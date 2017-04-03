import { findNote, getMaxId } from './utils';

test('findNote should return note for given id', () => {
  const notes = [
    { id: 1, body: 'Lorem ipsum los' },
    { id: 2, body: 'Lorem ipsum' },
  ];
  const idToFind = 2;
  const expected = { id: 2, body: 'Lorem ipsum' };
  const result = findNote(notes, idToFind);

  expect(result).toEqual(expected);
});

test('getMaxId should return max id from a notes array', () => {
  const notes = [
    { id: 1, body: 'Lorem ipsum los' },
    { id: 2, body: 'Lorem ipsum' },
  ];
  const expected = 2;
  const result = getMaxId(notes);

  expect(result).toEqual(expected);
});
