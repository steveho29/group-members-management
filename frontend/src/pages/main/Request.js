import { Formik } from 'formik';

const getDateFormat = (data) => {
    const date = new Date(data);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDate = yyyy + '-' + mm + '-' + dd;
    return formattedDate;
}

export const GroupForm = ({ onClick: OnClick = () => { }, onCloseForm: OnCloseForm = () => { }, data: Data = {} }) => {
    if (Object.keys(Data).length > 0) {
        return (
            // <Formik
            //     initialValues={{ message: Data.message.split(': ')[1]}}
            //     validate={values => {
            //         const errors = {};
            //         if (!values.type)
            //             errors.type = 'Required';
            //         if (!values.message)
            //             errors.message = 'Required';
            //         return errors;
            //     }}
            //     onSubmit={(values, { setSubmitting }) => {
            //         // setSubmitting(false);
            //         values.message = values.type + ": " + values.message;
            //         values._id = Data._id;
            //         delete values.type;
            //         delete values.start;
            //         OnClick(values);
            //         OnCloseForm();
            //     }}
            // >
            //     {({
            //         values,
            //         errors,
            //         touched,
            //         handleChange,
            //         handleBlur,
            //         handleSubmit,
            //         isSubmitting,
            //     }) => (
            //         <form onSubmit={handleSubmit}>
            //             <div className="card">
            //                 <div className="card-body">
            //                     <h4 className="card-title">Group Information</h4>
            //                     <div className="row form-row">
            //                         <div className="col-md-6">
            //                             <div className="form-group">
            //                                 <label>Name</label>
            //                                 <input type="text" className="form-control" />
            //                             </div>
            //                         </div>
            //                         <div className="col-md-6">
            //                             <div className="form-group">
            //                                 <label>Type</label>
            //                                 <input type="text" className="form-control" readOnly value="IT_SUPPORT" />
            //                             </div>
            //                         </div>
            //                         <div className="col-md-6">
            //                             <div className="form-group">
            //                                 <label>Date</label>
            //                                 <input type="text" className="form-control" readOnly value={getDateFormat(Data.start)} />
            //                             </div>
            //                         </div>
            //                         <div className="col-md-6">
            //                             <div className="form-group">
            //                                 <label>Support Type* {errors.type && touched.type ? <strong className='text-danger'>({errors.type})</strong> : ""}</label>
            //                                 <select
            //                                     name="type"
            //                                     onChange={handleChange}
            //                                     onBlur={handleBlur}
            //                                     value={values.type}
            //                                     className="form-control"
            //                                 >
            //                                     {
            //                                         ["New Laptop", "Fix Laptop", "Need Account", "Need Photocopy"].map((ele, index) => <option value={ele} key={index}>{ele}</option>)
            //                                     }
            //                                     <option selected="selected" disabled hidden></option>
            //                                 </select>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="card">
            //                 <div className="card-body">
            //                     <h4 className="card-title">Reason* {errors.message && touched.message ? <strong className='text-danger'>({errors.message})</strong> : ""}</h4>
            //                     <div className="form-group mb-0">
            //                         <textarea
            //                             rows="5"
            //                             name="message"
            //                             onChange={handleChange}
            //                             onBlur={handleBlur}
            //                             value={values.message}
            //                             className="form-control"
            //                         />
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="submit-section text-center mb-3">
            //                 <button type="submit"  className="btn btn-primary submit-btn">
            //                     Submit
            //                 </button>
            //             </div>

            //         </form>
            //     )}
            // </Formik>
            <></>
        )
    }
    else {
        return (
            <Formik
                initialValues={{ name: '', description: '', co_owner: '', avatar: null }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values)
                    OnClick(values);
                    OnCloseForm();
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Group Information</h4>
                                <div className="row form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" onChange={handleChange} name="name" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" onChange={handleChange} name="description" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Co-Owner Email</label>
                                            <input type="email" onChange={handleChange} name="co_owner" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Avatar</label>
                                            <input type="file" name="avatar" onChange={(event) => setFieldValue('avatar', event.currentTarget.files[0])} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="submit-section text-center mb-3">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
                               Submit 
                            </button>
                        </div>

                    </form>
                )}
            </Formik>
        )
    }
}
