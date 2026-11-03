# GameVault Backend Starter (Demo)

This is a small API starter to help structure GameVault's UID offer check and order flow.

## Run locally
1. Install Node.js (a parent/trusted adult can help with setup).
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm start`
5. Visit `http://localhost:3000/api/health`

## Endpoints
- `GET /api/health` — service status
- `POST /api/offers/check` with JSON `{ "uid": "123456789" }` — returns clearly marked sample offers
- `POST /api/orders` with `{ "uid": "123456789", "offer": "airdrop", "paymentMethod": "esewa" }` — creates a demo order
- `GET /api/orders/:id` — fetches demo order status

## Important before public launch
- This starter is **demo-only**. Offer checking is not connected to Free Fire or a supplier.
- Orders are stored in memory and disappear when the server restarts.
- No payment is collected and no game item is delivered.
- Production needs an authorized supplier contract/API, approved payment gateway, persistent database,
  authentication/admin controls, input validation, rate limits, logging, privacy protections, and HTTPS.
- Keep API credentials in server environment variables. Never put supplier secrets or payment secrets in
  frontend HTML or share them in chat.
- Have a parent/trusted adult handle provider/payment accounts and agreements.
