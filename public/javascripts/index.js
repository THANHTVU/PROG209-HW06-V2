// $(document).ready(function () {
//   // Initialize jQuery Mobile
//   $(document).on("mobileinit", function () {
//     $.extend($.mobile, {
//       allowCrossDomainPages: true,
//     });
//   });
// });

// // Add an event listener for the form submission
// $("#submit-button").on("click", function () {
//   // Get the form data and create a new order object
//   console.log("rertertertertertertre");
//   var order = {
//     id: Math.random().toString(16).slice(2),
//     name: $("#name").val(),
//     email: $("#email").val(),
//     // phone: $("#phone").val(),
//     food: $("#food").val(),
//   };

//   // Create an array to store the orders
//   var orders = [];

//   // Add the order to the array
//   orders.push(order);

//   // store the array in local storage
//   localStorage.setItem("orders", JSON.stringify(orders));
//   $("#name").val("");
//   $("#food").val("");
//   $("#email").val("");
//   alert("Data saved successfully!");
//   $.mobile.changePage("#display-page");
// });

// // Add an event listener for the display page
// $("#performAction1").on("click", function () {
//   console.log("heertergrgrgrg");
//   performAction1();
// });

// // Add an event listener for the display page
// $(document).on("pagebeforeshow", "#display-page", function () {
//   // Get the orders from local storage
//   var orders = JSON.parse(localStorage.getItem("orders"));

//   // Check if there are any orders
//   if (orders && orders.length > 0) {
//     // Create a list of orders
//     var orderList = $("<ul>");

//     // Loop through the orders and create list items
//     for (var i = 0; i < orders.length; i++) {
//       var order = orders[i];
//       var listItem = $("<li>").html(
//         "<strong>Name:</strong> " +
//           order.name +
//           "<br><strong>Email:</strong> " +
//           order.email +
//           "<br><strong>Phone:</strong> " +
//           order.phone +
//           "<br><strong>Food:</strong> " +
//           order.food
//       );
//       orderList.append(listItem);
//     }

//     // Add the list to the display page
//     $("#order-list").html(orderList).trigger("create");
//   }
// });

// {

// CODE TEST 2

/* <script>
function performAction1() {
    console.log("Performing action 1...");
    // Add your unique action for the first <li> item here
}

function performAction2() {
    console.log("Performing action 2...");
    // Add your unique action for the second <li> item here
}

function performAction3() {
    console.log("Performing action 3...");
    // Add your unique action for the third <li> item here
}

// Add an event listener for the form submission
$(document).on("click", "#submit-button", function () {
    var order = {
        id: Math.random().toString(16).slice(2),
        name: $("#name").val(),
        email: $("#email").val(),
        food: $("#food").val()
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    $("#name").val("");
    $("#email").val("");
    $("#food").val("");

    $.mobile.changePage("#display-page");
});

// Add an event listener for the display page
$(document).on("pagebeforeshow", "#display-page", function () {
    var orders = JSON.parse(localStorage.getItem("orders"));

    if (orders && orders.length > 0) {
        var orderList = $("<ul>");

        for (var i = 0; i < orders.length; i++) {
            var order = orders[i];
            var listItem = $("<li>").html(
                "<strong>Name:</strong> " +
                order.name +
                "<br><strong>Email:</strong> " +
                order.email +
                "<br><strong>Food:</strong> " +
                order.food
            );
            orderList.append(listItem);
        }

        $("#order-list").html(orderList).trigger("create");
    }
});
</script> */

$(document).ready(function () {
  // Initialize jQuery Mobile
  $(document).on("mobileinit", function () {
    $.extend($.mobile, {
      allowCrossDomainPages: true,
    });
  });
});

