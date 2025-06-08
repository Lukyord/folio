import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {},
    /* config options here */
};

export default withPayload(nextConfig);
