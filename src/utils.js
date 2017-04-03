export const findNote = (notes, id) => notes.find(note => note.id === id);

export const getMaxId = notes => Math.max(...notes.map(note => note.id));

export const checkActive = (noteId, selectedNoteId) => (noteId === selectedNoteId ? 'active' : '');
