import { createServer, Model } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export function server() {
  createServer({
    models: {
      transaction: Model,
    },
  
    routes() {
      this.namespace = "/api";
  
      this.get("/transaction", (schema) => {
        return schema.all("transaction");
      })
  
      this.post("/transaction", (schema, request) => {
        const dataRequest = JSON.parse(request.requestBody);
         const data = {
          ...dataRequest,
          createdAt: new Date,
          id: uuidv4()
        }
        return schema.create("transaction", data);
      });
    }
  })
}
