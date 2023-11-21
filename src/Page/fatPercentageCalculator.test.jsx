import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import FatPercentage from "./FatPercentage"

// describe('Have Completed Input', () => {
//    it('Have Height input', () => {
//       render(<FatPercentage/>);
//       const inputHeight = screen.getByPlaceholderText('Enter height');
//       expect(inputHeight).toBeInTheDocument();
//    })

//    it('Have Weight input', () => {
//       render(<FatPercentage/>);
//       const inputWeight = screen.getByPlaceholderText('Enter weight');
//       expect(inputWeight).toBeInTheDocument();
//    })

//    it('Have Age input', () => {
//       render(<FatPercentage/>);
//       const inputAge = screen.getByPlaceholderText('Enter age');
//       expect(inputAge).toBeInTheDocument();
//    })

//    it('Have Gender input', () => {
//       render(<FatPercentage/>);
//       const inputGender = screen.getByLabelText('Gender', { selector: 'select' })
//       expect(inputGender).toBeInTheDocument();
//    })
// })


// ==========================================================================================================


// describe('it should Calculate correctly', () => {
//    it('Should calculate fat percentage correctly for H=180, W=62, Age=23, gender=male', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '62' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '23' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
//       fireEvent.click(screen.getByText('Calculate'));
//       const result = screen.getByText('FatPercentage: 12.05%');
//       expect(result).toBeInTheDocument();
//     })

//     it('Should calculate fat percentage correctly for H=143, W=50, Age=13, gender=female', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '155' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '50' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '13' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
//       fireEvent.click(screen.getByText('Calculate'));
//       const result = screen.getByText('FatPercentage: 22.56%');
//       expect(result).toBeInTheDocument();
//     })

//     it('Should calculate fat percentage correctly for H=172, W=63, Age=43, gender=male', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '172' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '63' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '43' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
//       fireEvent.click(screen.getByText('Calculate'));
//       const result = screen.getByText('FatPercentage: 19.24%');
//       expect(result).toBeInTheDocument();
//     })

//     it('Should calculate fat percentage correctly for H=165, W=96, Age=32, gender=male', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
//       fireEvent.click(screen.getByText('Calculate'));
//       const result = screen.getByText('FatPercentage: 33.47%');
//       expect(result).toBeInTheDocument();
//     })

// })

// ===========================================================================================================

describe('Input have to be in length', () => {
   it('Height should be in length', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '500' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
      const calculateButton = screen.getByText('Calculate');
      expect(calculateButton).toBeDisabled();
   })

   it('Weight should be in length', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '99999' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
      const calculateButton = screen.getByText('Calculate');
      expect(calculateButton).toBeDisabled();
   })

   it('Age should be in length', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '1' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
      const calculateButton = screen.getByText('Calculate');
      expect(calculateButton).toBeDisabled();
   })

   it('Gender should be male or female', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
      const calculateButton = screen.getByText('Calculate');
      expect(calculateButton).toBeDisabled();
   })

   it('it should disable when input not finished yet', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
      const calculateButton = screen.getByText('Calculate');
      expect(calculateButton).toBeDisabled();
   })

})
