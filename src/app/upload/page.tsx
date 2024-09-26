'use client'
import React from 'react';
import { useFormik } from 'formik';

export default function Upload() {
    // Formik setup
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            city: '',
            state: '',
            zip: '',
        },
        onSubmit: (values, {resetForm}) => {
            console.log('Form data', values);
            resetForm();
        },
    });

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Jane"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Doe"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="******************"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Albuquerque"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="state"
                            name="state"
                            onChange={formik.handleChange}
                            value={formik.values.state}
                        >
                            <option value="">Select State</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Texas">Texas</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
                            Zip
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="zip"
                            name="zip"
                            type="text"
                            placeholder="90210"
                            onChange={formik.handleChange}
                            value={formik.values.zip}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
