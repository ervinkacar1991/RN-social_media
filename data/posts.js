import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2017/02/3-poets_walk_central_park.jpg?resize=750%2C500&ssl=1",
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
      "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?cs=srgb&dl=pexels-pixabay-258196.jpg&fm=jpg",
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
