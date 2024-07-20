const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    default: 0,
  },
  prolificId: {
    type: String,
    required: false,
    default: "0",
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
  timeStamp: {
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
  flightSelectDefault1: { type: Boolean, default: false },
  flightSelectDefaultAndEco1: { type: Boolean, default: false },
  flightSelectEco1: { type: Boolean, default: false },
  rentalCar1: {
    type: Number,
    default: 0,
  },
  originalRentalCar1: { type: Number, default: 0 },
  rentalCarEco1: { type: Number, default: 0 },
  rentalCarSelectDefault1: { type: Boolean, default: false },
  rentalCarSelectDefaultAndEco1: { type: Boolean, default: false },
  rentalCarSelectEco1: { type: Boolean, default: false },
  hotel1: {
    type: Number,
    default: 0,
  },
  originalHotel1: { type: Number, default: 0 },
  hotelEco1: { type: Number, default: 0 },
  hotelSelectDefault1: { type: Boolean, default: false },
  hotelSelectDefaultAndEco1: { type: Boolean, default: false },
  hotelSelectEco1: { type: Boolean, default: false },
  dinner1: {
    type: Number,
    default: 0,
  },
  originalDinner1: { type: Number, default: 0 },
  dinnerEco1: { type: Number, default: 0 },
  dinnerSelectDefault1: { type: Boolean, default: false },
  dinnerSelectDefaultAndEco1: { type: Boolean, default: false },
  dinnerSelectEco1: { type: Boolean, default: false },
  lunch1: {
    type: Number,
    default: 0,
  },
  originalLunch1: { type: Number, default: 0 },
  lunchEco1: { type: Number, default: 0 },
  lunchSelectDefault1: { type: Boolean, default: false },
  lunchSelectDefaultAndEco1: { type: Boolean, default: false },
  lunchSelectEco1: { type: Boolean, default: false },
  breakfast1: {
    type: Number,
    default: 0,
  },
  originalBreakfast1: { type: Number, default: 0 },
  breakfastEco1: { type: Number, default: 0 },
  breakfastSelectDefault1: { type: Boolean, default: false },
  breakfastSelectDefaultAndEco1: { type: Boolean, default: false },
  breakfastSelectEco1: { type: Boolean, default: false },
  museums1: {
    type: Number,
    default: 0,
  },
  originalMuseums1: { type: Number, default: 0 },
  museumsEco1: { type: Number, default: 0 },
  museumsSelectDefault1: { type: Boolean, default: false },
  museumsSelectDefaultAndEco1: { type: Boolean, default: false },
  museumsSelectEco1: { type: Boolean, default: false },
  markets1: {
    type: Number,
    default: 0,
  },
  originalMarkets1: { type: Number, default: 0 },
  marketsEco1: { type: Number, default: 0 },
  marketsSelectDefault1: { type: Boolean, default: false },
  marketsSelectDefaultAndEco1: { type: Boolean, default: false },
  marketsSelectEco1: { type: Boolean, default: false },
  publicTransportationLong1: { type: Number, default: 0 },
  originalPublicTransportationLong1: { type: Number, default: 0 },
  publicTransportationLongEco1: { type: Number, default: 0 },
  publicTransportationLongSelectDefault1: { type: Boolean, default: false },
  publicTransportationLongSelectDefaultAndEco1: {
    type: Boolean,
    default: false,
  },
  publicTransportationLongSelectEco1: { type: Boolean, default: false },
  coffee1: {
    type: Number,
    default: 0,
  },
  originalCoffee1: { type: Number, default: 0 },
  coffeeEco1: { type: Number, default: 0 },
  coffeeSelectDefault1: { type: Boolean, default: false },
  coffeeSelectDefaultAndEco1: { type: Boolean, default: false },
  coffeeSelectEco1: { type: Boolean, default: false },
  bakery1: {
    type: Number,
    default: 0,
  },
  originalBakery1: { type: Number, default: 0 },
  bakeryEco1: { type: Number, default: 0 },
  bakerySelectDefault1: { type: Boolean, default: false },
  bakerySelectDefaultAndEco1: { type: Boolean, default: false },
  bakerySelectEco1: { type: Boolean, default: false },
  nightLife1: {
    type: Number,
    default: 0,
  },
  originalNightLife1: { type: Number, default: 0 },
  nightLifeEco1: { type: Number, default: 0 },
  nightLifeSelectDefault1: { type: Boolean, default: false },
  nightLifeSelectDefaultAndEco1: { type: Boolean, default: false },
  nightLifeSelectEco1: { type: Boolean, default: false },
  groceries1: {
    type: Number,
    default: 0,
  },
  originalGroceries1: { type: Number, default: 0 },
  groceriesEco1: { type: Number, default: 0 },
  groceriesSelectDefault1: { type: Boolean, default: false },
  groceriesSelectDefaultAndEco1: { type: Boolean, default: false },
  groceriesSelectEco1: { type: Boolean, default: false },
  souveneirs1: {
    type: Number,
    default: 0,
  },
  originalSouveneirs1: { type: Number, default: 0 },
  souveneirsEco1: { type: Number, default: 0 },
  souveneirsSelectDefault1: { type: Boolean, default: false },
  souveneirsSelectDefaultAndEco1: { type: Boolean, default: false },
  souveneirsSelectEco1: { type: Boolean, default: false },
  shopping1: {
    type: Number,
    default: 0,
  },
  originalShopping1: { type: Number, default: 0 },
  shoppingEco1: { type: Number, default: 0 },
  shoppingSelectDefault1: { type: Boolean, default: false },
  shoppingSelectDefaultAndEco1: { type: Boolean, default: false },
  shoppingSelectEco1: { type: Boolean, default: false },
  currencyExchange1: {
    type: Number,
    default: 0,
  },
  originalCurrencyExchange1: { type: Number, default: 0 },
  currencyExchangeEco1: { type: Number, default: 0 },
  currencyExchangeSelectDefault1: { type: Boolean, default: false },
  currencyExchangeSelectDefaultAndEco1: { type: Boolean, default: false },
  currencyExchangeSelectEco1: { type: Boolean, default: false },
  luggage1: {
    type: Number,
    default: 0,
  },
  originalLuggage1: { type: Number, default: 0 },
  luggageEco1: { type: Number, default: 0 },
  luggageSelectDefault1: { type: Boolean, default: false },
  luggageSelectDefaultAndEco1: { type: Boolean, default: false },
  luggageSelectEco1: { type: Boolean, default: false },
  dayTrip1: {
    type: Number,
    default: 0,
  },
  originalDayTrip1: { type: Number, default: 0 },
  dayTripEco1: { type: Number, default: 0 },
  dayTripSelectDefault1: { type: Boolean, default: false },
  dayTripSelectDefaultAndEco1: { type: Boolean, default: false },
  dayTripSelectEco1: { type: Boolean, default: false },
  travelPlugAdapter1: {
    type: Number,
    default: 0,
  },
  originalTravelPlugAdapter1: { type: Number, default: 0 },
  travelPlugAdapterEco1: { type: Number, default: 0 },
  travelPlugAdapterSelectDefault1: { type: Boolean, default: false },
  travelPlugAdapterSelectDefaultAndEco1: { type: Boolean, default: false },
  travelPlugAdapterSelectEco1: { type: Boolean, default: false },
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
  actionsFollowup1: {
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
  attentionCheck2: {
    type: Boolean,
    default: false,
  },
  flight2: {
    type: Number,
    default: 0,
  },
  originalFlight2: { type: Number, default: 0 },
  flightEco2: { type: Number, default: 0 },
  flightSelectDefault2: { type: Boolean, default: false },
  flightSelectDefaultAndEco2: { type: Boolean, default: false },
  flightSelectEco2: { type: Boolean, default: false },
  rentalCar2: {
    type: Number,
    default: 0,
  },
  originalRentalCar2: { type: Number, default: 0 },
  rentalCarEco2: { type: Number, default: 0 },
  rentalCarSelectDefault2: { type: Boolean, default: false },
  rentalCarSelectDefaultAndEco2: { type: Boolean, default: false },
  rentalCarSelectEco2: { type: Boolean, default: false },
  hotel2: {
    type: Number,
    default: 0,
  },
  originalHotel2: { type: Number, default: 0 },
  hotelEco2: { type: Number, default: 0 },
  hotelSelectDefault2: { type: Boolean, default: false },
  hotelSelectDefaultAndEco2: { type: Boolean, default: false },
  hotelSelectEco2: { type: Boolean, default: false },
  dinner2: {
    type: Number,
    default: 0,
  },
  originalDinner2: { type: Number, default: 0 },
  dinnerEco2: { type: Number, default: 0 },
  dinnerSelectDefault2: { type: Boolean, default: false },
  dinnerSelectDefaultAndEco2: { type: Boolean, default: false },
  dinnerSelectEco2: { type: Boolean, default: false },
  lunch2: {
    type: Number,
    default: 0,
  },
  originalLunch2: { type: Number, default: 0 },
  lunchEco2: { type: Number, default: 0 },
  lunchSelectDefault2: { type: Boolean, default: false },
  lunchSelectDefaultAndEco2: { type: Boolean, default: false },
  lunchSelectEco2: { type: Boolean, default: false },
  breakfast2: {
    type: Number,
    default: 0,
  },
  originalBreakfast2: { type: Number, default: 0 },
  breakfastEco2: { type: Number, default: 0 },
  breakfastSelectDefault2: { type: Boolean, default: false },
  breakfastSelectDefaultAndEco2: { type: Boolean, default: false },
  breakfastSelectEco2: { type: Boolean, default: false },
  museums2: {
    type: Number,
    default: 0,
  },
  originalMuseums2: { type: Number, default: 0 },
  museumsEco2: { type: Number, default: 0 },
  museumsSelectDefault2: { type: Boolean, default: false },
  museumsSelectDefaultAndEco2: { type: Boolean, default: false },
  museumsSelectEco2: { type: Boolean, default: false },
  markets2: {
    type: Number,
    default: 0,
  },
  originalMarkets2: { type: Number, default: 0 },
  marketsEco2: { type: Number, default: 0 },
  marketsSelectDefault2: { type: Boolean, default: false },
  marketsSelectDefaultAndEco2: { type: Boolean, default: false },
  marketsSelectEco2: { type: Boolean, default: false },
  publicTransportationLong2: {
    type: Number,
    default: 0,
  },
  originalPublicTransportationLong2: { type: Number, default: 0 },
  publicTransportationLongEco2: { type: Number, default: 0 },
  publicTransportationLongSelectDefault2: { type: Boolean, default: false },
  publicTransportationLongSelectDefaultAndEco2: {
    type: Boolean,
    default: false,
  },
  publicTransportationLongSelectEco2: { type: Boolean, default: false },
  coffee2: {
    type: Number,
    default: 0,
  },
  originalCoffee2: { type: Number, default: 0 },
  coffeeEco2: { type: Number, default: 0 },
  coffeeSelectDefault2: { type: Boolean, default: false },
  coffeeSelectDefaultAndEco2: { type: Boolean, default: false },
  coffeeSelectEco2: { type: Boolean, default: false },
  bakery2: {
    type: Number,
    default: 0,
  },
  originalBakery2: { type: Number, default: 0 },
  bakeryEco2: { type: Number, default: 0 },
  bakerySelectDefault2: { type: Boolean, default: false },
  bakerySelectDefaultAndEco2: { type: Boolean, default: false },
  bakerySelectEco2: { type: Boolean, default: false },
  nightLife2: {
    type: Number,
    default: 0,
  },
  originalNightLife2: { type: Number, default: 0 },
  nightLifeEco2: { type: Number, default: 0 },
  nightLifeSelectDefault2: { type: Boolean, default: false },
  nightLifeSelectDefaultAndEco2: { type: Boolean, default: false },
  nightLifeSelectEco2: { type: Boolean, default: false },
  groceries2: {
    type: Number,
    default: 0,
  },
  originalGroceries2: { type: Number, default: 0 },
  groceriesEco2: { type: Number, default: 0 },
  groceriesSelectDefault2: { type: Boolean, default: false },
  groceriesSelectDefaultAndEco2: { type: Boolean, default: false },
  groceriesSelectEco2: { type: Boolean, default: false },
  souveneirs2: {
    type: Number,
    default: 0,
  },
  originalSouveneirs2: { type: Number, default: 0 },
  souveneirsEco2: { type: Number, default: 0 },
  souveneirsSelectDefault2: { type: Boolean, default: false },
  souveneirsSelectDefaultAndEco2: { type: Boolean, default: false },
  souveneirsSelectEco2: { type: Boolean, default: false },
  shopping2: {
    type: Number,
    default: 0,
  },
  originalShopping2: { type: Number, default: 0 },
  shoppingEco2: { type: Number, default: 0 },
  shoppingSelectDefault2: { type: Boolean, default: false },
  shoppingSelectDefaultAndEco2: { type: Boolean, default: false },
  shoppingSelectEco2: { type: Boolean, default: false },
  currencyExchange2: {
    type: Number,
    default: 0,
  },
  originalCurrencyExchange2: { type: Number, default: 0 },
  currencyExchangeEco2: { type: Number, default: 0 },
  currencyExchangeSelectDefault2: { type: Boolean, default: false },
  currencyExchangeSelectDefaultAndEco2: { type: Boolean, default: false },
  currencyExchangeSelectEco2: { type: Boolean, default: false },
  luggage2: {
    type: Number,
    default: 0,
  },
  originalLuggage2: { type: Number, default: 0 },
  luggageEco2: { type: Number, default: 0 },
  luggageSelectDefault2: { type: Boolean, default: false },
  luggageSelectDefaultAndEco2: { type: Boolean, default: false },
  luggageSelectEco2: { type: Boolean, default: false },
  dayTrip2: {
    type: Number,
    default: 0,
  },
  originalDayTrip2: { type: Number, default: 0 },
  dayTripEco2: { type: Number, default: 0 },
  dayTripSelectDefault2: { type: Boolean, default: false },
  dayTripSelectDefaultAndEco2: { type: Boolean, default: false },
  dayTripSelectEco2: { type: Boolean, default: false },
  travelPlugAdapter2: {
    type: Number,
    default: 0,
  },
  originalTravelPlugAdapter2: { type: Number, default: 0 },
  travelPlugAdapterEco2: { type: Number, default: 0 },
  travelPlugAdapterSelectDefault2: { type: Boolean, default: false },
  travelPlugAdapterSelectDefaultAndEco2: { type: Boolean, default: false },
  travelPlugAdapterSelectEco2: { type: Boolean, default: false },
  choose2: {
    type: String,
    default: "",
  },
  charge2: {
    type: String,
    default: "",
  },
  account2: {
    type: String,
    default: "",
  },
  wait2: {
    type: String,
    default: "",
  },
  sense2: {
    type: String,
    default: "",
  },
  engage2: {
    type: String,
    default: "",
  },
  understood2: {
    type: String,
    default: "",
  },
  listen2: {
    type: String,
    default: "",
  },
  effectiveness2: {
    type: String,
    default: "",
  },
  bestOption2: {
    type: String,
    default: "",
  },
  optionQuickly2: {
    type: String,
    default: "",
  },
  productivity2: {
    type: String,
    default: "",
  },
  performance2: {
    type: String,
    default: "",
  },
  utilize2: {
    type: String,
    default: "",
  },
  reflect2: {
    type: String,
    default: "",
  },
  identify2: {
    type: String,
    default: "",
  },
  connection2: {
    type: String,
    default: "",
  },
  agentCommunicate2: {
    type: String,
    default: "",
  },
  typePerson2: {
    type: String,
    default: "",
  },
  agentMe2: {
    type: String,
    default: "",
  },
  suits2: {
    type: String,
    default: "",
  },
  productsFollowup2: {
    type: String,
    default: "",
  },
  actionsFollowup2: {
    type: String,
    default: "",
  },
  purchaseFollowup2: {
    type: String,
    default: "",
  },
  resourcesFollowup2: {
    type: String,
    default: "",
  },
  responsibleFollowup2: {
    type: String,
    default: "",
  },
  inconvenienceFollowup2: {
    type: String,
    default: "",
  },
  attentionCheck3: {
    type: Boolean,
    default: false,
  },
  flight3: {
    type: Number,
    default: 0,
  },
  originalFlight3: { type: Number, default: 0 },
  flightEco3: { type: Number, default: 0 },
  flightSelectDefault3: { type: Boolean, default: false },
  flightSelectDefaultAndEco3: { type: Boolean, default: false },
  flightSelectEco3: { type: Boolean, default: false },
  rentalCar3: {
    type: Number,
    default: 0,
  },
  originalRentalCar3: { type: Number, default: 0 },
  rentalCarEco3: { type: Number, default: 0 },
  rentalCarSelectDefault3: { type: Boolean, default: false },
  rentalCarSelectDefaultAndEco3: { type: Boolean, default: false },
  rentalCarSelectEco3: { type: Boolean, default: false },
  hotel3: {
    type: Number,
    default: 0,
  },
  originalHotel3: { type: Number, default: 0 },
  hotelEco3: { type: Number, default: 0 },
  hotelSelectDefault3: { type: Boolean, default: false },
  hotelSelectDefaultAndEco3: { type: Boolean, default: false },
  hotelSelectEco3: { type: Boolean, default: false },
  dinner3: {
    type: Number,
    default: 0,
  },
  originalDinner3: { type: Number, default: 0 },
  dinnerEco3: { type: Number, default: 0 },
  dinnerSelectDefault3: { type: Boolean, default: false },
  dinnerSelectDefaultAndEco3: { type: Boolean, default: false },
  dinnerSelectEco3: { type: Boolean, default: false },
  lunch3: {
    type: Number,
    default: 0,
  },
  originalLunch3: { type: Number, default: 0 },
  lunchEco3: { type: Number, default: 0 },
  lunchSelectDefault3: { type: Boolean, default: false },
  lunchSelectDefaultAndEco3: { type: Boolean, default: false },
  lunchSelectEco3: { type: Boolean, default: false },
  breakfast3: {
    type: Number,
    default: 0,
  },
  originalBreakfast3: { type: Number, default: 0 },
  breakfastEco3: { type: Number, default: 0 },
  breakfastSelectDefault3: { type: Boolean, default: false },
  breakfastSelectDefaultAndEco3: { type: Boolean, default: false },
  breakfastSelectEco3: { type: Boolean, default: false },
  museums3: {
    type: Number,
    default: 0,
  },
  originalMuseums3: { type: Number, default: 0 },
  museumsEco3: { type: Number, default: 0 },
  museumsSelectDefault3: { type: Boolean, default: false },
  museumsSelectDefaultAndEco3: { type: Boolean, default: false },
  museumsSelectEco3: { type: Boolean, default: false },
  markets3: {
    type: Number,
    default: 0,
  },
  originalMarkets3: { type: Number, default: 0 },
  marketsEco3: { type: Number, default: 0 },
  marketsSelectDefault3: { type: Boolean, default: false },
  marketsSelectDefaultAndEco3: { type: Boolean, default: false },
  marketsSelectEco3: { type: Boolean, default: false },
  publicTransportationLong3: {
    type: Number,
    default: 0,
  },
  originalPublicTransportationLong3: { type: Number, default: 0 },
  publicTransportationLongEco3: { type: Number, default: 0 },
  publicTransportationLongSelectDefault3: { type: Boolean, default: false },
  publicTransportationLongSelectDefaultAndEco3: {
    type: Boolean,
    default: false,
  },
  publicTransportationLongSelectEco3: { type: Boolean, default: false },
  coffee3: {
    type: Number,
    default: 0,
  },
  originalCoffee3: { type: Number, default: 0 },
  coffeeEco3: { type: Number, default: 0 },
  coffeeSelectDefault3: { type: Boolean, default: false },
  coffeeSelectDefaultAndEco3: { type: Boolean, default: false },
  coffeeSelectEco3: { type: Boolean, default: false },
  bakery3: {
    type: Number,
    default: 0,
  },
  originalBakery3: { type: Number, default: 0 },
  bakeryEco3: { type: Number, default: 0 },
  bakerySelectDefault3: { type: Boolean, default: false },
  bakerySelectDefaultAndEco3: { type: Boolean, default: false },
  bakerySelectEco3: { type: Boolean, default: false },
  nightLife3: {
    type: Number,
    default: 0,
  },
  originalNightLife3: { type: Number, default: 0 },
  nightLifeEco3: { type: Number, default: 0 },
  nightLifeSelectDefault3: { type: Boolean, default: false },
  nightLifeSelectDefaultAndEco3: { type: Boolean, default: false },
  nightLifeSelectEco3: { type: Boolean, default: false },
  groceries3: {
    type: Number,
    default: 0,
  },
  originalGroceries3: { type: Number, default: 0 },
  groceriesEco3: { type: Number, default: 0 },
  groceriesSelectDefault3: { type: Boolean, default: false },
  groceriesSelectDefaultAndEco3: { type: Boolean, default: false },
  groceriesSelectEco3: { type: Boolean, default: false },
  souveneirs3: {
    type: Number,
    default: 0,
  },
  originalSouveneirs3: { type: Number, default: 0 },
  souveneirsEco3: { type: Number, default: 0 },
  souveneirsSelectDefault3: { type: Boolean, default: false },
  souveneirsSelectDefaultAndEco3: { type: Boolean, default: false },
  souveneirsSelectEco3: { type: Boolean, default: false },
  shopping3: {
    type: Number,
    default: 0,
  },
  originalShopping3: { type: Number, default: 0 },
  shoppingEco3: { type: Number, default: 0 },
  shoppingSelectDefault3: { type: Boolean, default: false },
  shoppingSelectDefaultAndEco3: { type: Boolean, default: false },
  shoppingSelectEco3: { type: Boolean, default: false },
  currencyExchange3: {
    type: Number,
    default: 0,
  },
  originalCurrencyExchange3: { type: Number, default: 0 },
  currencyExchangeEco3: { type: Number, default: 0 },
  currencyExchangeSelectDefault3: { type: Boolean, default: false },
  currencyExchangeSelectDefaultAndEco3: { type: Boolean, default: false },
  currencyExchangeSelectEco3: { type: Boolean, default: false },
  luggage3: {
    type: Number,
    default: 0,
  },
  originalLuggage3: { type: Number, default: 0 },
  luggageEco3: { type: Number, default: 0 },
  luggageSelectDefault3: { type: Boolean, default: false },
  luggageSelectDefaultAndEco3: { type: Boolean, default: false },
  luggageSelectEco3: { type: Boolean, default: false },
  dayTrip3: {
    type: Number,
    default: 0,
  },
  originalDayTrip3: { type: Number, default: 0 },
  dayTripEco3: { type: Number, default: 0 },
  dayTripSelectDefault3: { type: Boolean, default: false },
  dayTripSelectDefaultAndEco3: { type: Boolean, default: false },
  dayTripSelectEco3: { type: Boolean, default: false },
  travelPlugAdapter3: {
    type: Number,
    default: 0,
  },
  originalTravelPlugAdapter3: { type: Number, default: 0 },
  travelPlugAdapterEco3: { type: Number, default: 0 },
  travelPlugAdapterSelectDefault3: { type: Boolean, default: false },
  travelPlugAdapterSelectDefaultAndEco3: { type: Boolean, default: false },
  travelPlugAdapterSelectEco3: { type: Boolean, default: false },
  choose3: {
    type: String,
    default: "",
  },
  charge3: {
    type: String,
    default: "",
  },
  account3: {
    type: String,
    default: "",
  },
  wait3: {
    type: String,
    default: "",
  },
  sense3: {
    type: String,
    default: "",
  },
  engage3: {
    type: String,
    default: "",
  },
  understood3: {
    type: String,
    default: "",
  },
  listen3: {
    type: String,
    default: "",
  },
  effectiveness3: {
    type: String,
    default: "",
  },
  bestOption3: {
    type: String,
    default: "",
  },
  optionQuickly3: {
    type: String,
    default: "",
  },
  productivity3: {
    type: String,
    default: "",
  },
  performance3: {
    type: String,
    default: "",
  },
  utilize3: {
    type: String,
    default: "",
  },
  reflect3: {
    type: String,
    default: "",
  },
  identify3: {
    type: String,
    default: "",
  },
  connection3: {
    type: String,
    default: "",
  },
  agentCommunicate3: {
    type: String,
    default: "",
  },
  typePerson3: {
    type: String,
    default: "",
  },
  agentMe3: {
    type: String,
    default: "",
  },
  suits3: {
    type: String,
    default: "",
  },
  productsFollowup3: {
    type: String,
    default: "",
  },
  actionsFollowup3: {
    type: String,
    default: "",
  },
  purchaseFollowup3: {
    type: String,
    default: "",
  },
  resourcesFollowup3: {
    type: String,
    default: "",
  },
  responsibleFollowup3: {
    type: String,
    default: "",
  },
  inconvenienceFollowup3: {
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
  feedback: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

// Method to delete all documents from the "user" collection
User.deleteAll = async function () {
  await this.deleteMany({});
};

module.exports = mongoose.model("user", userSchema);

// module.exports = User;
