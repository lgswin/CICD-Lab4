module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "Hello, world!";
    
    context.res = {
        status: 200,
        body: responseMessage
    };
} 