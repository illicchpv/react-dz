import styles from './LoadingPage.module.css';
import cn from 'classnames';

export interface ILoadingPageProps {
  title?: string;
}
function LoadingPage({ title = 'Page Loading...' }: ILoadingPageProps) {

	return (
		<div className={cn(styles.loadingPage)}>
			{title}
		</div>
	);
}
export default LoadingPage;