import s from './ListItem.module.css';

const ListItem = ({ activNote, item }) => {
  return (
    <div
      onClick={() => activNote(item.id)}
      className={(s.sideBarNote, s.active)}
    >
      <div className="titleNote">
        <strong>{item.title}</strong>
        <p>{item.body}</p>
      </div>
    </div>
  );
};

export default ListItem;
