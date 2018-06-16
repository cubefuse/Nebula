// @flow
import debug from "debug";

/**
 * Simple logger with .
 * @example
 * let logger = new Logger();
 * logger.info("This is a test log.");
 * @version 1.0.0
 */
export default class Logger {
  /**
   * @private
   * Default logger that logs to console.
   * @param message - Message to log
   * @param level - Log level of the message
   */
  static BASE = "nebula";
  static COLORS = {
    trace: "gray",
    info: "black",
    warn: "cyan",
    error: "red"
  };

  /**
   * Log a message.
   * @param message - Message to log
   * @param level - Log level of the message
   * @param source - Source of the log.
   */
  static log(
    message: string,
    level: "info" | "trace" | "warn" | "error",
    source: ?string
  ) {
    const namespace = `${this.BASE}:${level.toUpperCase()}`;
    const createDebug = debug(namespace);

    createDebug.color = this.COLORS[level];
    if (source) {
      createDebug(source, message);
    } else {
      createDebug(message);
    }
  }

  /**
   * Convenience function to log an error.
   * @param errorMsg - The error to log.
   * @param source - Source of the log.
   */
  static error(errorMsg: string, source: ?string) {
    this.log(errorMsg, "error", source);
  }

  /**
   * Convenience function to log an warning.
   * @param warningMsg - The warning to log.
   * @param source - Source of the log.
   */
  static warn(warningMsg: string, source: ?string) {
    this.log(warningMsg, "warn", source);
  }

  /**
   * Convenience function to log information.
   * @param infoMsg - The information to log.
   * @param source - Source of the log.
   */
  static info(infoMsg: string, source: ?string) {
    this.log(infoMsg, "info", source);
  }

  /**
   * Convenience function to log a debug message.
   * @param debugMsg - The debug message to log.
   * @param source - Source of the log.
   */
  static debug(debugMsg: string, source: ?string) {
    this.log(debugMsg, "trace", source);
  }
}
