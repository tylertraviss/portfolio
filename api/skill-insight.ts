import Anthropic from "@anthropic-ai/sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const TYLER_CONTEXT = `
Tyler Travis is a software engineer with the following background:

EXPERIENCE:
- Software Engineer at Fintex Inc. (Mar 2025 – Present): Guides discovery and delivery across three regulated financial platforms (Tangerine, BMO, Aviso) supporting 2M+ daily users. Manages 2,000+ Jira artifacts. Transforms ambiguous ideas into user stories with explicit acceptance criteria.
- Software Engineer at QA Consultants (May 2024 – Mar 2025): Built automated testing frameworks for healthcare, fintech, and gaming. Modularized common functionality using DRY principles.
- Software Engineer Intern at TD Bank (Apr 2023 – Aug 2023): Created an Agile sprint monitoring tool for the DaaS platform used by 12+ teams. Co-founded the TD AI Club with 100+ members.
- Software Engineer Intern at Breathe Biomedical (May 2021 – Aug 2022): Built a CNN model for lung cancer prediction at 85% accuracy. Migrated 50% of system software from LabVIEW to C++.

PROJECTS:
- LoyaltyTickets: Concert ticket platform using Spotify API to reward biggest fans. Go backend, Angular frontend, PostgreSQL, deployed on Railway.
- Regression Testing Framework: Automated testing suite for the Google Homepage using Python and Pytest with CI integration and reporting.
- CodeCompass: AI-powered LeetCode assistant providing real-time solutions using Python and Flask with OpenAI API.
- Eye Disease Classification: Deep learning CNN model for retinal image analysis achieving 85% accuracy using Python, TensorFlow, and OpenCV.
- Talent Agency System: Java-based client management application using design patterns for scalable OOP architecture.
- Student Audit Tracking System: Helps students plan their engineering degree using Python, MySQL, SQLite, HTML, and CSS.

EDUCATION: B.Sc. Software Engineering, University of New Brunswick

EXTRA-CURRICULAR: Actor in CBC Macy Murdoch, University Soccer MVP, Youth Soccer Coach (1,000+ hours), JA CEO of the Year, co-organizer of inaugural Microsoft AI Day.
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const skill = typeof req.query.skill === "string" ? req.query.skill : null;

  if (!skill) {
    return res.status(400).json({ error: "skill is required" });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const stream = client.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 256,
      messages: [
        {
          role: "user",
          content: `Based on Tyler's background, write 2-3 sentences explaining how he has used "${skill}" in his work and projects. Be specific — reference actual companies, projects, or outcomes. Be direct and conversational, no preamble.

${TYLER_CONTEXT}`,
        },
      ],
    });

    for await (const event of stream) {
      if (
        event.type === "content_block_delta" &&
        event.delta.type === "text_delta"
      ) {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    res.write(`data: ${JSON.stringify({ error: "Failed to generate insight" })}\n\n`);
    res.end();
  }
}
