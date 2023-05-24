import * as image from "../assets/openAI";
import * as chat from "../assets/chatGPT";
import * as social from "../assets/socialMedia";
import * as booking from "../assets/booking";
import * as blog from "../assets/blog";
import * as eCom from "../assets/ecommerce";

export const projects = [
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
    img: [
      booking.bookingHome,
      booking.bookingHome2,
      booking.bookingLogin,
      booking.bookingList,
      booking.bookingSingle,
      booking.bookingImg,
    ],
    source: "https://github.com/NicolasPham/bookingapp",
  },
  {
    title: "Fullstack Shopping Online",
    desc: "A website allows you to shop clothes and accessories online, products also can be filtered by gender, types, etc. with a checkout cart that update as you add products",
    highlightFront: [
      "Using redux to store products that added to cart, then render them in a cart component",
      "Apply handle functions to filter products as customer want",
      "Apply SASS to manage and  style web site professionally",
    ],
    highlightBack: [
      "Create Schemas with various types of data in mySQL",
      "Use router to create a semantic methods for different actions in backend side",
      "Use Stripe for check out method",
      "Using Strapi for faster SQL methods",
      "Use axios to connect API side and Client side to create a full stack application",
    ],
    url: "",
    skills: ["React", "Redux", "NodeJs", "MySQL", "Axios", "Strapi", "Stripe"],
    img: [eCom.eCom1, eCom.eCom2, eCom.eCom3, eCom.eCom4, eCom.eCom5],
    source: "https://github.com/NicolasPham/eCommerce",
  },
  {
    title: "FullStack AI Image Generation",
    desc: "Use OpenAI API to generate image base on give prompt, then give it the feature to share as well as to download.",
    highlightFront: [
      "Use Vite framework to make it more convenient creating new website",
      "Apply tailwind to styling website faster, as well as create a reusable styling libraries",
      "Display images in an interesting and friendly user interface grid form",
    ],
    highlightBack: [
      "Connect to openAI api to generate images base on the given prompg",
      "Create Schemas with various types of data in Mongo Atlas (Cloud MongoDB)",
      "Use router to create a semantic methods for different actions in backend side",
      "Use multer to upload pictures combined with cloudinary to stored pictures on cloud",
      "Use axios to connect API side and Client side to create a full stack application",
    ],
    url: "https://image-generation.nicolas-pham.online/",
    skills: ["AI", "React", "API", "NodeJs", "MongoDB", "Axios"],
    img: [image.home, image.create],
    source: "https://github.com/NicolasPham/imageGeneration",
  },
  {
    title: "AI Coding ChatGPT",
    desc: "Use OpenAI API answer all the questions about Coding with Codex",
    highlightFront: [
      "Use Vite framework to make it more convenient creating new website",
      "Apply tailwind to styling website faster, as well as create a reusable styling libraries",
      "Desgin a responsive UI/UX chat page",
    ],
    highlightBack: [
      "Connect to openAI api to generate coding answer base on the given prompg",
      "Use axios to connect API side and Client side to create a full stack application",
    ],
    url: "http://chatgpt.nicolas-pham.online/",
    skills: ["AI", "API", "NodeJs", "Axios"],
    img: [chat.chat1, chat.chat2],
    source: "https://github.com/NicolasPham/chatGPT",
  },
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
];
