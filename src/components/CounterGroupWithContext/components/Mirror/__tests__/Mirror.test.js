import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterContextProvider } from '../../../context/Counter';
import Mirror from '../Mirror';

describe('<Mirror /> Without Context', () => {

  it('should be render successfuly', () => {
    const { container } = render(
      <CounterContextProvider>
        <Mirror />
      </CounterContextProvider>
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Contador espelho: 0')).toBeInTheDocument();
  });

});