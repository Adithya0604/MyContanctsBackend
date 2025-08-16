The MyContacts backend project is focused on understanding and implementing how backend systems manage users, authentication, authorization, and secure communication through APIs. This project mainly deals with building and testing RESTful API endpoints for managing contacts using tools like Thunder Client or Postman.

The project flow begins when a user sends a request to the server. The request is matched to the correct endpoint, and middleware is used to validate inputs or handle errors before reaching the main controller logic. Public endpoints are open to everyone, while private endpoints are secured and require authentication. To access private routes, the user must log in, and only then can they view or modify their contacts.

For authentication, the project implements JWT (JSON Web Token). When a user registers, their password is first hashed using an algorithm like bcrypt before storing it in the database, ensuring sensitive data is not saved in plain text. During login, the entered password is compared with the stored hashed password. If it matches, a JWT token is generated and sent to the client. This token contains encoded information that verifies the user’s identity and is attached to every request to private endpoints. The backend validates the token before allowing access.

Authorization ensures that only the logged-in user can access their own contacts. This means even if someone has a valid token, they cannot access or modify another user’s data.

The project also demonstrates how sessions and cookies can work alongside tokens, but JWT is the primary method used for maintaining stateless authentication. Secure storage of sensitive fields in the database has also been implemented to ensure data safety.

The tech stack used in this project includes Node.js with Express.js for building APIs, MongoDB as the database, and libraries like bcrypt for password hashing and jsonwebtoken for token management. Middleware is used for validating IDs, handling errors, and protecting routes.

Overall, the MyContacts backend project gives a clear picture of how user login, secure token creation, password hashing, public vs private routes, and data protection work together to create a secure backend design.Ï
