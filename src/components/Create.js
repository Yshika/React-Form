import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Preview from "./Preview"
import './Create.css'

function Create(props) {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const [preview, setPreview] = useState(false);
    const [user, setUser] = useState([]);
    const [baseImage, setBaseImage] = useState("");

    const uploadImage = async (data) => {
        const file = data.image[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const onSubmit = (data) => {

        console.log(data.C,data.Cplus,data.JavaScript);
        uploadImage(data);
        setUser(data);
        setPreview(!preview);

    };

    const onCancel = () => {
        //console.log("Reset Form");

        setPreview(!preview);
    }


    return (
        <div >
            <div style={{margin:"0 auto", textAlign:"left", width:"max-content"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-3">
                        <label className="mr-2 font-weight-bold">Name </label>
                        <input name="name" type="text" placeholder="John Doe" ref={register({ required: true, minLength: 2, maxLength: 30, pattern: /^[A-Za-z ]+$/ })} />
                        <br />
                        <small style={{ color: "red" }} >
                            {errors.name && "Valid Name is required."}
                        </small>

                    </div>

                    <div className="my-3">
                        <label className="font-weight-bold">Gender</label><br />
                        <input type="radio" id="Male" name="gender" value="Male" ref={register({ required: true })} />
                        <label htmlFor="Male" className="mx-2">Male</label>
                        <input type="radio" id="Female" name="gender" value="Female" ref={register({ required: true })} />
                        <label htmlFor="Female" className="mx-2">Female</label>
                        <input type="radio" id="other" name="gender" value="other" ref={register({ required: true })} />
                        <label htmlFor="other" className="mx-2">Other</label>
                        <br />
                        <small style={{ color: "red" }}>
                            {errors.gender && "Gender required."}
                        </small>

                    </div>

                    <div className="my-3">
                        <label className="mr-2 font-weight-bold">Email </label>
                        <input name="email" placeholder="abc@xyz.com" ref={register({ required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        <br />
                        <small style={{ color: "red" }}>
                            {errors.email && "Valid Email Id required."}
                        </small>

                    </div>

                    <div className="my-3">
                        <label className="mr-2 font-weight-bold">Mobile Number </label>
                        <input name="mno" placeholder="9876543210" ref={register({ required: true, pattern: /[789][0-9]{9}/ })} />
                        <br />
                        <small style={{ color: "red" }}>
                            {errors.mno && "Valid Mobile Number required."}
                        </small>

                    </div>

                    <div className="my-3">
                        <label htmlFor="category" className="mr-2 font-weight-bold">Category</label>

                        <select name="category" id="category" ref={register({ required: true })}>
                            <option value="" selected disabled>Select</option>
                            <option value="General">General</option>
                            <option value="SC/ST">SC/ST</option>
                            <option value="OBC">OBC</option>
                        </select>
                        <br />
                        <small style={{ color: "red" }}>
                            {errors.category && "Category required."}
                        </small>

                    </div>

                    <div className="my-3">
                        <label className="font-weight-bold">Technology</label><br />
                        <input type="checkbox" id="C" name="C" value="C" ref={register} />
                        <label className="ml-2 mr-5" htmlFor="C">C</label>
                        <input type="checkbox" id="Cplus" name="Cplus" value="Cplus" ref={register} />
                        <label className="ml-2 mr-5" htmlFor="Cplus">C++</label>
                        <input type="checkbox" id="Java" name="Java" value="Java" ref={register} />
                        <label className="ml-2" htmlFor="Java">Java</label><br />
                        <input type="checkbox" id="Python" name="Python" value="Python" ref={register} />
                        <label className="ml-2 mr-5" htmlFor="Python">Python</label>
                        <input type="checkbox" id="JavaScript" name="JavaScript" value="JavaScript" ref={register} />
                        <label className="ml-2" htmlFor="JavaScript">JavaScript</label>
                        <br />
                        <small style={{ color: "red" }}>
                            {errors.C && errors.Cplus && errors.Java && errors.Python && errors.JavaScript && "Please Select Atleast One."}
                        </small>
                        {/* array.some */}

                    </div>

                    <div className="my-3">
                        <label className="mr-2 font-weight-bold ">Profile Picture</label><br />

                        <input type="file" name="image" accept=".jpeg, .jpg, .png" ref={register({ required: true })} />
                        <br />
                        <small style={{ color: "red" }}>
                            {errors.image && "Profile Picture required."}

                        </small>
                    </div>


                    <div className="my-4">
                        <input type="submit" value="Preview" />
                        {
                            (preview && <Preview User={user} fill={props.fill} Image={baseImage} />)
                        }
                        {
                            (preview && <div>
                                <button type="reset" onClick={onCancel}>Cancel</button>
                            </div>)
                        }
                    </div>

                </form>
            </div>
        </div >
    );
}
export default Create;
