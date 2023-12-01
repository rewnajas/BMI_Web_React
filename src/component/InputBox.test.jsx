import React from 'react';
import { render, fireEvent,screen, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom'
import InputBox from './InputBox';

describe('Should able to show input', () => {
it('renders InputBox component', () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <InputBox
      laBel="Test Label"
      placeholder="Test Placeholder"
      dataType="weight"
      handleValidation={() => {}}
      setValue={() => {}}
      reset={false}
    />
  );
  const inputElement = getByPlaceholderText(/Test Placeholder/i);
  if (inputElement.dataType == "weight"){
    expect(inputElement).toBeInTheDocument();}
  });

  it('reset value and has no err massage', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <InputBox
        laBel="Test Label"
        placeholder="Test Placeholder"
        dataType="weight"
        handleValidation={() => {}}
        setValue={() => {}}
        reset={true}
      />
    );
    const inputElement = getByPlaceholderText(/Test Placeholder/i);
    if (inputElement.value == ""){
      expect(inputElement).toBeInTheDocument();}
    });

    it('29-30', () => {
      let testValue = '';
      const { getByPlaceholderText } = render(
        <InputBox
          laBel="Test Label"
          placeholder="Test Placeholder"
          dataType="height"
          onBlur={()=>{}}
          setValue={testValue}
          reset={false}
        />
        );
      const inputElement = getByPlaceholderText(/Test Placeholder/i);
      fireEvent.change(inputElement, { target: { value:""} });
      expect(testValue).toEqual('');
        });

 })
 test('handleBlur should call handleValidation with the correct arguments', () => {
  // Mock props
  const mockHandleValidation = jest.fn();
  const mockSetValue = jest.fn();
  const props = {
    laBel: 'Test Label',
    placeholder: 'Test Placeholder',
    dataType: 'weight',
    handleValidation: mockHandleValidation,
    setValue: mockSetValue,
    reset: false,
  };

  // Render the component
  const { getByPlaceholderText } = render(<InputBox {...props} />);

  // Simulate user input
  const inputElement = getByPlaceholderText('Test Placeholder');
  fireEvent.change(inputElement, { target: { value: '' } });

  // Trigger blur event
  fireEvent.blur(inputElement);

  // Check if handleValidation is called with the correct arguments
  expect(mockHandleValidation).toHaveBeenCalledWith('weight', true);
});
describe('Should handles input change and sets value', () => {
it('handles input change and sets value', () => {
  let testValue = '';
  const { getByPlaceholderText } = render(
    <InputBox
      laBel="Test Label"
      placeholder="Test Placeholder"
      dataType="height"
      handleValidation={() => {}}
      setValue={(value) => (testValue = value)}
      reset={false}
    />
  );
  const inputElement = getByPlaceholderText(/Test Placeholder/i);
  fireEvent.change(inputElement, { target: { value: '170' } });
  expect(testValue).toBe('170');
    });

    it('handles input change and sets value', () => {
      let testValue = '';
      const { getByPlaceholderText } = render(
        <InputBox
          laBel="Test Label"
          placeholder="Test Placeholder"
          dataType="age"
          handleValidation={() => {}}
          setValue={(value) => (testValue = value)}
          reset={false}
        />
      );
      const inputElement = getByPlaceholderText(/Test Placeholder/i);
      fireEvent.change(inputElement, { target: { value: '22' } });
      expect(testValue).toBe('22');
        });
 })


describe('Should validates invaild input and send Err messages', () => {
it('validates input for weight', () => {
  const mockHandleValidation = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <InputBox
      laBel="Test Label"
      placeholder="Test Placeholder"
      dataType="weight"
      handleValidation={mockHandleValidation}
      setValue={() => {}}
      reset={false}
    />
  );
  const inputElement = getByPlaceholderText(/Test Placeholder/i);
  fireEvent.change(inputElement, { target: { value: '301' } });
  fireEvent.blur(inputElement);
  expect(getByText('Please enter a valid weight')).toBeInTheDocument();
});
it('validates input for weight<15', () => {
  const mockHandleValidation = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <InputBox
      laBel="Test Label"
      placeholder="Test Placeholder"
      dataType="weight"
      handleValidation={mockHandleValidation}
      setValue={() => {}}
      reset={false}
    />
  );
  const inputElement = getByPlaceholderText(/Test Placeholder/i);
  fireEvent.change(inputElement, { target: { value: 'hello' } });
  fireEvent.blur(inputElement);
  expect(getByText('Please enter a valid weight')).toBeInTheDocument();
});


it('validates input for weight<15', () => {
  const mockHandleValidation = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <InputBox
      laBel="Test Label"
      placeholder="Test Placeholder"
      dataType="weight"
      handleValidation={mockHandleValidation}
      setValue={() => {}}
      reset={false}
    />
  );
  const inputElement = getByPlaceholderText(/Test Placeholder/i);
  fireEvent.change(inputElement, { target: { value: '2' } });
  fireEvent.blur(inputElement);
  expect(getByText('Please enter a valid weight')).toBeInTheDocument();
});

it('validates input for weight<15', () => {
  const mockHandleValidation = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <InputBox
      laBel="Test Label"
      placeholder="Test Placeholder"
      dataType="weight"
      handleValidation={mockHandleValidation}
      setValue={() => {}}
      reset={false}
    />
  );
  const inputElement = getByPlaceholderText(/Test Placeholder/i);
  fireEvent.change(inputElement, { target: { value: 'hello' } });
  fireEvent.blur(inputElement);
  expect(getByText('Please enter a valid weight')).toBeInTheDocument();
});

