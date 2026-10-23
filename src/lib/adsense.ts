export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
export const ADSENSE_ENABLED = ADSENSE_CLIENT.startsWith("ca-pub-");
