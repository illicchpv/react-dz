import './BodySection.css';
function BodySection({children}) {
  return (
    <main className="body-section">
      <section className="body-section__content">
        {children}
      </section>
    </main>
  );
}

export default BodySection;