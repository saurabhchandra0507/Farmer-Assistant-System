#!/usr/bin/env python3
"""
FarmAssist API - Backend services for the farmer assistant system
This module provides various API endpoints for weather, recommendations, and market data
"""

import json
import datetime
import random
from typing import Dict, List, Any

class WeatherService:
    """Service for weather-related data and forecasts"""
    
    def __init__(self):
        self.weather_conditions = [
            "Sunny", "Partly Cloudy", "Cloudy", "Rainy", "Thunderstorm", "Foggy"
        ]
        self.icons = {
            "Sunny": "fas fa-sun",
            "Partly Cloudy": "fas fa-cloud-sun",
            "Cloudy": "fas fa-cloud",
            "Rainy": "fas fa-cloud-rain",
            "Thunderstorm": "fas fa-bolt",
            "Foggy": "fas fa-smog"
        }
    
    def get_current_weather(self, location: str) -> Dict[str, Any]:
        """Get current weather for a location"""
        return {
            "location": location,
            "temperature": random.randint(18, 35),
            "condition": random.choice(self.weather_conditions),
            "humidity": random.randint(40, 80),
            "wind_speed": random.randint(5, 25),
            "visibility": random.randint(5, 15),
            "timestamp": datetime.datetime.now().isoformat()
        }
    
    def get_forecast(self, location: str, days: int = 7) -> List[Dict[str, Any]]:
        """Get weather forecast for specified days"""
        forecast = []
        for i in range(days):
            date = datetime.datetime.now() + datetime.timedelta(days=i)
            condition = random.choice(self.weather_conditions)
            forecast.append({
                "date": date.strftime("%Y-%m-%d"),
                "day": "Today" if i == 0 else f"Day {i+1}",
                "high": random.randint(25, 35),
                "low": random.randint(15, 25),
                "condition": condition,
                "icon": self.icons[condition],
                "humidity": random.randint(40, 80),
                "wind_speed": random.randint(5, 25)
            })
        return forecast
    
    def get_weather_alerts(self, location: str) -> List[Dict[str, Any]]:
        """Get weather alerts and warnings"""
        alerts = []
        if random.random() < 0.3:  # 30% chance of alert
            alerts.append({
                "type": "warning",
                "message": "Heavy rain expected in next 24 hours",
                "severity": "moderate",
                "timestamp": datetime.datetime.now().isoformat()
            })
        
        if random.random() < 0.2:  # 20% chance of alert
            alerts.append({
                "type": "advisory",
                "message": "High winds expected, secure loose items",
                "severity": "low",
                "timestamp": datetime.datetime.now().isoformat()
            })
        
        return alerts

