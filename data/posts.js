import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1610398000003-8b5b0b5b5b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    user: USERS[0].user,
    likes: 123,
    caption: "This is a caption",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "Dzenan",
        comment: "This is a comment",
      },
      {
        user: "Dzenan",
        comment: "This is a second comment",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1610398000003-8b5b0b5b5b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    user: USERS[1].user,
    likes: 123,
    caption: "This is a caption",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "Mirza",
        comment: "This is something good",
      },
      {
        user: "Dzemil",
        comment: "I am sleeping",
      },
    ],
  },
];
