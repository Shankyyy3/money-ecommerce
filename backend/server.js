const app=require("./app");
const connectDatabse=require("./config/database");

//Handling Uncaught Exception
process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the engine due to uncaught exception")
    process.exit(1)
})



//Connecting to DB
connectDatabse();


const server=app.listen(4000,()=>{
    console.log(`Server is working on https://localhost:4000`);
})

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the engine due to unhandled promise rejection")
    server.close(()=>{
        process.exit(1);
    })
})