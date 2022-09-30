// Index Routes
import { Router } from 'express';
import { diplayHomePage, displayAboutPage, displayContactPage, displayProjectsPage, displayServicesPage } from '../controllers/index.controller.server.js';

// Instantiating the router
const router = Router();

// add middleware to connect application
router.get('/',diplayHomePage);
router.get('/home',diplayHomePage);
router.get('/about', displayAboutPage);
router.get('/contact', displayContactPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);

export default router;