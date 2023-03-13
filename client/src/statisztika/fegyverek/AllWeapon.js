
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const url =
  "https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=10";

export default function App() {
  
  const [data, setData] = useState([]);

  
  useEffect(() => {

    fetch(url)
      .then((r) => r.json())
      .then(setData);
  }, []);
  return (
    // BarChart => name + value
    <BarChart
      width={600}
      height={300}
      margin="auto"
      data={data.map((it) => ({ name: it.name, kill: it.emissions.gco2e }))}
    >
      {/* XAxis => dataMonth */}
      <XAxis dataKey="name" />

      {/* YAxis => value */}
      <YAxis />

      <Tooltip />

      {/* Bar => name */}
      <Bar dataKey="kill" stackId="a" fill="#8884d8" />
    </BarChart>
  );
}
