import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import BMR from './BMR';

/*spec 
1.display (render without err)
2. input onchange?
3. enter valid input and right result + picture
4. handle invaild input
*/
// ======= Render correctly =======
describe('Have Completed Input', () => {
    it('Have Height input', () => {
       render(<BMR/>);
       const inputHeight = screen.getByPlaceholderText('Enter height');
       expect(inputHeight).toBeInTheDocument();
    })
 
    it('Have Weight input', () => {
       render(<BMR/>);
       const inputWeight = screen.getByPlaceholderText('Enter weight');
       expect(inputWeight).toBeInTheDocument();
    })
 
    it('Have Age input', () => {
       render(<BMR/>);
       const inputAge = screen.getByPlaceholderText('Enter age');
       expect(inputAge).toBeInTheDocument();
    })
 
    it('Have Gender input', () => {
       render(<BMR/>);
       const inputGender = screen.getByLabelText('Gender', { selector: 'select' })
       expect(inputGender).toBeInTheDocument();
    })

    it('Have Frequency Exercise input', () => {
        render(<BMR/>);
        const inputFE = screen.getByLabelText('Frequency Exercise', { selector: 'select' })
        expect(inputFE).toBeInTheDocument();
     })
    it('Have Clear Button', () => {
       render(<BMR/>);
       const clearButton = screen.getByText('Clear')
       expect(clearButton).toBeInTheDocument();
    })
    //clear correctly
    it('should Clear ', () => {
       render(<BMR/>);
       const clearButton = screen.getByText('Clear')
       expect(clearButton).toBeInTheDocument();
       fireEvent.click(screen.getByText('Clear'));
    })
    
 
 })


 describe('it should Calculate correctly', () => {
    //======male case============================================================================================
     it('Should calculate fat percentage correctly for H=150, W=25, Age=20, gender=male, Frequency Exercise 1-3 day/week', () => {
        render(<BMR/>);
        fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '150' } });
        fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '25' } });
        fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '20' } });
        fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
        fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.375' } }); //1-3 per week
        fireEvent.click(screen.getByText('Calculate'));
        const result = screen.getByText('BMR: 1405.94 Kilocalories');
        const testImg = screen.getByAltText('f1.png')
        expect(result).toBeInTheDocument();
        expect(testImg).toBeInTheDocument();
      })

      it('Should calculate fat percentage correctly for H=160, W=30, Age=22, gender=male, Frequency Exercise 1-3 day/week', () => {
        render(<BMR/>);
        fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
        fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '30' } });
        fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '22' } });
        fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
        fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.375' } }); //1-3 per week
        fireEvent.click(screen.getByText('Calculate'));
        const result = screen.getByText('BMR: 1550.18 Kilocalories');
        const testImg = screen.getByAltText('f2.png')
        expect(result).toBeInTheDocument();
        expect(testImg).toBeInTheDocument();
      })

      it('Should calculate fat percentage correctly for H=160, W=30, Age=22, gender=male, Frequency Exercise sportperson', () => {
        render(<BMR/>);
        fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
        fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '30' } });
        fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '22' } });
        fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
        fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.9' } }); //sportperson
        fireEvent.click(screen.getByText('Calculate'));
        const result = screen.getByText('BMR: 2142.06 Kilocalories');
        const testImg = screen.getByAltText('f3.png')
        expect(result).toBeInTheDocument();
        expect(testImg).toBeInTheDocument();
      })

    
      it('Should calculate fat percentage correctly for H=180, W=70, Age=22, gender=male, Frequency Exercise 1-3 day/week', () => {
        render(<BMR/>);
        fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
        fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '70' } });
        fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '22' } });
        fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
        fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.375' } }); //1-3 day/week
        fireEvent.click(screen.getByText('Calculate'));
        const result = screen.getByText('BMR: 2441.18 Kilocalories');
        const testImg = screen.getByAltText('f4.png')
        expect(result).toBeInTheDocument();
        expect(testImg).toBeInTheDocument();
        
      })

      it('Should calculate fat percentage correctly for H=180, W=70, Age=25, gender=male, Frequency Exercise  sportperson', () => {
        render(<BMR/>);
        fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
        fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '70' } });
        fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '25' } });
        fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'M' } });
        fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.9' } }); //1-3 day/week
        fireEvent.click(screen.getByText('Calculate'));
        const result = screen.getByText('BMR: 3334.50 Kilocalories');
        const testImg = screen.getByAltText('f5.png')
        expect(result).toBeInTheDocument();
        expect(testImg).toBeInTheDocument();
        
      })
      //======female case============================================================================================
      it('Should calculate fat percentage correctly for H=150, W=25, Age=20, gender=female, Frequency Exercise 1-3 day/week', () => {
         render(<BMR/>);
         fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '150' } });
         fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '25' } });
         fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '20' } });
         fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
         fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.375' } }); //1-3 per week
         fireEvent.click(screen.getByText('Calculate'));
         const result = screen.getByText('BMR: 1486.38 KiloCalories');
         const testImg = screen.getByAltText('f1.png')
         expect(result).toBeInTheDocument();
         expect(testImg).toBeInTheDocument();
       })
 
       it('Should calculate fat percentage correctly for H=160, W=30, Age=22, gender=female, Frequency Exercise 1-3 day/week', () => {
         render(<BMR/>);
         fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
         fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '30' } });
         fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '22' } });
         fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
         fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.375' } }); //1-3 per week
         fireEvent.click(screen.getByText('Calculate'));
         const result = screen.getByText('BMR: 1564.20 KiloCalories');
         const testImg = screen.getByAltText('f2.png')
         expect(result).toBeInTheDocument();
         expect(testImg).toBeInTheDocument();
       })
 
       it('Should calculate fat percentage correctly for H=160, W=30, Age=22, gender=female, Frequency Exercise sportperson', () => {
         render(<BMR/>);
         fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '160' } });
         fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '30' } });
         fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '22' } });
         fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
         fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.9' } }); //sportperson
         fireEvent.click(screen.getByText('Calculate'));
         const result = screen.getByText('BMR: 2161.44 KiloCalories');
         const testImg = screen.getByAltText('f3.png')
         expect(result).toBeInTheDocument();
         expect(testImg).toBeInTheDocument();
       })
 
     
       it('Should calculate fat percentage correctly for H=180, W=70, Age=22, gender=female, Frequency Exercise 3-5 day/week', () => {
         render(<BMR/>);
         fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
         fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '70' } });
         fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '22' } });
         fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
         fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.55' } }); //3-5 day/week
         fireEvent.click(screen.getByText('Calculate'));
         const result = screen.getByText('BMR: 2414.28 KiloCalories');
         const testImg = screen.getByAltText('f4.png')
         expect(result).toBeInTheDocument();
         expect(testImg).toBeInTheDocument();
         
       })
 
       it('Should calculate fat percentage correctly for H=180, W=70, Age=25, gender=female, Frequency Exercise  sportperson', () => {
         render(<BMR/>);
         fireEvent.change(screen.getByPlaceholderText('Enter height'), { target: { value: '180' } });
         fireEvent.change(screen.getByPlaceholderText('Enter weight'), { target: { value: '70' } });
         fireEvent.change(screen.getByPlaceholderText('Enter age'), { target: { value: '25' } });
         fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'F' } });
         fireEvent.change(screen.getByLabelText('Frequency Exercise'), { target: { value: '1.9' } }); //sportperson
         fireEvent.click(screen.getByText('Calculate'));
         const result = screen.getByText('BMR: 2932.65 KiloCalories');
         const testImg = screen.getByAltText('f5.png')
         expect(result).toBeInTheDocument();
         expect(testImg).toBeInTheDocument();
         
       })
       
 
      



    })


    // ============================= not visable กรณีใส่ไม่ครบ =============================================//
 test('handleValidation should update validationStatus correctly', () => {
    // Render the component
    const { getByPlaceholderText, getByText } = render(<BMR />);
  
    // Get height and weight input elements
    const heightInputElement = getByPlaceholderText('Enter height');
    const weightInputElement = getByPlaceholderText('Enter weight');
    const ageInputElement = getByPlaceholderText('Enter age');
  
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

    setAndBlur(ageInputElement, '1');
   expect(getByText('Calculate')).toBeDisabled();
  });






  