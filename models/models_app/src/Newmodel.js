import React from "react";

function NewModel(props)
{
    const handleUploadClick = () => {
        console.log("upload clicked");
        props.func();
      };

    return (
        <div className="new-model-container">
            <h1>Create a new model</h1>
            <h2>Upload your own trained language model to the ModelGPT marketplace for sale. </h2>
            {/* <button  onClick={handleUploadClick}>  Upload my model  </button> */}
        </div>
    );
}


export default NewModel;
