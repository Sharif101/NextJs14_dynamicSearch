import React from "react";

export default async function User() {
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };

  const data = await getData();
  console.log(data);

  return (
    <div>
      <p>Open terminal for show log data 'this is server side'</p>
      <ul>
        {data.map((data, id) => (
          <li key={id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}
