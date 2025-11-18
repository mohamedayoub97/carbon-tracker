// Translation data
const translations = {
  en: {
    appTitle: '🌱 Carbon Footprint Tracker',
    changeLangBtn: 'Change Language',
    tabPersonal: '👤 Personal',
    tabTravel: '🚗 Travel',
    tabWaste: '♻️ Waste',
    tabEnergy: '⚡ Energy',
    tabConsumption: '🌿 Consumption',
    labelHeight: 'Height (cm)',
    labelWeight: 'Weight (kg)',
    labelGender: 'Gender',
    labelDiet: 'Diet',
    labelSocial: 'Social Activity',
    genderMale: 'Male',
    genderFemale: 'Female',
    genderOther: 'Other',
    dietOmnivore: 'Omnivore',
    dietVegetarian: 'Vegetarian',
    dietVegan: 'Vegan',
    socialNever: 'Never',
    socialSometimes: 'Sometimes',
    socialOften: 'Often',
    labelTransport: 'Transportation Type',
    transportCar: 'Car',
    transportMotorcycle: 'Motorcycle',
    transportPublic: 'Public Transport',
    transportBicycle: 'Bicycle',
    transportWalk: 'Walk',
    labelDistance: 'Monthly Distance Traveled (km):',
    labelFlights: 'Flight Frequency Last Month',
    flightsNever: 'Never',
    flightsOnce: 'Once',
    flightsTwice: 'Twice',
    flightsOften: 'Often (3+)',
    labelWasteAmount: 'Waste Produced per Week (kg):',
    labelRecycling: 'Recycling Habits',
    recyclingNone: 'None',
    recyclingPartial: 'Partial',
    recyclingAlways: 'Always',
    labelComposting: 'Composting',
    labelElectricity: 'Monthly Electricity Usage (kWh)',
    labelRenewable: 'Renewable Energy Source',
    labelHousehold: 'Number of People in Household',
    labelHeating: 'Heating Source',
    heatingGas: 'Natural Gas',
    heatingOil: 'Oil',
    heatingElectric: 'Electric',
    heatingHeatPump: 'Heat Pump',
    labelClothes: 'New Clothes Bought Monthly:',
    labelElectronics: 'Electronic Devices Purchased Yearly:',
    labelFoodWaste: 'Food Waste per Week (kg):',
    previewLabel: 'Monthly Emissions:',
    calculateBtn: 'Calculate Footprint',
    resultsTitle: '🌍 How big is your Carbon Footprint?',
    monthlyLabel: 'Monthly Emissions',
    treesMessage: '🌳 You owe nature',
    treesMessageEnd: 'trees monthly',
    offsetBtn: '🌱 Proceed to Offset',
    factBtn: '💡 Did You Know?',
    backBtn: '← Back to Editor',
    modalOkBtn: 'OK',
    offsetMessage: 'Great decision! 🌱\n\nPlanting trees is one of the most effective ways to offset your carbon footprint. Consider supporting reforestation projects or planting trees in your local community.\n\nEach tree absorbs approximately 20 kg of CO₂ per year. Together, we can make a difference!',
    comparisonGood: '✅ Excellent! Your emissions are below the global average of 400 kg/month.',
    comparisonAverage: '⚠️ Your emissions are close to the global average of 400 kg/month.',
    comparisonHigh: '❌ Your emissions are above the global average. Consider making sustainable changes.',
    items: 'items',
    devices: 'devices'
  },
  ar: {
    appTitle: '🌱 متتبع البصمة الكربونية',
    changeLangBtn: 'تغيير اللغة',
    tabPersonal: '👤 شخصي',
    tabTravel: '🚗 السفر',
    tabWaste: '♻️ النفايات',
    tabEnergy: '⚡ الطاقة',
    tabConsumption: '🌿 الاستهلاك',
    labelHeight: 'الطول (سم)',
    labelWeight: 'الوزن (كجم)',
    labelGender: 'الجنس',
    labelDiet: 'النظام الغذائي',
    labelSocial: 'النشاط الاجتماعي',
    genderMale: 'ذكر',
    genderFemale: 'أنثى',
    genderOther: 'آخر',
    dietOmnivore: 'متنوع',
    dietVegetarian: 'نباتي',
    dietVegan: 'نباتي صرف',
    socialNever: 'أبداً',
    socialSometimes: 'أحياناً',
    socialOften: 'غالباً',
    labelTransport: 'نوع النقل',
    transportCar: 'سيارة',
    transportMotorcycle: 'دراجة نارية',
    transportPublic: 'نقل عام',
    transportBicycle: 'دراجة',
    transportWalk: 'مشي',
    labelDistance: 'المسافة الشهرية المقطوعة (كم):',
    labelFlights: 'تكرار الرحلات الجوية الشهر الماضي',
    flightsNever: 'أبداً',
    flightsOnce: 'مرة',
    flightsTwice: 'مرتين',
    flightsOften: 'غالباً (3+)',
    labelWasteAmount: 'النفايات المنتجة أسبوعياً (كجم):',
    labelRecycling: 'عادات إعادة التدوير',
    recyclingNone: 'لا شيء',
    recyclingPartial: 'جزئي',
    recyclingAlways: 'دائماً',
    labelComposting: 'التسميد',
    labelElectricity: 'استهلاك الكهرباء الشهري (كيلوواط ساعة)',
    labelRenewable: 'مصدر طاقة متجددة',
    labelHousehold: 'عدد الأشخاص في الأسرة',
    labelHeating: 'مصدر التدفئة',
    heatingGas: 'غاز طبيعي',
    heatingOil: 'زيت',
    heatingElectric: 'كهربائي',
    heatingHeatPump: 'مضخة حرارية',
    labelClothes: 'الملابس الجديدة المشتراة شهرياً:',
    labelElectronics: 'الأجهزة الإلكترونية المشتراة سنوياً:',
    labelFoodWaste: 'هدر الطعام أسبوعياً (كجم):',
    previewLabel: 'الانبعاثات الشهرية:',
    calculateBtn: 'احسب البصمة',
    resultsTitle: '🌍 ما حجم بصمتك الكربونية؟',
    monthlyLabel: 'الانبعاثات الشهرية',
    treesMessage: '🌳 أنت مدين للطبيعة بـ',
    treesMessageEnd: 'أشجار شهرياً',
    offsetBtn: '🌱 المضي قدماً للتعويض',
    factBtn: '💡 هل تعلم؟',
    backBtn: '← العودة للمحرر',
    modalOkBtn: 'حسناً',
    offsetMessage: 'قرار رائع! 🌱\n\nزراعة الأشجار من أكثر الطرق فعالية لتعويض بصمتك الكربونية. فكر في دعم مشاريع إعادة التشجير أو زراعة الأشجار في مجتمعك المحلي.\n\nكل شجرة تمتص حوالي 20 كجم من ثاني أكسيد الكربون سنوياً. معاً يمكننا إحداث فرق!',
    comparisonGood: '✅ ممتاز! انبعاثاتك أقل من المتوسط العالمي البالغ 400 كجم/شهر.',
    comparisonAverage: '⚠️ انبعاثاتك قريبة من المتوسط العالمي البالغ 400 كجم/شهر.',
    comparisonHigh: '❌ انبعاثاتك أعلى من المتوسط العالمي. فكر في إجراء تغييرات مستدامة.',
    items: 'عناصر',
    devices: 'أجهزة'
  },
  fr: {
    appTitle: '🌱 Suivi de l\'Empreinte Carbone',
    changeLangBtn: 'Changer de Langue',
    tabPersonal: '👤 Personnel',
    tabTravel: '🚗 Voyage',
    tabWaste: '♻️ Déchets',
    tabEnergy: '⚡ Énergie',
    tabConsumption: '🌿 Consommation',
    labelHeight: 'Taille (cm)',
    labelWeight: 'Poids (kg)',
    labelGender: 'Genre',
    labelDiet: 'Régime',
    labelSocial: 'Activité Sociale',
    genderMale: 'Homme',
    genderFemale: 'Femme',
    genderOther: 'Autre',
    dietOmnivore: 'Omnivore',
    dietVegetarian: 'Végétarien',
    dietVegan: 'Végétalien',
    socialNever: 'Jamais',
    socialSometimes: 'Parfois',
    socialOften: 'Souvent',
    labelTransport: 'Type de Transport',
    transportCar: 'Voiture',
    transportMotorcycle: 'Moto',
    transportPublic: 'Transport Public',
    transportBicycle: 'Vélo',
    transportWalk: 'Marche',
    labelDistance: 'Distance Mensuelle Parcourue (km):',
    labelFlights: 'Fréquence des Vols le Mois Dernier',
    flightsNever: 'Jamais',
    flightsOnce: 'Une fois',
    flightsTwice: 'Deux fois',
    flightsOften: 'Souvent (3+)',
    labelWasteAmount: 'Déchets Produits par Semaine (kg):',
    labelRecycling: 'Habitudes de Recyclage',
    recyclingNone: 'Aucun',
    recyclingPartial: 'Partiel',
    recyclingAlways: 'Toujours',
    labelComposting: 'Compostage',
    labelElectricity: 'Consommation Mensuelle d\'Électricité (kWh)',
    labelRenewable: 'Source d\'Énergie Renouvelable',
    labelHousehold: 'Nombre de Personnes dans le Ménage',
    labelHeating: 'Source de Chauffage',
    heatingGas: 'Gaz Naturel',
    heatingOil: 'Fioul',
    heatingElectric: 'Électrique',
    heatingHeatPump: 'Pompe à Chaleur',
    labelClothes: 'Nouveaux Vêtements Achetés Mensuellement:',
    labelElectronics: 'Appareils Électroniques Achetés Annuellement:',
    labelFoodWaste: 'Gaspillage Alimentaire par Semaine (kg):',
    previewLabel: 'Émissions Mensuelles:',
    calculateBtn: 'Calculer l\'Empreinte',
    resultsTitle: '🌍 Quelle est la Taille de Votre Empreinte Carbone?',
    monthlyLabel: 'Émissions Mensuelles',
    treesMessage: '🌳 Vous devez à la nature',
    treesMessageEnd: 'arbres par mois',
    offsetBtn: '🌱 Procéder à la Compensation',
    factBtn: '💡 Le Saviez-vous?',
    backBtn: '← Retour à l\'Éditeur',
    modalOkBtn: 'OK',
    offsetMessage: 'Excellente décision! 🌱\n\nPlanter des arbres est l\'un des moyens les plus efficaces de compenser votre empreinte carbone. Envisagez de soutenir des projets de reforestation ou de planter des arbres dans votre communauté locale.\n\nChaque arbre absorbe environ 20 kg de CO₂ par an. Ensemble, nous pouvons faire la différence!',
    comparisonGood: '✅ Excellent! Vos émissions sont inférieures à la moyenne mondiale de 400 kg/mois.',
    comparisonAverage: '⚠️ Vos émissions sont proches de la moyenne mondiale de 400 kg/mois.',
    comparisonHigh: '❌ Vos émissions sont supérieures à la moyenne mondiale. Envisagez des changements durables.',
    items: 'articles',
    devices: 'appareils'
  },
  de: {
    appTitle: '🌱 CO₂-Fußabdruck-Tracker',
    changeLangBtn: 'Sprache Ändern',
    tabPersonal: '👤 Persönlich',
    tabTravel: '🚗 Reisen',
    tabWaste: '♻️ Abfall',
    tabEnergy: '⚡ Energie',
    tabConsumption: '🌿 Konsum',
    labelHeight: 'Größe (cm)',
    labelWeight: 'Gewicht (kg)',
    labelGender: 'Geschlecht',
    labelDiet: 'Ernährung',
    labelSocial: 'Soziale Aktivität',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    genderOther: 'Andere',
    dietOmnivore: 'Allesfresser',
    dietVegetarian: 'Vegetarisch',
    dietVegan: 'Vegan',
    socialNever: 'Nie',
    socialSometimes: 'Manchmal',
    socialOften: 'Oft',
    labelTransport: 'Transportart',
    transportCar: 'Auto',
    transportMotorcycle: 'Motorrad',
    transportPublic: 'Öffentliche Verkehrsmittel',
    transportBicycle: 'Fahrrad',
    transportWalk: 'Zu Fuß',
    labelDistance: 'Monatlich Zurückgelegte Entfernung (km):',
    labelFlights: 'Flughäufigkeit im Letzten Monat',
    flightsNever: 'Nie',
    flightsOnce: 'Einmal',
    flightsTwice: 'Zweimal',
    flightsOften: 'Oft (3+)',
    labelWasteAmount: 'Produzierter Abfall pro Woche (kg):',
    labelRecycling: 'Recycling-Gewohnheiten',
    recyclingNone: 'Keine',
    recyclingPartial: 'Teilweise',
    recyclingAlways: 'Immer',
    labelComposting: 'Kompostierung',
    labelElectricity: 'Monatlicher Stromverbrauch (kWh)',
    labelRenewable: 'Erneuerbare Energiequelle',
    labelHousehold: 'Anzahl der Personen im Haushalt',
    labelHeating: 'Heizquelle',
    heatingGas: 'Erdgas',
    heatingOil: 'Öl',
    heatingElectric: 'Elektrisch',
    heatingHeatPump: 'Wärmepumpe',
    labelClothes: 'Monatlich Gekaufte Neue Kleidung:',
    labelElectronics: 'Jährlich Gekaufte Elektronische Geräte:',
    labelFoodWaste: 'Lebensmittelverschwendung pro Woche (kg):',
    previewLabel: 'Monatliche Emissionen:',
    calculateBtn: 'Fußabdruck Berechnen',
    resultsTitle: '🌍 Wie Groß ist Ihr CO₂-Fußabdruck?',
    monthlyLabel: 'Monatliche Emissionen',
    treesMessage: '🌳 Sie schulden der Natur',
    treesMessageEnd: 'Bäume monatlich',
    offsetBtn: '🌱 Zur Kompensation',
    factBtn: '💡 Wussten Sie?',
    backBtn: '← Zurück zum Editor',
    modalOkBtn: 'OK',
    offsetMessage: 'Großartige Entscheidung! 🌱\n\nBäume zu pflanzen ist eine der effektivsten Möglichkeiten, Ihren CO₂-Fußabdruck auszugleichen. Erwägen Sie, Aufforstungsprojekte zu unterstützen oder Bäume in Ihrer lokalen Gemeinde zu pflanzen.\n\nJeder Baum absorbiert etwa 20 kg CO₂ pro Jahr. Gemeinsam können wir einen Unterschied machen!',
    comparisonGood: '✅ Ausgezeichnet! Ihre Emissionen liegen unter dem globalen Durchschnitt von 400 kg/Monat.',
    comparisonAverage: '⚠️ Ihre Emissionen liegen nahe am globalen Durchschnitt von 400 kg/Monat.',
    comparisonHigh: '❌ Ihre Emissionen liegen über dem globalen Durchschnitt. Erwägen Sie nachhaltige Änderungen.',
    items: 'Artikel',
    devices: 'Geräte'
  }
};

