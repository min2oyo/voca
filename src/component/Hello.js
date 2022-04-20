//나이에 구조 분해 할당 적용
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  return (
    <div>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  )
}



// 인수명 변경
// import { useState } from "react";

// export default function Hello({ age }) {
//   const [name, setName] = useState("Mike");

//   return (
//     <div>
//       <h1 id="name">{name}({age})</h1>
//       <button onClick={() => {
//         setName(name === "Mike" ? "Jane" : "Mike");
//       }
//       }>Change</button>
//     </div>
//   )
// }



// 나이 적용 1
// import { useState } from "react";

// export default function Hello(props) {
//   const [name, setName] = useState("Mike");
//   const [age, setAge] = useState(props.age);

//   return (
//     <div>
//       <h1 id="name">{name}({age})</h1>
//       <button onClick={() => {
//         setName(name === "Mike" ? "Jane" : "Mike");
//         setAge(age + 1);
//       }
//       }>Change</button>
//     </div>
//   )
// }