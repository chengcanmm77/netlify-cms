export default {
  type: "object",
  properties: {
    backend: {
      type: "object",
      properties: { name: { type: "string", examples: ["test-repo"] } },
      required: ["name"]
    },
    display_url: { type: "string", examples: ["https://example.com"] },
    media_folder: { type: "string", examples: ["assets/uploads"] },
    publish_mode: {
      type: "string",
      enum: ["editorial_workflow"],
      examples: ["editorial_workflow"]
    },
    slug: {
      type: "object",
      properties: {
        encoding: { type: "string", enum: ["unicode", "ascii"] },
        clean_accents: { type: "boolean" }
      }
    },
    collections: { type: "array" }
  },
  required: ["backend", "media_folder", "collections"]
};
