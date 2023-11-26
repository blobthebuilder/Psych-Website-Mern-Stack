import { useEffect, useState } from "react";
import PersonalityHeader from "./components/PersonalityHeader";
import LandingPage from "./components/LandingPage";
import ConsentFormPage from "./components/ConsentFormPage";
import GeneralInstructions1 from "./components/GeneralInstructions1";
import GeneralInstructions2 from "./components/GeneralInstructions2";
import GeneralInstructions3 from "./components/GeneralInstructions3";
import Introduction from "./components/Introduction";
import Question1 from "./components/Question1";
import Question2A from "./components/Question2A";
import Question2B from "./components/Question2B";
import Question2C from "./components/Question2C";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import GreenQuestion from "./components/GreenQuestion";
import Demographics from "./components/Demographics";
import SubmitPage from "./components/SubmitPage";
import Loading from "./components/Loading";
import Instructions1 from "./components/Instructions1.js";
import Instructions2 from "./components/Instructions2.js";
import AttentionCheck from "./components/AttentionCheck";
import AttentionCheckAnswer from "./components/AttentionCheckAnswer";
import ItineraryHeader from "./components/ItineraryHeader.js";
import Itinerary from "./components/Itinerary.js";
import FollowupQuestions1 from "./components/FollowupQuestions.js";
import FollowupQuestions2 from "./components/FollowupQuestions2.js";
import FollowupQuestions3 from "./components/FollowupQuestions3.js";
import FollowupQuestionsGreen from "./components/FollowupQuestionsGreen.js";
import AlgorithmKnowledge from "./components/AlgorithmKnowledge.js";
import AlgorithmAwareness from "./components/AlgorithmAwareness.js";
import End from "./components/End.js";

