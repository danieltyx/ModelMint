const { Configuration, OpenAIApi } = require("openai");
const { openai_key } = require("../openaiConfig.js");



async function use_model(my_prompt = "What is the name of the person who wrote the book 'The Hunger Games'?"
, my_model = "text-davinci-002", userOpenaiKey) {

  const configuration = new Configuration({
    apiKey: openai_key,
  });
  const openai = new OpenAIApi(configuration);

  
    const response = await openai.createCompletion({
        prompt: my_prompt,
        model: my_model,
      });

    console.log('usemodelOpenAIkey',openai_key);

    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
  }

//   use_model();
  module.exports = { use_model };
