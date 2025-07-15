// Global variables
let currentLocation = 'New Delhi';
let currentLanguage = 'en';

// Language translations
const translations = {
    en: {
        welcome: 'Welcome to FarmAssist',
        dashboard: 'Dashboard',
        weather: 'Weather',
        recommendations: 'Recommendations',
        policies: 'Policies',
        market: 'Market'
    },
    hi: {
        welcome: 'फार्मअसिस्ट में आपका स्वागत है',
        dashboard: 'डैशबोर्ड',
        weather: 'मौसम',
        recommendations: 'सुझाव',
        policies: 'नीतियां',
        market: 'बाजार'
    },
    ta: {
        welcome: 'பண்ணையார் உதவியாளருக்கு வரவேற்கிறோம்',
        dashboard: 'டாஷ்போர்டு',
        weather: 'வானிலை',
        recommendations: 'பரிந்துரைகள்',
        policies: 'கொள்கைகள்',
        market: 'சந்தை'
    }
};

// Mock data for demonstrations
const mockWeatherData = {
    current: {
        temperature: 28,
        condition: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12,
        visibility: 8
    },
    forecast: [
        { day: 'Today', high: 32, low: 22, condition: 'Sunny', icon: 'fas fa-sun' },
        { day: 'Tomorrow', high: 30, low: 20, condition: 'Partly Cloudy', icon: 'fas fa-cloud-sun' },
        { day: 'Day 3', high: 28, low: 18, condition: 'Rainy', icon: 'fas fa-cloud-rain' },
        { day: 'Day 4', high: 25, low: 16, condition: 'Thunderstorm', icon: 'fas fa-bolt' },
        { day: 'Day 5', high: 27, low: 19, condition: 'Cloudy', icon: 'fas fa-cloud' },
        { day: 'Day 6', high: 29, low: 21, condition: 'Sunny', icon: 'fas fa-sun' },
        { day: 'Day 7', high: 31, low: 23, condition: 'Partly Cloudy', icon: 'fas fa-cloud-sun' }
    ]
};

const cropRecommendations = {
    kharif: {
        clay: {
            seeds: [
                { name: 'Rice (Basmati)', price: '₹45-50 per kg', description: 'Best for clay soil during monsoon' },
                { name: 'Sugarcane', price: '₹35-40 per kg', description: 'High yield in clay soil' },
                { name: 'Cotton', price: '₹25-30 per kg', description: 'Suitable for heavy clay soil' }
            ],
            fertilizers: [
                { name: 'Urea', dosage: '2 bags per acre', description: 'Primary nitrogen source' },
                { name: 'DAP', dosage: '1 bag per acre', description: 'Phosphorus for root development' }
            ]
        },
        sandy: {
            seeds: [
                { name: 'Millet', price: '₹30-35 per kg', description: 'Drought resistant, ideal for sandy soil' },
                { name: 'Groundnut', price: '₹40-45 per kg', description: 'Good for sandy loam soil' },
                { name: 'Sesame', price: '₹80-90 per kg', description: 'Suitable for light sandy soil' }
            ],
            fertilizers: [
                { name: 'Compost', dosage: '10 quintals per acre', description: 'Improves soil structure' },
                { name: 'Potash', dosage: '50 kg per acre', description: 'Enhances disease resistance' }
            ]
        },
        loamy: {
            seeds: [
                { name: 'Maize', price: '₹20-25 per kg', description: 'High yield in loamy soil' },
                { name: 'Soybean', price: '₹60-70 per kg', description: 'Nitrogen fixing crop' },
                { name: 'Sunflower', price: '₹45-50 per kg', description: 'Oil seed crop for loamy soil' }
            ],
            fertilizers: [
                { name: 'NPK 12-32-16', dosage: '2 bags per acre', description: 'Balanced nutrition' },
                { name: 'Zinc Sulphate', dosage: '25 kg per acre', description: 'Micronutrient supplement' }
            ]
        }
    },
    rabi: {
        clay: {
            seeds: [
                { name: 'Wheat', price: '₹22-28 per kg', description: 'Winter crop, high yield in clay' },
                { name: 'Chickpea', price: '₹50-60 per kg', description: 'Protein-rich legume' },
                { name: 'Mustard', price: '₹35-40 per kg', description: 'Oil seed crop for winter' }
            ],
            fertilizers: [
                { name: 'DAP', dosage: '1.5 bags per acre', description: 'Phosphorus for grain development' },
                { name: 'Potash', dosage: '50 kg per acre', description: 'Improves grain quality' }
            ]
        },
        sandy: {
            seeds: [
                { name: 'Barley', price: '₹18-22 per kg', description: 'Drought tolerant winter crop' },
                { name: 'Peas', price: '₹40-50 per kg', description: 'Nitrogen fixing winter crop' },
                { name: 'Lentil', price: '₹80-100 per kg', description: 'High protein legume' }
            ],
            fertilizers: [
                { name: 'Organic Compost', dosage: '8 quintals per acre', description: 'Improves soil fertility' },
                { name: 'Sulphur', dosage: '20 kg per acre', description: 'Essential for protein synthesis' }
            ]
        },
        loamy: {
            seeds: [
                { name: 'Wheat (HD-2967)', price: '₹25-30 per kg', description: 'High yielding variety' },
                { name: 'Potato', price: '₹15-20 per kg', description: 'High value crop' },
                { name: 'Onion', price: '₹200-250 per kg', description: 'Cash crop for loamy soil' }
            ],
            fertilizers: [
                { name: 'NPK 20-20-0', dosage: '2 bags per acre', description: 'Balanced N-P nutrition' },
                { name: 'Boron', dosage: '5 kg per acre', description: 'Micronutrient for quality' }
            ]
        }
    }
};

