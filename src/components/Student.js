import { useState } from "react";

function Student({
  photo,
  names,
  username,
  dob,
  certifications,
  codewars,
  cohort,
}) {
  const [showMore, SetShowMore] = useState("Show More...");

  const formatDate = (dob) => {
    let newDate = dob.split("/");
    const month = new Date();
    month.setMonth(newDate[0] - 1);
    newDate[0] = month.toLocaleString([], { month: "long" });
    newDate[1] += ",";

    return newDate.join(" ");
  };

  return (
    <div className="Student">
      <img src={photo} height="120px"></img>
      <section>
        <h3>
          {names.preferredName} {names.preferredName.charAt(0) + "."}{" "}
          {names.surname}
        </h3>
        <p>{username}</p>
        <p>
          <span id="birthday">Birthday: </span>
          {formatDate(dob)}
        </p>
        <br></br>
        <button
          className="more"
          onClick={() =>
            showMore.includes("More")
              ? SetShowMore("Show Less...")
              : SetShowMore("Show More...")
          }
        >
          {showMore}
        </button>
      </section>
      <section className="on-track">
        {Object.values(certifications).includes(false) ||
        codewars.current.total < 601 ? (
          <></>
        ) : (
          <>On Track to Graduate</>
        )}
      </section>
    </div>
  );
}

export default Student;
