import uuid from "react-uuid";
const TabContent = ({ url, duration, label, position, content }) => {
  console.log(url);
  return (
    <div className="tab-content">
      <h3 className="tab-content-header">
        {position}{" "}
        <span className="tab-content-company">
          @{" "}
          <a href={url} target="_blank" rel="noreferrer">
            {" "}
            {label}
          </a>
        </span>
      </h3>
      <p className="tab-content-duration">{duration}</p>
      <div>
        <ul className="tab-content-list">
          {content.map((val) => (
            <li key={uuid()}>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabContent;
