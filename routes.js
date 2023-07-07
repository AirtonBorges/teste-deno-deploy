import { Router } from "https://deno.land/x/oak/mod.ts";
import teste from "./teste.js";

const router = new Router();

router
  .get("/teste", teste)

export default router;