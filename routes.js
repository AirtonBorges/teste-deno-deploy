import { Router } from "https://deno.land/x/oak/mod.ts";
import teste from "./teste.js";

const router = new Router();

router
  .get("/beers", teste)

export default router;