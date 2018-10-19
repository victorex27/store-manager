"use strict"
var user = [
   {
    "id": 1,
    "username":"charles",
    "password": "$2b$10$KLY5w6iKTPjwkyDvjbU4auwbHF9w/2OgcR1I7tOCXkjHVuHx/C89O",
    "type":"admin",
    "permission":["admin"],
    "active":1
  },
  {
    "id": 2,
    "username":"charly",
    "password": "$2b$10$hyTyV8uzcR7JKVgKVtitH.DIGLT1pvOvEQSjJIahgnjhmODWNb6lC",
    "type":"user",
    "permission":["user"],
    "active":1
  },
  {
    "id": 3,
    "username":"amaobi",
    "password": "$2b$10$bd/poFNxNfG8rIW1ijD12u.GVn4VY8il5PuGE9k6y8/ztQNKiPPNq",
    "type":"user",
    "permission":["user"],
    "active":1
  },
  {
    "id": 4,
    "username":"amanda",
    "password": "$2b$10$0Qv39Wzo1m4UyL4aJrcZAORoK0FwGe2eOBxKIQLiEP6W4C7HoOZPa",
    "type":"user",
    "permission":["admin","user"],
    "active":1
  }
]

module.exports = function(){

  return user;
};