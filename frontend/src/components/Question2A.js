import React from "react";

function Question2A({ onNext, onBack, arr }) {
  /*
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);
  const [imageOneValue, setImageOneValue] = useState(null);
  const [imageTwoValue, setImageTwoValue] = useState(null);
  const [imageThreeValue, setImageThreeValue] = useState(null);
  const [imageFourValue, setImageFourValue] = useState(null);
  const [imageFiveValue, setImageFiveValue] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const setImages = () => {
      setImageOne(arr[0]);
      setImageTwo(arr[1]);
      setImageThree(arr[2]);
      setImageFour(arr[3]);
      setImageFive(arr[4]);
      setImageOneValue(arr[0].substring(0, arr[0].indexOf(".")));
      setImageTwoValue(arr[1].substring(0, arr[1].indexOf(".")));
      setImageThreeValue(arr[2].substring(0, arr[2].indexOf(".")));
      setImageFourValue(arr[3].substring(0, arr[3].indexOf(".")));
      setImageFiveValue(arr[4].substring(0, arr[4].indexOf(".")));
      setDone(true);
    };
    setImages();
  }, [arr]);*/

  const imageOne = arr[0];
  const imageTwo = arr[1];
  const imageThree = arr[2];
  const imageFour = arr[3];
  const imageFive = arr[4];

  const imageOneValue = arr[0].substring(0, arr[0].indexOf("."));
  const imageTwoValue = arr[1].substring(0, arr[0].indexOf("."));
  const imageThreeValue = arr[2].substring(0, arr[0].indexOf("."));
  const imageFourValue = arr[3].substring(0, arr[0].indexOf("."));
  const imageFiveValue = arr[4].substring(0, arr[0].indexOf("."));

  return (
    <div className="survey">
      <div className="q2A">
        <p className="topMargin">‎</p>
        <h3 className="question">
          Which of the following hotels do you prefer? Select the bubble next to
          the image that best represents your preference.
        </h3>
        <div className="option2">
          <form>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageAOneBtn"
                type="radio"
                name="imageOne"
                value={imageOneValue}
              />
              <img
                id="imageAOne"
                width="400"
                alt="Hotel"
                src={`../../Photos/Hotels/${imageOne}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageATwoBtn"
                type="radio"
                name="imageOne"
                value={imageTwoValue}
              />
              <img
                id="imageATwo"
                width="400"
                alt="Hotel"
                src={`../../Photos/Hotels/${imageTwo}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageAThreeBtn"
                type="radio"
                name="imageOne"
                value={imageThreeValue}
              />
              <img
                id="imageAThree"
                width="400"
                alt="Hotel"
                src={`../../Photos/Hotels/${imageThree}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageAFourBtn"
                type="radio"
                name="imageOne"
                value={imageFourValue}
              />
              <img
                id="imageAFour"
                width="400"
                alt="Hotel"
                src={`../../Photos/Hotels/${imageFour}`}
              />
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <input
                id="imageAFiveBtn"
                type="radio"
                name="imageOne"
                value={imageFiveValue}
              />
              <img
                id="imageAFive"
                width="400"
                alt="Hotel"
                src={`../../Photos/Hotels/${imageFive}`}
              />
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

export default Question2A;
