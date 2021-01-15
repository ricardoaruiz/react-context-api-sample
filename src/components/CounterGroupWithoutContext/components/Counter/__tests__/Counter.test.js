import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Counter from '../Counter';

const mockedIncrement = jest.fn();
const mockedDecrement = jest.fn();

describe('<Counter/> Without Context', () => {
  beforeEach(() => {
    mockedIncrement.mockReset();
    mockedDecrement.mockReset();
  });

  it('should be render successfuly', () => {
    const { container } = render(<Counter counter={0} increment={mockedIncrement} decrement={mockedDecrement}/>);
    expect(container).toBeInTheDocument();
  })

  it('should be call decrement callback when decrement button was clicked', () => {
    render(<Counter counter={0} increment={mockedIncrement} decrement={mockedDecrement}/>);
    const decrementButton = screen.getByRole('button', { name: /\-/i });
    
    act(() => {
      fireEvent.click(decrementButton);
    })
    expect(mockedDecrement).toHaveBeenCalled();
  })

  it('should be call increment callback when increment button was clicked', () => {
    render(<Counter counter={0} increment={mockedIncrement} decrement={mockedDecrement}/>);
    const incrementButton = screen.getByRole('button', { name: /\+/i });
    
    act(() => {
      fireEvent.click(incrementButton);
    })
    expect(mockedIncrement).toHaveBeenCalled();
  })
})