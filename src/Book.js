const Book = (props) => {
  // условная отрисовка
  if (!props.title) {
    return null;
    // важно вернуть именно null или другую разметку а не undefined
  }
  
  return (
    <div className={props.name}>
      <h3>{props.title || 'text'}</h3>      
      <p>{props.children}</p>
    </div>
  );
}

export default Book;
