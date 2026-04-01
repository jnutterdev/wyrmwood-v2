import { defineConfig } from 'tinacms';

export default defineConfig({
  // Local mode: no clientId/token needed until TinaCloud deployment
  branch: '',
  clientId: null,
  token: null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'reviews',
        label: 'Reviews',
        path: 'src/content/reviews',
        format: 'md',
        ui: {
          filename: {
            // Slug is derived from the title automatically
            readonly: false,
            slugify: values =>
              values.title
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '') ?? '',
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: true,
            options: ['music', 'fiction', 'tabletop'],
          },
          {
            type: 'string',
            name: 'date',
            label: 'Date',
            description: 'Format: YYYY-MM-DD',
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'number',
            name: 'rating',
            label: 'Rating (1–5)',
            required: true,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured',
          },
          {
            type: 'boolean',
            name: 'spotlight',
            label: 'Spotlight',
          },
          {
            type: 'string',
            name: 'byline',
            label: 'Byline',
            description: 'e.g. "By Aldric Vane · March 2026"',
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            description: 'e.g. "8 min read"',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
