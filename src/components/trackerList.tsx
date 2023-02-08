import styles from './tracker.module.css';
import Tracker from './tracker';
import TrackerForm from './trackForm';
export default function TrackerList({
	setFormVisible,
	formVisible,
}: {
	setFormVisible: (visible: boolean) => void;
	formVisible: boolean;
}) {
	console.log({ formVisible });
	if (formVisible) {
		return (
			<div>
				<div
					className={styles.backButton + ' mb'}
					onClick={() => setFormVisible(false)}>
					Go Back
				</div>
				<TrackerForm></TrackerForm>
			</div>
		);
	}
	return (
		<>
			<div className={styles.trackerContainer__title + ' mb'}>
				<div>Tracker</div>
				<div
					className={styles.trackerContainer__createButton}
					onClick={() => setFormVisible(true)}>
					Create
				</div>
			</div>
			<div className={styles.trackerContainer__trackerList}>
				<Tracker></Tracker>
			</div>
		</>
	);
}
