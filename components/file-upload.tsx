"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange: (url?: string) => void;
    endpoint: keyof typeof ourFileRouter;
};

export const FileUpload = ({
    onChange,
    endpoint
}: FileUploadProps) => {
    console.log("🎬 [CLIENT] FileUpload component rendered with endpoint:", endpoint);

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                console.log("✅ [CLIENT] UPLOAD SUCCESS! Response:", res);
                const url = res?.[0]?.url;
                console.log("📎 [CLIENT] URL:", url);
                onChange(url);
                toast.success("Upload thành công!");
            }}
            onUploadError={(error: Error) => {
                console.error("❌ [CLIENT] UPLOAD ERROR:", error);
                console.error("❌ [CLIENT] Error message:", error?.message);

                // Nếu là lỗi callback NHƯNG file đã upload thành công
                // thì vẫn cho phép dùng (callback fail ở localhost là bình thường)
                if (error?.message?.includes("callback failed")) {
                    console.log("⚠️ [CLIENT] Callback failed but checking if file uploaded...");
                    // Bỏ qua lỗi callback trong development
                    toast.error("⚠️ Callback lỗi nhưng file có thể đã upload - kiểm tra UploadThing dashboard");
                } else {
                    toast.error(`Lỗi: ${error?.message || "Unknown error"}`);
                }
            }}
        />
    )
}