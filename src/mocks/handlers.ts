import { rest } from "msw";

const handlers = [
  rest.get(`${process.env.REACT_URL_API}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Terminator",
        image: "https://media.vandal.net/i/620x387/1-2022/20221181037175_1.jpg",
        stats: {
          speed: 5,
          endurance: 5,
          creationDate: "27/03/2137",
        },
      })
    );
  }),
];

export default handlers;
