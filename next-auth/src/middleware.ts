// without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware"; // every page will be authenticate user

export const config = { matcher: ["/extra"] }; // added protection only pages that includes in the matcher
