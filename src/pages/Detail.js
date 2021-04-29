import { Affix, Button, Col, Divider, Form, Row } from "antd";
import React from "react";
import ReactMarkdown from "react-markdown";
import ClassCard from "../component/class/ClassCard";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import gfm from "remark-gfm";
import ClassComment from "../component/comment/ClassComment";
import TextArea from "antd/lib/input/TextArea";

const markdown = `

## 📖 About this class

- 🖥 Wellcome and prepair
- 💼 About Javascript
- 🎓 Javascript Fundamentals
- 🌐 Callback function
- 🔭 Arrow function

## 🌟 Content

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

  Markdown is a lightweight markup language based on the formatting conventions
  that people naturally use in email.
  As [John Gruber] writes on the [Markdown site][df1]

  > The overriding design goal for Markdown's
  > formatting syntax is to make it as readable
  > as possible. The idea is that a
  > Markdown-formatted document should be
  > publishable as-is, as plain text, without
  > looking like it's been marked up with tags
  > or formatting instructions.

  This text you see here is \*actually- written in Markdown! To get a feel
  for Markdown's syntax, type some text into the left window and
  watch the results in the right.

## Tech

    Dillinger uses a number of open source projects to work properly:

    - [AngularJS] - HTML enhanced for web apps!
    - [Ace Editor] - awesome web-based text editor
    - [markdown-it] - Markdown parser done right. Fast and easy to extend.
    - [Twitter Bootstrap] - great UI boilerplate for modern web apps
    - [node.js] - evented I/O for the backend
    - [Express] - fast node.js network app framework [@tjholowaychuk]
    - [Gulp] - the streaming build system
    - [Breakdance](https://breakdance.github.io/breakdance/) - HTML
    to Markdown converter
    - [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

For production environments...


## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][pldb]         |
| GitHub           | [plugins/github/README.md][plgh]          |
| Google Drive     | [plugins/googledrive/README.md][plgd]     |
| OneDrive         | [plugins/onedrive/README.md][plod]        |
| Medium           | [plugins/medium/README.md][plme]          |
| Google Analytics | [plugins/googleanalytics/README.md][plga] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

Second Tab:

(optional) Third:


#### Building for source

For production release:



Generating pre-built zip archives for distribution:


## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.



This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out  with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

Verify the deployment by navigating to your server address in
your preferred browser.



## 📫 Contact me:

You can reach me and feedback about this

1. 🔗 iHelloWorld.net
2. 📧 ihelloworld-contact@gmail.com

## ⚡ File and assets

- 📜 index.js
- 📂 Demo
- 🌍 Click to demo website
`;
export default function Homepage() {
  return (
    <div>
      <div
        style={{ maxHeight: "45vh" }}
        className="hero w-full h-screen  relative overflow-hidden"
      >
        <div className="w-full h-full flex overflow-hidden items-center justify-center absolute top-0 left-0 blur-md filter">
          <img src="/img/login-cover.jpg" />
        </div>
        <Header />
        <div className="absolute w-full h-full bg-black bg-opacity-40 top-0 left-0"></div>
      </div>
      <div className="container mx-auto xl:px-40">
        <div className="transform -translate-y-1/2 md:flex items-start">
          <div className="mx-auto md:mx-unset w-60 h-60 flex items-center justify-center overflow-hidden ring-4 ring-white flex-shrink-0">
            <img
              src="/img/login-cover.jpg"
              className="min-w-full min-h-full flex-shink-0"
            />
          </div>
          <div className="hidden md:block p-2 md:p-0 md:ml-4 text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-4xl filter invert">
              Javascript full course in 75 minutes
            </h2>
            <p className=" filter invert font-semibold text-base">
              Free to join
            </p>
            <p className=" filter invert font-semibold text-base">
              <i class="far fa-clock"></i> 7PM-8PM Saturday
            </p>
            <p className=" filter invert font-semibold text-base">
              <i class="fas fa-user-alt"></i> Duong Cong Vu
            </p>
            <p className="mt-4 font-normal text-base text-justify mx-text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              adipisci, aliquam recusandae distinctio quam nostrum saepe omnis
              et accusamus nulla?
            </p>
          </div>
        </div>
        <div className="transform -translate-y-32">
          <div className="block md:hidden p-2 md:p-0 md:ml-4 text-center md:text-left mt-4 md:mt-0 ">
            <h2 className="text-4xl text-white filter invert">
              Javascript full course in 75 minutes
            </h2>
            <p className="filter invert font-normal text-base">Free to join</p>
            <p className=" font-normal text-base">
              <i class="far fa-clock"></i> 7PM-8PM Saturday
            </p>
            <p className=" font-normal text-base">
              <i class="fas fa-user-alt"></i> Duong Cong Vu
            </p>
            <p className="mt-4 font-normal text-base text-justify mx-text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              adipisci, aliquam recusandae distinctio quam nostrum saepe omnis
              et accusamus nulla?
            </p>
          </div>
        </div>
        <div className="transform md:-translate-y-40 -translate-y-20 flex items-center md:justify-end justify-center">
          <button className="px-4 mr-2 py-2 uppercase text-green-500 rounded border border-green-500 font-semibold block">
            79 participants
          </button>
          <button className="px-4 mr-2 py-2 uppercase text-white rounded bg-green-400 font-semibold block">
            JOIN NOW
          </button>
        </div>
      </div>
      <div className="container mx-auto xl:px-40 py-4 transform -translate-y-10 md:-translate-y-32">
        <article class="prose lg:prose-md max-w-none px-2">
          <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
      <div className="container mx-auto px-2 xl:px-40 py-4 transform -translate-y-10 md:-translate-y-32">
        <h2 className="text-xl font-semibold mt-10 mb-4">Comments</h2>
        <Form.Item>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Add Comment
          </Button>
        </Form.Item>
        <ClassComment />
      </div>
      <Footer />
    </div>
  );
}
