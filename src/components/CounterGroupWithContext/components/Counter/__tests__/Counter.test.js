import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Counter from '../Counter';
import { CounterContextProvider } from '../../../context/Counter';

describe('<Counter /> With Context', () => {
  it('should be render successfuly', () => {
    const { container } = render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it('should increment counter when increment button was clicked', () => {
    render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );
    const incrementButton = screen.getByRole('button', { name: /\+/i });
    
    act(() => {
      fireEvent.click(incrementButton);
    });

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
    
  })

  it('should decrement counter when decrement button was clicked and counter is greater than zero', () => {
    render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: /\+/i });
    
    act(() => {
      fireEvent.click(incrementButton);
    });

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();

    const decrementButton = screen.getByRole('button', { name: /\-/i });
    
    act(() => {
      fireEvent.click(decrementButton);
    });

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
    
  });

  it('should not decrement counter when decrement button was clicked and counter is zero', () => {
    render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();

    const decrementButton = screen.getByRole('button', { name: /\-/i });
    
    act(() => {
      fireEvent.click(decrementButton);
    });

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
    
  });

});