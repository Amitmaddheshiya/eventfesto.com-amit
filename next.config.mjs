// next.config.mjs
// Define a fallback API base URL
const fallbackAPIBaseURL = "https://eventfesto.in/api/v1/";

const nextConfig = {
  env: {
    // Use the environment variable if it's defined, otherwise use the fallback value
    API_BASE_URL: process.env.API_BASE_URL || fallbackAPIBaseURL,
  },
};

export default {
  ...nextConfig,
};
