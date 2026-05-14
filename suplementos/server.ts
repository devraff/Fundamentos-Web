import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/products", (req, res) => {
    const products = [
      {
        id: "1",
        name: "ISO-KINETIC V2",
        category: "PROTEIN",
        description: "Hydrolyzed Whey | 25g Protein",
        price: 64.99,
        badge: "WHEY ISOLATE",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA34JOL80cWq3y5LuxJxvqLbzL1FZydOrNDnPi4QOii1dhZcf_qN6aSdpT1X-7_h-nHJXRqMKpeXtY3la-2OkDNsFxoj9W-IQ2t6hKMw4VOQyDZFZzUopGmd18NACRGjwb2eT-CV01cm_MzPLHBrGzR3Dl-VNJuzupCDmBGdHUTfKD6bvnHLBCfPmwT9wc93qHLUn7P2bAGKSa8gFujzYYm7yPebUMZCwdK0iiIYppdWO-AA_zy1y1u8BTR_dx88mPDmdjKzjHgSRM"
      },
      {
        id: "2",
        name: "PLASMA PUMP 4.0",
        category: "PRE-WORKOUT",
        description: "Nitric Oxide | L-Citrulline",
        price: 49.99,
        badge: "ENERGY & FOCUS",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-2Jq6Yo_NxWbxSpu0HRCjTo3oe8P1GVD2uvSL1Ow2goxUXUpZvC5a5Chl15s4APg55ttAY2lIvdbNbzDLbDiGqnj13MpA9kB5dpFhjHSG-ja4tFIxB0MBKK8uCHcqSpGITUoAS89hqZNakx0fzHHkVxFLz8ZgZiu6IF9GHDg9WL4TcTKJWa_hf5CA57Uto6gZ-XulJXntC5vhTIYQM9FZ0ZB_miZTfjOB4_UYg4e1zUb5RjOIfeUVKGB-lYpzG2LPSVbfUB6DyGI"
      },
      {
        id: "3",
        name: "CREA-CORE PURE",
        category: "CREATINE",
        description: "Micronized Monohydrate",
        price: 34.99,
        badge: "POWER & RECOVERY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF1gF6omL2HU4ABmUDOY_RVp3U7jvHXZy6bE7fgkWvJQyuFjp9MwOX3HDfX7DGSXkQMq7jT0CJ1ZgPpEuKCSNbsyv45YR530Uav428ZIe-oG3zseCuBeq-nxv0zsKBcA7IvdnT4sdjkM5uCHMlpEvQZjByJYWOe0qBuBAn5GU9xLN8NX7361AfFcGnHbqH-hfJYQcko539JVfnuLw6K32LFhgtkYZMvP8XIvHNVCNQ1xzRs8QMtziMTNf69kQL-rl2la4QJySpElE"
      },
      {
        id: "4",
        name: "VITA-ELITE PACK",
        category: "LAB SERIES",
        description: "75+ Bioavailable Nutrients",
        price: 39.99,
        badge: "DAILY VITALITY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFnN79HAfPaZM73zzmOiuaRAbAFK2l6adPLr7Xqb0v9JSi-WYN6GXKhhDo_o_WAT_7yWrTcqOtVjim7c4rSd8N_M_HZ_YDrPsR4zgLBwYjtK_iDpkoX5sDxpYnNwj3FpFE6YXy4-nKcjprudsxgfi4cPNxaKch-dwVPIaLh86jKGFTKM-uZmTZYwnm-yosg2nXC-3dUjN6rClXA74IVC-P-XXoLhPmrZMjkvMUP46RqYBk9Q2TFTzfCcGc1S2u91SFQ5WOyNg1mmQ"
      },
      {
        id: "5",
        name: "BCAA KINETIC 8:1:1",
        category: "LAB SERIES",
        description: "Recovery & Hydration",
        price: 44.99,
        badge: "INTRA-WORKOUT",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLwZeYaLv0HuZdVj6RUqqEt6PwXTz236HAwz5kvUJSXjWhv6G66HfJ_jlvLukZTgJqEmYBg4jZmASpH6cFwKYCWOqqi5kJGHRbFMfBTdiYOHsQ4aqt1MD21Ey6U5nMnQlUZtuF-CcpfIEKPNyGQWEuaHF3NatFRSSmtDqJJQukbvjh1BZcEniexgLoZYxgjFqo2o1BZLtMgG1Dkv-w4FT5T3CJtzusg_4dty48_AIRTnO6Ua6BABjI9XYFJui_BHzmEHzLkPEremY"
      }
    ];
    res.json(products);
  });

  app.post("/api/auth/register", (req, res) => {
    const { name, email, password } = req.body;
    // Mock registration logic
    if (name && email && password) {
      res.json({ success: true, user: { name, email }, message: "Session initiated" });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    // Mock login logic
    if (email && password) {
      res.json({ success: true, user: { name: "Elite Athlete", email }, message: "Session initiated" });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
