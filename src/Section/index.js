import "./style.css";

const Section = ({title, extraContent, body}) => (
    <section className="section">
        <div className="section__secondHeader section__secondHeader--tasksList">
            <h2>{title}</h2>
            {extraContent}
        </div>
        {body}
    </section>
);

export default Section;