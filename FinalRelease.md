**On Start**:
1)  Please open your "terminal" of choice and make sure that you are in the main directory of the project. Now please type: "npm install". This will install the necessary configurations found in package.json.
2) Now navigate to the "**client/**" directory by typing: "**cd client**" into your terminal.
3) While in this directory, please type "**npm install**". Once all the dependencies have been installed, please navigate back to the main directory by typing: "**cd ..**".
4) Confirm that you are in the main directory. Now we will change directories to the "server/" directory by typing: "**cd server**".
5) While in the "**server/**" directory, please type: "**npm install**". This will install all the dependencies for this directory.
6) At this point, all the dependencies should be installed across: the main directory, the client directory, and the server directory.
7) Proceed to the next set of instructions for usage notes.

Project Instructions:

1) "**Client**" instructions:
    1) Now that the dependencies have been installed, you should change to the **client** directory by typing: "**cd client**" into your terminal.
    2) Once you are in the **client** directory, you should type "**npm run dev**". This will launch the **Vue app**.
    3) From here, **Vue** will list a link for the **local host** in your terminal. Click this link to get to the **App main page**.
    4) Type "**cd ..**" into your terminal to return to the main directory and proceed to next instructions.
2) "**Server**" Instructions:
    1) Now that the dependencies have been installed for this directory, you should change to the **server** directory by typing: "**cd server**" into your terminal.
    2) Once you are in the **server** directory, you should type "**npm run server**". This will launch the **server**.
    3) From here, the **server** will list a link for the local host. Click this link to get to the server page.
    4) Type "**cd ..**" into your terminal to return to the main directory and proceed to next instructions.


**Server/API** Instructions:
1) Once the **Client** and the **Server** are running, you can navigate to character creation page. Here you will notice that every archetype listed here comes from an **API Interface** "**TierOneArchetypes**". This Archetype handles data from **db.ts**, and displays it to this page. The user can now use the server local browser to perform quick searches of **db.ts** data. These come in the form of:
    1) **http://[::1]:9500/archetypes**
        1) Lists all **archetype** data
    2) **http://[::1]:9500/search?species=Human**
        1) List all **archetype** data for humans
    3) **http://[::1]:9500/search?species=Ork**
        1) List all **archetype** data Orks
    4) **http://[::1]:9500/search?species=Aeldari**
        1) List all **archetype** data for Aeldari
    5) **http://[::1]:9500/search?title=Sister-Hospitaler**
        1) Here "/search?title=" can work with any **archetype title**
   6) **http://[::1]:9500/names**
      7) Here you can view all the suggested names for your species and gender.


**Final Release Notes** (Please Refer to Wrath_and_Glory_UML):
1) **Architectural Description**
   1) Presently, the Wrath And Glory character creation webpage communicates between a user interacting with a web application browser, and server/database API data.
      1) Specifically, the Server.ts stores API data, which it imports from db.ts (The Database).
      2) Currently, db.ts stores API Data for two major feature that both interact with the front end application page "CharacterCreation":
         1) The first of which is the "**Archetype Data**" API, which details all the legal tier one archertypes and their applicable information, such as **attributes, skills, abillities, and species**
         2) The second of which is the "**Wrath and Glory Names**" API, which suggests names for an archetype based on gender and species.
      
      3) **Archetype Data API**
         1) You can now dynamically change your Archetype and see the attributes fields AND skills fields populate the <div>'s of CharacterCreation.vue for **starting attributes & skills**. You can even change the gender of your archetype to fit your role-playing desire.
         2) To do this, you simply the user presses the "Press to start" button, which will reveal the "Custom Character" section of the webpage.
         3) Here you can then choose your "Archetype", and even gender of your character!
         4) Once you have made your selection via the "drop-down menus", you can press the "Create Archetype" button, which will then populate the character creation page:
            1) Specifically the "Starting Archetype Information", "Attribute Ratings", and "Skill Ratings" sections.
         5) You can now dynamically change your archetype and see in real time how the webpage uses the ArchetypeData API to fill in each section.
         6) NOTE: If you plan on changing the chosen Archetype to see the attributes/skills of each archetype, please don't forget to press the button "**Create Archetype**" again. The fields will only populate after you press "**Create Archetype**"
      4) **Wrath and Glory Names API**
         1) One thing that every archetype needs is a good name, that not only fits their species, but also their gender.
         2) In the "Starting Archetype Information" section, which becomes visible after you press "Create Archetype" you will see a button labeled "Show example Names".
         3) You can click this button, to see a list of suggested names based on gender and species!
         4) You can change these names by simply choosing a new gender or archetype, and seeing the data change dynamically.
         5) The database stores the API information, which is communicated to the front end webpage via the server.ts.
         6) Note: if you want to see names for a different gender or archetype, make sure to select a new options from the drop-down menus, and press "**Create Archetype**"
1) Major Architectural Decisions:
   1) I decided to store both "ArchetypeData", and "WrathAndGloryNames" data in db.ts because I only wanted the data to be "Readable" to ANY front end application.
      1)A major fear of mine was that if the data was exposed on a front end level in an editable fashion, then core data for the project could be corrupted.

        
   

