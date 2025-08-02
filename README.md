# Portfolio-Website
# Dynamic MERN Stack Portfolio Website

## 🚀 About The Project

This project was built to serve as a personal space to showcase my development projects. The primary goal was to create a "living" portfolio that could be updated easily and dynamically. Instead of hard-coding each project into the HTML, this application pulls project data from a NoSQL database via a RESTful API. An admin can log in to a protected panel to perform full CRUD (Create, Read, Update, Delete) operations on the projects.

---

## 🛠️ Key Features

* **Dynamic Project Management:** Add, edit, and delete projects from a secure admin panel.
* **RESTful API:** A backend built with Node.js and Express to serve project data to the frontend.
* **Modern Frontend:** A responsive and interactive user interface built with React.
* **Database Integration:** MongoDB (via Mongoose) stores all project information.
* **Component-Based Architecture:** Built with reusable React components for maintainability.

---

## ⚙️ Technology Stack

* **Frontend:** React, Axios, CSS3
* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Deployment:** Vercel (Frontend) & Render (Backend)

---

## 📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You'll need to have the following software installed on your machine:
* [Node.js](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install)
* [Git](https://git-scm.com/downloads)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)[Your-GitHub-Username]/[Your-Repo-Name].git
    cd [Your-Repo-Name]
    ```

2.  **Set up the Backend:**
    ```sh
    cd portfolio-backend
    npm install
    ```
    Create a `.env` file in the `portfolio-backend` directory and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_atlas_connection_string
    ```

3.  **Set up the Frontend:**
    ```sh
    cd ../portfolio-frontend
    npm install
    ```

### Running the Application

1.  **Start the backend server** (from the `portfolio-backend` directory):
    ```sh
    npm start
    ```
    The server will be running on `http://localhost:5000`.

2.  **Start the frontend development server** (from the `portfolio-frontend` directory in a new terminal window):
    ```sh
    npm start
    ```
    The app will open in your browser at `http://localhost:3000`.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

[Your Name] - [Link to your LinkedIn or Email]
