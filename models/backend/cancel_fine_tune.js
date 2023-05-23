// create a nodejs to call OPEN AI to cancel fine tune
//
const { Configuration, OpenAIApi } = require("openai");
const { openai_key } = require("./openaiConfig.js");

const configuration = new Configuration({
  apiKey: openai_key,
});
const openai = new OpenAIApi(configuration);

async function cancelFineTune(modelId) {
  try {
    const response = await openai.cancelFineTune(modelId);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

const modelId = "ft-ELEP9pQe25zzqBt4diCgcBng";
cancelFineTune(modelId);
