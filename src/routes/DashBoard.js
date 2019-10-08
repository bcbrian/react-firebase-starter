import React, { useContext, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { UserContext } from "../firebase/auth";
import { useFirestore } from "../firebase/firestore";

import SignOut from "../components/SignOut";

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const RenderLineChart = ({ data }) => (
  <LineChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
  >
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default function DashBoard() {
  const user = useContext(UserContext);
  const [value, setValue] = useState("0");

  const { documentSnapshots: userDS, collectionRef: usersCF } = useFirestore(
    "users",
    {
      doc: user.uid
    }
  );
  const { documentSnapshots: dataDS, collectionRef: dataCF } = useFirestore(
    "data",
    {
      where: ["userId", "==", user.uid]
    }
  );

  console.log(userDS);
  return (
    <>
      <div>Awwyes</div>
      <div>
        <SignOut />
      </div>
      <button
        onClick={() =>
          usersCF.doc(user.uid).set({
            first: "brian",
            last: "bartholomew",
            born: 1989
          })
        }
      >
        add user
      </button>
      <button
        onClick={() =>
          dataCF.add({
            random: Math.floor(Math.random() * 10) + 1,
            userId: user.uid
          })
        }
      >
        add data
      </button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      {userDS &&
        userDS.map(docSnap => (
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
      {dataDS && (
        <RenderLineChart
          data={dataDS.map((docSnap, index) => ({
            index,
            ...docSnap.data()
          }))}
        />
      )}
    </>
  );
}
