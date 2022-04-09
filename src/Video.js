import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./videos/tiktok.mp4";

function Video(props, ref) {
	const videoRef = useRef();

	useImperativeHandle(ref, () => ({
		// se tra ra cho component cha cai object trong callback
		play() {
			videoRef.current.play();
		},
		pause() {
			videoRef.current.pause();
		},
	}));

	return <video src={video1} width={280} ref={videoRef}></video>;
}

export default forwardRef(Video);

// Component cha muon su dung ref cua component con thi dung forward ref