class CropRecommendationService:
    """Service for crop and soil recommendations"""
    
    def __init__(self):
        self.crop_database = {
            "kharif": {
                "clay": {
                    "seeds": [
                        {
                            "name": "Rice (Basmati)",
                            "variety": "Pusa Basmati 1121",
                            "price_range": "₹45-50 per kg",
                            "description": "High-yielding aromatic rice variety suitable for clay soil",
                            "planting_time": "June-July",
                            "harvest_time": "November-December",
                            "water_requirement": "High",
                            "expected_yield": "45-50 quintals per hectare"
                        },
                        {
                            "name": "Sugarcane",
                            "variety": "Co-238",
                            "price_range": "₹35-40 per kg",
                            "description": "High sugar content variety for clay soil",
                            "planting_time": "February-March",
                            "harvest_time": "December-January",
                            "water_requirement": "Very High",
                            "expected_yield": "800-900 quintals per hectare"
                        }
                    ],
                    "fertilizers": [
                        {
                            "name": "Urea",
                            "composition": "46% Nitrogen",
                            "dosage": "130 kg per hectare",
                            "application_time": "Split application: 50% at planting, 25% at tillering, 25% at panicle initiation",
                            "benefits": ["Promotes vegetative growth", "Increases protein content", "Improves grain quality"]
                        },
                        {
                            "name": "DAP (Diammonium Phosphate)",
                            "composition": "18% Nitrogen, 46% Phosphorus",
                            "dosage": "100 kg per hectare",
                            "application_time": "Apply as basal dose before transplanting",
                            "benefits": ["Enhances root development", "Improves early plant growth", "Increases disease resistance"]
                        }
                    ]
                },
                "sandy": {
                    "seeds": [
                        {
                            "name": "Pearl Millet",
                            "variety": "HHB-67",
                            "price_range": "₹30-35 per kg",
                            "description": "Drought-resistant crop ideal for sandy soil",
                            "planting_time": "June-July",
                            "harvest_time": "September-October",
                            "water_requirement": "Low",
                            "expected_yield": "25-30 quintals per hectare"
                        },
                        {
                            "name": "Groundnut",
                            "variety": "TAG-24",
                            "price_range": "₹40-45 per kg",
                            "description": "High oil content variety for sandy loam soil",
                            "planting_time": "June-July",
                            "harvest_time": "October-November",
                            "water_requirement": "Moderate",
                            "expected_yield": "20-25 quintals per hectare"
                        }
                    ],
                    "fertilizers": [
                        {
                            "name": "Organic Compost",
                            "composition": "Organic matter with NPK",
                            "dosage": "5-10 tons per hectare",
                            "application_time": "Apply 2-3 weeks before planting",
                            "benefits": ["Improves soil structure", "Enhances water retention", "Provides slow-release nutrients"]
                        }
                    ]
                }
            },
            "rabi": {
                "clay": {
                    "seeds": [
                        {
                            "name": "Wheat",
                            "variety": "HD-2967",
                            "price_range": "₹22-28 per kg",
                            "description": "High-yielding wheat variety for clay soil",
                            "planting_time": "November-December",
                            "harvest_time": "March-April",
                            "water_requirement": "Moderate",
                            "expected_yield": "40-45 quintals per hectare"
                        },
                        {
                            "name": "Chickpea",
                            "variety": "Pusa-256",
                            "price_range": "₹50-60 per kg",
                            "description": "Disease-resistant chickpea variety",
                            "planting_time": "October-November",
                            "harvest_time": "March-April",
                            "water_requirement": "Low",
                            "expected_yield": "15-20 quintals per hectare"
                        }
                    ],
                    "fertilizers": [
                        {
                            "name": "DAP",
                            "composition": "18% Nitrogen, 46% Phosphorus",
                            "dosage": "100 kg per hectare",
                            "application_time": "Apply as basal dose at sowing",
                            "benefits": ["Promotes root development", "Improves grain formation", "Enhances disease resistance"]
                        }
                    ]
                }
            }
        }
    
    def get_crop_recommendations(self, soil_type: str, season: str, location: str = None) -> Dict[str, Any]:
        """Get crop recommendations based on soil type and season"""
        recommendations = self.crop_database.get(season, {}).get(soil_type, {})
        
        if not recommendations:
            return {
                "error": "No recommendations found for this combination",
                "soil_type": soil_type,
                "season": season
            }
        
        return {
            "soil_type": soil_type,
            "season": season,
            "location": location,
            "recommendations": recommendations,
            "timestamp": datetime.datetime.now().isoformat()
        }
    
    def get_soil_health_tips(self, soil_type: str) -> List[Dict[str, Any]]:
        """Get soil health improvement tips"""
        tips = {
            "clay": [
                {
                    "tip": "Add organic matter to improve drainage",
                    "description": "Mix compost or well-rotted manure to break up clay particles",
                    "frequency": "Apply annually before planting season"
                },
                {
                    "tip": "Avoid working wet clay soil",
                    "description": "Wait for proper moisture conditions to prevent compaction",
                    "frequency": "Monitor soil moisture before any cultivation"
                }
            ],
            "sandy": [
                {
                    "tip": "Increase organic matter for water retention",
                    "description": "Add compost, mulch, or green manure to improve soil structure",
                    "frequency": "Apply every 6 months"
                },
                {
                    "tip": "Use frequent, light irrigation",
                    "description": "Sandy soil drains quickly, so water more frequently with less volume",
                    "frequency": "Daily during crop growing season"
                }
            ],
            "loamy": [
                {
                    "tip": "Maintain soil organic matter",
                    "description": "Continue adding compost to maintain soil health",
                    "frequency": "Apply annually"
                },
                {
                    "tip": "Practice crop rotation",
                    "description": "Rotate crops to prevent soil nutrient depletion",
                    "frequency": "Follow 3-4 year rotation cycle"
                }
            ]
        }
        
        return tips.get(soil_type, [])

