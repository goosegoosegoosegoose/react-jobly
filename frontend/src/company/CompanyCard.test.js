import { render } from '@testing-library/react';
import CompanyCard from './CompanyCard';

test('smoke test', () => {
  render(      
    <CompanyCard />
  );
});

test('snapshot', () => {
  const { asFragment } = render(<CompanyCard />);
  expect(asFragment()).toMatchSnapshot();
});