import faunadb from "faunadb";
console.log("start");
export const guestClient = new faunadb.Client({
  secret: process.env.FAUNA_GUEST_SECRET,
});

export const authClient = (secret) =>
  new faunadb.Client({
    secret,
  });
