export const Child = (props) => {
  const {notes} = props

  return(
    <ul>
      {notes.map((note, id) => 
        <li key={id}>{note.content}</li>
        )}
    </ul>
  )
}