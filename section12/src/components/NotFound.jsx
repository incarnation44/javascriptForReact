import Button from './Button'
import Header from './Header';




const NotFound = () => {


  const onClickButton = (e) => {
    alert(e.target.innerText);
  }


  return (<>


    <Header title={"HEADER"}
      leftChild={<Button text={"LEFT"} onClick={onClickButton} type={"POSITIVE"} />}
      rightChild={<Button text={"RIGHT"} type={"NEGATIVE"} onClick={onClickButton} />}
    />
    <h1>NotFound</h1>
  </>)
}

export default NotFound