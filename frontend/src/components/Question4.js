import React from "react";

function Question4({ onNext, onBack }) {
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
