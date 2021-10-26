import { render } from '@testing-library/react';
import JobList from './JobList';
import { MemoryRouter } from 'react-router-dom';

test('smoke test', () => {
  render(
    <MemoryRouter>
      <JobList />
    </MemoryRouter>
  );
});

test('snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <JobList />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});