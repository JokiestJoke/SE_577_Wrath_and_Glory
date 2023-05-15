Web App Instructions:

Step 1) navigate to the /wrath_and_glory directory, and type "npm install" into the terminal

Step 2) type "npm run dev" into the console to start the web application

Step 3) Open a browser to the local host prompted by the console.

Server Instructions:

Step 1) navigate to the /server directory and type "npm install"

Step 2) in the same directory type "npm run server"

Step 3) Open a browser to the local host prompted by the console.

Overall Instructions:
Once the web application and the server are running, you can navigate to
character creation page. Here you will notice that every archetype
listed here comes from an API Interface "TierOneArchetypes". This Archetype handles data
from db.ts, and displays it to this page. The user can now use the server local browser
to perform quick searches of db.ts data. These come in the form of:

http://[::1]:9500/archetypes
** lists all archetype data

http://[::1]:9500/search?species=Human
**List all archetype data for humans

http://[::1]:9500/search?species=Ork
**List all archetype data Orks

http://[::1]:9500/search?species=Aeldari
**List all archetype data for Aeldari

http://[::1]:9500/search?title=Sister-Hospitaler
**here "/search?title=" can work with any archertype title
