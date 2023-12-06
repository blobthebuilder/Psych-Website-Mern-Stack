import React from "react";
import { json2csv } from "json-2-csv";

function ResultsPage() {
  const url = "http://localhost:4000";
  //const url = "https://psych-website.onrender.com";
  const getData = async () => {
    try {
      const res = await fetch(url + "/api/user");
      const json = await res.json();
      if (!res.ok) {
        console.log(json.error);
      } else {
        var csvString = json2csv(json);
        downloadCSV(csvString, "example.csv");
        console.log(csvString);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  function downloadCSV(csvString, filename) {
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

  return <button onClick={getData}>Download CSV</button>;
}

export default ResultsPage;
