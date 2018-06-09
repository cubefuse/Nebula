/**
 * Simple logger with support for custom log targets.
 * @example
 * let logger = new Logger();
 * logger.info("This is a test log.");
 * @version 1.0.0
 */
export default class Logger {
  /**
   * Initialize logger.
   */
  constructor(
    customLogger: ?(error: Error | null, value: string | null) => void
  ) {
    this.loggingHandler = customLogger || Logger.consoleLogger;
  }

  /**
   * @private
   * Default logger that logs to console.
   * @param message - Message to log
   * @param level - Log level of the message
   */
  static consoleLogger(
    message: string,
    level: "info" | "debug" | "warn" | "error"
  ) {
    console.log(`${level.toUpperCase()} : ${message}`);
  }

  /**
   * Log a message with the defined logger.
   * @param message - Message to log
   * @param level - Log level of the message
   */
  log(message: string, level: "info" | "debug" | "warn" | "error") {
    if (process.env.NODE_ENV !== "production")
      this.loggingHandler(message, level);
  }

  /**
   * Change the logger to a custom logger.
   * @param newLogger - The new logger function.
   */
  setHandler(newLogger: (error: Error | null, value: string | null) => void) {
    this.loggingHandler = newLogger;
  }

  /**
   * Convenience function to log an error.
   * @param errorMsg - The error to log.
   */
  static error(errorMsg: string) {
    log(errorMsg, "error");
  }

  /**
   * Convenience function to log an warning.
   * @param warningMsg - The warning to log.
   */
  static warn(warningMsg: string) {
    log(warningMsg, "warn");
  }

  /**
   * Convenience function to log information.
   * @param infoMsg - The information to log.
   */
  static info(infoMsg: string) {
    log(infoMsg, "info");
  }

  /**
   * Convenience function to log a debug message.
   * @param debugMsg - The debug message to log.
   */
  static debug(debugMsg: string) {
    log(debugMsg, "debug");
  }
}
