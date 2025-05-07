import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ cards }) {
  const getRandomIcon = () => {
    const icons = [
      "feature-icon1-1",
      "feature-icon1-2",
      "feature-icon1-3",
      "feature-icon1-4",
      "feature-icon1-5",
      "feature-icon1-6",
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return `/assets/img/icon/${icons[randomIndex]}.svg`;
  };

  return (
    <div className="row gy-4">
      {cards?.map((card, index) => (
        <div key={index} className="col-md-6">
          <div className="feature-card">
            <div className="feature-card-icon">
              <Image width={40} height={40} src={getRandomIcon()} alt="icon" />
            </div>
            <h4 className="feature-card-title">
              <Link scroll={false} href={card.link || "#"}>
                {card.title}
              </Link>
            </h4>
            <p className="feature-card-text mb-n2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
