// 방법4
import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike");

  return (
    <div>
      <h1 id="name">{name}</h1>
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike");
      }
      }>Change</button>
    </div>
  )
}



// 방법3
// import { useState } from "react";

// export default function Hello() {
//   const [name, setName] = useState("Mike");

//   function changeName() {
//     setName(name === "Mike" ? "Jane" : "Mike");
//   }

//   return (
//     <div>
//       <h1 id="name">{name}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }



// 방법2
// import { useState } from "react";

// export default function Hello() {
//   const [name, setName] = useState("Mike");

//   function changeName() {
//     const newName = name === "Mike" ? "Jane" : "Mike";
//     setName(newName);
//   }

//   return (
//     <div>
//       <h1 id="name">{name}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }



// 방법1
// export default function Hello() {
//   let name = "Mike";

//   function changeName() {
//     name = name === "Mike" ? "Jane" : "Mike";
//     console.log(name);
//     document.getElementById("name").innerText = name;
//   }

//   return (
//     <div>
//       <h1 id="name">{name}</h1>
//       <button onClick={changeName}>Change</button>
//     </div>
//   )
// }