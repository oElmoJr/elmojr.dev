import Button from '../Button';
import './styles.css';

type TagsProps = {
  taglist: String[];
  id: String;
};

function showMore(ID: String) {
  document.querySelector(`#${ID}`)?.classList.toggle('hide');
}

export default function Tags({ taglist, id }: TagsProps) {
  return (
    <ul id={`${id}`} className={`taglist hide`}>
      {taglist.map((tag) => (
        <li key={`${tag}`}>
          <Button buttonClass={`${tag}`}>{tag}</Button>
        </li>
      ))}
      <Button click={() => showMore(id)}>+</Button>
    </ul>
  );
}
