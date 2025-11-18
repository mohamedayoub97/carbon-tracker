# 🌱 Carbon Footprint Tracker

A comprehensive, multilingual web application for calculating and tracking personal carbon emissions across multiple lifestyle categories.

## 📋 Overview

The Carbon Footprint Tracker helps users understand their environmental impact by calculating CO₂ emissions from daily activities, travel, energy consumption, waste production, and purchasing habits. The application provides real-time feedback, visualizations, and actionable insights to reduce carbon footprint.

## ✨ Features

### 🌍 Multilingual Support
- **English** 🇬🇧
- **Arabic** 🇸🇦 (العربية)
- **French** 🇫🇷 (Français)
- **German** 🇩🇪 (Deutsch)

### 📊 Comprehensive Tracking Categories

1. **👤 Personal Information**
   - Height, weight, and gender
   - Dietary preferences (Omnivore, Vegetarian, Vegan)
   - Social activity levels

2. **🚗 Travel & Transportation**
   - Multiple transport types (Car, Motorcycle, Public Transport, Bicycle, Walk)
   - Monthly distance tracking (0-5000 km)
   - Flight frequency monitoring

3. **♻️ Waste Management**
   - Weekly waste production tracking
   - Recycling habits assessment
   - Composting status

4. **⚡ Energy Consumption**
   - Monthly electricity usage
   - Renewable energy source option
   - Household size consideration
   - Heating source type (Natural Gas, Oil, Electric, Heat Pump)

5. **🌿 Consumption Patterns**
   - Clothing purchases tracking
   - Electronics buying habits
   - Food waste monitoring

### 📈 Results & Visualization

- Real-time emissions preview
- Monthly CO₂e calculations in kg
- Interactive pie chart breakdown by category
- Tree offset calculator (trees needed to neutralize emissions)
- Comparative analysis with global averages
- Educational "Did You Know?" facts

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Clone or download the repository:
```bash
git clone https://github.com/mohamedayoub97/carbon-tracker.git
```

2. Navigate to the project directory:
```bash
cd carbon-tracker
```

3. Open `index.html` in your web browser

### File Structure

```
carbon-footprint-tracker/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── app.js             # Application logic and calculations
└── README.md          # This file
```

## 💻 Usage

1. **Select Language**: Choose your preferred language from the initial screen
2. **Enter Personal Data**: Fill in your information across the five tabs
3. **Monitor Live Emissions**: Watch real-time calculations in the preview panel
4. **Calculate Footprint**: Click "Calculate Footprint" to see detailed results
5. **Review Results**: Analyze your emissions breakdown with interactive charts
6. **Learn & Act**: Access educational facts and offset recommendations

## 🧮 Calculation Methodology

The tracker uses industry-standard emission factors:

- **Diet**: 
  - Omnivore: 2500 kg CO₂e/year
  - Vegetarian: 1700 kg CO₂e/year
  - Vegan: 1500 kg CO₂e/year

- **Transportation**:
  - Car: 0.21 kg CO₂e/km
  - Motorcycle: 0.103 kg CO₂e/km
  - Public Transport: 0.089 kg CO₂e/km
  - Bicycle/Walk: 0 kg CO₂e/km

- **Flights**: 90 kg CO₂e per short-haul flight

- **Energy**: 0.233 kg CO₂e/kWh (UK grid average)

- **Waste**: 0.5 kg CO₂e/kg waste (with recycling/composting adjustments)

## 🎨 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with animations and responsive design
- **JavaScript (ES6+)**: Application logic and calculations
- **Chart.js**: Data visualization library

## 🌟 Key Features

- ✅ Zero dependencies (except Chart.js for visualization)
- ✅ Fully responsive design
- ✅ Accessible tooltips with emission factor explanations
- ✅ Real-time calculation updates
- ✅ Local storage for language preference
- ✅ Interactive sliders with live value display
- ✅ Educational modal system

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mohamed Ayoub Essalami**

© 2025 Mohamed Ayoub Essalami. All rights reserved.

## 🙏 Acknowledgments

- Emission factors based on research from IPCC, EPA, and Carbon Trust
- Chart.js library for data visualization
- Carbon offset calculations based on forestry research

## 📞 Support

For questions, suggestions, or issues, please open an issue in the GitHub repository.

## 🔮 Future Enhancements

- [ ] Data export functionality (PDF/CSV)
- [ ] Historical tracking and trends
- [ ] Personalized reduction recommendations
- [ ] Social sharing features
- [ ] Mobile app version
- [ ] Integration with carbon offset platforms
- [ ] Additional language support

---

**Start tracking your carbon footprint today and make a difference! 🌍💚**
