import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  const roomOne = new ClassRoom(19);
  array.push(roomOne);
  const roomTwo = new ClassRoom(20);
  array.push(roomTwo);
  const roomThree = new ClassRoom(34);
  array.push(roomThree);
  return array;
}
