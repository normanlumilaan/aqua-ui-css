import fsp from "node:fs/promises";
import path from "node:path";

/** Aggregate selected data into one object */

export interface Data {
  [key: string]: string | number;
}

let data: Data = {
  name: "Aqua UI CSS",
  updated: new Date(Date.now()).toISOString(),
};

/** package.json */
try {
  const str = await fsp.readFile(path.resolve(path.join(".", "package.json")), {
    encoding: "utf-8",
  });
  const json = JSON.parse(str as string);
  const { version, description, homepage, repository } = json;
  data = { ...data, version, description, homepage, url: homepage };
  data.repoUrl = repository.pageUrl;
} catch (err) {
  console.log(err);
  throw Error("Error while reading or parsing package.json");
}

export default data;
