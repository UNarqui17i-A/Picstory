# Picstory
*Software architecture project.*

**Picstory** is a social network where you can share your favorite moments through photos.

### User Stories:

*   **Create User:** As an User, I want to be able to Sign Up in the Application.

*   **Authentication:** As a registered user, I want to be able to Sign in the Application usign an username and a password.

*   **Image Publishing:**  As a registered user, I want to be able to publish an image in the Application.

*   **Personal Newsfeed:** As a registered user, I want to be able to look all images I have published in the Application through a personal newsfeed.

*   **General Newsfeed:** As a registered user, I want to be able to look all images registered users have published in the Application through a general newsfeed.

*   **Image Score:** As a registered user, I want to be able to score an image published by another registered user.

### Application Architecture

The application is separated in three microservices:

1.  **Users:** Manage users and authentication.

    *Technologies:*
    *   NodeJS (SailsJS Framework)
    *   MongoDB


2.  **Posts:** Manage posts, images, scores and comments.

    *Technogolies:*
    *   Rails (Ruby on Rails Framework)
    *   PostgreSQL


3.  **Images:** Manage content related to images and their storage.

    *Technologies:*
    *   Python (Django Framework)
