import LegendItem from "./LegendItem"

const legendItems = [
  new LegendItem(
    "2,000,000 +",
    "#ae052c",
    (cases) => cases > 2_000_000,
    "red"
  ),
  new LegendItem(
    "1,000,000 - 2,000,000",
    "#c6506b",
    (cases) => cases > 1_000_000 && cases <= 2_000_000,
    "white"
  ),
  new LegendItem(
    "500,000 - 1,000,000",
    "#d78296",
    (cases) => cases > 500_000 && cases <= 1_000_000,
    "white"
  ),
  new LegendItem(
    "250,000 - 500,000",
    "#efcdd5",
    (cases) => (cases > 250_000) & (cases <= 500_000),
    "black"
  ),
  new LegendItem(
    "50,000 - 250,000",
    "#c9d4e8",
    (cases) => (cases > 50_000) & (cases <= 250_000),
    "black"
  ),
]

export default legendItems
