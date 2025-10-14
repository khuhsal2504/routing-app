import React from 'react'
import { useForm } from 'react-hook-form'
export default function Contact() {
    let {register,handleSubmit, formState, getValues}=useForm()
        //register : to register indivisual input field and provide validations
        //handleSubmit : function that get called when we click on submit buttomn
        //formState : to handle errors
    function collectFormData(formData) //formData is just variable
    {
    console.log(formData);
    }
    return (
        <div className='d-flex justify-content-center mt-3'>
            <form className='w-50 border border-3 rounded p-3' onSubmit={handleSubmit(collectFormData)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UseName:</label>
                    <input type="text" className="form-control" id="username"
                {...register('username',{required:true,minLength:3, maxLength:10})}/>
                <div className="form-text text-danger">
                    {formState.errors.username && formState.errors.username.type==='required' && "UserName is required"}

                    {formState.errors.username && formState.errors.username.type==='minLength' && "Min 3 characters required"}

                    {formState.errors.username && formState.errors.username.type==='maxLength' && "Max 10 characters allowed"}
                </div>
                </div>
                <div className="mb-3">
                <label htmlFor="userage" className="form-label">UserAge:</label>
                <input type="number" className="form-control" id="userage"
                {...register('userage',{required:true,min:18, max:30})}/>
                <div className="form-text text-danger">
                    {formState.errors.userage && formState.errors.userage.type==='required' && "UserAge is required"}

                    {formState.errors.userage && formState.errors.userage.type==='min' && "Min age required is 18"}

                    {formState.errors.userage && formState.errors.userage.type==='max' && "Max age required is 30"}

                </div>
                </div>
                <div className="mb-3">
                <label htmlFor="password1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password1" {...register('password1',{required:true})}/>
                <div className="form-text text-danger">
                {formState.errors.password1 && formState.errors.password1.type==='required' && "Password is required"}
                </div>
                </div>
                <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="password2" {...register('password2',{required:true, validate: value => value === getValues('password1') || "Passwords do not match"})}/>
                <div className="form-text text-danger">
                {formState.errors.password2 && formState.errors.password2.type==='required' && "Confirm Password is required"}
                {formState.errors.password2 && formState.errors.password2.message}
                </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    )
}