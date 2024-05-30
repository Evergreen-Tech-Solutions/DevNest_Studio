const Trello = require("node-trello");
const fs = require("fs");

// Initialize Trello API client
const trello = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);

// Function to create a new card in Trello "To Do" list
async function createTodoCard(issue) {
  const listId = "6658dc82e5090b5ba738e3ce"; // ID of the "To Do" list in your Trello board
  const cardName = issue.title;
  const cardDesc = issue.body;

  // Create the card in the "To Do" list
  const card = await trello.post("/1/cards", {
    name: cardName,
    desc: cardDesc,
    idList: listId,
  });

  // Return the ID of the newly created card
  return card.id;
}

// Function to move a card to the "In Progress" list
async function moveInProgress(cardId) {
  const listId = "6658dc82b779fce32b01cadb"; // ID of the "In Progress" list in your Trello board

  // Move the card to the "In Progress" list
  await trello.put(`/1/cards/${cardId}`, { idList: listId });
}

// Function to move a card to the "Completed" list
async function moveCompleted(cardId) {
  const listId = "6658dc82c51a9820dd804384"; // ID of the "Completed" list in your Trello board

  // Move the card to the "Completed" list
  await trello.put(`/1/cards/${cardId}`, { idList: listId });
}

// Main function to process GitHub issues
async function processIssue(event) {
  const issue = event.issue;
  let cardId; // Variable to store the card ID

  if (event.action === "opened") {
    // Create a new card in the "To Do" list and get the card ID
    cardId = await createTodoCard(issue);
    console.log(`Created new card with ID: ${cardId}`);
  } else if (event.action === "assigned") {
    // Move the card to the "In Progress" list
    await moveInProgress(cardId); // Use the cardId obtained earlier
  } else if (event.action === "closed") {
    // Move the card to the "Completed" list
    await moveCompleted(cardId); // Use the cardId obtained earlier
  }
}

// Entry point of the GitHub Action
async function run() {
  // Read the content of the event file
  const eventContent = fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8");

  // Parse the event content as JSON
  const event = JSON.parse(eventContent);

  if (event && event.issue) {
    await processIssue(event);
  } else {
    console.log("No issue data found.");
  }
}

run().catch((error) => {
  console.error("An error occurred:", error);
});
