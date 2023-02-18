## DATA

# Data layer

- List of robots:

  - Name: string
  - Image url: string
  - Speed: number
  - Endurance: number
  - Creation date: date

# Data modifications

- Load robots to robots list
- Delete a robot from robots list
- Add a robot to robots list
- Modify robot properties.

## COMPONENTS

# App

- Shows layout component

# Layout

- Shows the header.
- Shows robot list component
- Shows a button to create a robot.

# List of robots

- Receives a list of robots
- Shows a list of robots.
- Shows a robot card.
- Sends a robot card component for every robot in the list of robots.

# Robot (card)

- Receives a robot.
- Receives delete robot action.
- Receives modify robot action.
- Shows a robot name "Robot name" in a heading.
- Shows the image of a robot.
- Shows the speed, endurance and creation date of each robot.
- Shows a robot card.
- Shows button to delete robot
- Shows button to modify robot
- Sends button icon to delete to button component
- Sends button icon to modify to button component
- Sends delete action to button component
- Sends modify actionn to button component

# Form

- Receives the add robot action.
- Shows inputs to receive data to create a robot.
- Shows a button to submit data.
- On submit, executes the recived add robot action.
- On submit, executes the recived modify robot action.

# Button

- Receives an icon
- Receives an action.
- Shows the icon insdie the button.
- On click submits the received action.
