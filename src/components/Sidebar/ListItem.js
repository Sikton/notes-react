const ListItem = ({ activNote, item }) => {
  return (
    <div onClick={() => activNote(item.id)} className="sideBarNote">
      <div className="titleNote">
        <strong>{item.title}</strong>
        <p>{item.body}</p>
      </div>
    </div>
  );
};

export default ListItem;
