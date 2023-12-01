import { render, screen,fireEvent } from "@testing-library/react";
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
    expect(textElement).toBeInTheDocument();
  })
  it('should calculate BMI correctly for H=170,W=40', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '170' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '40' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Severe Thinness. Your BMI is 13.84');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=174,W=50', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '174' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '50' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Moderate Thinness. Your BMI is 16.51');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=174,W=56', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '174' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '56' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Mild Thinness. Your BMI is 18.50');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=174,W=76', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '174' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '76' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Overweight. Your BMI is 25.10');
    expect(textElement).toBeInTheDocument();
  })
  it('should calculate BMI correctly for H=156,W=76', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '156' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '76' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Obese Class I. Your BMI is 31.23');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=180,W=120', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '180' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '120' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Obese Class II. Your BMI is 37.04');
    expect(textElement).toBeInTheDocument();
  })
  it('Should calculate BMI correctly for H=170,W=120', () => {
    render(<BMI />);
    fireEvent.change(screen.getByPlaceholderText('Height (in cm)'), { target: { value: '170' } });
    fireEvent.change(screen.getByPlaceholderText('Weight (in kg)'), { target: { value: '120' } });
    fireEvent.click(screen.getByText('Calculate'));
    const textElement = screen.getByText('Obese Class III. Your BMI is 41.52');
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

//import { shallow } from 'enzyme'

/*
describe('<BMI /> Test Suite', () => {
 let wrapper
beforeEach(() => {
  wrapper = shallow(<BMI/>)
 })*/
