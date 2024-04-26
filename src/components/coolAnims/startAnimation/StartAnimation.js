import { Component } from "react"
import anim from "./StartAnimation.module.scss"
class StartAnimation extends Component {
	constructor(props) {
		super(props)
		setTimeout(this.props.end
			, 4500);
	}
	render() {
		return (
			<div className={anim.container}>
				<div className={anim.animation01}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={anim.animation02}>
					<div></div>
					<div></div>
				</div>
				<div className={anim.animation03}>
					<div className={anim.circle}>
						<div className={anim.circle_element01}></div>
					</div>
					<div className={anim.circle}>
						<div className={anim.circle_element02}></div>
					</div>
					<div className={anim.circle}>
						<div className={anim.circle_element03}></div>
					</div>
					</div>
					<div className={anim.animation04}>
						<div className={`${anim.line_wrapper} ${anim.line_wrapper01}`}>
							<span className={`${anim.line} ${anim.line01}`}></span>
						</div>
						<div className={anim.rotate45}>
							<div className={`${anim.line_wrapper} ${anim.line_wrapper02}`}>
								<span className={`${anim.line} ${anim.line02}`}></span>
							</div>
						</div>
						<div className={`${anim.line_wrapper} ${anim.line_wrapper03}`}>
							<span className={`${anim.line} ${anim.line03}`}></span>
						</div>
						<div className={anim.rotate135}>
							<div className={`${anim.line_wrapper} ${anim.line_wrapper04}`}>
								<span className={`${anim.line} ${anim.line04}`}></span>
							</div>
						</div>
						<div className={`${anim.line_wrapper} ${anim.line_wrapper05}`}>
							<span className={`${anim.line} ${anim.line05}`}></span>
						</div>
						<div className={anim.rotate135}>
							<div className={`${anim.line_wrapper} ${anim.line_wrapper06}`}>
								<span className={`${anim.line} ${anim.line06}`}></span>
							</div>
						</div>
						<div className={`${anim.line_wrapper} ${anim.line_wrapper07}`}>
							<span className={`${anim.line} ${anim.line07}`}></span>
						</div>
						<div className={anim.rotate45}>
							<div className={`${anim.line_wrapper} ${anim.line_wrapper08}`}>
								<span className={`${anim.line} ${anim.line08}`}></span>
					</div>
				</div>
				</div>
				<div className={anim.animation05}>
					<div className={`${anim.double_wrapper02} ${anim.green02}`}>
					<div className={`${anim.double_wrapper01} ${anim.green01}`}>
					<div className={`${anim.double_block} ${anim.green00}`}></div>
			</div >
						</div >
							<div className={`${anim.double_wrapper02} ${anim.navy02}`}>
							<div className={`${anim.double_wrapper01} ${anim.navy01}`}>
							<div className={`${anim.double_block} ${anim.navy00}`}></div >
							</div >
						</div >
				<div className={`${anim.double_wrapper02} ${anim.yellow02}`}>
				<div className={`${anim.double_wrapper01} ${anim.yellow01}`}>
				<div className={`${anim.double_block} ${anim.yellow00}`}></div >
							</div >
						</div >
							<div className={`${anim.double_wrapper02} ${anim.blue02}`}>
								<div className={`${anim.double_wrapper01} ${anim.blue01}`}>
								<div className={`${anim.double_block} ${anim.blue00}`}></div >
							</div >
						</div >
	<div className={`${anim.double_wrapper02} ${anim.red02}`}>
		<div className={`${anim.double_wrapper01} ${anim.red01}`}>
									<div className={`${anim.double_block} ${anim.red00}`}></div >
							</div >
						</div >
					</div >
				
				<div className={anim.animation06}>
					<div className={anim.rhombus05}>
						<div className={anim.rhombus04}>
							<div className={anim.rhombus03}>
								<div className={anim.rhombus02}>
									<div className={anim.rhombus01}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={anim.animation07}>
					<div className={anim.circle}>
						<div className={anim.circle_element01}></div>
					</div>
					<div className={`${anim.line_wrapper} ${anim.line_wrapper01}`}>
						<span className={`${anim.line} ${anim.line01}`}></span>
					</div >
	<div className={anim.rotate60}>
		<div className={`${anim.line_wrapper} ${anim.line_wrapper02}`}>
		<span className={`${anim.line} ${anim.line02}`}></span>
						</div >
					</div >
	<div className={anim.rotate120}>
		<div className={`${anim.line_wrapper} ${anim.line_wrapper03}`}>
		<span className={`${anim.line} ${anim.line03}`}></span>
						</div >
					</div >
	<div className={`${anim.line_wrapper} ${anim.line_wrapper04}`}>
		<span className={`${anim.line} ${anim.line04}`}></span >
					</div >
	<div className={anim.rotate120}>
		<div className={`${anim.line_wrapper} ${anim.line_wrapper05}`}>
		<span className={`${anim.line} ${anim.line05}`}></span>
						</div >
					</div >
	<div className={anim.rotate60}>
								<div className={`${anim.line_wrapper} ${anim.line_wrapper06}`}>
								<span className={`${anim.line} ${anim.line06}`}></span>
						</div >
					</div >
				</div >
	<div className={anim.animation08}>
		<div ></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
			</div >
		)
	}
}
export default StartAnimation