import * as FileSync from "lowdb/adapters/FileSync";
import * as low from "lowdb";

const db = low(new FileSync("db.json"));

export function sampleData() {
  return [
    {
      id: 4,
      pickUpTime: 0,
      booked_at: null,
      isWaiting: null,
      type: "white",
      driver: {
        driverNumber: "1",
        name: "Navin",
        license: "abc",
      },
      location: {
        latitude: 70,
        longitude: 100,
      },
    },
    {
      id: 1,
      pickUpTime: 0,
      booked_at: null,
      isWaiting: null,
      type: "pink",
      driver: {
        id: 1,
        name: "Navin",
        license: "abc",
      },
      location: {
        latitude: 3,
        longitude: 5,
      },
    },
    {
      id: 2,
      pickUpTime: 0,
      booked_at: null,
      isWaiting: null,
      type: "pink",
      driver: {
        id: 4,
        name: "Rajiv",
        license: "abc",
      },
      location: {
        latitude: 7,
        longitude: 20,
      },
    },
    {
      id: 6,
      pickUpTime: 0,
      booked_at: null,
      isWaiting: null,
      type: "red",
      driver: {
        id: 2,
        name: "Navin",
        license: "abc",
      },
      location: {
        latitude: 22,
        longitude: 45,
      },
    },
    {
      id: 3,
      pickUpTime: 0,
      booked_at: null,
      isWaiting: null,
      type: "pink",
      driver: {
        id: 12,
        name: "Abhi",
        license: "abc",
      },
      location: {
        latitude: 24,
        longitude: 44,
      },
    },
  ];
}
export function reset(): void {
  db.defaults({
    cabs: sampleData(),
    time: Date.now(),
  }).write();
}
db.defaults({
  cabs: sampleData(),
}).write();

export { db as default };