class MarketService:
    """Service for market prices and trends"""
    
    def __init__(self):
        self.base_prices = {
            "rice": 2000,
            "wheat": 1900,
            "sugarcane": 300,
            "cotton": 5500,
            "maize": 1700,
            "soybean": 3500,
            "groundnut": 4200,
            "chickpea": 4800,
            "mustard": 4100
        }
        
        self.market_locations = {
            "delhi": {"factor": 1.0, "name": "Delhi Mandi"},
            "mumbai": {"factor": 1.1, "name": "Mumbai APMC"},
            "bangalore": {"factor": 1.05, "name": "Bangalore Mandi"},
            "kolkata": {"factor": 0.95, "name": "Kolkata Market"},
            "hyderabad": {"factor": 1.02, "name": "Hyderabad Mandi"},
            "pune": {"factor": 1.08, "name": "Pune Market"}
        }
    
    def get_current_prices(self, location: str = "delhi") -> List[Dict[str, Any]]:
        """Get current market prices for crops"""
        location_data = self.market_locations.get(location, self.market_locations["delhi"])
        factor = location_data["factor"]
        
        prices = []
        for crop, base_price in self.base_prices.items():
            current_price = int(base_price * factor * (1 + random.uniform(-0.1, 0.1)))
            change_percent = random.uniform(-5, 5)
            
            prices.append({
                "crop": crop.title(),
                "price": f"₹{current_price:,}",
                "price_numeric": current_price,
                "change_percent": round(change_percent, 1),
                "change_display": f"{'+' if change_percent > 0 else ''}{change_percent:.1f}%",
                "trend": "up" if change_percent > 0 else "down",
                "unit": "per quintal",
                "market": location_data["name"]
            })
        
        return prices
    
    def get_price_trends(self, crop: str, days: int = 30) -> List[Dict[str, Any]]:
        """Get price trends for a specific crop"""
        base_price = self.base_prices.get(crop.lower(), 2000)
        trends = []
        
        for i in range(days):
            date = datetime.datetime.now() - datetime.timedelta(days=days-i-1)
            price = base_price * (1 + random.uniform(-0.2, 0.2))
            
            trends.append({
                "date": date.strftime("%Y-%m-%d"),
                "price": round(price, 2),
                "volume": random.randint(100, 1000)
            })
        
        return trends
    
    def get_market_advisory(self, location: str = "delhi") -> List[Dict[str, Any]]:
        """Get market advisory and recommendations"""
        advisories = [
            {
                "type": "price_alert",
                "message": "Rice prices expected to rise by 5-8% next week due to reduced supply",
                "severity": "medium",
                "recommendation": "Good time to sell rice stocks"
            },
            {
                "type": "demand_update",
                "message": "High demand for wheat in Delhi market",
                "severity": "high",
                "recommendation": "Consider transporting wheat to Delhi for better prices"
            },
            {
                "type": "seasonal_info",
                "message": "Rabi crop harvest season approaching",
                "severity": "low",
                "recommendation": "Prepare storage facilities for harvested crops"
            }
        ]
        
        return random.sample(advisories, k=random.randint(1, 3))

