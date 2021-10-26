import { render } from '@testing-library/react';
import CompanyDetail from './CompanyDetail';
import { MemoryRouter } from 'react-router-dom';

test('smoke test', () => {
  render(
    <MemoryRouter>
      <CompanyDetail />
    </MemoryRouter>
  );
});

test('snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyDetail />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});