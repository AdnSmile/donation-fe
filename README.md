# 🎯 Donation Website - Frontend

A web donation application sandbox that allows users to make donations through various banks with Midtrans payment gateway integration.

## 📋 Project Description

This donation website is built using React and integrated with a backend API to process payments. Main features include:

- ✅ Complete donation form with validation
- ✅ Midtrans payment gateway integration sandbox
- ✅ Payment details page with VA Number
- ✅ Responsive design with Tailwind CSS
- ✅ Multiple bank support (BCA, BRI, BNI)

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Main framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - CSS framework for styling
- **Axios** - HTTP client for API calls
- **React Router DOM** - Client-side routing

### Backend
- **Spring Boot** - Java-based backend framework
- **Kotlin** - Programming language
- **Maven** - Build tool and dependency management
- **Midtrans** - Payment gateway integration

### Integration
- **REST API** - Communication between frontend and backend
- **Environment Variables** - API URL configuration
- **CORS** - Cross-origin resource sharing configuration

## 🚀 Project Setup

### Prerequisites
Make sure you have installed:
- Node.js (version 16 or newer)
- npm or yarn
- Java 17 or newer (for backend)
- Maven (for backend)

### Backend Setup
This frontend application requires a backend API to function properly. For backend setup instructions, please refer to the [Backend Repository](https://github.com/AdnSmile/donation-be).

### Frontend Setup

### 1. Clone Repository
```bash
git clone https://github.com/AdnSmile/donation-fe.git
cd donation-fe
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the project root directory:

```bash
# Copy from template
cp env.example .env
```

Or create manually with content:

```env
# Backend API URL
VITE_BE_API_URL=http://localhost:8080/api
```

**Note:** 
- Adjust the URL according to your backend API
- `env.example` file is available as a template
- All environment variables must be prefixed with `VITE_`

### 4. Run Development Server
```bash
npm run dev
```

The application will run at `http://localhost:5173`

## 🚀 Running the Application

### 1. Start Backend Server
Follow the instructions in the [Backend Repository](https://github.com/AdnSmile/donation-be) to start the backend server.

### 2. Start Frontend Server
```bash
npm run dev
```
The frontend will run at `http://localhost:5173`

### 3. Access the Application
- Open your browser and go to `http://localhost:5173`
- Make sure both backend and frontend servers are running


## 🔧 Available Scripts

```bash
# Development
npm run dev          # Run development server

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🌐 API Endpoints

### Create Donation
- **URL:** `POST /donate`
- **Headers:** `Accept: application/json`
- **Body:**
```json
{
  "amount": "5000",
  "name": "John Doe",
  "email": "john@example.com",
  "note": "Donation message (optional)",
  "bank": "bri"
}
```

### Response Format
```json
{
  "status": "Success",
  "message": "Donation transaction created successfully",
  "data": {
    "bank": "BRI",
    "amount": "5000",
    "vaNumber": "688849549496135115",
    "linkPayment": "https://simulator.sandbox.midtrans.com/bri/va/index"
  }
}
```

## 🎨 Application Features

### 1. Donation Form (`App.jsx`)
- **Input Fields:**
  - Name (required)
  - Email (required)
  - Target bank (BCA, BRI, BNI)
  - Donation amount (minimum Rp 1,000)
  - Message (optional)

- **Validation:**
  - All required fields must be filled
  - Valid email format
  - Minimum donation amount Rp 1,000
  - Automatic currency formatting

### 2. Loading Screen
- **Full screen overlay** with animated spinner
- **Form disabled** during loading
- **Button text changes** to "Processing..."

### 3. Payment Page (`Payment.jsx`)
- **Payment Information:**
  - Target bank
  - Donation amount (Rupiah format)
  - VA number for payment
- **Actions:**
  - "Pay Donation Here" - Open payment link
  - "Donate Again" - Return to form

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BE_API_URL` | Backend API URL | `http://localhost:8080/api` |

**Note:** All environment variables must be prefixed with `VITE_` to be accessible in the frontend.

## 🏦 Supported Banks

- **BCA** - Bank Central Asia
- **BRI** - Bank Rakyat Indonesia  
- **BNI** - Bank Negara Indonesia

## 🎯 Application Flow

1. **User fills donation form**
2. **Input validation** - Ensure all fields are filled
3. **Submit form** - Loading screen appears
4. **API request** - Send data to backend
5. **Response received** - Navigate to payment page
6. **Payment details** - Display VA number and link
7. **User makes payment** - Via ATM/mobile banking
8. **Next options** - Donate again or finish

## 🐛 Troubleshooting

### Common Issues

**1. CORS Error**
```
Access to fetch at 'http://localhost:8080/api/donate' from origin 'http://localhost:5173' has been blocked by CORS policy
```
**Solution:** Make sure the backend allows CORS from the frontend origin.

**2. Environment Variable Not Found**
```
import.meta.env.VITE_BE_API_URL is undefined
```
**Solution:** 
- Ensure `.env` file exists in the root directory
- Restart development server after adding environment variables
- Make sure variable names are prefixed with `VITE_`

**3. Routing Not Working**
```
Cannot GET /payment
```
**Solution:** Make sure to use `npm run dev` instead of `npm run preview` for development.

**4. Backend Connection Failed**
```
Failed to fetch from http://localhost:8080/api/donate
```
**Solution:** 
- Ensure the backend server is running (see [Backend Repository](https://github.com/AdnSmile/donation-be))
- Verify the `VITE_BE_API_URL` in your `.env` file

## 📱 Responsive Design

The application is responsive and supports:
- **Desktop** - Optimal layout for large screens
- **Tablet** - Adaptation for medium screens
- **Mobile** - Mobile-friendly layout

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project uses the MIT license. See the `LICENSE` file for more details.

## 🔗 Related Repositories

- **[Backend Repository](https://github.com/AdnSmile/donation-be)** - Spring Boot backend with Midtrans integration
- **[Frontend Repository](https://github.com/AdnSmile/donation-fe)** - React frontend (this repository)

## 📚 Useful Links

- **[Midtrans Documentation](https://docs.midtrans.com/docs/midtrans-account)** - Payment gateway documentation
- **[Spring Boot Documentation](https://spring.io/projects/spring-boot)** - Backend framework docs
- **[React Documentation](https://react.dev/)** - Frontend framework docs
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - CSS framework docs

---

**Happy Coding! 🚀**
