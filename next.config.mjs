/** @type {import('next').NextConfig} */
 
const nextConfig = {
  experimental: { // ppr = partial prerendering
    ppr: 'incremental', //
  }, // these three lines are 1 of 2 things needed to make sure ppr works in production.
};
 
export default nextConfig;