'use client';

import initCustomApp from "just-a-test-of-custom-apps/dist/src";
import {useEffect, useState} from "react";

export default function Home() {
  const [context ,setContext] = useState({});

  useEffect(() => {
    const getData = async () => {
      const ctx = await initCustomApp();
      setContext(ctx);
    }

    getData().catch(console.error)
  }, []);

  console.log({ context });

  console.log(window.innerHeight);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}
