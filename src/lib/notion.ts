import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({ auth: process.env.NOTION_TOKEN });
export const n2m = new NotionToMarkdown({ notionClient: notion as any });

export function getRichText(prop: any): string {
  return prop?.rich_text?.map((t: any) => t.plain_text).join("") || "";
}

export function getTitle(prop: any): string {
  return prop?.title?.map((t: any) => t.plain_text).join("") || "";
}

export async function getBlogPosts() {
  const res = await notion.dataSources.query({
    data_source_id: process.env.NOTION_BLOG_DB_ID!,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Date", direction: "descending" }],
  });
  return res.results;
}

export async function getBlogPostBySlug(slug: string) {
  const res = await notion.dataSources.query({
    data_source_id: process.env.NOTION_BLOG_DB_ID!,
    filter: { property: "Slug", rich_text: { equals: slug } },
  });
  return res.results[0] || null;
}

export async function getInterviews() {
  const res = await notion.dataSources.query({
    data_source_id: process.env.NOTION_INTERVIEWS_DB_ID!,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Date", direction: "descending" }],
  });
  return res.results;
}

export async function getInterviewBySlug(slug: string) {
  const res = await notion.dataSources.query({
    data_source_id: process.env.NOTION_INTERVIEWS_DB_ID!,
    filter: { property: "Slug", rich_text: { equals: slug } },
  });
  return res.results[0] || null;
}

export async function getPageContent(pageId: string) {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks);
}
