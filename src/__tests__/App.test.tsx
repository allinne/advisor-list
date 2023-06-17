import { render, screen, fireEvent } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { LANGUAGES } from '../constants';
import App from '../components/App';
import { Advisor, AvailabilityStatus } from '../@types';

describe('App', () => {
  it('renders empty App component', () => {
    render(<App initialData={[]}/>);

    expect(screen.queryByTestId('advisor-item')).toBeFalsy();
  });

  it('renders App component with 5 advisors', () => {
    const list: Advisor[] = [];
    for (let i = 0; i < 5; i++) {
      list.push({
        id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        status: faker.number.int({ min: 1, max: 2}),
        language: LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)],
        reviewNumber: faker.number.int({ min: 10, max: 1000})
      })
    }

    render(<App initialData={list}/>);

    const advisors = screen.getAllByTestId('advisor-item');
    expect(advisors.length).toStrictEqual(5);
  });

  describe('- filtering', () => {
    let list: Advisor[] = [];

    beforeEach(() => {
      list = [
        {
          id: faker.database.mongodbObjectId(),
          name: 'Adam',
          status: AvailabilityStatus.offline,
          language: LANGUAGES[0],
          reviewNumber: 5
        },
        {
          id: faker.database.mongodbObjectId(),
          name: 'Eva',
          status: AvailabilityStatus.online,
          language: LANGUAGES[1],
          reviewNumber: 1
        }
      ];
    });

    it('should filter out by online status', async () => {
      render(<App initialData={list}/>);

      let advisors = screen.getAllByTestId('advisor-item');
      expect(advisors.length).toStrictEqual(2);

      fireEvent.change(screen.getByTestId('select-status'), { target: { value: 'online' } });
      let options = screen.getAllByTestId('select-status-option');
      expect((options[1] as HTMLOptionElement).selected).toBeTruthy();

      advisors = screen.getAllByTestId('advisor-item');
      expect(advisors.length).toStrictEqual(1);

      const name = await screen.findByTestId('advisor-name');
      expect(name.innerHTML).toStrictEqual('Eva');
    });

    it('should filter out by language', async () => {
      render(<App initialData={list}/>);

      let advisors = screen.getAllByTestId('advisor-item');
      expect(advisors.length).toStrictEqual(2);

      fireEvent.change(screen.getByTestId('select-language'), { target: { value: 1 } });
      let options = screen.getAllByTestId('select-language-option');
      expect((options[1] as HTMLOptionElement).selected).toBeTruthy();

      advisors = screen.getAllByTestId('advisor-item');
      expect(advisors.length).toStrictEqual(1);

      const name = await screen.findByTestId('advisor-name');
      expect(name.innerHTML).toStrictEqual('Adam');
    });
  });

  describe('- sorting', () => {
    let list: Advisor[] = [];

    beforeEach(() => {
      list = [
        {
          id: faker.database.mongodbObjectId(),
          name: 'Adam',
          status: AvailabilityStatus.offline,
          language: LANGUAGES[0],
          reviewNumber: 5
        },
        {
          id: faker.database.mongodbObjectId(),
          name: 'Eva',
          status: AvailabilityStatus.online,
          language: LANGUAGES[1],
          reviewNumber: 1
        },
        {
          id: faker.database.mongodbObjectId(),
          name: 'Solomon',
          status: AvailabilityStatus.online,
          language: LANGUAGES[1],
          reviewNumber: 10
        },
      ];
    });

    it('should sort out by the most popular advisors', async () => {
      render(<App initialData={list}/>);

      let advisors = await screen.findAllByTestId('advisor-name');
      expect(advisors[0].innerHTML).toStrictEqual('Adam');
      expect(advisors[1].innerHTML).toStrictEqual('Eva');
      expect(advisors[2].innerHTML).toStrictEqual('Solomon');

      fireEvent.click(screen.getByTestId('filter-reviews'));

      advisors = await screen.findAllByTestId('advisor-name');
      expect(advisors[0].innerHTML).toStrictEqual('Solomon');
      expect(advisors[1].innerHTML).toStrictEqual('Adam');
      expect(advisors[2].innerHTML).toStrictEqual('Eva');
    });

    it('should sort out by the least popular advisors', async () => {
      render(<App initialData={list}/>);

      fireEvent.click(screen.getByTestId('filter-reviews'));
      
      let advisors = await screen.findAllByTestId('advisor-name');
      expect(advisors[0].innerHTML).toStrictEqual('Solomon');
      expect(advisors[1].innerHTML).toStrictEqual('Adam');
      expect(advisors[2].innerHTML).toStrictEqual('Eva');

      fireEvent.click(screen.getByTestId('filter-reviews'));

      advisors = await screen.findAllByTestId('advisor-name');
      expect(advisors[0].innerHTML).toStrictEqual('Eva');
      expect(advisors[1].innerHTML).toStrictEqual('Adam');
      expect(advisors[2].innerHTML).toStrictEqual('Solomon');
    });
  });
});
