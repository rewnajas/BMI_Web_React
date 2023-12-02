import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
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
 })
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
  fireEvent.change(inputElement, { target: { value: '900' } });
  fireEvent.blur(inputElement);
  expect(getByText('Please enter a valid weight')).toBeInTheDocument();
});
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

            it('send err message for "nothing" ', () => {
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
              fireEvent.change(inputElement, { target: { value: '' } });
              fireEvent.blur(inputElement);
              expect(getByText('required*')).toBeInTheDocument();
                  });
                  

                  it('send err message for "nothing" ', () => {
                    const testValue = ''
                    const mockHandleValidation = jest.fn();
                    const { getByPlaceholderText, getByText } = render(
                      <InputBox
                        laBel="Test Label"
                        placeholder="Test Placeholder"
                        dataType="age"
                        handleValidation={mockHandleValidation}
                        setValue={(value) => (testValue = value)}
                        reset={true}
                      />
                    );
                    const inputElement = getByPlaceholderText(/Test Placeholder/i);
                    expect(testValue).toBe('');
                        });
    })
    

// Add similar tests for height and age validations as needed
