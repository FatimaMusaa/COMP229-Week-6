
//Musa Patiguli 301164030 Assignment 1 Oct 7,2022

// Index Router

import { Router } from 'express';
import { displayHomePage, 
    displayAboutMePage,
    displayServicesPage,
    displayProjectsPage,
    displayContactPage} from '../controllers/index.controller.server.js';

// instantiate the router
const router = Router();

//add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/aboutMe', displayAboutMePage);
router.get('/services', displayServicesPage);
router.get('/projects', displayProjectsPage);
router.get('/contact', displayContactPage);

export default router;