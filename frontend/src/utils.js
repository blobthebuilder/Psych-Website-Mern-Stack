export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

export const shuffleHotels = () => {
  let tmp = [
    "City.jpg",
    "Horses.png",
    "Orlando.jpeg",
    "Snowy.jpeg",
    "Tropical.jpeg",
  ];
  shuffle(tmp);
  return tmp;
};

export const shuffleAfternoon = () => {
  let tmp = [
    "Beach.jpeg",
    "cathedral.jpg",
    "City.jpeg",
    "Mountains.jpeg",
    "Museum.jpeg",
  ];
  shuffle(tmp);
  return tmp;
};

export const shuffleRestaurants = () => {
  let tmp = [
    "Cozy.jpg",
    "Red.jpeg",
    "SportsBar.jpg",
    "Sunset.jpg",
    "Tacos.jpg",
  ];
  shuffle(tmp);
  return tmp;
};

export const shuffleVacations = () => {
  let vacationTypeText = [
    [
      "Adventure: ",
      "Activities such as hiking, skiing, or whitewater rafting.",
    ],
    ["Beach: ", "Relaxing on the sand, swimming, and enjoying water sports."],
    [
      "City Break: ",
      "Exploring urban areas, visiting museums and galleries, and dining in local restaurants.",
    ],
    [
      "Cultural: ",
      "Learning about different cultures, visiting historical sites and monuments, and experiencing local traditions.",
    ],
    [
      "Family: ",
      "Activities suitable for all ages, such as theme parks, water parks, or camping.",
    ],
    [
      "Luxury: ",
      "Staying in upscale hotels, indulging in spa treatments, and enjoying high-end dining.",
    ],
    [
      "Romantic: ",
      "Experiencing romantic activities such as fine dining, sunset walks, and couples' massages.",
    ],
    [
      "Rural: ",
      "Enjoying the countryside, hiking or biking, and staying in small towns or bed and breakfasts.",
    ],
  ];
  shuffle(vacationTypeText);
  return vacationTypeText;
};

export const shuffleActivities = () => {
  let activitiesText = [
    [
      "Outdoor activities: ",
      "hiking, biking, skiing, swimming, and other outdoor activities.",
    ],
    [
      "Cultural experiences: ",
      "Visiting museums, attending concerts, theater shows or festivals.",
    ],
    [
      "Relaxation: ",
      "Lounging on the beach, enjoying a spa day, and leisurely sightseeing.",
    ],
    [
      "Adventure: ",
      "Bungee jumping, zip-lining, rock climbing, and other thrilling activities.",
    ],
    [
      "Sports: ",
      "Golfing, surfing, skiing, tennis, and other sports activities.",
    ],
    [
      "History and heritage: ",
      "Visiting historical sites, monuments, and landmarks.",
    ],
    [
      "Food and wine: ",
      "Tasting local cuisine, visiting wineries or breweries, and cooking classes.",
    ],
    [
      "Nightlife and entertainment: ",
      "Exploring bars, clubs, and other entertainment venues.",
    ],
    [
      "Shopping: ",
      "Visiting markets, malls, and boutiques, and buying souvenirs.",
    ],
    [
      "Volunteer tourism: ",
      "Participating in volunteer activities such as teaching or conservation work.",
    ],
  ];
  shuffle(activitiesText);
  return activitiesText;
};

export const shuffleAccommodation = () => {
  let accommodationText = [
    "Hotel",
    "Resort",
    "Airbnb",
    "Vacation Rental",
    "Camping",
  ];
  shuffle(accommodationText);
  return accommodationText;
};

export const shuffleCommunication = () => {
  let communicationText = [
    "Phone",
    "Email",
    "Social media",
    "Messaging apps",
    "Mail",
  ];
  shuffle(communicationText);
  return communicationText;
};

export const shuffleCuisine = () => {
  let cuisineText = [
    [
      "Local cuisine: ",
      "I prefer to try the traditional dishes and local specialties of the destination I'm visiting.",
    ],
    [
      "Western cuisine: ",
      "I prefer familiar dishes and foods that are similar to what I eat at home.",
    ],
    [
      "Vegetarian/vegan cuisine: ",
      "I prefer plant-based dishes and seek out vegetarian/vegan options when traveling.",
    ],
    ["Seafood cuisine: ", "I love fresh seafood and seafood-based dishes."],
    [
      "Fusion cuisine: ",
      "I enjoy trying unique combinations of different cuisines and flavors.",
    ],
    [
      "Street food: ",
      "I prefer to try local foods from street vendors and food markets.",
    ],
  ];
  shuffle(cuisineText);
  return cuisineText;
};

