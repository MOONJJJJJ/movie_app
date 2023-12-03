import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";


//🔥 새롭게 배운 내용 정리
//
// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.
//
// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

function Hello(){
    useEffect(() => {
        console.log("created");
        return () => console.log("destroyed");  //Cleanup function : 컴포넌트가 Destroy될 때 뭔가를 할 수 있게 해주는 것. useEffect와 return 콜라보로 사용
    }, []);

    return <h1>Hello</h1>;
}

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(false);
    const onClickShow = () => setShowing((prev) => !prev);
    const onClick = () => setValue((prev) => prev +1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("render");

    useEffect(() => {
        if (keyword !== "" && keyword.length > 5){
            console.log("Search for",keyword);
        }
    }, [keyword]);
    useEffect(() => {
        console.log("once once");
    }, []);
    const onlyOne = () => {
        console.log("This is Once Function");
    };
    useEffect(onlyOne,[]);
  return (
    <div>
        {showing ? <Hello /> : null}
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"wow"}/>
        <input
            value={keyword}
            onChange={onChange}
            type="text"
            placeholder="Search Here..." />
        <h1>{counter}</h1>
        <button onClick={onClick}>Click me</button>
        <button onClick={onClickShow}>{showing ?  "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