const marketPrices = {
    delhi: [
        { crop: 'Rice', price: '₹2,150', change: '+2.5%', trend: 'up' },
        { crop: 'Wheat', price: '₹2,015', change: '-1.2%', trend: 'down' },
        { crop: 'Sugarcane', price: '₹325', change: '+0.8%', trend: 'up' },
        { crop: 'Cotton', price: '₹5,800', change: '+3.2%', trend: 'up' },
        { crop: 'Maize', price: '₹1,750', change: '-0.5%', trend: 'down' }
    ],
    mumbai: [
        { crop: 'Rice', price: '₹2,200', change: '+1.8%', trend: 'up' },
        { crop: 'Wheat', price: '₹2,100', change: '-0.8%', trend: 'down' },
        { crop: 'Sugarcane', price: '₹340', change: '+1.2%', trend: 'up' },
        { crop: 'Cotton', price: '₹6,200', change: '+2.8%', trend: 'up' },
        { crop: 'Maize', price: '₹1,820', change: '+0.3%', trend: 'up' }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    updateWeatherData();
    updateSeason();
    setupEventListeners();
});

function initializeApp() {
    // Set default section
    showSection('dashboard');
    
    // Initialize weather data
    updateQuickStats();
    
    // Load default recommendations
    loadDefaultRecommendations();
    
    // Load market prices
    updateMarketPrices();
}

function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            showSection(section);
        });
    });
    
    // Language selector
    document.getElementById('language').addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
    });
    
    // Market location selector
    document.getElementById('market-location').addEventListener('change', function() {
        updateMarketPrices();
    });
    
    // Weather location input
    document.getElementById('location-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            getWeather();
        }
    });
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelector(`[href="#${sectionId}"]`).classList.add('active');
}

