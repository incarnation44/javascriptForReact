const InputController = ({ text, setText }) => {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="입력하세요"
    />
  )
}

export default InputController
