import styles from './tracker.module.css';
export default function TrackerForm() {
	return (
		<div className={styles.trackerForm}>
			<label className={styles.trackerForm__label + ' mb'}>Name</label>
			<input className={styles.trackerForm__input + ' mb'} type='text' />
			<label className={styles.trackerForm__label + ' mb'}>Unit</label>
			<select className={styles.trackerForm__input + ' mb-2x'}>
				<option value='count'>Count</option>
				<option value='pound'>Pound</option>
				<option value='time'>Time</option>
			</select>
			<div className={styles.trackerForm__submitButton}>Create</div>
		</div>
	);
}
