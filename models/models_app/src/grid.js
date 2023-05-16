import React from "react";
import './App.css';

export default function Grid() {
    const data = [
        { title: 'GPT-3', description: 'GPT-3 is an autoregressive language model that uses deep learning to produce human-like text.' },
        { title: 'GPT-4', description: 'GPT-4 is a larger and more advanced version of GPT-3 that can generate even more sophisticated text.' },
        { title: 'ChatGPT', description: 'ChatGPT is a special version of the GPT model that is designed for generating conversational responses.' },
        // Add more items as needed
      ];
    
      return (
        <div className="grid-container">
          {data.map((item, index) => (
            <div className="grid-item" key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      );
}
