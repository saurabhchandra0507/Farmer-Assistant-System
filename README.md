# 🌾 FarmAssist - Digital Farming Companion

A comprehensive web-based farmer assistant system that provides real-time weather updates, intelligent crop recommendations, government schemes, and market price insights — empowering farmers to make informed decisions.

---

## 🔍 Features

### 🚜 Core Functionality
- **Real-time Weather Dashboard**  
  Current conditions, 7-day forecasts, and alerts.
- **Intelligent Crop Recommendations**  
  Personalized seed and fertilizer suggestions based on soil type and season.
- **Government Schemes Hub**  
  Latest agricultural policies, subsidies, and how to apply.
- **Market Price Tracker**  
  Crop prices and market trends from various locations.
- **Agricultural News**  
  Stay updated with farming policies and market insights.
- **Multi-language Support**  
  Available in English, Hindi, and Tamil.

### 💡 User Experience
- **Responsive Design**  
  Optimized for all devices — desktop, tablet, and mobile.
- **Intuitive Navigation**  
  Designed for ease of use by all age groups.
- **Visual Indicators**  
  Weather icons, price trends, and status badges.
- **Touch & Swipe Support**  
  Seamless navigation on mobile devices.

---

## 🛠️ Technology Stack

| Layer       | Tech                            |
|-------------|----------------------------------|
| Frontend    | HTML5, CSS3, JavaScript (ES6+)   |
| Backend     | Python 3.7+                      |
| Styling     | Custom CSS (Flexbox & Grid)      |
| Icons       | Font Awesome 6.0                 |
| Design      | Mobile-first, responsive design  |

---

## 📁 File Structure

farmassist/
├── index.html # Main UI
├── styles.css # App styling
├── script.js # Frontend logic
├── api.py # Backend logic (Python API)
└── README.md # Project documentation

## 🧭 Usage Guide

### 🔄 Navigation
- Use the top navbar to switch between app sections.
- On mobile: swipe left/right to navigate.
- On desktop: use left/right arrow keys for navigation.

---

### 🌦️ Weather Section
- Enter your location to get weather data.
- View:
  - Current weather conditions
  - 7-day forecast
  - Weather alerts and warnings

---

### 🌱 Crop Recommendations
- Select your **soil type**:  
  - Clay  
  - Sandy  
  - Loamy
- Choose the **current season**:  
  - Kharif  
  - Rabi  
  - Summer
- Receive intelligent recommendations for:
  - Seeds
  - Fertilizers

---

### 🏛️ Government Policies
- Browse available schemes and subsidies.
- View:
  - Eligibility criteria
  - Application procedures
- Stay updated with the latest agriculture-related policies.

---

### 📊 Market Prices
- Check current crop prices by region.
- Analyze price trends and fluctuations.
- Get advisory insights for better selling decisions.

---

## ⚙️ Key Components

### Frontend (JavaScript)
- Navigation system and section switching
- Weather data display logic
- Crop recommendation engine
- Market price tracking
- Multi-language interface (language switcher)
- Responsive interaction: touch, swipe, keyboard navigation

### Backend (Python)
- **WeatherService** – Processes and simulates weather forecasts
- **CropRecommendationService** – Suggests best crops and fertilizers
- **MarketService** – Tracks market trends and price analytics
- **GovernmentSchemeService** – Handles scheme and policy data

---

## ✏️ Customization

### ➕ Adding a New Language
- Update the `translations` object in `script.js`.
- Add the new language to the language selector dropdown.
- Translate new text content accordingly.

### 🌾 Adding New Crops
- Add entries in the `cropRecommendations` object in `script.js`.
- Update crop-related data in the `api.py` backend.
- Adjust recommendation display logic if needed.

### 🎨 Styling
- Modify primary colors using CSS custom properties in `styles.css`.
- Change layout using Flexbox and Grid classes.
- Tweak responsive behavior by editing media queries.
