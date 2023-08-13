const app = express();

const adminRouter = require('./routes/admin');

const shopRouter = require('./routes/shop');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/admin', adminRouter);

app.use('/shop',shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found!</h1>');
});

app.listen(3000);