// Sustainability facts
const sustainabilityFacts = [
  "One tree absorbs about 20 kg of CO₂ per year",
  "Reducing meat by 1 day/week saves ~300 kg CO₂/year",
  "Electric vehicles emit 80% less CO₂ than petrol cars",
  "Renewable energy has 95% lower emissions than coal",
  "Flying emits 5x more CO₂ per km than driving alone",
  "Recycling saves 90% emissions vs landfill",
  "Global average carbon footprint is 4.8 tons/year",
  "UK electricity grid is now 48% renewable",
  "Vegetarians emit 75% less CO₂ than meat-eaters",
  "LED bulbs use 80% less energy than incandescent bulbs",
  "One less flight = 1.6 tons of CO₂ saved",
  "Composting waste eliminates 99% of its carbon emissions",
  "Cycling 10 km instead of driving saves 2.4 kg CO₂",
  "Buying local food reduces transport emissions by 50%",
  "A reusable bag saves 28 kg CO₂ vs plastic bags over its lifetime"
];

// Emission factors (2024-2025 data)
const emissionFactors = {
  electricity: 0.177, // kg CO2e/kWh (UK 2025)
  transport: {
    car: 0.21,
    motorcycle: 0.15,
    public: 0.089,
    bicycle: 0,
    walk: 0
  },
  flights: {
    never: 0,
    once: 2250, // ~1000 km at 0.225 kg/km
    twice: 4500,
    often: 9000
  },
  diet: {
    omnivore: 200, // Monthly estimate
    vegetarian: 100,
    vegan: 50
  },
  waste: {
    landfill: 0.692,
    recycling: 0.200,
    composting: 0.005
  },
  heating: {
    gas: 2.04,
    oil: 3.15,
    electric: 0.177,
    heatpump: 0.089
  },
  clothes: 30, // kg CO2e per item
  electronics: 250, // kg CO2e per device per year
  foodWaste: 8 // kg CO2e per kg wasted
};

