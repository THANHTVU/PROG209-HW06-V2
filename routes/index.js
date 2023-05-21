var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET home page. */
router.post("/api/payment", function (req, res, next) {
  res.send("you have paid your order");
});

/* GET home page. */
router.post("/api/orders/cancel", function (req, res, next) {
  res.send("you have canceled your order");
});

router.post("/api/orders/add-item", function (req, res, next) {
  // Retrieve the order ID and item name from the request body
  var orderID = req.body.orderID;
  var item = req.body.item;

  // Perform any necessary validation or processing

  // Assuming you have a data storage or database, you can update the order with the new item
  // For example, you can store the items in an array associated with the order ID
  // This is just a basic example, you would typically have more robust logic and database integration
  // var order = getOrderByID(orderID);
  // if (order) {
  // order.items.push(item);
  // Update the order in your data storage
  // updateOrder(order);

  // Send a success response
  res.send("Item added to order  successfully");
  // } else {
  // If the order does not exist, you can send an error response
  // res.status(404).send("Order not found");
  // }
});

module.exports = router;
