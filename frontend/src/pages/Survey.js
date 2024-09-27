import { useEffect, useState } from "react";
import PersonalityHeader from "../components/PersonalityHeader";
import LandingPage from "../components/LandingPage";
import ConsentFormPage from "../components/ConsentFormPage";
import Prolific from "../components/Prolific.js";
import GeneralInstructions1 from "../components/GeneralInstructions1";
import GeneralInstructions2 from "../components/GeneralInstructions2";
import GeneralInstructions3 from "../components/GeneralInstructions3";
import Introduction from "../components/Introduction";
import Question1 from "../components/Question1";
import Question2A from "../components/Question2A";
import Question2B from "../components/Question2B";
import Question2C from "../components/Question2C";
import Question3 from "../components/Question3";
import Question4 from "../components/Question4";
import GreenQuestion from "../components/GreenQuestion";
import Demographics from "../components/Demographics";
import SubmitPage from "../components/SubmitPage";
import Loading from "../components/Loading";
import Instructions1 from "../components/Instructions1.js";
import Instructions2 from "../components/Instructions2.js";
import AttentionCheck from "../components/AttentionCheck";
import AttentionCheckAnswer from "../components/AttentionCheckAnswer";
import ItineraryHeader from "../components/ItineraryHeader.js";
import Itinerary from "../components/Itinerary.js";
import FollowupQuestions1 from "../components/FollowupQuestions.js";
import FollowupQuestions2 from "../components/FollowupQuestions2.js";
import FollowupQuestions3 from "../components/FollowupQuestions3.js";
import FollowupQuestionsGreen from "../components/FollowupQuestionsGreen.js";
import AlgorithmKnowledge from "../components/AlgorithmKnowledge.js";
import AlgorithmAwareness from "../components/AlgorithmAwareness.js";
import Experiences from "../components/Experiences.js";
import End from "../components/End.js";
import EndWait from "../components/EndWait.js";
import UploadError from "../components/UploadError.js";

