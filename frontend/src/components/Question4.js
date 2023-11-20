import React from "react";

function Question4({ onNext, onBack, onInterestsChange }) {
  return (
    <div className="survey">
      <div className="q4">
        <p className="topMargin">‎</p>
        <h3 className="question">
          What are you interested in? (select all that apply.)
        </h3>
        <div className="option4">
          <form>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="adventuretravel"
                  type="checkbox"
                  name="adventuretravel"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  className="typeTitle"
                  htmlFor="adventuretravel">
                  Adventure Travel
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="art&design"
                  type="checkbox"
                  name="art&design"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  className="typeTitle"
                  htmlFor="art&design">
                  Art & Design
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="arts&crafts"
                  type="checkbox"
                  name="arts&crafts"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  className="typeTitle"
                  htmlFor="arts&crafts">
                  Arts & Crafts
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="beauty&grooming"
                  type="checkbox"
                  name="beauty&grooming"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="beauty&grooming"
                  className="typeTitle">
                  Beauty & Grooming
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="books"
                  type="checkbox"
                  name="books"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="books"
                  className="typeTitle">
                  Books
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="cameras"
                  type="checkbox"
                  name="cameras"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="cameras"
                  className="typeTitle">
                  Cameras
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="camping"
                  type="checkbox"
                  name="camping"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="camping"
                  className="typeTitle">
                  Camping
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="computers"
                  type="checkbox"
                  name="computers"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="computers"
                  className="typeTitle">
                  Computers
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="cooking"
                  type="checkbox"
                  name="cooking"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="cooking"
                  className="typeTitle">
                  Cooking
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="diy"
                  type="checkbox"
                  name="diy"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="diy"
                  className="typeTitle">
                  DIY
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="dogs"
                  type="checkbox"
                  name="dogs"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="dogs"
                  className="typeTitle">
                  Dogs
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="electronics"
                  type="checkbox"
                  name="electronics"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="electronics"
                  className="typeTitle">
                  Electronics
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="fallfashion"
                  type="checkbox"
                  name="fallfashion"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="fallfashion"
                  className="typeTitle">
                  Fall Fashion
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="fashionaccessories"
                  type="checkbox"
                  name="fashionaccessories"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="fashionaccessories"
                  className="typeTitle">
                  Fashion Accessories
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="fitness"
                  type="checkbox"
                  name="fitness"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="fitness"
                  className="typeTitle">
                  Fitness
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="food&drink"
                  type="checkbox"
                  name="food&drink"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="food&drink"
                  className="typeTitle">
                  Food & Drink
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="fun&hobbies"
                  type="checkbox"
                  name="fun&hobbies"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="fun&hobbies"
                  className="typeTitle">
                  Fun & Hobbies
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="giftideas"
                  type="checkbox"
                  name="giftideas"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="giftideas"
                  className="typeTitle">
                  Gift Ideas
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="health&wellness"
                  type="checkbox"
                  name="health&wellness"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="health&wellness"
                  className="typeTitle">
                  Health & Wellness
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="healthyfood"
                  type="checkbox"
                  name="healthyfood"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="healthyfood"
                  className="typeTitle">
                  Healthy Food
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="hiking"
                  type="checkbox"
                  name="hiking"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="hiking"
                  className="typeTitle">
                  Hiking
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="home&garden"
                  type="checkbox"
                  name="home&garden"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="home&garden"
                  className="typeTitle">
                  Home & Garden
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="homedecor"
                  type="checkbox"
                  name="homedecor"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="homedecor"
                  className="typeTitle">
                  Home Decor
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="homeimprovement"
                  type="checkbox"
                  name="homeimprovement"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="homeimprovement"
                  className="typeTitle">
                  Home Improvement
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="interiordesign"
                  type="checkbox"
                  name="interiordesign"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="interiordesign"
                  className="typeTitle">
                  Interior Design
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="kids&parenting"
                  type="checkbox"
                  name="kids&parenting"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="kids&parenting"
                  className="typeTitle">
                  Kids & Parenting
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="kitchens"
                  type="checkbox"
                  name="kitchens"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="kitchens"
                  className="typeTitle">
                  Kitchens
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="makeup"
                  type="checkbox"
                  name="makeup"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="makeup"
                  className="typeTitle">
                  Makeup
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="mensfashion"
                  type="checkbox"
                  name="mensfashion"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="mensfashion"
                  className="typeTitle">
                  Men's Fashion
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="movies&tv"
                  type="checkbox"
                  name="movies&tv"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="movies&tv"
                  className="typeTitle">
                  Movies & TV
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="music"
                  type="checkbox"
                  name="music"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="music"
                  className="typeTitle">
                  Music
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="outdooractivities"
                  type="checkbox"
                  name="outdooractivities"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="outdooractivities"
                  className="typeTitle">
                  Outdoor Activities
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="outdoors"
                  type="checkbox"
                  name="outdoors"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="outdoors"
                  className="typeTitle">
                  Outdoors
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="petcare"
                  type="checkbox"
                  name="petcare"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="petcare"
                  className="typeTitle">
                  Pet Care
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="pets&animals"
                  type="checkbox"
                  name="pets&animals"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="pets&animals"
                  className="typeTitle">
                  Pets & Animals
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="photography"
                  type="checkbox"
                  name="photography"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="photography"
                  className="typeTitle">
                  Photography
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="recipes"
                  type="checkbox"
                  name="recipes"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="recipes"
                  className="typeTitle">
                  Recipes
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="shoes"
                  type="checkbox"
                  name="shoes"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="shoes"
                  className="typeTitle">
                  Shoes
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="skincare"
                  type="checkbox"
                  name="skincare"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="skincare"
                  className="typeTitle">
                  Skin Care
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="sports"
                  type="checkbox"
                  name="sport"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="sports"
                  className="typeTitle">
                  Sports
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="strangefinds"
                  type="checkbox"
                  name="strangefinds"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="strangefinds"
                  className="typeTitle">
                  Strange Finds
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="style&fashion"
                  type="checkbox"
                  name="style&fashion"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="style&fashion"
                  className="typeTitle">
                  Style & Fashion
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="technology"
                  type="checkbox"
                  name="technology"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="technology"
                  className="typeTitle">
                  Technology
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="toys&games"
                  type="checkbox"
                  name="toys&games"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="toys&games"
                  className="typeTitle">
                  Toys & Games
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="travel"
                  type="checkbox"
                  name="travel"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="travel"
                  className="typeTitle">
                  Travel
                </label>
              </div>
              <div className="interestBox">
                <input
                  id="womensaccessories"
                  type="checkbox"
                  name="womensaccessories"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="womensaccessories"
                  className="typeTitle">
                  Women's Accessories
                </label>
              </div>
            </div>
            <div className="interestContainer">
              <div className="interestBox">
                <input
                  id="womensfashion"
                  type="checkbox"
                  name="womensfashion"
                  className="smallCheckbox"
                  onChange={onInterestsChange}
                />
                <label
                  htmlFor="womensfashion"
                  className="typeTitle">
                  Women's Fashion
                </label>
              </div>
              <div className="interestBox"></div>
            </div>
          </form>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="medButton">
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="medButton">
          Next
        </button>
      </div>
    </div>
  );
}

export default Question4;
