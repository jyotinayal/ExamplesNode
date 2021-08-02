'use strict';

const Hapi = require('@hapi/hapi');
const Qs = require('qs');
const Joi = require('joi');
const Good = require('good');


    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        query: {
            parser: (query) => Qs.parse(query)
        }
    });

    server.log(['test', 'error'], 'Test event');
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         request.log('error', 'Event error');
    //         return 'Hello World!';
    //     }
    // });

    //query string
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
    
            return request.query;
        }
    });

    server.route({
        method: 'GET',
        path: '/name',
        handler: (request, h) => {
            server.log('error', 'Oh no!');
            server.log('info', 'replying');
            return 'Hello My Name Is Jyoti Nayal';
        }
    });

    //Multi segment Parameter
    server.route({
        method: 'GET',
        path: '/hello/{user*2}',
        handler: function (request, h) {
    
            const userParts = request.params.user.split('/');
    
            return `Hello ${userParts[0]} ${userParts[1]}!`;
        }
    });

    //404 error page
    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {

            return '404 Error! Page Not Found!';
        }
    });


    //joi validation
    server.route({
        method: 'GET',
        path: '/validation/{name}',
        handler: function (request, h) {
    
            return `Hello ${request.params.name}!`;
        },
        options: {
            validate: {
                params: Joi.object({
                    name: Joi.string().min(3).max(10)
                })
            }
        }
    });

    
    async function start(){
        await server.register({
          plugin: Good,
          options: {
            reporters: {
              myConsoleReporter: [{
                module: 'good-console'
              }, 'stdout']
            }
          }
        });



    server.start();
    console.log('Server running on %s', server.info.uri);
    }
start();
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
