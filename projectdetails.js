export const projectdetails = [
    {
      id: 1,
      title: 'M Rook Solutions V2.0',
      tiletitle: 'M Rook Solutions V2.0',
      date: 'November 2023 - January 2024',
      tagline: 'A revamp of the interactive CV M Rook Solutions Website.',
      languages: 'NextJS, React components, GSAP/ScrollTrigger CSS, Chat-GPT, Vercel',
      description: 'The initial version of this site was the first project I had done when I had graduated in 2021 and there were many things with it that I was not happy with. My skillset at that time was limited and for what it was, I thought it wasn\'t too bad of a job.',
      description1: 'This website incorporated skills I have learned since and some new ones for this project alone.',
      description2: 'This project features a scrollable homepage with brief sections of the overall site. Animations triggered when coming into view via GSAP/ScrollTrigger was a fun learning curve and the CSS to pull this off challenging. Each of the pages in the NavBar takes the user to a detailed page of that particular section.',
      description3: 'The Version 1 site is still live and can be browsed at https://mrooksolutions.vercel.app/',
      image: '/mrooksolnsv2.png',
      githubLink: 'https://github.com/rooky1979/mrooksolutionsv2',
      tileheight: '0.5',
    },
    {
      id: 2,
      title: 'Medical Assistant with Chat-GPT',
      tiletitle: 'A.I. Medical Assistant',
      date: 'October 2023',
      tagline: 'An experiment to find out how easy it is to incorporate Chat-GPT into an application.',
      languages: 'NextJS, CSS, Chat-GPT 3.5 API',
      description: 'Being involved in an Generative-AI initiative, I was curious just how hard it was to utilise the Chat-GPT API for an application. ',
      description1: 'I thought of a simple mdical assistant where a user could enter some details and the GPT model could come up with some sort of possible diagnosis.',
      description2: 'I created a quick form in NextJS and the necessary fields. I didn\'t worry too much about user input validation as that wasn\'t the goal of the experiment.',
      description3: 'After reading the docs and trying to decipher how to use the API, it worked and was actually relatively easy to do. The real key was the prompt engineering when preparing the prompt to send to the GPT API. There is no live site to visit as the GPT token has expired and not renewed.',
      image: '/medicalassist.png',
      githubLink: 'https://github.com/rooky1979/MedicalAssistant',
      tileheight: '1',
    },
    {
      id: 3,
      title: 'Various SAPUI5 Fiori and UI5 Web Components projects.',
      tiletitle: 'SAPUI5 and Fiori',
      date: 'August 2023  - October 2023',
      tagline: 'Various learning projects with SAP Fiori languages and frameworks.',
      languages: 'SAP BTP, Fiori, Fiori Elements, SAPUI5, UI5 Web Components for React',
      description: 'As ABAP is my first stop with work, during downtime or in-between projects, I have been upskilling in various SAP Fiori related small projects to round out my SAP skills. Courses in Fiori Elements, CAP and RAP, and SAPUI5 Web Components for React were done and the link to Github was really just playing with the components and what they looked like.',
      image: '/webcomp.png',
      githubLink: 'https://github.com/rooky1979/SAPUI5-Web-components',
      tileheight: '1',
    },
    {
      id: 4,
      title: 'The Ink Lab',
      tiletitle: 'The Ink Lab',
      date: 'August 2023  - October 2023',
      tagline: 'A website for a tattoo artist.',
      languages: 'React components, NextJS, CSS, Vercel',
      description: 'Continuing to build on NextJS and React components, this is a website that incorporates some new learned techniques.',
      description1: 'A tattoo artist friend residing in Canada has allowed the use of his IP to allow a personal project to occur. This website incorporates a striking landing page with full-motion video of the artist over a loop displaying a brief outline of his process.',
      description2: 'It contains a showcasing of his portfolio and available art where embla was used to create an image carousel which was new to me. A contact form utilising Mailtrap was set up for users to send email enquiries and bookings. It has a subscriber page so that a user can subscribe to a mailing list using Mailchimp. A blog was created that can be updated via Sanity.io. This project was something to help and continue to build on JavaScript, NextJS and React component programming. Also, it was decided to use just native CSS to really get a handle on styling without any kind of framework. Take it back to basics if you will. The challenges were around creating the new features using Mailchimp/Mailtrap, using Sanity.io and getting the image carousels to work. All new things to learn and enjoyable (if not frustrating at times!). The site can be found at https://inklabtattoos.vercel.app/',
      image: '/inkLab.png',
      githubLink: 'https://github.com/rooky1979/inklab',
      tileheight: '1',
    },
    {
      id: 5,
      title: 'HIGH NOON GAMBLE Web Application VERSION 2.',
      tiletitle: 'HNG V2.0',
      date: 'February 2023 - March 2023',
      tagline: 'An overhaul of the HIGH NOON GAMBLE web app.',
      languages: 'Node.js, React, NextJS, CSS, Vercel',
      description: 'This was an overhaul of the rather rushed but functional HNG V1 web app.',
      description1: 'The web app was redesigned to incorporate a one-stop-shop dashboard for hosts/co-hosts to have easy access to anything they needed to reduce time with switching between screens. Readings were split up into their own sections as were the required elements for the meeting format.',
      description2: 'Searching and filtering were added to the tools and also the ability to randomise each tool if the person required a random reading and a \"GodShot\" tile was introduced that randomises a reading from any of the tools displaying the reading and the tool from whence it came from. This was great being able to gather their user requirements and be able to take the time to create the application they needed. The app is deployed on Vercel and can be found at https://highnoongamblev2.vercel.app/',
      image: '/hngv2.png',
      githubLink: 'https://github.com/rooky1979/highnoonNextJS',
      tileheight: '1',
    },
    {
      id: 6,
      title: 'SAP UI5 HIGH NOON GAMBLE Web Application VERSION 2.',
      tiletitle: 'HNG V2.0 with SAPUI5',
      date: 'January 2023 - February 2023',
      tagline: 'An overhaul of the HIGH NOON GAMBLE web app using SAP UI5.',
      languages: 'SAP UI5, CSS, MVC pattern',
      description: 'The High Noon Gamble web application needed overhauling and after doing a short course in Fiori Freestyle, I thought I would try and see how flexible UI5 was by creating something not SAP related whilst still using SAP Fiori Freestyle practices.',
      description1: 'Although the elements still retained the SAP look (fields, tile shapes, etc.), I was able to override the CSS and use completely different look to make it look unique.',
      description2: 'I utilised the MVC pattern as used in SAP Fiori Freestyle and included search and filtering. It was a fantastic experience and moreso so be very impressed of how flexible SAP Fiori can be. Unfortunately, SAP UI5 cannot be deployed on platforms such as Vercel so the project had be be restarted using NextJS',
      image: '/hngv2.png',
      githubLink: 'https://github.com/rooky1979/highnoongambleV2.0SAPUI5',
      tileheight: '1',
    },
    {
      id: 7,
      title: 'HIGH NOON GAMBLE Web Application VERSION 1.',
      tiletitle: 'HNG V1.0',
      date: 'October 2021 - November 2021',
      tagline: 'A web application with tools for a 12 step support group.',
      languages: 'Node.js, React, NextJS, CSS, Vercel',
      description: 'Friends in Las Vegas, NV approached me for help with a web application for their hosts of the meeting to use.',
      description1: 'Essentially, the group required to have an all-in-one place for hosts/co-hosts of an online 12-step meeting that contained all the readings, anything required to be posted in chat, and all the tools that are required for the meeting to run. When a person is asked to share, they pick a tool, and pick a number and they are asked to share on that reading or topic.',
      description2: 'The group required this application fast during the pandemic due to lack of people having access to tools, so this web app was built fast so they had that access with the thought in mind to create a version 2.0 in order to tidy it up, include more features and overhaul the design. The app is deployed on Vercel and can be found at https://highnoongamble.vercel.app/',
      image: '/hng.png',
      githubLink: 'https://github.com/rooky1979/high_noon_gamble',
      tileheight: '1',
    },
    {
      id: 8,
      title: 'Movie discussion forum.',  
      tiletitle: 'Movie Forum',  
      date: 'July 2021 - Sept 2021',
      tagline: 'A movie forum with JWT authentication and more.',
      languages: 'MongoDB, Express.js, Node.js, React, Redux, Sass, Heroku',
      description: 'After completing a MERN course, I wanted to cement the full-stack concepts and create a basic movie discussion forum.',
      description1: 'The application uses JWT authentication when registering a new user and they can create a profile. When the user enters their favourite films, a request is made to the OMDB API and retrieves the movie poster, title, release year and director and displays it. The user can see the other members profiles and can post in the discussions page where each post can be commented on, liked/disliked and posts or comments deleted if the logged in user created the posts/comments.',
      description2: 'The point of this project was not to create something that was full featured, but to understand the concepts of how full-stack development works. However for version 2.0, I will add the ability to upload profile pictures, create email verification to confirm valid email addresses and display the user\'s favourite actors and directors by making a request to another API. The app is deployed on Heroku and unfortunately as time has moved on, it\'s out of date and no longer active.',
      image: '/stalls.png',
      githubLink: 'https://github.com/rooky1979/movie_forum',
      tileheight: '1',
    },
    {
      id: 9,
      title: 'M Rook Solutions V1.0.',
      tiletitle: 'M Rook Solutions V1.0.',
      date: 'June 2021 - July 2021',
      tagline: 'A \'visual resume\'.',
      languages: 'Next.JS, CSS, React',
      description: 'Once I had completed university, after a week of relaxing, I couldn\'t wait to start learning again. I decided to create a website that showcased who I am and my projects and experiences. I looked at many different frameworks to use. I was tempted to stick with what I had been taught in university with HTML and PHP, but decided to challenge myself and learn something new. As it was going to be a static site, I looked at Gatsby and Next.JS among others and decided to use Next.JS as it seemed to be a popular choice among developers.',
      description1: 'After watching some tutorials and reading articles on Next.JS, building the pages hasn\'t been as issue, but the styling and placement of containers etc, has been. Design I have discovered, is a learning need that I have to improve on and gain more understanding of the CSS parameters.',
      description2: 'I decided to try a styling framework and after doing some research on SASS, Tailwind and Bootstrap, I decided on learning Tailwind. I have found that with Tailwind after taking some time to understand it that it feels like it has a lot more control. I also added simple transistions to the banner and pages using Framer Motion. Version 1 can be found here: https://mrooksolutions.vercel.app/',
      image: '/mrooksolns.png',
      githubLink: 'https://github.com/rooky1979/m_rook_solutions',
      tileheight: '1',
    },
    {
      id: 10,
      date: 'July 2020 - June 2021',
      tiletitle: 'NZ Nutrition Foundation',
      title: 'A cooking application aimed at 14-17 year old people.',
      languages: 'Flutter, Dart, Google Firebase',
      description: 'This was for the R&D project of the final year at university. Our brief was to put forward a project proposal for a real-life client and develop the product proposed. We had to design and build a prototype application for the NZ Nutrition Foundation for a 14-17 year old demographic so that they could build on it with future iterations until ready for release.',
      description1:
        'Our team built a mobile application utilising Flutter and Dart as the language for the frontend, and Google Firebase for the backend to store user details, user comments and recipe information. The prototype allowed user registration, browsing for recipes and recipe submission. Flutter was chosen because the timeline permitted meant that we required a cross-platform technology and did not have the time to code native for both iOS and Android.',
      description2:
        'The team employed distributed scrum methodology and as a group, we endured many highs and lows. One of the many lessons learned was that something that has the potential to be big as a project like this could be, a full-stack web application could have been a better approach with mobile integration in a later iteration. Our structure of the Google Firebase collections meant that it was difficult to search through data and resulted in some features not to be fully functional.',
      description3:
        "The client was happy with what the team produced and it was fun using Dart and a great learning experience. As it is an object orientated language, it was quite easy to learn. Google Firebase I found was a great package and has potential for many applications, but it wasn't suitable for us.",
      image: '/yfm.png',
      githubLink: 'https://github.com/rooky1979/yfm',
      tileheight: '1',
    },
    {
      id: 11,
      title: 'Taxi booking Website.',
      tiletitle: 'Taxi Booking Website.',
      date: 'April - May 2021',
      tagline: 'A basic website to book and assign taxis.',
      languages: 'HTML5, CSS, PHP, Javascript, SQL',
      description: "My first exposure to HTML, PHP, and JS. The assignment brief for this project in the second semester of the final year at university for Web Development was to create a simple taxi booking website. It had to contain a booking page where a user could enter their details for pickup with certain fields requiring to be entered, saved to a database and sent a booking confirmation message. The admin page allowed for a search for bookings which displayed all the bookings for that search from the database. The user was able to click on a button to assign the status of the taxi booking from 'unassigned' to 'assigned'",
      description1:
        'The pages were built using HTML5 with some rudimental CSS styling, server side database queries with PHP and the server requests with Javascript.',
      description2:
        'Another fun project which was a great introduction into the fundamentals of web development. The hardest part for this assignment was the PHP and database queries. Missing a character in the query string proved difficult at times and problem solving it until I found an online query checker which was invaluable. This assignment recieved 90/100',
  
      image: '/taxiwebsite1.png',
      githubLink: 'https://github.com/rooky1979/simpleTaxiWebsite',
      tileheight: '1',
    },
    {
      id: 12,
      title: 'Virtual Pet',
      tiletitle: 'Virtual Pet',
      date: 'May - June 2019',
      tagline: "A 90's inspired virtual pet created from scratch....",
      languages: 'Java, Derby DB',
      description: 'The assignment brief for this project in the first semester of year 2 at university for Program Design and Construction was to create anything from a list of choices and it had to contain design patterns and incorporate the use of a database to load and save data. It also had to contain simple unit testing.',
      description1:
        "I decided to let nostalgia rule and design a virtual pet inspired by the Tamagotchi craze in the 1990's. The application utilised multi-threading to randomly reduce the pet's statistics (health, sickness, boredom, etc.,) and the statistics were saved to the DB when the user logged out and would load when they logged back in.",
      description2:
        'There were 3 different species that would randomly hatch at the start of the game so the user would not know what the pet would be. I could have used images from the internet to create this, but I wanted to not only create it all myself, but create something that looked like a child would have drawn. Hence the basic background and sprite designs. I also incorporated sounds and speech all recorded by myself. This project recieved 47/50',
      image: '/virtualpet.jpg',
      githubLink: 'https://github.com/rooky1979/NetbeansProjects',
      tileheight: '1',
    },
    {
      id: 13,
      title: 'Cinema Booking System',
      tiletitle: 'Cinema Booking System',
      date: 'September - October 2018',
      tagline: 'A booking system to book seats at a cinema.',
      languages: 'Java',
      description: 'This simple cinema booking system was the second assignment for the Programming 2 paper in semester 2 of the first year of university. Using object orientated programming with Java, the brief was to create a booking system where users could book cinema seats for a film and the booking price is displayed.',
      description1:
        "Caveats for children booking were that they could only book a 'G' certificate film or had to be accompanied by an adult when booking for a 'M' certificate film. They were not allowed to book for a 'R' certificate film. The elderly ticket price was always 30% of the adult ticket price.",
      description2:
        'A great fun assignment that proved to be tricky when navigating the 2D array for the seats and then assigning the event listeners. It was an interesting peek into the realm of GUI and I drew my own icons for the seats, each with different colours for the age group and empty seats. This assignment recieved full marks (50/50)',
      image: '/cinemabooking.png',
      githubLink: 'https://github.com/rooky1979/NetbeansProjects',
      tileheight: '1',
    },
  ];