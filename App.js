import { initDatabase } from './src/database/database';

// Inicialize o banco de dados quando o app iniciar
useEffect(() => {
  initDatabase();
}, []); 