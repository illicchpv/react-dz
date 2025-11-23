import type { ICard } from '../../constant';
import s from './SelectButton.module.css';
import cn from 'classnames';

export interface ISelectButton extends React.HTMLAttributes<HTMLDivElement> {
  card: ICard | null;
  add: (e: React.MouseEvent) => void
}
function SelectButton({ card, add }: ISelectButton) {

  if(!card) return null;

  return (
    <div className={cn(s.cardSelectedMark, { [s.selected]: card.selected })}>
      {card.selected
        ? <>
          <button className={s.selectButton} title='убрать из избранного'
            onClick={add}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16.0909V11.0975C21 6.80891 21 4.6646 19.682 3.3323C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.3323C3 4.6646 3 6.80891 3 11.0975V16.0909C3 19.1875 3 20.7358 3.73411 21.4123C4.08421 21.735 4.52615 21.9377 4.99692 21.9915C5.98402 22.1045 7.13673 21.0849 9.44216 19.0458C10.4612 18.1445 10.9708 17.6938 11.5603 17.5751C11.8506 17.5166 12.1494 17.5166 12.4397 17.5751C13.0292 17.6938 13.5388 18.1445 14.5578 19.0458C16.8633 21.0849 18.016 22.1045 19.0031 21.9915C19.4739 21.9377 19.9158 21.735 20.2659 21.4123C21 20.7358 21 19.1875 21 16.0909Z"
                stroke="currentColor" strokeWidth="2" />
              <path d="M15 6H9"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            В избраном
          </button>
        </>
        : <>
          <button className={s.selectButton} title='добавить в избранное'
            onClick={add}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.48001 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.48001 9.54997"
                stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            В избранное
          </button>
        </>
      }
    </div>
  )
}

export default SelectButton