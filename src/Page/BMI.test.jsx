import { render, screen,fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import '@testing-library/jest-dom'
import BMI from './BMI';

 describe('Display correctly BMIcal page', () => {  // Display BMI calculator
    it('Should have a heading with the text "BMI Calculator"', () => {
      render(<BMI />);
      const headingText = screen.getByText('BMI Calculator');
      expect(headingText).toBeInTheDocument();
    });
    it('Should have right description', () => {
      const { getByText } = render(<BMI/>);
      // Assert that the text is present in the rendered component
      const textElement = getByText(
        "Let's calculate your Body Mass Index. Type the values below"
      );
      expect(textElement).toBeInTheDocument();
    });
   it('Should have a Weight input', () => {
    render(<BMI />);
      const inputWeight = screen.getByPlaceholderText('Weight (in kg)');
      expect(inputWeight).toBeInTheDocument();
    });
    it('Should Have Height input', () => {
      render(<BMI />);
       const inputHeight = screen.getByPlaceholderText('Height (in cm)')
       expect(inputHeight).toBeInTheDocument();
    })
    it('Should Have Calculate Button', () => {
      render(<BMI />);
       const button = screen.getByText('Calculate')
       expect(button).toBeInTheDocument();
    })
   })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 describe('Calculate BMI correctly', () => { //calculate correctly BMI 
  it('Should calculate BMI correctly for H=180,W=70', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '180' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '70' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Healthy weight. Your BMI is 21.60');
    const testImg = screen.getByAltText('b2.0')
    expect(testImg).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  })
  it('should calculate BMI correctly for H=170,W=40', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '170' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '40' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b1.0')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Severe Thinness. Your BMI is 13.84');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=174,W=50', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '174' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '50' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b1.1')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Moderate Thinness. Your BMI is 16.51');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=174,W=56', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '174' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '56' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b1.2')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Mild Thinness. Your BMI is 18.50');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=174,W=76', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '174' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '76' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b3.0')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Overweight. Your BMI is 25.10');
    expect(textElement).toBeInTheDocument();
  })
  it('should calculate BMI correctly for H=156,W=76', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '156' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '76' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b4.0')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Obese Class I. Your BMI is 31.23');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=180,W=120', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '180' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '120' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b4.1')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Obese Class II. Your BMI is 37.04');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=170,W=120', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '170' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '120' } });
    fireEvent.click(screen.getByText('Calculate'));
    const testImg = screen.getByAltText('b5.0')
    expect(testImg).toBeInTheDocument();
    const textElement = screen.getByText('Obese Class III. Your BMI is 41.52');
    expect(textElement).toBeInTheDocument();
  })
  test('handleValidation should update validationStatus correctly', () => {
    // Render the component
    const { getByPlaceholderText, getByText } = render(<BMI />);
  
    // Get height and weight input elements
    const heightInputElement = getByPlaceholderText('Height (in cm)');
    const weightInputElement = getByPlaceholderText('Weight (in kg)');
  
    // Helper function to set input value and trigger blur event
    const setAndBlur = (inputElement, value) => {
      fireEvent.change(inputElement, { target: { value } });
      fireEvent.blur(inputElement);
    };
  
    // Set invalid height (less than 100)
    setAndBlur(heightInputElement, '1');
  
    // Check if validationStatus is updated correctly
    expect(getByText('Calculate')).toBeDisabled();
  
    // Set valid height
    setAndBlur(heightInputElement, '170');
  
    // Check if validationStatus is updated correctly
    expect(getByText('Calculate')).toBeDisabled();
  
    // Set invalid weight (less than 15)
    setAndBlur(weightInputElement, '10');
  
    // Check if validationStatus is updated correctly
    expect(getByText('Calculate')).toBeDisabled();
  
    // Set valid weight
    setAndBlur(weightInputElement, '70');
  
    // Check if validationStatus is updated correctly
    expect(getByText('Calculate')).toBeInTheDocument();
  });
  jest.useFakeTimers();
  test("scrolls into view after a delay", () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '156' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '76' } });
    fireEvent.click(screen.getByText('Calculate'));
    expect(scrollIntoViewMock).not.toHaveBeenCalled()
    // Fast forward in time
    act(() => {
      jest.runAllTimers();
    });
    // Assert that scrollIntoView has been called after the delay
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });
})

})