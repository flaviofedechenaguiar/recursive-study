export const mockResult = [
  {
    slug: "electronic",
    parent_slug: null,
    parent: [
      {
        slug: "computer",
        parent_slug: "electronic",
        parent: [
          {
            slug: "notebook",
            parent_slug: "computer",
            parent: [],
          },
          {
            slug: "peripherals",
            parent_slug: "computer",
            parent: [],
          },
        ],
      },
      {
        slug: "cellphone",
        parent_slug: "electronic",
        parent: [],
      },
    ],
  },
  {
    slug: "furniture",
    parent_slug: null,
    parent: [
      {
        slug: "bedroom",
        parent_slug: "furniture",
        parent: [
          {
            slug: "wardrobe",
            parent_slug: "bedroom",
            parent: [],
          },
        ],
      },
    ],
  },
  {
    slug: "vehicle",
    parent_slug: null,
    parent: [],
  },
];
