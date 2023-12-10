import Button from "./Button";
import styles from "./App.module.css";


// 7-3강 movie app part one
// fetch, json을 진행 후 로딩을 끝냈기 때문에 반드시 setLoading(false)를 해줘야함
// then대신에 async-await를 보편적으로 사용함
// await을 감싸는 await을 만들 수 있음
// movies.map((movie
//     ->map의 argument는 x, m, g 등등 마음대로 해도됨
// 여기선 movie라고 정함
// div key={movie.id} h2{movie.title}/h2
// -> 이 컴포넌트들은 movie 배열에 있는 각 movie에서 변형되어 나온 것
//
// key={g} -> 따로 정해진 key가 없기 때문에 g를 가져와 key로 써줌
// 단, g가 고유한 값일 경우에만 가능
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (<Router>
        <Routes>
            <Route path="/movie" element={<Detail />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>);
}

export default App;
// 7-2강 코인정보 표시
// function App() {
//     const [loading,setLoading] = useState(true);
//     const [coins,setCoins] = useState([]);
//     useEffect(() => {
//         fetch("https://api.coinpaprika.com/v1/tickers")
//             .then((response) => response.json())
//             .then((json) => {
//                 setCoins(json);
//                 setLoading(false);
//             });
//     }, []);
//     return (
//         <div>
//             <h1>The Coins!</h1>
//             {loading ? <strong>Loading...</strong> : null}
//             <ul>
//                 {coins.map((coin) => (
//                     <li>
//                         {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
//                     </li>
//                     )
//                 )}
//             </ul>
//         </div>
//     );
// }
// export default App;

// 7-0강
// form은 submit 이벤트를 갖고 있다.
//     그러므로 evernt.preventDefault() 함수를 이용하여 기본 동작을 막자.
//     여러 개의 toDo를 받을 수 있는 배열 만들기
// const [toDos, setToDos] = useState([]); -> 기본값은 비어있는 배열
// state는 직접적으로 수정 불가능 (예 : toDo = “” )
// 함수를 가져와서 수정하게 만들어야함 (예 : setToDo = (“”) )
// 그래서 toDos 배열을 수정하고 싶다면 수정하는 함수를 써야함
//
// setToDos(currentArray => [toDo, ...currentArray]);
// -> ...을 써서 currentArray 배열에 toDo를 추가 시켜줌
// 어플리케이션이 시작될 때는 비어있는 배열을 가짐
// 첫 번째 to-do를 입력할 때 비어있는 currentArray 받아옴
// 이건 새로운 toDos가 input을 통해 작성한 toDo와
// 아무것도 들어있지 않은 빈 배열의 element가 더해지게 된다는 것
// 첫 번째 toDo 가 Hello라면 엔터를 눌러 실행됨
// 그리고 byebye라고 적으면
// currentArray에는 Hello 이미 있고 toDo는 byebye가 되는 것
// 그리고 currentArray는 Hello와 byebye를 가지고 있는 배열이 됨

// 7-1강
// map() 함수
//     -> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌. map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
// 즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
// 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
//     [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
// -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
// 다만 기존의 배열에 접근할 수 없게됨
// 그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
// map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
// map((item) => item.toUpperCase())
// 로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌
//
// 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
// map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
// 그래서
// {toDos.map((item, index) => {item})}
// 만들어줌
// 즉,
//     {{item},{item},{item}...}
// 배열을 만들어 각자 고유의 key를 가지게 함
// function App() {
//     const [toDo,setToDo] = useState("");
//     const [toDos,setToDos] = useState([]);
//     const onChange = (event) => setToDo(event.target.value);
//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (toDo==""){
//             return;
//         }
//         setToDos(currentArray => [toDo, ...currentArray]);
//         setToDo("");
//     };
//     console.log(toDos);
//     console.log(toDo);
//     return (
//         <div>
//             <h1>My To Dos ({toDos.length})</h1>
//             <form onSubmit={onSubmit}>
//                 <input
//                     onChange={onChange}
//                     value={toDo}
//                     type="text"
//                     placeholder="Write your to do..." />
//
//                 <button>Add To Do</button>
//             </form>
//             <hr />
//             <ul>
//             {toDos.map((item,index) => (<li key={index}>{item}</li>))}
//             </ul>
//         </div>
//     )
// }
// export default App;

// 6강
//🔥 새롭게 배운 내용 정리
//
// • 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
// • useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// • props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
// • useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.
//
// 🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
// 🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능

// function Hello(){
//     useEffect(() => {
//         console.log("created");
//         return () => console.log("destroyed");  //Cleanup function : 컴포넌트가 Destroy될 때 뭔가를 할 수 있게 해주는 것. useEffect와 return 콜라보로 사용
//     }, []);
//
//     return <h1>Hello</h1>;
// }
//
// function App() {
//     const [counter, setValue] = useState(0);
//     const [keyword, setKeyword] = useState("");
//     const [showing, setShowing] = useState(false);
//     const onClickShow = () => setShowing((prev) => !prev);
//     const onClick = () => setValue((prev) => prev +1);
//     const onChange = (event) => setKeyword(event.target.value);
//     console.log("render");
//
//     useEffect(() => {
//         if (keyword !== "" && keyword.length > 5){
//             console.log("Search for",keyword);
//         }
//     }, [keyword]);
//     useEffect(() => {
//         console.log("once once");
//     }, []);
//     const onlyOne = () => {
//         console.log("This is Once Function");
//     };
//     useEffect(onlyOne,[]);
//   return (
//     <div>
//         {showing ? <Hello /> : null}
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"wow"}/>
//         <input
//             value={keyword}
//             onChange={onChange}
//             type="text"
//             placeholder="Search Here..." />
//         <h1>{counter}</h1>
//         <button onClick={onClick}>Click me</button>
//         <button onClick={onClickShow}>{showing ?  "Hide" : "Show"}</button>
//     </div>
//   );
// }
//
// export default App;
