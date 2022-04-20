export default function Hello() {

  function showName() {
    console.log("Mike");
  }

  function showAge(age) {
    console.log(age);
  }

  function showText1(e) {
    console.log(e.target.value);
  }

  function showText3(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello</h1>
      <p>
        <button onClick={showName}>Show name</button>
      </p>
      <p>
        <button
          onClick={() => {
            console.log(30);
          }}>
          Show age 1
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            showAge(10);
          }}>
          Show age 2
        </button>
      </p>
      <p>
        showText1:&nbsp;
        <input
          type='text'
          onChange={showText1}
        />
      </p>
      <p>
        showText2:&nbsp;
        <input
          type='text'
          onChange={e => {
            console.log(e.target.value);
          }}
        />
      </p>
      <p>
        showText3:&nbsp;
        <input
          type='text'
          onChange={e => {
            const txt = e.target.value;
            showText3(txt);
          }}
        />
      </p>
    </div >
  )
}