import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders learn', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2/i);
    // expect(helloWorldElem).toBeNull();
  
    // screen.debug();
  
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({color: 'red'});

    // screen.debug();
  });

  test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');

    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT EVENT', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // Искуственное событие
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // });

    // Ближе к пользовательским событиям
    userEvent.type(input, '123123');

    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
});