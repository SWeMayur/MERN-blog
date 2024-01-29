import express from 'express';

const app = express();

app.listen(30, () => {
    console.log('Server is running on port 3000!!');
});