// State
let currentLanguage = 'en';
let currentTab = 'personal';
let chartInstance = null;

// Language selection
function selectLanguage(lang) {
  currentLanguage = lang;
  updateLanguage();
  showScreen('mainScreen');
  
  // Set RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
}

function updateLanguage() {
  const t = translations[currentLanguage];
  
  // Update all text elements
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('changeLangBtn').textContent = t.changeLangBtn;
  document.getElementById('changeLangBtn2').textContent = t.changeLangBtn;
  
  // Tabs
  document.getElementById('tabPersonal').innerHTML = t.tabPersonal;
  document.getElementById('tabTravel').innerHTML = t.tabTravel;
  document.getElementById('tabWaste').innerHTML = t.tabWaste;
  document.getElementById('tabEnergy').innerHTML = t.tabEnergy;
  document.getElementById('tabConsumption').innerHTML = t.tabConsumption;
  
  // Personal tab
  document.getElementById('labelHeight').childNodes[0].textContent = t.labelHeight;
  document.getElementById('labelWeight').childNodes[0].textContent = t.labelWeight;
  document.getElementById('labelGender').textContent = t.labelGender;
  document.getElementById('labelDiet').childNodes[0].textContent = t.labelDiet;
  document.getElementById('labelSocial').textContent = t.labelSocial;
  
  // Update select options
  updateSelectOptions('gender', ['male', 'female', 'other'], [t.genderMale, t.genderFemale, t.genderOther]);
  updateSelectOptions('diet', ['omnivore', 'vegetarian', 'vegan'], [t.dietOmnivore, t.dietVegetarian, t.dietVegan]);
  updateSelectOptions('social', ['never', 'sometimes', 'often'], [t.socialNever, t.socialSometimes, t.socialOften]);
  
  // Travel tab
  document.getElementById('labelTransport').childNodes[0].textContent = t.labelTransport;
  updateSelectOptions('transport', ['car', 'motorcycle', 'public', 'bicycle', 'walk'], 
    [t.transportCar, t.transportMotorcycle, t.transportPublic, t.transportBicycle, t.transportWalk]);
  document.getElementById('labelDistance').childNodes[0].textContent = t.labelDistance + ' ';
  document.getElementById('labelFlights').childNodes[0].textContent = t.labelFlights;
  updateSelectOptions('flights', ['never', 'once', 'twice', 'often'], 
    [t.flightsNever, t.flightsOnce, t.flightsTwice, t.flightsOften]);
  
  // Waste tab
  document.getElementById('labelWasteAmount').childNodes[0].textContent = t.labelWasteAmount + ' ';
  document.getElementById('labelRecycling').childNodes[0].textContent = t.labelRecycling;
  updateSelectOptions('recycling', ['none', 'partial', 'always'], 
    [t.recyclingNone, t.recyclingPartial, t.recyclingAlways]);
  document.getElementById('labelComposting').textContent = t.labelComposting;
  
  // Energy tab
  document.getElementById('labelElectricity').childNodes[0].textContent = t.labelElectricity;
  document.getElementById('labelRenewable').textContent = t.labelRenewable;
  document.getElementById('labelHousehold').textContent = t.labelHousehold;
  document.getElementById('labelHeating').textContent = t.labelHeating;
  updateSelectOptions('heating', ['gas', 'oil', 'electric', 'heatpump'], 
    [t.heatingGas, t.heatingOil, t.heatingElectric, t.heatingHeatPump]);
  
  // Consumption tab
  document.getElementById('labelClothes').childNodes[0].textContent = t.labelClothes + ' ';
  document.getElementById('labelElectronics').childNodes[0].textContent = t.labelElectronics + ' ';
  document.getElementById('labelFoodWaste').childNodes[0].textContent = t.labelFoodWaste + ' ';
  
  // Buttons and labels
  document.getElementById('previewLabel').textContent = t.previewLabel;
  document.getElementById('calculateBtn').textContent = t.calculateBtn;
  document.getElementById('resultsTitle').textContent = t.resultsTitle;
  document.getElementById('monthlyLabel').textContent = t.monthlyLabel;
  document.getElementById('offsetBtn').textContent = t.offsetBtn;
  document.getElementById('factBtn').textContent = t.factBtn;
  document.getElementById('backBtn').textContent = t.backBtn;
  document.getElementById('modalOkBtn').textContent = t.modalOkBtn;
}

