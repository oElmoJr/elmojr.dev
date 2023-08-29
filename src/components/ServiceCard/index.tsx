import './styles.css';

interface cardProps {
  cardImage: any;
  title: string;
  description: string;
}

export default function ServiceCard({
  cardImage,
  title,
  description,
}: cardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={cardImage} alt="" />
      </div>
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
    </div>
  );
}
