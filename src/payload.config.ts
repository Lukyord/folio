import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { gcsStorage } from "@payloadcms/storage-gcs";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
    },
    collections: [Users, Media],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || "",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: mongooseAdapter({
        url: process.env.MONGODB_URI || "",
    }),
    sharp,
    plugins: [
        gcsStorage({
            collections: {
                media: {
                    prefix: "payload-media",
                },
            },

            bucket: process.env.GCS_BUCKET || "",
            options: {
                apiEndpoint: process.env.GCS_ENDPOINT,
                projectId: process.env.GCS_PROJECT_ID,
                credentials: {
                    project_id: "folio-462303",
                    private_key_id: process.env.GCS_PRIVATE_KEY_ID,
                    private_key: process.env.GCS_PRIVATE_KEY?.replace(
                        /\\n/g,
                        "\n"
                    ),
                    client_email: process.env.GCS_CLIENT_EMAIL,
                    client_id: "113383120774366486361",
                },
            },
        }),
    ],
});