class GovernmentSchemeService:
    """Service for government schemes and policies"""
    
    def __init__(self):
        self.schemes = [
            {
                "name": "PM-KISAN",
                "full_name": "Pradhan Mantri Kisan Samman Nidhi",
                "description": "Direct income support scheme providing ₹6,000 per year to farmer families",
                "eligibility": "All landholding farmer families",
                "benefits": "₹2,000 per installment, 3 installments per year",
                "status": "Active",
                "deadline": "Ongoing enrollment",
                "documents_required": ["Aadhaar Card", "Bank Account Details", "Land Records"],
                "application_process": "Online through PM-KISAN portal or through Common Service Centers"
            },
            {
                "name": "Soil Health Card",
                "full_name": "Soil Health Card Scheme",
                "description": "Free soil testing and nutrient management recommendations",
                "eligibility": "All farmers",
                "benefits": "Free soil testing, customized fertilizer recommendations",
                "status": "Active",
                "deadline": "Ongoing",
                "documents_required": ["Farmer ID", "Land Records"],
                "application_process": "Apply through local agriculture department"
            },
            {
                "name": "Kisan Credit Card",
                "full_name": "Kisan Credit Card Scheme",
                "description": "Easy access to credit for agricultural and allied activities",
                "eligibility": "All farmers with land records",
                "benefits": "Credit up to ₹3 lakh at 4% interest rate",
                "status": "Active",
                "deadline": "Ongoing",
                "documents_required": ["Land Records", "Aadhaar Card", "Bank Account"],
                "application_process": "Apply through banks or Primary Agricultural Credit Societies"
            },
            {
                "name": "PM Fasal Bima Yojana",
                "full_name": "Pradhan Mantri Fasal Bima Yojana",
                "description": "Comprehensive crop insurance scheme",
                "eligibility": "All farmers growing notified crops",
                "benefits": "Insurance coverage for crop losses due to natural calamities",
                "status": "Active",
                "deadline": "Varies by crop and season",
                "documents_required": ["Land Records", "Sowing Certificate", "Bank Account"],
                "application_process": "Through banks, CSCs, or insurance companies"
            }
        ]
    
    def get_all_schemes(self) -> List[Dict[str, Any]]:
        """Get all available government schemes"""
        return self.schemes
    
    def get_scheme_details(self, scheme_name: str) -> Dict[str, Any]:
        """Get detailed information about a specific scheme"""
        for scheme in self.schemes:
            if scheme["name"].lower() == scheme_name.lower():
                return scheme
        return {"error": "Scheme not found"}
    
    def get_news_updates(self) -> List[Dict[str, Any]]:
        """Get latest agricultural news and policy updates"""
        news = [
            {
                "title": "New MSP rates announced for Rabi crops",
                "description": "Government increases minimum support prices for wheat and barley",
                "date": datetime.datetime.now().strftime("%Y-%m-%d"),
                "category": "MSP",
                "importance": "high"
            },
            {
                "title": "Subsidy on organic fertilizers increased",
                "description": "50% subsidy now available on organic farming inputs",
                "date": (datetime.datetime.now() - datetime.timedelta(days=1)).strftime("%Y-%m-%d"),
                "category": "Subsidy",
                "importance": "medium"
            },
            {
                "title": "Digital agriculture platform launched",
                "description": "New online platform for crop planning and market linkage",
                "date": (datetime.datetime.now() - datetime.timedelta(days=2)).strftime("%Y-%m-%d"),
                "category": "Technology",
                "importance": "medium"
            }
        ]
        return news

# API endpoint functions
def get_weather_data(location: str) -> Dict[str, Any]:
    """API endpoint for weather data"""
    weather_service = WeatherService()
    return {
        "current": weather_service.get_current_weather(location),
        "forecast": weather_service.get_forecast(location),
        "alerts": weather_service.get_weather_alerts(location)
    }

def get_crop_recommendations(soil_type: str, season: str, location: str = None) -> Dict[str, Any]:
    """API endpoint for crop recommendations"""
    recommendation_service = CropRecommendationService()
    return recommendation_service.get_crop_recommendations(soil_type, season, location)

def get_market_data(location: str = "delhi") -> Dict[str, Any]:
    """API endpoint for market data"""
    market_service = MarketService()
    return {
        "prices": market_service.get_current_prices(location),
        "advisory": market_service.get_market_advisory(location)
    }

def get_government_schemes() -> Dict[str, Any]:
    """API endpoint for government schemes"""
    scheme_service = GovernmentSchemeService()
    return {
        "schemes": scheme_service.get_all_schemes(),
        "news": scheme_service.get_news_updates()
    }

# Example usage and testing
if __name__ == "__main__":
    print("=== FarmAssist API Testing ===")
    
    # Test weather service
    print("\n1. Weather Data:")
    weather_data = get_weather_data("Delhi")
    print(json.dumps(weather_data, indent=2))
    
    # Test crop recommendations
    print("\n2. Crop Recommendations:")
    crop_data = get_crop_recommendations("clay", "kharif", "Delhi")
    print(json.dumps(crop_data, indent=2))
    
    # Test market data
    print("\n3. Market Data:")
    market_data = get_market_data("delhi")
    print(json.dumps(market_data, indent=2))
    
    # Test government schemes
    print("\n4. Government Schemes:")
    schemes_data = get_government_schemes()
    print(json.dumps(schemes_data, indent=2))