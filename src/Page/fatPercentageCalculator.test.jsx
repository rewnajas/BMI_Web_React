
import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import FatPercentage from "./FatPercentage"

// describe('Have Completed Input', () => {
//    render(<FatPercentage/>);
//    // Events and assertions...
//    // console.log(input.textContent);

//    it('Have Height input', () => {
//       const inputHeight = screen.getByLabelText('Height', {selector: 'input'})
//       expect(inputHeight).toBeInTheDocument();
//    })

//    it('Have Weight input', () => {
//       const inputWeight = screen.getByLabelText('Weight', {selector: 'input'})
//       expect(inputWeight).toBeInTheDocument();
//    })

//    it('Have Age input', () => {
//       const inputAge = screen.getByLabelText('Age', {selector: 'input'})
//       expect(inputAge).toBeInTheDocument();
//    })

//    it('Have Gender input', () => {
//       const inputGender = screen.getByLabelText('Gender', {selector: 'input'})
//       expect(inputGender).toBeInTheDocument();
//    })

// })

//==========================================================================================================


// describe('it should Calculate correctly', () => {
//    render(<FatPercentageCalculator height="180" weight="62" age="23" gender="male"/>);
//    const result = screen.getByTestId('fatResult');
//    expect(result.textContent).toEqual(9.4);

// })

// ===========================================================================================================

// describe('Input have to be in length', () => {
//    render(<FatPercentageCalculator />);

//    it('Height should be in length', () => {
//       const inputHeight = Number(screen.getByLabelText('Height', {selector: 'input'}).textContent)
//       const button = screen.getByTestId('FatCalSubmit');
//       if (inputHeight > 300 || inputHeight < 100) {
//          expect(button).toBeDisabled();
//       }
//       else {
//          expect(true).toBe(true);
//       }
//    })

//    it('Weight should be in length', () => {
//       const inputWeight = Number(screen.getByLabelText('Weight', {selector: 'input'}).textContent)
//       const button = screen.getByTestId('FatCalSubmit');
//       if (inputWeight > 300 || inputWeight < 15) {
//          expect(button).toBeDisabled();
//       }
//       else {
//          expect(true).toBe(true);
//       }
//    })

//    it('Age should be in length', () => {
//       const inputAge = Number(screen.getByLabelText('Age', {selector: 'input'}).textContent)
//       const button = screen.getByTestId('FatCalSubmit');
//       if (inputAge > 90 || inputAge < 2) {
//          expect(button).toBeDisabled();
//       }
//       else {
//          expect(true).toBe(true);
//       }
//    })

//    it('Gender should be male or female', () => {
//       const inputGender = Number(screen.getByLabelText('Gender', {selector: 'input'}).textContent)
//       const button = screen.getByTestId('FatCalSubmit');
//       if (inputGender != "male" || inputGender != "female") {
//          expect(button).toBeDisabled();
//       }
//       else {
//          expect(true).toBe(true);
//       }
//    })

// })



describe('Have Completed Input', () => {
   render(<FatPercentage/>);
   // Events and assertions...
   // console.log(input.textContent);

   it('Have Height input', () => {
      render(<FatPercentage/>);
    
      const inputHeight = screen.getByLabelText('Height');
      expect(inputHeight).toBeInTheDocument();
    
      // You can also add more test cases, for example, checking if the input is empty initially
      expect(inputHeight).toHaveValue('');
    
      // Trigger a change event on the input
      fireEvent.change(inputHeight, { target: { value: '180' } });
    
      // Check if the input value is updated
      expect(inputHeight).toHaveValue('180');
    });

   it('Have Weight input', () => {
      const inputWeight = screen.getByLabelText('Weight', {selector: 'input'})
      expect(inputWeight).toBeInTheDocument();
   })

   it('Have Age input', () => {
      const inputAge = screen.getByLabelText('Age', {selector: 'input'})
      expect(inputAge).toBeInTheDocument();
   })

   it('Have Gender input', () => {
      const inputGender = screen.getByLabelText('Gender', {selector: 'input'})
      expect(inputGender).toBeInTheDocument();
   })
})
//

// describe('FatPercentage Component', () => {
//   it('renders input elements for Height, Weight, Age, and Gender', () => {
//     render(<FatPercentage />);

//     const inputHeight = screen.getByLabelText('Height');
//     const inputWeight = screen.getByLabelText('Weight');
//     const inputAge = screen.getByLabelText('Age');
//     const selectGender = screen.getByLabelText('Choose a car:');

//     expect(inputHeight).toBeInTheDocument();
//     expect(inputWeight).toBeInTheDocument();
//     expect(inputAge).toBeInTheDocument();
//     expect(selectGender).toBeInTheDocument();
//   });

//   it('updates state on input change', () => {
//     render(<FatPercentage />);

//     const inputHeight = screen.getByLabelText('Height');
//     const inputWeight = screen.getByLabelText('Weight');
//     const inputAge = screen.getByLabelText('Age');
//     const selectGender = screen.getByLabelText('Choose a car:');

//     fireEvent.change(inputHeight, { target: { value: '180' } });
//     fireEvent.change(inputWeight, { target: { value: '70' } });
//     fireEvent.change(inputAge, { target: { value: '25' } });
//     fireEvent.change(selectGender, { target: { value: '1' } });

//     expect(inputHeight).toHaveValue('180');
//     expect(inputWeight).toHaveValue('70');
//     expect(inputAge).toHaveValue('25');
//     expect(selectGender).toHaveValue('1');
//   });
// });
