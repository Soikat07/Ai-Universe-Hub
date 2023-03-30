import React from 'react';

const Modal = (props) => {
  
  const {
    description,
    image_link,
    features,
    integrations,
    input_output_examples,
  } = props.singleData;
  
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100">
            <div className="card-body border border-error rounded-xl m-2">
              <h2 className="card-title">
                {description ? description : 'Not Found'}
              </h2>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className="text-xl font-bold">Features</h1>
                  {Object.values(features || {}).map(singleFeature => (
                    <li>{singleFeature.feature_name}</li>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl font-bold">Integrations</h1>
                  {integrations
                    ? integrations.map(list => <li>{list}</li>)
                    : 'No Data Found'}
                </div>
              </div>
            </div>
            {/* left side of the modal */}
            <div className="w-full h-3/4 border border-error rounded-xl p-5">
              <div>
                <figure className="w-96">
                  <img
                    className="rounded-xl"
                    src={image_link && image_link[0]}
                    alt=""
                  />
                </figure>
                <h1 className="text-xl font-bold mt-2 text-center">
                  {input_output_examples && input_output_examples[0].input}
                </h1>
                <h1 className="text-center">
                  {input_output_examples && input_output_examples[0].output}
                </h1>
              </div>
            </div>
          </div>
        </div>
          {/* modal close button */}
        <div className="modal-action relative">
          <label
            htmlFor="my-modal-5"
            className="btn btn-circle bg-primary absolute bottom-44 start-44"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Modal;