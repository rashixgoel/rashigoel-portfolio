const NOTION_TOKEN = process.env.NOTION_TOKEN!;
const PARENT_PAGE_ID = "372867f0259780c38c86c77a2b42d7cc";

const headers = {
  "Authorization": `Bearer ${NOTION_TOKEN}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

async function createDatabase(title: string, properties: object) {
  const res = await fetch("https://api.notion.com/v1/databases", {
    method: "POST",
    headers,
    body: JSON.stringify({
      parent: { type: "page_id", page_id: PARENT_PAGE_ID },
      title: [{ type: "text", text: { content: title } }],
      properties,
    }),
  });
  const data = await res.json();
  console.log(`✅ Created "${title}" database — ID: ${data.id}`);
  return data.id;
}

async function main() {
  console.log("Setting up Notion databases...\n");

  await createDatabase("Blog Posts", {
    Title: { title: {} },
    Slug: { rich_text: {} },
    Published: { checkbox: {} },
    Date: { date: {} },
    Excerpt: { rich_text: {} },
    Tags: { multi_select: { options: [] } },
  });

  await createDatabase("Interviews", {
    Title: { title: {} },
    "Guest Name": { rich_text: {} },
    "Guest Role": { rich_text: {} },
    "Guest Organization": { rich_text: {} },
    Slug: { rich_text: {} },
    Published: { checkbox: {} },
    Date: { date: {} },
    "Pull Quote": { rich_text: {} },
    Tags: { multi_select: { options: [] } },
  });

  await createDatabase("Projects", {
    Title: { title: {} },
    Slug: { rich_text: {} },
    Published: { checkbox: {} },
    Status: {
      select: {
        options: [
          { name: "Live", color: "green" },
          { name: "In Progress", color: "yellow" },
          { name: "Planned", color: "gray" },
        ],
      },
    },
    Tags: { multi_select: { options: [] } },
    Featured: { checkbox: {} },
  });

  console.log("\n✅ All databases created. Copy the database IDs above into your .env.local file.");
}

main();
