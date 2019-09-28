import React, { useContext, useState } from "react";
import { UserContext, AUTHENTICATING } from "../firebase/auth";
import { useFirestore } from "../firebase/firestore";

export default function DashBoard() {
  const user = useContext(UserContext);
  const [value, setValue] = useState("0");

  const { documentSnapshots, collectionRef } = useFirestore("users", {
    // doc: "1LxYrHMxj9DPV8dMNf57"
    where: [["born", ">", parseInt(value, 10)]]
    // limit: [3],  >>>>> TODO::::CAN I ADD????????
    // orderBy: ["first", "desc"]
  });
  if (user === AUTHENTICATING) {
    return null;
  }
  console.log(documentSnapshots);
  return (
    <>
      <div>Awwyes</div>
      <button
        onClick={() =>
          collectionRef.add({
            first: "brian",
            last: "bartholomew",
            born: 1989
          })
        }
      >
        add
      </button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      {documentSnapshots &&
        documentSnapshots.map(docSnap => (
          <div
            key={docSnap.id}
            style={{
              background: "rebeccapurple",
              color: "white",
              margin: 12,
              padding: 20
            }}
            onClick={() => {
              docSnap.ref.update({ updated: true });
            }}
          >
            {JSON.stringify(docSnap.data())}
          </div>
        ))}
    </>
  );
}
