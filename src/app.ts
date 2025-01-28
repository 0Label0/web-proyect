import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.routes';
import path from 'path';
import { engine } from 'express-handlebars';

dotenv.config();
const app = express();

const PORT = process.env.PORT || '3000';

app.engine('hbs', engine({ 
    extname: '.hbs',
    defaultLayout: false,
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
})); 

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join('public')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor en: http://localhost:${PORT}`);
});