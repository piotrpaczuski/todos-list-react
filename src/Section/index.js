import "./style.css";

const Section = ({title, extraContent, body}) => (
    <section className="section">
        <div className="section__header section__header--tasksList">
            <h2>{title}</h2>
            {extraContent}
        </div>
        {body}
    </section>
);

export default Section;