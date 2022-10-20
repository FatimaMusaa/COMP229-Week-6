//Musa Patiguli 301164030 Assignment 1 Oct 7,2022


// Index controller

export function displayHomePage(req, res, next){
    res.render('index.ejs', {title: 'Home', page: 'home' });
};

export function displayAboutMePage(req, res, next){
    res.render('index.ejs', {title: 'AboutMe', page: 'aboutMe'});
}

export function displayServicesPage(req, res, next){
    res.render('index.ejs', {title: 'Services', page: 'services'});
}

export function displayProjectsPage(req, res, next){
    res.render('index.ejs', {title: 'Projects', page: 'projects'});
}

export function displayContactPage(req, res, next){
    res.render('index.ejs', {title: 'Contact', page: 'contact'});
}