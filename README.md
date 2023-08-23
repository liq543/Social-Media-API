# Social Media API

A comprehensive back-end API for a social media platform, built using Node.js, Express, and Mongoose.

[Video Walkthrough Here!](https://www.youtube.com/watch?v=B7i8wQTsrj8)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management**
  - Create, update, and delete users.
  - View all users or specific user details.
  - Add or remove friends.

- **Thought Management**
  - Add, update, and delete thoughts.
  - View all thoughts or specific thought details.
  - Add reactions to thoughts and remove them.

## Installation

1. Clone the repository:

```
git clone https://github.com/liq543/Social-Media-API.git
```

2. Navigate to the project directory:

```
cd Social-Media-API
```

3. Install the required packages:

```
npm install
```

4. Start the server:

```
npm start
```

## Usage

Start the server using:

```
npm run start
```

Once the server is running, you can make requests to the API endpoints as described in the [API Routes](#api-routes) section.

## API Routes

### User Routes

- Get all users: `GET /api/users`
- Get a user by ID: `GET /api/users/:id`
- Create a user: `POST /api/users`
- Update a user: `PUT /api/users/:id`
- Delete a user: `DELETE /api/users/:id`
- Add a friend: `POST /api/users/:userId/friends/:friendId`
- Remove a friend: `DELETE /api/users/:userId/friends/:friendId`

### Thought Routes

- Get all thoughts: `GET /api/thoughts`
- Get a thought by ID: `GET /api/thoughts/:id`
- Create a thought: `POST /api/thoughts`
- Update a thought: `PUT /api/thoughts/:id`
- Delete a thought: `DELETE /api/thoughts/:id`

### Reaction Routes

- Add a reaction to a thought: `POST /api/thoughts/:thoughtId/reactions`
- Remove a reaction from a thought: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

## Testing

To test the API, you can use tools like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

## Contributing

Don't. This is a personal project for learning purposes. No contributions will be accepted.

## License

This project is licensed under the MIT License.
