import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from '../utils/temperature';

describe('convertCelsiusToFahrenheit', () => {
  it('converts 100°C correctly', () => {
    expect(convertCelsiusToFahrenheit(100)).toEqual(212);
  });

  it('converts 0°C correctly', () => {
    expect(convertCelsiusToFahrenheit(0)).toEqual(32);
  });
});

describe('convertFahrenheitToCelsius', () => {
  it('converts 212°F correctly', () => {
    expect(convertFahrenheitToCelsius(212)).toEqual(100);
  });

  it('converts 32°F correctly', () => {
    expect(convertFahrenheitToCelsius(32)).toEqual(0);
  });
});
