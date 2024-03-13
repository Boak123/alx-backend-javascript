from ClassRoom import './0-classroom.js';

export defalut function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