let features = {
  Flight: [
    [
      "Title",
      ["Emirates", "United Airlines", "Air France", "Turkish Airlines"],
    ],
    ["Stop", ["1 stop", "1 stop", "2 stops", "2 stops"]],
    ["Price", ["$$$", "$$", "$$$", "$$"]],
    [
      "Flights",
      [
        "17h 03m\nSBA-MAD\n22h 08m\nMAD-SBA",
        "17h 03m\nSBA-MAD\n19h 21m\nMAD-SBA",
        "18h 35m\nSBA-MAD\n22h 08m\nMAD-SBA",
        "18h 35m\nSBA-MAD\n19h 21m\nMAD-SBA",
      ],
    ],
  ],
  "Rental Car": [
    ["Title", ["Firefly", "Recordgo", "Enterprise", "Alamo"]],
    [
      "Type",
      [
        "Fiat 500 or similar Mini",
        "Toyota Corolla or similar Economy",
        "Toyota Corolla or similar Economy",
        "Fiat 500 or similar Mini",
      ],
    ],
    ["Seats", ["4", "5", "4", "5"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  Hotel: [
    [
      "Title",
      [
        "The Prinicipal Madrid Hotel",
        "NH Collection Madrid Abascal Hotel",
        "Madrid Marriott Auditorium",
        "Eurostars Madrid Tower",
      ],
    ],
    ["Stars", ["4.7", "4.8", "4.9", "4.8"]],
    ["Free Wifi", ["Yes", "Yes", "No", "No"]],
    ["Price", ["$$$", "$$", "$$$", "$$"]],
  ],
  Dinner: [
    [
      "Title",
      ["El Social", "Dos Cielos Madrid", "Taberna El Sur", "CEBO Madrid"],
    ],
    [
      "Description",
      [
        "Global flavors",
        "Rustic former stables",
        "Buzzing, colorful spot",
        "Strikingly designed space",
      ],
    ],
    ["Price", ["$$", "$$", "$", "$$$"]],
    ["Stars", ["4.9", "4.9", "5.0", "5.0"]],
  ],
  Lunch: [
    ["Title", ["Moratin", "Hielo y Cabron", "La Rollerie", "Juana La Loca"]],
    [
      "Description",
      [
        "Renowned bistro & wine bar",
        "Hotel bar & restaurant",
        "Spanish fusion",
        "Farm-to-table local fare",
      ],
    ],
    ["Price", ["$$", "$", "$$", "$"]],
    ["Stars", ["4.9", "4.7", "4.7", "4.8"]],
  ],
  Breakfast: [
    [
      "Title",
      ["Carmencita Brunch", "Zenith Brunch", "Normada Cafe", "Coco House"],
    ],
    [
      "Description",
      [
        "Gluten-free brunch favorites",
        "Chill, brick-lined space",
        "Laid-back choice",
        "Vegan shakes and snacks",
      ],
    ],
    ["Price", ["$$", "$", "$$", "$$"]],
    ["Stars", ["4.9", "4.8", "4.8", "4.7"]],
  ],
  Museums: [
    [
      "Title",
      [
        "Museo Nacional del Prado",
        "Museo Nacional Centro de Arte Reina Sofía",
        "Museo Nacional Thyssen-Bornemisza",
        "Museo Sorolla",
      ],
    ],
    [
      "Description",
      [
        "World-class European art collection",
        "One of the world’s largest museums dedicated to modern art",
        "Pieces from the likes of Dalí, El Greco, Monet, Picasso, and Rembrandt",
        "The most important museum in the world for European painting",
      ],
    ],
    ["Suggested duration", ["4h00m", "2h00m", "3h00m", "3h00m"]],
    ["Price", ["$$", "$", "$$$", "$"]],
  ],
  Markets: [
    [
      "Title",
      [
        "Mercado Ildefonso",
        "Mercado San Miguel",
        "Mercado de la Paz",
        "Mercado San Antón",
      ],
    ],
    [
      "Description",
      [
        "Food market by day, youth hotspot by night",
        "Covered market offering local food",
        "Known for its seafood, fresh produce, and meats from local merchants",
        "Very modern food market situated in Madrid’s most vibrant neighbourhood",
      ],
    ],
    ["Suggested duration", ["2h00m", "1h00m", "2h00m", "1h30m"]],
    ["Price", ["$$", "$$", "$", "$"]],
  ],
  "Flamenco Shows": [
    [
      "Title",
      [
        "Tablao Flamenco 1911",
        "Cardamomo",
        "Casa Patas",
        "Corral de la Morería",
      ],
    ],
    [
      "Description",
      [
        "This legendary flamenco performance will leave you speechless with the careful decoration including Andalusian murals, wooden arches, and polychrome tiles",
        "In this performance, artists are capable of generating a brutal and wild energy that connects with the audience and is different in each of the sessions",
        "More than thirty years of work and dedication guarantee the quality of the flamenco show",
        "Each week a different show with new artists, who keep the flame of flamenco alive and promote the cult of this art",
      ],
    ],
    [
      "Top Review",
      [
        "Such an iconic experience our family will never forget",
        "Great way to understand the city, an unforgettable performance.",
        "Made me want to start taking Flamenco lessons! A truly memorable performance",
        "So fun and relaxing, the absolute perfect summer activity",
      ],
    ],
    ["Price", ["$$$", "$$$", "$$", "$$"]],
  ],
  "Public Transportation (Short)": [
    ["Title", ["Taxi", "CiudadBici", "Bolt", "MotoRental"]],
    ["Duration", ["0h15m", "0h30m", "0h20m", "0h10m"]],
    ["Stars", ["3.9", "3.5", "3.4", "3.6"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  "Public Transportation (Long)": [
    ["Title", ["Madrid Autobus", "Eurail", "M Tram", "Madrid Metro"]],
    ["Business", ["Medium", "Busy", "Busy", "Not Busy"]],
    ["Duration", ["0h45m", "0h25m", "0h30m", "0h25m"]],
    ["Price", ["$", "$$", "$$", "$"]],
  ],
  Coffee: [
    [
      "Title",
      [
        "Casa Mina",
        "La Malloquina",
        "Café de la Luz",
        "Antigua Pasteleria del Pozo",
      ],
    ],
    [
      "Description",
      [
        "Best coffee in Madrid",
        "Madrid's oldest family-owned coffee shop",
        "Infinite variety of coffee combinations",
        "Farm-to-table coffee shop",
      ],
    ],
    ["Stars", ["4.8", "4.6", "4.7", "4.9"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  Bakery: [
    ["Title", ["Santa Eulalia", "El Riojano", "La Duquesita", "Antigua"]],
    [
      "Description",
      [
        "Modern cafe-bakery",
        "Ornate 19th-century bakery",
        "Cakes & desserts to eat in or take away",
        "Artisanal cakes & Spanish pastries",
      ],
    ],
    ["Stars", ["4.8", "4.5", "4.6", "4.7"]],
    ["Price", ["$", "$$", "$", "$$"]],
  ],
  "Night Life": [
    ["Title", ["Club Masaña", "Cazador", "Bendito", "Cibeles Night Club"]],
    [
      "Description",
      [
        "Madrid's newest club",
        "Dance bar offering karaoke",
        "Rooftop bar",
        "Celebrity hot-spot",
      ],
    ],
    ["DJ", ["Chris Collins", "Juan Pena", "Lucas Silva", "Calvin Harris"]],
    ["Hours", ["10pm-8am", "9pm-5am", "8pm-3am", "90pm-9am"]],
  ],
  Bars: [
    [
      "Title",
      [
        "Eden de Huertes",
        "Pub La Via Lactea",
        "La Fontana de Oro",
        "Ficus Bar",
      ],
    ],
    [
      "Description",
      [
        "Funky retro coctails",
        "Upbeat lounge offering drinks",
        "Historic tavern",
        "Fashionable locale serving cocktails",
      ],
    ],
    ["Stars", ["4.7", "4.8", "4.9", "4.8"]],
    ["Price", ["$$", "$$", "$", "$"]],
  ],
  Groceries: [
    ["Title", ["El Mercado Principal", "Juemarca", "Carrefour", "Mercadona"]],
    [
      "Description",
      [
        "Local farmers' market",
        "Convenience store",
        "European chain",
        "Oldest grocery store in Spain",
      ],
    ],
    ["Size", ["Large", "Medium", "Small", "Medium"]],
    ["Price", ["$$", "$", "$", "$$"]],
  ],
  Souveneirs: [
    [
      "Title",
      ["Souveneirs Madrid", "El Local", "Souveneirs El Angel", "Adios Madrid"],
    ],
    ["Stars", ["4.8", "4.7", "4.6", "4.7"]],
    ["Distance from Center", ["0.4mi", "0.2mi", "0.3mi", "0.1mi"]],
    ["Price", ["$$", "$$", "$", "$"]],
  ],
  Shopping: [
    ["Title", ["Ekseption 2", "COLCOL", "Vintology", "La Integral"]],
    ["Stars", ["4.9", "4.8", "4.7", "4.8"]],
    [
      "Description",
      [
        "High quality designer items",
        "Charming craft boutique",
        "20th century second-hand store",
        "One of a kind merchandise",
      ],
    ],
    ["Price", ["$$$", "$$", "$$", "$"]],
  ],
  "International Phone Service": [
    ["Title", ["Arialo", "TIM", "Vodafone", "Yoigo"]],
    [
      "Description",
      [
        "E-SIM via App",
        "Installable Card",
        "Installable Card",
        "Installable Card",
      ],
    ],
    ["Reach", ["Spain only", "All of EU", "Spain only", "All of EU"]],
    ["Data", ["5GB daily", "Unlimited Data", "10GB daily", "5GB daily"]],
  ],
  "Currency Exchange": [
    [
      "Title",
      ["Eurostar", "Santander", "Banco Bilbao Vizcaya Argentaria", "CitiBank"],
    ],
    [
      "Fee",
      ["International Card Fee", "No Fee", "International Card Fee", "No Fee"],
    ],
    ["Availability", ["All of EU", "All of EU", "Spain only", "International"]],
    ["Stars", ["4.6", "4.5", "4.5", "4.4"]],
  ],
  Luggage: [
    ["Title", ["July", "Tumi", "Monos", "Aleon"]],
    ["Shipping", ["2-day", "4-5 days", "4-5 days", "2-day"]],
    ["Price", ["$$", "$$", "$", "$$$"]],
    [
      "Top Review",
      [
        "This is exactly what I wanted; the perfect size to take on airplanes (and cruises) that can either be rolled or used as a backpack.",
        "Great quality bag, excellent space allocation within the multiple zippers. Feels robust but not too heavy.",
        "This set is such good quality for such an amazing price, it can't be beat. It really feels like it will last us many years to come amd i can't wait to use it on our next trip!",
        "It’s lightweight, excellent to maneuver around. With all the added extras, no need to worry about battery life when you have Portable charger inside the case.",
      ],
    ],
  ],
  "Day Trip": [
    ["Title", ["Toledo", "Avila", "Cuenca", "Segovia"]],
    ["Price", ["$$$", "$$", "$$$", "$$"]],
    ["Distance", ["50mi", "100mi", "75mi", "40mi"]],
    ["Suggested Duration", ["15h00m", "8h00m", "12h00m", "10h00m"]],
  ],
  "Travel Insurance": [
    [
      "Title",
      ["Allianz Travel", "American Express", "InsureMy Trip", "Squaremouth"],
    ],
    ["Price", ["$$", "$", "$$", "$"]],
    ["Coverage", ["Complete", "Hotel & flight", "Hotel & flight", "Complete"]],
    ["Stars", ["4.2", "4.3", "4.1", "4.2"]],
  ],
  "Travel Plug Adapter": [
    ["Title", ["Basics European Power", "E-blue Adapter", "TESSAN", "Vintar"]],
    ["Price", ["$", "$", "$$", "$$"]],
    [
      "Top Review",
      [
        "This was very helpful for our trip to France. You can charge more than one device at the time",
        "Just bought this and promptly took it overseas and used it in Finland and Croatia. Terrific size, ease, use. Fantastic product",
        "Works as expected. A little bulky to pack due to prongs but not much can be done about that.",
        "This adaptor has been a lifesaver for all of our trips, it works absolutely everywhere",
      ],
    ],
    [
      "Shipping",
      [
        "2 business days",
        "4-5 business days",
        "4-5 business days",
        "2 business days",
      ],
    ],
  ],
};

export const randomizeItineraryFeatures = () => {
  for (let className in features) {
    if (className in features) {
      for (let i = 0; i < 4; i++) {
        shuffle(features[className][i][1]);
      }
    }
  }
  return features;
};

export const randomizeRecommendedAndEco = () => {
  const tmp = {};
  for (let className in features) {
    if (className in features) {
      let a = Math.floor(Math.random() * 4);
      let b = Math.floor(Math.random() * 4);
      tmp[className] = [a, b];
    }
  }
  return tmp;
};

export const msToTime = (duration) => {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};
