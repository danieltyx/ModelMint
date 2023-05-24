async function lookupStatus(model_id) {
    const response = openai.listFineTunes().then((response) => {
        console.log("*********************************");
        console.log('fine_tuned_model', response.data.data.filter((item) => item.id === model_id)[0].fine_tuned_model);
        return response.data.data.filter((item) => item.id === model_id)[0].fine_tuned_model;

    }).catch((error) => {
        console.log(error);
    }
    );
}

module.exports = { lookupStatus };
