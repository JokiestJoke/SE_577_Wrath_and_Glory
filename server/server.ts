import  {MockData}  from "./db";
import fastify, {RequestGenericInterface} from "fastify";
import cors from '@fastify/cors';


const server = fastify()

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
        archetypeTitle: string
    }
}
//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus /student/123 will pull 123 out of the constant
server.get<requestArchetype>('/archetypes/:archetype', async (request, reply) => {
    const { archetypeTitle } = request.params;
    const archetype = MockData.find(element => element.archetypeTitle == archetypeTitle);
    if (archetype) {
        return archetype;
    } else {
        let errObj = {error: `The archetype with title: ${archetypeTitle} was not found`};
        reply.code(404).send(errObj);
        return
    }
})


//If you want to pass a parameter like /student/123 setup an interface
//for the parameter
interface requestQry extends RequestGenericInterface {
    Querystring: {
        archetypeTitle: string,
    }
}
//Now in the .get make sure you stereotype the request <requestId> and
//then you can get the parameter like in the second line with const
//thus /student/123 will pull 123 out of the constant
server.get<requestQry>('/search', async (request, reply) => {
    const { archetypeTitle } = request.query;

    if (archetypeTitle){
        const archetype = MockData.find(element => element.archetypeTitle == archetypeTitle);
        if (archetype) {
            return [archetype];
        } else {
            let errObj = {error: `The archetype with title: ${archetypeTitle} was not found`};
            reply.code(404).send(errObj);
            return
        }
    } else {
        let errObj = {error: "The /search API requires an archetype title"};
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
