"use client";

import { useEffect, useState } from "react";
import { IGropedSlots } from "../types/types";
import { BucketContext } from "./useBucketContext.hook";
import Bucket from "../components/bucket";
import { ApiHandler } from "./apiHandler";

function BucketPage() {
  const [initialState, setInitialState] = useState<IGropedSlots | null>(null);

  useEffect(() => {
    (async () => {
      const state = await ApiHandler.getGroupedBucketSlots();
      setInitialState(state);
    })();
  }, []);
  if (!initialState) return;

  return (
    <main className=" pt-10">
      <BucketContext value={{ initialState, setInitialState }}>
        <Bucket />
      </BucketContext>
    </main>
  );
}

export default BucketPage;
