import bodyParser from "body-parser";
import express, { Request, Response } from "express";
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // This will allow all origins
app.use(bodyParser.json());

// Define the User interface
interface User {
  id: number;
  name: string;
  position: string;
  "check-in": string;
  "check-out": string;
  attendance?: number;
}

// Dummy data for Users array
let Users: User[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    "check-in": "2023-09-17T09:00:00Z",
    "check-out": "2023-09-17T17:00:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    "check-in": "2023-09-17T08:30:00Z",
    "check-out": "2023-09-17T16:30:00Z",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "UX Designer",
    "check-in": "2023-09-17T10:00:00Z",
    "check-out": "2023-09-17T18:00:00Z",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Data Analyst",
    "check-in": "2023-09-17T09:15:00Z",
    "check-out": "2023-09-17T17:45:00Z",
  },
  {
    id: 5,
    name: "Chris Lee",
    position: "DevOps Engineer",
    "check-in": "2023-09-17T08:00:00Z",
    "check-out": "2023-09-17T16:00:00Z",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    position: "Product Owner",
    "check-in": "2023-09-17T09:30:00Z",
    "check-out": "2023-09-17T18:30:00Z",
  },
  {
    id: 7,
    name: "Tom Jackson",
    position: "QA Tester",
    "check-in": "2023-09-17T10:30:00Z",
    "check-out": "2023-09-17T19:00:00Z",
  },
  {
    id: 8,
    name: "Lucy Chen",
    position: "Frontend Developer",
    "check-in": "2023-09-17T09:45:00Z",
    "check-out": "2023-09-17T18:15:00Z",
  },
  {
    id: 9,
    name: "David Kim",
    position: "Backend Developer",
    "check-in": "2023-09-17T08:45:00Z",
    "check-out": "2023-09-17T17:15:00Z",
  },
  {
    id: 10,
    name: "Emma Watson",
    position: "HR Manager",
    "check-in": "2023-09-17T08:15:00Z",
    "check-out": "2023-09-17T16:45:00Z",
  },
  {
    id: 11,
    name: "Robert Green",
    position: "System Administrator",
    "check-in": "2023-09-17T07:30:00Z",
    "check-out": "2023-09-17T16:30:00Z",
  },
  {
    id: 12,
    name: "Olivia Taylor",
    position: "Marketing Specialist",
    "check-in": "2023-09-17T09:00:00Z",
    "check-out": "2023-09-17T17:30:00Z",
  },
  {
    id: 13,
    name: "Daniel Martinez",
    position: "Customer Support",
    "check-in": "2023-09-17T10:00:00Z",
    "check-out": "2023-09-17T19:00:00Z",
  },
  {
    id: 14,
    name: "Sophia Nguyen",
    position: "Business Analyst",
    "check-in": "2023-09-17T08:30:00Z",
    "check-out": "2023-09-17T17:00:00Z",
  },
  {
    id: 15,
    name: "James Wilson",
    position: "Mobile App Developer",
    "check-in": "2023-09-17T09:30:00Z",
    "check-out": "2023-09-17T18:00:00Z",
  },
];

// Home route - Hello World
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World</h1>");
});

// GET all users
app.get("/users", (req: Request, res: Response) => {
  res.json(Users);
});

// GET a single user by ID
app.get("/users/:id", (req: Request, res: Response) => {
  const user = Users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST a new user
app.post("/users", (req: Request, res: Response) => {
  const newUser: User = {
    id: Users.length + 1,
    name: req.body.name,
    position: req.body.position,
    "check-in": req.body["check-in"],
    "check-out": req.body["check-out"],
  };
  Users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) an existing user
app.put("/users/:id", (req: Request, res: Response) => {
  const user = Users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name || user.name;
  user.position = req.body.position || user.position;
  user["check-in"] = req.body["check-in"] || user["check-in"];
  user["check-out"] = req.body["check-out"] || user["check-out"];

  res.json(user);
});

// DELETE a user
app.delete("/users/:id", (req: Request, res: Response) => {
  const index = Users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  Users.splice(index, 1);
  res.json({ message: "User deleted" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
