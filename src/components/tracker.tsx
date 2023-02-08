import styles from './tracker.module.css';
export default function Tracker() {
	return (
		<div className={styles.trackerContainer__tracker}>
			<div>Time tracker</div>
			<div>00:00:00</div>
		</div>
	);
}
