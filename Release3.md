**On Start**:
1)  Please open your "terminal" of choice and make sure that you are in the main directory of the project. Now please type: "npm install". This will install the necessary configurations found in package.json.
2) Now navigate to the "**client/**" directory by typing: "**cd client**" into your terminal.
3) While in this directory, please type "**npm install**". Once all the dependencies have been installed, please navigate back to the main directory by typing: "**cd ..**".
4) Confirm that you are in the main directory. Now we will change directories to the "server/" directory by typing: "**cd server**". 
5) While in the "**server/**" directory, please type: "**npm install**". This will install all the dependencies for this directory.
   1) **MOST CRUCIAL STEP:**
      1) While in the "server/" directory **create a ".env" file**. Since GitHub is attempting to protect my profile's security, I cannot share my GitHub Token. **This means that you will have to manually add this line to the .env file:**
         1) "**GH_ACCESS_TOKEN=XXXXXX**". Here the "**XXXXXX**" **should be the GH_Token that I provided in the BlackBoard Submission**. Make sure to save this file.
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
2) For **Release 3 Deliverable**:
   1) To demonstrate the reverse proxy and my project's connection to GitHub you can type:
      1) **http://[::1]:9500/ghsecure/user**
         1) Lists data of my GitHub account.
      2) **http://[::1]:9500/ghsecure/users**
         1) Lists data of GitHub user accounts.
      

   