//
function performAction1() {
  // Add your code for the Pay for Order action here
  // For demonstration purposes, let's display an alert message
  alert("Performing Action 1: Pay for Order");

  // You can add additional code here to handle the "Pay for Order" action
  // such as making a payment, updating the order status, etc.

  // Make an API request to process the payment
  // Assuming you have an API endpoint for processing payments
  $.ajax({
    url: "/api/payments",
    method: "POST",
    data: {
      orderID: "12345", // Replace with the actual order ID or relevant data
      amount: 50.0, // Replace with the actual order amount or relevant data
      // Include any other required data for processing the payment
    },
    success: function (response) {
      // Handle the success response from the API
      // For example, display a success message to the user
      alert("Payment successful!");
      // You can also update the UI or perform any other necessary actions
    },
    error: function (xhr, status, error) {
      // Handle the error response from the API
      // For example, display an error message to the user
      alert("Payment failed. Please try again later.");
      // You can also handle specific error cases or perform any other necessary actions
    },
  });

  // Update the order status in the database or perform any other relevant actions
  // Assuming you have a function to update the order status
  updateOrderStatus("12345", "Paid"); // Replace with the actual order ID and status
}

function updateOrderStatus(orderID, status) {
  // Code to update the order status in the database or perform any other relevant actions
  // This is just a placeholder function, replace it with your actual implementation
  console.log(
    "Updating order status: Order ID - ",
    orderID,
    ", Status - ",
    status
  );
}

// Function for Action 2: Cancel Order
function performAction2() {
  // Add your code for the Cancel Order action here
  $.ajax({
    url: "/api/orders/cancel",
    method: "POST",
    data: {
      orderID: "12345", // Replace with the actual order ID or relevant data
    },
    success: function (response) {
      // Handle the success response from the API
      alert("Order canceled successfully!");
      // You can also update the UI or perform any other necessary actions
    },
    error: function (xhr, status, error) {
      // Handle the error response from the API
      alert("Failed to cancel order. Please try again later.");
      // You can also handle specific error cases or perform any other necessary actions
    },
  });
}

// Function for Action 3: Add Items into Order
function performAction3() {
  // Add your code for the Add Items into Order action here
  var item = prompt("Enter item name:"); // Prompt the user to enter the item name
  if (item) {
    $.ajax({
      url: "/api/orders/add-item",
      method: "POST",
      data: {
        orderID: "12345", // Replace with the actual order ID or relevant data
        item: item,
      },
      success: function (response) {
        // Handle the success response from the API
        alert("Item added to order successfully!");
        // You can also update the UI or perform any other necessary actions
      },
      error: function (xhr, status, error) {
        // Handle the error response from the API
        alert("Failed to add item to order. Please try again later.");
        // You can also handle specific error cases or perform any other necessary actions
      },
    });
  }
}

// Add an event listener for the form submission
$("#submit-button").on("click", function () {
  // Get the form data and create a new order object
  var order = {
    id: Math.random().toString(16).slice(2),
    name: $("#name").val(),
    email: $("#email").val(),
    food: $("#food").val(),
  };

  // Create an array to store the orders
  var orders = JSON.parse(localStorage.getItem("orders"));

  // Add the order to the array
  orders.push(order);

  // store the array in local storage
  localStorage.setItem("orders", JSON.stringify(orders));
  $("#name").val("");
  $("#food").val("");
  $("#email").val("");
  alert("Data saved successfully!");
  $.mobile.changePage("#display-page");
});

// Add an event listener for the display page
$(document).on("pagebeforeshow", "#display-page", function () {
  // Get the orders from local storage
  var orders = JSON.parse(localStorage.getItem("orders"));

  // Check if there are any orders
  if (orders && orders.length > 0) {
    // Create a list of orders
    var orderList = $("<ul>");

    // Loop through the orders and create list items
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      var listItem = $("<li>").html(
        "<strong>Name:</strong> " +
          order.name +
          "<br><strong>Email:</strong> " +
          order.email +
          "<br><strong>Food:</strong> " +
          order.food
      );
      orderList.append(listItem);
    }

    // Add the list to the display page
    $("#order-list").html(orderList).trigger("create");
  }
});
