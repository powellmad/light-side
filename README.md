# The Light Side of the Force
**The Light Side of the Force** is a self-help app that provides users with **motivation** and **encouragement**, offered through the lens of **Star Wars**. 

Everyone needs motivation, encouragement, and positive self talk, but typical self help language doesn’t work for everyone. The Light Side of the Force would benefit everyone, especially those who are turned off by the typical self-help genre. As a developer, I often seek out motivation and encouragement to battle imposter syndrome and cope with the struggles of coding. The Light Side of the Force offers a little extra help in a new, relatable package.

<!-- Images of the Landing Page -->
![The Light Side of the Force Landing Page](/src/images/light-side-home.png)

![The Light Side of the Force Walk-Through](/src/images/light-side-gif.png)



### Features
- Users can **Register/Login as a Padawan** and their id is automatically stored in session storage.
- Logged in users have access to customizations and writing notes.
- Any user can click “next” to show a new, **randomized motivational quote** from the local json database.
- Users can **choose their jedi instructor** from a presented list.
- When **Yoda** is selected as master, the quotes are written in **yodaisms**.
- Users can **add a note** to any quote featured on the landing page.
- User's notes appear in "My Padawan Notes", sorted by timstamp and including the associated quote.

#### Future Features May Include
- When a Jedi is selected, **an "about" button** is rendered, which features a short background for each Jedi
- Users can **select their lightsaber color**. When selected, the profile theme reflects lightsaber color.
- Dark Mode! The app becomes **The Dark Side of the Force** when "dark mode" is toggled. The colors and darker, the jedi become sith and the lightsaber turns red. 
- **A Lightsaber sound effect** is triggered upon initial render and anytime the color is changed.
- A user **profile page** for editing user information.

## Getting Started 

### Instructions
1. Clone or fork this repository to your machine
2. Run a server in the root directory of the project that serves index.html
3. Run the npm install shell command, then the npm start shell command in the root directory
4. Clone or fork powellmad/light-side-api to your machine 
5. Using json-server, serve db.json from the api/ directory.

## Technologies Used
React, React-Router-Dom, JSX, CSS, Dbdiagram.io, Sketchbook.io, JSON-server.

## Planning

### Entity Relationship Diagram (ERD)
![The Light Side of the Force ERD](/src/images/erd.png)

### Wireframe
![The Light Side of the Force Wireframe](/src/images/wireframe.png)

### Dependency Diagram
![The Light Side of the Force Dependency Graph](/src/images/dependency.png)

### Accessibility:
The WebAIM Contrast Checker was used to ensure readibility for all types of users. 

![The Light Side of the Force Contrast Checker](/src/images/contrast-check.png)

The WAVE extension analyzed the entire app to check for weaknesses in accessibility. 

![The Light Side of the Force WAVE Evaluation](/src/images/wave-evaluation.png)

## A Note About Authentication
The login and registration code used is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of this project.