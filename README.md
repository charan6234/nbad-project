
# CHARAN TEJ CHALLA NBAD FINAL PROJECT
# UNCC News Web Application

This project is a web application designed as part of the NBAD final project. The application provides insights into **recent innovations in Generative AI** over the past six months, presented through a dashboard and dynamic visualizations.

## Features
- Single Page Application (SPA) built with React for the frontend.
- Backend powered by Python (Flask framework).
- MongoDB as the database.
- JWT-based authentication for secure access.
- Dynamic charts displaying real-time data fetched from the backend.
- ADA/WCAG accessibility compliance for better usability.
- Hosted on an EC2 instance with NGINX serving the frontend and proxying the backend.

---

## Application Structure

### Backend (`uncc-news-backend`)
- **Language**: Python
- **Framework**: Flask
- **Key Features**:
  - JWT Authentication
  - API endpoints for:
    - User authentication
    - Fetching chart data
  - MongoDB integration

### Frontend (`uncc-news-frontend`)
- **Language**: JavaScript
- **Framework**: React
- **Key Features**:
  - Responsive SPA
  - Pages: Login, Dashboard, Summary, Reports
  - Dynamic charts with D3.js
  - WCAG accessibility compliance

---

## Setup and Deployment

### Prerequisites
- **Ubuntu 20.04 or later** (running on EC2)
- **Python 3.8+**
- **Node.js 14+**
- **MongoDB**
- **NGINX**

---

### Deployment Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/charan6234/nbad-project.git
cd nbad-project
```
---

### Backend Setup

#### 1. Navigate to the backend directory:
```bash
cd uncc-news-backend
```

#### 2. Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

#### 3. Install dependencies:
```bash
pip install -r requirements.txt
```

#### 4. Run the backend:
```bash
python app.py
```

#### 5. Verify the backend is running:
```vbnet
http://localhost:3000 
#if you are running in local