import {
  shuffleAfternoon,
  shuffleHotels,
  shuffleRestaurants,
  shuffleVacations,
  shuffleActivities,
  shuffleAccommodation,
  shuffleCommunication,
  shuffleCuisine,
  randomizeItineraryFeatures,
  randomizeRecommendedAndEco,
  msToTime,
} from "./utils.js";
function App() {
  const [step, setStep] = useState(1);
  const [showHeader, setShowHeader] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [hotelsArr, setHotelsArr] = useState([]);
  const [afternoonArr, setAfternoonArr] = useState([]);
  const [restaurantArr, setRestaurantArr] = useState([]);
  const [vacationsArr, setVacationsArr] = useState([]);
  const [activitiesArr, setActivitiesArr] = useState([]);
  const [accommodationArr, setAccommodationArr] = useState([]);
  const [communicationArr, setCommunicationArr] = useState([]);
  const [cuisineArr, setCuisineArr] = useState([]);

  const [showItineraryHeader, setShowItineraryHeader] = useState(false);

  const [agentPath, setAgentPath] = useState(0);
  const [agent1, setAgent1] = useState("Personal");
  const [agent2, setAgent2] = useState("General");
  const [agent3, setAgent3] = useState("Unprogrammed");

  const [curAgent, setCurAgent] = useState("Personal");
  const [attentionCheckSelection, setAttentionCheckSelection] = useState("");
  const [correctAttentionCheck1, setCorrectAttentionCheck1] = useState(false);
  const [correctAttentionCheck2, setCorrectAttentionCheck2] = useState(false);
  const [correctAttentionCheck3, setCorrectAttentionCheck3] = useState(false);

  const [ruggedSelection, setRuggedSelection] = useState("");
  const [excitedSelection, setExcitedSelection] = useState("");
  const [uncomfortableSelection, setUncomfortableSelection] = useState("");
  const [dominatingSelection, setDominatingSelection] = useState("");
  const [thriftySelection, setThriftySelection] = useState("");
  const [pleasantSelection, setPleasantSelection] = useState("");
  const [contemporarySelection, setContemporarySelection] = useState("");
  const [organizedSelection, setOrganizedSelection] = useState("");
  const [rationalSelection, setRationalSelection] = useState("");
  const [youthfulSelection, setYouthfulSelection] = useState("");
  const [formalSelection, setFormalSelection] = useState("");
  const [orthodoxSelection, setOrthodoxSelection] = useState("");
  const [complexSelection, setComplexSelection] = useState("");
  const [colorlessSelection, setColorlessSelection] = useState("");
  const [modestSelection, setModestSelection] = useState("");

  const [productsSelection, setProductsSelection] = useState("");
  const [environDecisSelection, setEnvironDecisSelection] = useState("");
  const [purchaseEnvironSelection, setPurchaseEnvironSelection] = useState("");
  const [resourcesSelection, setResourcesSelection] = useState("");
  const [environRespSelection, setEnvironRespSelection] = useState("");
  const [inconvenienceSelection, setInconvenienceSelection] = useState("");

  const [hotelSelection, setHotelSelection] = useState("");
  const [afternoonSelection, setAfternoonSelection] = useState("");
  const [restaurantSelection, setRestaurantSelection] = useState("");

  const [vacationSelection, setVacationSelection] = useState("");
  const [activitiesSelection, setActivitiesSelection] = useState({
    "outdoor activities": false,
    "cultural experiences": false,
    relaxation: false,
    adventure: false,
    sports: false,
    "history and heritage": false,
    "food and wine": false,
    "nightlife and entertainment": false,
    shopping: false,
    "volunteer tourism": false,
  });
  const [budgetSelection, setBudgetSelection] = useState("");
  const [accommodationSelection, setAccommodationSelection] = useState("");
  const [activityLevelSelection, setActivityLevelSelection] = useState("");
  const [pathSelection, setPathSelection] = useState("");
  const [cultureSelection, setCultureSelection] = useState("");
  const [communicationSelection, setCommunicationSelection] = useState("");
  const [languageSelection, setLanguageSelection] = useState("");
  const [cuisineSelection, setCuisineSelection] = useState("");
  const [relaxationLevelSelection, setRelaxationLevelSelection] = useState("");

  const [interestsSelection, setInterestsSelection] = useState({
    adventuretravel: false,
    "art&design": false,
    "arts&crafts": false,
    "beauty&grooming": false,
    books: false,
    cameras: false,
    camping: false,
    computers: false,
    cooking: false,
    diy: false,
    dogs: false,
    electronics: false,
    fallfashion: false,
    fashionaccessories: false,
    fitness: false,
    "food&drink": false,
    "fun&hobbies": false,
    giftideas: false,
    "health&wellness": false,
    healthyfood: false,
    hiking: false,
    "home&garden": false,
    homedecor: false,
    homeimprovement: false,
    interiordesign: false,
    "kids&parenting": false,
    kitchens: false,
    makeup: false,
    mensfashion: false,
    "movies&tv": false,
    music: false,
    outdooractivities: false,
    outdoors: false,
    petcare: false,
    "pets&animals": false,
    photography: false,
    recipes: false,
    shoes: false,
    skincare: false,
    sport: false,
    strangefinds: false,
    "style&fashion": false,
    technology: false,
    "toys&games": false,
    travel: false,
    womensaccessories: false,
    womensfashion: false,
  });

  const [genderSelection, setGenderSelection] = useState({
    female: false,
    male: false,
    "genderqueer gender nonbinary or genderfluid": false,
    "Transgender female": false,
    "Transgender male": false,
    "Prefer not to answer": false,
  });
  const [genderText, setGenderText] = useState("");
  const [incomeSelection, setIncomeSelection] = useState("");
  const [ladderSelection, setLadderSelection] = useState("");
  const [educationSelection, setEducationSelection] = useState("");
  const [politicalSelection, setPoliticalSelection] = useState("");
  const [economicSelection, setEconomicSelection] = useState("");
  const [socialSelection, setSocialSelection] = useState("");
  const [ageSelection, setAgeSelection] = useState("");
  const [raceSelection, setRaceSelection] = useState({
    "american indian or alaska native": false,
    asian: false,
    "black or african american": false,
    "hispanic latino or spanish": false,
    "middle eastern or arab": false,
    "native hawaiian or other pacific islander": false,
    white: false,
  });
  const [raceText, setRaceText] = useState("");
  const [residenceSelection, setResidenceSelection] = useState("");
  const [internetAccessSelection, setInternetAccessSelection] = useState("");
  const [internetLookupSelection, setInternetLookupSelection] = useState("");
  const [eCommunicationUseSelection, setECommunicationUseSelection] =
    useState("");

  const [flightSelection1, setFlightSelection1] = useState("");
  const [flightSelection2, setFlightSelection2] = useState("");
  const [flightSelection3, setFlightSelection3] = useState("");

  const [rentalCarSelection1, setRentalCarSelection1] = useState("");
  const [rentalCarSelection2, setRentalCarSelection2] = useState("");
  const [rentalCarSelection3, setRentalCarSelection3] = useState("");

  const [hotelSelection1, setHotelSelection1] = useState("");
  const [hotelSelection2, setHotelSelection2] = useState("");
  const [hotelSelection3, setHotelSelection3] = useState("");

  const [dinnerSelection1, setDinnerSelection1] = useState("");
  const [dinnerSelection2, setDinnerSelection2] = useState("");
  const [dinnerSelection3, setDinnerSelection3] = useState("");

  const [lunchSelection1, setLunchSelection1] = useState("");
  const [lunchSelection2, setLunchSelection2] = useState("");
  const [lunchSelection3, setLunchSelection3] = useState("");

  const [breakfastSelection1, setBreakfastSelection1] = useState("");
  const [breakfastSelection2, setBreakfastSelection2] = useState("");
  const [breakfastSelection3, setBreakfastSelection3] = useState("");

  const [museumsSelection1, setMuseumsSelection1] = useState("");
  const [museumsSelection2, setMuseumsSelection2] = useState("");
  const [museumsSelection3, setMuseumsSelection3] = useState("");

  const [marketsSelection1, setMarketsSelection1] = useState("");
  const [marketsSelection2, setMarketsSelection2] = useState("");
  const [marketsSelection3, setMarketsSelection3] = useState("");

  const [flamencoShowsSelection1, setFlamencoShowsSelection1] = useState("");
  const [flamencoShowsSelection2, setFlamencoShowsSelection2] = useState("");
  const [flamencoShowsSelection3, setFlamencoShowsSelection3] = useState("");

  const [
    publicTransportationShortSelection1,
    setPublicTransportationShortSelection1,
  ] = useState("");
  const [
    publicTransportationShortSelection2,
    setPublicTransportationShortSelection2,
  ] = useState("");
  const [
    publicTransportationShortSelection3,
    setPublicTransportationShortSelection3,
  ] = useState("");

  const [
    publicTransportationLongSelection1,
    setPublicTransportationLongSelection1,
  ] = useState("");
  const [
    publicTransportationLongSelection2,
    setPublicTransportationLongSelection2,
  ] = useState("");
  const [
    publicTransportationLongSelection3,
    setPublicTransportationLongSelection3,
  ] = useState("");

  const [coffeeSelection1, setCoffeeSelection1] = useState("");
  const [coffeeSelection2, setCoffeeSelection2] = useState("");
  const [coffeeSelection3, setCoffeeSelection3] = useState("");

  const [bakerySelection1, setBakerySelection1] = useState("");
  const [bakerySelection2, setBakerySelection2] = useState("");
  const [bakerySelection3, setBakerySelection3] = useState("");

  const [nightLifeSelection1, setNightLifeSelection1] = useState("");
  const [nightLifeSelection2, setNightLifeSelection2] = useState("");
  const [nightLifeSelection3, setNightLifeSelection3] = useState("");

  const [barsSelection1, setBarsSelection1] = useState("");
  const [barsSelection2, setBarsSelection2] = useState("");
  const [barsSelection3, setBarsSelection3] = useState("");

  const [groceriesSelection1, setGroceriesSelection1] = useState("");
  const [groceriesSelection2, setGroceriesSelection2] = useState("");
  const [groceriesSelection3, setGroceriesSelection3] = useState("");

  const [souveneirsSelection1, setSouveneirsSelection1] = useState("");
  const [souveneirsSelection2, setSouveneirsSelection2] = useState("");
  const [souveneirsSelection3, setSouveneirsSelection3] = useState("");

  const [shoppingSelection1, setShoppingSelection1] = useState("");
  const [shoppingSelection2, setShoppingSelection2] = useState("");
  const [shoppingSelection3, setShoppingSelection3] = useState("");

  const [
    internationalPhoneServiceSelection1,
    setInternationalPhoneServiceSelection1,
  ] = useState("");
  const [
    internationalPhoneServiceSelection2,
    setInternationalPhoneServiceSelection2,
  ] = useState("");
  const [
    internationalPhoneServiceSelection3,
    setInternationalPhoneServiceSelection3,
  ] = useState("");

  const [currencyExchangeSelection1, setCurrencyExchangeSelection1] =
    useState("");
  const [currencyExchangeSelection2, setCurrencyExchangeSelection2] =
    useState("");
  const [currencyExchangeSelection3, setCurrencyExchangeSelection3] =
    useState("");

  const [luggageSelection1, setLuggageSelection1] = useState("");
  const [luggageSelection2, setLuggageSelection2] = useState("");
  const [luggageSelection3, setLuggageSelection3] = useState("");

  const [dayTripSelection1, setDayTripSelection1] = useState("");
  const [dayTripSelection2, setDayTripSelection2] = useState("");
  const [dayTripSelection3, setDayTripSelection3] = useState("");

  const [travelInsuranceSelection1, setTravelInsuranceSelection1] =
    useState("");
  const [travelInsuranceSelection2, setTravelInsuranceSelection2] =
    useState("");
  const [travelInsuranceSelection3, setTravelInsuranceSelection3] =
    useState("");

  const [travelPlugAdapterSelection1, setTravelPlugAdapterSelection1] =
    useState("");
  const [travelPlugAdapterSelection2, setTravelPlugAdapterSelection2] =
    useState("");
  const [travelPlugAdapterSelection3, setTravelPlugAdapterSelection3] =
    useState("");

  const [chooseSelection1, setChooseSelection1] = useState("");
  const [chooseSelection2, setChooseSelection2] = useState("");
  const [chooseSelection3, setChooseSelection3] = useState("");

  const [chargeSelection1, setChargeSelection1] = useState("");
  const [chargeSelection2, setChargeSelection2] = useState("");
  const [chargeSelection3, setChargeSelection3] = useState("");

  const [accountSelection1, setAccountSelection1] = useState("");
  const [accountSelection2, setAccountSelection2] = useState("");
  const [accountSelection3, setAccountSelection3] = useState("");

  const [waitSelection1, setWaitSelection1] = useState("");
  const [waitSelection2, setWaitSelection2] = useState("");
  const [waitSelection3, setWaitSelection3] = useState("");

  const [senseSelection1, setSenseSelection1] = useState("");
  const [senseSelection2, setSenseSelection2] = useState("");
  const [senseSelection3, setSenseSelection3] = useState("");

  const [helpSelection1, setHelpSelection1] = useState("");
  const [helpSelection2, setHelpSelection2] = useState("");
  const [helpSelection3, setHelpSelection3] = useState("");

  const [understoodSelection1, setUnderstoodSelection1] = useState("");
  const [understoodSelection2, setUnderstoodSelection2] = useState("");
  const [understoodSelection3, setUnderstoodSelection3] = useState("");

  const [listenSelection1, setListenSelection1] = useState("");
  const [listenSelection2, setListenSelection2] = useState("");
  const [listenSelection3, setListenSelection3] = useState("");

  const [effectivenessSelection1, setEffectivenessSelection1] = useState("");
  const [effectivenessSelection2, setEffectivenessSelection2] = useState("");
  const [effectivenessSelection3, setEffectivenessSelection3] = useState("");

  const [bestOptionSelection1, setBestOptionSelection1] = useState("");
  const [bestOptionSelection2, setBestOptionSelection2] = useState("");
  const [bestOptionSelection3, setBestOptionSelection3] = useState("");

  const [optionQuicklySelection1, setOptionQuicklySelection1] = useState("");
  const [optionQuicklySelection2, setOptionQuicklySelection2] = useState("");
  const [optionQuicklySelection3, setOptionQuicklySelection3] = useState("");

  const [productivitySelection1, setProductivitySelection1] = useState("");
  const [productivitySelection2, setProductivitySelection2] = useState("");
  const [productivitySelection3, setProductivitySelection3] = useState("");

  const [performanceSelection1, setPerformanceSelection1] = useState("");
  const [performanceSelection2, setPerformanceSelection2] = useState("");
  const [performanceSelection3, setPerformanceSelection3] = useState("");

  const [utilizeSelection1, setUtilizeSelection1] = useState("");
  const [utilizeSelection2, setUtilizeSelection2] = useState("");
  const [utilizeSelection3, setUtilizeSelection3] = useState("");

  const [reflectSelection1, setReflectSelection1] = useState("");
  const [reflectSelection2, setReflectSelection2] = useState("");
  const [reflectSelection3, setReflectSelection3] = useState("");
  const [identifySelection1, setIdentifySelection1] = useState("");
  const [identifySelection2, setIdentifySelection2] = useState("");
  const [identifySelection3, setIdentifySelection3] = useState("");
  const [connectionSelection1, setConnectionSelection1] = useState("");
  const [connectionSelection2, setConnectionSelection2] = useState("");
  const [connectionSelection3, setConnectionSelection3] = useState("");
  const [agentCommunicateSelection1, setAgentCommunicateSelection1] =
    useState("");
  const [agentCommunicateSelection2, setAgentCommunicateSelection2] =
    useState("");
  const [agentCommunicateSelection3, setAgentCommunicateSelection3] =
    useState("");
  const [typePersonSelection1, setTypePersonSelection1] = useState("");
  const [typePersonSelection2, setTypePersonSelection2] = useState("");
  const [typePersonSelection3, setTypePersonSelection3] = useState("");
  const [agentMeSelection1, setAgentMeSelection1] = useState("");
  const [agentMeSelection2, setAgentMeSelection2] = useState("");
  const [agentMeSelection3, setAgentMeSelection3] = useState("");
  const [suitsSelection1, setSuitsSelection1] = useState("");
  const [suitsSelection2, setSuitsSelection2] = useState("");
  const [suitsSelection3, setSuitsSelection3] = useState("");
  const [productsFollowupSelection1, setProductsFollowupSelection1] =
    useState("");
  const [productsFollowupSelection2, setProductsFollowupSelection2] =
    useState("");
  const [productsFollowupSelection3, setProductsFollowupSelection3] =
    useState("");
  const [actionsFollowupSelection1, setActionsFollowupSelection1] =
    useState("");
  const [actionsFollowupSelection2, setActionsFollowupSelection2] =
    useState("");
  const [actionsFollowupSelection3, setActionsFollowupSelection3] =
    useState("");
  const [purchaseFollowupSelection1, setPurchaseFollowupSelection1] =
    useState("");
  const [purchaseFollowupSelection2, setPurchaseFollowupSelection2] =
    useState("");
  const [purchaseFollowupSelection3, setPurchaseFollowupSelection3] =
    useState("");
  const [resourcesFollowupSelection1, setResourcesFollowupSelection1] =
    useState("");
  const [resourcesFollowupSelection2, setResourcesFollowupSelection2] =
    useState("");
  const [resourcesFollowupSelection3, setResourcesFollowupSelection3] =
    useState("");
  const [responsibleFollowupSelection1, setResponsibleFollowupSelection1] =
    useState("");
  const [responsibleFollowupSelection2, setResponsibleFollowupSelection2] =
    useState("");
  const [responsibleFollowupSelection3, setResponsibleFollowupSelection3] =
    useState("");
  const [inconvenienceFollowupSelection1, setInconvenienceFollowupSelection1] =
    useState("");
  const [inconvenienceFollowupSelection2, setInconvenienceFollowupSelection2] =
    useState("");
  const [inconvenienceFollowupSelection3, setInconvenienceFollowupSelection3] =
    useState("");
  const [recognizeSelection, setRecognizeSelection] = useState("");
  const [developSelection, setDevelopSelection] = useState("");
  const [influenceSelection, setInfluenceSelection] = useState("");
  const [databaseSelection, setDatabaseSelection] = useState("");
  const [searchSelection, setSearchSelection] = useState("");
  const [contentSelection, setContentSelection] = useState("");
  const [thinkSelection, setThinkSelection] = useState("");
  const [censorshipSelection, setCensorshipSelection] = useState("");
  const [chancesSelection, setChancesSelection] = useState("");
  const [reportsSelection, setReportsSelection] = useState("");
  const [humansSelection, setHumansSelection] = useState("");
  const [alexaSelection, setAlexaSelection] = useState("");
  const [tvSelection, setTVSelection] = useState("");
  const [wearableSelection, setWearableSelection] = useState("");
  const [browserSelection, setBrowserSelection] = useState("");
  const [paymentSelection, setPaymentSelection] = useState("");
  const [towersSelection, setTowersSelection] = useState("");
  const [gamesSelection, setGamesSelection] = useState("");
  const [radiosSelection, setRadiosSelection] = useState("");
  const [forecastSelection, setForecastSelection] = useState("");
  const [recommendationSelection, setRecommendationSelection] = useState("");
  const [newsSelection, setNewsSelection] = useState("");
  const [advertisementSelection, setAdvertisementSelection] = useState("");

  const [startTime, setStartTime] = useState(0);

  const handleAttentionCheckChange = (value) => {
    setAttentionCheckSelection(value);
  };

  const handleRuggedChange = (value) => {
    setRuggedSelection(value);
  };
  const handleExcitedChange = (value) => {
    setExcitedSelection(value);
  };
  const handleUncomfortableChange = (value) => {
    setUncomfortableSelection(value);
  };
  const handleDominatingChange = (value) => {
    setDominatingSelection(value);
  };
  const handleThriftyChange = (value) => {
    setThriftySelection(value);
  };
  const handlePleasantChange = (value) => {
    setPleasantSelection(value);
  };
  const handleContemporaryChange = (value) => {
    setContemporarySelection(value);
  };
  const handleOrganizedChange = (value) => {
    setOrganizedSelection(value);
  };
  const handleRationalChange = (value) => {
    setRationalSelection(value);
  };
  const handleYouthfulChange = (value) => {
    setYouthfulSelection(value);
  };
  const handleFormalChange = (value) => {
    setFormalSelection(value);
  };
  const handleOrthodoxChange = (value) => {
    setOrthodoxSelection(value);
  };
  const handleComplexChange = (value) => {
    setComplexSelection(value);
  };
  const handleColorlessChange = (value) => {
    setColorlessSelection(value);
  };
  const handleModestChange = (value) => {
    setModestSelection(value);
  };
  const handleProductsChange = (value) => {
    setProductsSelection(value);
  };
  const handleEnvironDecisChange = (value) => {
    setEnvironDecisSelection(value);
  };
  const handlePurchaseEnvironChange = (value) => {
    setPurchaseEnvironSelection(value);
  };
  const handleResourcesChange = (value) => {
    setResourcesSelection(value);
  };
  const handleEnvironRespChange = (value) => {
    setEnvironRespSelection(value);
  };
  const handleInconvenienceChange = (value) => {
    setInconvenienceSelection(value);
  };
  const handleHotelChange = (value) => {
    setHotelSelection(value);
  };
  const handleAfternoonChange = (value) => {
    setAfternoonSelection(value);
  };
  const handleRestaurantChange = (value) => {
    setRestaurantSelection(value);
  };
  const handleAccommodationChange = (value) => {
    setAccommodationSelection(value);
  };
  const handleActivitiesChange = (event) => {
    const { value, checked } = event.target;
    setActivitiesSelection((prevValues) => ({
      ...prevValues,
      [value]: checked,
    }));
  };
  const handleVacationChange = (value) => {
    setVacationSelection(value);
  };
  const handleBudgetChange = (value) => {
    setBudgetSelection(value);
  };
  const handleCommunicationChange = (value) => {
    setCommunicationSelection(value);
  };
  const handleCuisineChange = (value) => {
    setCuisineSelection(value);
  };
  const handleActivityLevelChange = (value) => {
    setActivityLevelSelection(value);
  };
  const handleCultureChange = (value) => {
    setCultureSelection(value);
  };
  const handlePathChange = (value) => {
    setPathSelection(value);
  };
  const handleLanguageChange = (value) => {
    setLanguageSelection(value);
  };
  const handleRelaxationChange = (value) => {
    setRelaxationLevelSelection(value);
  };
  const handleInterestsChange = (event) => {
    const { name, checked } = event.target;
    setInterestsSelection((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const handleGenderChange = (event) => {
    const { name, checked } = event.target;
    setGenderSelection((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const handleGenderTextChange = (value) => {
    setGenderText(value);
  };
  const handleIncomeChange = (value) => {
    setIncomeSelection(value);
  };
  const handleLadderChange = (value) => {
    setLadderSelection(value);
  };
  const handleEducationChange = (value) => {
    setEducationSelection(value);
  };
  const handlePoliticalChange = (value) => {
    setPoliticalSelection(value);
  };
  const handleEconomicChange = (value) => {
    setEconomicSelection(value);
  };
  const handleSocialChange = (value) => {
    setSocialSelection(value);
  };
  const handleAgeChange = (value) => {
    setAgeSelection(value);
  };
  const handleRaceChange = (event) => {
    const { name, checked } = event.target;
    setRaceSelection((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const handleRaceTextChange = (value) => {
    setRaceText(value);
  };
  const handleResidenceChange = (value) => {
    setResidenceSelection(value);
  };
  const handleInternetAccessChange = (value) => {
    setInternetAccessSelection(value);
  };
  const handleInternetLookupChange = (value) => {
    setInternetLookupSelection(value);
  };
  const handleECommunicationUseChange = (value) => {
    setECommunicationUseSelection(value);
  };
  const handleFlightSelection1 = (value) => {
    setFlightSelection1(value);
  };
  const handleFlightSelection2 = (value) => {
    setFlightSelection2(value);
  };
  const handleFlightSelection3 = (value) => {
    setFlightSelection3(value);
  };
  const handleRentalCarSelection1 = (value) => {
    setRentalCarSelection1(value);
  };
  const handleRentalCarSelection2 = (value) => {
    setRentalCarSelection2(value);
  };
  const handleRentalCarSelection3 = (value) => {
    setRentalCarSelection3(value);
  };
  const handleHotelSelection1 = (value) => {
    setHotelSelection1(value);
  };
  const handleHotelSelection2 = (value) => {
    setHotelSelection2(value);
  };
  const handleHotelSelection3 = (value) => {
    setHotelSelection3(value);
  };
  const handleDinnerSelection1 = (value) => {
    setDinnerSelection1(value);
  };
  const handleDinnerSelection2 = (value) => {
    setDinnerSelection2(value);
  };
  const handleDinnerSelection3 = (value) => {
    setDinnerSelection3(value);
  };
  const handleLunchSelection1 = (value) => {
    setLunchSelection1(value);
  };
  const handleLunchSelection2 = (value) => {
    setLunchSelection2(value);
  };
  const handleLunchSelection3 = (value) => {
    setLunchSelection3(value);
  };
  const handleBreakfastSelection1 = (value) => {
    setBreakfastSelection1(value);
  };
  const handleBreakfastSelection2 = (value) => {
    setBreakfastSelection2(value);
  };
  const handleBreakfastSelection3 = (value) => {
    setBreakfastSelection3(value);
  };
  const handleMuseumsSelection1 = (value) => {
    setMuseumsSelection1(value);
  };
  const handleMuseumsSelection2 = (value) => {
    setMuseumsSelection2(value);
  };
  const handleMuseumsSelection3 = (value) => {
    setMuseumsSelection3(value);
  };
  const handleMarketsSelection1 = (value) => {
    setMarketsSelection1(value);
  };
  const handleMarketsSelection2 = (value) => {
    setMarketsSelection2(value);
  };
  const handleMarketsSelection3 = (value) => {
    setMarketsSelection3(value);
  };
  const handleFlamencoShowsSelection1 = (value) => {
    setFlamencoShowsSelection1(value);
  };
  const handleFlamencoShowsSelection2 = (value) => {
    setFlamencoShowsSelection2(value);
  };
  const handleFlamencoShowsSelection3 = (value) => {
    setFlamencoShowsSelection3(value);
  };
  const handlePublicTransportationShortSelection1 = (value) => {
    setPublicTransportationShortSelection1(value);
  };
  const handlePublicTransportationShortSelection2 = (value) => {
    setPublicTransportationShortSelection2(value);
  };
  const handlePublicTransportationShortSelection3 = (value) => {
    setPublicTransportationLongSelection3(value);
  };
  const handlePublicTransportationLongSelection1 = (value) => {
    setPublicTransportationLongSelection1(value);
  };
  const handlePublicTransportationLongSelection2 = (value) => {
    setPublicTransportationLongSelection2(value);
  };
  const handlePublicTransportationLongSelection3 = (value) => {
    setPublicTransportationLongSelection3(value);
  };
  const handleCoffeeSelection1 = (value) => {
    setCoffeeSelection1(value);
  };
  const handleCoffeeSelection2 = (value) => {
    setCoffeeSelection2(value);
  };
  const handleCoffeeSelection3 = (value) => {
    setCoffeeSelection3(value);
  };
  const handleBakerySelection1 = (value) => {
    setBakerySelection1(value);
  };
  const handleBakerySelection2 = (value) => {
    setBakerySelection2(value);
  };
  const handleBakerySelection3 = (value) => {
    setBakerySelection3(value);
  };
  const handleNightLifeSelection1 = (value) => {
    setNightLifeSelection1(value);
  };
  const handleNightLifeSelection2 = (value) => {
    setNightLifeSelection2(value);
  };
  const handleNightLifeSelection3 = (value) => {
    setNightLifeSelection3(value);
  };
  const handleBarsSelection1 = (value) => {
    setBarsSelection1(value);
  };
  const handleBarsSelection2 = (value) => {
    setBarsSelection2(value);
  };
  const handleBarsSelection3 = (value) => {
    setBarsSelection3(value);
  };
  const handleGroceriesSelection1 = (value) => {
    setGroceriesSelection1(value);
  };
  const handleGroceriesSelection2 = (value) => {
    setGroceriesSelection2(value);
  };
  const handleGroceriesSelection3 = (value) => {
    setGroceriesSelection3(value);
  };
  const handleSouveneirsSelection1 = (value) => {
    setSouveneirsSelection1(value);
  };
  const handleSouveneirsSelection2 = (value) => {
    setSouveneirsSelection2(value);
  };
  const handleSouveneirsSelection3 = (value) => {
    setSouveneirsSelection3(value);
  };
  const handleShoppingSelection1 = (value) => {
    setShoppingSelection1(value);
  };
  const handleShoppingSelection2 = (value) => {
    setShoppingSelection2(value);
  };
  const handleShoppingSelection3 = (value) => {
    setShoppingSelection3(value);
  };
  const handleInternationalPhoneServiceSelection1 = (value) => {
    setInternationalPhoneServiceSelection1(value);
  };
  const handleInternationalPhoneServiceSelection2 = (value) => {
    setInternationalPhoneServiceSelection2(value);
  };
  const handleInternationalPhoneServiceSelection3 = (value) => {
    setInternationalPhoneServiceSelection3(value);
  };
  const handleCurrencyExchangeSelection1 = (value) => {
    setCurrencyExchangeSelection1(value);
  };
  const handleCurrencyExchangeSelection2 = (value) => {
    setCurrencyExchangeSelection2(value);
  };
  const handleCurrencyExchangeSelection3 = (value) => {
    setCurrencyExchangeSelection3(value);
  };
  const handleLuggageSelection1 = (value) => {
    setLuggageSelection1(value);
  };
  const handleLuggageSelection2 = (value) => {
    setLuggageSelection2(value);
  };
  const handleLuggageSelection3 = (value) => {
    setLuggageSelection3(value);
  };
  const handleDayTripSelection1 = (value) => {
    setDayTripSelection1(value);
  };
  const handleDayTripSelection2 = (value) => {
    setDayTripSelection2(value);
  };
  const handleDayTripSelection3 = (value) => {
    setDayTripSelection3(value);
  };
  const handleTravelInsuranceSelection1 = (value) => {
    setTravelInsuranceSelection1(value);
  };
  const handleTravelInsuranceSelection2 = (value) => {
    setTravelInsuranceSelection2(value);
  };
  const handleTravelInsuranceSelection3 = (value) => {
    setTravelInsuranceSelection3(value);
  };
  const handleTravelPlugAdapterSelection1 = (value) => {
    setTravelPlugAdapterSelection1(value);
  };
  const handleTravelPlugAdapterSelection2 = (value) => {
    setTravelPlugAdapterSelection2(value);
  };
  const handleTravelPlugAdapterSelection3 = (value) => {
    setTravelPlugAdapterSelection3(value);
  };

  const handleChooseSelection1 = (value) => {
    setChooseSelection1(value);
  };
  const handleChooseSelection2 = (value) => {
    setChooseSelection2(value);
  };
  const handleChooseSelection3 = (value) => {
    setChooseSelection3(value);
  };
  const handleChargeSelection1 = (value) => {
    setChargeSelection1(value);
  };
  const handleChargeSelection2 = (value) => {
    setChargeSelection2(value);
  };
  const handleChargeSelection3 = (value) => {
    setChargeSelection3(value);
  };
  const handleAccountSelection1 = (value) => {
    setAccountSelection1(value);
  };
  const handleAccountSelection2 = (value) => {
    setAccountSelection2(value);
  };
  const handleAccountSelection3 = (value) => {
    setAccountSelection3(value);
  };
  const handleWaitSelection1 = (value) => {
    setWaitSelection1(value);
  };
  const handleWaitSelection2 = (value) => {
    setWaitSelection2(value);
  };
  const handleWaitSelection3 = (value) => {
    setWaitSelection3(value);
  };
  const handleSenseSelection1 = (value) => {
    setSenseSelection1(value);
  };
  const handleSenseSelection2 = (value) => {
    setSenseSelection2(value);
  };
  const handleSenseSelection3 = (value) => {
    setSenseSelection3(value);
  };
  const handleHelpSelection1 = (value) => {
    setHelpSelection1(value);
  };
  const handleHelpSelection2 = (value) => {
    setHelpSelection2(value);
  };
  const handleHelpSelection3 = (value) => {
    setHelpSelection3(value);
  };
  const handleUnderstoodSelection1 = (value) => {
    setUnderstoodSelection1(value);
  };
  const handleUnderstoodSelection2 = (value) => {
    setUnderstoodSelection2(value);
  };
  const handleUnderstoodSelection3 = (value) => {
    setUnderstoodSelection3(value);
  };
  const handleListenSelection1 = (value) => {
    setListenSelection1(value);
  };
  const handleListenSelection2 = (value) => {
    setListenSelection2(value);
  };
  const handleListenSelection3 = (value) => {
    setListenSelection3(value);
  };
  const handleEffectivenessSelection1 = (value) => {
    setEffectivenessSelection1(value);
  };
  const handleEffectivenessSelection2 = (value) => {
    setEffectivenessSelection2(value);
  };
  const handleEffectivenessSelection3 = (value) => {
    setEffectivenessSelection3(value);
  };
  const handleBestOptionSelection1 = (value) => {
    setBestOptionSelection1(value);
  };
  const handleBestOptionSelection2 = (value) => {
    setBestOptionSelection2(value);
  };
  const handleBestOptionSelection3 = (value) => {
    setBestOptionSelection3(value);
  };
  const handleOptionQuicklySelection1 = (value) => {
    setOptionQuicklySelection1(value);
  };
  const handleOptionQuicklySelection2 = (value) => {
    setOptionQuicklySelection2(value);
  };
  const handleOptionQuicklySelection3 = (value) => {
    setOptionQuicklySelection3(value);
  };
  const handleProductivitySelection1 = (value) => {
    setProductivitySelection1(value);
  };
  const handleProductivitySelection2 = (value) => {
    setProductivitySelection2(value);
  };
  const handleProductivitySelection3 = (value) => {
    setProductivitySelection3(value);
  };
  const handlePerformanceSelection1 = (value) => {
    setPerformanceSelection1(value);
  };
  const handlePerformanceSelection2 = (value) => {
    setPerformanceSelection2(value);
  };
  const handlePerformanceSelection3 = (value) => {
    setPerformanceSelection3(value);
  };
  const handleUtilizeSelection1 = (value) => {
    setUtilizeSelection1(value);
  };
  const handleUtilizeSelection2 = (value) => {
    setUtilizeSelection2(value);
  };
  const handleUtilizeSelection3 = (value) => {
    setUtilizeSelection3(value);
  };
  const handleReflectSelection1 = (value) => {
    setReflectSelection1(value);
  };
  const handleReflectSelection2 = (value) => {
    setReflectSelection2(value);
  };
  const handleReflectSelection3 = (value) => {
    setReflectSelection3(value);
  };
  const handleIdentifySelection1 = (value) => {
    setIdentifySelection1(value);
  };
  const handleIdentifySelection2 = (value) => {
    setIdentifySelection2(value);
  };
  const handleIdentifySelection3 = (value) => {
    setIdentifySelection3(value);
  };
  const handleConnectionSelection1 = (value) => {
    setConnectionSelection1(value);
  };
  const handleConnectionSelection2 = (value) => {
    setConnectionSelection2(value);
  };
  const handleConnectionSelection3 = (value) => {
    setConnectionSelection3(value);
  };
  const handleAgentCommunicateSelection1 = (value) => {
    setAgentCommunicateSelection1(value);
  };
  const handleAgentCommunicateSelection2 = (value) => {
    setAgentCommunicateSelection2(value);
  };
  const handleAgentCommunicateSelection3 = (value) => {
    setAgentCommunicateSelection3(value);
  };
  const handleTypePersonSelection1 = (value) => {
    setTypePersonSelection1(value);
  };
  const handleTypePersonSelection2 = (value) => {
    setTypePersonSelection2(value);
  };
  const handleTypePersonSelection3 = (value) => {
    setTypePersonSelection3(value);
  };
  const handleAgentMeSelection1 = (value) => {
    setAgentMeSelection1(value);
  };
  const handleAgentMeSelection2 = (value) => {
    setAgentMeSelection2(value);
  };
  const handleAgentMeSelection3 = (value) => {
    setAgentMeSelection3(value);
  };
  const handleSuitsSelection1 = (value) => {
    setSuitsSelection1(value);
  };
  const handleSuitsSelection2 = (value) => {
    setSuitsSelection2(value);
  };
  const handleSuitsSelection3 = (value) => {
    setSuitsSelection3(value);
  };
  const handleProductsFollowupSelection1 = (value) => {
    setProductsFollowupSelection1(value);
  };
  const handleProductsFollowupSelection2 = (value) => {
    setProductsFollowupSelection2(value);
  };
  const handleProductsFollowupSelection3 = (value) => {
    setProductsFollowupSelection3(value);
  };
  const handleActionsFollowupSelection1 = (value) => {
    setActionsFollowupSelection1(value);
  };
  const handleActionsFollowupSelection2 = (value) => {
    setActionsFollowupSelection2(value);
  };
  const handleActionsFollowupSelection3 = (value) => {
    setActionsFollowupSelection3(value);
  };
  const handlePurchaseFollowupSelection1 = (value) => {
    setPurchaseFollowupSelection1(value);
  };
  const handlePurchaseFollowupSelection2 = (value) => {
    setPurchaseFollowupSelection2(value);
  };
  const handlePurchaseFollowupSelection3 = (value) => {
    setPurchaseFollowupSelection3(value);
  };
  const handleResourcesFollowupSelection1 = (value) => {
    setResourcesFollowupSelection1(value);
  };
  const handleResourcesFollowupSelection2 = (value) => {
    setResourcesFollowupSelection2(value);
  };
  const handleResourcesFollowupSelection3 = (value) => {
    setResourcesFollowupSelection3(value);
  };
  const handleResponsibleFollowupSelection1 = (value) => {
    setResponsibleFollowupSelection1(value);
  };
  const handleResponsibleFollowupSelection2 = (value) => {
    setResponsibleFollowupSelection2(value);
  };
  const handleResponsibleFollowupSelection3 = (value) => {
    setResponsibleFollowupSelection3(value);
  };
  const handleInconvenienceFollowupSelection1 = (value) => {
    setInconvenienceFollowupSelection1(value);
  };
  const handleInconvenienceFollowupSelection2 = (value) => {
    setInconvenienceFollowupSelection2(value);
  };
  const handleInconvenienceFollowupSelection3 = (value) => {
    setInconvenienceFollowupSelection3(value);
  };
  const handleRecognizeChange = (value) => {
    setRecognizeSelection(value);
  };
  const handleDevelopChange = (value) => {
    setDevelopSelection(value);
  };
  const handleInfluenceChange = (value) => {
    setInfluenceSelection(value);
  };
  const handleDatabaseChange = (value) => {
    setDatabaseSelection(value);
  };
  const handleSearchChange = (value) => {
    setSearchSelection(value);
  };
  const handleContentChange = (value) => {
    setContentSelection(value);
  };
  const handleThinkChange = (value) => {
    setThinkSelection(value);
  };
  const handleCensorshipChange = (value) => {
    setCensorshipSelection(value);
  };
  const handleChancesChange = (value) => {
    setChancesSelection(value);
  };
  const handleReportsChange = (value) => {
    setReportsSelection(value);
  };
  const handleHumansChange = (value) => {
    setHumansSelection(value);
  };
  const handleAlexaChange = (value) => {
    setAlexaSelection(value);
  };
  const handleTVChange = (value) => {
    setTVSelection(value);
  };
  const handleWearableChange = (value) => {
    setWearableSelection(value);
  };
  const handleBrowserChange = (value) => {
    setBrowserSelection(value);
  };
  const handlePaymentChange = (value) => {
    setPaymentSelection(value);
  };
  const handleTowersChange = (value) => {
    setTowersSelection(value);
  };
  const handleGamesChange = (value) => {
    setGamesSelection(value);
  };
  const handleRadiosChange = (value) => {
    setRadiosSelection(value);
  };
  const handleForecastChange = (value) => {
    setForecastSelection(value);
  };
  const handleRecommendationChange = (value) => {
    setRecommendationSelection(value);
  };
  const handleNewsChange = (value) => {
    setNewsSelection(value);
  };
  const handleAdvertisementChange = (value) => {
    setAdvertisementSelection(value);
  };

  // show alert when closing or refreshing
  /*
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };
  */

  const url = "http://localhost:4000";
  //const url = "https://psych-website.onrender.com"
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(url + "/api/data");
        const json = await res.json();

        if (res.ok) {
          setTotalUsers(json[0].totalUsers);
          setAgentPath(totalUsers % 6);
        } else {
          throw Error;
        }
      } catch (error) {
        console.log("Fetch failed");
      }
    };

    setHotelsArr(shuffleHotels);
    setAfternoonArr(shuffleAfternoon);
    setRestaurantArr(shuffleRestaurants);
    setVacationsArr(shuffleVacations);
    setActivitiesArr(shuffleActivities);
    setAccommodationArr(shuffleAccommodation);
    setCommunicationArr(shuffleCommunication);
    setCuisineArr(shuffleCuisine);

    fetchUsers();

    if (totalUsers % 6 === 0) {
      setAgent1("Personal");
      setAgent2("General");
      setAgent3("Unprogrammed");
    } else if (totalUsers % 6 === 1) {
      setAgent1("Personal");
      setAgent2("Unprogrammed");
      setAgent3("General");
    } else if (totalUsers % 6 === 2) {
      setAgent1("General");
      setAgent2("Personal");
      setAgent3("Unprogrammed");
    } else if (totalUsers % 6 === 3) {
      setAgent1("General");
      setAgent2("Unprogrammed");
      setAgent3("Personal");
    } else if (totalUsers % 6 === 4) {
      setAgent1("Unprogrammed");
      setAgent2("General");
      setAgent3("Personal");
    } else if (totalUsers % 6 === 5) {
      setAgent1("Unprogrammed");
      setAgent2("Pesronal");
      setAgent3("General");
    }
  }, [totalUsers, agent1]);

  const handleNext = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const reload = () => {
    window.location.reload(true);
  };

  const handleNextChangeHeader = () => {
    handleNext();
    setShowHeader(!showHeader);
  };

  const handleNextChangeItineraryHeader = () => {
    handleNext();
    setShowItineraryHeader(!showItineraryHeader);
  };

  const [recommendedAndEco1, setRecommendedAndEco1] = useState(null);
  const [recommendedAndEco2, setRecommendedAndEco2] = useState(null);
  const [recommendedAndEco3, setRecommendedAndEco3] = useState(null);

  const [itineraryFeatures1, setItineraryFeatures1] = useState(null);
  const [itineraryFeatures2, setItineraryFeatures2] = useState(null);
  const [itineraryFeatures3, setItineraryFeatures3] = useState(null);
  const startSurvey = () => {
    setCurAgent(agent1);
    setStartTime(Date.now());
    setItineraryFeatures1(randomizeItineraryFeatures);
    setItineraryFeatures2(randomizeItineraryFeatures);
    setItineraryFeatures3(randomizeItineraryFeatures);
    setRecommendedAndEco1(randomizeRecommendedAndEco);
    setRecommendedAndEco2(randomizeRecommendedAndEco);
    setRecommendedAndEco3(randomizeRecommendedAndEco);
    handleNext();
  };

  const endSurvey = () => {
    const time = Date.now() - startTime;
    const timeElapsed = msToTime(time);
    handleNext();
    const uploadUser = async () => {
      const user = {
        userId: totalUsers,
        orderOfAgents: agentPath,
        timeElapsed: timeElapsed,
        rugged: ruggedSelection,
        excited: excitedSelection,
        uncomfortable: uncomfortableSelection,
        dominating: dominatingSelection,
        thrifty: thriftySelection,
        pleasant: pleasantSelection,
        contemporary: contemporarySelection,
        organized: organizedSelection,
        rational: rationalSelection,
        youthful: youthfulSelection,
        formal: formalSelection,
        orthodox: orthodoxSelection,
        complex: complexSelection,
        colorless: colorlessSelection,
        modest: modestSelection,
        hotels: hotelSelection,
        afternoons: afternoonSelection,
        restaurants: restaurantSelection,
        vacationType: vacationSelection,
        budget: budgetSelection,
        nightLife: activitiesSelection["nightlife and entertainment"],
        outdoor: activitiesSelection["outdoor activities"],
        cultural: activitiesSelection["cultural experiences"],
        relaxation: activitiesSelection["relaxation"],
        adventure: activitiesSelection["adventure"],
        sports: activitiesSelection["sports"],
        history: activitiesSelection["history and heritage"],
        food: activitiesSelection["food and wine"],
        shopping: activitiesSelection["shopping"],
        volunteer: activitiesSelection["volunteer tourism"],
        accommodation: accommodationSelection,
        activityLevel: activityLevelSelection,
        culturalImmersion: cultureSelection,
        beatenPath: pathSelection,
        preferredCommunication: communicationSelection,
        languageBarriers: languageSelection,
        preferredCuisines: cuisineSelection,
        downtimeImportance: relaxationLevelSelection,
        adventureTravelInterest: interestsSelection["adventuretravel"],
        artDesignInterest: interestsSelection["art&design"],
        artsCraftsInterest: interestsSelection["arts&crafts"],
        beautyGroomingInterest: interestsSelection["beauty&grooming"],
        booksInterest: interestsSelection["books"],
        camerasInterest: interestsSelection["cameras"],
        campingInterest: interestsSelection["camping"],
        computersInterest: interestsSelection["computers"],
        cookingInterest: interestsSelection["cooking"],
        diyInterest: interestsSelection["diy"],
        dogsInterest: interestsSelection["dogs"],
        electronicsInterest: interestsSelection["electronics"],
        fallFashionInterest: interestsSelection["fallfashion"],
        fashionAccessoriesInterest: interestsSelection["fashionaccessories"],
        fitnessInterest: interestsSelection["fitness"],
        foodDrinkInterest: interestsSelection["food&drink"],
        funHobbiesInterest: interestsSelection["fun&hobbies"],
        giftIdeasInterest: interestsSelection["giftideas"],
        healthWellnessInterest: interestsSelection["health&wellness"],
        healthyFoodInterest: interestsSelection["healthyfood"],
        hikingInterest: interestsSelection["hiking"],
        homeGardenInterest: interestsSelection["home&garden"],
        homeDecorInterest: interestsSelection["homedecor"],
        homeImprovementInterest: interestsSelection["homeimprovement"],
        interiorDesignInterest: interestsSelection["interiordesign"],
        kidsParentingInterest: interestsSelection["kids&parenting"],
        kitchensInterest: interestsSelection["kitchens"],
        makeupInterest: interestsSelection["makeup"],
        mensFashionInterest: interestsSelection["mensfashion"],
        moviesTVInterest: interestsSelection["movies&tv"],
        musicInterest: interestsSelection["music"],
        outdoorActivitiesInterest: interestsSelection["outdooractivities"],
        outdoorsInterest: interestsSelection["outdoors"],
        petCareInterest: interestsSelection["petcare"],
        petsAnimalsInterest: interestsSelection["pets&animals"],
        photographyInterest: interestsSelection["photography"],
        recipesInterest: interestsSelection["recipes"],
        shoesInterest: interestsSelection["shoes"],
        skinCareInterest: interestsSelection["skincare"],
        sportsInterest: interestsSelection["sport"],
        strangeFindsInterest: interestsSelection["strangefinds"],
        styleFashionInterest: interestsSelection["style&fashion"],
        technologyInterest: interestsSelection["technology"],
        toysGamesInterest: interestsSelection["toys&games"],
        travelInterest: interestsSelection["travel"],
        womensAccessoriesInterest: interestsSelection["womensaccessories"],
        womensFashionInterest: interestsSelection["womensfashion"],
        female: genderSelection["female"],
        male: genderSelection["male"],
        genderqueer:
          genderSelection["genderqueer gender nonbinary or genderfluid"],
        transFemale: genderSelection["Transgender female"],
        transMale: genderSelection["Transgender male"],
        noResponseGender: genderSelection["Prefer not to answer"],
        genderOther: genderText,
        income: incomeSelection,
        ladder: ladderSelection,
        education: educationSelection,
        political: politicalSelection,
        economic: economicSelection,
        social: socialSelection,
        age: ageSelection,
        indian: raceSelection["american indian or alaska native"],
        asian: raceSelection["asian"],
        african: raceSelection["black or african american"],
        hispanic: raceSelection["hispanic latino or spanish"],
        arab: raceSelection["middle eastern or arab"],
        hawaiian: raceSelection["native hawaiian or other pacific islander"],
        white: raceSelection["white"],
        otherRace: raceText,
        residence: residenceSelection,
        internetAccess: internetAccessSelection,
        internetLookup: internetLookupSelection,
        eCommunicationUse: eCommunicationUseSelection,
        attentionCheck1: correctAttentionCheck1,
        flight1: flightSelection1,
        originalFlight1: recommendedAndEco1["Flight"][0],
        flightEco1: recommendedAndEco1["Flight"][1],
        rentalCar1: rentalCarSelection1,
        originalRentalCar1: recommendedAndEco1["Rental Car"][0],
        rentalCarEco1: recommendedAndEco1["Rental Car"][0],
        hotel1: hotelSelection1,
        originalHotel1: recommendedAndEco1["Hotel"][0],
        hotelEco1: recommendedAndEco1["Hotel"][0],
        dinner1: dinnerSelection1,
        originalDinner1: recommendedAndEco1["Dinner"][0],
        dinnerEco1: recommendedAndEco1["Dinner"][0],
        lunch1: lunchSelection1,
        originalLunch1: recommendedAndEco1["Lunch"][0],
        lunchEco1: recommendedAndEco1["Lunch"][0],
        breakfast1: breakfastSelection1,
        originalBreakfast1: recommendedAndEco1["Breakfast"][0],
        breakfastEco1: recommendedAndEco1["Breakfast"][0],
        museums1: museumsSelection1,
        originalMuseums1: recommendedAndEco1["Museums"][0],
        museumsEco1: recommendedAndEco1["Museums"][0],
        markets1: marketsSelection1,
        originalMarkets1: recommendedAndEco1["Markets"][0],
        marketsEco1: recommendedAndEco1["Markets"][0],
        flamencoShows1: flamencoShowsSelection1,
        originalFlamencoShows1: recommendedAndEco1["Flamenco Shows"][0],
        flamencoShowsEco1: recommendedAndEco1["Flamenco Shows"][0],
        publicTransportationShort1: publicTransportationShortSelection1,
        originalPublicTransportationShort1:
          recommendedAndEco1["Public Transportation (Short)"][0],
        publicTransportationShortEco1:
          recommendedAndEco1["Public Transportation (Short)"][0],
        publicTransportationLong1: publicTransportationLongSelection1,
        originalPublicTransportationLong1:
          recommendedAndEco1["Public Transportation (Long)"][0],
        publicTransportationLongEco1:
          recommendedAndEco1["Public Transportation (Long)"][0],
        coffee1: coffeeSelection1,
        originalCoffee1: recommendedAndEco1["Coffee"][0],
        coffeeEco1: recommendedAndEco1["Coffee"][0],
        bakery1: bakerySelection1,
        originalBakery1: recommendedAndEco1["Bakery"][0],
        bakeryEco1: recommendedAndEco1["Bakery"][0],
        nightLife1: nightLifeSelection1,
        originalNightLife1: recommendedAndEco1["Night Life"][0],
        nightLifeEco1: recommendedAndEco1["Night Life"][0],
        bars1: barsSelection1,
        originalBars1: recommendedAndEco1["Bars"][0],
        barsEco1: recommendedAndEco1["Bars"][0],
        groceries1: groceriesSelection1,
        originalGroceries1: recommendedAndEco1["Groceries"][0],
        groceriesEco1: recommendedAndEco1["Groceries"][0],
        souveneirs1: souveneirsSelection1,
        originalSouveneirs1: recommendedAndEco1["Souveneirs"][0],
        souveneirsEco1: recommendedAndEco1["Souveneirs"][0],
        shopping1: shoppingSelection1,
        originalShopping1: recommendedAndEco1["Shopping"][0],
        shoppingEco1: recommendedAndEco1["Shopping"][0],
        internationalPhoneService1: internationalPhoneServiceSelection1,
        originalInternationalPhoneService1:
          recommendedAndEco1["International Phone Service"][0],
        internationalPhoneServiceEco1:
          recommendedAndEco1["International Phone Service"][0],
        currencyExchange1: currencyExchangeSelection1,
        originalCurrencyExchange1: recommendedAndEco1["Currency Exchange"][0],
        currencyExchangeEco1: recommendedAndEco1["Currency Exchange"][0],
        luggage1: luggageSelection1,
        originalLuggage1: recommendedAndEco1["Luggage"][0],
        luggageEco1: recommendedAndEco1["Luggage"][0],
        dayTrip1: dayTripSelection1,
        originalDayTrip1: recommendedAndEco1["Day Trip"][0],
        dayTripEco1: recommendedAndEco1["Day Trip"][0],
        travelInsurance1: travelInsuranceSelection1,
        originalTravelInsurance1: recommendedAndEco1["Travel Insurance"][0],
        travelInsuranceEco1: recommendedAndEco1["Travel Insurance"][0],
        travelPlugAdapter1: travelPlugAdapterSelection1,
        originalTravelPlugAdapter1:
          recommendedAndEco1["Travel Plug Adapter"][0],
        travelPlugAdapterEco1: recommendedAndEco1["Travel Plug Adapter"][0],
        choose1: chooseSelection1,
        charge1: chargeSelection1,
        account1: accountSelection1,
        wait1: waitSelection1,
        sense1: senseSelection1,
        help1: helpSelection1,
        understood1: understoodSelection1,
        listen1: listenSelection1,
        effectiveness1: effectivenessSelection1,
        bestOption1: bestOptionSelection1,
        optionQuickly1: optionQuicklySelection1,
        productivity1: productivitySelection1,
        performance1: performanceSelection1,
        utilize1: utilizeSelection1,
        reflect1: reflectSelection1,
        identify1: identifySelection1,
        connection1: connectionSelection1,
        agentCommunicate1: agentCommunicateSelection1,
        typePerson1: typePersonSelection1,
        agentMe1: agentMeSelection1,
        suits1: suitsSelection1,
        productsFollowup1: productsFollowupSelection1,
        actionsFollowup1: actionsFollowupSelection1,
        purchaseFollowup1: purchaseFollowupSelection1,
        resourcesFollowup1: resourcesFollowupSelection1,
        responsibleFollowup1: responsibleFollowupSelection1,
        inconvenienceFollowup1: inconvenienceFollowupSelection1,
        recognizeAlgorithm: recognizeSelection,
        developAlgorithm: developSelection,
        influenceAlgorithm: influenceSelection,
        databaseAlgorithm: databaseSelection,
        searchAlgorithm: searchSelection,
        contentAlgorithm: contentSelection,
        thinkAlgorithm: thinkSelection,
        censorshipAlgorithm: censorshipSelection,
        chancesAlgorithm: chancesSelection,
        reportsAlgorithm: reportsSelection,
        humansAlgorithm: humansSelection,
        alexaAlgorithm: alexaSelection,
        tvAlgorithm: tvSelection,
        wearableAlgorithm: wearableSelection,
        browserAlgorithm: browserSelection,
        paymentAlgorithm: paymentSelection,
        towersAlgorithm: towersSelection,
        gamesAlgorithm: gamesSelection,
        radiosAlgorithm: radiosSelection,
        forecastAlgorithm: forecastSelection,
        recommendationAlgorithm: recommendationSelection,
        newsAlgorithm: newsSelection,
        advertisementAlgorithm: advertisementSelection,
      };
      const res = await fetch(url + "/api/user", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json.error);
      } else {
        console.log("Successfully uploaded");
      }
    };
    const incUsers = async () => {
      const res = await fetch(url + "/api/data", {
        method: "POST",
      });
      const json = await res.json();
      if (!res.ok) {
        console.log(json.error);
      } else {
        console.log("Successfully incremented");
      }
    };
    uploadUser();
    incUsers();
  };
  return (
    <div className="App">
      {showHeader && <PersonalityHeader />}
      {showItineraryHeader && <ItineraryHeader agent={curAgent} />}
      {step === 1 && <LandingPage onNext={startSurvey} />}
      {step === 2 && (
        <ConsentFormPage
          onNext={handleNext}
          onBack={reload}
        />
      )}
      {step === 3 && (
        <GeneralInstructions1
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 4 && (
        <GeneralInstructions2
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 5 && (
        <GeneralInstructions3
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 6 && <Introduction onNext={handleNextChangeHeader} />}
      {step === 7 && (
        <Question1
          onNext={handleNext}
          onRuggedChange={handleRuggedChange}
          onExcitedChange={handleExcitedChange}
          onUncomfortableChange={handleUncomfortableChange}
          onDominatingChange={handleDominatingChange}
          onThriftyChange={handleThriftyChange}
          onPleasantChange={handlePleasantChange}
          onContemporaryChange={handleContemporaryChange}
          onOrganizedChange={handleOrganizedChange}
          onRationalChange={handleRationalChange}
          onYouthfulChange={handleYouthfulChange}
          onFormalChange={handleFormalChange}
          onOrthodoxChange={handleOrthodoxChange}
          onComplexChange={handleComplexChange}
          onColorlessChange={handleColorlessChange}
          onModestChange={handleModestChange}
        />
      )}
      {step === 8 && (
        <GreenQuestion
          onNext={handleNext}
          onBack={handleBack}
          onProductsChange={handleProductsChange}
          onEnvironDecisChange={handleEnvironDecisChange}
          onPurchaseEnvironChange={handlePurchaseEnvironChange}
          onResourcesChange={handleResourcesChange}
          onEnvironRespChange={handleEnvironRespChange}
          onInconvenienceChange={handleInconvenienceChange}
        />
      )}
      {step === 9 && (
        <Question2A
          onNext={handleNext}
          onBack={handleBack}
          arr={hotelsArr}
          onHotelChange={handleHotelChange}
        />
      )}
      {step === 10 && (
        <Question2B
          onNext={handleNext}
          onBack={handleBack}
          arr={afternoonArr}
          onAfternoonChange={handleAfternoonChange}
        />
      )}
      {step === 11 && (
        <Question2C
          onNext={handleNext}
          onBack={handleBack}
          arr={restaurantArr}
          onRestaurantChange={handleRestaurantChange}
        />
      )}
      {step === 12 && (
        <Question3
          onNext={handleNext}
          onBack={handleBack}
          vacationsArr={vacationsArr}
          activitiesArr={activitiesArr}
          accommodationArr={accommodationArr}
          communicationArr={communicationArr}
          cuisinesArr={cuisineArr}
          onVacationChange={handleVacationChange}
          onBudgetChange={handleBudgetChange}
          onActivitiesChange={handleActivitiesChange}
          onAccommodationChange={handleAccommodationChange}
          onCommunicationChange={handleCommunicationChange}
          onCuisineChange={handleCuisineChange}
          onActivityLevelChange={handleActivityLevelChange}
          onCultureChange={handleCultureChange}
          onPathChange={handlePathChange}
          onLanguageChange={handleLanguageChange}
          onRelaxationChange={handleRelaxationChange}
        />
      )}
      {step === 13 && (
        <Question4
          onNext={handleNext}
          onBack={handleBack}
          onInterestsChange={handleInterestsChange}
        />
      )}
      {step === 14 && (
        <Demographics
          onNext={handleNextChangeHeader}
          onBack={handleBack}
          onGenderChange={handleGenderChange}
          onGenderTextChange={handleGenderTextChange}
          onIncomeChange={handleIncomeChange}
          onLadderChange={handleLadderChange}
          onEducationChange={handleEducationChange}
          onPoliticalChange={handlePoliticalChange}
          onEconomicChange={handleEconomicChange}
          onSocialChange={handleSocialChange}
          onAgeChange={handleAgeChange}
          onRaceChange={handleRaceChange}
          onRaceTextChange={handleRaceTextChange}
          onResidenceChange={handleResidenceChange}
          onInternetAccessChange={handleInternetAccessChange}
          onInternetLookupChange={handleInternetLookupChange}
          onECommunicationUseChange={handleECommunicationUseChange}
        />
      )}
      {step === 15 && <SubmitPage onNext={handleNext} />}
      {step === 16 && <Loading onNext={handleNext} />}
      {step === 17 && (
        <Instructions1
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 18 && (
        <Instructions2
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 19 && (
        <AttentionCheck
          onNext={handleNext}
          agent={agent1}
          onRadioChange={handleAttentionCheckChange}
        />
      )}
      {step === 20 && (
        <AttentionCheckAnswer
          onNext={handleNextChangeItineraryHeader}
          selection={attentionCheckSelection}
          curAgent={curAgent}
        />
      )}
      {step === 21 && (
        <Itinerary
          onNext={handleNext}
          type={"Flight"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleFlightSelection1}
        />
      )}
      {step === 22 && (
        <Itinerary
          onNext={handleNext}
          type={"Rental Car"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleRentalCarSelection1}
        />
      )}
      {step === 23 && (
        <Itinerary
          onNext={handleNext}
          type={"Hotel"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleHotelSelection1}
        />
      )}
      {step === 24 && (
        <Itinerary
          onNext={handleNext}
          type={"Dinner"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleDinnerSelection1}
        />
      )}
      {step === 25 && (
        <Itinerary
          onNext={handleNext}
          type={"Lunch"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleLunchSelection1}
        />
      )}
      {step === 26 && (
        <Itinerary
          onNext={handleNext}
          type={"Breakfast"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleBreakfastSelection1}
        />
      )}
      {step === 27 && (
        <Itinerary
          onNext={handleNext}
          type={"Museums"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleMuseumsSelection1}
        />
      )}
      {step === 28 && (
        <Itinerary
          onNext={handleNext}
          type={"Markets"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleMarketsSelection1}
        />
      )}
      {step === 29 && (
        <Itinerary
          onNext={handleNext}
          type={"Flamenco Shows"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleFlamencoShowsSelection1}
        />
      )}
      {step === 30 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation (Short)"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handlePublicTransportationShortSelection1}
        />
      )}
      {step === 31 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation (Long)"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handlePublicTransportationLongSelection1}
        />
      )}
      {step === 32 && (
        <Itinerary
          onNext={handleNext}
          type={"Coffee"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleCoffeeSelection1}
        />
      )}
      {step === 33 && (
        <Itinerary
          onNext={handleNext}
          type={"Bakery"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleBakerySelection1}
        />
      )}
      {step === 34 && (
        <Itinerary
          onNext={handleNext}
          type={"Night Life"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleNightLifeSelection1}
        />
      )}
      {step === 35 && (
        <Itinerary
          onNext={handleNext}
          type={"Bars"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleBarsSelection1}
        />
      )}
      {step === 36 && (
        <Itinerary
          onNext={handleNext}
          type={"Groceries"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleGroceriesSelection1}
        />
      )}
      {step === 37 && (
        <Itinerary
          onNext={handleNext}
          type={"Souveneirs"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleSouveneirsSelection1}
        />
      )}
      {step === 38 && (
        <Itinerary
          onNext={handleNext}
          type={"Shopping"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleShoppingSelection1}
        />
      )}
      {step === 39 && (
        <Itinerary
          onNext={handleNext}
          type={"International Phone Service"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleInternationalPhoneServiceSelection1}
        />
      )}
      {step === 40 && (
        <Itinerary
          onNext={handleNext}
          type={"Currency Exchange"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleCurrencyExchangeSelection1}
        />
      )}
      {step === 41 && (
        <Itinerary
          onNext={handleNext}
          type={"Luggage"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleLuggageSelection1}
        />
      )}
      {step === 42 && (
        <Itinerary
          onNext={handleNext}
          type={"Day Trip"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleDayTripSelection1}
        />
      )}
      {step === 43 && (
        <Itinerary
          onNext={handleNext}
          type={"Travel Insurance"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleTravelInsuranceSelection1}
        />
      )}
      {step === 44 && (
        <Itinerary
          onNext={handleNextChangeItineraryHeader}
          type={"Travel Plug Adapter"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleTravelPlugAdapterSelection1}
        />
      )}
      {step === 45 && (
        <FollowupQuestions1
          onNext={handleNext}
          agent={agent1}
          onChooseChange={handleChooseSelection1}
          onChargeChange={handleChargeSelection1}
          onAccountChange={handleAccountSelection1}
          onWaitChange={handleWaitSelection1}
          onSenseChange={handleSenseSelection1}
          onHelpChange={handleHelpSelection1}
          onUnderstoodChange={handleUnderstoodSelection1}
          onListenChange={handleListenSelection1}
        />
      )}
      {step === 46 && (
        <FollowupQuestions2
          onNext={handleNext}
          agent={agent1}
          onEffectivenessChange={handleEffectivenessSelection1}
          onBestOptionChange={handleBestOptionSelection1}
          onOptionQuicklyChange={handleOptionQuicklySelection1}
          onProductivityChange={handleProductivitySelection1}
          onPerformanceChange={handlePerformanceSelection1}
          onUtilizeChange={handleUtilizeSelection1}
        />
      )}
      {step === 47 && (
        <FollowupQuestions3
          onNext={handleNext}
          agent={agent1}
          onReflectChange={handleReflectSelection1}
          onIdentifyChange={handleIdentifySelection1}
          onConnectionChange={handleConnectionSelection1}
          onAgentCommunicateChange={handleAgentCommunicateSelection1}
          onTypePersonChange={handleTypePersonSelection1}
          onAgentMeChange={handleTypePersonSelection1}
          onSuitsChange={handleSuitsSelection1}
        />
      )}
      {step === 48 && (
        <FollowupQuestionsGreen
          onNext={handleNext}
          agent={agent1}
          onProductsFollowupChange={handleProductsFollowupSelection1}
          onActionsFollowupChange={handleActionsFollowupSelection1}
          onPurchaseFollowupChange={handlePurchaseFollowupSelection1}
          onResourcesFollowupChange={handleResourcesFollowupSelection1}
          onResponsibleFollowupChange={handleResponsibleFollowupSelection1}
          onInconvenienceFollowupChange={handleInconvenienceFollowupSelection1}
        />
      )}
      {step === 49 && (
        <AlgorithmKnowledge
          onNext={handleNext}
          onRecognizeChange={handleRecognizeChange}
          onDevelopChange={handleDevelopChange}
          onInfluenceChange={handleInfluenceChange}
          onDatabaseChange={handleDatabaseChange}
          onSearchChange={handleSearchChange}
          onContentChange={handleContentChange}
          onThinkChange={handleThinkChange}
          onCensorshipChange={handleCensorshipChange}
          onChancesChange={handleChancesChange}
          onReportsChange={handleReportsChange}
          onHumansChange={handleHumansChange}
        />
      )}
      {step === 50 && (
        <AlgorithmAwareness
          onNext={endSurvey}
          onAlexaChange={handleAlexaChange}
          onTVChange={handleTVChange}
          onWearableChange={handleWearableChange}
          onBrowserChange={handleBrowserChange}
          onPaymentChange={handlePaymentChange}
          onTowersChange={handleTowersChange}
          onGamesChange={handleGamesChange}
          onRadiosChange={handleRadiosChange}
          onForecastChange={handleForecastChange}
          onRecommendationChange={handleRecommendationChange}
          onNewsChange={handleNewsChange}
          onAdvertisementChange={handleAdvertisementChange}
        />
      )}
      {step === 51 && <End />}
    </div>
  );
}

export default App;
