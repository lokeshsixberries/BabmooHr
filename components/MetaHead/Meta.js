import Head from "next/head";

import { useSelector } from "react-redux";
export default function MetaHead() {
  const theam = useSelector((state) => state.theams.value);
  return (
    <>
      <Head>
        <body style={theam}></body>
      </Head>
    </>
  );
}
