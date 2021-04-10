import { render, screen } from '@testing-library/react';
import React from 'react';
import { ExampleComponent } from './ExampleComponent';

describe('<ExampleComponent />', () => {
  test('rendered text', () => {
    render(<ExampleComponent title="title">sample component</ExampleComponent>);
    expect(screen.getByText('sample component')).toBeDefined();
  });
});
