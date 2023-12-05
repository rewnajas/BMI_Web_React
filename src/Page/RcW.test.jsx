import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import RcW from "./RcW"
test("renders RcW component correctly", () => {
  render(<RcW />);
  expect(screen.getByText("Weight Training Video")).toBeInTheDocument();
  expect(screen.getByLabelText("Select type")).toBeInTheDocument();
  expect(screen.getByText("Select filter")).toBeInTheDocument();
  //Videos header
  expect(screen.getByText("6 easy strength training exercises")).toBeInTheDocument();
  expect(screen.getByText("10 MIN CARDIO HIIT WORKOUT // Intense Calorie Burn | MrandMrsMuscle")).toBeInTheDocument();
  expect(screen.getByText("15 MIN BEGINNER CARDIO Workout (At Home No Equipment)")).toBeInTheDocument();
  expect(screen.getByText("10 MIN SIXPACK ABS WORKOUT")).toBeInTheDocument();
  expect(screen.getByText("20 MIN INTENSE AB WORKOUT")).toBeInTheDocument();
  expect(screen.getByText("25 MIN FULL BODY HIIT for Beginners - No Equipment - No Repeat Home Workout")).toBeInTheDocument();
  // ... Add more assertions as needed
});
test("renders filtered videos based on beginner", () => {
    render(<RcW />)
    fireEvent.change(screen.getByLabelText("Select type"), { target: { value: "beginner" } });
    // Assert that the component updates accordingly
    expect(screen.getByText("Beginner")).toBeInTheDocument();
    expect(screen.getByText("6 easy strength training exercises")).toBeInTheDocument();
    expect(screen.getByText("25 MIN FULL BODY HIIT for Beginners - No Equipment - No Repeat Home Workout")).toBeInTheDocument();
  });
  test("renders filtered videos based on cardio", () => {
    render(<RcW />)
    fireEvent.change(screen.getByLabelText("Select type"), { target: { value: "cardio" } });
    // Assert that the component updates accordingly
    expect(screen.getByText("10 MIN CARDIO HIIT WORKOUT // Intense Calorie Burn | MrandMrsMuscle")).toBeInTheDocument();
    expect(screen.getByText("15 MIN BEGINNER CARDIO Workout (At Home No Equipment)")).toBeInTheDocument();
  });
  test("renders filtered videos based on beginner", () => {
    render(<RcW />)
    fireEvent.change(screen.getByLabelText("Select type"), { target: { value: "ABS" } });
    // Assert that the component updates accordingly
    expect(screen.getByText("10 MIN SIXPACK ABS WORKOUT")).toBeInTheDocument();
    expect(screen.getByText("20 MIN INTENSE AB WORKOUT")).toBeInTheDocument();
  });


  