import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import CounterGroupWithoutContext from '../CounterGroupWithoutContext';

describe('<CounterGroupWithoutContext />', () => {

  it('should be render successfuly', () => {
    const { container } = render(<CounterGroupWithoutContext />);
    expect(container).toBeInTheDocument();
  });

  it('should be increment counter when increment button was clicked', () => {
    render(<CounterGroupWithoutContext />);
    const incrementButton = screen.getByRole('button', { name: /\+/i });

    act(() => {
      fireEvent.click(incrementButton);
    });

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
    expect(screen.getByText('Contador espelho: 1')).toBeInTheDocument();
  });

  it('should be decrement counter when decrement button was clicked', () => {
    render(<CounterGroupWithoutContext />);
    const incrementButton = screen.getByRole('button', { name: /\+/i });
    const decrementButton = screen.getByRole('button', { name: /\-/i });

    act(() => {
      fireEvent.click(incrementButton);
      fireEvent.click(incrementButton);
    });

    expect(screen.getByText('Contador: 2')).toBeInTheDocument();
    expect(screen.getByText('Contador espelho: 2')).toBeInTheDocument();

    act(() => {
      fireEvent.click(decrementButton);
    });

    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
    expect(screen.getByText('Contador espelho: 1')).toBeInTheDocument();

  });

  it('should not decrement counter when decrement button was clicked and actual counter is zero', () => {
    render(<CounterGroupWithoutContext />);
    const decrementButton = screen.getByRole('button', { name: /\-/i });

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
    expect(screen.getByText('Contador espelho: 0')).toBeInTheDocument();

    act(() => {
      fireEvent.click(decrementButton);
    });

    expect(screen.getByText('Contador: 0')).toBeInTheDocument();
    expect(screen.getByText('Contador espelho: 0')).toBeInTheDocument();
  });

})