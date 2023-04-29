import mongoose, {connect} from 'mongoose';
const conectarBasesD = () => {
  const urlConexion= String (process.env.MONGO_URI);
  connect(urlConexion)
  .then(con => {
    console.log(`Conexión establecida con la base: ${urlConexion}`);
  })
  .catch(error =>{
    console.log(error); 
  });
};
export default conectarBasesD; 
