import { render } from '@testing-library/react';
import JobCard from './JobCard'  

test('smoke test', () => {
  render(      
    <JobCard />
  );
});

test('snapshot', () => {
  const { asFragment } = render(<JobCard />);
  expect(asFragment()).toMatchSnapshot();
});