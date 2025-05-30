const express = require (`express`);
require(`express-async-errors`);
const helmet =  require (`helmet`);
const productoRoutes = require (`./routes/productoRoutes`);
const errorHandler = require (`./middleware/errorHandler`);

const app =  express();

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultsrc: ["`self`"],
            scriptSrc: ["`self`","unsafe-inline"],

        }
}));