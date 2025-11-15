# AI Travel Planner

A smart AI-powered travel planning application that helps users plan trips by providing destination suggestions, duration planning, nearby attractions, hotels, distances, and more.

This project consists of:

* Frontend (HTML/CSS/JS or React) built in VS Code
* Backend (Java + Spring Boot)
* AI-powered recommendation system

---

## Features

* Destination search and recommendations
* Nearby hotels information
* Nearby localities and attractions
* Distance calculations and route information
* Destination images with UI cards
* AI suggestions based on user preferences

---

## Tech Stack

### Frontend

* HTML, CSS, JavaScript (or React)
* VS Code development environment

### Backend

* Java
* Spring Boot
* REST APIs

### Others

* Git and GitHub for version control
* AI/ML logic (future enhancement)

---

## Project Structure

```
AI-Travel_Planner/
├── Travel_Planner_Frontend/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── images/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── controllers/
│
└── README.md
```

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/AI-Travel_Planner.git
```

### 2. Run Frontend

Open `index.html` in your browser or host it using VS Code Live Server.

### 3. Run Backend (Java Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

Backend starts at:
`http://localhost:8080`

---

## API Endpoints (Examples)

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| GET    | `/destinations`  | Fetch list of destinations          |
| POST   | `/plan`          | Generate a trip plan based on input |
| GET    | `/hotels/{city}` | Fetch hotels in a selected city     |

---

## AI Recommendation Logic (Planned)

* NLP-based destination understanding
* Budget, duration, and interest-based filtering
* Integration with external APIs

---

## Contributing

You are welcome to fork the repository and submit pull requests.

---

## License

This project is open-source and free to use.

---

## Contact

Developer: THOTA HEMA
For suggestions or collaboration, feel free to reach out.
