import styles from './ErrorPage.module.css';
import type { ErrorPageProps } from './ErrorPage.props';
import cn from 'classnames';

function ErrorPage({ className, ...props }: ErrorPageProps) {

	return (
		<div className={cn(styles.errorPage, className)} {...props}>
      ErrorPage
		</div>
	);
}
export default ErrorPage;