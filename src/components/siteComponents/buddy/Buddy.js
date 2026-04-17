import { useState, useEffect, useRef } from "react";
import Locale from "../../../utils/Locale";
import Style from "./Buddy.module.scss";

const LINE_COUNT = 8;
const ROTATE_MS = 7000;
const STORAGE_KEY = "buddyDismissed";

const Buddy = () => {
	const [dismissed, setDismissed] = useState(() => localStorage.getItem(STORAGE_KEY) === "true");
	const [leaving, setLeaving] = useState(false);
	const [index, setIndex] = useState(() => Math.floor(Math.random() * LINE_COUNT));
	const [bump, setBump] = useState(0);
	const timerRef = useRef(null);

	const advance = () => {
		setIndex((i) => (i + 1) % LINE_COUNT);
		setBump((b) => b + 1);
	};

	useEffect(() => {
		if (dismissed || leaving) return;
		timerRef.current = setInterval(advance, ROTATE_MS);
		return () => clearInterval(timerRef.current);
	}, [dismissed, leaving]);

	useEffect(() => {
		const onSummon = () => {
			setDismissed(false);
			setLeaving(false);
		};
		const onDismiss = () => {
			clearInterval(timerRef.current);
			setDismissed(true);
			setLeaving(false);
		};
		window.addEventListener("buddy:summon", onSummon);
		window.addEventListener("buddy:dismiss", onDismiss);
		return () => {
			window.removeEventListener("buddy:summon", onSummon);
			window.removeEventListener("buddy:dismiss", onDismiss);
		};
	}, []);

	const handleClose = (e) => {
		e.stopPropagation();
		clearInterval(timerRef.current);
		setLeaving(true);
	};

	const handleLeaveEnd = () => {
		localStorage.setItem(STORAGE_KEY, "true");
		setDismissed(true);
	};

	if (dismissed) return null;

	const text = Locale.GetMessages(`Buddy_Line_${index + 1}`);

	return (
		<div
			className={`${Style.Buddy} ${leaving ? Style.Leaving : ""}`}
			onAnimationEnd={leaving ? handleLeaveEnd : undefined}
		>
			<button
				className={Style.Robot}
				onClick={advance}
				aria-label="Next message"
				type="button"
				disabled={leaving}
			>
				<span className={Style.Antenna}>
					<span className={Style.AntennaStalk} />
					<span className={Style.AntennaBall} />
					<span className={`${Style.Spark} ${Style.Spark1}`} />
					<span className={`${Style.Spark} ${Style.Spark2}`} />
				</span>
				<span className={`${Style.Ear} ${Style.EarLeft}`}>
					<span className={Style.EarStub} />
				</span>
				<span className={`${Style.Ear} ${Style.EarRight}`}>
					<span className={Style.EarStub} />
				</span>
				<span className={Style.Head}>
					<span className={Style.Brow} />
					<span className={Style.Face}>
						<span className={Style.Eye}><span className={Style.Pupil} /></span>
						<span className={Style.Eye}><span className={Style.Pupil} /></span>
					</span>
					<span className={Style.Mouth} />
				</span>
				<span className={Style.Neck} />
				<span className={Style.Body}>
					<span className={Style.BodyShade} />
					<span className={Style.Screen}>
						<span className={Style.ScreenDot} />
						<span className={Style.ScreenDot} />
					</span>
					<span className={Style.Grill} />
				</span>
				<span className={`${Style.Arm} ${Style.ArmLeft}`}>
					<span className={Style.Shoulder} />
					<span className={Style.UpperArm} />
					<span className={Style.Elbow} />
					<span className={Style.Forearm} />
					<span className={Style.Hand} />
				</span>
				<span className={`${Style.Arm} ${Style.ArmRight}`}>
					<span className={Style.Shoulder} />
					<span className={Style.UpperArm} />
					<span className={Style.Elbow} />
					<span className={Style.Forearm} />
					<span className={Style.Hand} />
				</span>
				<span className={`${Style.Leg} ${Style.LegLeft}`}>
					<span className={Style.Hip} />
					<span className={Style.Thigh} />
					<span className={Style.Knee} />
					<span className={Style.Shin} />
					<span className={Style.Foot} />
				</span>
				<span className={`${Style.Leg} ${Style.LegRight}`}>
					<span className={Style.Hip} />
					<span className={Style.Thigh} />
					<span className={Style.Knee} />
					<span className={Style.Shin} />
					<span className={Style.Foot} />
				</span>
				<span className={Style.HoverShadow} />
			</button>
			<div key={bump} className={Style.Bubble}>
				<button
					className={Style.Close}
					onClick={handleClose}
					aria-label="Dismiss buddy"
					type="button"
				>
					×
				</button>
				<p className={Style.BubbleText}>{text}</p>
			</div>
		</div>
	);
};

export default Buddy;