function updateSelectOptions(selectId, values, labels) {
  const select = document.getElementById(selectId);
  const currentValue = select.value;
  select.innerHTML = '';
  
  values.forEach((value, index) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = labels[index];
    if (value === currentValue) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}

// Screen navigation
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function showLanguageScreen() {
  showScreen('languageScreen');
}

// Tab navigation
function showTab(tabName) {
  currentTab = tabName;
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById('tab' + tabName.charAt(0).toUpperCase() + tabName.slice(1)).classList.add('active');
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabName + 'Tab').classList.add('active');
}

// Slider updates
function updateSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const valueSpan = document.getElementById(sliderId + 'Value');
  valueSpan.textContent = slider.value;
}

// Calculation
function calculate() {
  let totalEmissions = 0;
  
  // Personal (Diet)
  const diet = document.getElementById('diet').value;
  totalEmissions += emissionFactors.diet[diet];
  
  // Travel
  const transport = document.getElementById('transport').value;
  const distance = parseFloat(document.getElementById('distance').value) || 0;
  totalEmissions += distance * emissionFactors.transport[transport];
  
  const flights = document.getElementById('flights').value;
  totalEmissions += emissionFactors.flights[flights];
  
  // Waste
  const wasteAmount = parseFloat(document.getElementById('wasteAmount').value) || 0;
  const recycling = document.getElementById('recycling').value;
  const composting = document.getElementById('composting').checked;
  
  let wasteFactor = emissionFactors.waste.landfill;
  if (composting) {
    wasteFactor = emissionFactors.waste.composting;
  } else if (recycling === 'always') {
    wasteFactor = emissionFactors.waste.recycling;
  } else if (recycling === 'partial') {
    wasteFactor = (emissionFactors.waste.landfill + emissionFactors.waste.recycling) / 2;
  }
  
  totalEmissions += wasteAmount * 4.33 * wasteFactor; // 4.33 weeks per month
  
  // Energy
  const electricity = parseFloat(document.getElementById('electricity').value) || 0;
  const renewable = document.getElementById('renewable').checked;
  const household = parseInt(document.getElementById('household').value) || 1;
  const heating = document.getElementById('heating').value;
  
  if (!renewable) {
    totalEmissions += (electricity / household) * emissionFactors.electricity;
  }
  
  // Heating (estimate ~150 kWh per month)
  totalEmissions += (150 / household) * emissionFactors.heating[heating];
  
  // Consumption
  const clothes = parseFloat(document.getElementById('clothes').value) || 0;
  totalEmissions += clothes * emissionFactors.clothes;
  
  const electronics = parseFloat(document.getElementById('electronics').value) || 0;
  totalEmissions += (electronics * emissionFactors.electronics) / 12; // Monthly
  
  const foodWaste = parseFloat(document.getElementById('foodWaste').value) || 0;
  totalEmissions += foodWaste * 4.33 * emissionFactors.foodWaste;
  
  // Update live preview
  document.getElementById('liveEmissions').textContent = Math.round(totalEmissions);
  
  return totalEmissions;
}

