
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("🔹 Dispatching Action:", action);
  console.log("📌 State Before:", store.getState()); 
  const result = next(action);
  console.log("✅ State After:", store.getState());
  return result;
};

export default loggerMiddleware;
