import { render, screen,fireEvent } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import BMI from './BMI';
import InputBox from "../component/InputBox";
//import { shallow } from 'enzyme'

/*
describe('<BMI /> Test Suite', () => {
 let wrapper
beforeEach(() => {
  wrapper = shallow(<BMI/>)
 })*/

 describe('Display correctly BMIcal page', () => {  // Display BMI calculator
    //render(<BMI />);
    // Events and assertions...
     //console.log(input.textContent);

    it('Should have a heading with the text "BMI Calculator"', () => {
      render(<BMI />);
      const headingText = screen.getByTestId('h1');
      expect(headingText).toBeInTheDocument();
    });
    it('Should have description', () => {
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
    it('Have Height input', () => {
      render(<BMI />);
       const inputHeight = screen.getByPlaceholderText('Height (in cm)')
       expect(inputHeight).toBeInTheDocument();
    })
   })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
describe('Calculate BMI correctly', () => { //calculate correctly BMI 
  it('should calculate BMI correctly', () => {
    // Render the component
    render(<BMI />);
    // Input values for height and weight
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '180' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '70' } });
    // Click the "Calculate BMI" button
    fireEvent.click(screen.getByText('Calculate'));
    // Assert that the result message is present in the rendered component
    const textElement = screen.getByText('Healthy weight. Your BMI is 21.60');
    expect(textElement).toBeInTheDocument();
  })
})

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 describe('Fill only Wegiht', () => { //เติมไม่สมบูรณ์ ขาด นน.หรือ ส่วนสูง หรือ ใส่ไม่ถูกต้อง
  
  it('Fill only Height', () => {//ไม่ใส่ Weight//
    render(<BMI height="180"/>);
    const result = screen.getByTestId('BMIerrorMessage');
    // Use toHaveTextContent for comparing text values
    expect(result).toHaveTextContent('Sorry, Please Re-Fill your Height');
  })
   it('Fill only Weight', () => {//ไม่ใส่ Height//
     render(<BMI weight="62"/>);
     const result = screen.getByTestId('BMIerrorMessage');
   // Use toHaveTextContent for comparing text values
     expect(result).toHaveTextContent('Sorry, Please Re-Fill your Weight');
   })
  })
*/

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// describe('Fill only Wegiht', () => { 
  
//   it('displays an error message for weight outside the range (15 - 300 kg)', () => {
//     render(<BMI />);
//     render(<InputBox />);
//     fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '400' } });
//     fireEvent.click(screen.getByText('Calculate'));
//     const textElement = screen.getAllByTestId('invalid');
//     expect(textElement).toBeInTheDocument();
//       });

  //  it('displays an error message for height outside the range (100 - 300 cm)', () => {
  //   render(<BMI height="350" />);
  //     const errorMessage = screen.getByTestId('BMIerrorMessage');
  //     expect(errorMessage).toBeInTheDocument();
  //     expect(errorMessage).toHaveTextContent('Sorry, Please Re-Fill your Height (100-300)');
  //     });
//})

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  describe('Fill only Wegiht or Height', () => { //เติมแค่ Weight

//    it('Fill only Weight', () => {      //เติมแค่ Weight//
//      render(<BMI weight="62"/>);
//      const result = screen.getByTestId('BMIerrorMessage');
//    // Use toHaveTextContent for comparing text values
//      expect(result).toHaveTextContent('Sorry, Please Re-Fill your Weight');
//    })

//    it('Fill only Height', () => {     //เติมแค่ Height//
//       render(<BMI height="180"/>);
//       const result = screen.getByTestId('BMIerrorMessage');
//       // Use toHaveTextContent for comparing text values
//       expect(result).toHaveTextContent('Sorry, Please Re-Fill your Height');
//     })
  
//    })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// describe('Fill Char or Letters', () => { //กรอกอักษระหรือประโยคเช่น  A B "hello"

//    it('Fill Char or Letters', () => {  //กรอก อักษระ ใน Weight
//      render(<BMI weight="Hello"/>);
//      const result = screen.getByTestId('BMIerrorMessage');
//    // Use toHaveTextContent for comparing text values
//      expect(result).toHaveTextContent('Sorry, Please Refill your Weight with only Numbers');
//    })

//    it('Fill Char or Letters in Height', () => {     //ไม่ใส่ Weight//
//       render(<BMI height="hi"/>);
//       const result = screen.getByTestId('BMIerrorMessage');
//       // Use toHaveTextContent for comparing text values
//       expect(result).toHaveTextContent('Sorry, Please Refill your Height with only Numbers');
//      })
  
//     })


// })