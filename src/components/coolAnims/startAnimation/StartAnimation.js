import { Component } from "react"
import "./StartAnimation.module.scss"
class StartAnimation extends Component {
	constructor(props) {
		super(props)
		setTimeout(this.props.end
		, 4500);
	}
	render() {
		let homePageColor = { backgroundColor:this.props.backCol }
		return (
			<div  className={"container"}>
				<div className={"animation01"}>
					<div style={homePageColor}></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={"animation02"}>
					<div></div>
					<div></div>
				</div>
				<div className={"animation03"}>
					<div className={"circle"}>
						<div className={"circle_element01"}></div>
					</div>
					<div className={"circle"}>
						<div className={"circle_element02"}></div>
					</div>
					<div className={"circle"}>
						<div className={"circle_element03"}></div>
					</div>
					<div className={"animation04"}>
						<div className={"line_wrapper line_wrapper01"}>
							<span className={"line line01"}></span>
						</div>
						<div className={"rotate45"}>
							<div className={"line_wrapper line_wrapper02"}>
								<span className={"line line02"}></span>
							</div>
						</div>
						<div className={"line_wrapper line_wrapper03"}>
							<span className={"line line03"}></span>
						</div>
						<div className={"rotate135"}>
							<div className={"line_wrapper line_wrapper04"}>
								<span className={"line line04"}></span>
							</div>
						</div>
						<div className={"line_wrapper line_wrapper05"}>
							<span className={"line line05"}></span>
						</div>
						<div className={"rotate-135"}>
							<div className={"line_wrapper line_wrapper06"}>
								<span className={"line line06"}></span>
							</div>
						</div>
						<div className={"line_wrapper line_wrapper07"}>
							<span className={"line line07"}></span>
						</div>
						<div className={"rotate-45"}>
							<div className={"line_wrapper line_wrapper08"}>
								<span className={"line line08"}></span>
							</div>
						</div>
					</div>
					<div className={"animation05"}>
						<div className={"double_wrapper02 green02"}>
							<div className={"double_wrapper01 green01"}>
								<div className={"double_block green00"}></div>
							</div>
						</div>
						<div className={"double_wrapper02 navy02"}>
							<div className={"double_wrapper01 navy01"}>
								<div className={"double_block navy00"}></div>
							</div>
						</div>
						<div className={"double_wrapper02 yellow02"}>
							<div className={"double_wrapper01 yellow01"}>
								<div className={"double_block yellow00"}></div>
							</div>
						</div>
						<div className={"double_wrapper02 blue02"}>
							<div className={"double_wrapper01 blue01"}>
								<div className={"double_block blue00"}></div>
							</div>
						</div>
						<div className={"double_wrapper02 red02"}>
							<div className={"double_wrapper01 red01"}>
								<div className={"double_block red00"}></div>
							</div>
						</div>
					</div>
				</div>
				<div className={"animation06"}>
					<div className={"rhombus05"}>
						<div className={"rhombus04"}>
							<div className={"rhombus03"}>
								<div className={"rhombus02"}>
									<div className={"rhombus01"}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={"animation07"}>
					<div className={"circle"}>
						<div className={"circle_element01"}></div>
					</div>
					<div className={"line_wrapper line_wrapper01"}>
						<span className={"line line01"}></span>
					</div>
					<div className={"rotate60"}>
						<div className={"line_wrapper line_wrapper02"}>
							<span className={"line line02"}></span>
						</div>
					</div>
					<div className={"rotate120"}>
						<div className={"line_wrapper line_wrapper03"}>
							<span className={"line line03"}></span>
						</div>
					</div>
					<div className={"line_wrapper line_wrapper04"}>
						<span className={"line line04"}></span>
					</div>
					<div className={"rotate-120"}>
						<div className={"line_wrapper line_wrapper05"}>
							<span className={"line line05"}></span>
						</div>
					</div>
					<div className={"rotate-60"}>
						<div className={"line_wrapper line_wrapper06"}>
							<span className={"line line06"}></span>
						</div>
					</div>
				</div>
				<div className={"animation08"}>
					<div style={homePageColor }></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}
}
export default StartAnimation