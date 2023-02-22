import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import "./RegisterEvent.css";

const RegisterEvent = () => {
  const [post, setPost] = useState({
    project_name: "",
    description: "",
    location: "",
    date: "",
    timing: "",
    type_of_activity: "",
    hours_required: "",
    images: "",
  });
  const PostData = async (e) => {
    e.preventDefault();

    const {
      project_name,
      description,
      location,
      date,
      timing,
      type_of_activity,
      hours_required,
      images,
    } = post;

    const res = await fetch("/uploadphoto", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        project_name,
        description,
        location,
        date,
        timing,
        type_of_activity,
        hours_required,
        images,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");

      console.log("Invalid Registration");
    } else {
      window.alert("Post Successful");

      console.log("Post Successful");

      //history.pushState("")
    }
  };

  return (
    <>
      <div className="wrapper">
        <form method="POST" className="form-right">
          <h2 className="text-uppercase">Register an Event Here</h2>
          <div className="col-sm-6 mb-3">
            <label>Project Name</label>
            <input
              type="text"
              name="project_name"
              id="name"
              autoComplete="off"
              value={post.name}
              onChange={(e) =>
                setPost({ ...post, project_name: e.target.value })
              }
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label for="message" className="ps-3 fw-bold mb-2">
              Description
            </label>
            <textarea
              id="message"
              className="form-control"
              cols="30"
              rows="10"
              name="description"
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="col-sm-6 mb-3">
            <label>Location</label>
            <input
              type="text"
              name="location"
              id="location"
              autoComplete="off"
              value={post.location}
              onChange={(e) => setPost({ ...post, location: e.target.value })}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Date</label>
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              value={post.date}
              onChange={(e) => setPost({ ...post, date: e.target.value })}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Timing</label>
            <input
              type="time"
              name="timing"
              id="timing"
              autoComplete="off"
              value={post.timing}
              onChange={(e) => setPost({ ...post, timing: e.target.value })}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Type of Activity</label>
            <input
              type="text"
              name="type_of_activity"
              id="type_of_activity"
              autoComplete="off"
              value={post.timing}
              onChange={(e) =>
                setPost({ ...post, type_of_activity: e.target.value })
              }
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Hours Required</label>
            <input
              type="number"
              name="hours_required"
              id="hours_required"
              autoComplete="off"
              value={post.hours_required}
              onChange={(e) =>
                setPost({ ...post, hours_required: e.target.value })
              }
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Upload Photo</label>
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPost({ ...post, images: base64 })}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label>Upload Photo</label>
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Submit"
              onClick={PostData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterEvent;
