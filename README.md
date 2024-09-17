# dummy

GET all users: GET http://localhost:3000/users
GET a single user: GET http://localhost:3000/users/:id
Create a new user: POST http://localhost:3000/users
Update a user: PUT http://localhost:3000/users/:id
Delete a user: DELETE http://localhost:3000/users/:id


For POST and PUT requests, you'll need to send a JSON body with the user data. For example:
```
jsonCopy{
  "name": "New User",
  "position": "Data Analyst",
  "check-in": "2023-09-18T09:00:00Z",
  "check-out": "2023-09-18T17:00:00Z"
}
```
