import { expect } from "../expect";
import { mockResult } from "./exercise9-parent-mock";

const data = [
  { slug: "notebook", parent_slug: "computer" },
  { slug: "computer", parent_slug: "electronic" },
  { slug: "peripherals", parent_slug: "computer" },
  { slug: "cellphone", parent_slug: "electronic" },
  { slug: "electronic", parent_slug: null },
  { slug: "furniture", parent_slug: null },
  { slug: "bedroom", parent_slug: "furniture" },
  { slug: "wardrobe", parent_slug: "bedroom" },
  { slug: "vehicle", parent_slug: null },
];

function recursive(data: any[], parent_slug: any = null) {
  let items = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].parent_slug == parent_slug) {
      const item = { ...data[i] };
      item.parent = recursive(data, item.slug);
      items.push(item);
    }
  }

  return items;
}

expect(recursive(data)).toEqual(mockResult);
