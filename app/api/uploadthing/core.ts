import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";


const f = createUploadthing();

const handleAuth = async () => {
    console.log("🔐 [SERVER] handleAuth called - checking authentication...");
    const { userId } = await auth();
    console.log("👤 [SERVER] UserId from Clerk:", userId);

    if (!userId) {
        console.error("❌ [SERVER] No userId found - Unauthorized!");
        throw new UploadThingError("Unauthorized");
    }

    console.log("✅ [SERVER] Auth successful, userId:", userId);
    return { userId };
}

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => {
            console.log("📤 [SERVER] courseImage middleware called");
            return handleAuth();
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("✅ [SERVER] courseImage upload complete!");
            console.log("👤 [SERVER] Upload complete for userId:", metadata.userId);
            console.log("📎 [SERVER] File URL:", file.url);
            return { uploadedBy: metadata.userId };
        }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => {
            console.log("📤 [SERVER] courseAttachment middleware called");
            return handleAuth();
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("✅ [SERVER] courseAttachment upload complete!");
            console.log("👤 [SERVER] Upload complete for userId:", metadata.userId);
            console.log("📎 [SERVER] File URL:", file.url);
            return { uploadedBy: metadata.userId };
        }),
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
        .middleware(() => {
            console.log("📤 [SERVER] chapterVideo middleware called");
            return handleAuth();
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("✅ [SERVER] chapterVideo upload complete!");
            console.log("👤 [SERVER] Upload complete for userId:", metadata.userId);
            console.log("📎 [SERVER] File URL:", file.url);
            return { uploadedBy: metadata.userId };
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
