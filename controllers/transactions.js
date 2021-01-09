const Transaction = require("../models/Transaction");

// get all transactions
// route  GET /api/v1/transactions
// public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.send(500).json({
      false: "Server Error",
    });
  }
};

// Add transaction
// route  Post /api/v1/transactions
// public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete transaction
// route  DELETE /api/v1/transactions
// public
exports.deleteTransaction = async (req, res, next) => {
  res.send(" DELETE transaction");
};
