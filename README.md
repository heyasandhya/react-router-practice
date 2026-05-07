

# Synco
### AI Powered Interview Preparation Platform

Prepare smarter for technical interviews with AI-generated interview reports, resume analysis, and personalized preparation workflows.


---

## Overview

Synco is a full-stack AI-powered interview preparation platform designed to help candidates improve their interview readiness through AI-driven insights and personalized interview reports.

The platform allows users to upload resumes, generate interview-focused reports, track interview history, and create optimized resume PDFs — all inside a modern and responsive web application.

---
## Core Functionalities

Generate AI-powered interview reports
Upload and analyze resumes
Create resume PDFs
Manage interview history
Secure authentication & protected routes
Personalized interview preparation workflow

## Authentication Flow

User registers or logs in
JWT token is generated
Token stored securely in cookies
Protected routes validate authentication
Unauthorized users are redirected to login

## Features

- Secure Authentication System
- User Registration & Login
- Protected Routes
- AI-Based Interview Report Generation
- Resume Upload Support
- Personalized Resume PDF Generation
- Interview Report Tracking
- Responsive User Interface
- Cookie-Based Authentication
- REST API Integration

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Cookie Parser
- Multer

---

## Project Structure

```bash
synco/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── features/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── config/
│
└── README.md