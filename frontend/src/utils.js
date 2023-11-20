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
