import React from "react";

const Home = () => {
  return (
    <>
      <div className="pageframe" id="intro">
        <h2>What is accessiblity?</h2>
        <p>
          Accessibility is the idea that all users can have a fulfilling user
          experience from websites and other products. It is about doing our
          best to include users who navigate the web with aids for hearing,
          visual or motor assistive devices.
        </p>
        <h2>What is a11y?</h2>
        <p>
          A11y is a movement which hopes to make the web and other tech related
          products an inclusive experience. The name comes from the word
          accessibiility, taking the internal letters as a number
        </p>

        <h2>Why does it matter?</h2>
        <p>
          With the web becoming an integrated part of how we recieve
          information, create and consume content, make social interactions, it
          is essential to give all the means an easy way to access this tool and
          wealth of information. There are guidelines in place for a baseline of
          accessibility. Here we strive to see the groups which are doing well,
          and which could be better. Search a group to see the data on
          accessibility
        </p>
        <h2>What can we do?</h2>
        <p>
          As developers, we can keep accessibility design in mind right from the
          planning stages. Some simple ideas may be to:
          <br />
          <ul>
            <li>Keep content organised and flowing logically</li>

            <li>
              Using alternate text with images, using iframes, descriptive html
              elements or buttons with text
            </li>

            <li>
              Using aria functions, which are specifically designed with
              accessibility in mind
            </li>
          </ul>
          There are plenty of resources about how to make your apps more easy to
          use tools used for everyone. Check out some links in more Info to kick
          off your search
        </p>
      </div>
    </>
  );
};

export default Home;
