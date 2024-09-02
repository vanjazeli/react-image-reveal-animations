import FadeWrap from './components/FadeWrap';

export default function App() {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-4">
				<FadeWrap revealElement={<img src="wunder-wasabi.jpg" />}>
					<button className="underline text-slate-200 transition-all hover:opacity-60 hover:text-purple-600" type="button">
						Hover me
					</button>
				</FadeWrap>
			</div>
		</div>
	);
}
