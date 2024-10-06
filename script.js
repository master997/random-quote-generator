"use strict";

const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "The best way to predict your future is to create it. — Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Dream big and dare to fail. — Norman Vaughan",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "Opportunities don’t happen, you create them. — Chris Grosser",
  "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
];

// DOM elements
const quote = document.querySelector(".quote");
const button = document.querySelector(".genBtn");

//Random quotes function
const randomQuote = function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
};

button.addEventListener("click", function () {
  randomQuote();
});
