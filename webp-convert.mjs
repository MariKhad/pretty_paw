import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(['src/img/career/*.{jpg,png}'], {
	destination: 'src/img/career',
	plugins: [
		imageminWebp({ quality: 70 }),
	]
});

await imagemin(['src/img/about/*.{jpg,png}'], {
	destination: 'src/img/about',
	plugins: [
		imageminWebp({ quality: 70 }),
	]
});

await imagemin(['src/img/hero/*.{jpg,png}'], {
	destination: 'src/img/hero',
	plugins: [
		imageminWebp({ quality: 70 }),
	]
});



console.log('Конвертация в webp завершена');