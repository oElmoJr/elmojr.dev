import Button from '../Button';
import './styles.css';

type TagsProps = {
  taglist: String[];
};

export default function Tags({ taglist }: TagsProps) {
  return (
    <ul className="taglist">
      {taglist.map((tag) => (
        <li>
          <Button buttonClass={`${tag}`}>{tag}</Button>
        </li>
      ))}
    </ul>
  );
}
