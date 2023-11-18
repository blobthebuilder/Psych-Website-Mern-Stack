import React from "react";

function Question4({ onNext, onBack }) {
  return (
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
                for="adventuretravel">
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
                for="art&design">
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
                for="arts&crafts">
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
                for="beauty&grooming"
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
                for="books"
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
                for="cameras"
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
                for="camping"
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
                for="computers"
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
                for="cooking"
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
                for="diy"
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
                for="dogs"
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
                for="electronics"
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
                for="fallfashion"
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
                for="fashionaccessories"
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
                for="fitness"
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
                for="food&drink"
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
                for="fun&hobbies"
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
                for="giftideas"
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
                for="health&wellness"
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
                for="healthyfood"
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
                for="hiking"
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
                for="home&garden"
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
                for="homedecor"
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
                for="homeimprovement"
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
                for="interiordesign"
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
                for="kids&parenting"
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
                for="kitchens"
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
                for="makeup"
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
                for="mensfashion"
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
                for="movies&tv"
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
                for="music"
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
                for="outdooractivities"
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
                for="outdoors"
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
                for="petcare"
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
                for="pets&animals"
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
                for="photography"
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
                for="recipes"
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
                for="shoes"
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
                for="skincare"
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
                for="sports"
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
                for="strangefinds"
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
                for="style&fashion"
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
                for="technology"
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
                for="toys&games"
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
                for="travel"
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
                for="womensaccessories"
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
                for="womensfashion"
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
  );
}

export default Question4;
