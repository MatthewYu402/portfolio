interface SectionHeaderProps {
  number: string;
  title: string;
  id: string;
}

export function SectionHeader({ number, title, id }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-header__num" aria-hidden="true">
        {number}
      </span>
      <h2 id={id} className="section-header__title display">
        {title}
      </h2>
      <div className="section-header__rule" aria-hidden="true" />
    </header>
  );
}
