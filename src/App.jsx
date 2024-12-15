import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <>
    {/* <Card/> */}
    {/* <Button/> */}
    <Student name="SpongeBob" age={20} isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student name="Sandy" age={50} isStudent={false} />
    <Student name="Crabby" age={28} isStudent={true} />
    <Student name="Brad" />
    </>
  );
}

export default App
