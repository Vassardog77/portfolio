import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from "openai"

function Chatbot(props) {

    const [Content, setContent] = useState("");

    const openai = new OpenAIApi(new Configuration ({
        apiKey: "insert api key here"
    }))

    useEffect(() => {
        openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content:`
            
            How many hidden layers does the gpt-3.5-turbo neural network have?

        `}]
        }).then(res =>{
            console.log(res.data.choices[0].message.content)
            setContent(res.data.choices[0].message.content)
        })
    }, []); 

    return (
        <div id='chatbot' className='section_parent'>
            <div className='heading'>Chatbot</div>
            <div>{Content}</div>
        </div>
    );
}

export default Chatbot;