// Results
function showResults() {
  const totalEmissions = calculate();
  const breakdown = calculateBreakdown();
  
  // Update total
  document.getElementById('totalEmissions').textContent = Math.round(totalEmissions);
  
  // Calculate trees (1 tree = 20 kg CO2e/year = 1.67 kg/month)
  const treesNeeded = Math.ceil(totalEmissions / 1.67);
  const t = translations[currentLanguage];
  document.getElementById('treesCount').textContent = treesNeeded;
  
  // Comparison message
  const avgMonthly = 400; // Global average ~4.8 tons/year
  const comparisonDiv = document.getElementById('comparisonMessage');
  if (totalEmissions < avgMonthly * 0.75) {
    comparisonDiv.textContent = t.comparisonGood;
    comparisonDiv.className = 'comparison-message good';
  } else if (totalEmissions < avgMonthly * 1.25) {
    comparisonDiv.textContent = t.comparisonAverage;
    comparisonDiv.className = 'comparison-message average';
  } else {
    comparisonDiv.textContent = t.comparisonHigh;
    comparisonDiv.className = 'comparison-message high';
  }
  
  // Create chart
  createChart(breakdown);
  
  showScreen('resultsScreen');
}

function calculateBreakdown() {
  const diet = document.getElementById('diet').value;
  const dietEmissions = emissionFactors.diet[diet];
  
  const transport = document.getElementById('transport').value;
  const distance = parseFloat(document.getElementById('distance').value) || 0;
  const flights = document.getElementById('flights').value;
  const travelEmissions = distance * emissionFactors.transport[transport] + emissionFactors.flights[flights];
  
  const wasteAmount = parseFloat(document.getElementById('wasteAmount').value) || 0;
  const recycling = document.getElementById('recycling').value;
  const composting = document.getElementById('composting').checked;
  let wasteFactor = emissionFactors.waste.landfill;
  if (composting) {
    wasteFactor = emissionFactors.waste.composting;
  } else if (recycling === 'always') {
    wasteFactor = emissionFactors.waste.recycling;
  } else if (recycling === 'partial') {
    wasteFactor = (emissionFactors.waste.landfill + emissionFactors.waste.recycling) / 2;
  }
  const wasteEmissions = wasteAmount * 4.33 * wasteFactor;
  
  const electricity = parseFloat(document.getElementById('electricity').value) || 0;
  const renewable = document.getElementById('renewable').checked;
  const household = parseInt(document.getElementById('household').value) || 1;
  const heating = document.getElementById('heating').value;
  let energyEmissions = 0;
  if (!renewable) {
    energyEmissions += (electricity / household) * emissionFactors.electricity;
  }
  energyEmissions += (150 / household) * emissionFactors.heating[heating];
  
  const clothes = parseFloat(document.getElementById('clothes').value) || 0;
  const electronics = parseFloat(document.getElementById('electronics').value) || 0;
  const foodWaste = parseFloat(document.getElementById('foodWaste').value) || 0;
  const consumptionEmissions = clothes * emissionFactors.clothes + 
    (electronics * emissionFactors.electronics) / 12 + 
    foodWaste * 4.33 * emissionFactors.foodWaste;
  
  return {
    Diet: Math.round(dietEmissions),
    Travel: Math.round(travelEmissions),
    Waste: Math.round(wasteEmissions),
    Energy: Math.round(energyEmissions),
    Consumption: Math.round(consumptionEmissions)
  };
}

function createChart(breakdown) {
  const ctx = document.getElementById('emissionsChart');
  
  if (chartInstance) {
    chartInstance.destroy();
  }
  
  chartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(breakdown),
      datasets: [{
        data: Object.values(breakdown),
        backgroundColor: [
          '#1FB8CD',
          '#FFC185',
          '#B4413C',
          '#ECEBD5',
          '#5D878F'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: {
              size: 12,
              family: 'FKGroteskNeue, sans-serif'
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return label + ': ' + value + ' kg CO₂e (' + percentage + '%)';
            }
          }
        }
      }
    }
  });
}

// Modal functions
function showOffset() {
  const t = translations[currentLanguage];
  showModal(t.offsetMessage);
}

function showFact() {
  const randomFact = sustainabilityFacts[Math.floor(Math.random() * sustainabilityFacts.length)];
  showModal('💡 ' + randomFact);
}

function showModal(message) {
  document.getElementById('modalText').textContent = message;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

function backToEditor() {
  showScreen('mainScreen');
}

// Initialize
window.addEventListener('load', () => {
  calculate();
});