import { useState } from "react"

export const Contact = () => {
    const [data, setData] = useState({
        username:"",
        email:"",
        message:""
    })

    const handleInputChange = (e)=>{
        let name = e.target.name
        let value = e.target.value

        setData({
            ...data, [name]:value
        })
    }

    const handleFormSubmit =(e)=>{
        e.preventDefault()
        console.log(data);
    }

    return <>
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form onSubmit={handleFormSubmit}>
                    <input className="form-control" type="text" required placeholder="Enter your name" name="username" value={data.username} onChange={handleInputChange} />

                    <input className="form-control" type="email" required placeholder="Enter your email" name="email" value={data.email} onChange={handleInputChange} />

                    <textarea name="message" className="form-control" placeholder="Enter your message" required rows="10" value={data.message} onChange={handleInputChange}></textarea>

                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    </>
}