function updateWeatherData() {
    const data = mockWeatherData.current;
    
    document.getElementById('weather-temp').textContent = `${data.temperature}°C`;
    document.getElementById('weather-condition').textContent = data.condition;
    document.getElementById('visibility').textContent = `${data.visibility}km`;
    document.getElementById('wind').textContent = `${data.windSpeed} km/h`;
    
    // Update forecast
    const forecastContainer = document.getElementById('forecast-list');
    forecastContainer.innerHTML = '';
    
    mockWeatherData.forecast.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <div>
                <strong>${day.day}</strong>
                <div style="color: #6b7280; font-size: 0.9rem;">${day.condition}</div>
            </div>
            <div>
                <i class="${day.icon}" style="color: #f59e0b; margin-right: 0.5rem;"></i>
                <span>${day.high}°/${day.low}°</span>
            </div>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

function updateQuickStats() {
    const data = mockWeatherData.current;
    document.getElementById('current-temp').textContent = `${data.temperature}°C`;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
}

function updateSeason() {
    const month = new Date().getMonth();
    let season = '';
    
    if (month >= 5 && month <= 9) {
        season = 'Kharif';
    } else if (month >= 10 && month <= 3) {
        season = 'Rabi';
    } else {
        season = 'Summer';
    }
    
    document.getElementById('season').textContent = season;
}

function getWeather() {
    const location = document.getElementById('location-input').value;
    if (location.trim()) {
        currentLocation = location;
        // In a real app, this would fetch data from a weather API
        updateWeatherData();
        
        // Show success message
        showNotification('Weather updated for ' + location, 'success');
    }
}

function getRecommendations() {
    const soilType = document.getElementById('soil-type').value;
    const season = document.getElementById('season-filter').value;
    
    if (!soilType || !season) {
        showNotification('Please select both soil type and season', 'warning');
        return;
    }
    
    const recommendations = cropRecommendations[season]?.[soilType];
    
    if (recommendations) {
        updateRecommendationDisplay(recommendations);
        showNotification('Recommendations updated successfully', 'success');
    } else {
        showNotification('No recommendations found for this combination', 'warning');
    }
}

function updateRecommendationDisplay(recommendations) {
    // Update seed recommendations
    const seedContainer = document.getElementById('seed-recommendations');
    seedContainer.innerHTML = '';
    
    recommendations.seeds.forEach(seed => {
        const seedItem = document.createElement('div');
        seedItem.className = 'recommendation-item';
        seedItem.innerHTML = `
            <i class="fas fa-seedling"></i>
            <div>
                <h4>${seed.name}</h4>
                <p>${seed.description}</p>
                <span class="price">${seed.price}</span>
            </div>
        `;
        seedContainer.appendChild(seedItem);
    });
    
    // Update fertilizer recommendations
    const fertilizerContainer = document.getElementById('fertilizer-recommendations');
    fertilizerContainer.innerHTML = '';
    
    recommendations.fertilizers.forEach(fertilizer => {
        const fertilizerItem = document.createElement('div');
        fertilizerItem.className = 'recommendation-item';
        fertilizerItem.innerHTML = `
            <i class="fas fa-vial"></i>
            <div>
                <h4>${fertilizer.name}</h4>
                <p>${fertilizer.description}</p>
                <span class="dosage">${fertilizer.dosage}</span>
            </div>
        `;
        fertilizerContainer.appendChild(fertilizerItem);
    });
}

function loadDefaultRecommendations() {
    // Load default recommendations for current season and common soil type
    const currentMonth = new Date().getMonth();
    const currentSeason = currentMonth >= 5 && currentMonth <= 9 ? 'kharif' : 'rabi';
    const defaultSoil = 'loamy';
    
    const defaultRecommendations = cropRecommendations[currentSeason]?.[defaultSoil];
    if (defaultRecommendations) {
        updateRecommendationDisplay(defaultRecommendations);
    }
}

function updateMarketPrices() {
    const location = document.getElementById('market-location').value;
    const prices = marketPrices[location] || marketPrices.delhi;
    
    const priceContainer = document.getElementById('price-list');
    priceContainer.innerHTML = '';
    
    prices.forEach(item => {
        const priceItem = document.createElement('div');
        priceItem.className = 'price-item';
        priceItem.innerHTML = `
            <span class="crop">${item.crop}</span>
            <span class="price">${item.price}/quintal</span>
            <span class="change ${item.trend === 'up' ? 'positive' : 'negative'}">${item.change}</span>
        `;
        priceContainer.appendChild(priceItem);
    });
}

function updateLanguage() {
    const lang = translations[currentLanguage];
    if (lang) {
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (lang[href]) {
                link.textContent = lang[href];
            }
        });
        
        // Update welcome message
        const welcomeTitle = document.querySelector('.welcome-card h2');
        if (welcomeTitle && lang.welcome) {
            welcomeTitle.textContent = lang.welcome;
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Simulate real-time updates
setInterval(() => {
    updateWeatherData();
    updateMarketPrices();
}, 300000); // Update every 5 minutes

// Touch/swipe support for mobile
let startX, startY, distX, distY;

document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    startX = touch.pageX;
    startY = touch.pageY;
});

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
});

document.addEventListener('touchend', function(e) {
    const touch = e.changedTouches[0];
    distX = touch.pageX - startX;
    distY = touch.pageY - startY;
    
    if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > 50) {
        if (distX > 0) {
            // Swipe right - previous section
            navigateSection('prev');
        } else {
            // Swipe left - next section
            navigateSection('next');
        }
    }
});

function navigateSection(direction) {
    const sections = ['dashboard', 'weather', 'recommendations', 'policies', 'market'];
    const currentSection = document.querySelector('.section.active').id;
    const currentIndex = sections.indexOf(currentSection);
    
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % sections.length;
    } else {
        newIndex = (currentIndex - 1 + sections.length) % sections.length;
    }
    
    showSection(sections[newIndex]);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        navigateSection('prev');
    } else if (e.key === 'ArrowRight') {
        navigateSection('next');
    }
});