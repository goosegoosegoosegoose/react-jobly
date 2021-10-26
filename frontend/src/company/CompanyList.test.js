import { render } from '@testing-library/react';
import CompanyList from './CompanyList';
import { MemoryRouter } from 'react-router-dom';

test('smoke test', () => {
  render(
    <MemoryRouter>
      <CompanyList />
    </MemoryRouter>
  );
});

test('snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyList />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});