import { json2csv } from "json-2-csv";

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
} from "../utils.js";
import GeneralInstructions4 from "../components/GeneralInstructions4.js";
function Survey() {
  const [uploaded, setUploaded] = useState(0);
  const [errorMsg, setErrorMsg] = useState("Unknown Error");
  const [userJson, setUserJson] = useState(null);

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

  const [prolificId, setProlificId] = useState("Empty");
  const [vacationSelection, setVacationSelection] = useState("");
  const [activitiesSelection, setActivitiesSelection] = useState({
    "Outdoor activities": false,
    "Cultural experiences": false,
    Relaxation: false,
    Adventure: false,
    Sports: false,
    "History and heritage": false,
    "Food and wine": false,
    "Nightlife and entertainment": false,
    Shopping: false,
    "Volunteer tourism": false,
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
    "Genderqueer, gender non-binary, or gender fluid": false,
    "Transgender Female": false,
    "Transgender Male": false,
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
    "American Indian or Alaska Native": false,
    Asian: false,
    "Black or African American": false,
    "Hispanic, Latino, or Spanish": false,
    "Middle Eastern or Arab": false,
    "Native Hawaiian or other Pacific Islander": false,
    White: false,
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

  const [engageSelection1, setEngageSelection1] = useState("");
  const [engageSelection2, setEngageSelection2] = useState("");
  const [engageSelection3, setEngageSelection3] = useState("");

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
  const [experienceText, setExperience] = useState("");

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

  const handleProlificIdChange = (value) => {
    setProlificId(value);
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
    setPublicTransportationShortSelection3(value);
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
  const handleEngageSelection1 = (value) => {
    setEngageSelection1(value);
  };
  const handleEngageSelection2 = (value) => {
    setEngageSelection2(value);
  };
  const handleEngageSelection3 = (value) => {
    setEngageSelection3(value);
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

  const handleExperienceChange = (value) => {
    setExperience(value);
  };

  const handleNextAttentionCheck1 = () => {
    if (attentionCheckSelection.length === curAgent.length) {
      setCorrectAttentionCheck1(true);
    }
    handleNext();
    initializeVals();
  };
  const handleNextAttentionCheck2 = () => {
    if (attentionCheckSelection.length === curAgent.length) {
      setCorrectAttentionCheck2(true);
    }
    handleNext();
  };
  const handleNextAttentionCheck3 = () => {
    if (attentionCheckSelection.length === curAgent.length) {
      setCorrectAttentionCheck3(true);
    }
    handleNext();
  };
  const handleNextAgent1 = () => {
    handleNext();
    setCurAgent(agent2);
  };
  const handleNextAgent2 = () => {
    handleNext();
    setCurAgent(agent3);
  };
  // show alert when closing or refreshing

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };

  // npm start
  //const url = "http://localhost:4000";
  const url = "https://psych-website.onrender.com";
  
  useEffect(() => {
    // shuffle initial questions
    setHotelsArr(shuffleHotels);
    setAfternoonArr(shuffleAfternoon);
    setRestaurantArr(shuffleRestaurants);
    setVacationsArr(shuffleVacations);
    setActivitiesArr(shuffleActivities);
    setAccommodationArr(shuffleAccommodation);
    setCommunicationArr(shuffleCommunication);
    setCuisineArr(shuffleCuisine);
  }, []);
  

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

  const fetchUsers = async () => {
    try {
      const res = await fetch(url + "/api/data");
      const json = await res.json();

      if (res.ok) {
        setTotalUsers(json[0].totalUsers);
        setAgentPath(totalUsers % 6);
        console.log("Total Users Fetched")
      } else {
        throw Error;
      }
    } catch (error) {
      console.log("Fetch failed");
    }
  };

  const handleNextFetchUsers = async () => {
    handleNext();
    await fetchUsers();
  }
  const handleNextChangeHeader = () => {
    handleNext();
    setShowHeader(!showHeader);
  };
  
  const handleNextSetAgents = () => {
    console.log(totalUsers);
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
      setAgent2("Personal");
      setAgent3("General");
    }
  }

  const handleNextChangeItineraryHeader = () => {
    handleNext();
    setShowItineraryHeader(!showItineraryHeader);
  };
  const stringToInt = () => {
    console.log("converted");
    setFlightSelection1(parseInt(flightSelection1));
    setFlightSelection2(parseInt(flightSelection2));
    setFlightSelection3(parseInt(flightSelection3));

    setRentalCarSelection1(parseInt(rentalCarSelection1));
    setRentalCarSelection2(parseInt(rentalCarSelection2));
    setRentalCarSelection3(parseInt(rentalCarSelection3));

    setHotelSelection1(parseInt(hotelSelection1));
    setHotelSelection2(parseInt(hotelSelection2));
    setHotelSelection3(parseInt(hotelSelection3));

    setDinnerSelection1(parseInt(dinnerSelection1));
    setDinnerSelection2(parseInt(dinnerSelection2));
    setDinnerSelection3(parseInt(dinnerSelection3));

    setLunchSelection1(parseInt(lunchSelection1));
    setLunchSelection2(parseInt(lunchSelection2));
    setLunchSelection3(parseInt(lunchSelection3));

    setBreakfastSelection1(parseInt(breakfastSelection1));
    setBreakfastSelection2(parseInt(breakfastSelection2));
    setBreakfastSelection3(parseInt(breakfastSelection3));

    setMuseumsSelection1(parseInt(museumsSelection1));
    setMuseumsSelection2(parseInt(museumsSelection2));
    setMuseumsSelection3(parseInt(museumsSelection3));

    setMarketsSelection1(parseInt(marketsSelection1));
    setMarketsSelection2(parseInt(marketsSelection2));
    setMarketsSelection3(parseInt(marketsSelection3));

    setPublicTransportationLongSelection1(
      parseInt(publicTransportationLongSelection1)
    );
    setPublicTransportationLongSelection2(
      parseInt(publicTransportationLongSelection2)
    );
    setPublicTransportationLongSelection3(
      parseInt(publicTransportationLongSelection3)
    );

    setCoffeeSelection1(parseInt(coffeeSelection1));
    setCoffeeSelection2(parseInt(coffeeSelection2));
    setCoffeeSelection3(parseInt(coffeeSelection3));

    setBakerySelection1(parseInt(bakerySelection1));
    setBakerySelection2(parseInt(bakerySelection2));
    setBakerySelection3(parseInt(bakerySelection3));

    setNightLifeSelection1(parseInt(nightLifeSelection1));
    setNightLifeSelection2(parseInt(nightLifeSelection2));
    setNightLifeSelection3(parseInt(nightLifeSelection3));

    setGroceriesSelection1(parseInt(groceriesSelection1));
    setGroceriesSelection2(parseInt(groceriesSelection2));
    setGroceriesSelection3(parseInt(groceriesSelection3));

    setSouveneirsSelection1(parseInt(souveneirsSelection1));
    setSouveneirsSelection2(parseInt(souveneirsSelection2));
    setSouveneirsSelection3(parseInt(souveneirsSelection3));

    setShoppingSelection1(parseInt(shoppingSelection1));
    setShoppingSelection2(parseInt(shoppingSelection2));
    setShoppingSelection3(parseInt(shoppingSelection3));

    setCurrencyExchangeSelection1(parseInt(currencyExchangeSelection1));
    setCurrencyExchangeSelection2(parseInt(currencyExchangeSelection2));
    setCurrencyExchangeSelection3(parseInt(currencyExchangeSelection3));

    setLuggageSelection1(parseInt(luggageSelection1));
    setLuggageSelection2(parseInt(luggageSelection2));
    setLuggageSelection3(parseInt(luggageSelection3));

    setDayTripSelection1(parseInt(dayTripSelection1));
    setDayTripSelection2(parseInt(dayTripSelection2));
    setDayTripSelection3(parseInt(dayTripSelection3));

    setTravelPlugAdapterSelection1(parseInt(travelPlugAdapterSelection1));
    setTravelPlugAdapterSelection2(parseInt(travelPlugAdapterSelection2));
    setTravelPlugAdapterSelection3(parseInt(travelPlugAdapterSelection3));
  };
  const handleNextStartServer = () => {
    const startServer = async () => {
      try {
        const res = await fetch(url + "/api/data", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        if (!res.ok) {
          console.log(json.error);
        } else {
          console.log("Server active");
        }
      } catch (error) {
        console.log("Error");
      }
    };
    startServer();
    handleNext();
    stringToInt();
  };

  const [recommendedAndEco1, setRecommendedAndEco1] = useState(null);
  const [recommendedAndEco2, setRecommendedAndEco2] = useState(null);
  const [recommendedAndEco3, setRecommendedAndEco3] = useState(null);

  const [itineraryFeatures1, setItineraryFeatures1] = useState(null);
  const [itineraryFeatures2, setItineraryFeatures2] = useState(null);
  const [itineraryFeatures3, setItineraryFeatures3] = useState(null);
  // initialize default values
  const initializeVals = () => {
    setFlightSelection1(recommendedAndEco1["Flight"][0]);
    setFlightSelection2(recommendedAndEco2["Flight"][0]);
    setFlightSelection3(recommendedAndEco3["Flight"][0]);

    setRentalCarSelection1(recommendedAndEco1["Rental Car"][0]);
    setRentalCarSelection2(recommendedAndEco2["Rental Car"][0]);
    setRentalCarSelection3(recommendedAndEco3["Rental Car"][0]);

    setHotelSelection1(recommendedAndEco1["Hotel"][0]);
    setHotelSelection2(recommendedAndEco2["Hotel"][0]);
    setHotelSelection3(recommendedAndEco3["Hotel"][0]);

    setDinnerSelection1(recommendedAndEco1["Dinner"][0]);
    setDinnerSelection2(recommendedAndEco2["Dinner"][0]);
    setDinnerSelection3(recommendedAndEco3["Dinner"][0]);

    setLunchSelection1(recommendedAndEco1["Lunch"][0]);
    setLunchSelection2(recommendedAndEco2["Lunch"][0]);
    setLunchSelection3(recommendedAndEco3["Lunch"][0]);

    setBreakfastSelection1(recommendedAndEco1["Breakfast"][0]);
    setBreakfastSelection2(recommendedAndEco2["Breakfast"][0]);
    setBreakfastSelection3(recommendedAndEco3["Breakfast"][0]);

    setMuseumsSelection1(recommendedAndEco1["Museums"][0]);
    setMuseumsSelection2(recommendedAndEco2["Museums"][0]);
    setMuseumsSelection3(recommendedAndEco3["Museums"][0]);

    setMarketsSelection1(recommendedAndEco1["Markets"][0]);
    setMarketsSelection2(recommendedAndEco2["Markets"][0]);
    setMarketsSelection3(recommendedAndEco3["Markets"][0]);

    setPublicTransportationLongSelection1(
      recommendedAndEco1["Public Transportation"][0]
    );
    setPublicTransportationLongSelection2(
      recommendedAndEco2["Public Transportation"][0]
    );
    setPublicTransportationLongSelection3(
      recommendedAndEco3["Public Transportation"][0]
    );

    setCoffeeSelection1(recommendedAndEco1["Coffee"][0]);
    setCoffeeSelection2(recommendedAndEco2["Coffee"][0]);
    setCoffeeSelection3(recommendedAndEco3["Coffee"][0]);

    setBakerySelection1(recommendedAndEco1["Bakery"][0]);
    setBakerySelection2(recommendedAndEco2["Bakery"][0]);
    setBakerySelection3(recommendedAndEco3["Bakery"][0]);

    setNightLifeSelection1(recommendedAndEco1["Night Life"][0]);
    setNightLifeSelection2(recommendedAndEco2["Night Life"][0]);
    setNightLifeSelection3(recommendedAndEco3["Night Life"][0]);

    setGroceriesSelection1(recommendedAndEco1["Groceries"][0]);
    setGroceriesSelection2(recommendedAndEco2["Groceries"][0]);
    setGroceriesSelection3(recommendedAndEco3["Groceries"][0]);

    setSouveneirsSelection1(recommendedAndEco1["Souveneirs"][0]);
    setSouveneirsSelection2(recommendedAndEco2["Souveneirs"][0]);
    setSouveneirsSelection3(recommendedAndEco3["Souveneirs"][0]);

    setShoppingSelection1(recommendedAndEco1["Shopping"][0]);
    setShoppingSelection2(recommendedAndEco2["Shopping"][0]);
    setShoppingSelection3(recommendedAndEco3["Shopping"][0]);

    setCurrencyExchangeSelection1(recommendedAndEco1["Currency Exchange"][0]);
    setCurrencyExchangeSelection2(recommendedAndEco2["Currency Exchange"][0]);
    setCurrencyExchangeSelection3(recommendedAndEco3["Currency Exchange"][0]);

    setLuggageSelection1(recommendedAndEco1["Luggage"][0]);
    setLuggageSelection2(recommendedAndEco2["Luggage"][0]);
    setLuggageSelection3(recommendedAndEco3["Luggage"][0]);

    setDayTripSelection1(recommendedAndEco1["Day Trip"][0]);
    setDayTripSelection2(recommendedAndEco2["Day Trip"][0]);
    setDayTripSelection3(recommendedAndEco3["Day Trip"][0]);

    setTravelPlugAdapterSelection1(
      recommendedAndEco1["Travel Plug Adapter"][0]
    );
    setTravelPlugAdapterSelection2(
      recommendedAndEco2["Travel Plug Adapter"][0]
    );
    setTravelPlugAdapterSelection3(
      recommendedAndEco3["Travel Plug Adapter"][0]
    );
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
    incUsers();
    //setTimeout(initializeVals, 20000);
  };

  const endSurvey = () => {
    const time = Date.now() - startTime;
    const timeElapsed = msToTime(time);
    var currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    console.log(datetime);
    handleNext();

    const flightSelectDefault1 =
      flightSelection1 === recommendedAndEco1["Flight"][0] ? true : false;
    const flightSelectDefaultAndEco1 =
      flightSelection1 === recommendedAndEco1["Flight"][1] &&
      recommendedAndEco1["Flight"][0] === recommendedAndEco1["Flight"][1]
        ? true
        : false;
    const flightSelectEco1 =
      flightSelection1 === recommendedAndEco1["Flight"][1] ? true : false;

    const rentalCarSelectDefault1 =
      rentalCarSelection1 === recommendedAndEco1["Rental Car"][0]
        ? true
        : false;
    const rentalCarSelectDefaultAndEco1 =
      rentalCarSelection1 === recommendedAndEco1["Rental Car"][1] &&
      recommendedAndEco1["Rental Car"][0] ===
        recommendedAndEco1["Rental Car"][1]
        ? true
        : false;
    const rentalCarSelectEco1 =
      rentalCarSelection1 === recommendedAndEco1["Rental Car"][1]
        ? true
        : false;

    const hotelSelectDefault1 =
      hotelSelection1 === recommendedAndEco1["Hotel"][0] ? true : false;
    const hotelSelectDefaultAndEco1 =
      hotelSelection1 === recommendedAndEco1["Hotel"][1] &&
      recommendedAndEco1["Hotel"][0] === recommendedAndEco1["Hotel"][1]
        ? true
        : false;
    const hotelSelectEco1 =
      hotelSelection1 === recommendedAndEco1["Hotel"][1] ? true : false;

    const dinnerSelectDefault1 =
      dinnerSelection1 === recommendedAndEco1["Dinner"][0] ? true : false;
    const dinnerSelectDefaultAndEco1 =
      dinnerSelection1 === recommendedAndEco1["Dinner"][1] &&
      recommendedAndEco1["Dinner"][0] === recommendedAndEco1["Dinner"][1]
        ? true
        : false;
    const dinnerSelectEco1 =
      dinnerSelection1 === recommendedAndEco1["Dinner"][1] ? true : false;

    const lunchSelectDefault1 =
      lunchSelection1 === recommendedAndEco1["Lunch"][0] ? true : false;
    const lunchSelectDefaultAndEco1 =
      lunchSelection1 === recommendedAndEco1["Lunch"][1] &&
      recommendedAndEco1["Lunch"][0] === recommendedAndEco1["Lunch"][1]
        ? true
        : false;
    const lunchSelectEco1 =
      lunchSelection1 === recommendedAndEco1["Lunch"][1] ? true : false;

    const breakfastSelectDefault1 =
      breakfastSelection1 === recommendedAndEco1["Breakfast"][0] ? true : false;
    const breakfastSelectDefaultAndEco1 =
      breakfastSelection1 === recommendedAndEco1["Breakfast"][1] &&
      recommendedAndEco1["Breakfast"][0] === recommendedAndEco1["Breakfast"][1]
        ? true
        : false;
    const breakfastSelectEco1 =
      breakfastSelection1 === recommendedAndEco1["Breakfast"][1] ? true : false;

    const museumsSelectDefault1 =
      museumsSelection1 === recommendedAndEco1["Museums"][0] ? true : false;
    const museumsSelectDefaultAndEco1 =
      museumsSelection1 === recommendedAndEco1["Museums"][1] &&
      recommendedAndEco1["Museums"][0] === recommendedAndEco1["Museums"][1]
        ? true
        : false;
    const museumsSelectEco1 =
      museumsSelection1 === recommendedAndEco1["Museums"][1] ? true : false;

    const marketsSelectDefault1 =
      marketsSelection1 === recommendedAndEco1["Markets"][0] ? true : false;
    const marketsSelectDefaultAndEco1 =
      marketsSelection1 === recommendedAndEco1["Markets"][1] &&
      recommendedAndEco1["Markets"][0] === recommendedAndEco1["Markets"][1]
        ? true
        : false;
    const marketsSelectEco1 =
      marketsSelection1 === recommendedAndEco1["Markets"][1] ? true : false;

    const publicTransportationLongSelectDefault1 =
      publicTransportationLongSelection1 ===
      recommendedAndEco1["Public Transportation"][0]
        ? true
        : false;
    const publicTransportationLongSelectDefaultAndEco1 =
      publicTransportationLongSelection1 ===
        recommendedAndEco1["Public Transportation"][1] &&
      recommendedAndEco1["Public Transportation"][0] ===
        recommendedAndEco1["Public Transportation"][1]
        ? true
        : false;
    const publicTransportationLongSelectEco1 =
      publicTransportationLongSelection1 ===
      recommendedAndEco1["Public Transportation"][1]
        ? true
        : false;

    const coffeeSelectDefault1 =
      coffeeSelection1 === recommendedAndEco1["Coffee"][0] ? true : false;
    const coffeeSelectDefaultAndEco1 =
      coffeeSelection1 === recommendedAndEco1["Coffee"][1] &&
      recommendedAndEco1["Coffee"][0] === recommendedAndEco1["Coffee"][1]
        ? true
        : false;
    const coffeeSelectEco1 =
      coffeeSelection1 === recommendedAndEco1["Coffee"][1] ? true : false;

    const bakerySelectDefault1 =
      bakerySelection1 === recommendedAndEco1["Bakery"][0] ? true : false;
    const bakerySelectDefaultAndEco1 =
      bakerySelection1 === recommendedAndEco1["Bakery"][1] &&
      recommendedAndEco1["Bakery"][0] === recommendedAndEco1["Bakery"][1]
        ? true
        : false;
    const bakerySelectEco1 =
      bakerySelection1 === recommendedAndEco1["Bakery"][1] ? true : false;

    const nightLifeSelectDefault1 =
      nightLifeSelection1 === recommendedAndEco1["Night Life"][0]
        ? true
        : false;
    const nightLifeSelectDefaultAndEco1 =
      nightLifeSelection1 === recommendedAndEco1["Night Life"][1] &&
      recommendedAndEco1["Night Life"][0] ===
        recommendedAndEco1["Night Life"][1]
        ? true
        : false;
    const nightLifeSelectEco1 =
      nightLifeSelection1 === recommendedAndEco1["Night Life"][1]
        ? true
        : false;

    const groceriesSelectDefault1 =
      groceriesSelection1 === recommendedAndEco1["Groceries"][0] ? true : false;
    const groceriesSelectDefaultAndEco1 =
      groceriesSelection1 === recommendedAndEco1["Groceries"][1] &&
      recommendedAndEco1["Groceries"][0] === recommendedAndEco1["Groceries"][1]
        ? true
        : false;
    const groceriesSelectEco1 =
      groceriesSelection1 === recommendedAndEco1["Groceries"][1] ? true : false;

    const souveneirsSelectDefault1 =
      souveneirsSelection1 === recommendedAndEco1["Souveneirs"][0]
        ? true
        : false;
    const souveneirsSelectDefaultAndEco1 =
      souveneirsSelection1 === recommendedAndEco1["Souveneirs"][1] &&
      recommendedAndEco1["Souveneirs"][0] ===
        recommendedAndEco1["Souveneirs"][1]
        ? true
        : false;
    const souveneirsSelectEco1 =
      souveneirsSelection1 === recommendedAndEco1["Souveneirs"][1]
        ? true
        : false;

    const shoppingSelectDefault1 =
      shoppingSelection1 === recommendedAndEco1["Shopping"][0] ? true : false;
    const shoppingSelectDefaultAndEco1 =
      shoppingSelection1 === recommendedAndEco1["Shopping"][1] &&
      recommendedAndEco1["Shopping"][0] === recommendedAndEco1["Shopping"][1]
        ? true
        : false;
    const shoppingSelectEco1 =
      shoppingSelection1 === recommendedAndEco1["Shopping"][1] ? true : false;

    const currencyExchangeSelectDefault1 =
      currencyExchangeSelection1 === recommendedAndEco1["Currency Exchange"][0]
        ? true
        : false;
    const currencyExchangeSelectDefaultAndEco1 =
      currencyExchangeSelection1 ===
        recommendedAndEco1["Currency Exchange"][1] &&
      recommendedAndEco1["Currency Exchange"][0] ===
        recommendedAndEco1["Currency Exchange"][1]
        ? true
        : false;
    const currencyExchangeSelectEco1 =
      currencyExchangeSelection1 === recommendedAndEco1["Currency Exchange"][1]
        ? true
        : false;

    const luggageSelectDefault1 =
      luggageSelection1 === recommendedAndEco1["Luggage"][0] ? true : false;
    const luggageSelectDefaultAndEco1 =
      luggageSelection1 === recommendedAndEco1["Luggage"][1] &&
      recommendedAndEco1["Luggage"][0] === recommendedAndEco1["Luggage"][1]
        ? true
        : false;
    const luggageSelectEco1 =
      luggageSelection1 === recommendedAndEco1["Luggage"][1] ? true : false;

    const dayTripSelectDefault1 =
      dayTripSelection1 === recommendedAndEco1["Day Trip"][0] ? true : false;
    const dayTripSelectDefaultAndEco1 =
      dayTripSelection1 === recommendedAndEco1["Day Trip"][1] &&
      recommendedAndEco1["Day Trip"][0] === recommendedAndEco1["Day Trip"][1]
        ? true
        : false;
    const dayTripSelectEco1 =
      dayTripSelection1 === recommendedAndEco1["Day Trip"][1] ? true : false;

    const travelPlugAdapterSelectDefault1 =
      travelPlugAdapterSelection1 ===
      recommendedAndEco1["Travel Plug Adapter"][0]
        ? true
        : false;
    const travelPlugAdapterSelectDefaultAndEco1 =
      travelPlugAdapterSelection1 ===
        recommendedAndEco1["Travel Plug Adapter"][1] &&
      recommendedAndEco1["Travel Plug Adapter"][0] ===
        recommendedAndEco1["Travel Plug Adapter"][1]
        ? true
        : false;
    const travelPlugAdapterSelectEco1 =
      travelPlugAdapterSelection1 ===
      recommendedAndEco1["Travel Plug Adapter"][1]
        ? true
        : false;

    const flightSelectDefault2 =
      flightSelection2 === recommendedAndEco2["Flight"][0] ? true : false;
    const flightSelectDefaultAndEco2 =
      flightSelection2 === recommendedAndEco2["Flight"][1] &&
      recommendedAndEco2["Flight"][0] === recommendedAndEco2["Flight"][1]
        ? true
        : false;
    const flightSelectEco2 =
      flightSelection2 === recommendedAndEco2["Flight"][1] ? true : false;

    const rentalCarSelectDefault2 =
      rentalCarSelection2 === recommendedAndEco2["Rental Car"][0]
        ? true
        : false;
    const rentalCarSelectDefaultAndEco2 =
      rentalCarSelection2 === recommendedAndEco2["Rental Car"][1] &&
      recommendedAndEco2["Rental Car"][0] ===
        recommendedAndEco2["Rental Car"][1]
        ? true
        : false;
    const rentalCarSelectEco2 =
      rentalCarSelection2 === recommendedAndEco2["Rental Car"][1]
        ? true
        : false;

    const hotelSelectDefault2 =
      hotelSelection2 === recommendedAndEco2["Hotel"][0] ? true : false;
    const hotelSelectDefaultAndEco2 =
      hotelSelection2 === recommendedAndEco2["Hotel"][1] &&
      recommendedAndEco2["Hotel"][0] === recommendedAndEco2["Hotel"][1]
        ? true
        : false;
    const hotelSelectEco2 =
      hotelSelection2 === recommendedAndEco2["Hotel"][1] ? true : false;

    const dinnerSelectDefault2 =
      dinnerSelection2 === recommendedAndEco2["Dinner"][0] ? true : false;
    const dinnerSelectDefaultAndEco2 =
      dinnerSelection2 === recommendedAndEco2["Dinner"][1] &&
      recommendedAndEco2["Dinner"][0] === recommendedAndEco2["Dinner"][1]
        ? true
        : false;
    const dinnerSelectEco2 =
      dinnerSelection2 === recommendedAndEco2["Dinner"][1] ? true : false;

    const lunchSelectDefault2 =
      lunchSelection2 === recommendedAndEco2["Lunch"][0] ? true : false;
    const lunchSelectDefaultAndEco2 =
      lunchSelection2 === recommendedAndEco2["Lunch"][1] &&
      recommendedAndEco2["Lunch"][0] === recommendedAndEco2["Lunch"][1]
        ? true
        : false;
    const lunchSelectEco2 =
      lunchSelection2 === recommendedAndEco2["Lunch"][1] ? true : false;

    const breakfastSelectDefault2 =
      breakfastSelection2 === recommendedAndEco2["Breakfast"][0] ? true : false;
    const breakfastSelectDefaultAndEco2 =
      breakfastSelection2 === recommendedAndEco2["Breakfast"][1] &&
      recommendedAndEco2["Breakfast"][0] === recommendedAndEco2["Breakfast"][1]
        ? true
        : false;
    const breakfastSelectEco2 =
      breakfastSelection2 === recommendedAndEco2["Breakfast"][1] ? true : false;

    const museumsSelectDefault2 =
      museumsSelection2 === recommendedAndEco2["Museums"][0] ? true : false;
    const museumsSelectDefaultAndEco2 =
      museumsSelection2 === recommendedAndEco2["Museums"][1] &&
      recommendedAndEco2["Museums"][0] === recommendedAndEco2["Museums"][1]
        ? true
        : false;
    const museumsSelectEco2 =
      museumsSelection2 === recommendedAndEco2["Museums"][1] ? true : false;

    const marketsSelectDefault2 =
      marketsSelection2 === recommendedAndEco2["Markets"][0] ? true : false;
    const marketsSelectDefaultAndEco2 =
      marketsSelection2 === recommendedAndEco2["Markets"][1] &&
      recommendedAndEco2["Markets"][0] === recommendedAndEco2["Markets"][1]
        ? true
        : false;
    const marketsSelectEco2 =
      marketsSelection2 === recommendedAndEco2["Markets"][1] ? true : false;

    const publicTransportationLongSelectDefault2 =
      publicTransportationLongSelection2 ===
      recommendedAndEco2["Public Transportation"][0]
        ? true
        : false;
    const publicTransportationLongSelectDefaultAndEco2 =
      publicTransportationLongSelection2 ===
        recommendedAndEco2["Public Transportation"][1] &&
      recommendedAndEco2["Public Transportation"][0] ===
        recommendedAndEco2["Public Transportation"][1]
        ? true
        : false;
    const publicTransportationLongSelectEco2 =
      publicTransportationLongSelection2 ===
      recommendedAndEco2["Public Transportation"][1]
        ? true
        : false;

    const coffeeSelectDefault2 =
      coffeeSelection2 === recommendedAndEco2["Coffee"][0] ? true : false;
    const coffeeSelectDefaultAndEco2 =
      coffeeSelection2 === recommendedAndEco2["Coffee"][1] &&
      recommendedAndEco2["Coffee"][0] === recommendedAndEco2["Coffee"][1]
        ? true
        : false;
    const coffeeSelectEco2 =
      coffeeSelection2 === recommendedAndEco2["Coffee"][1] ? true : false;

    const bakerySelectDefault2 =
      bakerySelection2 === recommendedAndEco2["Bakery"][0] ? true : false;
    const bakerySelectDefaultAndEco2 =
      bakerySelection2 === recommendedAndEco2["Bakery"][1] &&
      recommendedAndEco2["Bakery"][0] === recommendedAndEco2["Bakery"][1]
        ? true
        : false;
    const bakerySelectEco2 =
      bakerySelection2 === recommendedAndEco2["Bakery"][1] ? true : false;

    const nightLifeSelectDefault2 =
      nightLifeSelection2 === recommendedAndEco2["Night Life"][0]
        ? true
        : false;
    const nightLifeSelectDefaultAndEco2 =
      nightLifeSelection2 === recommendedAndEco2["Night Life"][1] &&
      recommendedAndEco2["Night Life"][0] ===
        recommendedAndEco2["Night Life"][1]
        ? true
        : false;
    const nightLifeSelectEco2 =
      nightLifeSelection2 === recommendedAndEco2["Night Life"][1]
        ? true
        : false;

    const groceriesSelectDefault2 =
      groceriesSelection2 === recommendedAndEco2["Groceries"][0] ? true : false;
    const groceriesSelectDefaultAndEco2 =
      groceriesSelection2 === recommendedAndEco2["Groceries"][1] &&
      recommendedAndEco2["Groceries"][0] === recommendedAndEco2["Groceries"][1]
        ? true
        : false;
    const groceriesSelectEco2 =
      groceriesSelection2 === recommendedAndEco2["Groceries"][1] ? true : false;

    const souveneirsSelectDefault2 =
      souveneirsSelection2 === recommendedAndEco2["Souveneirs"][0]
        ? true
        : false;
    const souveneirsSelectDefaultAndEco2 =
      souveneirsSelection2 === recommendedAndEco2["Souveneirs"][1] &&
      recommendedAndEco2["Souveneirs"][0] ===
        recommendedAndEco2["Souveneirs"][1]
        ? true
        : false;
    const souveneirsSelectEco2 =
      souveneirsSelection2 === recommendedAndEco2["Souveneirs"][1]
        ? true
        : false;

    const shoppingSelectDefault2 =
      shoppingSelection2 === recommendedAndEco2["Shopping"][0] ? true : false;
    const shoppingSelectDefaultAndEco2 =
      shoppingSelection2 === recommendedAndEco2["Shopping"][1] &&
      recommendedAndEco2["Shopping"][0] === recommendedAndEco2["Shopping"][1]
        ? true
        : false;
    const shoppingSelectEco2 =
      shoppingSelection2 === recommendedAndEco2["Shopping"][1] ? true : false;

    const currencyExchangeSelectDefault2 =
      currencyExchangeSelection2 === recommendedAndEco2["Currency Exchange"][0]
        ? true
        : false;
    const currencyExchangeSelectDefaultAndEco2 =
      currencyExchangeSelection2 ===
        recommendedAndEco2["Currency Exchange"][1] &&
      recommendedAndEco2["Currency Exchange"][0] ===
        recommendedAndEco2["Currency Exchange"][1]
        ? true
        : false;
    const currencyExchangeSelectEco2 =
      currencyExchangeSelection2 === recommendedAndEco2["Currency Exchange"][1]
        ? true
        : false;

    const luggageSelectDefault2 =
      luggageSelection2 === recommendedAndEco2["Luggage"][0] ? true : false;
    const luggageSelectDefaultAndEco2 =
      luggageSelection2 === recommendedAndEco2["Luggage"][1] &&
      recommendedAndEco2["Luggage"][0] === recommendedAndEco2["Luggage"][1]
        ? true
        : false;
    const luggageSelectEco2 =
      luggageSelection2 === recommendedAndEco2["Luggage"][1] ? true : false;

    const dayTripSelectDefault2 =
      dayTripSelection2 === recommendedAndEco2["Day Trip"][0] ? true : false;
    const dayTripSelectDefaultAndEco2 =
      dayTripSelection2 === recommendedAndEco2["Day Trip"][1] &&
      recommendedAndEco2["Day Trip"][0] === recommendedAndEco2["Day Trip"][1]
        ? true
        : false;
    const dayTripSelectEco2 =
      dayTripSelection2 === recommendedAndEco2["Day Trip"][1] ? true : false;

    const travelPlugAdapterSelectDefault2 =
      travelPlugAdapterSelection2 ===
      recommendedAndEco2["Travel Plug Adapter"][0]
        ? true
        : false;
    const travelPlugAdapterSelectDefaultAndEco2 =
      travelPlugAdapterSelection2 ===
        recommendedAndEco2["Travel Plug Adapter"][1] &&
      recommendedAndEco2["Travel Plug Adapter"][0] ===
        recommendedAndEco2["Travel Plug Adapter"][1]
        ? true
        : false;
    const travelPlugAdapterSelectEco2 =
      travelPlugAdapterSelection2 ===
      recommendedAndEco2["Travel Plug Adapter"][1]
        ? true
        : false;

    const flightSelectDefault3 =
      flightSelection3 === recommendedAndEco3["Flight"][0] ? true : false;
    const flightSelectDefaultAndEco3 =
      flightSelection3 === recommendedAndEco3["Flight"][1] &&
      recommendedAndEco3["Flight"][0] === recommendedAndEco3["Flight"][1]
        ? true
        : false;
    const flightSelectEco3 =
      flightSelection3 === recommendedAndEco3["Flight"][1] ? true : false;

    const rentalCarSelectDefault3 =
      rentalCarSelection3 === recommendedAndEco3["Rental Car"][0]
        ? true
        : false;
    const rentalCarSelectDefaultAndEco3 =
      rentalCarSelection3 === recommendedAndEco3["Rental Car"][1] &&
      recommendedAndEco3["Rental Car"][0] ===
        recommendedAndEco3["Rental Car"][1]
        ? true
        : false;
    const rentalCarSelectEco3 =
      rentalCarSelection3 === recommendedAndEco3["Rental Car"][1]
        ? true
        : false;

    const hotelSelectDefault3 =
      hotelSelection3 === recommendedAndEco3["Hotel"][0] ? true : false;
    const hotelSelectDefaultAndEco3 =
      hotelSelection3 === recommendedAndEco3["Hotel"][1] &&
      recommendedAndEco3["Hotel"][0] === recommendedAndEco3["Hotel"][1]
        ? true
        : false;
    const hotelSelectEco3 =
      hotelSelection3 === recommendedAndEco3["Hotel"][1] ? true : false;

    const dinnerSelectDefault3 =
      dinnerSelection3 === recommendedAndEco3["Dinner"][0] ? true : false;
    const dinnerSelectDefaultAndEco3 =
      dinnerSelection3 === recommendedAndEco3["Dinner"][1] &&
      recommendedAndEco3["Dinner"][0] === recommendedAndEco3["Dinner"][1]
        ? true
        : false;
    const dinnerSelectEco3 =
      dinnerSelection3 === recommendedAndEco3["Dinner"][1] ? true : false;

    const lunchSelectDefault3 =
      lunchSelection3 === recommendedAndEco3["Lunch"][0] ? true : false;
    const lunchSelectDefaultAndEco3 =
      lunchSelection3 === recommendedAndEco3["Lunch"][1] &&
      recommendedAndEco3["Lunch"][0] === recommendedAndEco3["Lunch"][1]
        ? true
        : false;
    const lunchSelectEco3 =
      lunchSelection3 === recommendedAndEco3["Lunch"][1] ? true : false;

    const breakfastSelectDefault3 =
      breakfastSelection3 === recommendedAndEco3["Breakfast"][0] ? true : false;
    const breakfastSelectDefaultAndEco3 =
      breakfastSelection3 === recommendedAndEco3["Breakfast"][1] &&
      recommendedAndEco3["Breakfast"][0] === recommendedAndEco3["Breakfast"][1]
        ? true
        : false;
    const breakfastSelectEco3 =
      breakfastSelection3 === recommendedAndEco3["Breakfast"][1] ? true : false;

    const museumsSelectDefault3 =
      museumsSelection3 === recommendedAndEco3["Museums"][0] ? true : false;
    const museumsSelectDefaultAndEco3 =
      museumsSelection3 === recommendedAndEco3["Museums"][1] &&
      recommendedAndEco3["Museums"][0] === recommendedAndEco3["Museums"][1]
        ? true
        : false;
    const museumsSelectEco3 =
      museumsSelection3 === recommendedAndEco3["Museums"][1] ? true : false;

    const marketsSelectDefault3 =
      marketsSelection3 === recommendedAndEco3["Markets"][0] ? true : false;
    const marketsSelectDefaultAndEco3 =
      marketsSelection3 === recommendedAndEco3["Markets"][1] &&
      recommendedAndEco3["Markets"][0] === recommendedAndEco3["Markets"][1]
        ? true
        : false;
    const marketsSelectEco3 =
      marketsSelection3 === recommendedAndEco3["Markets"][1] ? true : false;

    const publicTransportationLongSelectDefault3 =
      publicTransportationLongSelection3 ===
      recommendedAndEco3["Public Transportation"][0]
        ? true
        : false;
    const publicTransportationLongSelectDefaultAndEco3 =
      publicTransportationLongSelection3 ===
        recommendedAndEco3["Public Transportation"][1] &&
      recommendedAndEco3["Public Transportation"][0] ===
        recommendedAndEco3["Public Transportation"][1]
        ? true
        : false;
    const publicTransportationLongSelectEco3 =
      publicTransportationLongSelection3 ===
      recommendedAndEco3["Public Transportation"][1]
        ? true
        : false;

    const coffeeSelectDefault3 =
      coffeeSelection3 === recommendedAndEco3["Coffee"][0] ? true : false;
    const coffeeSelectDefaultAndEco3 =
      coffeeSelection3 === recommendedAndEco3["Coffee"][1] &&
      recommendedAndEco3["Coffee"][0] === recommendedAndEco3["Coffee"][1]
        ? true
        : false;
    const coffeeSelectEco3 =
      coffeeSelection3 === recommendedAndEco3["Coffee"][1] ? true : false;

    const bakerySelectDefault3 =
      bakerySelection3 === recommendedAndEco3["Bakery"][0] ? true : false;
    const bakerySelectDefaultAndEco3 =
      bakerySelection3 === recommendedAndEco3["Bakery"][1] &&
      recommendedAndEco3["Bakery"][0] === recommendedAndEco3["Bakery"][1]
        ? true
        : false;
    const bakerySelectEco3 =
      bakerySelection3 === recommendedAndEco3["Bakery"][1] ? true : false;

    const nightLifeSelectDefault3 =
      nightLifeSelection3 === recommendedAndEco3["Night Life"][0]
        ? true
        : false;
    const nightLifeSelectDefaultAndEco3 =
      nightLifeSelection3 === recommendedAndEco3["Night Life"][1] &&
      recommendedAndEco3["Night Life"][0] ===
        recommendedAndEco3["Night Life"][1]
        ? true
        : false;
    const nightLifeSelectEco3 =
      nightLifeSelection3 === recommendedAndEco3["Night Life"][1]
        ? true
        : false;

    const groceriesSelectDefault3 =
      groceriesSelection3 === recommendedAndEco3["Groceries"][0] ? true : false;
    const groceriesSelectDefaultAndEco3 =
      groceriesSelection3 === recommendedAndEco3["Groceries"][1] &&
      recommendedAndEco3["Groceries"][0] === recommendedAndEco3["Groceries"][1]
        ? true
        : false;
    const groceriesSelectEco3 =
      groceriesSelection3 === recommendedAndEco3["Groceries"][1] ? true : false;

    const souveneirsSelectDefault3 =
      souveneirsSelection3 === recommendedAndEco3["Souveneirs"][0]
        ? true
        : false;
    const souveneirsSelectDefaultAndEco3 =
      souveneirsSelection3 === recommendedAndEco3["Souveneirs"][1] &&
      recommendedAndEco3["Souveneirs"][0] ===
        recommendedAndEco3["Souveneirs"][1]
        ? true
        : false;
    const souveneirsSelectEco3 =
      souveneirsSelection3 === recommendedAndEco3["Souveneirs"][1]
        ? true
        : false;

    const shoppingSelectDefault3 =
      shoppingSelection3 === recommendedAndEco3["Shopping"][0] ? true : false;
    const shoppingSelectDefaultAndEco3 =
      shoppingSelection3 === recommendedAndEco3["Shopping"][1] &&
      recommendedAndEco3["Shopping"][0] === recommendedAndEco3["Shopping"][1]
        ? true
        : false;
    const shoppingSelectEco3 =
      shoppingSelection3 === recommendedAndEco3["Shopping"][1] ? true : false;

    const currencyExchangeSelectDefault3 =
      currencyExchangeSelection3 === recommendedAndEco3["Currency Exchange"][0]
        ? true
        : false;
    const currencyExchangeSelectDefaultAndEco3 =
      currencyExchangeSelection3 ===
        recommendedAndEco3["Currency Exchange"][1] &&
      recommendedAndEco3["Currency Exchange"][0] ===
        recommendedAndEco3["Currency Exchange"][1]
        ? true
        : false;
    const currencyExchangeSelectEco3 =
      currencyExchangeSelection3 === recommendedAndEco3["Currency Exchange"][1]
        ? true
        : false;

    const luggageSelectDefault3 =
      luggageSelection3 === recommendedAndEco3["Luggage"][0] ? true : false;
    const luggageSelectDefaultAndEco3 =
      luggageSelection3 === recommendedAndEco3["Luggage"][1] &&
      recommendedAndEco3["Luggage"][0] === recommendedAndEco3["Luggage"][1]
        ? true
        : false;
    const luggageSelectEco3 =
      luggageSelection3 === recommendedAndEco3["Luggage"][1] ? true : false;

    const dayTripSelectDefault3 =
      dayTripSelection3 === recommendedAndEco3["Day Trip"][0] ? true : false;
    const dayTripSelectDefaultAndEco3 =
      dayTripSelection3 === recommendedAndEco3["Day Trip"][1] &&
      recommendedAndEco3["Day Trip"][0] === recommendedAndEco3["Day Trip"][1]
        ? true
        : false;
    const dayTripSelectEco3 =
      dayTripSelection3 === recommendedAndEco3["Day Trip"][1] ? true : false;

    const travelPlugAdapterSelectDefault3 =
      travelPlugAdapterSelection3 ===
      recommendedAndEco3["Travel Plug Adapter"][0]
        ? true
        : false;
    const travelPlugAdapterSelectDefaultAndEco3 =
      travelPlugAdapterSelection3 ===
        recommendedAndEco3["Travel Plug Adapter"][1] &&
      recommendedAndEco3["Travel Plug Adapter"][0] ===
        recommendedAndEco3["Travel Plug Adapter"][1]
        ? true
        : false;
    const travelPlugAdapterSelectEco3 =
      travelPlugAdapterSelection3 ===
      recommendedAndEco3["Travel Plug Adapter"][1]
        ? true
        : false;

    const uploadUser = async () => {
      const user = {
        userId: totalUsers,
        prolificId: prolificId,
        orderOfAgents: agentPath,
        timeElapsed: timeElapsed,
        timeStamp: datetime,
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
        products: productsSelection,
        environDecis: environDecisSelection,
        purchaseEnviron: purchaseEnvironSelection,
        resources: resourcesSelection,
        environResp: environRespSelection,
        inconvenience: inconvenienceSelection,
        hotels: hotelSelection,
        afternoons: afternoonSelection,
        restaurants: restaurantSelection,
        vacationType: vacationSelection,
        nightLife: activitiesSelection["Nightlife and entertainment"],
        outdoor: activitiesSelection["Outdoor activities"],
        cultural: activitiesSelection["Cultural experiences"],
        relaxation: activitiesSelection["Relaxation"],
        adventure: activitiesSelection["Adventure"],
        sports: activitiesSelection["Sports"],
        history: activitiesSelection["History and heritage"],
        food: activitiesSelection["Food and wine"],
        shopping: activitiesSelection["Shopping"],
        volunteer: activitiesSelection["Volunteer tourism"],
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
          genderSelection["Genderqueer, gender non-binary, or gender fluid"],
        transFemale: genderSelection["Transgender Female"],
        transMale: genderSelection["Transgender Male"],
        noResponseGender: genderSelection["Prefer not to answer"],
        genderOther: genderText,
        income: incomeSelection,
        ladder: ladderSelection,
        education: educationSelection,
        political: politicalSelection,
        economic: economicSelection,
        social: socialSelection,
        age: ageSelection,
        indian: raceSelection["American Indian or Alaska Native"],
        asian: raceSelection["Asian"],
        african: raceSelection["Black or African American"],
        hispanic: raceSelection["Hispanic, Latino, or Spanish"],
        arab: raceSelection["Middle Eastern or Arab"],
        hawaiian: raceSelection["Native Hawaiian or other Pacific Islander"],
        white: raceSelection["White"],
        otherRace: raceText,
        residence: residenceSelection,
        internetAccess: internetAccessSelection,
        internetLookup: internetLookupSelection,
        eCommunicationUse: eCommunicationUseSelection,
        attentionCheck1: correctAttentionCheck1,
        flight1: flightSelection1,
        originalFlight1: recommendedAndEco1["Flight"][0],
        flightEco1: recommendedAndEco1["Flight"][1],
        flightSelectDefault1,
        flightSelectDefaultAndEco1,
        flightSelectEco1,
        rentalCar1: rentalCarSelection1,
        originalRentalCar1: recommendedAndEco1["Rental Car"][0],
        rentalCarEco1: recommendedAndEco1["Rental Car"][1],
        rentalCarSelectDefault1,
        rentalCarSelectDefaultAndEco1,
        rentalCarSelectEco1,
        hotel1: hotelSelection1,
        originalHotel1: recommendedAndEco1["Hotel"][0],
        hotelEco1: recommendedAndEco1["Hotel"][1],
        hotelSelectDefault1,
        hotelSelectDefaultAndEco1,
        hotelSelectEco1,
        dinner1: dinnerSelection1,
        originalDinner1: recommendedAndEco1["Dinner"][0],
        dinnerEco1: recommendedAndEco1["Dinner"][1],
        dinnerSelectDefault1,
        dinnerSelectDefaultAndEco1,
        dinnerSelectEco1,
        lunch1: lunchSelection1,
        originalLunch1: recommendedAndEco1["Lunch"][0],
        lunchEco1: recommendedAndEco1["Lunch"][1],
        lunchSelectDefault1,
        lunchSelectDefaultAndEco1,
        lunchSelectEco1,
        breakfast1: breakfastSelection1,
        originalBreakfast1: recommendedAndEco1["Breakfast"][0],
        breakfastEco1: recommendedAndEco1["Breakfast"][1],
        breakfastSelectDefault1,
        breakfastSelectDefaultAndEco1,
        breakfastSelectEco1,
        museums1: museumsSelection1,
        originalMuseums1: recommendedAndEco1["Museums"][0],
        museumsEco1: recommendedAndEco1["Museums"][1],
        museumsSelectDefault1,
        museumsSelectDefaultAndEco1,
        museumsSelectEco1,
        markets1: marketsSelection1,
        originalMarkets1: recommendedAndEco1["Markets"][0],
        marketsEco1: recommendedAndEco1["Markets"][1],
        marketsSelectDefault1,
        marketsSelectDefaultAndEco1,
        marketsSelectEco1,
        publicTransportationLong1: publicTransportationLongSelection1,
        originalPublicTransportationLong1:
          recommendedAndEco1["Public Transportation"][0],
        publicTransportationLongEco1:
          recommendedAndEco1["Public Transportation"][1],
        publicTransportationLongSelectDefault1,
        publicTransportationLongSelectDefaultAndEco1,
        publicTransportationLongSelectEco1,
        coffee1: coffeeSelection1,
        originalCoffee1: recommendedAndEco1["Coffee"][0],
        coffeeEco1: recommendedAndEco1["Coffee"][1],
        coffeeSelectDefault1,
        coffeeSelectDefaultAndEco1,
        coffeeSelectEco1,
        bakery1: bakerySelection1,
        originalBakery1: recommendedAndEco1["Bakery"][0],
        bakeryEco1: recommendedAndEco1["Bakery"][1],
        bakerySelectDefault1,
        bakerySelectDefaultAndEco1,
        bakerySelectEco1,
        nightLife1: nightLifeSelection1,
        originalNightLife1: recommendedAndEco1["Night Life"][0],
        nightLifeEco1: recommendedAndEco1["Night Life"][1],
        nightLifeSelectDefault1,
        nightLifeSelectDefaultAndEco1,
        nightLifeSelectEco1,
        groceries1: groceriesSelection1,
        originalGroceries1: recommendedAndEco1["Groceries"][0],
        groceriesEco1: recommendedAndEco1["Groceries"][1],
        groceriesSelectDefault1,
        groceriesSelectDefaultAndEco1,
        groceriesSelectEco1,
        souveneirs1: souveneirsSelection1,
        originalSouveneirs1: recommendedAndEco1["Souveneirs"][0],
        souveneirsEco1: recommendedAndEco1["Souveneirs"][1],
        souveneirsSelectDefault1,
        souveneirsSelectDefaultAndEco1,
        souveneirsSelectEco1,
        shopping1: shoppingSelection1,
        originalShopping1: recommendedAndEco1["Shopping"][0],
        shoppingEco1: recommendedAndEco1["Shopping"][1],
        shoppingSelectDefault1,
        shoppingSelectDefaultAndEco1,
        shoppingSelectEco1,
        currencyExchange1: currencyExchangeSelection1,
        originalCurrencyExchange1: recommendedAndEco1["Currency Exchange"][0],
        currencyExchangeEco1: recommendedAndEco1["Currency Exchange"][1],
        currencyExchangeSelectDefault1,
        currencyExchangeSelectDefaultAndEco1,
        currencyExchangeSelectEco1,
        luggage1: luggageSelection1,
        originalLuggage1: recommendedAndEco1["Luggage"][0],
        luggageEco1: recommendedAndEco1["Luggage"][1],
        luggageSelectDefault1,
        luggageSelectDefaultAndEco1,
        luggageSelectEco1,
        dayTrip1: dayTripSelection1,
        originalDayTrip1: recommendedAndEco1["Day Trip"][0],
        dayTripEco1: recommendedAndEco1["Day Trip"][1],
        dayTripSelectDefault1,
        dayTripSelectDefaultAndEco1,
        dayTripSelectEco1,
        travelPlugAdapter1: travelPlugAdapterSelection1,
        originalTravelPlugAdapter1:
          recommendedAndEco1["Travel Plug Adapter"][0],
        travelPlugAdapterEco1: recommendedAndEco1["Travel Plug Adapter"][1],
        travelPlugAdapterSelectDefault1,
        travelPlugAdapterSelectDefaultAndEco1,
        travelPlugAdapterSelectEco1,
        choose1: chooseSelection1,
        charge1: chargeSelection1,
        account1: accountSelection1,
        wait1: waitSelection1,
        sense1: senseSelection1,
        engage1: engageSelection1,
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
        attentionCheck2: correctAttentionCheck2,
        flight2: flightSelection2,
        originalFlight2: recommendedAndEco2["Flight"][0],
        flightEco2: recommendedAndEco2["Flight"][1],
        flightSelectDefault2,
        flightSelectDefaultAndEco2,
        flightSelectEco2,
        rentalCar2: rentalCarSelection2,
        originalRentalCar2: recommendedAndEco2["Rental Car"][0],
        rentalCarEco2: recommendedAndEco2["Rental Car"][1],
        rentalCarSelectDefault2,
        rentalCarSelectDefaultAndEco2,
        rentalCarSelectEco2,
        hotel2: hotelSelection2,
        originalHotel2: recommendedAndEco2["Hotel"][0],
        hotelEco2: recommendedAndEco2["Hotel"][1],
        hotelSelectDefault2,
        hotelSelectDefaultAndEco2,
        hotelSelectEco2,
        dinner2: dinnerSelection2,
        originalDinner2: recommendedAndEco2["Dinner"][0],
        dinnerEco2: recommendedAndEco2["Dinner"][1],
        dinnerSelectDefault2,
        dinnerSelectDefaultAndEco2,
        dinnerSelectEco2,
        lunch2: lunchSelection2,
        originalLunch2: recommendedAndEco2["Lunch"][0],
        lunchEco2: recommendedAndEco2["Lunch"][1],
        lunchSelectDefault2,
        lunchSelectDefaultAndEco2,
        lunchSelectEco2,
        breakfast2: breakfastSelection2,
        originalBreakfast2: recommendedAndEco2["Breakfast"][0],
        breakfastEco2: recommendedAndEco2["Breakfast"][1],
        breakfastSelectDefault2,
        breakfastSelectDefaultAndEco2,
        breakfastSelectEco2,
        museums2: museumsSelection2,
        originalMuseums2: recommendedAndEco2["Museums"][0],
        museumsEco2: recommendedAndEco2["Museums"][1],
        museumsSelectDefault2,
        museumsSelectDefaultAndEco2,
        museumsSelectEco2,
        markets2: marketsSelection2,
        originalMarkets2: recommendedAndEco2["Markets"][0],
        marketsEco2: recommendedAndEco2["Markets"][1],
        marketsSelectDefault2,
        marketsSelectDefaultAndEco2,
        marketsSelectEco2,
        publicTransportationLong2: publicTransportationLongSelection2,
        originalPublicTransportationLong2:
          recommendedAndEco2["Public Transportation"][0],
        publicTransportationLongEco2:
          recommendedAndEco2["Public Transportation"][1],
        publicTransportationLongSelectDefault2,
        publicTransportationLongSelectDefaultAndEco2,
        publicTransportationLongSelectEco2,
        coffee2: coffeeSelection2,
        originalCoffee2: recommendedAndEco2["Coffee"][0],
        coffeeEco2: recommendedAndEco2["Coffee"][1],
        coffeeSelectDefault2,
        coffeeSelectDefaultAndEco2,
        coffeeSelectEco2,
        bakery2: bakerySelection2,
        originalBakery2: recommendedAndEco2["Bakery"][0],
        bakeryEco2: recommendedAndEco2["Bakery"][1],
        bakerySelectDefault2,
        bakerySelectDefaultAndEco2,
        bakerySelectEco2,
        nightLife2: nightLifeSelection2,
        originalNightLife2: recommendedAndEco2["Night Life"][0],
        nightLifeEco2: recommendedAndEco2["Night Life"][1],
        nightLifeSelectDefault2,
        nightLifeSelectDefaultAndEco2,
        nightLifeSelectEco2,
        groceries2: groceriesSelection2,
        originalGroceries2: recommendedAndEco2["Groceries"][0],
        groceriesEco2: recommendedAndEco2["Groceries"][1],
        groceriesSelectDefault2,
        groceriesSelectDefaultAndEco2,
        groceriesSelectEco2,
        souveneirs2: souveneirsSelection2,
        originalSouveneirs2: recommendedAndEco2["Souveneirs"][0],
        souveneirsEco2: recommendedAndEco2["Souveneirs"][1],
        souveneirsSelectDefault2,
        souveneirsSelectDefaultAndEco2,
        souveneirsSelectEco2,
        shopping2: shoppingSelection2,
        originalShopping2: recommendedAndEco2["Shopping"][0],
        shoppingEco2: recommendedAndEco2["Shopping"][1],
        shoppingSelectDefault2,
        shoppingSelectDefaultAndEco2,
        shoppingSelectEco2,
        currencyExchange2: currencyExchangeSelection2,
        originalCurrencyExchange2: recommendedAndEco2["Currency Exchange"][0],
        currencyExchangeEco2: recommendedAndEco2["Currency Exchange"][1],
        currencyExchangeSelectDefault2,
        currencyExchangeSelectDefaultAndEco2,
        currencyExchangeSelectEco2,
        luggage2: luggageSelection2,
        originalLuggage2: recommendedAndEco2["Luggage"][0],
        luggageEco2: recommendedAndEco2["Luggage"][1],
        luggageSelectDefault2,
        luggageSelectDefaultAndEco2,
        luggageSelectEco2,
        dayTrip2: dayTripSelection2,
        originalDayTrip2: recommendedAndEco2["Day Trip"][0],
        dayTripEco2: recommendedAndEco2["Day Trip"][1],
        dayTripSelectDefault2,
        dayTripSelectDefaultAndEco2,
        dayTripSelectEco2,
        travelPlugAdapter2: travelPlugAdapterSelection2,
        originalTravelPlugAdapter2:
          recommendedAndEco2["Travel Plug Adapter"][0],
        travelPlugAdapterEco2: recommendedAndEco2["Travel Plug Adapter"][1],
        travelPlugAdapterSelectDefault2,
        travelPlugAdapterSelectDefaultAndEco2,
        travelPlugAdapterSelectEco2,
        choose2: chooseSelection2,
        charge2: chargeSelection2,
        account2: accountSelection2,
        wait2: waitSelection2,
        sense2: senseSelection2,
        engage2: engageSelection2,
        understood2: understoodSelection2,
        listen2: listenSelection2,
        effectiveness2: effectivenessSelection2,
        bestOption2: bestOptionSelection2,
        optionQuickly2: optionQuicklySelection2,
        productivity2: productivitySelection2,
        performance2: performanceSelection2,
        utilize2: utilizeSelection2,
        reflect2: reflectSelection2,
        identify2: identifySelection2,
        connection2: connectionSelection2,
        agentCommunicate2: agentCommunicateSelection2,
        typePerson2: typePersonSelection2,
        agentMe2: agentMeSelection2,
        suits2: suitsSelection2,
        productsFollowup2: productsFollowupSelection2,
        actionsFollowup2: actionsFollowupSelection2,
        purchaseFollowup2: purchaseFollowupSelection2,
        resourcesFollowup2: resourcesFollowupSelection2,
        responsibleFollowup2: responsibleFollowupSelection2,
        inconvenienceFollowup2: inconvenienceFollowupSelection2,
        attentionCheck3: correctAttentionCheck3,
        flight3: flightSelection3,
        originalFlight3: recommendedAndEco3["Flight"][0],
        flightEco3: recommendedAndEco3["Flight"][1],
        flightSelectDefault3,
        flightSelectDefaultAndEco3,
        flightSelectEco3,
        rentalCar3: rentalCarSelection3,
        originalRentalCar3: recommendedAndEco3["Rental Car"][0],
        rentalCarEco3: recommendedAndEco3["Rental Car"][1],
        rentalCarSelectDefault3,
        rentalCarSelectDefaultAndEco3,
        rentalCarSelectEco3,
        hotel3: hotelSelection3,
        originalHotel3: recommendedAndEco3["Hotel"][0],
        hotelEco3: recommendedAndEco3["Hotel"][1],
        hotelSelectDefault3,
        hotelSelectDefaultAndEco3,
        hotelSelectEco3,
        dinner3: dinnerSelection3,
        originalDinner3: recommendedAndEco3["Dinner"][0],
        dinnerEco3: recommendedAndEco3["Dinner"][1],
        dinnerSelectDefault3,
        dinnerSelectDefaultAndEco3,
        dinnerSelectEco3,
        lunch3: lunchSelection3,
        originalLunch3: recommendedAndEco3["Lunch"][0],
        lunchEco3: recommendedAndEco3["Lunch"][1],
        lunchSelectDefault3,
        lunchSelectDefaultAndEco3,
        lunchSelectEco3,
        breakfast3: breakfastSelection3,
        originalBreakfast3: recommendedAndEco3["Breakfast"][0],
        breakfastEco3: recommendedAndEco3["Breakfast"][1],
        breakfastSelectDefault3,
        breakfastSelectDefaultAndEco3,
        breakfastSelectEco3,
        museums3: museumsSelection3,
        originalMuseums3: recommendedAndEco3["Museums"][0],
        museumsEco3: recommendedAndEco3["Museums"][1],
        museumsSelectDefault3,
        museumsSelectDefaultAndEco3,
        museumsSelectEco3,
        markets3: marketsSelection3,
        originalMarkets3: recommendedAndEco3["Markets"][0],
        marketsEco3: recommendedAndEco3["Markets"][1],
        marketsSelectDefault3,
        marketsSelectDefaultAndEco3,
        marketsSelectEco3,
        publicTransportationLong3: publicTransportationLongSelection3,
        originalPublicTransportationLong3:
          recommendedAndEco3["Public Transportation"][0],
        publicTransportationLongEco3:
          recommendedAndEco3["Public Transportation"][1],
        publicTransportationLongSelectDefault3,
        publicTransportationLongSelectDefaultAndEco3,
        publicTransportationLongSelectEco3,
        coffee3: coffeeSelection3,
        originalCoffee3: recommendedAndEco3["Coffee"][0],
        coffeeEco3: recommendedAndEco3["Coffee"][1],
        coffeeSelectDefault3,
        coffeeSelectDefaultAndEco3,
        coffeeSelectEco3,
        bakery3: bakerySelection3,
        originalBakery3: recommendedAndEco3["Bakery"][0],
        bakeryEco3: recommendedAndEco3["Bakery"][1],
        bakerySelectDefault3,
        bakerySelectDefaultAndEco3,
        bakerySelectEco3,
        nightLife3: nightLifeSelection3,
        originalNightLife3: recommendedAndEco3["Night Life"][0],
        nightLifeEco3: recommendedAndEco3["Night Life"][1],
        nightLifeSelectDefault3,
        nightLifeSelectDefaultAndEco3,
        nightLifeSelectEco3,
        groceries3: groceriesSelection3,
        originalGroceries3: recommendedAndEco3["Groceries"][0],
        groceriesEco3: recommendedAndEco3["Groceries"][1],
        groceriesSelectDefault3,
        groceriesSelectDefaultAndEco3,
        groceriesSelectEco3,
        souveneirs3: souveneirsSelection3,
        originalSouveneirs3: recommendedAndEco3["Souveneirs"][0],
        souveneirsEco3: recommendedAndEco3["Souveneirs"][1],
        souveneirsSelectDefault3,
        souveneirsSelectDefaultAndEco3,
        souveneirsSelectEco3,
        shopping3: shoppingSelection3,
        originalShopping3: recommendedAndEco3["Shopping"][0],
        shoppingEco3: recommendedAndEco3["Shopping"][1],
        shoppingSelectDefault3,
        shoppingSelectDefaultAndEco3,
        shoppingSelectEco3,
        currencyExchange3: currencyExchangeSelection3,
        originalCurrencyExchange3: recommendedAndEco3["Currency Exchange"][0],
        currencyExchangeEco3: recommendedAndEco3["Currency Exchange"][1],
        currencyExchangeSelectDefault3,
        currencyExchangeSelectDefaultAndEco3,
        currencyExchangeSelectEco3,
        luggage3: luggageSelection3,
        originalLuggage3: recommendedAndEco3["Luggage"][0],
        luggageEco3: recommendedAndEco3["Luggage"][1],
        luggageSelectDefault3,
        luggageSelectDefaultAndEco3,
        luggageSelectEco3,
        dayTrip3: dayTripSelection3,
        originalDayTrip3: recommendedAndEco3["Day Trip"][0],
        dayTripEco3: recommendedAndEco3["Day Trip"][1],
        dayTripSelectDefault3,
        dayTripSelectDefaultAndEco3,
        dayTripSelectEco3,
        travelPlugAdapter3: travelPlugAdapterSelection3,
        originalTravelPlugAdapter3:
          recommendedAndEco3["Travel Plug Adapter"][0],
        travelPlugAdapterEco3: recommendedAndEco3["Travel Plug Adapter"][1],
        travelPlugAdapterSelectDefault3,
        travelPlugAdapterSelectDefaultAndEco3,
        travelPlugAdapterSelectEco3,
        choose3: chooseSelection3,
        charge3: chargeSelection3,
        account3: accountSelection3,
        wait3: waitSelection3,
        sense3: senseSelection3,
        engage3: engageSelection3,
        understood3: understoodSelection3,
        listen3: listenSelection3,
        effectiveness3: effectivenessSelection3,
        bestOption3: bestOptionSelection3,
        optionQuickly3: optionQuicklySelection3,
        productivity3: productivitySelection3,
        performance3: performanceSelection3,
        utilize3: utilizeSelection3,
        reflect3: reflectSelection3,
        identify3: identifySelection3,
        connection3: connectionSelection3,
        agentCommunicate3: agentCommunicateSelection3,
        typePerson3: typePersonSelection3,
        agentMe3: agentMeSelection3,
        suits3: suitsSelection3,
        productsFollowup3: productsFollowupSelection3,
        actionsFollowup3: actionsFollowupSelection3,
        purchaseFollowup3: purchaseFollowupSelection3,
        resourcesFollowup3: resourcesFollowupSelection3,
        responsibleFollowup3: responsibleFollowupSelection3,
        inconvenienceFollowup3: inconvenienceFollowupSelection3,
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
        feedback: experienceText,
      };
      try {
        const res = await fetch(url + "/api/user", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        if (!res.ok) {
          setUploaded(2);
          setErrorMsg(json.error);
          console.log(json.error);
          setUserJson(user);
        } else {
          console.log("Successfully uploaded");
          setUploaded(1);
        }
      } catch (error) {
        console.log(error);
        setUploaded(2);
        setErrorMsg(error.message);

        setUserJson(user);
      }
    };
    uploadUser();
  };
  function downloadCSV(csvString, filename = "results.csv") {
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    var link = document.createElement("a");

    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      var csvContent =
        "data:text/csv;charset=utf-8," + encodeURIComponent(csvString);
      window.open(csvContent, "_blank");
    }
  }

  const handleDownload = () => {
    if (userJson) {
      const csvData = json2csv(userJson);
      downloadCSV(csvData);
    } else {
      console.log("No data to download");
    }
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
        <Prolific
          onNext={handleNext}
          onIdChange={handleProlificIdChange}
        />
      )}
      {step === 4 && (
        <GeneralInstructions1
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 5 && (
        <GeneralInstructions2
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 6 && (
        <GeneralInstructions4
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 7 && (
        <GeneralInstructions3
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 8 && <Introduction onNext={handleNextChangeHeader} />}
      {step === 9 && (
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
      {step === 10 && (
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
      {step === 11 && (
        <Question2A
          onNext={handleNext}
          onBack={handleBack}
          arr={hotelsArr}
          onHotelChange={handleHotelChange}
        />
      )}
      {step === 12 && (
        <Question2B
          onNext={handleNext}
          onBack={handleBack}
          arr={afternoonArr}
          onAfternoonChange={handleAfternoonChange}
        />
      )}
      {step === 13 && (
        <Question2C
          onNext={handleNext}
          onBack={handleBack}
          arr={restaurantArr}
          onRestaurantChange={handleRestaurantChange}
        />
      )}
      {step === 14 && (
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
      {step === 15 && (
        <Question4
          onNext={handleNextFetchUsers}
          onBack={handleBack}
          onInterestsChange={handleInterestsChange}
        />
      )}
      {step === 16 && (
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
      {step === 17 && <SubmitPage onNext={handleNextSetAgents} />}
      {step === 18 && <Loading onNext={handleNext} />}
      {step === 19 && (
        <Instructions1
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 20 && (
        <Instructions2
          onNext={handleNext}
          agent={agent1}
        />
      )}
      {step === 21 && (
        <AttentionCheck
          onNext={handleNextAttentionCheck1}
          agent={agent1}
          onRadioChange={handleAttentionCheckChange}
        />
      )}
      {step === 22 && (
        <AttentionCheckAnswer
          onNext={handleNextChangeItineraryHeader}
          selection={attentionCheckSelection}
          curAgent={curAgent}
        />
      )}
      {step === 23 && (
        <Itinerary
          onNext={handleNext}
          type={"Rental Car"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleRentalCarSelection1}
        />
      )}
      {step === 24 && (
        <Itinerary
          onNext={handleNext}
          type={"Hotel"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleHotelSelection1}
        />
      )}
      {step === 25 && (
        <Itinerary
          onNext={handleNext}
          type={"Dinner"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleDinnerSelection1}
        />
      )}
      {step === 26 && (
        <Itinerary
          onNext={handleNext}
          type={"Lunch"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleLunchSelection1}
        />
      )}
      {step === 27 && (
        <Itinerary
          onNext={handleNext}
          type={"Breakfast"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleBreakfastSelection1}
        />
      )}
      {step === 28 && (
        <Itinerary
          onNext={handleNext}
          type={"Museums"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleMuseumsSelection1}
        />
      )}
      {step === 29 && (
        <Itinerary
          onNext={handleNext}
          type={"Markets"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleMarketsSelection1}
        />
      )}
      {step === 30 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handlePublicTransportationLongSelection1}
        />
      )}
      {step === 31 && (
        <Itinerary
          onNext={handleNext}
          type={"Coffee"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleCoffeeSelection1}
        />
      )}
      {step === 32 && (
        <Itinerary
          onNext={handleNext}
          type={"Bakery"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleBakerySelection1}
        />
      )}
      {step === 33 && (
        <Itinerary
          onNext={handleNext}
          type={"Night Life"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleNightLifeSelection1}
        />
      )}
      {step === 34 && (
        <Itinerary
          onNext={handleNext}
          type={"Groceries"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleGroceriesSelection1}
        />
      )}
      {step === 35 && (
        <Itinerary
          onNext={handleNext}
          type={"Souveneirs"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleSouveneirsSelection1}
        />
      )}
      {step === 36 && (
        <Itinerary
          onNext={handleNext}
          type={"Shopping"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleShoppingSelection1}
        />
      )}
      {step === 37 && (
        <Itinerary
          onNext={handleNext}
          type={"Currency Exchange"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleCurrencyExchangeSelection1}
        />
      )}
      {step === 38 && (
        <Itinerary
          onNext={handleNext}
          type={"Luggage"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleLuggageSelection1}
        />
      )}
      {step === 39 && (
        <Itinerary
          onNext={handleNext}
          type={"Day Trip"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleDayTripSelection1}
        />
      )}
      {step === 40 && (
        <Itinerary
          onNext={handleNextChangeItineraryHeader}
          type={"Travel Plug Adapter"}
          features={itineraryFeatures1}
          recommendedAndEco={recommendedAndEco1}
          onSelectionChange={handleTravelPlugAdapterSelection1}
        />
      )}
      {step === 41 && (
        <FollowupQuestions1
          onNext={handleNext}
          agent={agent1}
          onChooseChange={handleChooseSelection1}
          onChargeChange={handleChargeSelection1}
          onAccountChange={handleAccountSelection1}
          onWaitChange={handleWaitSelection1}
          onSenseChange={handleSenseSelection1}
          onEngageChange={handleEngageSelection1}
          onUnderstoodChange={handleUnderstoodSelection1}
          onListenChange={handleListenSelection1}
        />
      )}
      {step === 42 && (
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
      {step === 43 && (
        <FollowupQuestions3
          onNext={handleNext}
          agent={agent1}
          onReflectChange={handleReflectSelection1}
          onIdentifyChange={handleIdentifySelection1}
          onConnectionChange={handleConnectionSelection1}
          onAgentCommunicateChange={handleAgentCommunicateSelection1}
          onTypePersonChange={handleTypePersonSelection1}
          onAgentMeChange={handleAgentMeSelection1}
          onSuitsChange={handleSuitsSelection1}
        />
      )}
      {step === 44 && (
        <FollowupQuestionsGreen
          onNext={handleNextAgent1}
          agent={agent1}
          onProductsFollowupChange={handleProductsFollowupSelection1}
          onActionsFollowupChange={handleActionsFollowupSelection1}
          onPurchaseFollowupChange={handlePurchaseFollowupSelection1}
          onResourcesFollowupChange={handleResourcesFollowupSelection1}
          onResponsibleFollowupChange={handleResponsibleFollowupSelection1}
          onInconvenienceFollowupChange={handleInconvenienceFollowupSelection1}
        />
      )}
      {step === 45 && (
        <Instructions1
          onNext={handleNext}
          agent={agent2}
        />
      )}
      {step === 46 && (
        <Instructions2
          onNext={handleNext}
          agent={agent2}
        />
      )}
      {step === 47 && (
        <AttentionCheck
          onNext={handleNextAttentionCheck2}
          agent={agent2}
          onRadioChange={handleAttentionCheckChange}
        />
      )}
      {step === 48 && (
        <AttentionCheckAnswer
          onNext={handleNextChangeItineraryHeader}
          selection={attentionCheckSelection}
          curAgent={curAgent}
        />
      )}

      {step === 49 && (
        <Itinerary
          onNext={handleNext}
          type={"Rental Car"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleRentalCarSelection2}
        />
      )}
      {step === 50 && (
        <Itinerary
          onNext={handleNext}
          type={"Hotel"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleHotelSelection2}
        />
      )}
      {step === 51 && (
        <Itinerary
          onNext={handleNext}
          type={"Dinner"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleDinnerSelection2}
        />
      )}
      {step === 52 && (
        <Itinerary
          onNext={handleNext}
          type={"Lunch"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleLunchSelection2}
        />
      )}
      {step === 53 && (
        <Itinerary
          onNext={handleNext}
          type={"Breakfast"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleBreakfastSelection2}
        />
      )}
      {step === 54 && (
        <Itinerary
          onNext={handleNext}
          type={"Museums"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleMuseumsSelection2}
        />
      )}
      {step === 55 && (
        <Itinerary
          onNext={handleNext}
          type={"Markets"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleMarketsSelection2}
        />
      )}
      {step === 56 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handlePublicTransportationLongSelection2}
        />
      )}
      {step === 57 && (
        <Itinerary
          onNext={handleNext}
          type={"Coffee"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleCoffeeSelection2}
        />
      )}
      {step === 58 && (
        <Itinerary
          onNext={handleNext}
          type={"Bakery"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleBakerySelection2}
        />
      )}
      {step === 59 && (
        <Itinerary
          onNext={handleNext}
          type={"Night Life"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleNightLifeSelection2}
        />
      )}
      {step === 60 && (
        <Itinerary
          onNext={handleNext}
          type={"Groceries"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleGroceriesSelection2}
        />
      )}
      {step === 61 && (
        <Itinerary
          onNext={handleNext}
          type={"Souveneirs"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleSouveneirsSelection2}
        />
      )}
      {step === 62 && (
        <Itinerary
          onNext={handleNext}
          type={"Shopping"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleShoppingSelection2}
        />
      )}
      {step === 63 && (
        <Itinerary
          onNext={handleNext}
          type={"Currency Exchange"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleCurrencyExchangeSelection2}
        />
      )}
      {step === 64 && (
        <Itinerary
          onNext={handleNext}
          type={"Luggage"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleLuggageSelection2}
        />
      )}
      {step === 65 && (
        <Itinerary
          onNext={handleNext}
          type={"Day Trip"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleDayTripSelection2}
        />
      )}
      {step === 66 && (
        <Itinerary
          onNext={handleNextChangeItineraryHeader}
          type={"Travel Plug Adapter"}
          features={itineraryFeatures2}
          recommendedAndEco={recommendedAndEco2}
          onSelectionChange={handleTravelPlugAdapterSelection2}
        />
      )}
      {step === 67 && (
        <FollowupQuestions1
          onNext={handleNext}
          agent={agent2}
          onChooseChange={handleChooseSelection2}
          onChargeChange={handleChargeSelection2}
          onAccountChange={handleAccountSelection2}
          onWaitChange={handleWaitSelection2}
          onSenseChange={handleSenseSelection2}
          onEngageChange={handleEngageSelection2}
          onUnderstoodChange={handleUnderstoodSelection2}
          onListenChange={handleListenSelection2}
        />
      )}
      {step === 68 && (
        <FollowupQuestions2
          onNext={handleNext}
          agent={agent2}
          onEffectivenessChange={handleEffectivenessSelection2}
          onBestOptionChange={handleBestOptionSelection2}
          onOptionQuicklyChange={handleOptionQuicklySelection2}
          onProductivityChange={handleProductivitySelection2}
          onPerformanceChange={handlePerformanceSelection2}
          onUtilizeChange={handleUtilizeSelection2}
        />
      )}
      {step === 69 && (
        <FollowupQuestions3
          onNext={handleNext}
          agent={agent2}
          onReflectChange={handleReflectSelection2}
          onIdentifyChange={handleIdentifySelection2}
          onConnectionChange={handleConnectionSelection2}
          onAgentCommunicateChange={handleAgentCommunicateSelection2}
          onTypePersonChange={handleTypePersonSelection2}
          onAgentMeChange={handleAgentMeSelection2}
          onSuitsChange={handleSuitsSelection2}
        />
      )}
      {step === 70 && (
        <FollowupQuestionsGreen
          onNext={handleNextAgent2}
          agent={agent2}
          onProductsFollowupChange={handleProductsFollowupSelection2}
          onActionsFollowupChange={handleActionsFollowupSelection2}
          onPurchaseFollowupChange={handlePurchaseFollowupSelection2}
          onResourcesFollowupChange={handleResourcesFollowupSelection2}
          onResponsibleFollowupChange={handleResponsibleFollowupSelection2}
          onInconvenienceFollowupChange={handleInconvenienceFollowupSelection2}
        />
      )}
      {step === 71 && (
        <Instructions1
          onNext={handleNext}
          agent={agent3}
        />
      )}
      {step === 72 && (
        <Instructions2
          onNext={handleNext}
          agent={agent3}
        />
      )}
      {step === 73 && (
        <AttentionCheck
          onNext={handleNextAttentionCheck3}
          agent={agent3}
          onRadioChange={handleAttentionCheckChange}
        />
      )}
      {step === 74 && (
        <AttentionCheckAnswer
          onNext={handleNextChangeItineraryHeader}
          selection={attentionCheckSelection}
          curAgent={curAgent}
        />
      )}
      {step === 75 && (
        <Itinerary
          onNext={handleNext}
          type={"Rental Car"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleRentalCarSelection3}
        />
      )}
      {step === 76 && (
        <Itinerary
          onNext={handleNext}
          type={"Hotel"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleHotelSelection3}
        />
      )}
      {step === 77 && (
        <Itinerary
          onNext={handleNext}
          type={"Dinner"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleDinnerSelection3}
        />
      )}
      {step === 78 && (
        <Itinerary
          onNext={handleNext}
          type={"Lunch"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleLunchSelection3}
        />
      )}
      {step === 79 && (
        <Itinerary
          onNext={handleNext}
          type={"Breakfast"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleBreakfastSelection3}
        />
      )}
      {step === 80 && (
        <Itinerary
          onNext={handleNext}
          type={"Museums"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleMuseumsSelection3}
        />
      )}
      {step === 81 && (
        <Itinerary
          onNext={handleNext}
          type={"Markets"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleMarketsSelection3}
        />
      )}
      {step === 82 && (
        <Itinerary
          onNext={handleNext}
          type={"Public Transportation"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handlePublicTransportationLongSelection3}
        />
      )}
      {step === 83 && (
        <Itinerary
          onNext={handleNext}
          type={"Coffee"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleCoffeeSelection3}
        />
      )}
      {step === 84 && (
        <Itinerary
          onNext={handleNext}
          type={"Bakery"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleBakerySelection3}
        />
      )}
      {step === 85 && (
        <Itinerary
          onNext={handleNext}
          type={"Night Life"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleNightLifeSelection3}
        />
      )}
      {step === 86 && (
        <Itinerary
          onNext={handleNext}
          type={"Groceries"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleGroceriesSelection3}
        />
      )}
      {step === 87 && (
        <Itinerary
          onNext={handleNext}
          type={"Souveneirs"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleSouveneirsSelection3}
        />
      )}
      {step === 88 && (
        <Itinerary
          onNext={handleNext}
          type={"Shopping"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleShoppingSelection3}
        />
      )}
      {step === 89 && (
        <Itinerary
          onNext={handleNext}
          type={"Currency Exchange"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleCurrencyExchangeSelection3}
        />
      )}
      {step === 90 && (
        <Itinerary
          onNext={handleNext}
          type={"Luggage"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleLuggageSelection3}
        />
      )}
      {step === 91 && (
        <Itinerary
          onNext={handleNext}
          type={"Day Trip"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleDayTripSelection3}
        />
      )}
      {step === 92 && (
        <Itinerary
          onNext={handleNextChangeItineraryHeader}
          type={"Travel Plug Adapter"}
          features={itineraryFeatures3}
          recommendedAndEco={recommendedAndEco3}
          onSelectionChange={handleTravelPlugAdapterSelection3}
        />
      )}
      {step === 93 && (
        <FollowupQuestions1
          onNext={handleNext}
          agent={agent3}
          onChooseChange={handleChooseSelection3}
          onChargeChange={handleChargeSelection3}
          onAccountChange={handleAccountSelection3}
          onWaitChange={handleWaitSelection3}
          onSenseChange={handleSenseSelection3}
          onEngageChange={handleEngageSelection3}
          onUnderstoodChange={handleUnderstoodSelection3}
          onListenChange={handleListenSelection3}
        />
      )}
      {step === 94 && (
        <FollowupQuestions2
          onNext={handleNext}
          agent={agent3}
          onEffectivenessChange={handleEffectivenessSelection3}
          onBestOptionChange={handleBestOptionSelection3}
          onOptionQuicklyChange={handleOptionQuicklySelection3}
          onProductivityChange={handleProductivitySelection3}
          onPerformanceChange={handlePerformanceSelection3}
          onUtilizeChange={handleUtilizeSelection3}
        />
      )}
      {step === 95 && (
        <FollowupQuestions3
          onNext={handleNext}
          agent={agent3}
          onReflectChange={handleReflectSelection3}
          onIdentifyChange={handleIdentifySelection3}
          onConnectionChange={handleConnectionSelection3}
          onAgentCommunicateChange={handleAgentCommunicateSelection3}
          onTypePersonChange={handleTypePersonSelection3}
          onAgentMeChange={handleAgentMeSelection3}
          onSuitsChange={handleSuitsSelection3}
        />
      )}
      {step === 96 && (
        <FollowupQuestionsGreen
          onNext={handleNext}
          agent={agent3}
          onProductsFollowupChange={handleProductsFollowupSelection3}
          onActionsFollowupChange={handleActionsFollowupSelection3}
          onPurchaseFollowupChange={handlePurchaseFollowupSelection3}
          onResourcesFollowupChange={handleResourcesFollowupSelection3}
          onResponsibleFollowupChange={handleResponsibleFollowupSelection3}
          onInconvenienceFollowupChange={handleInconvenienceFollowupSelection3}
        />
      )}
      {step === 97 && (
        <AlgorithmKnowledge
          onNext={handleNextStartServer}
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
      {step === 98 && (
        <AlgorithmAwareness
          onNext={handleNextStartServer}
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
      {step === 99 && (
        <Experiences
          onNext={endSurvey}
          onExperienceChange={handleExperienceChange}
        />
      )}
      {step === 100 && uploaded === 0 && <EndWait />}
      {step === 100 && uploaded === 1 && <End />}
      {step === 100 && uploaded === 2 && (
        <UploadError
          errorMsg={errorMsg}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}

export default Survey;
