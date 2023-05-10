export function videoBackgroundInit() {

	const videoBg = document.querySelectorAll('.video-bg');
	const videoSources = `
		<source src="video/video.webm" type="video/webm">
		<source src="video/video.mp4" type="video/mp4">
`;

	videoBg.forEach((videoBlock) => {
		videoBlock.innerHTML = videoSources;
	})
}

