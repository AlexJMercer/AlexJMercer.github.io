import { writeFileSync } from "fs";
import RSS from "rss";

import { rawDocuments } from "../lib/services";

async function generate() {
  const feed = new RSS({
    title: "ultimatemercer.com",
    site_url: "https://ultimatemercer.com",
    feed_url: "https://ultimatemercer.com/feed.xml",
    image_url: "https://ultimatemercer.com/images/ultimate-mercer-thumb.jpg",
    description: "Blklight",
  });

  rawDocuments.map((document) => {
    feed.item({
      title: document.title,
      url: `https://ultimatemercer.com/${document.slug}`,
      date: document.date,
      description: document.description ?? "",
      custom_elements: [{ channel: document.channel }],
    });
  });

  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
