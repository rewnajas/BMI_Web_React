import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import FatPercentage from "./FatPercentage"
// ======= Render correctly =======
describe('Have Completed Input', () => {
   it('Have Height input', () => {
      render(<FatPercentage/>);
      const inputHeight = screen.getByPlaceholderText('Enter height');
      expect(inputHeight).toBeInTheDocument();
   })

   it('Have Weight input', () => {
      render(<FatPercentage/>);
      const inputWeight = screen.getByPlaceholderText('Enter weight');
      expect(inputWeight).toBeInTheDocument();
   })

   it('Have Age input', () => {
      render(<FatPercentage/>);
      const inputAge = screen.getByPlaceholderText('Enter age');
      expect(inputAge).toBeInTheDocument();
   })

   it('Have Gender input', () => {
      render(<FatPercentage/>);
      const inputGender = screen.getByLabelText('Gender', { selector: 'select' })
      expect(inputGender).toBeInTheDocument();
   })
   it('Have Clear Button', () => {
      render(<FatPercentage/>);
      const clearButton = screen.getByText('Clear')
      expect(clearButton).toBeInTheDocument();
   })
   //clear correctly
   it('should Clear ', () => {
      render(<FatPercentage/>);
      const clearButton = screen.getByText('Clear')
      expect(clearButton).toBeInTheDocument();
      fireEvent.click(screen.getByText('Clear'));
   })
   

})


// ==========================================================================================================
//======================================== skeleton ==================================================
// line 50-51 &81 (FC < 0%) 
it('Should calculate fat percentage which is <0%, given H=190, W=20, Age=20, gender=male', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '190' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '20' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '20' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
   fireEvent.click(screen.getByText('Calculate'));
   const result = screen.getByText('Please Enter Valid Input');
   const img = screen.getByAltText('sk.png');
   expect(result).toBeInTheDocument();
   expect(img).toBeInTheDocument();
 })
 it('Should calculate fat percentage which is <0%, given H=220, W=20, Age=20, gender=Female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '220' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '20' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '15' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const result = screen.getByText('FatPercentage: 3.01%');
   const img = screen.getByAltText('sk.png');
   expect(result).toBeInTheDocument();
   expect(img).toBeInTheDocument();
 })
 //
// ========== Calculate and send right output =========== Male only =====================

describe('it should Calculate correctly', () => {
   it('Should calculate fat percentage correctly for H=180, W=62, Age=23, gender=male', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '62' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '23' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
      fireEvent.click(screen.getByText('Calculate'));
      const result = screen.getByText('FatPercentage: 12.05%');
      const testImg = screen.getByAltText('m1.png')
      expect(result).toBeInTheDocument();
      expect(testImg).toBeInTheDocument();
    }) })
    it('Should calculate fat percentage correctly for H=172, W=63, Age=43, gender=male', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '172' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '63' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '43' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
      fireEvent.click(screen.getByText('Calculate'));
      const result = screen.getByText('FatPercentage: 19.24%');
      const testImg = screen.getByAltText(/m2.png/i)
      expect(result).toBeInTheDocument();
      expect(testImg).toBeInTheDocument();
    })
    it('Should calculate fat percentage correctly for H=180, W=96, Age=32, gender=male', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
      fireEvent.click(screen.getByText('Calculate'));
      const result = screen.getByText('FatPercentage: 26.72%');
      const testImg = screen.getByAltText(/m3.png/i)
      expect(result).toBeInTheDocument();
      expect(testImg).toBeInTheDocument();
    })
    it('Should calculate fat percentage correctly for H=165, W=96, Age=32, gender=male', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
      fireEvent.click(screen.getByText('Calculate'));
      const testImg = screen.getByAltText(/m4.png/i)
      const result = screen.getByText('FatPercentage: 33.47%');
      expect(result).toBeInTheDocument();
      expect(testImg).toBeInTheDocument();
    })

    it('Should calculate fat percentage correctly for H=160, W=130, Age=15, gender=male', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '130' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '15' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
      fireEvent.click(screen.getByText('Calculate'));
      const testImg = screen.getByAltText('m5.png')
      const result = screen.getByText('FatPercentage: 48.19%');
      expect(result).toBeInTheDocument();
      expect(testImg).toBeInTheDocument();
    })
    
    it('Should calculate fat percentage correctly for H=160, W=150, Age=15, gender=male', () => {
      render(<FatPercentage/>);
      fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
      fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '150' } });
      fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '15' } });
      fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
      fireEvent.click(screen.getByText('Calculate'));
      const testImg = screen.getByAltText('m6.png')
      const result = screen.getByText('FatPercentage: 57.56%');
      expect(result).toBeInTheDocument();
      expect(testImg).toBeInTheDocument();
    })
