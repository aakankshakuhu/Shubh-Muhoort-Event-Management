# 💍 Shubh Muhoort – Wedding Event Management System

Shubh Muhoort is a full-stack wedding event management application designed to streamline event planning and guest management.  
It includes an elegant frontend for guests to RSVP and view event details, as well as a robust backend connected to MongoDB for managing event data.

---


## ✨ Features


### 🎨 Frontend

- Built with **React + TypeScript + Vite** for fast and modern UI development.
- Styled with **TailwindCSS** and **ShadCN UI** for a clean, responsive design.
- Guest-friendly **RSVP form** with:
  - Full name, email, phone
  - Number of guests
  - Attendance confirmation (Yes/No)
  - Dietary requirements
  - Personal messages


### ⚙️ Backend

- **Node.js + Express.js** REST API.
- **MongoDB Atlas** database for storing:
  - RSVP responses
  - Event details
- **CORS** configured for secure frontend-backend communication.
- Simple routes for adding events and submitting RSVPs.


### 📊 Database
- **RSVP Collection**: Stores guest details and responses.
- **Events Collection**: Stores event information.


---


## 🛠️ Tech Stack

**Frontend:**  
- React (Vite + TypeScript)  
- TailwindCSS  
- ShadCN UI Components  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (via Mongoose)  

**Tools & Utilities:**  
- Axios / Fetch for API calls  
- dotenv for environment variables 


---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/aakankshakuhu/Shubh-Muhoort-Event-Management.git
cd Shubh-Muhoort-Event-Management

### 2. Backend Setup
cd backend
npm install

MONGO_URI=your_mongodb_connection_string
PORT=5001

node server.js

### 3. Frontend Setup
cd ../
npm install
npm run dev

Frontend will run at: http://localhost:8080


## 📸 Project Screenshots

### 🏠 Home Page

![Home Page1](<Screenshot 2025-09-17 155237.png>) 

![Home Page2](<Screenshot 2025-09-17 155254.png>) 

![Auspicious Dates](<Screenshot 2025-09-17 155322.png>) 

![Itenary](<Screenshot 2025-09-17 155335.png>) 

![Vendors](<Screenshot 2025-09-17 155400.png>) 

![Menu Planner](<Screenshot 2025-09-17 155413.png>) 

![Themes and Decor](<Screenshot 2025-09-17 155422.png>) 

![Gallery1](<Screenshot 2025-09-17 155552.png>) 

![Gallery2](<Screenshot 2025-09-17 155602.png>) 

![rsvp](<Screenshot 2025-09-17 155629.png>)

![Rsvp submitted successfully](<Screenshot 2025-09-17 155636.png>)


---



---



