import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';

function App() {

  // const fruits = [
  //   {id:1,name : "apple", calories:100},
  //   {id:2,name : "orange", calories:70},
  //   {id:3,name : "banana", calories:50},
  //   {id:4,name : "cherry", calories:10},
  //   {id:5,name : "mango", calories:150}
  // ];
  // const vegetables = [
  //   {id:6,name : "tomato", calories:100},
  //   {id:7,name : "potato", calories:70},
  //   {id:8,name : "carrot", calories:50},
  //   {id:9,name : "celery", calories:10},
  //   {id:10,name : "corn", calories:150}
  // ];
  return (
    <>
    {/* <Card/> */}
    {/* <Button/> */}
    {/* <Student name="SpongeBob" age={20} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Sandy" age={50} isStudent={false} />
    <Student name="Crabby" age={28} isStudent={true} />
    <Student name="Brad" /> */}
    {/* <UserGreeting isLoggedIn={false}/> */}
    {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/>: null} */}
    <MyComponent/>
    {/* <Counter/> */}
    </>
  );
}

export default App
