import type { MetadataRoute } from "next";

const BASE_URL = "https://acs-indonesia.com";

const routes = ["", "/contact", "/career", "/clients", "/hse-p2k3", "/laboratory"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
