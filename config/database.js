import mongoose from 'mongoose';
const uri = "mongodb+srv://paulorcarlos23:Roberto23@suportepsuportecluster.u2oar9u.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

//Arquivo de conexão com o banco de dados

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Conexão estabelecida com sucesso')
});

db.on('error', (err) => {
    console.error(`Erro na conexão com o MongoDB: ${err.message}`);
});

db.on('disconnected', () => {
    console.log('Conexão com o MongoDB desconectada');
});


export default mongoose;