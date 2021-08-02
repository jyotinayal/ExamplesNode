'use strict';

const Hapi = require('hapi');
const Vision = require('vision');
const hbs = require('hbs');
const Inert = require('inert');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {
    await server.register(Inert);
    await server.register(Vision);

    server.views({
        engines: {
            html: hbs
        },
        relativeTo: __dirname,
        path: 'templates'
    });

    // you need to leave only one route - view handler OR h.view, because its reproduces a conflict
    // view handler
    // server.route({
    //     method: 'GET',
    //     path: '/index',
    //     handler: {
    //         view: {
    //             template: 'index',
    //             context: {
    //                 title: 'Using handlebars in Hapi',
    //                 message: 'Tutorial'
    //             }
    //         }
    //     }
    // });

    // h.view
    server.route({
        method: 'GET',
        path: '/index',
        handler: (req, h) => {
            return h.view('index', {
                title: 'Using handlebars in Hapi',
                message: 'Tutorial'
            });
        }
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();


// ├── app
// │   ├── controllers
// │   │   ├── api            // Controllers
// │   │   └── web            // Controllers
// │   ├── helpers            // Helpers
// │   ├── models             // All mongoose models are defined here
// │   ├── routes             // All app routes are defined here
// │   │   ├── mobileApi      // RESTAPI routes for multiple versions
// │   │   │   ├── v1         // Routes for version1
// │   │   │   └── v2         // Routes for version2
// │   │   └── webApi         // WEB api routes.
// │   └── templates          // Server-rendered handlebar templates
// ├── assets                 // Contains all static resources 
// │   ├── fonts              // Fonts used in application
// │   ├── images             // Images used in application
// │   ├── scripts            // Scripts used in application
// │   │   ├── js             // User defined scripts
// │   │   └── vendor         // Vendor scripts
// │   └── styles             // All SASS stylesheets
// ├── config                 // Contains all app configurations
// │   ├── assets.js          // Assets configuration file
// │   ├── config.js          // Application configuration 
// │   ├── default.json       // Configuration file
// │   ├── manifest.js        // App manifest file
// │   ├── meta.js            // App metadata file
// │   └── ssl                // Contains ssl certificates
// ├── lib                    // Core application lib/plugins
// ├── logs                   // Contains app log file 
// ├── .gitignore             // standard git ignore file
// ├── .babelrc               // Babel config
// ├── .eslintrc              // Define eslint rules
// ├── .eslintignore          // Ignores certain files for eslint rules
// ├── Dockerfile             // Standard docker file
// ├── docker-compose.yml     // Standard docker compose file 
// ├── server.js              // Contains all app configurations
// ├── .env                   // dotenv configuration
// └── test
//     ├── testcases          // Test cases organised by module names
//     └── test.js            // Test file