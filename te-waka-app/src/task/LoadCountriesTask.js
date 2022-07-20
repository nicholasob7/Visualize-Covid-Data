import data from "../data/countries.json";
import papa from "papaparse";
import legendItems from "../entities/LegendItems";
const features = data;
//console.log(data.features.length);
let country, covidCountry;



class LoadCountriesTask {
  covid19Data =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covid19Data, {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result);
        this.#processCovidData(result.data);
      },
    });
  };

  #processCovidData = (covidCountries) => {
    for (let i = 0; i < data.features.length; i++) {
      country = data.features[i];
      console.log(country)
      covidCountry = covidCountries.find(
        (covidCountry) =>
          country.properties.ADMIN === covidCountry.Country_Region
      );
      //console.log(covidCountry);
      country.properties.confirmed = 0;
      country.properties.comfirmedText = "0";


      if (covidCountry != null) {
        const confirmed = Number(covidCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.comfirmedText =
          this.#formatNumberWithCommas(confirmed);
      }
      this.#setCountryColor(country);
      //console.log("country", country);
    }
    this.setState(features);
    //console.log(country.properties);
  };
  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  #setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );
    if (legendItem != null) {
      country.properties.color = legendItem.color;
    }
  };
}

export default LoadCountriesTask;