http://<your_machine_public_IP>:3000 
#if you are running in remote
```

---
### Frontend Setup

#### 1. Navigate to the backend directory:
```bash
cd ../uncc-news-frontend
```

#### 2. Install Node.js dependencies:
```bash
npm install
```

#### 3. Build the React application:
```bash
npm run build
```

#### 4. Build the React application(Consider when running on the remote environment):
```bash
sudo cp -r build/* /var/www/html/
```

---

### NGINIX Configuration

#### 1. Edit the NGINX configuration:
```bash
sudo nano /etc/nginx/sites-available/default
```

#### 2. Configure NGINX to serve the React frontend and proxy API calls:
```nginx
server {
    listen 80;

    root /var/www/html;
    index index.html index.htm;

    server_name <your-ec2-public-ip>;

    location / {
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 3. Save and restart NGINX:
```bash
sudo systemctl restart nginx
```

---

### Supervisor Configuration for Backend

#### 1. Create a Supervisor configuration file:
```bash
sudo nano /etc/supervisor/conf.d/uncc-news-backend.conf
```

#### 2. Add the following content:
```ini
[program:uncc-news-backend]
directory=/home/ubuntu/charan-nbad/nbad-project/uncc-news-backend
command=/home/ubuntu/charan-nbad/nbad-project/uncc-news-backend/venv/bin/python app.py
autostart=true
autorestart=true
stderr_logfile=/var/log/uncc-news-backend.err.log
stdout_logfile=/var/log/uncc-news-backend.out.log
```

#### 3. Reload Supervisor:
```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start uncc-news-backend
```

---
### Test the application

#### Verify the frontend at
```vbnet
http://<your-ec2-public-ip>
 # If you are running on the remote host

http://localhost
# If you are running the application on the local system
```

#### Verify the backend at
```vbnet
http://<your-ec2-public-ip>:3000
 # If you are running on the remote host

http://localhost:3000
# If you are running the application on the local system
```

---

## API Endpoints

### Authentication

#### Login 
##### Method - POST
```
/api/login
```

#### Request (JSON):
```json
{ 
    "username": "string", 
    "password": "string" 

}
```

#### Response (JSON):
```json
{ 
    "token": "JWT", 
}
```
---

### Chart Data

#### List the research funding trends 
##### Method - GET
```
chart/funding_trends
```
##### Response (JSON)
```json
{
    "data": [
        {
            "area": "Aerospace",
            "funding_amount": 150000,
            "year": 2019
        },
        {
            "area": "Aerospace",
            "funding_amount": 160000,
            "year": 2020
        },
        {
            "area": "Aerospace",
            "funding_amount": 170000,
            "year": 2021
        },
        {
            "area": "Aerospace",
            "funding_amount": 180000,
            "year": 2022
        },
        {
            "area": "Aerospace",
            "funding_amount": 190000,
            "year": 2023
        },
        {
            "area": "Internet of Things",
            "funding_amount": 200000,
            "year": 2019
        },
        {
            "area": "Internet of Things",
            "funding_amount": 220000,
            "year": 2020
        },
        {
            "area": "Internet of Things",
            "funding_amount": 240000,
            "year": 2021
        },
        {
            "area": "Internet of Things",
            "funding_amount": 260000,
            "year": 2022
        },
        {
            "area": "Internet of Things",
            "funding_amount": 280000,
            "year": 2023
        },
        {
            "area": "Physics",
            "funding_amount": 180000,
            "year": 2019
        },
        {
            "area": "Physics",
            "funding_amount": 190000,
            "year": 2020
        },
        {
            "area": "Physics",
            "funding_amount": 200000,
            "year": 2021
        },
        {
            "area": "Physics",
            "funding_amount": 210000,
            "year": 2022
        },
        {
            "area": "Physics",
            "funding_amount": 220000,
            "year": 2023
        },
        {
            "area": "Electrical & Electronic",
            "funding_amount": 220000,
            "year": 2019
        },
        {
            "area": "Electrical & Electronic",
            "funding_amount": 230000,
            "year": 2020
        },
        {
            "area": "Electrical & Electronic",
            "funding_amount": 240000,
            "year": 2021
        },
        {
            "area": "Electrical & Electronic",
            "funding_amount": 250000,
            "year": 2022
        },
        {
            "area": "Electrical & Electronic",
            "funding_amount": 260000,
            "year": 2023
        },
        {
            "area": "Construction & Urban Planning",
            "funding_amount": 140000,
            "year": 2019
        },
        {
            "area": "Construction & Urban Planning",
            "funding_amount": 150000,
            "year": 2020
        },
        {
            "area": "Construction & Urban Planning",
            "funding_amount": 160000,
            "year": 2021
        },
        {
            "area": "Construction & Urban Planning",
            "funding_amount": 170000,
            "year": 2022
        },
        {
            "area": "Construction & Urban Planning",
            "funding_amount": 180000,
            "year": 2023
        },
        {
            "area": "Artificial Intelligence",
            "funding_amount": 250000,
            "year": 2019
        },
        {
            "area": "Artificial Intelligence",
            "funding_amount": 270000,
            "year": 2020
        },
        {
            "area": "Artificial Intelligence",
            "funding_amount": 290000,
            "year": 2021
        },
        {
            "area": "Artificial Intelligence",
            "funding_amount": 310000,
            "year": 2022
        },
        {
            "area": "Artificial Intelligence",
            "funding_amount": 330000,
            "year": 2023
        },
        {
            "area": "Cyber Security",
            "funding_amount": 230000,
            "year": 2019
        },
        {
            "area": "Cyber Security",
            "funding_amount": 250000,
            "year": 2020
        },
        {
            "area": "Cyber Security",
            "funding_amount": 270000,
            "year": 2021
        },
        {
            "area": "Cyber Security",
            "funding_amount": 290000,
            "year": 2022
        },
        {
            "area": "Cyber Security",
            "funding_amount": 310000,
            "year": 2023
        },
        {
            "area": "Chemistry",
            "funding_amount": 160000,
            "year": 2019
        },
        {
            "area": "Chemistry",
            "funding_amount": 170000,
            "year": 2020
        },
        {
            "area": "Chemistry",
            "funding_amount": 180000,
            "year": 2021
        },
        {
            "area": "Chemistry",
            "funding_amount": 190000,
            "year": 2022
        },
        {
            "area": "Chemistry",
            "funding_amount": 200000,
            "year": 2023
        }
    ],
    "status": "success"
}
```


---
#### List the Research Areas 
##### Method - GET
```
/chart/research_areas
```
##### Response (JSON)
```json
{
    "data": [
        {
            "area": "Aerospace",
            "projects_count": 15
        },
        {
            "area": "Internet of Things",
            "projects_count": 22
        },
        {
            "area": "Physics",
            "projects_count": 18
        },
        {
            "area": "Electrical & Electronic",
            "projects_count": 20
        },
        {
            "area": "Construction & Urban Planning",
            "projects_count": 12
        },
        {
            "area": "Artificial Intelligence",
            "projects_count": 30
        },
        {
            "area": "Cyber Security",
            "projects_count": 25
        },
        {
            "area": "Chemistry",
            "projects_count": 10
        }
    ],
    "status": "success"
}
```
