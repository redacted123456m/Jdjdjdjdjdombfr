import { createBareServer } from "@tomphttp/bare-server-node";

// Create the bare server function (request handler)
const bare = createBareServer("/bare/");

// Export as a serverless function for Vercel
export default function handler(req, res) {
  bare(req, res);
}
