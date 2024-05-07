import { render, fireEvent } from '@testing-library/react-native';
import { TimerComponent } from './TimerComponent';
import useTimer from '../../../src/hooks/useTimer';

jest.mock('../../../src/hooks/useTimer');

describe('TimerComponent', () => {
  beforeEach(() => {
    useTimer.mockReturnValue({
      timeRemaining: '00:00:00',
      isRunning: false,
      startTimer: jest.fn(),
      pauseTimer: jest.fn(),
      resetTimer: jest.fn(),
    });
  });

  it('should render correctly', () => {
    const { getByText } = render(<TimerComponent />);

    expect(getByText('00:00:00')).toBeTruthy();
    expect(useTimer).toHaveBeenCalledWith(3, expect.any(Function));
  });

  it('should call startTimer when the component mounts', () => {
    const startTimer = jest.fn();
    useTimer.mockReturnValue({
      timeRemaining: '00:00:00',
      isRunning: false,
      startTimer,
      pauseTimer: jest.fn(),
      resetTimer: jest.fn(),
    });

    render(<TimerComponent />);

    expect(startTimer).toHaveBeenCalled();
  });

  it('should call startTimer when the start button is pressed', () => {
    const startTimer = jest.fn();
    useTimer.mockReturnValue({
      timeRemaining: '00:00:00',
      isRunning: false,
      startTimer,
      pauseTimer: jest.fn(),
      resetTimer: jest.fn(),
    });

    const { getByText } = render(<TimerComponent />);

    fireEvent.press(getByText('Start'));

    expect(startTimer).toHaveBeenCalled();
  });

  it('should call pauseTimer when the pause button is pressed', () => {
    const pauseTimer = jest.fn();
    useTimer.mockReturnValue({
      timeRemaining: '00:00:00',
      isRunning: true,
      startTimer: jest.fn(),
      pauseTimer,
      resetTimer: jest.fn(),
    });

    const { getByText } = render(<TimerComponent />);

    fireEvent.press(getByText('Pause'));

    expect(pauseTimer).toHaveBeenCalled();
  });

  it('should call resetTimer when the reset button is pressed', () => {
    const resetTimer = jest.fn();
    useTimer.mockReturnValue({
      timeRemaining: '00:00:00',
      isRunning: true,
      startTimer: jest.fn(),
      pauseTimer: jest.fn(),
      resetTimer,
    });

    const { getByText } = render(<TimerComponent />);

    fireEvent.press(getByText('Reset'));

    expect(resetTimer).toHaveBeenCalled();
  });
});