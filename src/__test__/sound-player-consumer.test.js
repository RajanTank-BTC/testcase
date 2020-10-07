import SoundPlayerConsumer from '../sound-player-consumer';
import SoundPlayer from '../sound-player';

const mockPlaySoundFile = jest.fn();
jest.mock('../sound-player', () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile };
  });
});

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

it('the consumer should be able to call SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(soundPlayerConsumer).toBeTruthy();
});

it('we can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('we can check if the consumer called a method', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});