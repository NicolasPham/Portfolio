import * as social from "../assets/socialMedia";
import * as booking from "../assets/booking";
import * as blog from "../assets/blog";

export const projects = [
  {
    title: "FrontEnd Social Media",
    desc: "A social media that allow you to register for an account, sign in as well as interact with your friends. There are different features come along such as showing who are online, what are suggested for you base on your info. You can also fetch the user data by click into their icon",
    highlightFront: [
      "Use React to create a beautiful UI/UX design front end social media app",
      "Creates different components that will be shown in different pages base on the given condition",
      "Have light mode and dark mode for custom use, triggered by one click on the icon",
      "Use react-router-dom, react-icon etc to give a full function to the application",
      "Use Redux as a complex center data storage instead of useContext and Reducer",
      "Fetching data to show required info user pages base on the given parameter (use Id)",
      "Apply SASS to professionally manage and well style application",
    ],
    highlightBack: [],
    url: "https://socialmedia.nicolas-pham.online/",
    skills: ["React", "Redux", "NodeJs", "MongoDB", "Axios"],
    img: [
      social.home,
      social.homeDark,
      social.login,
      social.register,
      social.userInfo,
    ],
    source: "https://github.com/NicolasPham/social-media",
  },
  {
    title: "Fullstack MERN Booking App",
    desc: "AirBnB Clone with basic function from create an account, log in with user with authorization to reserve. Only admin can delete post. You can search from different options from hotels, apartments, cabins. Moreover,you can filter result base on selections from how many adults and children, rooms you would like to book.",
    highlightFront: [
      "Apply useContext to fetching user info from local storage to display on the website",
      "Use different react libraries such as react-date-range, react-router-dom to give more features",
      "Apply SASS to manage and  style web site professionally",
    ],
    highlightBack: [
      "Create Schemas with various types of data in Mongo Atlas (Cloud MongoDB)",
      "Use router to create a semantic methods for different actions in backend side",
      "Hash password then stored it in the DB instead of raw password",
      "Use multer to upload pictures combined with cloudinary to stored pictures on cloud",
      "Use axios to connect API side and Client side to create a full stack application",
    ],
    url: "https://booking.nicolas-pham.online/",
    skills: ["React", "Redux", "NodeJs", "MongoDB", "Axios"],
    img: [booking.bookingHome,booking.bookingHome2, booking.bookingLogin, booking.bookingList, booking.bookingSingle, booking.bookingImg],
    source: "https://github.com/NicolasPham/bookingapp",
  },
  {
    title: "Fullstack MySQL Blog App",
    desc: "A blog web application where you can share news and posts. Also allow you to create an acoount, sign in then will authorize you to edit or delete if you are post's writer. Also authenticate user then fetch data from database after authenticatign",
    highlightFront: [
      "Like the other complex app using React for creating front end web application",
      "Since the user info is simple, useContext and Reducer are applied",
      "SASS and flexbox are used to well styled",
    ],
    highlightBack: [
      "Create table data using MySQL WorkBench",
      "Use SQL to Create, Read, Update and Delete data",
      "Using mysql node package to combine SQL into React app to interact with database",
    ],
    url: "https://nicolas-pham.online/",
    skills: ["React", "MySQL", "NodeJs", "Express", "Axios"],
    img: [blog.blogApp1, blog.blogApp2, blog.blogApp3],
    source: "https://github.com/NicolasPham/BlogApp",
  },
  // {
  //   title: "BackEnd NodeJs Yelp Camp",
  //   desc: "Camping website where you can create an account, log in, and post your own camping site for rent. You can set up price and other information, then edit later after passing authenticated and authorized process. As a user, you can leave review and rate the campsite as well so other people can see it",
  //   highlightFront: [
  //     "Using EJS Engine to render the basic function campsite",
  //     "Create boiler plate that apply to different pages",
  //   ],
  //   highlightBack: [
  //     "Using express to create APIs for the application",
  //     "Manage routes and methods by using epxress-router",
  //     "Use multer to upload images into local storage",
  //     "Use session to store basic user info data",
  //     "Use bcrypt to hash password and compare password",
  //     "Use password for logging in methods",
  //   ],
  //   url: "https://nicolas-pham.online/",
  //   skills: ["NodeJs", "Express", "EJS", "MongoDB"],
  //   img: [],
  //   source: "",
  // },
  {
    title: "UI/UX Electric Car",
    desc: "Although no APIs are used in this app, it presents an greatly beautiful user interface design. Those little details from blur the content inside the images, the animation at start button and color combination give the comfort toward users",
    highlightFront: [
      "Use Vite framework to create an app conveniently",
      "Define styled variables for reuse in CSS files",
      "Use tailwind for immediate and proficient changes in styles",
    ],
    highlightBack: [],
    url: "https://electric-car.nicolas-pham.online/",
    skills: ["Tailwind", "Vite", "React-Icons", "JS"],
    img: [],
    source:
      "https://github.com/NicolasPham/React-Project/tree/main/ElectricCar",
  },
  {
    title: "UI/UX Hoobank",
    desc: "One of the very first project I made with basic HTML and CSS for giving a good UX. It is not just a static web app, but it also present the styles, animations, details that can be apply in later projects to improve user experience",
    highlightFront: [
      "Apply flexbox to style website",
      "Use ::before and ::after to create an empty div to background modification",
      "Gradient colors generation",
    ],
    highlightBack: [],
    url: "https://hoobank.nicolas-pham.online/",
    skills: ["HTML", "CSS", "JS"],
    img: [],
    source: "https://github.com/NicolasPham/React-Project/tree/main/Hoobank",
  },
  {
    title: "TinDog",
    desc: "Not much to introduce about this website. A first project I made during the study of Boostrap.",
    highlightFront: [
      "Use boostrap to fast create navbar, carousel",
      "Apply knowledge about position to locate the pictures in desired place",
    ],
    highlightBack: [],
    url: "https://tindog.nicolas-pham.online/",
    skills: ["HTML", "CSS", "JS", "Bootstrap"],
    img: [],
    source:
      "https://github.com/NicolasPham/React-Project/tree/main/TinDog-Start-master",
  },
];
