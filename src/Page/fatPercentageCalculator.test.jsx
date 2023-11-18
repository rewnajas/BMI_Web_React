import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import FatPercentageCalculator from "./FatPercentageCalculator";

test('true', () => {
   render(<FatPercentageCalculator />);
   const input = screen.getByText('Hello worlqd');
  // Events and assertions...
   console.log(input);
   expect(input).toBeInTheDocument();
})