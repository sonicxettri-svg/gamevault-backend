
const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const orders = new Map();

app.get("/", (req, res) => {
  res.send("GameVault Backend is running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    website: "GameVault",
    status: "Online",
    mode: "Demo"
  });
});

app.post("/api/offers/check", (req, res) => {
  const uid = String(req.body.uid || "").trim();

  if (!/^\d{5,20}$/.test(uid)) {
    return res.status(400).json({
      error: "Invalid Free Fire UID"
    });
  }

  res.json({
    demo: true,
    message: "Supplier API not connected yet",
    offers: [
      {
        name: "Airdrop",
        price: 199
      },
      {
        name: "Level Up Pass",
        price: 499
      }
    ]
  });
});

app.post("/api/orders", (req, res) => {
  const id = crypto.randomUUID();

  const order = {
    id,
    uid: req.body.uid,
    offer: req.body.offer,
    status: "demo_pending"
  };

  orders.set(id, order);

  res.status(201).json(order);
});

app.get("/api/orders/:id", (req, res) => {
  const order = orders.get(req.params.id);

  if (!order) {
    return res.status(404).json({
      error: "Order not found"
    });
  }

  res.json(order);
});

app.listen(PORT, () => {
  console.log("GameVault API running on port " + PORT);
});
