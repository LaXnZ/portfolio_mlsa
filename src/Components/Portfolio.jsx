/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/cover_photo.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "NoteXpert Mobile App",
    description:
      "Ongoing Project using Flutter and Firebase. NoteXpert is a mobile app that helps you take notes, save them, and add images to them. You can also scan documents and get the text into your notes, and use dark mode for a more comfortable viewing experience. NoteXpert makes it easy to take notes quickly and easily, and you can access them from anywhere.",
    url: "https://github.com/LaXnZ/notexpert",
  },
  {
    title: "CRM for Gaming Cafes",
    description:
      "Ongoing Project CRM. This CRM is specifically designed to address the unique challenges faced by gaming cafes and shops. It leverages the power of Laravel, Tailwind CSS, and SQLite to provide a comprehensive solution that enhances customer engagement, streamlines operations, and ensures compliance.",
    url: "https://github.com/LaXnZ/respawn-entertainment",
  },
  {
    title: "Saverly Expense Tracking App Backend",
    description:
      "Expenses tracking web-app using MERN stack",
    url: "https://github.com/LaXnZ/expenses-tracker-backend",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{paddingLeft:"10px", height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
