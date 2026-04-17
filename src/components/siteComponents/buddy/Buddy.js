import { useState, useEffect, useRef } from "react";
import Locale from "../../../utils/Locale";
import Style from "./Buddy.module.scss";

const LINE_COUNT = 8;
const ROTATE_MS = 7000;
const STORAGE_KEY = "buddyDismissed";

const EXIT_VARIANTS = ["walk", "rocket", "glitch", "teleport", "crab"];
// Set to a specific variant name to force it for debugging; null means random.
const EXIT_VARIANT_OVERRIDE = null;
const pickVariant = () =>
	EXIT_VARIANT_OVERRIDE ||
	EXIT_VARIANTS[Math.floor(Math.random() * EXIT_VARIANTS.length)];

const IDLE_ACTIONS = ["matrix"];
const IDLE_MIN_DELAY_MS = 15000;
const IDLE_MAX_DELAY_MS = 28000;
const IDLE_DURATION_MS = 7000;

const Buddy = () => {
	const [dismissed, setDismissed] = useState(() => localStorage.getItem(STORAGE_KEY) === "true");
	const [variant, setVariant] = useState(null); // null | "walk" | "rocket" | …
	const [idleAction, setIdleAction] = useState(null); // null | "matrix" | …
	const [index, setIndex] = useState(() => Math.floor(Math.random() * LINE_COUNT));
	const [bump, setBump] = useState(0);
	const timerRef = useRef(null);
	const idleTimersRef = useRef([]);

	const advance = () => {
		setIndex((i) => (i + 1) % LINE_COUNT);
		setBump((b) => b + 1);
	};

	useEffect(() => {
		if (dismissed || variant) return;
		timerRef.current = setInterval(advance, ROTATE_MS);
		return () => clearInterval(timerRef.current);
	}, [dismissed, variant]);

	useEffect(() => {
		if (dismissed || variant) return;
		const clearAll = () => {
			idleTimersRef.current.forEach(clearTimeout);
			idleTimersRef.current = [];
		};
		const scheduleNext = () => {
			const delay = IDLE_MIN_DELAY_MS + Math.random() * (IDLE_MAX_DELAY_MS - IDLE_MIN_DELAY_MS);
			const startTimer = setTimeout(() => {
				const action = IDLE_ACTIONS[Math.floor(Math.random() * IDLE_ACTIONS.length)];
				setIdleAction(action);
				const endTimer = setTimeout(() => {
					setIdleAction(null);
					scheduleNext();
				}, IDLE_DURATION_MS);
				idleTimersRef.current.push(endTimer);
			}, delay);
			idleTimersRef.current.push(startTimer);
		};
		scheduleNext();
		return clearAll;
	}, [dismissed, variant]);

	useEffect(() => {
		const onSummon = () => {
			setDismissed(false);
			setVariant(null);
		};
		const onDismiss = () => {
			clearInterval(timerRef.current);
			setDismissed(true);
			setVariant(null);
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
		setVariant(pickVariant());
	};

	const handleLeaveEnd = (e) => {
		// Only fire when the outermost element's own animation ends,
		// not when a descendant's (short) animation ends.
		if (e.target !== e.currentTarget) return;
		localStorage.setItem(STORAGE_KEY, "true");
		setDismissed(true);
		setVariant(null);
	};

	if (dismissed) return null;

	const text = Locale.GetMessages(`Buddy_Line_${index + 1}`);
	const variantClass = variant ? `${Style.Leaving} ${Style[`Leave_${variant}`]}` : "";
	const idleClass = idleAction && !variant ? Style[`Idle_${idleAction}`] : "";

	return (
		<div
			className={`${Style.Buddy} ${variantClass} ${idleClass}`}
			onAnimationEnd={variant ? handleLeaveEnd : undefined}
		>
			<button
				className={Style.Robot}
				onClick={advance}
				aria-label="Next message"
				type="button"
				disabled={!!variant}
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
					<span key={bump} className={Style.Mouth} />
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
					<span className={Style.UpperArm}>
						<span className={Style.Elbow} />
						<span className={Style.Forearm}>
							<span className={Style.Hand} />
						</span>
					</span>
				</span>
				<span className={`${Style.Arm} ${Style.ArmRight}`}>
					<span className={Style.Shoulder} />
					<span className={Style.UpperArm}>
						<span className={Style.Elbow} />
						<span className={Style.Forearm}>
							<span className={Style.Hand} />
						</span>
					</span>
				</span>
				<span className={`${Style.Leg} ${Style.LegLeft}`}>
					<span className={Style.Hip} />
					<span className={Style.Thigh}>
						<span className={Style.Knee} />
						<span className={Style.Shin}>
							<span className={Style.Foot} />
						</span>
					</span>
				</span>
				<span className={`${Style.Leg} ${Style.LegRight}`}>
					<span className={Style.Hip} />
					<span className={Style.Thigh}>
						<span className={Style.Knee} />
						<span className={Style.Shin}>
							<span className={Style.Foot} />
						</span>
					</span>
				</span>
				<span className={Style.HoverShadow} />
				{idleAction === "matrix" && (
					<>
						<span className={Style.Umbrella}>
							<span className={Style.UmbrellaCanopy} />
							<span className={Style.UmbrellaHandle} />
						</span>
						<span className={Style.MatrixRain} aria-hidden>
							{Array.from({ length: 11 }).map((_, i) => (
								<span
									key={i}
									className={Style.RainColumn}
									style={{
										left: `${((i + 0.5) * 100) / 11}%`,
										animationDelay: `${(i * 0.15) % 1.4}s`,
										animationDuration: `${1.5 + (i % 4) * 0.35}s`,
									}}
								>
									{"10110101001011010010".split("").map((c, j) => (
										<span key={j} className={Style.RainChar}>{c}</span>
									))}
								</span>
							))}
						</span>
					</>
				)}
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
