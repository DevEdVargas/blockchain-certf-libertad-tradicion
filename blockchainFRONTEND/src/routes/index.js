// traer index que contiene la vista render
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render("index", {title: 'pagina de inicio'}));

router.get("/about", (req, res) => res.render("about", {title: 'sobre'}));

router.get("/contact", (req, res) => res.render("contact", {title: 'contacto'}));

router.get("/matricular", (req, res) => res.render("matricular", {title: 'matricular'}));


export default router;