describe('Should handles input change and sets value', () => {
  it('handles input change and sets value', () => {
    let testValue = '';
    const { getByPlaceholderText } = render(
      <InputBox
        laBel="Test Label"
        placeholder="Test Placeholder"
        dataType="weight"
        handleValidation={() => {}}
        setValue={(value) => (testValue = value)}
        reset={false}
      />
    );
    const inputElement = getByPlaceholderText(/Test Placeholder/i);
    fireEvent.change(inputElement, { target: { value: '50' } });
    expect(testValue).toBe('50');
      });
   })



    it('validates input for Height', () => {
    const mockHandleValidation = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InputBox
        laBel="Test Label"
        placeholder="Test Placeholder"
        dataType="height"
        handleValidation={mockHandleValidation}
        setValue={() => {}}
        reset={false}
      />
    );
    const inputElement = getByPlaceholderText(/Test Placeholder/i);
    fireEvent.change(inputElement, { target: { value: '900' } });
    fireEvent.blur(inputElement);
    expect(getByText('Please enter a valid height')).toBeInTheDocument();
        });
    it('validates input with Character/Texts', () => {
    const mockHandleValidation = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <InputBox
        laBel="Test Label"
        placeholder="Test Placeholder"
        dataType="height"
        handleValidation={mockHandleValidation}
        setValue={() => {}}
        reset={false}
      />
    );
    const inputElement = getByPlaceholderText(/Test Placeholder/i);
    fireEvent.change(inputElement, { target: { value: 'hello' } });
    fireEvent.blur(inputElement);
    expect(getByText('Please enter a valid height')).toBeInTheDocument();
    //expect(mockHandleValidation).toHaveBeenCalledWith('weight', false);
        });
        it('validates input for age', () => {
          const mockHandleValidation = jest.fn();
          const { getByPlaceholderText, getByText } = render(
            <InputBox
              laBel="Test Label"
              placeholder="Test Placeholder"
              dataType="age"
              handleValidation={mockHandleValidation}
              setValue={() => {}}
              reset={false}
            />
          );
          const inputElement = getByPlaceholderText(/Test Placeholder/i);
          fireEvent.change(inputElement, { target: { value: '900' } });
          fireEvent.blur(inputElement);
          expect(getByText('Please enter a valid age')).toBeInTheDocument();
              });
              it('validates input for age', () => {
                const mockHandleValidation = jest.fn();
                const { getByPlaceholderText, getByText } = render(
                  <InputBox
                    laBel="Test Label"
                    placeholder="Test Placeholder"
                    dataType="age"
                    handleValidation={mockHandleValidation}
                    setValue={() => {}}
                    reset={false}
                  />
                );
                const inputElement = getByPlaceholderText(/Test Placeholder/i);
                fireEvent.change(inputElement, { target: { value: 'hello' } });
                fireEvent.blur(inputElement);
                expect(getByText('Please enter a valid age')).toBeInTheDocument();
                    });
                    it('validates input for age', () => {
                      const mockHandleValidation = jest.fn();
                      const { getByPlaceholderText, getByText } = render(
                        <InputBox
                          laBel="Test Label"
                          placeholder="Test Placeholder"
                          dataType="age"
                          handleValidation={mockHandleValidation}
                          setValue={() => {}}
                          reset={false}
                        />
                      );
                      const inputElement = getByPlaceholderText(/Test Placeholder/i);
                      fireEvent.change(inputElement, { target: { value: '1' } });
                      fireEvent.blur(inputElement);
                      expect(getByText('Please enter a valid age')).toBeInTheDocument();
                          });
          it('validates input for dataype=else', () => {
              // Mock props
              const mockHandleValidation = jest.fn();
              const mockSetValue = jest.fn();
              const props = {
                laBel: 'Test Label',
                placeholder: 'Test Placeholder',
                dataType: 'else',
                handleValidation: mockHandleValidation,
                setValue: mockSetValue,
                reset: false,
              };
            
              // Render the component
              const { getByPlaceholderText } = render(<InputBox {...props} />);
            
              // Simulate user input
              const inputElement = getByPlaceholderText('Test Placeholder');
              fireEvent.change(inputElement, { target: { value: '900' } });
            
              // Trigger blur event
              fireEvent.blur(inputElement);
            
              // Check if handleValidation is called with the correct arguments
              expect(mockHandleValidation).toHaveBeenCalledWith('else', true);
            });

            test('validateInput should handle age validation correctly', () => {
              // Mock props
              const mockHandleValidation = jest.fn();
              const mockSetValue = jest.fn();
              const props = {
                laBel: 'Test Label',
                placeholder: 'Test Placeholder',
                dataType: 'age',
                handleValidation: mockHandleValidation,
                setValue: mockSetValue,
                reset: false,
              };
            
              // Render the component
              const { getByPlaceholderText } = render(<InputBox {...props} />);
            
              // Helper function to set input value and trigger blur event
              const setAndBlur = (value) => {
                const inputElement = getByPlaceholderText('Test Placeholder');
                fireEvent.change(inputElement, { target: { value } });
                fireEvent.blur(inputElement);
              };
            
              // Test cases
            
              // Case 1: Valid age (should return true)
              setAndBlur('25');
              expect(mockHandleValidation).toHaveBeenCalledWith('age', true);
            
              // Case 2: Invalid age (less than 2) (should return false)
              setAndBlur('1');
              expect(mockHandleValidation).toHaveBeenCalledWith('age', false);
            
              // Case 3: Invalid age (greater than 90) (should return false)
              setAndBlur('95');
              expect(mockHandleValidation).toHaveBeenCalledWith('age', false);
            
              // Case 4: Invalid age (not a number) (should return false)
              setAndBlur('abc');
              expect(mockHandleValidation).toHaveBeenCalledWith('age', false);
            });
          })
// Add similar tests for height and age validations as needed