// ===========   Female    ==============

it('Should calculate fat percentage correctly for H=180, W=40, Age=20, gender=female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '40' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '20' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const testImg = screen.getByAltText('f1.png')
   const result = screen.getByText('FatPercentage: 14.01%');
   expect(result).toBeInTheDocument();
   expect(testImg).toBeInTheDocument();
 })
 it('Should calculate fat percentage correctly for H=180, W=50, Age=20, gender=female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '50' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '20' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const testImg = screen.getByAltText('f2.png')
   const result = screen.getByText('FatPercentage: 17.72%');
   expect(result).toBeInTheDocument();
   expect(testImg).toBeInTheDocument();
 })
 it('Should calculate fat percentage correctly for H=160, W=70, Age=20, gender=female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '70' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '20' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const testImg = screen.getByAltText('f3.png')
   const result = screen.getByText('FatPercentage: 32.01%');
   expect(result).toBeInTheDocument();
   expect(testImg).toBeInTheDocument();
 })
 it('Should calculate fat percentage correctly for H=180, W=120, Age=15, gender=female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '120' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '15' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const testImg = screen.getByAltText('f4.png')
   const result = screen.getByText('FatPercentage: 42.49%');
   expect(result).toBeInTheDocument();
   expect(testImg).toBeInTheDocument();
 })
 it('Should calculate fat percentage correctly for H=180, W=130, Age=15, gender=female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '130' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '15' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const testImg = screen.getByAltText('f5.png')
   const result = screen.getByText('FatPercentage: 46.20%');
   expect(result).toBeInTheDocument();
   expect(testImg).toBeInTheDocument();
 })
 it('Should calculate fat percentage correctly for H=180, W=150, Age=15, gender=female', () => {
   render(<FatPercentage/>);
   fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
   fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '150' } });
   fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '15' } });
   fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
   fireEvent.click(screen.getByText('Calculate'));
   const testImg = screen.getByAltText('f6.png')
   const result = screen.getByText('FatPercentage: 53.61%');
   expect(result).toBeInTheDocument();
   expect(testImg).toBeInTheDocument();
 })


 // ============================= not visable กรณีใส่ไม่ครบ =============================================//
 test('handleValidation should update validationStatus correctly', () => {
   // Render the component
   const { getByPlaceholderText, getByText } = render(<FatPercentage />);
 
   // Get height and weight input elements
   const heightInputElement = getByPlaceholderText('Enter height');
   const weightInputElement = getByPlaceholderText('Enter weight');
 
   // Helper function to set input value and trigger blur event
   const setAndBlur = (inputElement, value) => {
     fireEvent.change(inputElement, { target: { value } });
     fireEvent.blur(inputElement);
   };
 
   // Set invalid height (less than 100)
   setAndBlur(heightInputElement, '90');
 
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
   expect(getByText('Calculate')).toBeDisabled();
 });


 


//     it('Should calculate fat percentage correctly for H=143, W=50, Age=13, gender=female', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '155' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '50' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '13' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
//       fireEvent.click(screen.getByText('Calculate'));
//       const img = screen.getByAltText('f2.png')
//       const result = screen.getByText('FatPercentage: 22.56%');
//       expect(result).toBeInTheDocument();
//       expect(img).toBeInTheDocument();
//     })
    
// })

// // ===========================================================================================================

// describe('Input have to be in range correctly', () => {
//    it('Height should be in range correctly (100 - 300 cm)', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '500' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
//       const calculateButton = screen.getByText('Calculate');
//       expect(calculateButton).toBeDisabled();
//    })

//    it('Weight should be in range correctly (15 - 300 kg)', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '99999' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
//       const calculateButton = screen.getByText('Calculate');
//       expect(calculateButton).toBeDisabled();
//    })

//    it('Age should be in range correctly (2 - 90 years old)', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '1' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
//       const calculateButton = screen.getByText('Calculate');
//       expect(calculateButton).toBeDisabled();
//    })

//    it('Gender should be male or female', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '96' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
//       const calculateButton = screen.getByText('Calculate');
//       expect(calculateButton).toBeDisabled();
//    })

//    it('it should disable when input not finished yet', () => {
//       render(<FatPercentage/>);
//       fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '165' } });
//       fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '32' } });
//       fireEvent.change(screen.getByLabelText('Gender'), { target: { value: '' } });
//       const calculateButton = screen.getByText('Calculate');
//       expect(calculateButton).toBeDisabled();
//    })


