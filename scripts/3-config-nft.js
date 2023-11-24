import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("EDITION_DROP_ADDRESS", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Carguyzz Membership",
        description: "A DAO for fans of cars.One of the most beautiful creations of man",
        image: "http://ipfs.io/ipfs/Qmedf36vB26VzjFXM8T4DhydGJ5y3fexzry9E3mD4Kj7sc",
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();