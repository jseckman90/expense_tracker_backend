// get all transactions
// route  GET /api/v1/transactions
// public
exports.getTransactions = (req, res, next) => {
  res.send(" GET transactions");
};

// Add transaction
// route  Post /api/v1/transactions
// public
exports.addTransaction = (req, res, next) => {
  res.send(" POST transaction");
};

// delete transaction
// route  DELETE /api/v1/transactions
// public
exports.deleteTransaction = (req, res, next) => {
  res.send(" DELETE transaction");
};
