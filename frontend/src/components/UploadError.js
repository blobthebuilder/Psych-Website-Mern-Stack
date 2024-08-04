import React from "react";

function UploadError({ errorMsg }) {
  return (
    <div className="generalInstructions1">
      <p className="instructions">
        Sorry, an error happened while uploading your data: {errorMsg}
      </p>
    </div>
  );
}

export default UploadError;
