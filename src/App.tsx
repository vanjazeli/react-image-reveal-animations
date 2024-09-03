import FadeWrap from './components/FadeWrap';

export default function App() {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-4 py-8 lg:py-16">
				<div className="flex flex-col items-center">
					<h3 className="text-slate-200 text-2xl md:text-3xl font-bold mb-2">Fade</h3>
					<ul className="flex flex-col">
						<li>
							<FadeWrap revealElement={<img src="wunder-wasabi-1.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</FadeWrap>
						</li>
						<li>
							<FadeWrap revealElement={<img src="wunder-wasabi-2.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</FadeWrap>
						</li>
						<li>
							<FadeWrap revealElement={<img src="wunder-wasabi-3.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</FadeWrap>
						</li>
						<li>
							<FadeWrap revealElement={<img src="wunder-wasabi-4.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</FadeWrap>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
