
# Appointment Booking API

## Overview
This project is a **Node.js and Express** API for a dermatology clinic. It integrates **Twilio SMS** to send appointment confirmation messages to users. Previously, patients would call the receptionist to schedule an appointment. This system modernizes the process by allowing patients to book appointments online and receive SMS confirmations through an online interface. 

## Features
- Book an appointment via a REST API.
- Send SMS confirmations using **Twilio**.
- Stores appointment data (if connected to a database).
- Uses **CORS** and **dotenv** for secure API requests.

## Technologies Used
- **Node.js**
- **Express.js**
- **Twilio API**
- **MongoDB** (Optional)
- **dotenv** (for environment variables)
- **CORS**

## Installation

### **1. Clone the Repository**  
```bash
git clone https://github.com/your-repository/DermatologyClinicPortal.git
cd DermatologyClinicPortal
```

### **2. Install Dependencies**  
Run the following command to install the necessary dependencies:

```bash
npm install
```

### **3. Set Up Environment Variables**  
Create a `.env` file in the root directory and add the following:

```env
PORT=5000
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

Replace the placeholders with your actual Twilio credentials.

### **4. Start the Server**  
Run the following command to start the server:

```bash
npm start
```

For development mode with live reload:

```bash
npm run dev
```

## API Endpoints

### **POST /api/appointments/book**
**Description:** Books an appointment and sends an SMS confirmation.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "+1234567890",
  "date": "2025-04-01",
  "time": "10:00 AM"
}
```

**Response:**
```json
{
  "message": "Appointment booked successfully",
  "appointment": {
    "name": "John Doe",
    "phone": "+1234567890",
    "date": "2025-04-01",
    "time": "10:00 AM"
  }
}
```

## Project Structure
```
/DermatologyClinicPortal
│── /node_modules
│── /routes
│   └── appointmentRoutes.js
│── /config
│   └── db.js
│── .env
│── package.json
│── server.js
│── README.md
```

## Running in Development Mode
To run in development mode, use the following command:

```bash
npm run dev
```

## Contributing
Contributions are welcome! If you find issues or want to add features, feel free to submit a pull request.
