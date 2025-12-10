# Deliverables
Your React application must meet the technical requirements and have the features listed below:

- **Create a React application that has the following features:**
    - It should be an app **made for a single user.**
    - **_Navbar_** - A component that displays the name and the logo of the app, shown on all the pages.
    - **_Footer_** - A component that displays a link to the GitHub repo of the project, shown on all the pages.
    - **_Sidebar_** - A sidebar component shown on all the pages. The component should display links to pages added to the app at a later stage.
    - **_Items List_** - A list of items showing the JSON data.
    - **_Conditional Rendering_** - Conditionally render content using boolean properties from the project’s JSON data.
    - **_Delete Items_** - A button on each list item that allows the user to delete the item from the list.
    - **_Item Details Page_** - A page showing the details of the selected item from the _list of items._
    - **_About Page -_** A page showing the project description and information about the team members (students) working on the project, including links to their GitHub and LinkedIn profiles.
    - ***Not Found Page** -* A page shown whenever the user navigates to a URL route that doesn’t exist in the app.
    - **_Create Item Form_** - A form that allows the user to create a new item and add it to the items list.
    - **_Update Item Form_** - A form that allows the user to update an existing item on the list.
- **Keep your code clean and organized** by using descriptive variable names, correct indentation, removing any unused code, and maintaining proper file structure and naming.

# Day 1
## Development Tasks:

1. Set up a GitHub repository for the project:
   - One team member should create a new GitHub repository for the project on their GitHub account and add other team members as collaborators (instructions).
   - All team members should clone the created GitHub repository locally.
2. Create a new React application locally in the folder of the cloned repository.
3. Remember to commit your changes often and push them to the GitHub repo after creating the new React app.
4. Create a Home Page in your React app that has the following features:
  - The *Navbar component* that displays the app’s name and logo.
   - The *Footer component* with the link to the GitHub repository of the project.
   - The *Sidebar component* with the links to the Home and About page.
   - Add basic styling to your app.

## Research Tasks:

1. Read [“React Docs: Quick Start”](https://react.dev/learn) (est. time ~20 min).
2. Read [“React Docs: Passing Props to a Component”](https://react.dev/learn/passing-props-to-a-component) (est. time ~20 min).

# Day 2
## Development Tasks:

1. Render your JSON data as a list.
2. Conditionally render content in the list items. Here is how you can do it:
   - Include a condition to conditionally render content on each item in the list. For example, if your list items have a property isCompleted, show ✔️ if it is true and ❌ if it is false.
   - If objects in your JSON dataset don't contain any boolean property, make a conditional check that results in true or false. For example, you can check if a value is greater or less than a specified number.
3. Include a delete button on each list item that allows the user to delete the item from the list.
4. Make the **list** a separate component by extracting the code for better code organization (for example, <List />).
5. Make the list item a separate component and use the new component to render the list items (for example, <ListItem /> or <ItemCard />).

## Research Tasks:

1. Read [“React Docs: Adding Interactivity”](https://react.dev/learn/adding-interactivity) (est. reading time ~25 min). If interested, you can dive deeper into any of the topics on the page for a more thorough understanding.

# Day 3
## Development Tasks:

1. Install and set up react-router in your React app.
2. Create the following page components and the routes to render them in the app:
   - **Dashboard Page -** A page that the user sees first when they open the app. It should show the items list that you created previously.
   - **Item Details Page -** A page that displays all the details of an item selected from the items list.
   - **About Page -** A page showing the *project description* and information about the team members (students) working on the project, including links to your GitHub and LinkedIn profiles.
   - **Not Found Page -** A page that renders whenever a user navigates to a URL route that doesn’t exist in the app.
3. The Navbar, Footer, and Sidebar components should be displayed on all the pages.

## Research Tasks:

Read [“React Docs: Reacting to Input with State”](https://react.dev/learn/reacting-to-input-with-state) (est. time ~25 min).

# Day 4
## Development Tasks:

1. Create a form component that allows the user to create and add a new item to the items list. The form component should be displayed on the Dashboard page.
2. Create a form component that allows the user to update an existing item from the items list.
3. If you haven’t done so yet, finish styling your application.

## Research Tasks:

Read [“React Docs: Sharing State Between Components”](https://react.dev/learn/sharing-state-between-components) (est. time ~30 min).

# Day 5
## Development Tasks:

1. Finish implementing any remaining features in your app.
2. To make sure that everything is working properly, open the React app and verify that all the pages are accessible and that all the features are working properly. Additionally, check the browser’s Dev Console and make sure there are no lingering console logs or unresolved errors.
3. If you have not started already, prepare a brief presentation summarizing the work you did and the lessons learned from this project (see project brief for presentation guidelines).

## Research Tasks:

Read the article [“React Folder Structure in 5 Steps”](https://www.robinwieruch.de/react-folder-structure/) (est. time ~20 min).

# Day 6
## Development Tasks:

1. Finish implementing any remaining features in your app.
2. If you have not started already, prepare a brief presentation summarizing the work you did and the lessons learned from this project (see project brief for presentation guidelines).

## Research Tasks:

After finishing all the tasks, you can explore adding an additional feature mentioned in the "Additional Features" section below.

# Additional Features (Optional)
If you are looking into implementing additional features and expanding your learning beyond your daily tasks, we recommend exploring the following topics. We've included some suggested reading materials to help you get started:

Tailwind CSS
Tailwind in 100 Seconds
Tailwind CSS website
Install Tailwind CSS with Vite

State Management and Context API:
React Docs: Passing Data Deeply with Context
Extracting State Logic into a Reducer
Scaling Up with Reducer and Context

Submission
For the mini project to be considered complete, you must finish all the tasks listed in the project brief and submit the project repo in the Student Portal before the deadline.

:::warning ☝️ The deadline for finishing the mini-project and submitting the project repo is Wednesday of the following week.


The Presentation
You will present your game on Friday morning to the class showcasing how your app works, as well as a short presentation in the form of some slides. The format of the presentation will be as follows:

Talking with Slides: 3 minutes
Demo: 2 minutes
Total: 5 minutes

All presentations will be done from a staff member’s computer, so your slides need to be online. PowerPoint files, Keynote files, or files of any kind will not be accepted.

Suggested online slide applications:
Google Slides
Slides
Prezi

Presentation Structure
Feel free to present your app as you feel best represents your work, but below you will find a suggested format for the presentation as a guide.

Title Slide (1 slide): your project’s name & your names
Technical Challenge (1-2 slides):
What was the most important technical challenge(s) you faced?
How did you overcome that challenge?
Big Mistake (1-2 slides):
What was the biggest mistake you made during this project?
What did you learn from it?
Demo Slide (1 slide):
Showcase the state of your application so far.
Keep the demo concise and aim for it to not exceed 2 minutes.
Closing Slide (1 slide): your project’s name, your name & a “Thank You”
Total: 5-7 slides
