import LegendItem from "./LegendItem"

const legendItems = [

  new LegendItem(
    "1,000,000 +",
    "#5d4f23",
    (Deaths) => Deaths > 1_000_000,
    "black"
  ),
  new LegendItem(
    "500,000 - 1,000,000",
    "#826e31",
    (deaths) => deaths > 500_000 && deaths <= 1_000_000,
    "white"
  ),
  new LegendItem(
    "100,000 - 500,000",
    "#a78e3e",
    (deaths) => deaths > 100_000 && deaths <= 500_000,
    "white"
  ),
  new LegendItem(
    "50,000 - 100,000",
    "#c1a758",
    (deaths) => (deaths > 50_000) & (deaths <= 100_000),
    "black"
  ),
  new LegendItem(
    "10,000 - 50,000",
    "#cebb7d",
    (deaths) => (deaths > 10_000) & (deaths <= 50_000),
    "black"
  ),

  new LegendItem(
    "1,000 - 10,000",
    "#dccea2",
    (deaths) => (deaths > 1000) & (deaths <= 10_000),
    "black"
  ),

  new LegendItem(
    "0 - 1,000",
    "#eae2c7",
    (deaths) => (deaths > 1) & (deaths <= 1000),
    "black"
  ),








]

export default legendItems
