// utils/AppError.mjs

class AppError extends Error {
  constructor(statusCode = 500, message = "Something went wrong!", data = {}, logLevel = "error") {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Identifies known (handled) errors
    this.logLevel = logLevel; // Can be "info", "warn", "error", "critical"
    
    // Captures clean stack trace
    Error.captureStackTrace(this, this.constructor);
  }
  // Log Error Details (For Debugging)
  logError() {
    console[this.logLevel](
      `🚨 Error [${this.logLevel.toUpperCase()}]: ${this.message} | Status: ${this.statusCode}`
    );
    if (Object.keys(this.data).length > 0) {
      console.log("🔍 Additional Data:", this.data);
    }
    console.log("🛠 Stack Trace:", this.stack);
  }
}

export default AppError;
