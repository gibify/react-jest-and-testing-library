import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import App from './App';

describe('App Component', () => {
  it('Should render list items', () => {
    const { getByText } = render(<App />)
    expect(getByText('eu')).toBeInTheDocument()
    expect(getByText('voce')).toBeInTheDocument()
    expect(getByText('ele')).toBeInTheDocument()
  });

  it('Should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App />)
    const inputElement = getByPlaceholderText('Novo item');
    const addButtom = getByText('add');

    useEvent.type(inputElement, 'novo')
    useEvent.click(addButtom)

    await waitFor(() => {
      return getByText('novo')
    })

    // expect(await findByText('novo')).toBeInTheDocument()
  })

  it('Should be able to remove item from the list', async () => {
    const { getByText, getAllByText, queryByText } = render(<App />)

    const addButtom = getByText('add');
    // const removeButtons = getAllByText('Remover')

    useEvent.click(addButtom)
    // useEvent.click(removeButtons[0]);

    // await waitForElementToBeRemoved(() => {
    //   return getByText('eu');
    // })
    await waitFor(() => {
      expect(queryByText('eu')).not.toBeInTheDocument();
    })

    // expect(await findByText('novo')).toBeInTheDocument()
  })
});

// test('Should be a text rendering', () => {
//   const { getByText } = render(<App />)
//   expect(getByText('Hello World')).toBeInTheDocument
// })