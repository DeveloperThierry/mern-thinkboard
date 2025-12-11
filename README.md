
# 💡 MERN ThinkBoard

![Screenshot](/images/file.png)

## 🏆 Project Status & Licensing
| Status | License | Tech Stack |
| :---: | :---: | :---: |
| [![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/yourusername/mern-thinkboard/actions) | [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md) | [![Tech Stack: MERN](https://img.shields.io/badge/Stack-MERN-red)](https://www.mongodb.com/) |

---

## 📝 Short Description

**MERN ThinkBoard is a collaborative, real-time digital whiteboard application built with the MERN stack for brainstorming and visual project planning.**

---

## ✨ Features

* **Real-Time Collaboration:** Multiple users can simultaneously draw and edit the same board.
* **Intuitive Drawing Tools:** Includes a selection of pens, shapes, and text options for rich content creation.
* **User Authentication:** Secure sign-up and login for personalized access to individual boards.
* **Persistent Storage:** Boards and all their content are securely saved to a MongoDB database.
* **Export Functionality:** Ability to export boards as image files (e.g., PNG) for easy sharing.

---

## 🛠️ Installation

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

* **Node.js & npm (or yarn):** Essential for running the backend server and managing frontend dependencies.
    * *We recommend using Node.js version 18 or higher.*
* **MongoDB:** A running instance of a MongoDB database (local or cloud-hosted via MongoDB Atlas).
* **Git:** For cloning the repository.

### Step-by-Step Setup

1. **Clone the Repository:**
    ```bash
    git clone [https://github.com/yourusername/mern-thinkboard.git](https://github.com/yourusername/mern-thinkboard.git)
    cd mern-thinkboard
    ```

2. **Install Dependencies:**
    * **Backend (Server):**
        ```bash
        cd server
        npm install
        ```
    * **Frontend (Client):**
        ```bash
        cd ../client
        npm install
        ```

3. **Configure Environment Variables:**
    * Create a file named `.env` in the root of the `/server` directory.
    * Add your MongoDB connection string and a JWT secret key (example placeholders below):
        ```env
        PORT=5000
        MONGO_URI="mongodb+srv://<user>:<password>@cluster0.abcde.mongodb.net/thinkboardDB?retryWrites=true&w=majority"
        JWT_SECRET="your_very_strong_secret_key"
        ```

---

## 🚀 Usage

Once the dependencies are installed and the environment variables are set, you can start the application using separate commands for the backend and frontend.

### 1. Start the Backend Server

Navigate to the `/server` directory and run the start script:

```bash
cd server
npm start
# The server will run on http://localhost:5000
```

### 2. Start the Frontend Client

In a new terminal window, navigate to the `/client` directory and run the start script:

```bash
cd client
npm start
# The client will open in your browser, typically at http://localhost:3000
```

### Main Commands:

To run the full stack concurrently (if a tool like concurrently is set up in the root package.json):

```bash
npm run dev
```

To run a test suite (if available):

```bash
npm test
```

---

## 👋 Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, or better documentation, your help is appreciated.

Please read our Contributing Guide for details on our code of conduct and the process for submitting pull requests.

---

## ⚖️ License

This project is licensed under the MIT License. This means you are free to use, modify, and distribute the software, provided the original copyright and license notice are included in all copies. For the full licensing text, please see the LICENSE.md file.

---

## ❓ Support

If you have any questions, encounter a bug, or need help setting up the project, please open an issue on the GitHub repository.