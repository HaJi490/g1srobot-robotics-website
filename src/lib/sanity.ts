import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'qi043u9d',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
})