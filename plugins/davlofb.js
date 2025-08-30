const axios = require("axios");
const { davlo } = require("../davlo");

davlo({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook videos",
  category: "download",
  filename: __filename,
  use: "<Facebook URL>",
}, async (dave, m, store, { from, args, q, reply }) => {
  try {
    // Check if a URL is provided
    if (!q || !q.startsWith("http")) {
      return reply("*`Need a valid Facebook URL`*\n\nExample: `.fb https://www.facebook.com/...`");
    }

    // Add a loading react
    await dave.sendMessage(from, { react: { text: '⏳', key: m.key } });

    // Fetch video URL from the API
    const apiUrl = `https://www.velyn.biz.id/api/downloader/facebookdl?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    // Check if the API response is valid
    if (!data.status || !data.data || !data.data.url) {
      return reply("❌ Failed to fetch the video. Please try another link.");
    }

    // Send the video to the user
    const videoUrl = data.data.url;
    await dave.sendMessage(from, {
      video: { url: videoUrl },
      caption: "📥 *Facebook Video Downloaded*\n\n- Powered By DAVE-MD✊",
    }, { quoted: m });

  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    reply("❌ Error fetching the video. Please try again.");
  }
});
