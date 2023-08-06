import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test('renders a snapshot of app', () => {
  const tree = renderer.create(<App />).toJSON()
 
  expect(tree).toMatchSnapshot();
});

