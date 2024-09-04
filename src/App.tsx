import BoringWrap from './components/BoringWrap';
import FadeWrap from './components/FadeWrap';
import SlideWrap from './components/SlideWrap';
import UnfoldWrap from './components/UnfoldWrap';

export default function App() {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-4 py-8 lg:py-16">
				<div className="flex flex-col items-center">
					<h3 className="text-slate-200 text-2xl md:text-3xl font-bold mb-2">Boring</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<BoringWrap revealElement={<img src="wunder-wasabi-1.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</BoringWrap>
						</li>
						<li>
							<BoringWrap revealElement={<img src="wunder-wasabi-2.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</BoringWrap>
						</li>
						<li>
							<BoringWrap revealElement={<img src="wunder-wasabi-3.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</BoringWrap>
						</li>
						<li>
							<BoringWrap revealElement={<img src="wunder-wasabi-4.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</BoringWrap>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center">
					<h3 className="text-slate-200 text-2xl md:text-3xl font-bold mb-2">Fade</h3>
					<ul className="flex flex-col gap-2">
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
				<div className="flex flex-col items-center">
					<h3 className="text-slate-200 text-2xl md:text-3xl font-bold mb-2">Unfold</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<UnfoldWrap revealElement={<img src="wunder-wasabi-1.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</UnfoldWrap>
						</li>
						<li>
							<UnfoldWrap revealElement={<img src="wunder-wasabi-2.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</UnfoldWrap>
						</li>
						<li>
							<UnfoldWrap revealElement={<img src="wunder-wasabi-3.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</UnfoldWrap>
						</li>
						<li>
							<UnfoldWrap revealElement={<img src="wunder-wasabi-4.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</UnfoldWrap>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center">
					<h3 className="text-slate-200 text-2xl md:text-3xl font-bold mb-2">Slide</h3>
					<ul className="flex flex-col gap-2">
						<li>
							<SlideWrap revealElement={<img src="wunder-wasabi-1.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</SlideWrap>
						</li>
						<li>
							<SlideWrap revealElement={<img src="wunder-wasabi-2.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</SlideWrap>
						</li>
						<li>
							<SlideWrap revealElement={<img src="wunder-wasabi-3.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</SlideWrap>
						</li>
						<li>
							<SlideWrap revealElement={<img src="wunder-wasabi-4.jpg" />}>
								<button className="underline text-slate-400 transition-colors hover:text-cyan-400" type="button">
									Hover me
								</button>
							</SlideWrap>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
