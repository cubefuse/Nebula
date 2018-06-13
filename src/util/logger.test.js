import Logger from './logger';

describe("Testing logger", () => {
  test('can create logger without error', () => {
    const logger = new Logger();
    expect(logger).toBeDefined();
    expect(logger).toBeInstanceOf(Logger);
  });

  test('can perform logging correctly', () => {
    Logger.info("Test Message");
    Logger.error("Test Error");
  });
});