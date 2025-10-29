import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
    router: ourFileRouter,

    config: {
        // Cho phép upload trong development mà không cần callback
        callbackUrl: process.env.UPLOADTHING_URL || `http://localhost:${process.env.PORT || 3000}`,
        // Hoặc set isDev để skip một số validation
        isDev: process.env.NODE_ENV === "development",
    },
});
