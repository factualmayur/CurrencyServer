const express = require("express"); // CommonJS syntax
const cors = require("cors");

const app = express();
const PORT = 5000;

// Updated exchange rates with more currencies
const exchangeRates = {
  base: "USD",
  date: "2024-12-06",
  rates: {
    USD: 1,
    INR: 83.22,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 149.5,
    AUD: 1.45,  // Australian Dollar
    CAD: 1.37,  // Canadian Dollar
    CHF: 0.93,  // Swiss Franc
    CNY: 7.25,  // Chinese Yuan
    MXN: 18.57, // Mexican Peso
    SGD: 1.35,  // Singapore Dollar
    NZD: 1.6,   // New Zealand Dollar
    ZAR: 18.4,  // South African Rand
    BRL: 5.18,  // Brazilian Real
    AED: 3.67,  // UAE Dirham
  },
};

app.use(cors());
app.use(express.json());

// Endpoint to fetch all rates
app.get("/rates", (req, res) => {
  res.json(exchangeRates);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
