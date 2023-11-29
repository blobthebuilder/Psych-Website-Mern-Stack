const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    default: 0,
  },
  orderOfAgents: {
    type: Number,
    required: true,
    default: 0,
  },
  timeElapsed: {
    type: String,
    default: "-1",
  },
  rugged: {
    type: Number,
    default: 1,
  },
  excited: {
    type: Number,
    default: 1,
  },
  uncomfortable: {
    type: Number,
    default: 1,
  },
  dominating: {
    type: Number,
    default: 1,
  },
  thrifty: {
    type: Number,
    default: 1,
  },
  pleasant: {
    type: Number,
    default: 1,
  },
  contemporary: {
    type: Number,
    default: 1,
  },
  organized: {
    type: Number,
    default: 1,
  },
  rational: {
    type: Number,
    default: 1,
  },
  youthful: {
    type: Number,
    default: 1,
  },
  formal: {
    type: Number,
    default: 1,
  },
  orthodox: {
    type: Number,
    default: 1,
  },
  complex: {
    type: Number,
    default: 1,
  },
  colorless: {
    type: Number,
    default: 1,
  },
  modest: {
    type: Number,
    default: 1,
  },
  products: {
    type: String,
    default: "",
  },
  environDecis: {
    type: String,
    default: "",
  },
  purchaseEnviron: {
    type: String,
    default: "",
  },
  resources: {
    type: String,
    default: "",
  },
  environResp: {
    type: String,
    default: "",
  },
  inconvenience: {
    type: String,
    default: "",
  },
  hotels: {
    type: String,
    default: "",
  },
  afternoons: {
    type: String,
    default: "",
  },
  restaurants: {
    type: String,
    default: "",
  },
  vacationType: {
    type: String,
    default: "",
  },
  budget: {
    type: String,
    default: "",
  },
  relaxation: {
    type: String,
    default: "",
  },
  nightLife: {
    type: String,
    default: "",
  },
  adventure: {
    type: String,
    default: "",
  },
  history: {
    type: String,
    default: "",
  },
  cultural: {
    type: String,
    default: "",
  },
  volunteer: {
    type: String,
    default: "",
  },
  sports: {
    type: String,
    default: "",
  },
  outdoor: {
    type: String,
    default: "",
  },
  food: {
    type: String,
    default: "",
  },
  shopping: {
    type: String,
    default: "",
  },
  accommodation: {
    type: String,
    default: "",
  },
  activityLevel: {
    type: String,
    default: "",
  },
  culturalImmersion: {
    type: String,
    default: "",
  },
  beatenPath: {
    type: Number,
    default: 0,
  },
  preferredCommunication: {
    type: String,
    default: "",
  },
  languageBarriers: {
    type: String,
    default: "",
  },
  preferredCuisines: {
    type: String,
    default: "",
  },
  downtimeImportance: {
    type: String,
    default: "",
  },
  adventureTravelInterest: {
    type: String,
    default: "",
  },
  artDesignInterest: {
    type: String,
    default: "",
  },
  artsCraftsInterest: {
    type: String,
    default: "",
  },
  beautyGroomingInterest: {
    type: String,
    default: "",
  },
  booksInterest: {
    type: String,
    default: "",
  },
  camerasInterest: {
    type: String,
    default: "",
  },
  campingInterest: {
    type: String,
    default: "",
  },
  computersInterest: {
    type: String,
    default: "",
  },
  cookingInterest: {
    type: String,
    default: "",
  },
  diyInterest: {
    type: String,
    default: "",
  },
  dogsInterest: {
    type: String,
    default: "",
  },
  electronicsInterest: {
    type: String,
    default: "",
  },
  fallFashionInterest: {
    type: String,
    default: "",
  },
  fashionAccessoriesInterest: {
    type: String,
    default: "",
  },
  fitnessInterest: {
    type: String,
    default: "",
  },
  foodDrinkInterest: {
    type: String,
    default: "",
  },
  funHobbiesInterest: {
    type: String,
    default: "",
  },
  giftIdeasInterest: {
    type: String,
    default: "",
  },
  healthWellnessInterest: {
    type: String,
    default: "",
  },
  healthyFoodInterest: {
    type: String,
    default: "",
  },
  hikingInterest: {
    type: String,
    default: "",
  },
  homeGardenInterest: {
    type: String,
    default: "",
  },
  homeDecorInterest: {
    type: String,
    default: "",
  },
  homeImprovementInterest: {
    type: String,
    default: "",
  },
  interiorDesignInterest: {
    type: String,
    default: "",
  },
  kidsParentingInterest: {
    type: String,
    default: "",
  },
  kitchensInterest: {
    type: String,
    default: "",
  },
  makeupInterest: {
    type: String,
    default: "",
  },
  mensFashionInterest: {
    type: String,
    default: "",
  },
  moviesTVInterest: {
    type: String,
    default: "",
  },
  musicInterest: {
    type: String,
    default: "",
  },
  outdoorActivitiesInterest: {
    type: String,
    default: "",
  },
  outdoorsInterest: {
    type: String,
    default: "",
  },
  petCareInterest: {
    type: String,
    default: "",
  },
  petsAnimalsInterest: {
    type: String,
    default: "",
  },
  photographyInterest: {
    type: String,
    default: "",
  },
  recipesInterest: {
    type: String,
    default: "",
  },
  shoesInterest: {
    type: String,
    default: "",
  },
  skinCareInterest: {
    type: String,
    default: "",
  },
  sportsInterest: {
    type: String,
    default: "",
  },
  strangeFindsInterest: {
    type: String,
    default: "",
  },
  styleFashionInterest: {
    type: String,
    default: "",
  },
  technologyInterest: {
    type: String,
    default: "",
  },
  toysGamesInterest: {
    type: String,
    default: "",
  },
  travelInterest: {
    type: String,
    default: "",
  },
  womensAccessoriesInterest: {
    type: String,
    default: "",
  },
  womensFashionInterest: {
    type: String,
    default: "",
  },
  female: {
    type: String,
    default: "",
  },
  male: {
    type: String,
    default: "",
  },
  genderqueer: {
    type: String,
    default: "",
  },
  transFemale: {
    type: String,
    default: "",
  },
  transMale: {
    type: String,
    default: "",
  },
  noResponseGender: {
    type: String,
    default: "",
  },
  genderOther: {
    type: String,
    default: "",
  },
  income: {
    type: Number,
    default: 0,
  },
  ladder: {
    type: Number,
    default: 0,
  },
  education: {
    type: String,
    default: "",
  },
  political: {
    type: Number,
    default: 0,
  },
  economic: {
    type: Number,
    default: 0,
  },
  social: {
    type: Number,
    default: 0,
  },
  age: {
    type: Number,
    default: 0,
  },
  indian: {
    type: String,
    default: "",
  },
  asian: {
    type: String,
    default: "",
  },
  african: {
    type: String,
    default: "",
  },
  hispanic: {
    type: String,
    default: "",
  },
  arab: {
    type: String,
    default: "",
  },
  hawaiian: {
    type: String,
    default: "",
  },
  white: {
    type: String,
    default: "",
  },
  otherRace: {
    type: String,
    default: "",
  },
  residence: {
    type: String,
    default: "",
  },
  internetAccess: {
    type: String,
    default: "",
  },
  internetLookup: {
    type: String,
    default: "",
  },
  eCommunicationUse: {
    type: String,
    default: "",
  },
  attentionCheck1: {
    type: Boolean,
    default: false,
  },
  flight1: {
    type: Number,
    default: 0,
  },
  originalFlight1: { type: Number, default: 0 },
  flightEco1: { type: Number, default: 0 },
  rentalCar1: {
    type: Number,
    default: 0,
  },
  originalRentalCar1: { type: Number, default: 0 },
  rentalCarEco1: { type: Number, default: 0 },
  hotel1: {
    type: Number,
    default: 0,
  },
  originalHotel1: { type: Number, default: 0 },
  hotelEco1: { type: Number, default: 0 },
  dinner1: {
    type: Number,
    default: 0,
  },
  originalDinner1: { type: Number, default: 0 },
  dinnerEco1: { type: Number, default: 0 },
  lunch1: {
    type: Number,
    default: 0,
  },
  originalLunch1: { type: Number, default: 0 },
  lunchEco1: { type: Number, default: 0 },
  breakfast1: {
    type: Number,
    default: 0,
  },
  originalBreakfast1: { type: Number, default: 0 },
  breakfastEco1: { type: Number, default: 0 },
  museums1: {
    type: Number,
    default: 0,
  },
  originalMuseums1: { type: Number, default: 0 },
  museumsEco1: { type: Number, default: 0 },
  markets1: {
    type: Number,
    default: 0,
  },
  originalMarkets1: { type: Number, default: 0 },
  marketsEco1: { type: Number, default: 0 },
  flamencoShows1: {
    type: Number,
    default: 0,
  },
  originalFlamencoShows1: { type: Number, default: 0 },
  flamencoShowsEco1: { type: Number, default: 0 },
  publicTransportationShort1: {
    type: Number,
    default: 0,
  },
  originalPublicTransportationShort1: { type: Number, default: 0 },
  publicTransportationShortEco1: { type: Number, default: 0 },
  publicTransportationLong1: {
    type: Number,
    default: 0,
  },
  originalPublicTransportationLong1: { type: Number, default: 0 },
  publicTransportationLongEco1: { type: Number, default: 0 },
  coffee1: {
    type: Number,
    default: 0,
  },
  originalCoffee1: { type: Number, default: 0 },
  coffeeEco1: { type: Number, default: 0 },
  bakery1: {
    type: Number,
    default: 0,
  },
  originalBakery1: { type: Number, default: 0 },
  bakeryEco1: { type: Number, default: 0 },
  nightLife1: {
    type: Number,
    default: 0,
  },
  originalNightLife1: { type: Number, default: 0 },
  nightLifeEco1: { type: Number, default: 0 },
  bars1: {
    type: Number,
    default: 0,
  },
  originalBars1: { type: Number, default: 0 },
  barsEco1: { type: Number, default: 0 },
  groceries1: {
    type: Number,
    default: 0,
  },
  originalGroceries1: { type: Number, default: 0 },
  groceriesEco1: { type: Number, default: 0 },
  souveneirs1: {
    type: Number,
    default: 0,
  },
  originalSouveneirs1: { type: Number, default: 0 },
  souveneirsEco1: { type: Number, default: 0 },
  shopping1: {
    type: Number,
    default: 0,
  },
  originalShopping1: { type: Number, default: 0 },
  shoppingEco1: { type: Number, default: 0 },
  internationalPhoneService1: {
    type: Number,
    default: 0,
  },
  originalInternationalPhoneService1: { type: Number, default: 0 },
  internationalPhoneServiceEco1: { type: Number, default: 0 },
  currencyExchange1: {
    type: Number,
    default: 0,
  },
  originalCurrencyExchange1: { type: Number, default: 0 },
  currencyExchangeEco1: { type: Number, default: 0 },
  luggage1: {
    type: Number,
    default: 0,
  },
  originalLuggage1: { type: Number, default: 0 },
  luggageEco1: { type: Number, default: 0 },
  dayTrip1: {
    type: Number,
    default: 0,
  },
  originalDayTrip1: { type: Number, default: 0 },
  dayTripEco1: { type: Number, default: 0 },
  travelInsurance1: {
    type: Number,
    default: 0,
  },
  originalTravelInsurance1: { type: Number, default: 0 },
  travelInsuranceEco1: { type: Number, default: 0 },
  travelPlugAdapter1: {
    type: Number,
    default: 0,
  },
  originalTravelPlugAdapter1: { type: Number, default: 0 },
  travelPlugAdapterEco1: { type: Number, default: 0 },
  choose1: {
    type: String,
    default: "",
  },
  charge1: {
    type: String,
    default: "",
  },
  account1: {
    type: String,
    default: "",
  },
  wait1: {
    type: String,
    default: "",
  },
  sense1: {
    type: String,
    default: "",
  },
  engage1: {
    type: String,
    default: "",
  },
  understood1: {
    type: String,
    default: "",
  },
  listen1: {
    type: String,
    default: "",
  },
  effectiveness1: {
    type: String,
    default: "",
  },
  bestOption1: {
    type: String,
    default: "",
  },
  optionQuickly1: {
    type: String,
    default: "",
  },
  productivity1: {
    type: String,
    default: "",
  },
  performance1: {
    type: String,
    default: "",
  },
  utilize1: {
    type: String,
    default: "",
  },
  reflect1: {
    type: String,
    default: "",
  },
  identify1: {
    type: String,
    default: "",
  },
  connection1: {
    type: String,
    default: "",
  },
  agentCommunicate1: {
    type: String,
    default: "",
  },
  typePerson1: {
    type: String,
    default: "",
  },
  agentMe1: {
    type: String,
    default: "",
  },
  suits1: {
    type: String,
    default: "",
  },
  productsFollowup1: {
    type: String,
    default: "",
  },
  actionsFollowup11: {
    type: String,
    default: "",
  },
  purchaseFollowup1: {
    type: String,
    default: "",
  },
  resourcesFollowup1: {
    type: String,
    default: "",
  },
  responsibleFollowup1: {
    type: String,
    default: "",
  },
  inconvenienceFollowup1: {
    type: String,
    default: "",
  },
  recognizeAlgorithm: {
    type: String,
    default: "",
  },
  developAlgorithm: {
    type: String,
    default: "",
  },
  influenceAlgorithm: {
    type: String,
    default: "",
  },
  databaseAlgorithm: {
    type: String,
    default: "",
  },
  searchAlgorithm: {
    type: String,
    default: "",
  },
  contentAlgorithm: {
    type: String,
    default: "",
  },
  thinkAlgorithm: {
    type: String,
    default: "",
  },
  censorshipAlgorithm: {
    type: String,
    default: "",
  },
  chancesAlgorithm: {
    type: String,
    default: "",
  },
  reportsAlgorithm: {
    type: String,
    default: "",
  },
  humansAlgorithm: {
    type: String,
    default: "",
  },
  alexaAlgorithm: {
    type: String,
    default: "",
  },
  tvAlgorithm: {
    type: String,
    default: "",
  },
  wearableAlgorithm: {
    type: String,
    default: "",
  },
  browserAlgorithm: {
    type: String,
    default: "",
  },
  paymentAlgorithm: {
    type: String,
    default: "",
  },
  towersAlgorithm: {
    type: String,
    default: "",
  },
  gamesAlgorithm: {
    type: String,
    default: "",
  },
  radiosAlgorithm: {
    type: String,
    default: "",
  },
  forecastAlgorithm: {
    type: String,
    default: "",
  },
  recommendationAlgorithm: {
    type: String,
    default: "",
  },
  newsAlgorithm: {
    type: String,
    default: "",
  },
  advertisementAlgorithm: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("user", userSchema);
