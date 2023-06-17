import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { LANGUAGES } from '../constants';
import AdvisorPreview from '../components/AdvisorPreview';
import { AvailabilityStatus } from '../@types';

describe('AdvisorPreview', () => {
  it('renders a component', async () => {
    const advisor = {
      id: faker.database.mongodbObjectId(),
      name: faker.person.fullName(),
      status: faker.number.int({ min: 1, max: 2}),
      language: LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)],
      reviewNumber: faker.number.int({ min: 10, max: 1000})
    };
    render(
      <table>
        <tbody>
          <AdvisorPreview advisor={advisor}/>
        </tbody>
      </table>
    );

    expect(screen.queryByTestId('advisor-item')).toBeTruthy();

    const name = await screen.findByTestId('advisor-name');
    expect(name.innerHTML).toStrictEqual(advisor.name);

    const status = await screen.findByTestId('advisor-status');
    expect(status.innerHTML).toStrictEqual(AvailabilityStatus[advisor.status]);

    const language = await screen.findByTestId('advisor-language');
    expect(language.innerHTML).toStrictEqual(advisor.language);

    const reviews = await screen.findByTestId('advisor-reviews');
    expect(reviews.innerHTML).toStrictEqual(String(advisor.reviewNumber));
  });
});
