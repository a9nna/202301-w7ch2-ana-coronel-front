import { rest } from "msw";

const token = "victor37marc4";
const deleteRobot = "/delete/";

export const handlers = [
  rest.get(`${process.env.REACT_APP_URL_API}`, (req, res, ctx) => {
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

  rest.delete(
    `${process.env.REACT_APP_URL_API}${deleteRobot}744637g?token=${token}`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ idRobot: "744637g" }));
    }
  ),
];

export const errorHandlers = [
  rest.get(`${process.env.REACT_APP_URL_API}`, (req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.delete(
    `${process.env.REACT_APP_URL_API}${deleteRobot}744637g?token=${token}`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];
