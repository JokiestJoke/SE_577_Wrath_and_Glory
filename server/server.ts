import  {MockData}  from "./db";
import fastify, {RequestGenericInterface} from "fastify";
import fastifyHttpProxy from "@fastify/http-proxy";
import dotenv from 'dotenv';

import {GetGHProxySecureOptions, GetGHProxyOptions } from "./proxy";

import cors from '@fastify/cors';

//DotEnv Config
dotenv.config();

//creating server
const server = fastify()

//setting up ProxyOptsSecure
let proxyOptsSecure = GetGHProxySecureOptions(process.env.GH_ACCESS_TOKEN);
server.register(fastifyHttpProxy, proxyOptsSecure);

//setting up ProxyOptions
let proxyOpts = GetGHProxyOptions();
server.register(fastifyHttpProxy, proxyOpts);

//setup CORS - this will be necessary for API requests from a VUE or any SPA app
server.register(cors, {
    origin: "*"
})

server.get('/archetypes', async (request, reply) => {
    return MockData;
})

//If you want to pass a parameter like /student/123 setup an interface
//for the parameter
interface requestArchetype extends RequestGenericInterface {
    Params: {
        title: string,
        xpCost: string,

    }
}
//Now in the .get make sure you stereotype the request <title> and
//then you can get the parameter like in the second line with const
//thus /archetypes/title will pull title out of the constant
server.get<requestArchetype>('/archetypes/:title', async (request, reply) => {
    const { title } = request.params;
    const archetype = MockData.find(element => element.archetypeTitle == title);
    if (archetype) {
        return archetype;
    } else {
        let errObj = {error: `No archetype with title: ${title} was found`};
        reply.code(404).send(errObj);
        return
    }
})


//If you want to pass a parameter like /student/123 setup an interface
//for the parameter
interface requestQry extends RequestGenericInterface {
    Querystring: {
        title: string,
        species: string
    }
}

//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus /student/123 will pull 123 out of the constant
server.get<requestQry>('/search', async (request, reply) => {
    const { title, species } = request.query;

    if (title){
        const archetype = MockData.find(element => element.archetypeTitle == title);
        if (archetype) {
            return [archetype];
        } else {
            let errObj = {error: `The Archetype with student title: ${title} was not found`};
            reply.code(404).send(errObj);
            return
        }
    } else if (species){
        const archetypes = MockData.filter(element => element.archetypeSpecies == species);
        if (archetypes.length > 0) {
            return archetypes;
        } else {
            let errObj = {error: `No Archetype with species type: ${species} was found`};
            reply.code(404).send(errObj);
            return
        }
    }else {
        let errObj = {error: "The /search API requires an id or course query parameter"};
        reply.code(400).send(errObj);
        return
    }
  })


server.listen({ port: 9500 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
