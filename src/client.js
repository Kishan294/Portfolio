import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ypl5zw6e",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skOeyOq6TqV7xdUdcGOnOzmuKpW06G7y6sEhSrXBHVgFMqmnXM5TPoY6mE6sucYc51RUJwsIux20UqNboP5u5q3cU8SP0MPZkkKeBOoALGs0ZbTbz3hIn4XHuqoFB99McoEFwT6LtICzxWW1lZjEAokiRTO2WEGfhaaenGehtzcBZ6gG9WJg",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
