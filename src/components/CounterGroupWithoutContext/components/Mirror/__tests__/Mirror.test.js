import React from 'react';
import { render, screen } from '@testing-library/react';
import Mirror from '../Mirror';

describe('<Mirror /> Without Context', () => {

  it('should be render successfuly', () => {
    const { container } = render(<Mirror counter={0} />);
    expect(container).toBeInTheDocument();
  });

  it('should be render received counter', () => {
    render(<Mirror counter={10} />);
    expect(screen.getByText('Contador espelho: 10')).toBeInTheDocument();
  });

});