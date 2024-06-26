import { Component } from "react";
import Locale from "../../../../utils/Locale";
import TextStyle from "../../../../scss/Texts.module.scss";
import styles from "./CompetenceBar.module.scss";

class CompetenceBar extends Component {
  render() {
    let competence = [];
    let colorClass;
    let mc = this.props.maxCompetence;
    let cl = this.props.competenceLevel;
    let cr = cl / mc;
      let levelText;
   
    if (cr <= 0.3) {
      colorClass = styles.BasicLevel;
        levelText = Locale.GetMessages("basic_level");
    } else if (cr <= 0.5) {
      colorClass = styles.MediumLevel;
        levelText = Locale.GetMessages("medium_level");
    } else if (cr <= 0.8) {
      colorClass = styles.GoodLevel;
        levelText = Locale.GetMessages("good_level");
    } else {
      colorClass = styles.ExcellentLevel;
        levelText = Locale.GetMessages("excellent_level");
    }

    for (let i = 0; i < mc; i++) {
      if (i < cl) {
        competence.push(
          <div key={i} className={styles.Level + " " + colorClass}></div>
        );
      } else {
        competence.push(
          <div key={i} className={styles.Level + " " + styles.emptyLevel}></div>
        );
      }
    }

    return (
        <div className={styles.CompetenceCard}>
            <p className={TextStyle.NormalText } >{this.props.competence}</p>
        <div className={styles.CompetenceWrapper}>
                <div className={styles.CompetenceContainer}>{competence}</div>
                <p className={[styles.Competence, TextStyle.SmallText]}>
            {this.props.text ? this.props.text : levelText}
          </p>
        </div>
      </div>
    );
  }
}

export default CompetenceBar;
