import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import FatPercentage from "./FatPercentage"

test('true', () => {
   render(<FatPercentage/>);
   const input = screen.getByText('Hello worlqd');
  // Events and assertions...
   console.log(input);
   expect(input).toBeInTheDocument();
})