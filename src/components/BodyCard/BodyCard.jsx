import './BodyCard.css';

function BodyCard({card = null}) {
  if (!card) return null;

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={`./card-img/${card.img}`} alt={`постер ${card.name}`} />

        <div className="card-rating">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.15333 2.34L10.3267 4.68667C10.4867 5.01334 10.9133 5.32667 11.2733 5.38667L13.4 5.74C14.76 5.96667 15.08 6.95334 14.1 7.92667L12.4467 9.58C12.1667 9.86 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86 3.55333 9.58L1.9 7.92667C0.926667 6.95334 1.24 5.96667 2.6 5.74L4.72667 5.38667C5.08 5.32667 5.50667 5.01334 5.66667 4.68667L6.84 2.34C7.48 1.06667 8.52 1.06667 9.15333 2.34Z"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {card.rating}
        </div>
      </div>

      <div className="card-info">
        <h3 className='card-name'>{card.name}</h3>

        <div className={`card-selected-mark ${card.selected && 'selected'}`}>
          {card.selected
            ? <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16.0909V11.0975C21 6.80891 21 4.6646 19.682 3.3323C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.3323C3 4.6646 3 6.80891 3 11.0975V16.0909C3 19.1875 3 20.7358 3.73411 21.4123C4.08421 21.735 4.52615 21.9377 4.99692 21.9915C5.98402 22.1045 7.13673 21.0849 9.44216 19.0458C10.4612 18.1445 10.9708 17.6938 11.5603 17.5751C11.8506 17.5166 12.1494 17.5166 12.4397 17.5751C13.0292 17.6938 13.5388 18.1445 14.5578 19.0458C16.8633 21.0849 18.016 22.1045 19.0031 21.9915C19.4739 21.9377 19.9158 21.735 20.2659 21.4123C21 20.7358 21 19.1875 21 16.0909Z"
                  stroke="currentColor" strokeWidth="2" />
                <path d="M15 6H9"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              В избраном
            </>
            : <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48001 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.48001 9.54997"
                  stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              В избранное
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default BodyCard;