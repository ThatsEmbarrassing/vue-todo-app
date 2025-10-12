export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export default [
  {
    id: "d30f796d-8baf-49f4-806a-26a6b0c92f3b",
    title: "Go workout",
    completed: false,
  },
  {
    id: "ce7f66e1-d53e-4fb6-b3d0-5877526abde0",
    title: "Do laundry",
    completed: false,
  },
  {
    id: "b1baac29-27f9-4fcd-b99d-b78f172b514c",
    title: "Cook food",
    completed: false,
  },
  {
    id: "55fcd5fe-4493-4b55-bfc8-ec652d81231f",
    title: "Clean up room",
    completed: false,
  },
  {
    id: "bfd0d885-04df-4190-9291-c0df46feee69",
    title: "Finish work",
    completed: false,
  },
] satisfies TodoItem[];
