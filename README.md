This milestone focused on securely handling user registration on the backend, including the crucial step of password encryption. This is essential for protecting user data and maintaining security best practices.

Milestone 7: Backend Login Endpoint and Password Validation 🚀
✅ Login Endpoint Implementation Created a backend route to handle user login. Accepted user credentials (email/username and password) from the frontend.

✅ User Authentication Process Retrieved the corresponding user from the database using the provided email. If the user does not exist, returned an error: "User does not exist." Used bcrypt.compare to compare the entered password with the stored hashed password. If the passwords matched, authenticated the user and proceeded to login. If they did not match, returned an authentication error.

✅ Security Measures Ensured that passwords were stored as hashes using bcrypt to maintain security. Handled potential security vulnerabilities, such as brute-force attacks.

✅ README Update Documented Milestone 7 progress in this README file. This milestone introduced the backend authentication process, enabling users to log in securely by verifying their credentials against stored, encrypted passwords. This is crucial for maintaining data security and user authentication in the application.
