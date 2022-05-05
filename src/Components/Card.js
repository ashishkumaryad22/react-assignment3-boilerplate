import React from "react";
// import { writeJsonFile } from 'write-json-file';

const Card = (props) => {
  var myObjData = [];
  let { title, description, imageUrl, newsUrl, author, date } = props;
  const readLaterHandler = () => {
    let myObj = {
      newsUrl: newsUrl,
      description: description,
    };
    myObjData.push(myObj);
    let json = JSON.stringify(myObjData);
    console.log(json);

    // writeJsonFile('C:\Users\Ashis\Desktop\React_boilerplate\react-assignment1-boilerplate\src\components\db.json', json);
  };

  return (
    <React.Fragment>
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 42)}...</h5>
            <p className="card-text">{description.slice(0, 60)}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unKnown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              onClick={readLaterHandler}
              className="btn btn-sm btn-primary"
            >
              Read Later
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
