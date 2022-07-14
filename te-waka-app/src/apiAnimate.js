const apiAnimate = {
    getByBiggestNationalPopulationsInNorthAmerica: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/historical/USA%2C%20Mexico%2C%20Canada?lastdays=all");
    return await response.json();
    },

    getByBiggestNationalPopulationsInSouthAmerica: async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/historical/Brazil%2C%20Colombia%2C%20Argentina?lastdays=all");
        return await response.json();
    },

    getByBiggestNationalPopulationsInEurope: async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/historical/Russia%2C%20Turkey%2C%20Germany?lastdays=all");
        return await response.json();
    },

    getByBiggestNationalPopulationsInAsia: async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/historical/China%2C%20India%2C%20Indonesia?lastdays=all");
        return await response.json();
    },

    getByBiggestNationalPopulationsInAfrica: async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/historical/Nigeria%2C%20Ethiopia%2C%20Egypt?lastdays=all");
        return await response.json();
    },

    getByBiggestNationalPopulationsInAustraliaOceania: async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/historical/Australia%2C%20Papua%20New%20Guinea%2C%20New%20Zealand?lastdays=all");
        return await response.json();
    },
};
export default apiAnimate;