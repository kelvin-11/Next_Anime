export { default } from "next-auth/middleware"

export const config = { matcher: ["/users/:path*"] } //apapun setelah /users harus login terlebih dahulu